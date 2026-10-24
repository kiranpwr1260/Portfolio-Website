# Portfolio-Website

## DS Associate Website

Responsive one-page company website built with Next.js App Router, TypeScript, Tailwind CSS v4, shadcn/ui-style components, Radix UI, and Lucide icons. The source specifications and launch checklist are in [`DSA_WEBSITE_REFERENCE.md`](./DSA_WEBSITE_REFERENCE.md).

## Requirements

- Node.js 20.9 or later
- npm

## Local setup

```powershell
npm.cmd install
Copy-Item .env.example .env.local
npm.cmd run dev
```

Open [http://localhost:3000](http://localhost:3000). The site can run without environment variables; `.env.local` is optional during development.

## Commands

```powershell
npm.cmd run dev        # local development
npm.cmd run typecheck  # TypeScript validation
npm.cmd run build      # production build
npm.cmd run start      # serve the production build
```

ESLint is not configured in this project; there is no lint command yet.

## Content editing

Edit company details, contact information, office locations, founder copy, service offerings, property ranges, project-reference data, sectors, FAQs, and the launch checklist in [`src/content/site.ts`](./src/content/site.ts). Keep unverified company facts marked for confirmation. The page sections are in `src/components/site-sections.tsx`; the shared navigation and enquiry form live in `src/components/site-header.tsx` and `src/components/contact-form.tsx`.

Before publishing:

1. Confirm the official name, logo, public positioning, founder biography, experience, education, and career details (`TODO: confirm before launch` in the typed content config).
2. Verify phone numbers, email addresses, office address/locations, current property sourcing capability, and Built-to-Suit availability.
3. Approve client references, project status, spelling, policy terminology, and imagery/licensing.
4. Confirm privacy/consent wording and the form-delivery approach.
5. Replace the example canonical domain and configure `NEXT_PUBLIC_SITE_URL`.
6. Complete the full launch checklist in `DSA_WEBSITE_REFERENCE.md`.

## Enquiry form

The current form performs browser-side required-field, email, and message-length validation and prepares a `mailto:` draft addressed to the configured company email. It does **not** submit or store personal information and does not include a backend or spam service. Visitors are explicitly told to review and send the generated draft. To integrate a form provider, add a server-side route/action, validate and sanitise submitted fields there, protect against spam, and keep provider credentials in server-only environment variables. Update the consent and privacy text to match the approved handling policy.

`.env.example` contains only the optional public site URL placeholder; do not put private credentials in `NEXT_PUBLIC_*` variables.

## Deployment

The application can be deployed to any Node.js hosting provider supporting Next.js:

1. Connect the repository or upload the application files.
2. Use `npm.cmd install` (or the host's npm install command) and `npm run build` as the build command.
3. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS canonical domain in the host environment.
4. Set the start command to `npm run start` when using a Node server, or use the platform's native Next.js deployment integration.
5. Configure the selected enquiry backend and server-side secrets only if a backend is added.
6. Verify the production domain, metadata, sitemap, robots file, form flow, and all launch approvals.

The site uses Unsplash-hosted industrial imagery. Confirm applicable image licensing and replace or self-host approved assets before launch.
