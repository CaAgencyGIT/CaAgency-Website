import type { LocationLabels, LocationPageContent } from '@/lib/site-content/location-pages'
import { arabicLocationLabels, arabicLocationPages } from '@/lib/site-content/location-pages-ar'
import { arabicMarketPages } from '@/lib/site-content/location-pages-ar-markets'
import { germanLocationLabels, germanLocationPages } from '@/lib/site-content/location-pages-de'
import { frenchLocationLabels, frenchLocationPages } from '@/lib/site-content/location-pages-fr'
import { spanishLocationLabels, spanishLocationPages } from '@/lib/site-content/location-pages-es'

// Market pages in Arabic, German, French and Spanish, served at /<locale>/<path>.

export interface TranslatedLocationPage {
  path: string
  title: string
  description: string
  ogImage: string
  areaServed: { '@type': 'City' | 'Country'; name: string }[]
  content: LocationPageContent
}

export const translatedLocationPages = {
  ar: { labels: arabicLocationLabels, pages: { ...arabicLocationPages, ...arabicMarketPages } as Record<string, TranslatedLocationPage> },
  de: { labels: germanLocationLabels, pages: germanLocationPages as Record<string, TranslatedLocationPage> },
  fr: { labels: frenchLocationLabels, pages: frenchLocationPages as Record<string, TranslatedLocationPage> },
  es: { labels: spanishLocationLabels, pages: spanishLocationPages },
} satisfies Record<string, { labels: LocationLabels; pages: Record<string, TranslatedLocationPage> }>

export type TranslatedLocationLocale = keyof typeof translatedLocationPages
