import { defaultLocale, locales } from '@/i18n/config'
import { hasTranslatedPage, isEnglishOnlyPath } from '@/lib/routing-helpers'

export function stripLocalePrefix(pathname: string) {
  const segments = pathname.split('/').filter(Boolean)
  if (segments[0] && locales.includes(segments[0] as typeof locales[number])) {
    segments.shift()
  }
  return segments.length ? `/${segments.join('/')}` : '/'
}

export function localizeHref(href: string, locale: string) {
  if (!href.startsWith('/') || locale === defaultLocale) return href
  if (isEnglishOnlyPath(href) && !hasTranslatedPage(href, locale)) return href
  return href === '/' ? `/${locale}` : `/${locale}${href}`
}
