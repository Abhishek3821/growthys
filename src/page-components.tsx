import Icon from './components/Icon'
import type { ContentPair, ServiceDetail } from './Landing_page'

export function Brand() {
  return <a className="brand" href="#top" aria-label="Growthys home"><img src="/logo.png" width="180" height="36" alt="Growthys" /></a>
}

export function ToggleIcon() {
  return <svg className="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M5 12h14" /><path className="toggle-vertical" d="M12 5v14" /></svg>
}

export function FaqList({ items }: { items: ContentPair[] }) {
  return <div className="faq-list">{items.map(item => <details key={item.title}><summary>{item.title}<span data-faq-indicator><ToggleIcon /></span></summary><p>{item.text}</p></details>)}</div>
}

export function Benefits({ items }: { items: ContentPair[] }) {
  return <div className="benefit-grid" data-benefits>{items.map(item => <article key={item.title}><Icon name="check" /><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
}

export function Steps({ items }: { items: ContentPair[] }) {
  return <ol className="steps">{items.map((item, index) => <li key={item.title}><span className="step-number">{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.text}</p></li>)}</ol>
}

export function ServicePanel({ detail, choose }: { detail: ServiceDetail; choose: (service: string) => void }) {
  return <details className="service-panel" id={detail.id} data-service-panel>
    <summary><div><span className="service-label">{detail.eyebrow}</span><h3>{detail.title}</h3><p>{detail.subtitle}</p></div><span className="panel-toggle"><ToggleIcon /></span></summary>
    <div className="panel-content">
      <div className="button-row"><a className="button" href="tel:+917900351135">Book a call <Icon name="phone" /></a><a className="button button-secondary" href={detail.prices ? '#marketing-plans' : '#lead-form'} onClick={() => choose(detail.service)}>{detail.action}<Icon name="arrow" /></a></div>
      <div className="service-intro"><h4>{detail.introTitle}</h4><div>{detail.intro.map(text => <p key={text}>{text}</p>)}</div></div>
      <section><h4>{detail.cardsTitle}</h4><div className="module-grid">{detail.cards.map(card => <article data-module-card key={card.title}><h5>{card.title}</h5><p>{card.text}</p></article>)}</div></section>
      {detail.prices && <section className="monthly-plans" id="marketing-plans"><h4>Simple Monthly Plans</h4><div>{detail.prices.map(price => <article data-monthly-plan key={price.title}><h5>{price.title}</h5><p>{price.text}</p></article>)}</div><p>Ad spend is separate from management fees.</p><a className="text-link" href="#lead-form" onClick={() => choose(detail.service)}>Discuss a plan <Icon name="arrow" /></a></section>}
      <section><h4>{detail.whyTitle}</h4><Benefits items={detail.benefits} /></section>
      <section><h4>{detail.processTitle}</h4><Steps items={detail.steps} /></section>
      <section><h4>Frequently Asked Questions</h4><FaqList items={detail.faqs} /></section>
      <div className="service-closing"><div><h4>{detail.closingTitle}</h4><p>{detail.closingText}</p></div><a className="button" href="#lead-form" onClick={() => choose(detail.service)}>{detail.action}<Icon name="arrow" /></a></div>
    </div>
  </details>
}
