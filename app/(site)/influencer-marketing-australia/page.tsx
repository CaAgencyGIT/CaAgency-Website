import { Metadata } from 'next'
import { getSiteContent } from '@/lib/site-content/service'
import { getFeaturedTalents } from '@/lib/site-content/public'
import { LocationPageContent } from '@/lib/site-content/location-pages'
import LocationLandingPage from '@/components/site/LocationLandingPage'
import { organizationRef } from '@/lib/seo/schema'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Influencer Marketing Agency Australia | CA Agency',
  description:
    'Launch creator-led influencer marketing campaigns in Australia across Sydney, Melbourne, and beyond, with vetted creators and transparent performance reporting.',
  openGraph: {
    type: 'website',
    siteName: 'CA Agency',
    locale: 'en_US',
    title: 'Influencer Marketing Agency Australia',
    description:
      'Launch creator-led influencer marketing campaigns in Australia across Sydney, Melbourne, and beyond, with vetted creators and transparent performance reporting.',
    url: 'https://caagency.com/influencer-marketing-australia',
    images: [
      {
        url: '/images/site/og/influencer-marketing-australia-v2.jpg',
        width: 1200,
        height: 630,
        alt: 'CA Agency, Influencer Marketing Agency Australia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Influencer Marketing Agency Australia',
    description:
      'Launch creator-led influencer marketing campaigns in Australia across Sydney, Melbourne, and beyond, with vetted creators and transparent performance reporting.',
    images: ['/images/site/og/influencer-marketing-australia-v2.jpg'],
  },
  alternates: {
    canonical: 'https://caagency.com/influencer-marketing-australia',
  },
}


const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Influencer Marketing Agency Australia',
  serviceType: 'Influencer Marketing',
  description:
    'Launch creator-led influencer marketing campaigns in Australia across Sydney, Melbourne, and beyond, with vetted creators and transparent performance reporting.',
  provider: organizationRef,
  areaServed: {
  '@type': 'Country',
  'name': 'Australia'
},
  url: 'https://caagency.com/influencer-marketing-australia',
}

export default async function AustraliaPage() {
  const [content, talents] = await Promise.all([
    getSiteContent<LocationPageContent>('location-australia'),
    getFeaturedTalents(6),
  ])

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      <LocationLandingPage path="/influencer-marketing-australia" content={content} talents={talents} />
    </>
  )
}
