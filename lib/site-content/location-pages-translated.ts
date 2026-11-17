import type { LocationLabels, LocationPageContent } from '@/lib/site-content/location-pages'
import { arabicLocationLabels, arabicLocationPages } from '@/lib/site-content/location-pages-ar'
import { arabicMarketPages } from '@/lib/site-content/location-pages-ar-markets'
import { germanLocationLabels, germanLocationPages } from '@/lib/site-content/location-pages-de'
import { germanMarketPages } from '@/lib/site-content/location-pages-de-markets'
import { frenchMarketPages } from '@/lib/site-content/location-pages-fr-markets'
import { frenchLocationLabels, frenchLocationPages } from '@/lib/site-content/location-pages-fr'
import { spanishLocationLabels, spanishLocationPages } from '@/lib/site-content/location-pages-es'
import { koreanLocationLabels, koreanLocationPages } from '@/lib/site-content/location-pages-ko'
import { chineseLocationLabels, chineseLocationPages } from '@/lib/site-content/location-pages-zh'
import { germanCategoryPages } from '@/lib/site-content/category-pages-de'
import { frenchCategoryPages } from '@/lib/site-content/category-pages-fr'
import { spanishCategoryPages } from '@/lib/site-content/category-pages-es'
import { arabicCategoryPages } from '@/lib/site-content/category-pages-ar'
import { koreanCategoryPages } from '@/lib/site-content/category-pages-ko'
import { chineseCategoryPages } from '@/lib/site-content/category-pages-zh'

// Market and category pages in Arabic, German, French, Spanish, Korean and Chinese, served at /<locale>/<path>.

export interface TranslatedLocationPage {
  path: string
  title: string
  description: string
  ogImage: string
  /** Left out on the category pages, which are not tied to a market. */
  areaServed?: { '@type': 'City' | 'Country'; name: string }[]
  content: LocationPageContent
}

export const translatedLocationPages = {
  ar: { labels: arabicLocationLabels, pages: { ...arabicLocationPages, ...arabicMarketPages, ...arabicCategoryPages } as Record<string, TranslatedLocationPage> },
  de: { labels: germanLocationLabels, pages: { ...germanLocationPages, ...germanMarketPages, ...germanCategoryPages } as Record<string, TranslatedLocationPage> },
  fr: { labels: frenchLocationLabels, pages: { ...frenchLocationPages, ...frenchMarketPages, ...frenchCategoryPages } as Record<string, TranslatedLocationPage> },
  es: { labels: spanishLocationLabels, pages: { ...spanishLocationPages, ...spanishCategoryPages } },
  ko: { labels: koreanLocationLabels, pages: { ...koreanLocationPages, ...koreanCategoryPages } },
  zh: { labels: chineseLocationLabels, pages: { ...chineseLocationPages, ...chineseCategoryPages } },
} satisfies Record<string, { labels: LocationLabels; pages: Record<string, TranslatedLocationPage> }>

export type TranslatedLocationLocale = keyof typeof translatedLocationPages
