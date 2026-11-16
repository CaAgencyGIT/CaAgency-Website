import type { Metadata } from 'next'
import LocationLandingPage from '@/components/site/LocationLandingPage'
import { getSiteContent } from '@/lib/site-content/service'
import { getFeaturedTalents } from '@/lib/site-content/public'
import type { LocationPageContent } from '@/lib/site-content/location-pages'
import { locationPageLanguages } from '@/lib/routing-helpers'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { jsonLdSafe } from '@/lib/sanitize'
import { organizationRef } from '@/lib/seo/schema'
import { europeanMarkets, type EuropeanMarket } from '@/lib/data/european-markets'

const baseUrl = 'https://caagency.com'
export function marketMetadata(market: EuropeanMarket): Metadata {
  const page = europeanMarkets[market]
  const metadata = buildPageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    localized: false,
    image: page.ogImage,
    imageAlt: page.title.replace(' | CA Agency', ''),
  })
  const languages = locationPageLanguages(page.path)
  return {
    ...metadata,
    alternates: {
      canonical: `${baseUrl}${page.path}`,
      // Only pages with a German or French version need hreflang.
      ...(Object.keys(languages).length > 2 ? { languages } : {}),
    },
  }
}

export default async function MarketLandingRoute({ market }: { market: EuropeanMarket }) {
  const page = europeanMarkets[market]
  const [content, talents] = await Promise.all([
    getSiteContent<LocationPageContent>(page.contentKey),
    getFeaturedTalents(6),
  ])
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.title.replace(' | CA Agency', ''),
    serviceType: 'Influencer Marketing',
    description: page.description,
    provider: organizationRef,
    areaServed: page.areaServed,
    url: `${baseUrl}${page.path}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(serviceSchema) }} />
      <LocationLandingPage path={page.path} content={content} talents={talents} />
    </>
  )
}
