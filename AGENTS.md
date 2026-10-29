# AGENTS.md - Project Constitution

## Project Overview
CA Agency (caagency.com) — Full-service influencer marketing agency website. Prepared for hosting on caagency-server behind Caddy and Cloudflare Tunnel. Live traffic must not change without approval.

## The Council (Agent Personas)
Specialized expert agent personas:
- **@Shaper**: Architectural reviews and structural planning.
- **@Sentinel**: Security audits and robust error handling.
- **@Oracle**: Strategic guidance and future-proofing.
- **@Aesthete**: UX/UI polish and frontend excellence.

## Tech Stack
- **Framework**: Next.js 16.3 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: Prisma with `@prisma/adapter-pg` on the server's PostgreSQL (`caagency_website` in the `caagency-postgres` container, shared with finance); JSON arrays for post categories and tags
- **Auth**: NextAuth v5 (beta)
- **i18n**: next-intl
- **Hosting**: Node.js systemd service on caagency-server; Next.js disk cache for ISR
- **Assets**: Local durable media directory and Next.js /public assets

## Key Commands

- `npm ci` — Install dependencies
- `npm run db:migrate:deploy` — Apply `prisma/pg-migrations` (prisma migrate deploy)
- `npm run build:server` — Build the standalone server (prerenders from PostgreSQL)
- `npx tsc --noEmit` — Type check
- `npm run lint` — ESLint
- `npm test` — Unit and security checks

Finance is a separate service with its own database (`caagency_finance`). Do not change
live DNS, production Workers, or the old server without approval.

## Folder Structure
- `app/(site)/` — Public-facing pages (home, about, talents, work, etc.)
- `app/[locale]/` — i18n-enabled pages
- `app/admin/` — Admin dashboard (protected by auth)
- `app/api/` — REST API routes
- `components/blocks/` — Full sections (HeroSection, VideoShowcase, FAQ, etc.)
- `components/ui/` — Reusable UI atoms (Button, Heading, Text, ScrollReveal, etc.)
- `components/layout/` — Header, Footer, MobileMenu
- `lib/` — Utils, fonts, data, auth, prisma client
- `i18n/`, `messages/` — next-intl config and per-locale message catalogs
- `prisma/` — Schema, `pg-migrations/`, blog seed content
- `scripts/` — Build-time generators (asset/video manifests, blog covers, world map) and CI publishing
- `deploy/` — systemd units and backup script for caagency-server; `redesign-preview/` is the dev stage
- `docs/google-ads/` — Google Ads search campaign plan and import CSVs
- `tests/unit/`, `tests/e2e/` — Vitest and Playwright suites
- `public/videos/` — MP4 videos (some are 5-30MB, use lazy loading)
- `public/images/` — Static images (hero, logos, work samples)

## Performance Rules
- Utility CSS is compiled by page entry: homepages import `app/home-utilities.css`, other public pages import `app/public-utilities.css`, and the admin layout imports `app/admin.css`. `app/globals.css` holds the shared base and custom rules. New pages need the matching import; homepage component exclusions are checked by `tests/unit/style-sources.test.ts`.
- All hero carousel images use `priority` and `fetchPriority="high"` for LCP
- The below-the-fold `VideoShowcase` is lazy-loaded via `DeferredVideoShowcase` once it nears the viewport
- Videos use IntersectionObserver-based lazy loading (`VideoPlayer.tsx`, `CollageVideo.tsx`: `preload="none"`, buffer near view, play on screen)
- Only the first two hero collage photos are `priority`; below-the-fold posters never are
- Brand logos explicitly set `loading="lazy"`
- No preconnect to blob storage: all images route through same-origin `/_next/image` and videos are local, so the browser never contacts the blob domain directly
- CSS is inlined into the HTML (`experimental.inlineCss`) — no render-blocking stylesheet request. Turning it off (Oct 2026) cost ~200ms FCP/LCP on the homepage in production Lighthouse; don't flip it without field data
- Hero entrance animations (`hero-rise*`) are transform-only — never fade LCP candidates from opacity 0
- Static assets get `immutable` Cache-Control headers via public/_headers
- Real-visitor Core Web Vitals (LCP, INP, CLS, FCP, TTFB) are beaconed to `/api/vitals` and logged as `[vitals]` journal lines; judge performance changes on that field data (`journalctl -u caagency-website -o cat | node scripts/vitals-report.mjs`)

## Verification Standards
- TypeScript must pass: `npx tsc --noEmit`
- Lint must pass: `npm run lint`
- All images use Next.js `<Image>` with proper `sizes` attribute
- Videos never autoplay above the fold without user interaction context
