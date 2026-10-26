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
- `public/videos/` — MP4 videos (some are 5-30MB, use lazy loading)
- `public/images/` — Static images (hero, logos, work samples)

## Performance Rules
- All hero carousel images use `priority` and `fetchPriority="high"` for LCP
- The below-the-fold `VideoShowcase` is lazy-loaded via `DeferredVideoShowcase` once it nears the viewport
- Videos use IntersectionObserver-based lazy loading (`VideoPlayer.tsx`, `CollageVideo.tsx`: `preload="none"`, buffer near view, play on screen)
- Only the first two hero collage photos are `priority`; below-the-fold posters never are
- Brand logos explicitly set `loading="lazy"`
- No preconnect to blob storage: all images route through same-origin `/_next/image` and videos are local, so the browser never contacts the blob domain directly
- CSS is inlined into the HTML (`experimental.inlineCss`) — no render-blocking stylesheet request. Turning it off (Oct 2026) cost ~200ms FCP/LCP on the homepage in production Lighthouse; don't flip it without field data
- Hero entrance animations (`hero-rise*`) are transform-only — never fade LCP candidates from opacity 0
- Static assets get `immutable` Cache-Control headers via public/_headers

## Verification Standards
- TypeScript must pass: `npx tsc --noEmit`
- Lint must pass: `npm run lint`
- All images use Next.js `<Image>` with proper `sizes` attribute
- Videos never autoplay above the fold without user interaction context
