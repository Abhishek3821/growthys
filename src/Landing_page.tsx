import { useEffect, useRef, useState, type ChangeEvent, type SubmitEvent } from 'react'
import Icon from './components/Icon'
import ServiceGraphic from './components/ServiceGraphic'
import { buildEnquiryMessage } from './enquiry-message'
import { Brand, Benefits, FaqList, Steps, ServicePanel } from './page-components'

export type ContentPair = { title: string; text: string }

export type ServiceDetail = {
  id: string
  service: string
  eyebrow: string
  title: string
  subtitle: string
  action: string
  introTitle: string
  intro: string[]
  cardsTitle: string
  cards: ContentPair[]
  prices?: { title: string; text: string }[]
  whyTitle: string
  benefits: ContentPair[]
  processTitle: string
  steps: ContentPair[]
  faqs: ContentPair[]
  closingTitle: string
  closingText: string
}

const offerCards = [
  {
    service: 'Digital Marketing Services',
    title: 'Digital Marketing Growth Pack',
    description: 'SEO for 10 keywords, Google Business Profile management, social media on 3-4 platforms, and Google & Meta ads management, with monthly reports',
    regular: '₹25,996 per month',
    price: '₹19,999',
    period: '/ month',
    bonus: 'Dedicated growth team and monthly strategy calls',
    featured: true
  },
  {
    service: 'IT Services',
    title: 'Website Launch Pack',
    description: 'A 5-7 page responsive WordPress website with SSL, speed optimization, contact form, WhatsApp integration and basic on-page SEO.',
    regular: '₹14,999 per project',
    price: '₹14,999',
    period: '/ project',
    bonus: 'One month of Google Business Profile management, worth ₹4,999',
    featured: false
  },
  {
    service: 'HRMS Software Development',
    title: 'HRMS Software Starter',
    description: 'Employee database, attendance, leave and payroll modules, built around your policies.',
    regular: 'Custom quote',
    price: 'Custom quote',
    period: 'Based on your requirements',
    bonus: 'Free data migration from Excel',
    featured: false
  },
  {
    service: 'CRM Software Development',
    title: 'CRM Software Starter',
    description: 'Lead capture from website and ads, sales pipeline, follow-up reminders and reports.',
    regular: 'Custom quote',
    price: 'Custom quote',
    period: 'Based on your requirements',
    bonus: 'Free website form integration',
    featured: false
  }
]

const serviceSummaries = [
  {
    id: 'digital-marketing',
    service: 'Digital Marketing Services',
    title: 'Digital Marketing Services',
    description: 'Get found, get clicks and get customers. We plan and run your marketing across search, social and paid ads, and report on the leads each channel brings.',
    features: [
      'Search Engine Optimization (SEO)',
      'Google and Meta ads (PPC)',
      'Social media marketing',
      'Google Business Profile and local SEO',
      'Content, creatives and ad copy',
      'GA4 and conversion tracking'
    ]
  },
  {
    id: 'it-services',
    service: 'IT Services',
    title: 'IT Services',
    description: 'Websites, online stores and custom web applications built to load fast, look sharp and convert visitors.',
    features: [
      'WordPress business websites',
      'Shopify e-commerce stores',
      'Custom coded web apps in PHP and JavaScript',
      'UI/UX design',
      'Hosting, SSL and deployment',
      'Maintenance and support'
    ]
  },
  {
    id: 'hrms-software',
    service: 'HRMS Software Development',
    title: 'HRMS Software Development',
    description: 'Replace spreadsheets with one HR system made for your company. Your team saves hours every month and employees get answers without chasing HR.',
    features: [
      'Employee records and documents',
      'Attendance and shift tracking',
      'Leave management and approvals',
      'Payroll with PF, ESI and TDS',
      'Recruitment and onboarding',
      'Employee self-service portal'
    ]
  },
  {
    id: 'crm-software',
    service: 'CRM Software Development',
    title: 'CRM Software Development',
    description: 'Stop losing leads you already paid for. Every enquiry is captured, assigned and followed up in one place.',
    features: [
      'Automatic lead capture from website and ads',
      'Lead assignment to your sales team',
      'Visual sales pipeline',
      'Follow-up tasks and reminders',
      'Quotes and invoices',
      'Sales reports and dashboards'
    ]
  }
]

