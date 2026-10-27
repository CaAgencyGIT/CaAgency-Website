import { Metadata } from 'next'
import { getSiteContent } from '@/lib/site-content/service'
import { getFeaturedTalents } from '@/lib/site-content/public'
import { LocationPageContent } from '@/lib/site-content/location-pages'
import LocationLandingPage from '@/components/site/LocationLandingPage'
import { organizationRef } from '@/lib/seo/schema'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Influencer Marketing Agency Asia | CA Agency',
  description:
    'CA Agency helps brands run influencer marketing campaigns across Asia with localized creator strategy and cross-market execution.',
  keywords: [
    'influencer marketing agency asia',
    'influencer agency asia',
    'asia influencer marketing agency',
    'influencer marketing asia',
    'asian influencer agency',
  ],
  openGraph: {
    type: 'website',
    siteName: 'CA Agency',
    locale: 'en_US',
    title: 'Influencer Marketing Agency Asia | Asia Influencer Agency',
    description:
      'CA Agency helps brands run influencer marketing campaigns across Asia with localized creator strategy and cross-market execution.',
    url: 'https://caagency.com/influencer-marketing-asia',
    images: [
      {
        url: '/images/site/og/influencer-marketing-asia-v2.jpg',
        width: 1200,
        height: 630,
        alt: 'CA Agency, Influencer Marketing Agency Asia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Influencer Marketing Agency Asia | Asia Influencer Agency',
    description:
      'CA Agency helps brands run influencer marketing campaigns across Asia with localized creator strategy and cross-market execution.',
    images: ['/images/site/og/influencer-marketing-asia-v2.jpg'],
  },
  alternates: {
    canonical: 'https://caagency.com/influencer-marketing-asia',
  },
}


const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Influencer Marketing Agency Asia',
  serviceType: 'Influencer Marketing',
  description:
    'CA Agency helps brands run influencer marketing campaigns across Asia with localized creator strategy and cross-market execution.',
  provider: organizationRef,
  areaServed: [
  {
    '@type': 'Country',
    'name': 'South Korea'
  },
  {
    '@type': 'Country',
    'name': 'Japan'
  },
  {
    '@type': 'Country',
    'name': 'Singapore'
  },
  {
    '@type': 'Country',
    'name': 'Thailand'
  },
  {
    '@type': 'Country',
    'name': 'Indonesia'
  },
  {
    '@type': 'Country',
    'name': 'Philippines'
  },
  {
    '@type': 'Country',
    'name': 'Vietnam'
  },
  {
    '@type': 'Country',
    'name': 'Malaysia'
  }
],
  url: 'https://caagency.com/influencer-marketing-asia',
}

export default async function AsiaPage() {
  const [content, talents] = await Promise.all([
    getSiteContent<LocationPageContent>('location-asia'),
    getFeaturedTalents(6),
  ])

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      <LocationLandingPage path="/influencer-marketing-asia" content={content} talents={talents} />
    </>
  )
}
