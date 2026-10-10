export type ContentPair = { title: string; text: string }
export type ServiceDetail = {
  id: string; service: string; eyebrow: string; title: string; subtitle: string;
  introTitle: string; intro: string[]; cardsTitle: string; cards: ContentPair[];
  prices?: ContentPair[]; whyTitle: string; benefits: ContentPair[];
  processTitle: string; steps: ContentPair[]; faqs: ContentPair[];
  closingTitle: string; closingText: string; action: string;
}

export const serviceDetails: ServiceDetail[] = [
  {
    "id": "it-services",
    "service": "IT Services",
    "eyebrow": "IT Services",
    "title": "IT Services That Keep Your Business Running and Growing",
    "subtitle": "From custom software and web apps to hosting and ongoing support, Growthys builds and maintains the technology your team depends on every day.",
    "introTitle": "Technology Should Solve Problems, Not Create Them",
    "intro": [
      "Most businesses outgrow their tools long before they replace them. Work gets stuck in spreadsheets, systems do not talk to each other, and small issues turn into daily delays.",
      "We design, build and support software around the way your business actually works. You get one team that understands both the technology and the growth goals behind it."
    ],
    "cardsTitle": "Our IT Services",
    "cards": [
      {
        "title": "Custom Software Development",
        "text": "Software built around your process, not the other way round. We plan, code and deliver tools your team will actually use."
      },
      {
        "title": "Web Application Development",
        "text": "Secure, fast web apps hand-coded in PHP and JavaScript, from customer portals to internal dashboards."
      },
      {
        "title": "Website Design & Development",
        "text": "Responsive business websites on WordPress or custom code, built for speed, search and conversions."
      },
      {
        "title": "E-Commerce Development",
        "text": "Shopify and custom online stores with payment gateway, shipping and tax setup done for you."
      },
      {
        "title": "UI/UX Design",
        "text": "Clean, intuitive interfaces designed from wireframe to final screen, so users find what they need quickly."
      },
      {
        "title": "Integration & Automation",
        "text": "Connect your website, CRM, payment and messaging tools so data moves without manual entry."
      },
      {
        "title": "Hosting & Deployment",
        "text": "Domain, hosting, SSL and launch handled end to end, with speed and security checks before go-live."
      },
      {
        "title": "Maintenance & Support",
        "text": "Updates, backups, bug fixes and improvements after launch, so your systems stay reliable."
      }
    ],
    "whyTitle": "Why Businesses Choose Growthys for IT",
    "benefits": [
      {
        "title": "One team for build and growth",
        "text": "The people who build your product sit next to the people who market it. Your software is designed to bring in business, not just to function."
      },
      {
        "title": "Clear scope, clear price",
        "text": "You see what will be built, how long it will take and what it costs before work starts. No hidden fees."
      },
      {
        "title": "You own the code",
        "text": "Every custom project ends with a complete source code handover."
      },
      {
        "title": "Support after launch",
        "text": "We stay available once you go live, with dedicated technical support and optional ongoing maintenance."
      }
    ],
    "processTitle": "How We Work",
    "steps": [
      {
        "title": "Discover & Plan",
        "text": "We study your business, users and current systems, then agree on scope, timeline and cost."
      },
      {
        "title": "Design & Build",
        "text": "Our designers and developers create the product in stages, sharing progress as each part is ready."
      },
      {
        "title": "Test & Launch",
        "text": "We test across devices and browsers, fix issues, and deploy with security and speed checks."
      },
      {
        "title": "Support & Improve",
        "text": "After launch we monitor, maintain and add features as your business grows."
      }
    ],
    "faqs": [
      {
        "title": "What IT services does Growthys provide?",
        "text": "We build custom software, web applications, business websites and online stores. We also handle UI/UX design, integrations, hosting setup and ongoing maintenance."
      },
      {
        "title": "How much does a project cost?",
        "text": "It depends on scope. Websites start at ₹14,999 and custom coded web projects at ₹24,999. Larger software projects are quoted after a short discovery call."
      },
      {
        "title": "How long does development take?",
        "text": "Your business website delivery timeline is confirmed after we understand the scope. Custom software timelines depend on features and are confirmed in your proposal before work begins."
      },
      {
        "title": "Will I own the source code?",
        "text": "Yes. Custom coded projects include a complete source code handover."
      },
      {
        "title": "Do you provide support after launch?",
        "text": "Yes. Custom coded projects include 30 days of dedicated technical support, and ongoing maintenance plans are available."
      }
    ],
    "closingTitle": "Have a Project in Mind?",
    "closingText": "Tell us what you want to build or fix. We will come back with a clear plan, timeline and quote.",
    "action": "Get a quote"
  },
  {
    "id": "digital-marketing-services",
    "service": "Digital Marketing",
    "eyebrow": "Digital Marketing Services",
    "title": "Digital Marketing That Turns Clicks Into Customers",
    "subtitle": "SEO, paid ads, social media and content, planned by people and sharpened by AI. Every campaign is measured by the leads and sales it brings in.",
    "introTitle": "More Visibility Is Good. More Revenue Is Better.",
    "intro": [
      "Rankings, reach and followers only matter when they turn into enquiries. We build your marketing around that one outcome.",
      "We start with your audience and competitors, choose the channels that fit your budget, and report on what each rupee delivers. No jargon, no guesswork."
    ],
    "cardsTitle": "Our Digital Marketing Services",
    "cards": [
      {
        "title": "Search Engine Optimization (SEO)",
        "text": "Keyword research, on-page fixes, technical audits and link building that grow organic traffic month after month."
      },
      {
        "title": "Pay-Per-Click Advertising (PPC)",
        "text": "Google and Meta ad campaigns with precise targeting, conversion tracking and continuous A/B testing."
      },
      {
        "title": "Social Media Marketing",
        "text": "Post design, copywriting and a steady schedule across Facebook, Instagram and LinkedIn to build trust and reach."
      },
      {
        "title": "Google Business Profile & Local SEO",
        "text": "Profile optimization, regular posts and review management so nearby customers find you first on Maps."
      },
      {
        "title": "Content Marketing & Design",
        "text": "Graphics, video scripts and ad copy that get attention and move people to act."
      },
      {
        "title": "Web Setup & Analytics",
        "text": "Fast landing pages with GA4 and Tag Manager tracking, so every conversion is counted."
      },
      {
        "title": "Conversion Rate Optimization (CRO)",
        "text": "Better layouts, user experience and lead forms that turn more of your visitors into buyers."
      },
      {
        "title": "AEO & GEO",
        "text": "Content structured so AI assistants and generative search tools can understand and cite your brand."
      }
    ],
    "prices": [
      {
        "title": "SEO",
        "text": "₹5,999 per month"
      },
      {
        "title": "Google Business Profile",
        "text": "₹4,999 per month"
      },
      {
        "title": "Social Media Optimization",
        "text": "₹4,999 per month"
      },
      {
        "title": "PPC / Paid Ads",
        "text": "₹9,999 per month, or 30% of ad spend"
      }
    ],
    "whyTitle": "Why Growthys",
    "benefits": [
      {
        "title": "Human strategy, AI speed",
        "text": "Our specialists set the direction. AI tools help us research, test and optimize faster."
      },
      {
        "title": "Strategy built for you",
        "text": "Every plan starts with research into your business, audience and competitors. No templates."
      },
      {
        "title": "Transparent reporting",
        "text": "You get regular reports showing rankings, spend, leads and what we are doing next."
      },
      {
        "title": "Everything under one roof",
        "text": "SEO, ads, social, content, design and development work together as one team."
      }
    ],
    "processTitle": "A Simple Process. Better Results.",
    "steps": [
      {
        "title": "Discover & Plan",
        "text": "We review your goals, audience, competitors and current digital presence, then build a custom strategy."
      },
      {
        "title": "Strategy & Execute",
        "text": "We launch campaigns across the channels that fit your business."
      },
      {
        "title": "Launch & Optimize",
        "text": "We monitor performance, analyze the data and keep improving results."
      },
      {
        "title": "Measure & Grow",
        "text": "We share clear insights and scale what works."
      }
    ],
    "faqs": [
      {
        "title": "How long does it take to see results?",
        "text": "Paid ads can produce measurable results within one to two weeks of launch. SEO usually takes three to six months to show significant gains."
      },
      {
        "title": "Which service should I start with?",
        "text": "It depends on your goal. If you need leads quickly, start with paid ads. If you want lasting visibility, start with SEO. Most businesses do best with both."
      },
      {
        "title": "How much should I budget?",
        "text": "Plans start at ₹4,999 per month. For paid ads, your ad spend is separate from our management fee."
      },
      {
        "title": "Will I get reports?",
        "text": "Yes. Every plan includes regular reporting, monthly for SEO and social media and weekly for paid ads."
      },
      {
        "title": "Do you work with small businesses?",
        "text": "Yes. Our starter plans are built for local and small businesses beginning their online growth."
      }
    ],
    "closingTitle": "Ready to Grow Your Leads?",
    "closingText": "Tell us about your business and goals. We will recommend the right mix of channels and a plan that fits your budget.",
    "action": "Get a quote"
  },
  {
    "id": "hrms-software-development",
    "service": "HRMS",
    "eyebrow": "HRMS Software Development",
    "title": "Custom HRMS Software Built Around Your People and Policies",
    "subtitle": "Manage attendance, leave, payroll, hiring and performance in one system designed for the way your company works.",
    "introTitle": "HR Runs Better Without the Spreadsheets",
    "intro": [
      "Attendance in one sheet, leave on WhatsApp, salary in another file. As your team grows, the manual work grows faster, and so do the errors.",
      "We build HRMS software that brings every HR task into one secure system. Your HR team saves hours each month, and employees get quick answers without chasing anyone."
    ],
    "cardsTitle": "What Your HRMS Can Include",
    "cards": [
      {
        "title": "Employee Database",
        "text": "One profile per employee with documents, job history, salary structure and contact details."
      },
      {
        "title": "Attendance & Shift Management",
        "text": "Daily attendance, shifts, overtime and late marks, with biometric and mobile check-in options confirmed during discovery."
      },
      {
        "title": "Leave Management",
        "text": "Leave policies, balances, holiday calendars and approvals in a few clicks."
      },
      {
        "title": "Payroll & Compliance",
        "text": "Salary calculation with PF, ESI, TDS and professional tax, plus payslips generated automatically."
      },
      {
        "title": "Recruitment & Onboarding",
        "text": "Track openings, candidates and interviews, then onboard new hires with digital paperwork."
      },
      {
        "title": "Performance Management",
        "text": "Set goals, run reviews and record feedback, so appraisals are based on facts."
      },
      {
        "title": "Employee Self-Service",
        "text": "A mobile-friendly portal where staff apply for leave, download payslips and update details."
      },
      {
        "title": "Reports & Dashboards",
        "text": "Headcount, attrition, attendance and payroll cost at a glance, exportable when you need them."
      }
    ],
    "whyTitle": "Why Build Your HRMS With Growthys",
    "benefits": [
      {
        "title": "Built for your policies",
        "text": "Your leave rules, shift patterns and salary structures are configured in, not worked around."
      },
      {
        "title": "Pay for what you need",
        "text": "Start with the modules you need today and add more as your team grows."
      },
      {
        "title": "Role-based access",
        "text": "HR, managers and employees each see only what they should, with every change logged."
      },
      {
        "title": "Easy to use",
        "text": "A clean interface designed by our UI/UX team, so staff need little or no training."
      },
      {
        "title": "Help moving your data",
        "text": "We import your existing employee records from Excel, so you do not start from zero."
      }
    ],
    "processTitle": "From First Call to Go-Live",
    "steps": [
      {
        "title": "Understand",
        "text": "We map your HR processes, policies and pain points."
      },
      {
        "title": "Design",
        "text": "You approve screens and workflows before any code is written."
      },
      {
        "title": "Build & Test",
        "text": "We develop module by module and test with your real scenarios."
      },
      {
        "title": "Launch & Train",
        "text": "We migrate your data, train your HR team and go live."
      },
      {
        "title": "Support",
        "text": "We stay on hand for fixes, updates and new features."
      }
    ],
    "faqs": [
      {
        "title": "Why choose custom HRMS over ready-made software?",
        "text": "Ready-made tools make you adapt to their workflow and often charge per employee. A custom HRMS fits your policies exactly and can grow with you."
      },
      {
        "title": "How long does it take to build?",
        "text": "It depends on the modules you choose. The delivery timeline for attendance, leave and payroll modules is confirmed in your proposal."
      },
      {
        "title": "Can it connect with our biometric machine or accounting software?",
        "text": "Biometric device and accounting integrations, including Tally, are assessed during discovery. We confirm compatibility during the discovery call."
      },
      {
        "title": "Is our employee data secure?",
        "text": "Access is controlled by role, passwords are securely hashed and data is backed up regularly. Hosting options are discussed during planning."
      },
      {
        "title": "How much does HRMS development cost?",
        "text": "Cost depends on modules, number of users and integrations. We share a fixed quote after understanding your requirements."
      },
      {
        "title": "Do you provide training and support?",
        "text": "Yes. Every project includes training for your HR team and a post-launch support period agreed in your proposal, with ongoing maintenance available."
      }
    ],
    "closingTitle": "Give Your HR Team Their Time Back",
    "closingText": "Tell us how many employees you have and what slows your HR team down. We will show you what your HRMS could look like.",
    "action": "Request a demo"
  },
  {
    "id": "crm-software-development",
    "service": "CRM",
    "eyebrow": "CRM Software Development",
    "title": "Custom CRM Software That Never Lets a Lead Slip Away",
    "subtitle": "Capture every enquiry, follow up on time and see your whole sales pipeline in one place, in a CRM built around how your team sells.",
    "introTitle": "You Paid for Those Leads. Make Every One Count.",
    "intro": [
      "Leads arrive from your website, ads, calls and WhatsApp. Without one system, some get a late reply and some get none at all.",
      "We build CRM software that collects every lead automatically, assigns it to the right person and reminds them to follow up. You see what is working, who is closing and where deals get stuck."
    ],
    "cardsTitle": "What Your CRM Can Include",
    "cards": [
      {
        "title": "Lead Capture",
        "text": "Leads from your website forms, Google and Meta ads and WhatsApp (subject to integration compatibility) land in the CRM automatically."
      },
      {
        "title": "Lead Assignment",
        "text": "New enquiries go to the right salesperson instantly, by product, location or round robin."
      },
      {
        "title": "Sales Pipeline",
        "text": "A visual board of every deal by stage, so you always know what is closing this month."
      },
      {
        "title": "Follow-Ups & Reminders",
        "text": "Tasks, call notes and alerts that make sure no enquiry is forgotten."
      },
      {
        "title": "Contact Management",
        "text": "Complete customer history, including calls, messages, quotes and purchases, on one screen."
      },
      {
        "title": "Quotes & Invoices",
        "text": "Create and send quotations and invoices in minutes, linked to the right deal."
      },
      {
        "title": "Workflow Automation",
        "text": "Automatic emails, messages and status updates for routine steps, freeing your team to sell."
      },
      {
        "title": "Reports & Dashboards",
        "text": "Lead source, conversion rate, team performance and revenue in real time."
      }
    ],
    "whyTitle": "Why Build Your CRM With Growthys",
    "benefits": [
      {
        "title": "Marketing and CRM, connected",
        "text": "We run lead campaigns every day. Your CRM is built to show which ads and keywords bring real customers."
      },
      {
        "title": "Fits your sales process",
        "text": "Your stages, fields and approvals are built in. You do not bend your process to fit the software."
      },
      {
        "title": "No per-user licence trap",
        "text": "A custom CRM is yours. Add team members without a rising monthly bill per seat."
      },
      {
        "title": "Simple for your sales team",
        "text": "A clean, mobile-friendly interface that people will actually open and update."
      },
      {
        "title": "Integrations that matter",
        "text": "We connect your CRM with payment gateways, email, WhatsApp and accounting tools, subject to compatibility confirmed during discovery."
      }
    ],
    "processTitle": "From First Call to Go-Live",
    "steps": [
      {
        "title": "Understand",
        "text": "We map how leads arrive, how your team sells and where deals are lost."
      },
      {
        "title": "Design",
        "text": "You approve the pipeline, screens and reports before development starts."
      },
      {
        "title": "Build & Test",
        "text": "We develop in stages and test with your real leads and scenarios."
      },
      {
        "title": "Launch & Train",
        "text": "We import your existing contacts, train your team and go live."
      },
      {
        "title": "Support",
        "text": "We stay available for fixes, updates and new features."
      }
    ],
    "faqs": [
      {
        "title": "Why build a custom CRM instead of buying one?",
        "text": "Off-the-shelf CRMs charge per user and carry features you never use. A custom CRM matches your sales process and has no per-seat fee."
      },
      {
        "title": "How long does CRM development take?",
        "text": "It depends on features and integrations. The delivery timeline for lead capture, pipeline and follow-ups is confirmed in your proposal."
      },
      {
        "title": "Can it capture leads from my ads and website automatically?",
        "text": "Yes. We connect your website forms and Google and Meta lead campaigns, so every enquiry reaches your team within moments."
      },
      {
        "title": "Can we move our existing data from Excel or another CRM?",
        "text": "Yes. We import your contacts, leads and deal history during setup."
      },
      {
        "title": "Will it work on mobile?",
        "text": "Yes. The CRM is fully responsive, so your sales team can update leads from the field."
      },
      {
        "title": "How much does it cost?",
        "text": "Cost depends on modules, users and integrations. We share a fixed quote after a short discovery call."
      }
    ],
    "closingTitle": "Turn More Enquiries Into Customers",
    "closingText": "Tell us how your leads come in and how your team follows up today. We will show you what a CRM built for your business would look like.",
    "action": "Request a demo"
  }
]
