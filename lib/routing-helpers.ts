// Pure routing helpers used by the edge middleware (proxy.ts). Kept dependency
// free (no next/server, no Web APIs) so the logic can be unit-tested directly.

import { defaultLocale, locales } from '@/i18n/config'

export const PUBLIC_FILE_PATHS = new Set([
  '/edba0a2c3d98ad29bbfca51f0f73c0a4.txt', // IndexNow ownership key
  '/favicon.ico',
  '/favicon-32.png',
  '/favicon-32-v2.png',
  '/apple-touch-icon.png',
  '/apple-touch-icon-v2.png',
  '/google37e3e1aed99a9c5d.html', // Google Search Console verification
  '/BingSiteAuth.xml', // Bing Webmaster Tools verification
  '/icon-192.png',
  '/icon-512.png',
  '/icon-192-v2.png',
  '/icon-512-v2.png',
  '/icon-maskable-512-v2.png',
  '/llms-full.txt',
  '/llms.txt',
  '/robots.txt',
  '/site.webmanifest',
  '/sitemap.xml',
  '/sitemap-video.xml',
])

export const PUBLIC_ASSET_PREFIXES = ['/assets/', '/fonts/', '/images/', '/videos/', '/media/']

export const SENSITIVE_PROBE_PATTERNS = [
  /^\/\.env(?:\..*)?$/i,
  /^\/\.git(?:\/.*)?$/i,
  /^\/auth\.json$/i,
  /^\/backup\.sql$/i,
  /^\/database\.sql$/i,
  /^\/debug\.log$/i,
  /^\/index\.js$/i,
  /^\/storage\/logs\/laravel\.log$/i,
]

// (site)-only routes that exist English-only (no [locale] variant). A
// locale-prefixed request to any of these must be redirected to the canonical
// English path instead of 404ing. Whole segments only, so /blogger is not
// mistaken for /blog.
const ENGLISH_ONLY_SEGMENTS =
  '(?:(?:blog|case-studies|privacy-policy|terms-of-service|business-license|korean-skincare-influencer-marketing|beauty-influencer-marketing-agency|skincare-influencer-marketing-agency|influencer-marketing-[a-z-]+)(?=[/?#]|$)|talents\\/|services\\/)'
const ENGLISH_ONLY_ROUTE = new RegExp(`^\\/${ENGLISH_ONLY_SEGMENTS}`)
const NON_DEFAULT_LOCALES = locales.filter((locale) => locale !== defaultLocale).join('|')
const LOCALIZED_SITE_ROUTE = new RegExp(`^\\/(${NON_DEFAULT_LOCALES})\\/${ENGLISH_ONLY_SEGMENTS}`)
const LOCALE_PREFIX = new RegExp(`^\\/(${NON_DEFAULT_LOCALES})`)

// English-only location pages that also have a translated app/[locale]/
// version for these locales.
export const LOCALIZED_LOCATION_PATHS: Partial<Record<string, readonly string[]>> = {
  ar: [
    '/influencer-marketing-dubai',
    '/influencer-marketing-uae',
    '/influencer-marketing-saudi-arabia',
    '/influencer-marketing-gcc',
  ],
  de: ['/influencer-marketing-germany', '/influencer-marketing-switzerland'],
  fr: ['/influencer-marketing-france'],
}

// English-only blog posts that also have a translated app/[locale]/blog/[slug]
// version (lib/blog-translations).
// '/blog' is the translated blog index (app/[locale]/blog/page.tsx); the rest are translated guides.
const TRANSLATED_BLOG_PATHS = [
  '/blog',
  '/blog/how-to-choose-influencer-marketing-agency',
  '/blog/influencer-marketing-cost-2026',
  '/blog/tiktok-shop-beauty-brands',
  '/blog/influencer-marketing-for-health-wellness',
  '/blog/influencer-marketing-for-fashion-brands',
  '/blog/influencer-marketing-for-beauty-brands',
  '/blog/k-beauty-influencer-marketing-guide',
  '/blog/influencer-marketing-guide',
  '/blog/influencer-whitelisting-spark-ads-guide',
  '/blog/tiktok-influencer-marketing-guide',
  '/blog/how-to-measure-influencer-marketing-roi',
  '/blog/youtube-influencer-marketing-beauty-brands',
  '/blog/micro-vs-macro-influencers',
] as const
export const LOCALIZED_BLOG_PATHS: Partial<Record<string, readonly string[]>> = {
  de: TRANSLATED_BLOG_PATHS,
  fr: TRANSLATED_BLOG_PATHS,
}

