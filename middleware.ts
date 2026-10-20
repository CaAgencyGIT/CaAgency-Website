import { NextResponse, NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import {
  isPublicAsset,
  isSensitiveProbe,
  getLocalizedSiteRouteRedirect,
} from './lib/routing-helpers'

// next-intl middleware for locale routing
const intlMiddleware = createMiddleware(routing)

async function isMaintenanceMode(): Promise<boolean> {
  return process.env.MAINTENANCE_MODE === 'true'
}

// Secondary domains that should redirect to primary
const SECONDARY_DOMAINS = [
  'www.caagency.com',
  'caagency.co.uk',
  'www.caagency.co.uk',
  'caagency.ae',
  'www.caagency.ae',
  'caagency.nl',
  'www.caagency.nl',
]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const hostname = request.headers.get('host') || ''

  // Short-circuit common scanner probes before they hit the App Router.
  if (isSensitiveProbe(pathname)) {
    return new NextResponse('Not Found', {
      status: 404,
      headers: {
        'Cache-Control': 'public, max-age=60',
        'Content-Type': 'text/plain; charset=utf-8',
      },
    })
  }

  // The homepage does not expose any Server Actions. Stale action posts can
  // happen during or after a deployment and only generate noisy framework logs.
  if (
    request.method === 'POST' &&
    pathname === '/' &&
    request.headers.has('next-action')
  ) {
    return NextResponse.json(
      { error: 'This page has changed. Refresh and try again.' },
      { status: 409 }
    )
  }

  // 1. Domain redirects at the edge (ultra-fast)
  // Admin sign-in stays on the existing www origin. Its assets must
  // remain same-origin so the production Content-Security-Policy allows them.
  const isAdminOriginAsset = hostname === 'www.caagency.com' && isPublicAsset(pathname)
  if (SECONDARY_DOMAINS.includes(hostname) && !isAdminOriginAsset) {
    const url = new URL(request.url)
    url.hostname = 'caagency.com'
    url.port = ''
    return NextResponse.redirect(url, 301)
  }

  // Let static assets and public files bypass locale handling.
  if (isPublicAsset(pathname)) {
    return NextResponse.next()
  }

  // 2. Edge Config: check for maintenance mode
  if (await isMaintenanceMode()) {
    return new NextResponse(
      '<html><body style="background:#0C0C0C;color:white;display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;"><div style="text-align:center"><h1 style="font-size:48px;margin-bottom:16px">We\'ll be right back</h1><p style="opacity:0.7">CA Agency is undergoing scheduled maintenance.</p></div></body></html>',
      {
        status: 503,
        headers: { 'Content-Type': 'text/html', 'Retry-After': '3600' },
      }
    )
  }

  // The root path is served by the English app/(site)/page.tsx homepage instead
  // of the next-intl [locale] index. The [locale]-segment index route triggers a
  // benign but noisy React #418 hydration mismatch on "/"; the (site) homepage
  // renders cleanly. ar/ko homepages remain on /ar and /ko via the [locale]
  // route. Domain redirect + maintenance (above) still apply to "/".
  if (pathname === '/') {
    return NextResponse.next()
  }

  // Blog, legal, location and talent-detail pages are English-only app/(site)
  // routes with no [locale] variant, so a locale-prefixed URL (e.g. /ar/blog)
  // 404s. The localized header/footer link to them with the active locale, so
  // strip the prefix and send the visitor to the canonical English route.
  // The Arabic Gulf location pages (LOCALIZED_LOCATION_PATHS) are the exception.
  const strippedPath = getLocalizedSiteRouteRedirect(pathname)
  if (strippedPath) {
    const url = request.nextUrl.clone()
    url.pathname = strippedPath
    return NextResponse.redirect(url, 308)
  }

  // 3. i18n routing (handled by next-intl)
  return intlMiddleware(request)
}

export const config = {
  // Excluded paths bypass i18n and are served by app/(site)/ only.
  // Included paths go through next-intl and are served by app/[locale]/.
  // Keep this matcher in sync with app/sitemap.ts (see which pages are localized).
  //
  // Excluded: api, _next, admin, influencer-marketing-*, the beauty,
  // skincare and K-beauty category pages, legal, blog,
  // case-studies, talents/* and services/* (detail pages; only the listings
  // exist under [locale]). Public assets are allowed through above via
  // isPublicAsset().
  matcher: [
    '/((?!api|_next|admin|influencer-marketing-|korean-skincare-influencer-marketing|beauty-influencer-marketing-agency|skincare-influencer-marketing-agency|privacy-policy|terms-of-service|business-license|blog|case-studies|talents/|services/).*)',
  ],
}
