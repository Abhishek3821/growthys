import { useRef, useState, type ChangeEvent, type SubmitEvent } from 'react'
import Icon from './components/Icon'

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
    price: '₹29,999',
    period: 'Starting at',
    bonus: 'Free data migration from Excel',
    featured: false
  },
  {
    service: 'CRM Software Development',
    title: 'CRM Software Starter',
    description: 'Lead capture from website and ads, sales pipeline, follow-up reminders and reports.',
    regular: 'Custom quote',
    price: '₹29,999',
    period: 'Starting at',
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
  { title: 'How long is the offer valid?', text: 'The offer is open until October 31, 2026. Fill in the form to reserve your price.' },
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
      { title: 'How long does development take?', text: 'A business website typically takes 2 to 4 weeks. Custom software timelines depend on features and are confirmed in your proposal before work begins.' },
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
      { title: 'PPC / Paid Ads', text: '₹9,999 per month' }
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
      { title: 'How long does it take to build?', text: 'It depends on the modules you choose. A core system with attendance, leave and payroll typically takes 4 to 6 weeks.' },
      { title: 'Can it connect with our biometric machine or accounting software?', text: 'Yes. We integrate with common biometric devices and accounting tools such as Tally. We confirm compatibility during the discovery call.' },
      { title: 'Is our employee data secure?', text: 'Access is controlled by role, passwords are encrypted and data is backed up regularly. Hosting options are discussed during planning.' },
      { title: 'How much does HRMS development cost?', text: 'Cost depends on modules, number of users and integrations. We share a fixed quote after understanding your requirements.' },
      { title: 'Do you provide training and support?', text: 'Yes. Every project includes training for your HR team and 30 days of post-launch support, with ongoing maintenance available.' }
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
      { title: 'How long does CRM development take?', text: 'It depends on features and integrations. A core CRM with lead capture, pipeline and follow-ups typically takes 4 to 6 weeks.' },
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

function Brand() {
  return <a className="cursor-pointer inline-flex items-center text-[26px] leading-none font-extrabold tracking-[-1.4px] min-[801px]:text-[29px]" href="#top" aria-label="Growthys home"><span className="mr-[9px] grid size-[31px] place-items-center rounded-[10px_10px_10px_2px] bg-[#173d32] text-[#d9f28b] min-[801px]:size-[34px] [&>svg]:size-6"><Icon name="growth" /></span>growthys<span className="text-[#79974a]">.</span></a>
}

function FaqList({ items }: { items: ContentPair[] }) {
  return <div className="[&>details]:border-b [&>details]:border-[#dde1d5] [&>details:first-child]:border-t [&_summary]:flex [&_summary]:cursor-pointer [&_summary]:list-none [&_summary]:items-center [&_summary]:justify-between [&_summary]:gap-5 [&_summary]:py-[22px] [&_summary]:text-sm [&_summary]:leading-[1.6] [&_summary]:font-[550] [&_summary::-webkit-details-marker]:hidden [&_details[open]_span]:rotate-45 [&_details>p]:pr-7 [&_details>p]:pb-[22px] [&_details>p]:text-[13px] [&_details>p]:leading-[1.9] [&_details>p]:text-[#647369]">{items.map(item => (
    <details key={item.title}>
      <summary>{item.title}<span data-faq-indicator className="text-[23px] font-light text-[#788d5a] transition-transform" aria-hidden="true">+</span></summary>
      <p>{item.text}</p>
    </details>
  ))}</div>
}

function Steps({ items, nested = false }: { items: ContentPair[]; nested?: boolean }) {
  const Heading = nested ? 'h5' : 'h3'
  return <ol className={`mt-[30px] grid list-none gap-x-[22px] gap-y-[30px] p-0 min-[541px]:gap-[33px] min-[801px]:mt-[55px] min-[801px]:gap-[22px] min-[1151px]:gap-7 ${items.length === 5 ? 'grid-cols-1 min-[541px]:grid-cols-2 min-[801px]:grid-cols-3 min-[1151px]:grid-cols-5' : 'grid-cols-2 min-[801px]:grid-cols-4'}`}>{items.map((step, index) => (
    <li className="[&>h3]:mt-[23px] [&>h3]:mb-3 [&>h3]:text-[15px] [&>h3]:leading-[1.4] [&>h3]:font-semibold [&>h3]:tracking-[-0.4px] min-[541px]:[&>h3]:text-[17px] min-[801px]:[&>h3]:text-sm min-[1151px]:[&>h3]:text-base [&>h5]:mt-[17px] [&>h5]:mb-3 [&>h5]:text-base [&>h5]:font-semibold [&>h5]:tracking-[-0.4px] min-[541px]:[&>h5]:mt-[23px] min-[541px]:[&>h5]:text-[15px] [&>p]:text-[13px] [&>p]:leading-[1.8] [&>p]:text-[#647369] [&:last-child>div>svg]:invisible" key={step.title}>
      <div className="flex items-center justify-between border-b border-[#dde1d5] pb-[17px] min-[541px]:pb-6 [&>span]:text-[34px] [&>span]:font-[350] [&>span]:tracking-[-1px] [&>span]:text-[#7c8d69] [&>svg]:w-[17px] [&>svg]:text-[#80936b]"><span>0{index + 1}</span><Icon name="arrow" /></div>
      <Heading>{step.title}</Heading><p>{step.text}</p>
    </li>
  ))}</ol>
}

function Benefits({ items, nested = false }: { items: ContentPair[]; nested?: boolean }) {
  const Heading = nested ? 'h5' : 'h3'
  return <div data-benefits className="grid grid-cols-1 gap-[27px] min-[541px]:grid-cols-2 min-[541px]:gap-x-10 min-[541px]:gap-y-7">{items.map(point => (
    <article className="flex items-start gap-[11px] min-[541px]:gap-[15px] [&_h3]:mb-[7px] [&_h3]:text-[15px] [&_h3]:leading-[1.5] [&_h3]:font-semibold [&_h5]:mb-[7px] [&_h5]:text-[15px] [&_h5]:leading-[1.5] [&_h5]:font-semibold min-[541px]:[&_h3]:text-base min-[541px]:[&_h5]:text-base [&_p]:text-xs [&_p]:leading-[1.8] [&_p]:text-[#647369] min-[541px]:[&_p]:text-[13px]" key={point.title}>
      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#eaf0df] [&>svg]:size-[15px]"><Icon name="check" /></span>
      <div><Heading>{point.title}</Heading><p>{point.text}</p></div>
    </article>
  ))}</div>
}

function ServicePanel({ detail, index, choose }: { detail: ServiceDetail; index: number; choose: (service: string) => void }) {
  return (
    <details id={detail.id} data-service-panel className="group/service scroll-mt-[110px] rounded-xl border border-[#d9e0ce] bg-[#fffefa] [&[open]>summary]:border-b [&[open]>summary]:border-[#dde1d5] [&_[data-benefits]]:rounded-lg [&_[data-benefits]]:border [&_[data-benefits]]:border-[#dde1d5] [&_[data-benefits]]:px-4 [&_[data-benefits]]:py-5 min-[541px]:[&_[data-benefits]]:gap-[25px] min-[541px]:[&_[data-benefits]]:p-[22px] min-[801px]:[&_[data-benefits]]:p-[27px]" open={index === 0}>
      <summary className="flex cursor-pointer list-none items-start gap-3 px-[18px] py-[22px] min-[541px]:gap-[17px] min-[541px]:p-[25px] min-[801px]:gap-[26px] min-[801px]:p-8 [&::-webkit-details-marker]:hidden">
        <span className="hidden size-9 shrink-0 place-items-center rounded-full bg-[#edf2e4] text-xs text-[#738762] min-[541px]:grid">0{index + 1}</span>
        <span className="min-w-0 flex-1 [&>h3]:mb-[15px] [&>h3]:max-w-[800px] [&>h3]:text-[22px] [&>h3]:leading-[1.25] [&>h3]:font-[550] [&>h3]:tracking-[-0.6px] min-[541px]:[&>h3]:text-[25px] min-[541px]:[&>h3]:tracking-[-0.9px] min-[801px]:[&>h3]:text-[clamp(22px,2.3vw,31px)] [&>span:first-child]:mb-[11px] [&>span:first-child]:text-[8px] [&>span:first-child]:tracking-[1px] [&>span:first-child]:text-[#648146] min-[541px]:[&>span:first-child]:text-[9px] min-[801px]:[&>span:first-child]:text-[10px]"><span className="mb-5 flex items-center gap-[9px] text-[9px] font-bold tracking-[1.7px] min-[801px]:mb-[23px] min-[801px]:text-[10px]">{detail.eyebrow}</span><h3>{detail.title}</h3><span className="block max-w-[800px] text-[13px] leading-[1.8] text-[#647369] min-[801px]:text-sm">{detail.subtitle}</span></span>
        <span className="grid size-[30px] shrink-0 place-items-center rounded-full border border-[#ccd7bb] text-[21px] font-light transition-[transform,background] group-open/service:rotate-45 group-open/service:bg-[#d9f28b] min-[541px]:size-9 min-[541px]:text-[25px]" aria-hidden="true">+</span>
      </summary>
      <div className="px-[18px] py-[22px] min-[541px]:p-[25px] min-[801px]:p-8">
        <div className="mb-7 flex flex-wrap gap-[10px] min-[541px]:mb-[42px] min-[541px]:gap-3 [&>a]:gap-[11px] [&>a]:px-[14px] [&>a]:py-3 [&>a]:text-[11px] min-[541px]:[&>a]:gap-[22px] min-[541px]:[&>a]:px-[18px] min-[541px]:[&>a]:py-[14px] min-[541px]:[&>a]:text-xs">
          <a className="cursor-pointer inline-flex items-center justify-center gap-[22px] rounded-[7px] border border-transparent px-[23px] py-4 text-[13px] leading-[1.2] font-semibold transition-[background,transform,box-shadow] hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none bg-[#173d32] text-white hover:bg-[#285343]" href="tel:+917900351135">Book a call <Icon name="phone" /></a>
          <a className="cursor-pointer inline-flex items-center justify-center gap-[22px] rounded-[7px] border px-[23px] py-4 text-[13px] leading-[1.2] font-semibold transition-[background,transform,box-shadow] hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none border-[#cbd5c5] bg-transparent hover:bg-[#edf2e6]" href={detail.prices ? '#marketing-plans' : '#lead-form'} onClick={() => choose(detail.service)}>{detail.prices ? 'See pricing' : detail.action}<Icon name="arrow" /></a>
        </div>
        <div className="mb-8 grid grid-cols-1 gap-[22px] rounded-lg bg-[#f1f4e9] p-5 min-[541px]:mb-[45px] min-[541px]:p-6 min-[801px]:grid-cols-[1fr_1.4fr] min-[801px]:gap-[30px] min-[801px]:p-[30px] min-[1151px]:gap-[50px] [&>h4]:text-[22px] [&>h4]:leading-[1.35] [&>h4]:font-[550] [&>h4]:tracking-[-0.8px] min-[541px]:[&>h4]:text-[25px] [&_p]:mb-[14px] [&_p]:text-[13px] [&_p]:leading-[1.85] [&_p]:text-[#647369] [&_p:last-child]:mb-0 min-[541px]:[&_p]:text-sm"><h4>{detail.introTitle}</h4><div>{detail.intro.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></div>
        <section className="mt-[35px] min-[541px]:mt-[46px]" aria-labelledby={`${detail.id}-modules`}>
          <h4 className="mb-[22px] text-[23px] leading-[1.3] font-[550] tracking-[-0.8px] min-[541px]:mb-[26px] min-[541px]:text-[26px]" id={`${detail.id}-modules`}>{detail.cardsTitle}</h4>
          <div className="grid grid-cols-1 gap-3 min-[541px]:grid-cols-2 min-[541px]:gap-[14px] min-[1151px]:grid-cols-4">{detail.cards.map((card, cardIndex) => (
            <article data-module-card className="rounded-lg border border-[#dde1d5] p-[22px] min-[541px]:px-5 min-[541px]:py-[23px] [&>h5]:mb-3 [&>h5]:text-base [&>h5]:leading-[1.5] [&>h5]:font-semibold [&>h5]:tracking-[-0.2px] min-[541px]:[&>h5]:text-[15px] [&>p]:text-[13px] [&>p]:leading-[1.85] [&>p]:text-[#647369] min-[541px]:[&>p]:text-xs" key={card.title}><span className="mb-[15px] block text-[9px] tracking-[1px] text-[#728367] min-[541px]:mb-5">{String(cardIndex + 1).padStart(2, '0')}</span><h5>{card.title}</h5><p>{card.text}</p></article>
          ))}</div>
        </section>
        {detail.prices && <section className="mt-[35px] min-[541px]:mt-[46px] scroll-mt-[115px] rounded-[9px] bg-[#173d32] px-5 py-6 text-white min-[541px]:p-[30px] [&>p:first-child]:text-[#d9f28b] [&>a]:text-[#d9f28b]" id="marketing-plans" aria-labelledby="plans-heading">
          <p className="mb-5 flex items-center gap-[9px] text-[9px] font-bold tracking-[1.7px] min-[801px]:mb-[23px] min-[801px]:text-[10px]">START SMALL. BUILD MOMENTUM.</p><h4 className="mb-[22px] text-[23px] leading-[1.3] font-[550] tracking-[-0.8px] min-[541px]:mb-[26px] min-[541px]:text-[26px]" id="plans-heading">Simple Monthly Plans</h4>
          <div className="grid grid-cols-1 gap-3 min-[541px]:grid-cols-2 min-[541px]:gap-5 min-[1151px]:grid-cols-4">{detail.prices.map(plan => <article data-monthly-plan className="rounded-[6px] border border-white/15 px-[15px] py-[18px] [&>h5]:mb-[15px] [&>h5]:text-[13px] [&>h5]:leading-[1.5] [&>h5]:font-medium [&>p]:text-xl [&>p]:leading-[1.5] [&>p]:font-[550] [&>p]:tracking-[-0.3px] [&>p]:text-[#d9f28b] min-[541px]:[&>p]:text-lg" key={plan.title}><h5>{plan.title}</h5><p>{plan.text}</p></article>)}</div>
          <p className="mt-5 mb-[15px] text-xs text-[#ccdabf]">Ad spend is separate from our management fee.</p>
          <a className="cursor-pointer inline-flex items-center gap-[10px] text-xs font-semibold transition-colors hover:text-[#64812c]" href="#offers">See all plans <Icon name="arrow" /></a>
        </section>}
        <section className="mt-[35px] min-[541px]:mt-[46px]"><h4 className="mb-[22px] text-[23px] leading-[1.3] font-[550] tracking-[-0.8px] min-[541px]:mb-[26px] min-[541px]:text-[26px]">{detail.whyTitle}</h4><Benefits items={detail.benefits} nested /></section>
        <section className="mt-[35px] min-[541px]:mt-[46px] [&>ol]:mt-0 [&_li>div]:pb-[13px] min-[541px]:[&_li>div]:pb-6"><h4 className="mb-[22px] text-[23px] leading-[1.3] font-[550] tracking-[-0.8px] min-[541px]:mb-[26px] min-[541px]:text-[26px]">{detail.processTitle}</h4><Steps items={detail.steps} nested /></section>
        <section className="mt-[35px] min-[541px]:mt-[46px] grid grid-cols-1 gap-0 border-t border-[#dde1d5] pt-7 min-[541px]:gap-[22px] min-[541px]:pt-[38px] min-[801px]:grid-cols-[0.8fr_1.3fr] min-[801px]:gap-[50px] [&>h4]:mt-[10px] max-[540px]:[&_summary]:text-[13px]"><h4 className="mb-[22px] text-[23px] leading-[1.3] font-[550] tracking-[-0.8px] min-[541px]:mb-[26px] min-[541px]:text-[26px]">Your {detail.service === 'IT Services' ? 'IT' : detail.service} questions, answered.</h4><FaqList items={detail.faqs} /></section>
        <div className="mt-[45px] flex flex-col items-stretch gap-[25px] rounded-lg bg-[#eaf2dc] p-[22px] min-[541px]:gap-[35px] min-[541px]:p-[25px] min-[801px]:flex-row min-[801px]:items-center min-[801px]:justify-between min-[801px]:p-[30px] [&_h4]:mb-3 [&_h4]:text-[22px] [&_h4]:leading-[1.3] [&_h4]:font-[550] [&_h4]:tracking-[-0.6px] min-[541px]:[&_h4]:text-[25px] [&_p]:max-w-[620px] [&_p]:text-[13px] [&_p]:leading-[1.85] [&_p]:text-[#647369]"><div><h4>{detail.closingTitle}</h4><p>{detail.closingText}</p></div><div className="flex shrink-0 flex-col items-start gap-[15px] min-[541px]:flex-row min-[541px]:flex-wrap min-[801px]:flex-col min-[801px]:items-center [&>a:first-child]:px-[18px] [&>a:first-child]:py-[14px] [&>a:first-child]:text-xs"><a className="cursor-pointer inline-flex items-center justify-center gap-[22px] rounded-[7px] border border-transparent px-[23px] py-4 text-[13px] leading-[1.2] font-semibold transition-[background,transform,box-shadow] hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none bg-[#173d32] text-white hover:bg-[#285343]" href="#lead-form" onClick={() => choose(detail.service)}>{detail.action}<Icon name="arrow" /></a><a className="cursor-pointer inline-flex items-center gap-[10px] text-xs font-semibold transition-colors hover:text-[#64812c]" href="tel:+917900351135">Book a call ↗</a></div></div>
      </div>
    </details>
  )
}

export default function GrowthysLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [enquiryPrepared, setEnquiryPrepared] = useState(false)
  const [formData, setFormData] = useState({ name: '', city: '', state: '', country: 'India', phone: '', email: '', service: 'Digital Marketing Services', website: '' })
  const menuButton = useRef<HTMLButtonElement>(null)
  const message = `Hi Growthys! I'd like to claim an offer for ${formData.service}.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nLocation: ${formData.city}, ${formData.state}, ${formData.country}\nBusiness website: ${formData.website}`
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
    <div className="min-w-[320px] bg-[#f8f8f2] font-['Segoe_UI',Arial,sans-serif] text-[#173d32] antialiased selection:bg-[#d4ed83] selection:text-[#153c30] [&_*:focus-visible]:outline-3 [&_*:focus-visible]:outline-offset-5 [&_*:focus-visible]:outline-[#648c2e] motion-reduce:[&_*]:transition-none" id="top">
      <a className="fixed -top-20 left-5 z-[100] rounded-lg bg-[#d9f28b] px-6 py-[15px] focus:top-3" href="#main">Skip to content</a>
      <div className="flex min-h-[37px] flex-wrap items-center justify-center gap-[6px] bg-[#173d32] px-3 py-2 text-[8px] tracking-[0.2px] text-[#e8efdf] min-[541px]:gap-[10px] min-[541px]:px-5 min-[541px]:text-[9px] min-[801px]:text-[11px] [&>a]:text-[#d9f28b] min-[801px]:[&>a]:ml-[14px] [&>span]:bg-[#d9f28b] max-[540px]:[&>span]:hidden"><span className="inline-block size-[6px] shrink-0 rounded-full bg-[#83aa47]" /> Four services. One dedicated growth team. <a href="#offers">Explore the Growthys launch offers ↗</a></div>
      <header className="sticky top-0 z-50 border-b border-[#e3e6da] bg-[#f8f8f2]/95 backdrop-blur-[15px]" onKeyDown={event => { if (event.key === 'Escape') { setMenuOpen(false); menuButton.current?.focus() } }}>
        <div className="mx-auto w-[calc(100%_-_40px)] max-w-[1240px] min-[801px]:w-[calc(100%_-_64px)] min-[1151px]:w-[calc(100%_-_96px)] flex min-h-[69px] items-center justify-between gap-[14px] min-[541px]:min-h-[73px] min-[801px]:min-h-[88px] min-[801px]:gap-[25px]"><Brand />
          <nav className="hidden items-center gap-4 text-[11px] font-[550] min-[801px]:flex min-[1151px]:gap-[30px] min-[1151px]:text-xs [&_a]:transition-colors [&_a:hover]:text-[#64812c]" aria-label="Main navigation">{navLinks.map(link => link.href === '#services' ? (
            <div className="flex items-center gap-[3px]" key={link.href}><a href={link.href}>{link.label}</a><details className="relative"><summary className="grid h-[35px] w-[25px] cursor-pointer list-none place-items-center [&::-webkit-details-marker]:hidden" aria-label="Browse all services"><span aria-hidden="true">⌄</span></summary><div className="absolute top-[46px] -left-[90px] w-[300px] rounded-[9px] border border-[#dde1d5] bg-[#fffefa] p-[10px] shadow-[0_15px_35px_#173d3215] [&_a]:flex [&_a]:items-center [&_a]:justify-between [&_a]:rounded-[5px] [&_a]:px-3 [&_a]:py-[13px] [&_a]:text-xs [&_a:hover]:bg-[#eff3e8] [&_svg]:size-[15px]">{serviceDetails.map(detail => <a href={`#${detail.id}`} key={detail.id} onClick={event => { openService(detail.id); event.currentTarget.closest('details')?.removeAttribute('open') }}>{detail.eyebrow}<Icon name="arrow" /></a>)}</div></details></div>
          ) : <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
          <a className="ml-auto hidden items-center justify-center gap-2 rounded-[7px] border border-transparent bg-[#173d32] p-[10px] text-[9px] leading-[1.2] font-semibold text-white transition-colors hover:bg-[#285343] min-[381px]:inline-flex min-[541px]:gap-3 min-[541px]:px-[13px] min-[541px]:py-[11px] min-[541px]:text-[10px] min-[801px]:ml-0 min-[801px]:gap-[22px] min-[801px]:px-[18px] min-[801px]:py-[13px] min-[801px]:text-xs [&>svg]:size-[13px] min-[541px]:[&>svg]:size-4" href="tel:+917900351135">Book a call <Icon name="phone" /></a>
          <button ref={menuButton} className="grid cursor-pointer place-items-center bg-transparent py-[10px] pl-2 text-[#173d32] min-[801px]:hidden max-[380px]:ml-auto max-[380px]:p-3" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
        </div>
        <nav id="mobile-nav" className="grid border-t border-[#dde1d5] px-5 pt-[5px] pb-5 min-[801px]:hidden [&[hidden]]:hidden [&_a]:flex [&_a]:items-center [&_a]:justify-between [&_a]:border-b [&_a]:border-[#dde1d5] [&_a]:px-[5px] [&_a]:py-[15px] [&_a]:text-sm" aria-label="Mobile navigation" hidden={!menuOpen}>
          {navLinks.map(link => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}<Icon name="arrow" /></a>)}
          <div className="pt-1 pb-[10px] pl-4 [&_a]:py-[11px] [&_a]:text-xs [&_a]:text-[#647369]">{serviceDetails.map(detail => <a href={`#${detail.id}`} key={detail.id} onClick={() => openService(detail.id)}>{detail.eyebrow} ↗</a>)}</div>
          <a href="tel:+917900351135">Book a call <Icon name="phone" /></a>
        </nav>
      </header>

      <main id="main">
        <section className="bg-[radial-gradient(ellipse_at_7%_35%,#f1f2e7,transparent_60%)] pt-[35px] min-[541px]:pt-12"><div className="mx-auto w-[calc(100%_-_40px)] max-w-[1240px] min-[801px]:w-[calc(100%_-_64px)] min-[1151px]:w-[calc(100%_-_96px)] grid grid-cols-1 items-center gap-[35px] min-[801px]:grid-cols-[1.08fr_1fr] min-[1151px]:gap-[70px]">
          <div className="pt-[5px] pb-[15px] [&>h1]:max-w-[650px] [&>h1]:text-[clamp(34px,8.5vw,44px)] [&>h1]:leading-[1.14] [&>h1]:font-[650] [&>h1]:tracking-[-1.6px] [&>h1]:mb-[27px] min-[541px]:[&>h1]:text-[49px] min-[541px]:[&>h1]:tracking-[-1.9px] min-[801px]:[&>h1]:text-[43px] min-[1151px]:[&>h1]:text-[clamp(40px,3.8vw,55px)] min-[1151px]:[&>h1]:tracking-[-2.4px] max-[380px]:[&>h1]:text-[33px]"><div className="mb-5 flex items-center gap-[9px] text-[9px] font-bold tracking-[1.7px] min-[801px]:mb-[23px] min-[801px]:text-[10px]"><span className="inline-block size-[6px] shrink-0 rounded-full bg-[#83aa47]" /> GROWTHYS LAUNCH OFFER</div>
            <h1>Get <span className="text-[#567239]">₹25,996 Worth</span> of Complete Digital Marketing Every Month For Just <span className="mt-3 block text-[1.4em] tracking-[-0.055em] text-[#173d32] min-[541px]:mt-[10px] min-[541px]:text-[1.25em] min-[801px]:text-[1.35em]">₹19,999!</span></h1>
            <p className="mb-[30px] max-w-[490px] text-[15px] leading-[1.85] text-[#647369]">Want to grow your business online without spending a fortune? Claim this offer, or choose IT services, HRMS or CRM software in the form, and our team will call you back within 24 hours.</p>
            <div className="flex flex-wrap items-center gap-[18px]"><a className="cursor-pointer inline-flex items-center justify-center gap-[22px] rounded-[7px] border border-transparent px-[23px] py-4 text-[13px] leading-[1.2] font-semibold transition-[background,transform,box-shadow] hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none bg-[#173d32] text-white hover:bg-[#285343]" href="#lead-form" onClick={() => choose('Digital Marketing Services')}>Claim My ₹19,999 Package <Icon name="arrow" /></a><a className="cursor-pointer inline-flex items-center gap-[10px] text-xs font-semibold transition-colors hover:text-[#64812c]" href="#offers">Explore all offers ↗</a></div>
            <div className="mt-[23px] flex flex-wrap gap-x-[13px] gap-y-[9px] text-[10px] leading-[1.6] text-[#647369] min-[541px]:mt-[26px] min-[541px]:gap-x-[18px] min-[541px]:gap-y-3 min-[541px]:text-[11px] min-[801px]:max-w-[440px] [&>span]:flex [&>span]:items-center [&>span]:gap-[6px] [&_svg]:size-[13px] [&_svg]:text-[#4e6f33]"><span><Icon name="check" /> No hidden fees</span><span><Icon name="check" /> Transparent monthly reports</span><span><Icon name="check" /> Delhi-based team since 2022</span></div>
            <div className="mt-[27px] border-t border-[#dde1d5] pt-5 min-[541px]:mt-[35px] min-[541px]:pt-6 min-[801px]:max-w-[460px] [&>span]:text-[8px] [&>span]:font-semibold [&>span]:tracking-[1.4px] [&>span]:text-[#647369] [&>div]:mt-[15px] [&>div]:flex [&>div]:flex-wrap [&>div]:gap-x-4 [&>div]:gap-y-3 min-[541px]:[&>div]:gap-x-5 [&>div>span]:flex [&>div>span]:items-center [&>div>span]:gap-[7px] [&>div>span]:text-[11px] [&_svg]:size-4 [&_svg]:text-[#6b8449]"><span>ONE TEAM. EVERY NEXT STEP.</span><div><span><Icon name="growth" /> Marketing</span><span><Icon name="web" /> Websites</span><span><Icon name="people" /> HRMS</span><span><Icon name="pipeline" /> CRM</span></div></div>
          </div>
          <form className="mx-auto w-full max-w-[640px] scroll-mt-[115px] rounded-xl border border-[#dde1d5] bg-[#fffefa] px-5 py-[25px] shadow-[0_12px_45px_#173d3205] min-[541px]:p-[30px]" id="lead-form" onSubmit={handleSubmit}>
            <div className="mb-[22px] border-b border-[#dde1d5] pb-5 [&>h2]:text-[29px] [&>h2]:font-semibold [&>h2]:tracking-[-1px] [&>h2]:leading-[1.18] [&>p]:mt-[9px] [&>p]:text-xs [&>p]:leading-[1.6] [&>p]:text-[#647369]"><span className="mb-[14px] flex items-center gap-[7px] text-[8px] tracking-[1px] text-[#5b743c] [&>svg]:size-[14px]"><Icon name="spark" /> LET’S GROW YOUR BUSINESS</span><h2>Claim Your Offer</h2><p>Tell us what you need. We’ll help you take the next step.</p></div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-4 min-[541px]:gap-x-[15px] min-[541px]:gap-y-[17px] max-[380px]:grid-cols-1">
              <label className="block min-w-0 text-[10px] font-semibold min-[541px]:text-[11px] [&>span]:text-[#7c8d67] col-span-full">Full Name <span>*</span><input className="mt-2 h-[47px] w-full min-w-0 rounded-[5px] border border-[#e0e5d7] bg-[#f9faf4] px-[9px] py-[10px] text-base font-normal text-[#173d32] transition-colors placeholder:text-[#74816a] hover:border-[#a9b49a] focus:outline-2 focus:outline-offset-1 focus:outline-[#93ac67] min-[541px]:px-3 min-[801px]:h-[43px] min-[801px]:text-[12px]" name="name" value={formData.name} onChange={handleChange} autoComplete="name" placeholder="Your full name" required maxLength={100} /></label>
              <label className="block min-w-0 text-[10px] font-semibold min-[541px]:text-[11px] [&>span]:text-[#7c8d67]">City <span>*</span><input className="mt-2 h-[47px] w-full min-w-0 rounded-[5px] border border-[#e0e5d7] bg-[#f9faf4] px-[9px] py-[10px] text-base font-normal text-[#173d32] transition-colors placeholder:text-[#74816a] hover:border-[#a9b49a] focus:outline-2 focus:outline-offset-1 focus:outline-[#93ac67] min-[541px]:px-3 min-[801px]:h-[43px] min-[801px]:text-[12px]" name="city" value={formData.city} onChange={handleChange} autoComplete="address-level2" placeholder="Your city" required maxLength={100} /></label>
              <label className="block min-w-0 text-[10px] font-semibold min-[541px]:text-[11px] [&>span]:text-[#7c8d67]">State <span>*</span><input className="mt-2 h-[47px] w-full min-w-0 rounded-[5px] border border-[#e0e5d7] bg-[#f9faf4] px-[9px] py-[10px] text-base font-normal text-[#173d32] transition-colors placeholder:text-[#74816a] hover:border-[#a9b49a] focus:outline-2 focus:outline-offset-1 focus:outline-[#93ac67] min-[541px]:px-3 min-[801px]:h-[43px] min-[801px]:text-[12px]" name="state" value={formData.state} onChange={handleChange} autoComplete="address-level1" placeholder="Your state / region" required maxLength={100} /></label>
              <label className="block min-w-0 text-[10px] font-semibold min-[541px]:text-[11px] [&>span]:text-[#7c8d67]">Country <span>*</span><select className="mt-2 h-[47px] w-full min-w-0 rounded-[5px] border border-[#e0e5d7] bg-[#f9faf4] px-[9px] py-[10px] text-base font-normal text-[#173d32] transition-colors placeholder:text-[#74816a] hover:border-[#a9b49a] focus:outline-2 focus:outline-offset-1 focus:outline-[#93ac67] min-[541px]:px-3 min-[801px]:h-[43px] min-[801px]:text-[12px]" name="country" value={formData.country} onChange={handleChange} autoComplete="country-name" required><option>India</option><option>United Arab Emirates</option><option>United States</option><option>United Kingdom</option><option>Canada</option><option>Australia</option><option>Singapore</option><option>Other</option></select></label>
              <label className="block min-w-0 text-[10px] font-semibold min-[541px]:text-[11px] [&>span]:text-[#7c8d67]">Phone Number <span>*</span><input className="mt-2 h-[47px] w-full min-w-0 rounded-[5px] border border-[#e0e5d7] bg-[#f9faf4] px-[9px] py-[10px] text-base font-normal text-[#173d32] transition-colors placeholder:text-[#74816a] hover:border-[#a9b49a] focus:outline-2 focus:outline-offset-1 focus:outline-[#93ac67] min-[541px]:px-3 min-[801px]:h-[43px] min-[801px]:text-[12px]" type="tel" name="phone" value={formData.phone} onChange={handleChange} autoComplete="tel" placeholder="+91 98765 43210" required pattern="[+]?[0-9][0-9 \-]{6,19}" title="Include your country code, for example +91 98765 43210." /></label>
              <label className="block min-w-0 text-[10px] font-semibold min-[541px]:text-[11px] [&>span]:text-[#7c8d67] col-span-full">Email Address <span>*</span><input className="mt-2 h-[47px] w-full min-w-0 rounded-[5px] border border-[#e0e5d7] bg-[#f9faf4] px-[9px] py-[10px] text-base font-normal text-[#173d32] transition-colors placeholder:text-[#74816a] hover:border-[#a9b49a] focus:outline-2 focus:outline-offset-1 focus:outline-[#93ac67] min-[541px]:px-3 min-[801px]:h-[43px] min-[801px]:text-[12px]" type="email" name="email" value={formData.email} onChange={handleChange} autoComplete="email" placeholder="you@yourbusiness.com" required maxLength={254} /></label>
              <label className="block min-w-0 text-[10px] font-semibold min-[541px]:text-[11px] [&>span]:text-[#7c8d67] col-span-full">Select Service <span>*</span><select className="mt-2 h-[47px] w-full min-w-0 rounded-[5px] border border-[#e0e5d7] bg-[#f9faf4] px-[9px] py-[10px] text-base font-normal text-[#173d32] transition-colors placeholder:text-[#74816a] hover:border-[#a9b49a] focus:outline-2 focus:outline-offset-1 focus:outline-[#93ac67] min-[541px]:px-3 min-[801px]:h-[43px] min-[801px]:text-[12px]" name="service" value={formData.service} onChange={handleChange} required>{serviceSummaries.map(service => <option key={service.service} value={service.service}>{service.title}</option>)}</select></label>
              <label className="block min-w-0 text-[10px] font-semibold min-[541px]:text-[11px] [&>span]:text-[#7c8d67] col-span-full">Do you have a business website? <span>*</span><select className="mt-2 h-[47px] w-full min-w-0 rounded-[5px] border border-[#e0e5d7] bg-[#f9faf4] px-[9px] py-[10px] text-base font-normal text-[#173d32] transition-colors placeholder:text-[#74816a] hover:border-[#a9b49a] focus:outline-2 focus:outline-offset-1 focus:outline-[#93ac67] min-[541px]:px-3 min-[801px]:h-[43px] min-[801px]:text-[12px]" name="website" value={formData.website} onChange={handleChange} required><option value="" disabled>Select an option</option><option value="Yes">Yes</option><option value="No">No</option></select></label>
            </div>
            <button className="cursor-pointer inline-flex items-center gap-[22px] rounded-[7px] border border-transparent px-[23px] py-4 leading-[1.2] font-semibold transition-[background,transform,box-shadow] hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none bg-[#173d32] text-white hover:bg-[#285343] mt-[22px] w-full justify-between text-xs" type="submit">Claim My Offer <Icon name="arrow" /></button>
            <p className="mt-3 flex flex-wrap items-center justify-center gap-[6px] text-center text-[9px] leading-[1.8] text-[#647369] [&>svg]:size-[11px]"><Icon name="shield" /> We only use your details to contact you about this enquiry.</p>
            <p className="mt-[7px] text-center text-[9px] leading-[1.7] text-[#647369]">Opens WhatsApp with your details. Review and send to complete your enquiry.</p>
            {enquiryPrepared && <div className="mt-[18px] rounded-[7px] border border-[#c8d4b5] bg-[#f0f5e6] p-[17px] text-xs leading-[1.7] [&>strong]:font-semibold [&>p]:mt-[6px] [&>p]:mb-[10px] [&>p]:text-[#647369] [&>a]:font-semibold [&>a]:underline [&>a]:underline-offset-3" role="status"><strong>Thank you! Your offer is reserved.</strong><p>Our team will call you within 24 hours to understand your requirements.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Continue on WhatsApp ↗</a></div>}
          </form>
        </div><div className="mx-auto w-[calc(100%_-_40px)] max-w-[1240px] min-[801px]:w-[calc(100%_-_64px)] min-[1151px]:w-[calc(100%_-_96px)] flex justify-between border-b border-[#dde1d5] pt-[27px] pb-5 text-[9px] text-[#748073] min-[541px]:pt-[30px] min-[541px]:pb-[22px] min-[801px]:pt-[42px] min-[801px]:pb-6 min-[801px]:text-[10px]"><span>Rooted in Delhi. Built for your ambition.</span><span className="hidden items-center gap-[9px] text-[7px] tracking-[1px] min-[541px]:flex min-[801px]:gap-[14px] min-[801px]:text-[8px] [&>i]:size-[3px] [&>i]:rounded-full [&>i]:bg-[#809657] [&>svg]:ml-[10px] [&>svg]:size-[13px]">MARKETING <i /> TECHNOLOGY <i /> GROWTH <Icon name="spark" /></span></div></section>

        <section className="py-[63px] min-[801px]:py-[90px] bg-[#edf0e5]" id="offers"><div className="mx-auto w-[calc(100%_-_40px)] max-w-[1240px] min-[801px]:w-[calc(100%_-_64px)] min-[1151px]:w-[calc(100%_-_96px)]">
          <div className="mb-[30px] flex flex-col gap-5 min-[541px]:mb-10 min-[541px]:flex-row min-[541px]:justify-between min-[541px]:gap-[25px] min-[801px]:items-end min-[801px]:gap-[45px] [&>p]:text-xs [&>p]:leading-[1.8] [&>p]:text-[#647369] min-[541px]:[&>p]:max-w-[230px] min-[801px]:[&>p]:mb-1 min-[801px]:[&>p]:max-w-[285px] min-[801px]:[&>p]:text-[13px] [&_h2]:text-[32px] [&_h2]:leading-[1.18] [&_h2]:font-[550] [&_h2]:tracking-[-1.5px] min-[801px]:[&_h2]:text-[clamp(32px,3.1vw,43px)] min-[801px]:[&_h2]:tracking-[-1.9px] [&_h2>span]:text-[#73806a]"><div><p className="mb-5 flex items-center gap-[9px] text-[9px] font-bold tracking-[1.7px] min-[801px]:mb-[23px] min-[801px]:text-[10px]">01 / FOUR SERVICES. FOUR CLEAR OFFERS.</p><h2>Pick the Offer That<br /><span>Fits Your Business</span></h2></div><p>Four services, four clear offers. Every package comes with a dedicated team and a fixed scope agreed before work starts.</p></div>
          <div className="grid grid-cols-1 gap-[15px] min-[541px]:grid-cols-2 min-[541px]:gap-[14px] min-[1151px]:grid-cols-4">{offerCards.map(offer => <article className={`flex flex-col rounded-[10px] border p-[27px] min-[1151px]:px-[21px] min-[1151px]:py-[26px] [&>h3]:mb-[17px] [&>h3]:text-[22px] [&>h3]:leading-[1.25] [&>h3]:font-semibold [&>h3]:tracking-[-0.8px] min-[541px]:[&>h3]:mb-[9px] min-[541px]:[&>h3]:min-h-[55px] min-[1151px]:[&>h3]:min-h-[82px] ${offer.featured ? 'border-[#173d32] bg-[#173d32] text-[#f8faef] [&>div:first-child>span]:bg-[#d9f28b] [&>div:first-child>span]:text-[#173d32] [&>p]:text-[#c7d3bc] [&>div>span]:text-[#c7d3bc] [&>p:last-child]:border-white/15 [&>p:last-child]:text-[#d9e5c9]' : 'border-[#d9dfd1] bg-[#fafbf5]'}`} key={offer.service}><div className="mb-[29px] flex items-center justify-between gap-[5px] text-[11px] font-semibold min-[1151px]:text-[9px] [&>span]:rounded-[3px] [&>span]:bg-[#e9eedf] [&>span]:p-[5px] [&>span]:text-[8px] [&>span]:tracking-[0.55px] [&>span]:whitespace-nowrap [&>span]:text-[#6b785f] min-[1151px]:[&>span]:text-[6px]">{offer.service}<span>{offer.featured ? 'GROWTH PACK' : 'BUILT FOR YOU'}</span></div><h3>{offer.title}</h3><p className="mb-[27px] text-[13px] leading-[1.8] text-[#647369] min-[541px]:mb-6 min-[541px]:min-h-[130px] min-[541px]:text-xs min-[801px]:min-h-[90px] min-[1151px]:min-h-[150px]">{offer.description}</p><p className={`mb-[9px] text-[11px] leading-[1.5] ${offer.featured ? 'text-[#cad5be] line-through' : 'text-[#647369]'}`}>{offer.regular}</p><div className="mb-6 text-[32px] leading-[1.15] font-semibold tracking-[-1.2px] min-[1151px]:text-[clamp(25px,2.5vw,34px)] [&>span]:mt-[7px] [&>span]:block [&>span]:text-[10px] [&>span]:font-normal [&>span]:tracking-normal [&>span]:text-[#647369]">{offer.price}<span>{offer.period}</span></div><a className={`inline-flex items-center justify-between gap-[5px] rounded-[7px] border px-[15px] py-[15px] text-xs leading-[1.2] font-semibold transition-[background,transform,box-shadow] hover:-translate-y-0.5 hover:shadow-md min-[541px]:px-3 min-[541px]:py-[13px] min-[1151px]:text-[10px] [&>svg]:size-[15px] ${offer.featured ? 'bg-[#d9f28b] text-[#10352b] hover:bg-[#e4ffa2] border-transparent' : 'border-[#cbd5c5] bg-transparent hover:bg-[#edf2e6]'}`} href="#lead-form" onClick={() => choose(offer.service)}>Claim My Offer <Icon name="arrow" /></a><p className="mt-[25px] flex gap-[7px] border-t border-[#dde1d5] pt-[18px] text-xs leading-[1.7] min-[541px]:text-[11px] [&>svg]:mt-0.5 [&>svg]:size-[13px]"><Icon name="spark" />{offer.bonus}</p></article>)}</div>
          <p className="mt-7 flex flex-wrap items-center justify-center gap-x-[5px] gap-y-0.5 text-center text-[11px] leading-[1.8] text-[#66745d] min-[541px]:gap-[5px] min-[541px]:text-xs [&>svg]:mr-[5px] [&>svg]:size-[15px] max-[540px]:[&>svg]:hidden [&>a]:font-semibold [&>a]:text-[#173d32] [&>a]:underline [&>a]:underline-offset-3 max-[540px]:[&>a]:mt-[6px] max-[540px]:[&>a]:w-full min-[541px]:[&>a]:ml-[10px]"><Icon name="web" /> Need an online store or custom-coded web app? Shopify stores start at <strong>₹19,999</strong> and custom coded projects at <strong>₹24,999.</strong><a href="#lead-form" onClick={() => choose('IT Services')}>Claim My Offer ↗</a></p>
        </div></section>

        <section className="py-[63px] min-[801px]:py-[90px]" id="services"><div className="mx-auto w-[calc(100%_-_40px)] max-w-[1240px] min-[801px]:w-[calc(100%_-_64px)] min-[1151px]:w-[calc(100%_-_96px)]">
          <div className="mb-[30px] flex flex-col gap-5 min-[541px]:mb-10 min-[541px]:flex-row min-[541px]:justify-between min-[541px]:gap-[25px] min-[801px]:items-end min-[801px]:gap-[45px] [&>p]:text-xs [&>p]:leading-[1.8] [&>p]:text-[#647369] min-[541px]:[&>p]:max-w-[230px] min-[801px]:[&>p]:mb-1 min-[801px]:[&>p]:max-w-[285px] min-[801px]:[&>p]:text-[13px] [&_h2]:text-[32px] [&_h2]:leading-[1.18] [&_h2]:font-[550] [&_h2]:tracking-[-1.5px] min-[801px]:[&_h2]:text-[clamp(32px,3.1vw,43px)] min-[801px]:[&_h2]:tracking-[-1.9px] [&_h2>span]:text-[#73806a]"><div><p className="mb-5 flex items-center gap-[9px] text-[9px] font-bold tracking-[1.7px] min-[801px]:mb-[23px] min-[801px]:text-[10px]">02 / OUR SERVICES</p><h2>Everything You Need to<br /><span>Build, Automate and Scale</span></h2></div><p>From your first online impression to the systems behind your growth. Explore what our team can do for you.</p></div>
          <div className="grid grid-cols-1 gap-[15px] min-[541px]:grid-cols-2 min-[541px]:gap-3 min-[801px]:gap-4 min-[1151px]:grid-cols-4">{serviceSummaries.map((service, index) => <article className="flex flex-col rounded-[10px] border border-[#dde1d5] px-6 pt-6 pb-7 transition-[border-color,transform] hover:-translate-y-1 hover:border-[#94a378] min-[541px]:px-5 min-[541px]:pt-[23px] min-[801px]:px-[25px] min-[801px]:pt-[25px] min-[1151px]:px-[22px] min-[1151px]:pt-[26px] [&>h3]:mb-2 [&>h3]:text-[22px] [&>h3]:leading-[1.3] [&>h3]:font-[650] [&>h3]:tracking-[-0.65px] min-[541px]:[&>h3]:text-[19px] min-[1151px]:[&>h3]:min-h-[52px] [&>p]:mb-5 [&>p]:text-[13px] [&>p]:leading-[1.8] [&>p]:text-[#647369]" key={service.service}><div className="mb-[23px] flex items-center justify-between min-[541px]:mb-[31px]"><span className="grid size-[42px] place-items-center rounded-[9px] bg-[#e8eddb] [&>svg]:size-[22px]"><Icon name={index === 0 ? 'growth' : index === 1 ? 'web' : index === 2 ? 'people' : 'pipeline'} /></span><span className="text-[10px] text-[#74816c]">0{index + 1}</span></div><h3>{service.title}</h3><p>{service.description}</p><ul className="list-none p-0 [&>li]:mb-[10px] [&>li]:flex [&>li]:items-start [&>li]:gap-2 [&>li]:leading-[1.7] [&_svg]:mt-[3px] [&_svg]:size-3 [&_svg]:text-[#718f44] mb-6 [&>li]:text-xs min-[541px]:[&>li]:text-[11px]">{service.features.map(feature => <li key={feature}><Icon name="check" />{feature}</li>)}</ul><a className="cursor-pointer inline-flex items-center gap-[10px] text-xs font-semibold transition-colors hover:text-[#64812c] mt-auto border-t border-[#dde1d5] pt-5 [&>svg]:size-4" href={`#${service.id}`} onClick={() => openService(service.id)}>Explore this service <Icon name="arrow" /></a></article>)}</div>
        </div></section>

        <section className="py-[63px] min-[801px]:py-[90px] pt-0! min-[801px]:pt-0!" id="process"><div className="mx-auto w-[calc(100%_-_40px)] max-w-[1240px] min-[801px]:w-[calc(100%_-_64px)] min-[1151px]:w-[calc(100%_-_96px)]"><div className="mb-[30px] flex flex-col gap-5 min-[541px]:mb-10 min-[541px]:flex-row min-[541px]:justify-between min-[541px]:gap-[25px] min-[801px]:items-end min-[801px]:gap-[45px] [&>p]:text-xs [&>p]:leading-[1.8] [&>p]:text-[#647369] min-[541px]:[&>p]:max-w-[230px] min-[801px]:[&>p]:mb-1 min-[801px]:[&>p]:max-w-[285px] min-[801px]:[&>p]:text-[13px] [&_h2]:text-[32px] [&_h2]:leading-[1.18] [&_h2]:font-[550] [&_h2]:tracking-[-1.5px] min-[801px]:[&_h2]:text-[clamp(32px,3.1vw,43px)] min-[801px]:[&_h2]:tracking-[-1.9px] [&_h2>span]:text-[#73806a]"><div><p className="mb-5 flex items-center gap-[9px] text-[9px] font-bold tracking-[1.7px] min-[801px]:mb-[23px] min-[801px]:text-[10px]">03 / HOW WE WORK</p><h2>A Simple Process.<br /><span>Smarter Execution. Better Results.</span></h2></div><a className="cursor-pointer inline-flex items-center gap-[10px] text-xs font-semibold transition-colors hover:text-[#64812c]" href="#lead-form">Claim your offer <Icon name="arrow" /></a></div><Steps items={overviewSteps} /></div></section>

        <section className="bg-[#173d32] py-[58px] text-[#f5f8ed] min-[801px]:py-[76px] [&_[data-benefits]]:grid-cols-1 min-[541px]:[&_[data-benefits]]:grid-cols-2 min-[801px]:[&_[data-benefits]]:grid-cols-3 min-[541px]:[&_[data-benefits]]:gap-x-[25px] min-[541px]:[&_[data-benefits]]:gap-y-[30px] min-[1151px]:[&_[data-benefits]]:gap-10 [&_article_p]:text-[#c5d3bf] [&_article>span]:border [&_article>span]:border-white/12 [&_article>span]:bg-white/5 [&_article>span]:text-[#d9f28b]" id="why-choose"><div className="mx-auto w-[calc(100%_-_40px)] max-w-[1240px] min-[801px]:w-[calc(100%_-_64px)] min-[1151px]:w-[calc(100%_-_96px)]"><div className="mb-[35px] flex flex-col gap-[25px] min-[541px]:mb-[45px] min-[541px]:flex-row min-[541px]:justify-between min-[541px]:gap-[35px] min-[801px]:items-center [&_h2]:text-[32px] [&_h2]:leading-[1.18] [&_h2]:font-[550] [&_h2]:tracking-[-1.5px] min-[801px]:[&_h2]:text-[clamp(32px,3.1vw,43px)] [&_h2>span]:text-[#c3da95] [&_p]:text-[#d9f28b]"><div><p className="mb-5 flex items-center gap-[9px] text-[9px] font-bold tracking-[1.7px] min-[801px]:mb-[23px] min-[801px]:text-[10px]">04 / WHY CHOOSE GROWTHYS</p><h2>Why Businesses<br /><span>Choose Growthys</span></h2></div><a className="cursor-pointer inline-flex items-center justify-center gap-[22px] rounded-[7px] border border-transparent px-[23px] py-4 text-[13px] leading-[1.2] font-semibold transition-[background,transform,box-shadow] hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none bg-[#d9f28b] text-[#10352b] hover:bg-[#e4ffa2]" href="tel:+917900351135">Book a call <Icon name="phone" /></a></div><Benefits items={overviewBenefits} /></div></section>

        <section className="py-[60px] min-[541px]:py-[85px]"><div className="mx-auto w-[calc(100%_-_40px)] max-w-[1240px] min-[801px]:w-[calc(100%_-_64px)] min-[1151px]:w-[calc(100%_-_96px)] grid grid-cols-1 gap-[25px] min-[801px]:grid-cols-[1fr_1.25fr] min-[801px]:gap-[50px] min-[1151px]:gap-[110px] [&>div>p:not(:first-child)]:mt-[23px] [&>div>p:not(:first-child)]:text-xs [&>div>p:not(:first-child)]:leading-[1.9] [&>div>p:not(:first-child)]:text-[#647369] [&_p>a]:mt-[7px] [&_p>a]:text-[#173d32] [&_h2]:text-[32px] [&_h2]:leading-[1.18] [&_h2]:font-[550] [&_h2]:tracking-[-1.5px] min-[801px]:[&_h2]:text-[clamp(32px,3.1vw,43px)] min-[801px]:[&_h2]:tracking-[-1.9px] [&_h2>span]:text-[#73806a]"><div><p className="mb-5 flex items-center gap-[9px] text-[9px] font-bold tracking-[1.7px] min-[801px]:mb-[23px] min-[801px]:text-[10px]">A LITTLE MORE CLARITY</p><h2>Your offer questions.<br /><span>Straight answers.</span></h2><p>Have something else on your mind?<br /><a className="cursor-pointer inline-flex items-center gap-[10px] text-xs font-semibold transition-colors hover:text-[#64812c]" href="tel:+917900351135">Call 7900351135 ↗</a></p></div><FaqList items={overviewFaqs} /></div></section>

        <section className="py-[63px] min-[801px]:py-[90px] bg-[#edf0e5]" id="service-details"><div className="mx-auto w-[calc(100%_-_40px)] max-w-[1240px] min-[801px]:w-[calc(100%_-_64px)] min-[1151px]:w-[calc(100%_-_96px)]">
          <div className="mb-[30px] flex flex-col gap-5 min-[541px]:mb-10 min-[541px]:flex-row min-[541px]:justify-between min-[541px]:gap-[25px] min-[801px]:items-end min-[801px]:gap-[45px] [&>p]:text-xs [&>p]:leading-[1.8] [&>p]:text-[#647369] min-[541px]:[&>p]:max-w-[230px] min-[801px]:[&>p]:mb-1 min-[801px]:[&>p]:max-w-[285px] min-[801px]:[&>p]:text-[13px] [&_h2]:text-[32px] [&_h2]:leading-[1.18] [&_h2]:font-[550] [&_h2]:tracking-[-1.5px] min-[801px]:[&_h2]:text-[clamp(32px,3.1vw,43px)] min-[801px]:[&_h2]:tracking-[-1.9px] [&_h2>span]:text-[#73806a]"><div><p className="mb-5 flex items-center gap-[9px] text-[9px] font-bold tracking-[1.7px] min-[801px]:mb-[23px] min-[801px]:text-[10px]">05 / EXPLORE EVERY POSSIBILITY</p><h2>Go deeper into<br /><span>what we can build together.</span></h2></div><p>Discover the services, modules, process and answers for your next project. Expand any service below.</p></div>
          <nav className="mb-[30px] grid grid-cols-2 gap-2 min-[541px]:flex min-[541px]:flex-wrap min-[541px]:gap-[10px] [&>a]:inline-flex [&>a]:items-center [&>a]:justify-between [&>a]:gap-2 [&>a]:rounded-[6px] [&>a]:border [&>a]:border-[#ccd6bc] [&>a]:bg-[#f8faf3] [&>a]:p-[11px] [&>a]:text-[10px] [&>a]:font-semibold [&>a]:transition-colors [&>a:hover]:bg-[#d9f28b] min-[541px]:[&>a]:gap-5 min-[541px]:[&>a]:px-4 min-[541px]:[&>a]:py-3 min-[541px]:[&>a]:text-[11px]" aria-label="Explore service details">{serviceDetails.map(detail => <a href={`#${detail.id}`} key={detail.id} onClick={() => openService(detail.id)}>{detail.eyebrow}<span aria-hidden="true">↗</span></a>)}</nav>
          <div className="grid gap-[18px]">{serviceDetails.map((detail, index) => <ServicePanel key={detail.id} detail={detail} index={index} choose={choose} />)}</div>
        </div></section>

        <section className="bg-[#d9f28b]"><div className="mx-auto w-[calc(100%_-_40px)] max-w-[1240px] min-[801px]:w-[calc(100%_-_64px)] min-[1151px]:w-[calc(100%_-_96px)] flex items-start justify-between gap-[18px] py-[50px] min-[541px]:items-center min-[541px]:gap-[35px] min-[801px]:py-[65px] [&_h2]:text-[34px] [&_h2]:leading-[1.05] [&_h2]:font-[550] [&_h2]:tracking-[-1.5px] min-[541px]:[&_h2]:text-[44px] min-[541px]:[&_h2]:tracking-[-2.4px] min-[801px]:[&_h2]:text-[clamp(38px,4.3vw,60px)] max-[380px]:[&_h2]:text-[30px]"><div><p className="mb-5 flex items-center gap-[9px] text-[9px] font-bold tracking-[1.7px] min-[801px]:mb-[23px] min-[801px]:text-[10px]">YOUR NEXT CHAPTER STARTS HERE</p><h2>Ready to Grow?<br /><span>Claim Your Offer Today.</span></h2><p className="my-[25px] max-w-[540px] text-[13px] leading-[1.8] min-[541px]:text-sm">Tell us what your business needs. We will come back with a clear plan, timeline and price.</p><div className="flex flex-wrap gap-3 [&>a]:gap-3 [&>a]:px-[15px] [&>a]:py-[13px] [&>a]:text-[11px] min-[541px]:[&>a]:gap-[22px] min-[541px]:[&>a]:px-[23px] min-[541px]:[&>a]:py-4 min-[541px]:[&>a]:text-[13px]"><a className="cursor-pointer inline-flex items-center justify-center gap-[22px] rounded-[7px] border border-transparent px-[23px] py-4 text-[13px] leading-[1.2] font-semibold transition-[background,transform,box-shadow] hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none bg-[#173d32] text-white hover:bg-[#285343]" href="#lead-form">Claim My Offer <Icon name="arrow" /></a><a className="cursor-pointer inline-flex items-center justify-center gap-[22px] rounded-[7px] border px-[23px] py-4 text-[13px] leading-[1.2] font-semibold transition-[background,transform,box-shadow] hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none border-[#cbd5c5] bg-transparent hover:bg-[#edf2e6]" href="tel:+917900351135">Call 7900351135 <Icon name="phone" /></a></div></div><a className="mt-[31px] grid size-[45px] shrink-0 place-items-center rounded-full border border-[#173d32]/45 transition-[background,transform] hover:rotate-[10deg] hover:bg-[#173d32]/5 min-[541px]:mt-0 min-[541px]:size-[75px] min-[801px]:mr-[15px] min-[801px]:size-[100px] max-[380px]:hidden [&>svg]:size-6 [&>svg]:-rotate-40 [&>svg]:stroke-[1.2] min-[541px]:[&>svg]:size-[31px] min-[801px]:[&>svg]:size-10" href="#lead-form" aria-label="Claim your Growthys offer"><Icon name="arrow" /></a></div></section>
      </main>

      <footer className="bg-[#f8f8f2]"><div className="mx-auto w-[calc(100%_-_40px)] max-w-[1240px] min-[801px]:w-[calc(100%_-_64px)] min-[1151px]:w-[calc(100%_-_96px)] flex flex-wrap items-center justify-between gap-5 border-b border-[#dde1d5] py-7 min-[541px]:flex-nowrap min-[541px]:py-[35px] [&>p]:order-3 [&>p]:w-full [&>p]:text-[10px] [&>p]:text-[#647369] min-[541px]:[&>p]:order-none min-[541px]:[&>p]:w-auto min-[801px]:[&>p]:text-[11px] [&>a:first-child]:text-[25px] [&>a:first-child>span:first-child]:size-[30px] [&>a:last-child]:flex [&>a:last-child]:items-center [&>a:last-child]:gap-[22px] [&>a:last-child]:text-xs [&>a:last-child]:font-semibold"><Brand /><p>Marketing, websites, HRMS & CRM. One team in your corner.</p><a href="tel:+917900351135">Book a call <Icon name="arrow" /></a></div><nav className="mx-auto w-[calc(100%_-_40px)] max-w-[1240px] min-[801px]:w-[calc(100%_-_64px)] min-[1151px]:w-[calc(100%_-_96px)] flex flex-wrap gap-[18px] pt-6 text-[11px] text-[#647369] min-[541px]:gap-x-[30px] min-[541px]:gap-y-[15px] [&>a:hover]:text-[#173d32]" aria-label="Footer services">{serviceDetails.map(detail => <a key={detail.id} href={`#${detail.id}`} onClick={() => openService(detail.id)}>{detail.eyebrow} ↗</a>)}</nav><div className="mx-auto w-[calc(100%_-_40px)] max-w-[1240px] min-[801px]:w-[calc(100%_-_64px)] min-[1151px]:w-[calc(100%_-_96px)] flex flex-wrap items-center justify-between gap-3 pt-[23px] pb-[107px] text-[9px] text-[#647369] min-[541px]:flex-nowrap min-[541px]:pb-[23px] min-[541px]:text-[8px] min-[801px]:gap-5 min-[801px]:text-[9px] [&>span:nth-child(2)]:hidden min-[541px]:[&>span:nth-child(2)]:flex [&>span:nth-child(2)]:items-center [&>span:nth-child(2)]:gap-2 [&_svg]:size-3"><span>© {copyrightYear} Growthys. All rights reserved.</span><span>Delhi-based team since 2022. <Icon name="spark" /></span><a href="#top">Back to top ↑</a></div></footer>
      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-[#d9f28b]/25 bg-[#10352b] px-5 pt-[14px] pb-[calc(14px_+_env(safe-area-inset-bottom))] text-white shadow-[0_-4px_20px_#173d3210] min-[541px]:hidden [&>div>span]:mb-[5px] [&>div>span]:block [&>div>span]:text-[7px] [&>div>span]:tracking-[1px] [&>div>span]:text-[#c2d0b8] [&_strong]:text-[23px] [&_strong]:leading-none [&_strong]:font-[550] [&_strong]:tracking-[-0.5px] [&_small]:text-[9px] [&_small]:font-normal [&_small]:tracking-normal [&_small]:text-[#c4d0bd] [&>a]:gap-[15px] [&>a]:px-[17px] [&>a]:py-[13px] [&>a]:text-[11px]"><div><span>LIMITED-TIME OFFER</span><strong>₹19,999 <small>/ month</small></strong></div><a className="cursor-pointer inline-flex items-center justify-center gap-[22px] rounded-[7px] border border-transparent px-[23px] py-4 text-[13px] leading-[1.2] font-semibold transition-[background,transform,box-shadow] hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none bg-[#d9f28b] text-[#10352b] hover:bg-[#e4ffa2]" href="#lead-form" onClick={() => choose('Digital Marketing Services')}>Claim Now <Icon name="arrow" /></a></div>
    </div>
  )
}