# Brian Dol's portfolio

A Next.js and TypeScript portfolio with responsive project filtering, expandable case studies, and a live API health indicator. Cloudflare's vinext adapter prepares the app to run on Cloudflare Workers.

## Develop locally

Install dependencies with `npm install`, then run `npm run dev` for the standard Next.js development server. Use `npm run dev:vinext` to run the Cloudflare-compatible development server.

## Verify the Cloudflare build

Run `npm run build:vinext` to build the Workers deployment. Run `npm run start:vinext` to preview the built app locally.

## Deploy

After connecting Cloudflare authentication, run `npm run deploy:vinext` to deploy the app to Cloudflare Workers. The project can use a free `*.workers.dev` address. For automatic Git-based deployments, connect the GitHub repository through Cloudflare Workers Builds and set:

- Build command: `npm run build:vinext`
- Deploy command: `npm run deploy:vinext`
- Production branch: `main`
- Root directory: `/`

The Cloudflare `vinext` adapter is currently in beta. Its compatibility check and production build should be run again after adding framework features or upgrading dependencies.

## Before publishing

- Review job titles, dates, education, and outcome metrics for accuracy.
- Add links or detailed case studies for work that can be shared publicly.
- The email address is public on this site. A phone number and street-level address are intentionally omitted.
