import { readFileSync, writeFileSync } from 'node:fs'

// Extract the user-provided copy. Editorial notes and SEO specifications are
// source metadata, rather than customer-facing landing page text.
const source = readFileSync(process.argv[2], 'utf8')
const lines = source.split(/\r?\n/).map(line => line.trim()).filter(Boolean)
const pageStarts = lines.flatMap((line, index) => /^Page \d:/.test(line) ? [index] : [])
const clean = text => text
  .replace('with support for [biometric and mobile check-in]', 'with biometric and mobile check-in options confirmed during discovery')
  .replace('[Yes. We integrate with common biometric devices and accounting tools such as Tally.]', 'Biometric device and accounting integrations, including Tally, are assessed during discovery.')
  .replace('[payment gateways, email, WhatsApp and accounting tools]', 'payment gateways, email, WhatsApp and accounting tools, subject to compatibility confirmed during discovery')
  .replace('and [WhatsApp]', 'and WhatsApp (subject to integration compatibility)')
  .replace('A business website typically takes [X weeks].', 'Your business website delivery timeline is confirmed after we understand the scope.')
  .replace('A core system with attendance, leave and payroll typically takes [X weeks].', 'The delivery timeline for attendance, leave and payroll modules is confirmed in your proposal.')
  .replace('A core CRM with lead capture, pipeline and follow-ups typically takes [X weeks].', 'The delivery timeline for lead capture, pipeline and follow-ups is confirmed in your proposal.')
  .replace('and [X days] of post-launch support', 'and a post-launch support period agreed in your proposal')
  .replace('passwords are encrypted', 'passwords are securely hashed')
const pairs = rows => rows.map(row => {
  const [title, ...text] = row.split('\t')
  if (!text.length) throw new Error(`Missing table cells: ${row}`)
  return { title: clean(title), text: clean(text.join(' ')) }
})
const details = pageStarts.map((start, index) => {
  const page = lines.slice(start, pageStarts[index + 1] ?? lines.length)
  const at = name => page.indexOf(name)
  const field = prefix => clean(page.find(line => line.startsWith(prefix)).slice(prefix.length).trim())
  const cardStart = Math.max(at('Service cards'), at('Module cards'))
  const why = at('Why Growthys')
  const process = at('Process')
  const faq = at('FAQ')
  const closing = at('Closing CTA')
  const prices = at('Starting prices')
  const serviceNames = ['IT Services', 'Digital Marketing', 'HRMS', 'CRM']
  const ids = ['it-services', 'digital-marketing-services', 'hrms-software-development', 'crm-software-development']
  return {
    id: ids[index], service: serviceNames[index], eyebrow: field('Eyebrow:'),
    title: field('H1:'), subtitle: field('Subheading:'),
    introTitle: page[at('Intro') + 1].replace('H2: ', ''),
    intro: page.slice(at('Intro') + 2, cardStart).map(clean),
    cardsTitle: page[cardStart + 1].replace('H2: ', ''),
    cards: pairs(page.slice(cardStart + 3, prices >= 0 ? prices : why)),
    ...(prices >= 0 ? { prices: pairs(page.slice(prices + 3, why - 1)) } : {}),
    whyTitle: page[why + 1].replace('H2: ', ''),
    benefits: pairs(page.slice(why + 3, process)),
    processTitle: page[process + 1].replace('H2: ', ''),
    steps: page.slice(process + 2, faq).map(line => {
      const match = line.match(/^\d+\.\s+([^.]+)\.\s*(.*)$/)
      if (!match) throw new Error(`Missing process step: ${line}`)
      return { title: match[1], text: clean(match[2]) }
    }),
    faqs: page.slice(faq + 1, closing).map(line => {
      const end = line.indexOf('?')
      if (end < 0) throw new Error(`Missing FAQ question: ${line}`)
      return { title: line.slice(0, end + 1), text: clean(line.slice(end + 1).trim()) }
    }),
    closingTitle: page[closing + 1].replace('H2: ', ''),
    closingText: clean(page[closing + 2]),
    action: index > 1 ? 'Request a demo' : 'Get a quote',
  }
})

if (details.length !== 4) throw new Error('Expected four complete service sections')
for (const detail of details) {
  if (detail.cards.length !== 8 || detail.faqs.length < 5 || detail.benefits.length < 4) {
    throw new Error(`Incomplete service content: ${detail.service}`)
  }
}
const type = `export type ContentPair = { title: string; text: string }
export type ServiceDetail = {
  id: string; service: string; eyebrow: string; title: string; subtitle: string;
  introTitle: string; intro: string[]; cardsTitle: string; cards: ContentPair[];
  prices?: ContentPair[]; whyTitle: string; benefits: ContentPair[];
  processTitle: string; steps: ContentPair[]; faqs: ContentPair[];
  closingTitle: string; closingText: string; action: string;
}

`
writeFileSync('src/landing-content.ts', type + 'export const serviceDetails: ServiceDetail[] = ' + JSON.stringify(details, null, 2) + '\n')
console.log(details.map(detail => `${detail.service}: ${detail.cards.length} modules, ${detail.benefits.length} benefits, ${detail.steps.length} steps, ${detail.faqs.length} FAQs${detail.prices ? `, ${detail.prices.length} pricing plans` : ''}`).join('\n'))
