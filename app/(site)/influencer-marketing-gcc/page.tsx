import { Metadata } from 'next'
import { getSiteContent } from '@/lib/site-content/service'
import { getFeaturedTalents } from '@/lib/site-content/public'
import { LocationPageContent } from '@/lib/site-content/location-pages'
import LocationLandingPage from '@/components/site/LocationLandingPage'
import { gulfCostGuide, saudiGuide } from '@/lib/data/guides'
import { organizationRef } from '@/lib/seo/schema'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Influencer Marketing Agency GCC | CA Agency',
  description:
    'Scale creator campaigns across the GCC with one coordinated influencer marketing agency strategy across Gulf markets.',
  keywords: [
    'influencer marketing agency gcc',
    'gcc influencer agency',
    'influencer marketing gcc',
    'gulf influencer marketing agency',
    'middle east influencer agency',
  ],
  openGraph: {
    type: 'website',
    siteName: 'CA Agency',
    locale: 'en_US',
    title: 'Influencer Marketing Agency GCC | GCC Influencer Agency',
    description:
      'Scale creator campaigns across the GCC with one coordinated influencer marketing agency strategy across Gulf markets.',
    url: 'https://caagency.com/influencer-marketing-gcc',
    images: [
      {
        url: '/images/site/og/influencer-marketing-gcc.webp',
        width: 1200,
        height: 630,
        alt: 'CA Agency, Influencer Marketing Agency GCC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Influencer Marketing Agency GCC | GCC Influencer Agency',
    description:
      'Scale creator campaigns across the GCC with one coordinated influencer marketing agency strategy across Gulf markets.',
    images: ['/images/site/og/influencer-marketing-gcc.webp'],
  },
  alternates: {
    canonical: 'https://caagency.com/influencer-marketing-gcc',
    languages: {
      'x-default': 'https://caagency.com/influencer-marketing-gcc',
      en: 'https://caagency.com/influencer-marketing-gcc',
      ar: 'https://caagency.com/ar/influencer-marketing-gcc',
    },
  },
}


const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Influencer Marketing Agency GCC',
  serviceType: 'Influencer Marketing',
  description:
    'Scale creator campaigns across the GCC with one coordinated influencer marketing agency strategy across Gulf markets.',
  provider: organizationRef,
  areaServed: [
  {
    '@type': 'Country',
    'name': 'United Arab Emirates'
  },
  {
    '@type': 'Country',
    'name': 'Saudi Arabia'
  },
  {
    '@type': 'Country',
    'name': 'Qatar'
  },
  {
    '@type': 'Country',
    'name': 'Kuwait'
  },
  {
    '@type': 'Country',
    'name': 'Bahrain'
  },
  {
    '@type': 'Country',
    'name': 'Oman'
  }
],
  url: 'https://caagency.com/influencer-marketing-gcc',
}

export default async function GCCPage() {
  const [content, talents] = await Promise.all([
    getSiteContent<LocationPageContent>('location-gcc'),
    getFeaturedTalents(6),
  ])

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      <LocationLandingPage path="/influencer-marketing-gcc" content={content} talents={talents} featuredGuides={[gulfCostGuide, saudiGuide]} />
    </>
  )
}
