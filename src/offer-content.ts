import type { ContentPair } from './landing-content'

export const serviceSummaries = [
  { id: 'digital-marketing-services', service: 'Digital Marketing', title: 'Digital Marketing Services', description: 'Get found, get clicks and get customers. We plan and run your marketing across search, social and paid ads, and report on the leads each channel brings.', features: ['Search Engine Optimization (SEO)', 'Google and Meta ads (PPC)', 'Social media marketing', 'Google Business Profile and local SEO', 'Content, creatives and ad copy', 'GA4 and conversion tracking'] },
  { id: 'it-services', service: 'IT Services', title: 'IT Services', description: 'Websites, online stores and custom web applications built to load fast, look sharp and convert visitors.', features: ['WordPress business websites', 'Shopify e-commerce stores', 'Custom coded web apps in PHP and JavaScript', 'UI/UX design', 'Hosting, SSL and deployment', 'Maintenance and support'] },
  { id: 'hrms-software-development', service: 'HRMS', title: 'HRMS Software Development', description: 'Replace spreadsheets with one HR system made for your company. Your team saves hours every month and employees get answers without chasing HR.', features: ['Employee records and documents', 'Attendance and shift tracking', 'Leave management and approvals', 'Payroll with PF, ESI and TDS', 'Recruitment and onboarding', 'Employee self-service portal'] },
  { id: 'crm-software-development', service: 'CRM', title: 'CRM Software Development', description: 'Stop losing leads you already paid for. Every enquiry is captured, assigned and followed up in one place.', features: ['Automatic lead capture from website and ads', 'Lead assignment to your sales team', 'Visual sales pipeline', 'Follow-up tasks and reminders', 'Quotes and invoices', 'Sales reports and dashboards'] },
]

export const offerCards = [
  { service: 'Digital Marketing', title: 'Digital Marketing Growth Pack', description: 'SEO for 10 keywords, Google Business Profile management, social media on 3–4 platforms, and Google & Meta ads management, with monthly reports.', regular: '₹25,996 / month', price: '₹19,999', period: '/ month', bonus: 'Ad spend is paid separately to the ad platforms.', featured: true },
  { service: 'IT Services', title: 'IT Services: Website Launch Pack', description: 'A 5–7 page responsive WordPress website with SSL, speed optimization, contact form, WhatsApp integration and basic on-page SEO.', regular: '₹14,999 / project', price: '₹14,999', period: '/ project · bonus included', bonus: 'Bonus: one month of Google Business Profile management, worth ₹4,999.', featured: false },
  { service: 'HRMS', title: 'HRMS Software Starter', description: 'Employee database, attendance, leave and payroll modules, built around your policies.', regular: 'Tailored to your requirements', price: 'Custom quote', period: 'Modules, users & integrations', bonus: 'Bonus: free data migration from Excel.', featured: false },
  { service: 'CRM', title: 'CRM Software Starter', description: 'Lead capture from website and ads, sales pipeline, follow-up reminders and reports.', regular: 'Tailored to your requirements', price: 'Custom quote', period: 'Modules, users & integrations', bonus: 'Bonus: free website form integration.', featured: false },
]

export const overviewSteps: ContentPair[] = [
  { title: 'Claim your offer', text: 'Fill in the form and tell us which service you need.' },
  { title: 'Free consultation call', text: 'We understand your business, goals and budget, then share a clear plan and quote.' },
  { title: 'We build and launch', text: 'Our team executes your campaign or project and keeps you updated at every stage.' },
  { title: 'Measure and grow', text: 'You get transparent reports, and we keep optimizing what works.' },
]
export const overviewBenefits: ContentPair[] = [
  { title: 'Human + AI', text: 'Experienced specialists set the strategy. AI tools make research, testing and optimization faster.' },
  { title: 'One team, four services', text: 'Marketing, websites, HRMS and CRM under one roof, so everything works together.' },
  { title: 'Transparent pricing', text: 'You know the cost and scope before we start. No hidden fees.' },
  { title: 'Clear reporting', text: 'Regular reports show exactly what was done and what it delivered.' },
  { title: 'You own your work', text: 'Custom coded projects come with a complete source code handover.' },
  { title: 'Real people to talk to', text: 'A dedicated team you can call, not a ticket queue.' },
]
export const overviewFaqs: ContentPair[] = [
  { title: 'What is included in the Digital Marketing Growth Pack?', text: 'SEO for up to 10 keywords, Google Business Profile management, social media management on 3–4 platforms and Google and Meta ads management. Ad spend is paid separately to the ad platforms.' },
  { title: 'How long is the offer valid?', text: 'Contact our team for the current offer validity and availability. Share your requirements and we will confirm the applicable price before work begins.' },
  { title: 'Can I choose more than one service?', text: 'Yes. Select your main service in the form and tell us about the rest on the call. We will prepare a combined quote.' },
  { title: 'How soon will I see results?', text: 'Paid ads can show results within one to two weeks. SEO usually takes three to six months. Website and software timelines are confirmed in your proposal.' },
  { title: 'How is HRMS and CRM pricing decided?', text: 'It depends on the modules, number of users and integrations you need. You get a fixed quote after a short discovery call.' },
  { title: 'Is there a long-term contract?', text: 'Billing schedules, project milestones and engagement terms are confirmed in your proposal before work begins. Ask our team about the terms for your selected marketing plan or development project.' },
]