const overviewSteps = [
  { title: 'Claim your offer.', text: 'Fill in the form and tell us which service you need.' },
  { title: 'Free consultation call.', text: 'We understand your business, goals and budget, then share a clear plan and quote.' },
  { title: 'We build and launch.', text: 'Our team executes your campaign or project and keeps you updated at every stage.' },
  { title: 'Measure and grow.', text: 'You get transparent reports, and we keep optimizing what works.' }
]

const overviewBenefits = [
  { title: 'Human + AI', text: 'Experienced specialists set the strategy. AI tools make research, testing and optimization faster.' },
  { title: 'One team, four services', text: 'Marketing, websites, HRMS and CRM under one roof, so everything works together.' },
  { title: 'Transparent pricing', text: 'You know the cost and scope before we start. No hidden fees.' },
  { title: 'Clear reporting', text: 'Regular reports show exactly what was done and what it delivered.' },
  { title: 'You own your work', text: 'Custom coded projects come with a complete source code handover.' },
  { title: 'Real people to talk to', text: 'A dedicated team you can call, not a ticket queue.' }
]

const overviewFaqs = [
  { title: 'What is included in the Digital Marketing Growth Pack?', text: 'SEO for up to 10 keywords, Google Business Profile management, social media management on 3-4 platforms and Google and Meta ads management. Ad spend is paid separately to the ad platforms.' },
  { title: 'How long is the offer valid?', text: 'Offer availability and validity are confirmed during consultation.' },
  { title: 'Can I choose more than one service?', text: 'Yes. Select your main service in the form and tell us about the rest on the call. We will prepare a combined quote.' },
  { title: 'How soon will I see results?', text: 'Paid ads can show results within one to two weeks. SEO usually takes three to six months. Website and software timelines are confirmed in your proposal.' },
  { title: 'How is HRMS and CRM pricing decided?', text: 'It depends on the modules, number of users and integrations you need. You get a fixed quote after a short discovery call.' },
  { title: 'Is there a long-term contract?', text: 'Marketing plans are billed monthly. Website and software projects are billed per project.' }
]

