import { Metadata } from 'next'
import { getSiteContent } from '@/lib/site-content/service'
import { getFeaturedTalents } from '@/lib/site-content/public'
import { LocationPageContent } from '@/lib/site-content/location-pages'
import LocationLandingPage from '@/components/site/LocationLandingPage'
import { gulfCostGuide, saudiGuide } from '@/lib/data/guides'
import { organizationRef } from '@/lib/seo/schema'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Influencer Marketing Agency Saudi Arabia | CA Agency',
  description:
    'Reach Saudi audiences through creator partnerships tailored for Riyadh, Jeddah, and the wider Saudi market.',
  openGraph: {
    type: 'website',
    siteName: 'CA Agency',
    locale: 'en_US',
    title: 'Influencer Marketing Agency Saudi Arabia',
    description:
      'Reach Saudi audiences through creator partnerships tailored for Riyadh, Jeddah, and the wider Saudi market.',
    url: 'https://caagency.com/influencer-marketing-saudi-arabia',
    images: [
      {
        url: '/images/site/og/influencer-marketing-saudi-arabia-v2.jpg',
        width: 1200,
        height: 630,
        alt: 'CA Agency, Influencer Marketing Agency Saudi Arabia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Influencer Marketing Agency Saudi Arabia',
    description:
      'Reach Saudi audiences through creator partnerships tailored for Riyadh, Jeddah, and the wider Saudi market.',
    images: ['/images/site/og/influencer-marketing-saudi-arabia-v2.jpg'],
  },
  alternates: {
    canonical: 'https://caagency.com/influencer-marketing-saudi-arabia',
    languages: {
      'x-default': 'https://caagency.com/influencer-marketing-saudi-arabia',
      en: 'https://caagency.com/influencer-marketing-saudi-arabia',
      ar: 'https://caagency.com/ar/influencer-marketing-saudi-arabia',
    },
  },
}


const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Influencer Marketing Agency Saudi Arabia',
  serviceType: 'Influencer Marketing',
  description:
    'Reach Saudi audiences through creator partnerships tailored for Riyadh, Jeddah, and the wider Saudi market.',
  provider: organizationRef,
  areaServed: {
  '@type': 'Country',
  'name': 'Saudi Arabia'
},
  url: 'https://caagency.com/influencer-marketing-saudi-arabia',
}

export default async function SaudiArabiaPage() {
  const [content, talents] = await Promise.all([
    getSiteContent<LocationPageContent>('location-saudi-arabia'),
    getFeaturedTalents(6),
  ])

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      <LocationLandingPage path="/influencer-marketing-saudi-arabia" content={content} talents={talents} featuredGuides={[saudiGuide, gulfCostGuide]} />
    </>
  )
}
