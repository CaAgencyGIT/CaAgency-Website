import '@/app/public-utilities.css'
import { Metadata } from 'next'
import { getSiteContent } from '@/lib/site-content/service'
import { getFeaturedTalents } from '@/lib/site-content/public'
import { LocationPageContent } from '@/lib/site-content/location-pages'
import LocationLandingPage from '@/components/site/LocationLandingPage'
import { findSkincareGuide, tiktokShopBeautyGuide } from '@/lib/data/guides'
import { organizationRef } from '@/lib/seo/schema'
import { locationPageLanguages } from '@/lib/routing-helpers'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Beauty Influencer Marketing Agency USA | CA Agency',
  description:
    'Plan a US beauty influencer campaign for retail or direct sales. Explore skincare creator briefs, published campaigns and talent selection for American audiences.',
  keywords: [
    'influencer marketing agency usa',
    'influencer agency usa',
    'us influencer marketing agency',
    'influencer marketing america',
    'american influencer agency',
  ],
  openGraph: {
    type: 'website',
    siteName: 'CA Agency',
    locale: 'en_US',
    title: 'Beauty Influencer Marketing Agency for US Brands',
    description:
      'Plan a US beauty influencer campaign for retail or direct sales. Explore skincare creator briefs, published campaigns and talent selection for American audiences.',
    url: 'https://caagency.com/influencer-marketing-usa',
    images: [
      {
        url: '/images/site/og/influencer-marketing-usa-v2.jpg',
        width: 1200,
        height: 630,
        alt: 'CA Agency, Influencer Marketing Agency USA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beauty Influencer Marketing Agency for US Brands',
    description:
      'Plan a US beauty influencer campaign for retail or direct sales. Explore skincare creator briefs, published campaigns and talent selection for American audiences.',
    images: ['/images/site/og/influencer-marketing-usa-v2.jpg'],
  },
  alternates: {
    canonical: 'https://caagency.com/influencer-marketing-usa',
    // English plus every translated version of this page (Arabic, Spanish).
    languages: locationPageLanguages('/influencer-marketing-usa'),
  },
}


const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Influencer Marketing Agency USA',
  serviceType: 'Influencer Marketing',
  description:
    'Plan a US beauty influencer campaign for retail or direct sales. Explore skincare creator briefs, published campaigns and talent selection for American audiences.',
  provider: organizationRef,
  areaServed: {
  '@type': 'Country',
  'name': 'United States'
},
  url: 'https://caagency.com/influencer-marketing-usa',
}

export default async function USAPage() {
  const [content, talents] = await Promise.all([
    getSiteContent<LocationPageContent>('location-usa'),
    getFeaturedTalents(6),
  ])

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      <LocationLandingPage path="/influencer-marketing-usa" content={content} talents={talents} featuredGuides={[findSkincareGuide, tiktokShopBeautyGuide]} />
    </>
  )
}