const serviceDetails: ServiceDetail[] = [
  {
    id: 'it-services',
    service: 'IT Services',
    eyebrow: 'IT Services',
    title: 'IT Services That Keep Your Business Running and Growing',
    subtitle: 'From custom software and web apps to hosting and ongoing support, Growthys builds and maintains the technology your team depends on every day.',
    action: 'Get a quote',
    introTitle: 'Technology Should Solve Problems, Not Create Them',
    intro: [
      'Most businesses outgrow their tools long before they replace them. Work gets stuck in spreadsheets, systems do not talk to each other, and small issues turn into daily delays.',
      'We design, build and support software around the way your business actually works. You get one team that understands both the technology and the growth goals behind it.'
    ],
    cardsTitle: 'Our IT Services',
    cards: [
      { title: 'Custom Software Development', text: 'Software built around your process, not the other way round. We plan, code and deliver tools your team will actually use.' },
      { title: 'Web Application Development', text: 'Secure, fast web apps hand-coded in PHP and JavaScript, from customer portals to internal dashboards.' },
      { title: 'Website Design & Development', text: 'Responsive business websites on WordPress or custom code, built for speed, search and conversions.' },
      { title: 'E-Commerce Development', text: 'Shopify and custom online stores with payment gateway, shipping and tax setup done for you.' },
      { title: 'UI/UX Design', text: 'Clean, intuitive interfaces designed from wireframe to final screen, so users find what they need quickly.' },
      { title: 'Integration & Automation', text: 'Connect your website, CRM, payment and messaging tools so data moves without manual entry.' },
      { title: 'Hosting & Deployment', text: 'Domain, hosting, SSL and launch handled end to end, with speed and security checks before go-live.' },
      { title: 'Maintenance & Support', text: 'Updates, backups, bug fixes and improvements after launch, so your systems stay reliable.' }
    ],
    whyTitle: 'Why Businesses Choose Growthys for IT',
    benefits: [
      { title: 'One team for build and growth', text: 'The people who build your product sit next to the people who market it. Your software is designed to bring in business, not just to function.' },
      { title: 'Clear scope, clear price', text: 'You see what will be built, how long it will take and what it costs before work starts. No hidden fees.' },
      { title: 'You own the code', text: 'Every custom project ends with a complete source code handover.' },
      { title: 'Support after launch', text: 'We stay available once you go live, with dedicated technical support and optional ongoing maintenance.' }
    ],
    processTitle: 'How We Work',
    steps: [
      { title: 'Discover & Plan.', text: 'We study your business, users and current systems, then agree on scope, timeline and cost.' },
      { title: 'Design & Build.', text: 'Our designers and developers create the product in stages, sharing progress as each part is ready.' },
      { title: 'Test & Launch.', text: 'We test across devices and browsers, fix issues, and deploy with security and speed checks.' },
      { title: 'Support & Improve.', text: 'After launch we monitor, maintain and add features as your business grows.' }
    ],
    faqs: [
      { title: 'What IT services does Growthys provide?', text: 'We build custom software, web applications, business websites and online stores. We also handle UI/UX design, integrations, hosting setup and ongoing maintenance.' },
      { title: 'How much does a project cost?', text: 'It depends on scope. Websites start at ₹14,999 and custom coded web projects at ₹24,999. Larger software projects are quoted after a short discovery call.' },
      { title: 'How long does development take?', text: 'Website and custom software timelines are confirmed during consultation and included in your proposal before work begins.' },
      { title: 'Will I own the source code?', text: 'Yes. Custom coded projects include a complete source code handover.' },
      { title: 'Do you provide support after launch?', text: 'Yes. Custom coded projects include 30 days of dedicated technical support, and ongoing maintenance plans are available.' }
    ],
    closingTitle: 'Have a Project in Mind?',
    closingText: 'Tell us what you want to build or fix. We will come back with a clear plan, timeline and quote.'
  },
  {
    id: 'digital-marketing',
    service: 'Digital Marketing Services',
    eyebrow: 'Digital Marketing Services',
    title: 'Digital Marketing That Turns Clicks Into Customers',
    subtitle: 'SEO, paid ads, social media and content, planned by people and sharpened by AI. Every campaign is measured by the leads and sales it brings in.',
    action: 'See pricing',
    introTitle: 'More Visibility Is Good. More Revenue Is Better.',
    intro: [
      'Rankings, reach and followers only matter when they turn into enquiries. We build your marketing around that one outcome.',
      'We start with your audience and competitors, choose the channels that fit your budget, and report on what each rupee delivers. No jargon, no guesswork.'
    ],
    cardsTitle: 'Our Digital Marketing Services',
    cards: [
      { title: 'Search Engine Optimization (SEO)', text: 'Keyword research, on-page fixes, technical audits and link building that grow organic traffic month after month.' },
      { title: 'Pay-Per-Click Advertising (PPC)', text: 'Google and Meta ad campaigns with precise targeting, conversion tracking and continuous A/B testing.' },
      { title: 'Social Media Marketing', text: 'Post design, copywriting and a steady schedule across Facebook, Instagram and LinkedIn to build trust and reach.' },
      { title: 'Google Business Profile & Local SEO', text: 'Profile optimization, regular posts and review management so nearby customers find you first on Maps.' },
      { title: 'Content Marketing & Design', text: 'Graphics, video scripts and ad copy that get attention and move people to act.' },
      { title: 'Web Setup & Analytics', text: 'Fast landing pages with GA4 and Tag Manager tracking, so every conversion is counted.' },
      { title: 'Conversion Rate Optimization (CRO)', text: 'Better layouts, user experience and lead forms that turn more of your visitors into buyers.' },
      { title: 'AEO & GEO', text: 'Content structured so AI assistants and generative search tools can understand and cite your brand.' }
    ],
    prices: [
      { title: 'SEO', text: '₹5,999 per month' },
      { title: 'Google Business Profile', text: '₹4,999 per month' },
      { title: 'Social Media Optimization', text: '₹4,999 per month' },
      { title: 'PPC / Paid Ads', text: '₹9,999 per month, or 30% of ad spend' }
    ],
    whyTitle: 'Why Growthys',
    benefits: [
      { title: 'Human strategy, AI speed', text: 'Our specialists set the direction. AI tools help us research, test and optimize faster.' },
      { title: 'Strategy built for you', text: 'Every plan starts with research into your business, audience and competitors. No templates.' },
      { title: 'Transparent reporting', text: 'You get regular reports showing rankings, spend, leads and what we are doing next.' },
      { title: 'Everything under one roof', text: 'SEO, ads, social, content, design and development work together as one team.' }
    ],
    processTitle: 'A Simple Process. Better Results.',
    steps: [
      { title: 'Discover & Plan.', text: 'We review your goals, audience, competitors and current digital presence, then build a custom strategy.' },
      { title: 'Strategy & Execute.', text: 'We launch campaigns across the channels that fit your business.' },
      { title: 'Launch & Optimize.', text: 'We monitor performance, analyze the data and keep improving results.' },
      { title: 'Measure & Grow.', text: 'We share clear insights and scale what works.' }
    ],
    faqs: [
      { title: 'How long does it take to see results?', text: 'Paid ads can produce measurable results within one to two weeks of launch. SEO usually takes three to six months to show significant gains.' },
      { title: 'Which service should I start with?', text: 'It depends on your goal. If you need leads quickly, start with paid ads. If you want lasting visibility, start with SEO. Most businesses do best with both.' },
      { title: 'How much should I budget?', text: 'Plans start at ₹4,999 per month. For paid ads, your ad spend is separate from our management fee.' },
      { title: 'Will I get reports?', text: 'Yes. Every plan includes regular reporting, monthly for SEO and social media and weekly for paid ads.' },
      { title: 'Do you work with small businesses?', text: 'Yes. Our starter plans are built for local and small businesses beginning their online growth.' }
    ],
    closingTitle: 'Ready to Grow Your Leads?',
    closingText: 'Tell us about your business and goals. We will recommend the right mix of channels and a plan that fits your budget.'
  },
  {
    id: 'hrms-software',
    service: 'HRMS Software Development',
    eyebrow: 'HRMS Software Development',
    title: 'Custom HRMS Software Built Around Your People and Policies',
    subtitle: 'Manage attendance, leave, payroll, hiring and performance in one system designed for the way your company works.',
    action: 'Request a demo',
    introTitle: 'HR Runs Better Without the Spreadsheets',
    intro: [
      'Attendance in one sheet, leave on WhatsApp, salary in another file. As your team grows, the manual work grows faster, and so do the errors.',
      'We build HRMS software that brings every HR task into one secure system. Your HR team saves hours each month, and employees get quick answers without chasing anyone.'
    ],
    cardsTitle: 'What Your HRMS Can Include',
    cards: [
      { title: 'Employee Database', text: 'One profile per employee with documents, job history, salary structure and contact details.' },
      { title: 'Attendance & Shift Management', text: 'Daily attendance, shifts, overtime and late marks, with support for biometric and mobile check-in.' },
      { title: 'Leave Management', text: 'Leave policies, balances, holiday calendars and approvals in a few clicks.' },
      { title: 'Payroll & Compliance', text: 'Salary calculation with PF, ESI, TDS and professional tax, plus payslips generated automatically.' },
      { title: 'Recruitment & Onboarding', text: 'Track openings, candidates and interviews, then onboard new hires with digital paperwork.' },
      { title: 'Performance Management', text: 'Set goals, run reviews and record feedback, so appraisals are based on facts.' },
      { title: 'Employee Self-Service', text: 'A mobile-friendly portal where staff apply for leave, download payslips and update details.' },
      { title: 'Reports & Dashboards', text: 'Headcount, attrition, attendance and payroll cost at a glance, exportable when you need them.' }
    ],
    whyTitle: 'Why Build Your HRMS With Growthys',
    benefits: [
      { title: 'Built for your policies', text: 'Your leave rules, shift patterns and salary structures are configured in, not worked around.' },
      { title: 'Pay for what you need', text: 'Start with the modules you need today and add more as your team grows.' },
      { title: 'Role-based access', text: 'HR, managers and employees each see only what they should, with every change logged.' },
      { title: 'Easy to use', text: 'A clean interface designed by our UI/UX team, so staff need little or no training.' },
      { title: 'Help moving your data', text: 'We import your existing employee records from Excel, so you do not start from zero.' }
    ],
    processTitle: 'From First Call to Go-Live',
    steps: [
      { title: 'Understand.', text: 'We map your HR processes, policies and pain points.' },
      { title: 'Design.', text: 'You approve screens and workflows before any code is written.' },
      { title: 'Build & Test.', text: 'We develop module by module and test with your real scenarios.' },
      { title: 'Launch & Train.', text: 'We migrate your data, train your HR team and go live.' },
      { title: 'Support.', text: 'We stay on hand for fixes, updates and new features.' }
    ],
    faqs: [
      { title: 'Why choose custom HRMS over ready-made software?', text: 'Ready-made tools make you adapt to their workflow and often charge per employee. A custom HRMS fits your policies exactly and can grow with you.' },
      { title: 'How long does it take to build?', text: 'It depends on the modules you choose. The timeline for your attendance, leave and payroll modules is confirmed during consultation.' },
      { title: 'Can it connect with our biometric machine or accounting software?', text: 'Yes. We integrate with common biometric devices and accounting tools such as Tally. We confirm compatibility during the discovery call.' },
      { title: 'Is our employee data secure?', text: 'Access is controlled by role, passwords are encrypted and data is backed up regularly. Hosting options are discussed during planning.' },
      { title: 'How much does HRMS development cost?', text: 'Cost depends on modules, number of users and integrations. We share a fixed quote after understanding your requirements.' },
      { title: 'Do you provide training and support?', text: 'Yes. Every project includes training for your HR team. The post-launch support period is confirmed during consultation, with ongoing maintenance available.' }
    ],
    closingTitle: 'Give Your HR Team Their Time Back',
    closingText: 'Tell us how many employees you have and what slows your HR team down. We will show you what your HRMS could look like.'
  },
  {
    id: 'crm-software',
    service: 'CRM Software Development',
    eyebrow: 'CRM Software Development',
    title: 'Custom CRM Software That Never Lets a Lead Slip Away',
    subtitle: 'Capture every enquiry, follow up on time and see your whole sales pipeline in one place, in a CRM built around how your team sells.',
    action: 'Request a demo',
    introTitle: 'You Paid for Those Leads. Make Every One Count.',
    intro: [
      'Leads arrive from your website, ads, calls and WhatsApp. Without one system, some get a late reply and some get none at all.',
      'We build CRM software that collects every lead automatically, assigns it to the right person and reminds them to follow up. You see what is working, who is closing and where deals get stuck.'
    ],
    cardsTitle: 'What Your CRM Can Include',
    cards: [
      { title: 'Lead Capture', text: 'Leads from your website forms, Google and Meta ads and WhatsApp land in the CRM automatically.' },
      { title: 'Lead Assignment', text: 'New enquiries go to the right salesperson instantly, by product, location or round robin.' },
      { title: 'Sales Pipeline', text: 'A visual board of every deal by stage, so you always know what is closing this month.' },
      { title: 'Follow-Ups & Reminders', text: 'Tasks, call notes and alerts that make sure no enquiry is forgotten.' },
      { title: 'Contact Management', text: 'Complete customer history, including calls, messages, quotes and purchases, on one screen.' },
      { title: 'Quotes & Invoices', text: 'Create and send quotations and invoices in minutes, linked to the right deal.' },
      { title: 'Workflow Automation', text: 'Automatic emails, messages and status updates for routine steps, freeing your team to sell.' },
      { title: 'Reports & Dashboards', text: 'Lead source, conversion rate, team performance and revenue in real time.' }
    ],
    whyTitle: 'Why Build Your CRM With Growthys',
    benefits: [
      { title: 'Marketing and CRM, connected', text: 'We run lead campaigns every day. Your CRM is built to show which ads and keywords bring real customers.' },
      { title: 'Fits your sales process', text: 'Your stages, fields and approvals are built in. You do not bend your process to fit the software.' },
      { title: 'No per-user licence trap', text: 'A custom CRM is yours. Add team members without a rising monthly bill per seat.' },
      { title: 'Simple for your sales team', text: 'A clean, mobile-friendly interface that people will actually open and update.' },
      { title: 'Integrations that matter', text: 'We connect your CRM with payment gateways, email, WhatsApp and accounting tools.' }
    ],
    processTitle: 'From First Call to Go-Live',
    steps: [
      { title: 'Understand.', text: 'We map how leads arrive, how your team sells and where deals are lost.' },
      { title: 'Design.', text: 'You approve the pipeline, screens and reports before development starts.' },
      { title: 'Build & Test.', text: 'We develop in stages and test with your real leads and scenarios.' },
      { title: 'Launch & Train.', text: 'We import your existing contacts, train your team and go live.' },
      { title: 'Support.', text: 'We stay available for fixes, updates and new features.' }
    ],
    faqs: [
      { title: 'Why build a custom CRM instead of buying one?', text: 'Off-the-shelf CRMs charge per user and carry features you never use. A custom CRM matches your sales process and has no per-seat fee.' },
      { title: 'How long does CRM development take?', text: 'It depends on features and integrations. The timeline for your lead capture, pipeline and follow-up modules is confirmed during consultation.' },
      { title: 'Can it capture leads from my ads and website automatically?', text: 'Yes. We connect your website forms and Google and Meta lead campaigns, so every enquiry reaches your team within moments.' },
      { title: 'Can we move our existing data from Excel or another CRM?', text: 'Yes. We import your contacts, leads and deal history during setup.' },
      { title: 'Will it work on mobile?', text: 'Yes. The CRM is fully responsive, so your sales team can update leads from the field.' },
      { title: 'How much does it cost?', text: 'Cost depends on modules, users and integrations. We share a fixed quote after a short discovery call.' }
    ],
    closingTitle: 'Turn More Enquiries Into Customers',
    closingText: 'Tell us how your leads come in and how your team follows up today. We will show you what a CRM built for your business would look like.'
  }
]

