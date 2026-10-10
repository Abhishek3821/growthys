# Growthys

Responsive landing page for Growthys digital marketing, IT services, HRMS and CRM development. Built with React, TypeScript, Vite and Tailwind CSS.

## Run locally

```sh
npm install
npm run dev
```

## Validate and build

```sh
npm run lint
node scripts/check-landing-content.mjs
npm run build
```

Use `npm run preview` to preview the production build.

## Content and styling

- `src/Landing_page.tsx`: current page content, packages, service details, navigation and enquiry form.
- `src/offer-content.ts` and `src/landing-content.ts`: earlier imported content reference files.
- `src/page-components.tsx`: shared service panels, FAQs, benefits and process steps.
- `src/index.css`: responsive layout, typography, form and component styles.
- `public/logo.png`: supplied Growthys artwork with a transparent background; favicon, touch icon and social preview assets are also in `public`.

The enquiry form opens WhatsApp with the entered details for the visitor to review and send. It does not store submissions or confirm reservations. Confirm offer availability, final project scope and terms during consultation.

The selected service determines the package displayed above the form. `src/enquiry-message.ts` includes that package's name, price, scope and bonus alongside all contact fields in the WhatsApp handoff. The content check validates all four package messages and URL encoding.

`src/components/ServiceGraphic.tsx` contains the responsive SVG service illustrations. These explain the services without presenting invented performance metrics.
