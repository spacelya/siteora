# Siteora

Independent AI-assisted web design service. Siteora is a provisional working brand, not a registered-brand claim. This repository contains the agency site and the self-initiated, fictional Atelier Nour beauty salon demo. No client results, reviews, or relationships are claimed.

## Run locally

Install Node.js if needed, then run `node preview.mjs` from this folder and open http://localhost:4173. There is no dependency installation or build step. Deploy **the contents of `dist`**, not the whole repository.

## Cloudflare Pages, free static hosting

Use Workers & Pages → Create → Pages → upload assets. Upload `dist` or a ZIP of its contents. Select a free `.pages.dev` address. Do not buy a domain, enable a paid plan, or add paid bindings. For a Git-connected project: production branch `main`, no build command, output directory `dist`. A Direct Upload project does not automatically become Git-integrated; use the documented deployment method or a separate Git-integrated project later.

No server, database, external fonts, analytics, image services, or API keys are required. The email brief opens a local mail application; it does not submit to a backend. The salon booking form is an explicitly labelled local-only preview.

## Editing

- Agency content: `dist/index.html`; colours/layout: `dist/style.css`.
- Contact email appears in `dist/index.html` and `dist/app.js`; update both together.
- Salon: `dist/demos/atelier-nour/`.
- Replace Siteora throughout when choosing a final brand. Check brand availability before investing.
- All current artwork is original CSS illustration. No external photo licences are required.
- Do not add secrets, account tokens, private client details, or real customer information to this public source.

## Launch checks

Review on a phone and desktop; use keyboard navigation; open the salon demo; verify email recipient and subject in your mail app; verify the Fiverr profile link; check service scope. A mail app must be configured to use the email brief. No email is sent until the visitor sends it in their own app.

See `NEXT-STEPS.md` for demo development and a first Fiverr listing plan.
