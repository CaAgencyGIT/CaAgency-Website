import '@/app/public-utilities.css'
import { getSiteContent } from '@/lib/site-content/service'
import { getFeaturedTalents } from '@/lib/site-content/public'
import { LocationPageContent } from '@/lib/site-content/location-pages'
import LocationLandingPage from '@/components/site/LocationLandingPage'
import { findSkincareGuide, ftcGuide, kBeautyGuide } from '@/lib/data/guides'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { organizationJsonLd } from '@/lib/seo/root-metadata'
import { organizationRef } from '@/lib/seo/schema'
import { jsonLdSafe } from '@/lib/sanitize'

export const revalidate = 3600

const PATH = '/skincare-influencer-marketing-agency'
const DESCRIPTION =
  'Skincare influencer marketing agency: ingredient-led creator campaigns with compliant claims for brands like Purito, Anua and DELERE, in the USA and beyond.'

export const metadata = buildPageMetadata({
  title: 'Skincare Influencer Marketing Agency',
  description: DESCRIPTION,
  path: PATH,
  localized: false,
  imageAlt: 'CA Agency, Skincare Influencer Marketing Agency',
  keywords: [
    'skincare influencer marketing agency',
    'skincare influencer agency',
    'skincare influencer marketing',
    'skincare brand influencer campaigns',
    'skincare influencers usa',
    'dermocosmetic influencer marketing',
  ],
})

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Skincare Influencer Marketing',
  serviceType: 'Influencer Marketing',
  description: DESCRIPTION,
  provider: organizationRef,
  areaServed: organizationJsonLd.areaServed,
  audience: { '@type': 'BusinessAudience', audienceType: 'Skincare and dermocosmetic brands' },
  url: `https://caagency.com${PATH}`,
}

export default async function SkincareAgencyPage() {
  const [content, talents] = await Promise.all([
    getSiteContent<LocationPageContent>('location-skincare'),
    getFeaturedTalents(6),
  ])

  return (
    <>
      <script type="application/ld+json">{jsonLdSafe(serviceSchema)}</script>
      <LocationLandingPage
        content={content}
        talents={talents}
        featuredGuides={[findSkincareGuide, kBeautyGuide, ftcGuide]}
      />
    </>
  )
}
