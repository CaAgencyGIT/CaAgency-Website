import { describe, expect, it } from 'vitest'
import { locales } from '@/i18n/config'
import { getErrorCopy, localeFromPath } from '@/lib/error-copy'

describe('error page copy', () => {
  it('reads the locale from the first path segment', () => {
    expect(localeFromPath('/ar/contact')).toBe('ar')
    expect(localeFromPath('/ko')).toBe('ko')
    expect(localeFromPath('/talents/albina')).toBe('en')
    expect(localeFromPath(null)).toBe('en')
  })

  it('has copy for every locale and links home within the locale', () => {
    for (const locale of locales) {
      const t = getErrorCopy(locale)
      expect(t.title && t.body && t.retry && t.home).toBeTruthy()
      expect(t.homeHref).toBe(locale === 'en' ? '/' : `/${locale}`)
    }
    expect(getErrorCopy('ar').dir).toBe('rtl')
  })
})
