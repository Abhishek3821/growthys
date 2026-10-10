import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { createServer } from 'vite'
import ts from 'typescript'

// Read the copy used by the current page, rather than obsolete content files.
const sourceFile = ts.createSourceFile('Landing_page.tsx', readFileSync('src/Landing_page.tsx', 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)
const staticValue = node => {
  if (ts.isStringLiteralLike(node)) return node.text
  if (node.kind === ts.SyntaxKind.TrueKeyword) return true
  if (node.kind === ts.SyntaxKind.FalseKeyword) return false
  if (ts.isNumericLiteral(node)) return Number(node.text)
  if (ts.isArrayLiteralExpression(node)) return node.elements.map(staticValue)
  if (ts.isObjectLiteralExpression(node)) return Object.fromEntries(node.properties.map(property => {
    assert(ts.isPropertyAssignment(property), 'Content must use static properties')
    return [property.name.text, staticValue(property.initializer)]
  }))
  if (ts.isAsExpression(node) || ts.isSatisfiesExpression(node) || ts.isParenthesizedExpression(node)) return staticValue(node.expression)
  throw new Error('Expected static content: ' + node.getText(sourceFile))
}
const content = {}
const names = ['serviceDetails', 'serviceSummaries', 'offerCards', 'overviewBenefits', 'overviewFaqs', 'overviewSteps']
for (const statement of sourceFile.statements) {
  if (!ts.isVariableStatement(statement)) continue
  for (const declaration of statement.declarationList.declarations) {
    if (ts.isIdentifier(declaration.name) && names.includes(declaration.name.text)) content[declaration.name.text] = staticValue(declaration.initializer)
  }
}
for (const name of names) assert(Array.isArray(content[name]), `Missing current page content: ${name}`)
const { serviceDetails, serviceSummaries, offerCards, overviewBenefits, overviewFaqs, overviewSteps } = content

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
try {
  const { default: LandingPage } = await server.ssrLoadModule('/src/Landing_page.tsx')
  const html = renderToStaticMarkup(React.createElement(LandingPage))
  const normalize = text => text.replace(/\s+/g, ' ').trim()
  const text = normalize(html.replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>'))
  const contains = copy => assert(text.includes(normalize(copy)), `Missing rendered copy: ${copy}`)
  for (const detail of serviceDetails) {
    for (const copy of [detail.title, detail.subtitle, detail.introTitle, ...detail.intro, detail.cardsTitle, detail.whyTitle, detail.processTitle, detail.closingTitle, detail.closingText]) contains(copy)
    for (const pair of [...detail.cards, ...detail.benefits, ...detail.steps, ...detail.faqs, ...(detail.prices ?? [])]) { contains(pair.title); contains(pair.text) }
  }
  for (const pair of [...overviewBenefits, ...overviewFaqs, ...overviewSteps]) { contains(pair.title); contains(pair.text) }
  for (const service of serviceSummaries) { contains(service.title); contains(service.description); service.features.forEach(contains) }
  for (const offer of offerCards) { contains(offer.title); contains(offer.description); contains(offer.price); contains(offer.bonus) }
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1])
  assert.equal(new Set(ids).size, ids.length, 'Duplicate section IDs')
  for (const match of html.matchAll(/\shref="#([^"]+)"/g)) assert(ids.includes(match[1]), `Broken section link: ${match[1]}`)
  assert.equal((html.match(/data-module-card=/g) ?? []).length, 32)
  assert.equal((html.match(/data-faq-indicator=/g) ?? []).length, 28)
  assert.equal((html.match(/data-monthly-plan=/g) ?? []).length, 4)
  assert.equal((html.match(/data-service-panel=/g) ?? []).length, 4)
  assert.equal((html.match(/<input /g) ?? []).length, 5)
  assert.equal((html.match(/<select /g) ?? []).length, 3)
  assert(!/\[X weeks\]|\[X days\]|\[date\]|₹__/.test(text), 'Unresolved publishing placeholders')
  assert(!text.includes('Confirm before publishing') && !text.includes('How to use this document'), 'Editorial notes appeared on the public page')
  assert(!text.includes('Your offer is reserved'), 'An enquiry must not claim a confirmed reservation')
  const shell = readFileSync('index.html', 'utf8')
  assert(shell.includes('Digital Marketing, IT, HRMS &amp; CRM Offers'))
  assert(shell.includes('digital marketing from ₹4,999/month'))
  console.log('PASS: all supplied service copy renders; 32 modules, 28 FAQs, 4 plans, 4 service panels, 8 labelled fields, unique anchors and valid metadata. No unresolved publishing placeholders or editorial notes.')
} finally {
  await server.close()
}
