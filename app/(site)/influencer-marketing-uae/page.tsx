import { Metadata } from 'next'
import { getSiteContent } from '@/lib/site-content/service'
import { getFeaturedTalents } from '@/lib/site-content/public'
import { LocationPageContent } from '@/lib/site-content/location-pages'
import LocationLandingPage from '@/components/site/LocationLandingPage'
import { gulfCostGuide, saudiGuide } from '@/lib/data/guides'
import { organizationRef } from '@/lib/seo/schema'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Influencer Marketing Agency UAE | CA Agency',
  description:
    'CA Agency is a UAE influencer marketing agency helping brands run creator campaigns across Dubai, Abu Dhabi, Sharjah, and beyond.',
  keywords: [
    'influencer marketing agency uae',
    'influencer agency uae',
    'uae influencer marketing agency',
    'influencer marketing dubai',
    'influencer marketing abu dhabi',
  ],
  openGraph: {
    type: 'website',
    siteName: 'CA Agency',
    locale: 'en_US',
    title: 'Influencer Marketing Agency UAE | UAE Influencer Agency',
    description:
      'CA Agency is a UAE influencer marketing agency helping brands run creator campaigns across Dubai, Abu Dhabi, Sharjah, and beyond.',
    url: 'https://caagency.com/influencer-marketing-uae',
    images: [
      {
        url: '/images/site/og/influencer-marketing-uae.webp',
        width: 1200,
        height: 630,
        alt: 'CA Agency, Influencer Marketing Agency UAE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Influencer Marketing Agency UAE | UAE Influencer Agency',
    description:
      'CA Agency is a UAE influencer marketing agency helping brands run creator campaigns across Dubai, Abu Dhabi, Sharjah, and beyond.',
    images: ['/images/site/og/influencer-marketing-uae.webp'],
  },
  alternates: {
    canonical: 'https://caagency.com/influencer-marketing-uae',
    languages: {
      'x-default': 'https://caagency.com/influencer-marketing-uae',
      en: 'https://caagency.com/influencer-marketing-uae',
      ar: 'https://caagency.com/ar/influencer-marketing-uae',
    },
  },
}


const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Influencer Marketing Agency UAE',
  serviceType: 'Influencer Marketing',
  description:
    'CA Agency is a UAE influencer marketing agency helping brands run creator campaigns across Dubai, Abu Dhabi, Sharjah, and beyond.',
  provider: organizationRef,
  areaServed: {
  '@type': 'Country',
  'name': 'United Arab Emirates'
},
  url: 'https://caagency.com/influencer-marketing-uae',
}

export default async function UAEPage() {
  const [content, talents] = await Promise.all([
    getSiteContent<LocationPageContent>('location-uae'),
    getFeaturedTalents(6),
  ])

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      <LocationLandingPage path="/influencer-marketing-uae" content={content} talents={talents} featuredGuides={[gulfCostGuide, saudiGuide]} />
    </>
  )
}
