import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import LocationLandingPage from '@/components/site/LocationLandingPage'
import { getFeaturedTalents } from '@/lib/site-content/public'
import { translatedLocationPages, type TranslatedLocationLocale } from '@/lib/site-content/location-pages-translated'
import { marketPages } from '@/lib/data/locations'
import { translatedGuides, translatedPosts } from '@/lib/blog-translations'
import { hasLocalizedLocationPage, locationPageLanguages } from '@/lib/routing-helpers'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { jsonLdSafe } from '@/lib/sanitize'
import { organizationRef } from '@/lib/seo/schema'

const baseUrl = 'https://caagency.com'

function findPage(locale: string, market: string) {
  const entry = translatedLocationPages[locale as TranslatedLocationLocale]
  const page = entry?.pages[market]
  return entry && page ? { labels: entry.labels, page } : null
}

/** Metadata for /<locale>/<market path>; empty when that locale has no translation. */
export function translatedLocationMetadata(locale: string, market: string): Metadata {
  const found = findPage(locale, market)
  if (!found) return {}
  const { page } = found
  const metadata = buildPageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    locale,
    localized: false,
    image: page.ogImage,
    imageAlt: page.title,
  })
  return {
    ...metadata,
    alternates: {
      canonical: `${baseUrl}/${locale}${page.path}`,
      languages: locationPageLanguages(page.path),
    },
  }
}

export default async function TranslatedLocationPage({ market, locale }: { market: string; locale: string }) {
  const found = findPage(locale, market)
  if (!found) notFound()
  // Without this, next-intl reads the locale from request headers and the
  // page renders on every visit instead of once an hour.
  setRequestLocale(locale)

  const { page, labels } = found
  const talents = await getFeaturedTalents(6)
  const tLocations = await getTranslations({ locale, namespace: 'locations' })
  // Every market, in this language where a translation exists and in English otherwise.
  const markets = marketPages.map(({ key, path }) => ({
    href: hasLocalizedLocationPage(path, locale) ? `/${locale}${path}` : path,
    label: tLocations(key),
  }))
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.title.replace(' | CA Agency', ''),
    serviceType: 'Influencer Marketing',
    description: page.description,
    inLanguage: locale,
    provider: organizationRef,
    areaServed: page.areaServed ?? 'Worldwide',
    url: `${baseUrl}/${locale}${page.path}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(serviceSchema) }} />
      <LocationLandingPage
        content={page.content}
        talents={talents}
        labels={labels}
        showGuides={false}
        locale={locale as TranslatedLocationLocale}
        path={page.path}
        markets={markets}
        translatedGuides={{
          eyebrow: translatedPosts[locale]?.labels.guidesEyebrow ?? '',
          title: translatedPosts[locale]?.labels.guidesTitle ?? '',
          items: translatedGuides(locale, 3),
        }}
      />
    </>
  )
}
