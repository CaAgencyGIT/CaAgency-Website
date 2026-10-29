import '@/app/public-utilities.css'
import { getSiteContent } from '@/lib/site-content/service'
import { getFeaturedTalents } from '@/lib/site-content/public'
import { LocationPageContent } from '@/lib/site-content/location-pages'
import LocationLandingPage from '@/components/site/LocationLandingPage'
import { beautyGuide, findSkincareGuide, tiktokShopBeautyGuide } from '@/lib/data/guides'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { organizationJsonLd } from '@/lib/seo/root-metadata'
import { organizationRef } from '@/lib/seo/schema'
import { jsonLdSafe } from '@/lib/sanitize'

export const revalidate = 3600

const PATH = '/beauty-influencer-marketing-agency'
const DESCRIPTION =
  'Beauty influencer marketing agency for makeup, skincare and haircare brands, with creator campaigns for Fenty Beauty, YSL Beauty, NARS and Sephora.'

export const metadata = buildPageMetadata({
  title: 'Beauty Influencer Marketing Agency',
  description: DESCRIPTION,
  path: PATH,
  localized: false,
  imageAlt: 'CA Agency, Beauty Influencer Marketing Agency',
  keywords: [
    'beauty influencer marketing agency',
    'beauty influencer agency',
    'makeup influencer marketing',
    'cosmetics influencer marketing agency',
    'beauty brand influencer campaigns',
    'beauty influencer marketing agency usa',
  ],
})

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Beauty Influencer Marketing',
  serviceType: 'Influencer Marketing',
  description: DESCRIPTION,
  provider: organizationRef,
  areaServed: organizationJsonLd.areaServed,
  audience: { '@type': 'BusinessAudience', audienceType: 'Beauty, makeup, skincare and haircare brands' },
  url: `https://caagency.com${PATH}`,
}

export default async function BeautyAgencyPage() {
  const [content, talents] = await Promise.all([
    getSiteContent<LocationPageContent>('location-beauty'),
    getFeaturedTalents(6),
  ])

  return (
    <>
      <script type="application/ld+json">{jsonLdSafe(serviceSchema)}</script>
      <LocationLandingPage
        content={content}
        talents={talents}
        featuredGuides={[beautyGuide, tiktokShopBeautyGuide, findSkincareGuide]}
      />
    </>
  )
}
