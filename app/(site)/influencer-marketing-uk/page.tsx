import '@/app/public-utilities.css'
import { Metadata } from 'next'
import { getSiteContent } from '@/lib/site-content/service'
import { getFeaturedTalents } from '@/lib/site-content/public'
import { LocationPageContent } from '@/lib/site-content/location-pages'
import LocationLandingPage from '@/components/site/LocationLandingPage'
import { organizationRef } from '@/lib/seo/schema'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Influencer Marketing Agency UK | CA Agency',
  description:
    'Run UK influencer marketing campaigns with British creators across Instagram, TikTok, and YouTube, backed by a performance-led strategy and clear reporting.',
  openGraph: {
    type: 'website',
    siteName: 'CA Agency',
    locale: 'en_US',
    title: 'Influencer Marketing Agency UK',
    description:
      'Run UK influencer marketing campaigns with British creators across Instagram, TikTok, and YouTube, backed by a performance-led strategy and clear reporting.',
    url: 'https://caagency.com/influencer-marketing-uk',
    images: [
      {
        url: '/images/site/og/influencer-marketing-uk-v2.jpg',
        width: 1200,
        height: 630,
        alt: 'CA Agency, Influencer Marketing Agency UK',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Influencer Marketing Agency UK',
    description:
      'Run UK influencer marketing campaigns with British creators across Instagram, TikTok, and YouTube, backed by a performance-led strategy and clear reporting.',
    images: ['/images/site/og/influencer-marketing-uk-v2.jpg'],
  },
  alternates: {
    canonical: 'https://caagency.com/influencer-marketing-uk',
  },
}


const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Influencer Marketing Agency UK',
  serviceType: 'Influencer Marketing',
  description:
    'Run UK influencer marketing campaigns with British creators across Instagram, TikTok, and YouTube, backed by a performance-led strategy and clear reporting.',
  provider: organizationRef,
  areaServed: {
  '@type': 'Country',
  'name': 'United Kingdom'
},
  url: 'https://caagency.com/influencer-marketing-uk',
}

export default async function UKPage() {
  const [content, talents] = await Promise.all([
    getSiteContent<LocationPageContent>('location-uk'),
    getFeaturedTalents(6),
  ])

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      <LocationLandingPage path="/influencer-marketing-uk" content={content} talents={talents} />
    </>
  )
}