export function isEnglishOnlyPath(pathname: string): boolean {
  return ENGLISH_ONLY_ROUTE.test(pathname)
}

export function hasLocalizedLocationPage(pathname: string, locale: string): boolean {
  return LOCALIZED_LOCATION_PATHS[locale]?.includes(pathname) ?? false
}

/** True when an otherwise English-only page (market page or blog post) exists in this locale. */
export function hasTranslatedPage(pathname: string, locale: string): boolean {
  return hasLocalizedLocationPage(pathname, locale) || (LOCALIZED_BLOG_PATHS[locale]?.includes(pathname) ?? false)
}

/**
 * hreflang map for a location page: English (also x-default) plus every
 * locale that has a translated version of it.
 */
export function locationPageLanguages(pathname: string, baseUrl = 'https://caagency.com'): Record<string, string> {
  const english = `${baseUrl}${pathname}`
  const languages: Record<string, string> = { 'x-default': english, en: english }
  for (const locale of Object.keys(LOCALIZED_LOCATION_PATHS)) {
    if (hasLocalizedLocationPage(pathname, locale)) languages[locale] = `${baseUrl}/${locale}${pathname}`
  }
  return languages
}

export function isPublicAsset(pathname: string): boolean {
  return (
    PUBLIC_FILE_PATHS.has(pathname) ||
    PUBLIC_ASSET_PREFIXES.some((prefix) => pathname.startsWith(prefix))
  )
}

/**
 * A file-like path at the site root (`/favicon-32x32.png`, `/xyz.php`) that is
 * not one of PUBLIC_FILE_PATHS. Browsers and crawlers guess such names; left
 * alone they reach the [locale] route as a "locale" and can end in a 500.
 */
export function isUnknownRootFile(pathname: string): boolean {
  return /^\/[^/]+\.[a-z0-9]{2,12}$/i.test(pathname) && !PUBLIC_FILE_PATHS.has(pathname)
}

export function isSensitiveProbe(pathname: string): boolean {
  return SENSITIVE_PROBE_PATTERNS.some((pattern) => pattern.test(pathname))
}

/**
 * If `pathname` is a locale-prefixed (site)-only route, return the canonical
 * English path (locale prefix stripped). Otherwise return null.
 */
export function getLocalizedSiteRouteRedirect(pathname: string): string | null {
  if (!LOCALIZED_SITE_ROUTE.test(pathname)) return null
  const locale = pathname.match(LOCALE_PREFIX)?.[1] ?? ''
  const strippedPath = pathname.replace(LOCALE_PREFIX, '')
  return hasTranslatedPage(strippedPath, locale) ? null : strippedPath
}

/**
 * Absolute target for the redirect above, on the host the visitor asked for.
 * Public hosts are always https (TLS ends at Cloudflare, so the app only ever
 * sees http); a missing or odd Host header falls back to the request origin.
 * Leading slashes are collapsed so the path cannot name another host.
 */
export function localizedSiteRedirectLocation(
  strippedPath: string,
  search: string,
  host: string,
  fallbackOrigin: string
): string {
  const path = `/${strippedPath.replace(/^\/+/, '')}${search}`
  if (!/^[a-z0-9.-]+(?::\d+)?$/i.test(host)) return `${fallbackOrigin}${path}`
  const local = /^(?:localhost|127\.0\.0\.1)(?::\d+)?$/i.test(host)
  return `${local ? 'http' : 'https'}://${host}${path}`
}
