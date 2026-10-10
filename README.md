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
- Styling uses Tailwind utilities; `src/index.css` contains the Tailwind import.

The enquiry form opens WhatsApp with the entered details for the visitor to review and send. It does not store submissions or confirm reservations. Confirm offer availability, final project scope and terms during consultation.
