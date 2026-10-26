import type { Metadata } from 'next'
import { alternatesFor } from '@/lib/seo/alternates'

const BASE_URL = 'https://caagency.com'
const BRAND = 'CA Agency'
const MAX_TITLE_LENGTH = 60
const DEFAULT_IMAGE = '/images/site/og-cover-v2.jpg'

const openGraphLocales: Record<string, string> = {
  en: 'en_US',
  ar: 'ar_AE',
  ko: 'ko_KR',
  zh: 'zh_CN',
  fr: 'fr_FR',
  es: 'es_ES',
  de: 'de_DE',
}

type BuildPageMetadataOptions = {
  title: string
  description: string
  path?: string
  locale?: string
  localized?: boolean
  image?: string
  imageAlt?: string
  keywords?: Metadata['keywords']
  type?: 'website' | 'article' | 'profile'
}

export function normalizeBrandedTitle(title: string): string {
  const withoutBrand = title
    .replace(new RegExp(`(?:\\s*\\|\\s*${BRAND})+$`, 'i'), '')
    .trim()

  if (!withoutBrand) return BRAND
  if (new RegExp(BRAND, 'i').test(withoutBrand)) return withoutBrand

  // Google truncates titles past ~60 characters; a long title reads better
  // whole than with the brand suffix cut off mid-word.
  const branded = `${withoutBrand} | ${BRAND}`
  return branded.length > MAX_TITLE_LENGTH ? withoutBrand : branded
}

function canonicalUrl(locale: string, path: string): string {
  const normalizedPath = path === '/' ? '' : path
  return locale === 'en'
    ? `${BASE_URL}${normalizedPath}` || BASE_URL
    : `${BASE_URL}/${locale}${normalizedPath}`
}

export function buildPageMetadata({
  title,
  description,
  path = '',
  locale = 'en',
  localized = true,
  image = DEFAULT_IMAGE,
  imageAlt = 'CA Agency',
  keywords,
  type = 'website',
}: BuildPageMetadataOptions): Metadata {
  const absoluteTitle = normalizeBrandedTitle(title)
  const canonical = canonicalUrl(locale, path)
  const localizedAlternates = alternatesFor(locale, path)

  return {
    title: { absolute: absoluteTitle },
    description,
    keywords,
    alternates: localized
      ? localizedAlternates
      : { canonical },
    openGraph: {
      type,
      title: absoluteTitle,
      description,
      url: canonical,
      siteName: BRAND,
      locale: openGraphLocales[locale] ?? openGraphLocales.en,
      alternateLocale: localized
        ? Object.entries(openGraphLocales)
            .filter(([key]) => key !== locale)
            .map(([, value]) => value)
        : undefined,
      images: [
        image === DEFAULT_IMAGE
          ? { url: image, width: 1200, height: 630, alt: imageAlt }
          : { url: image, alt: imageAlt },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: absoluteTitle,
      description,
      images: [image],
    },
  }
}
