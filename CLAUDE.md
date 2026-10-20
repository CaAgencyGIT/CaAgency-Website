# CLAUDE.md - Project Constitution

## Project Overview
CA Agency (caagency.com) — Full-service influencer marketing agency website. Self-hosted on caagency-server (Node standalone + PostgreSQL) behind Cloudflare Tunnel; primary traffic from USA.

## The Council (Agent Personas)
Specialized expert agents in `.claude/agents/`:
- **@Shaper**: Architectural reviews and structural planning.
- **@Sentinel**: Security audits and robust error handling.
- **@Oracle**: Strategic guidance and future-proofing.
- **@Aesthete**: UX/UI polish and frontend excellence.

## Tech Stack
- **Framework**: Next.js 16.3 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: Prisma (PostgreSQL via Prisma Accelerate)
- **Auth**: NextAuth v5 (beta)
- **i18n**: next-intl
- **Hosting**: systemd `caagency-website.service` on caagency-server, Caddy + Cloudflare Tunnel (see README.md)
- **Assets**: local media directory `/var/lib/caagency-website/media`, local /public

## Key Commands
- `npm run dev` — Start dev server
- `npm run build` — Build for production (requires PRISMA_DATABASE_URL)
- `npx tsc --noEmit` — Type check
- `npm run lint` — ESLint

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
- Hero entrance animations (`hero-rise*`) are transform-only — never fade LCP candidates from opacity 0
- Below-the-fold components (`VideoShowcase`, `MediaCarousel`, `FAQ`, `Testimonials`) are dynamically imported
- Videos use IntersectionObserver-based lazy loading (`VideoPlayer.tsx`)
- Brand logos explicitly set `loading="lazy"`
- No preconnect to blob storage: all images route through same-origin `/_next/image` and videos are local, so the browser never contacts the blob domain directly
- CSS is inlined into the HTML (`experimental.inlineCss`) — no render-blocking stylesheet request. Turning it off (Oct 2026) cost ~200ms FCP/LCP on the homepage in production Lighthouse; don't flip it without field data
- Static assets get `immutable` Cache-Control headers via `next.config.js` headers

## Verification Standards
- TypeScript must pass: `npx tsc --noEmit`
- Lint must pass: `npm run lint`
- All images use Next.js `<Image>` with proper `sizes` attribute
- Videos never autoplay above the fold without user interaction context
