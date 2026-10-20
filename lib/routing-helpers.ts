// Pure routing helpers used by the edge middleware (proxy.ts). Kept dependency
// free (no next/server, no Web APIs) so the logic can be unit-tested directly.

import { defaultLocale, locales } from '@/i18n/config'

export const PUBLIC_FILE_PATHS = new Set([
  '/edba0a2c3d98ad29bbfca51f0f73c0a4.txt', // IndexNow ownership key
  '/favicon.ico',
  '/favicon-32.png',
  '/google37e3e1aed99a9c5d.html',
  '/icon-192.png',
  '/icon-512.png',
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
}

export function isEnglishOnlyPath(pathname: string): boolean {
  return ENGLISH_ONLY_ROUTE.test(pathname)
}

export function hasLocalizedLocationPage(pathname: string, locale: string): boolean {
  return LOCALIZED_LOCATION_PATHS[locale]?.includes(pathname) ?? false
}

export function isPublicAsset(pathname: string): boolean {
  return (
    PUBLIC_FILE_PATHS.has(pathname) ||
    PUBLIC_ASSET_PREFIXES.some((prefix) => pathname.startsWith(prefix))
  )
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
  return hasLocalizedLocationPage(strippedPath, locale) ? null : strippedPath
}
