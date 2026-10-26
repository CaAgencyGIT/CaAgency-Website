import { Metadata } from 'next'
import { getSiteContent } from '@/lib/site-content/service'
import { getFeaturedTalents } from '@/lib/site-content/public'
import { LocationPageContent } from '@/lib/site-content/location-pages'
import LocationLandingPage from '@/components/site/LocationLandingPage'
import { findSkincareGuide, tiktokShopBeautyGuide } from '@/lib/data/guides'
import { organizationRef } from '@/lib/seo/schema'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Influencer Marketing Agency USA | CA Agency',
  description:
    'CA Agency is an influencer marketing agency for the USA, helping brands run creator campaigns across Instagram, TikTok, and YouTube.',
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
    title: 'Influencer Marketing Agency USA | US Influencer Agency',
    description:
      'CA Agency is an influencer marketing agency for the USA, helping brands run creator campaigns across Instagram, TikTok, and YouTube.',
    url: 'https://caagency.com/influencer-marketing-usa',
    images: [
      {
        url: '/images/site/og/influencer-marketing-usa.webp',
        width: 1200,
        height: 630,
        alt: 'CA Agency, Influencer Marketing Agency USA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Influencer Marketing Agency USA | US Influencer Agency',
    description:
      'CA Agency is an influencer marketing agency for the USA, helping brands run creator campaigns across Instagram, TikTok, and YouTube.',
    images: ['/images/site/og/influencer-marketing-usa.webp'],
  },
  alternates: {
    canonical: 'https://caagency.com/influencer-marketing-usa',
  },
}


const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Influencer Marketing Agency USA',
  serviceType: 'Influencer Marketing',
  description:
    'CA Agency is an influencer marketing agency for the USA, helping brands run creator campaigns across Instagram, TikTok, and YouTube.',
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
