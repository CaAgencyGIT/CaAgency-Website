import type { LocationLabels, LocationPageContent } from '@/lib/site-content/location-pages'
import { germanLocationLabels, germanLocationPages } from '@/lib/site-content/location-pages-de'
import { frenchLocationLabels, frenchLocationPages } from '@/lib/site-content/location-pages-fr'

// Market pages that also exist in German or French, served at /<locale>/<path>.
// The Arabic Gulf pages predate this registry and keep their own component.

export interface TranslatedLocationPage {
  path: string
  title: string
  description: string
  ogImage: string
  areaServed: { '@type': 'City' | 'Country'; name: string }[]
  content: LocationPageContent
}

export const translatedLocationPages = {
  de: { labels: germanLocationLabels, pages: germanLocationPages as Record<string, TranslatedLocationPage> },
  fr: { labels: frenchLocationLabels, pages: frenchLocationPages as Record<string, TranslatedLocationPage> },
} satisfies Record<string, { labels: LocationLabels; pages: Record<string, TranslatedLocationPage> }>

export type TranslatedLocationLocale = keyof typeof translatedLocationPages
