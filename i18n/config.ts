export const locales = ['en', 'ar', 'ko', 'zh', 'fr', 'es', 'de'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ar: 'العربية',
  ko: '한국어',
  zh: '中文',
  fr: 'Français',
  es: 'Español',
  de: 'Deutsch',
}

export const rtlLocales: ReadonlyArray<Locale> = ['ar']

export function isRtlLocale(locale: string) {
  return rtlLocales.includes(locale as Locale)
}