const copyrightYear = new Date().getFullYear()
const navLinks = [
  { href: '#top', label: 'Home' },
  { href: '#offers', label: 'Offers' },
  { href: '#services', label: 'Our Services' },
  { href: '#process', label: 'Process' },
  { href: '#why-choose', label: 'Why Choose' },
]

export default function GrowthysLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#top')
  useEffect(() => {
    const sections = navLinks.map(link => document.querySelector(link.href)).filter((section): section is Element => section !== null)
    const updateActiveSection = () => {
      let current = '#top'
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 150) current = `#${section.id}`
      }
      setActiveSection(current)
    }
    const expandHashTarget = () => {
      const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)))
      if (target instanceof HTMLDetailsElement) target.open = true
      else if (target?.closest('details') instanceof HTMLDetailsElement) target.closest('details')!.open = true
    }
    const closeDropdown = (event: MouseEvent) => {
      if (event.target instanceof Node && !document.querySelector('.nav-services')?.contains(event.target)) {
        document.querySelector('.nav-services details')?.removeAttribute('open')
      }
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') document.querySelector('.nav-services details')?.removeAttribute('open')
    }
    expandHashTarget()
    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('hashchange', expandHashTarget)
    document.addEventListener('click', closeDropdown)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('hashchange', expandHashTarget)
      document.removeEventListener('click', closeDropdown)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [])
  const [showMobileCta, setShowMobileCta] = useState(false)
  useEffect(() => {
    const hero = document.querySelector('.hero-copy')
    const form = document.getElementById('lead-form')
    if (!hero || !form) return
    const observer = new IntersectionObserver(() => {
      const heroBounds = hero.getBoundingClientRect()
      const formBounds = form.getBoundingClientRect()
      setShowMobileCta(heroBounds.bottom <= 68 && (formBounds.bottom <= 68 || formBounds.top >= window.innerHeight))
    }, { rootMargin: '-68px 0px 0px 0px' })
    observer.observe(hero)
    observer.observe(form)
    return () => observer.disconnect()
  }, [])
  const [enquiryPrepared, setEnquiryPrepared] = useState(false)
  const [formData, setFormData] = useState({ name: '', city: '', state: '', country: 'India', phone: '', email: '', service: 'Digital Marketing Services', website: '' })
  const menuButton = useRef<HTMLButtonElement>(null)
  const selectedOffer = offerCards.find(offer => offer.service === formData.service) ?? offerCards[0]
  const message = buildEnquiryMessage(formData, selectedOffer)
  const whatsappUrl = `https://wa.me/917900351135?text=${encodeURIComponent(message)}`
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setFormData(previous => ({ ...previous, [name]: value }))
    setEnquiryPrepared(false)
  }
  const choose = (service: string) => {
    setFormData(previous => ({ ...previous, service }))
    setEnquiryPrepared(false)
    setMenuOpen(false)
  }
  const openService = (id: string) => {
    const panel = document.getElementById(id)
    if (panel instanceof HTMLDetailsElement) panel.open = true
    setMenuOpen(false)
  }
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEnquiryPrepared(true)
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div id="top" className="site">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header" onKeyDown={event => { if (event.key === 'Escape') { setMenuOpen(false); menuButton.current?.focus() } }}>
        <div className="container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">{navLinks.map(link => link.href === '#services' ? <div className="nav-services" key={link.href}><a href={link.href} aria-current={activeSection === link.href ? 'location' : undefined}>{link.label}</a><details><summary aria-label="Browse all services"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></summary><div className="nav-dropdown">{serviceDetails.map(detail => <a key={detail.id} href={`#${detail.id}`} onClick={event => { openService(detail.id); event.currentTarget.closest('details')?.removeAttribute('open') }}>{detail.eyebrow}<Icon name="arrow" /></a>)}</div></details></div> : <a href={link.href} key={link.href} aria-current={activeSection === link.href ? 'location' : undefined}>{link.label}</a>)}</nav>
          <a className="button header-call" href="tel:+917900351135">Book a call <Icon name="phone" /></a>
          <button className="menu-button" ref={menuButton} type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
        </div>
        <nav className="mobile-nav container" id="mobile-nav" aria-label="Mobile navigation" hidden={!menuOpen}>{navLinks.map(link => <a href={link.href} key={link.href} aria-current={activeSection === link.href ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{link.label}<Icon name="arrow" /></a>)}{serviceDetails.map(detail => <a className="mobile-service" href={`#${detail.id}`} key={detail.id} onClick={() => openService(detail.id)}>{detail.eyebrow}</a>)}</nav>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="offer-badge"><span />Limited-Time Offer</span>
              <h1 id="hero-heading">Get ₹25,996 Worth of Complete Digital Marketing Every Month For Just <strong>₹19,999!</strong></h1>
              <p className="hero-description">Want to grow your business online without spending a fortune? Claim this offer, or choose IT services, HRMS or CRM software in the form, and our team will contact you to discuss your requirements.</p>
              <a className="button hero-button" href="#lead-form" onClick={() => choose('Digital Marketing Services')}>Claim My ₹19,999 Package <Icon name="arrow" /></a>
              <ul className="trust-list"><li><Icon name="check" />No hidden fees</li><li><Icon name="check" />Transparent monthly reports</li><li><Icon name="check" />Delhi-based team since 2022</li></ul>
            </div>
            <form id="lead-form" className="lead-form" onSubmit={handleSubmit}>
              <div className="form-heading"><h2>Claim Your Offer</h2><p className="selected-package" aria-live="polite"><span>{selectedOffer.title}</span><strong>{selectedOffer.price}{selectedOffer.price !== 'Custom quote' ? ` ${selectedOffer.period}` : ''}</strong></p></div>
              <div className="form-grid">
                <label>Full Name <span>*</span><input name="name" autoComplete="name" placeholder="Your full name" value={formData.name} onChange={handleChange} required maxLength={100} /></label>
                <label>Phone Number <span>*</span><input type="tel" name="phone" autoComplete="tel" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} required pattern="[+]?[0-9][0-9 \-]{6,19}" title="Include your country code, for example +91 98765 43210." /></label>
                <label className="field-full">Email Address <span>*</span><input type="email" name="email" autoComplete="email" placeholder="you@yourbusiness.com" value={formData.email} onChange={handleChange} required maxLength={254} /></label>
                <label>City <span>*</span><input name="city" autoComplete="address-level2" placeholder="Your city" value={formData.city} onChange={handleChange} required maxLength={100} /></label>
                <label>State <span>*</span><input name="state" autoComplete="address-level1" placeholder="Your state" value={formData.state} onChange={handleChange} required maxLength={100} /></label>
                <label>Country <span>*</span><select name="country" autoComplete="country-name" value={formData.country} onChange={handleChange} required>{['India', 'United Arab Emirates', 'United States', 'United Kingdom', 'Canada', 'Australia', 'Singapore', 'Other'].map(country => <option key={country}>{country}</option>)}</select></label>
                <label>Do you have a business website? <span>*</span><select name="website" aria-label="Do you have a business website?" value={formData.website} onChange={handleChange} required><option value="" disabled>Select an option</option><option>Yes</option><option>No</option></select></label>
                <label className="field-full">Select Service <span>*</span><select name="service" value={formData.service} onChange={handleChange} required>{[...serviceSummaries].sort((a, b) => Number(b.id === 'it-services') - Number(a.id === 'it-services')).map(service => <option key={service.id} value={service.service}>{service.title}</option>)}</select></label>
              </div>
              <button className="button form-submit" type="submit">Claim My Offer <Icon name="arrow" /></button>
              <p className="form-privacy"><Icon name="shield" />We only use your details to contact you about this enquiry.</p>
              <p className="form-note">Opens WhatsApp. Review and send to submit your enquiry.</p>
              {enquiryPrepared && <div className="enquiry-status" role="status"><strong>Your enquiry is ready.</strong><p>Review and send your details on WhatsApp to submit your enquiry.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Continue on WhatsApp</a></div>}
            </form>
          </div>
        </section>
        <section className="section offers-section" id="offers"><div className="container">
          <div className="section-heading"><h2>Pick the Offer That Fits Your Business</h2><p>Four services, four clear offers. Every package comes with a dedicated team and a fixed scope agreed before work starts.</p></div>
          <div className="offer-grid">{offerCards.map(offer => <article className={`offer-card${offer.featured ? ' featured' : ''}`} key={offer.service}><span className="service-label">{offer.service}</span><h3>{offer.title}</h3><p className="offer-description">{offer.description}</p><div className="offer-pricing"><p className={offer.featured ? 'regular-price' : ''}>{offer.regular === offer.price ? '\u00a0' : offer.regular}</p><strong>{offer.price}</strong><span>{offer.period}</span></div><a className={`button ${offer.featured ? 'button-white' : 'button-secondary'}`} href="#lead-form" onClick={() => choose(offer.service)}>Claim My Offer <Icon name="arrow" /></a><p className="offer-bonus"><Icon name="check" />{offer.bonus}</p></article>)}</div>
          <p className="offer-footnote">Need an online store or custom-coded web app? Shopify stores start at <strong>₹19,999</strong> and custom coded projects at <strong>₹24,999.</strong> <a href="#lead-form" onClick={() => choose('IT Services')}>Claim My Offer</a></p>
        </div></section>
        <section className="section" id="services"><div className="container"><div className="section-heading"><h2>Everything You Need to Build, Automate and Scale</h2></div><div className="services-grid">{serviceSummaries.map((service, index) => <article className="service-card" key={service.id}><ServiceGraphic service={service.id} /><span className="service-icon"><Icon name={index === 0 ? 'growth' : index === 1 ? 'web' : index === 2 ? 'people' : 'pipeline'} /></span><h3>{service.title}</h3><p>{service.description}</p><ul>{service.features.map(feature => <li key={feature}><Icon name="check" />{feature}</li>)}</ul><a className="text-link" href={`#${service.id}`} onClick={() => openService(service.id)}>Explore this service <Icon name="arrow" /></a></article>)}</div></div></section>
        <section className="section process-section" id="process"><div className="container"><div className="section-heading"><h2>A Simple Process. Smarter Execution. Better Results.</h2><a className="text-link" href="#lead-form">Claim My Offer <Icon name="arrow" /></a></div><Steps items={overviewSteps} /></div></section>
        <section className="section why-section" id="why-choose"><div className="container"><div className="section-heading"><h2>Why Businesses Choose Growthys</h2><a className="button button-white" href="tel:+917900351135">Book a call <Icon name="phone" /></a></div><Benefits items={overviewBenefits} /></div></section>
        <section className="section"><div className="container faq-layout"><div><h2>Frequently Asked Questions</h2><p>Have something else on your mind?</p><a className="text-link" href="tel:+917900351135">Call 7900351135 <Icon name="phone" /></a></div><FaqList items={overviewFaqs} /></div></section>
        <section className="section service-details-section" id="service-details"><div className="container"><div className="section-heading"><h2>Explore Our Services</h2><p>Services, modules, process and answers for your next project.</p></div><nav className="service-tabs" aria-label="Explore service details">{serviceDetails.map(detail => <a href={`#${detail.id}`} onClick={() => openService(detail.id)} key={detail.id}>{detail.eyebrow}<Icon name="arrow" /></a>)}</nav><div className="service-panels">{serviceDetails.map(detail => <ServicePanel detail={detail} choose={choose} key={detail.id} />)}</div></div></section>
        <section className="section closing-section"><div className="container closing-inner"><div><h2>Ready to Grow? Claim Your Offer Today.</h2><p>Tell us what your business needs. We will come back with a clear plan, timeline and price.</p></div><div className="button-row"><a className="button" href="#lead-form">Claim My Offer <Icon name="arrow" /></a><a className="button button-secondary" href="tel:+917900351135">Call 7900351135 <Icon name="phone" /></a></div></div></section>
      </main>
      {showMobileCta && <aside className="mobile-cta" aria-label="Digital marketing offer"><div><span>Limited-time offer</span><strong>₹19,999 <small>/ month</small></strong></div><a className="button" href="#lead-form" onClick={() => choose('Digital Marketing Services')}>Claim Now <Icon name="arrow" /></a></aside>}
      <footer className="site-footer"><div className="container"><div className="footer-top"><Brand /><p>Marketing, websites, HRMS &amp; CRM. One team in your corner.</p><a className="text-link" href="tel:+917900351135">Book a call <Icon name="arrow" /></a></div><nav aria-label="Footer services">{serviceDetails.map(detail => <a href={`#${detail.id}`} onClick={() => openService(detail.id)} key={detail.id}>{detail.eyebrow}</a>)}</nav><div className="footer-bottom"><span>© {copyrightYear} Growthys. All rights reserved.</span><span>Delhi-based team since 2022.</span><a href="#top">Back to top ↑</a></div></div></footer>
    </div>
  )
}
