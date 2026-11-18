import '@/app/public-utilities.css'
import { Metadata } from 'next'
import { getSiteContent } from '@/lib/site-content/service'
import { getFeaturedTalents } from '@/lib/site-content/public'
import { LocationPageContent } from '@/lib/site-content/location-pages'
import LocationLandingPage from '@/components/site/LocationLandingPage'
import { locationGuides, ftcGuide } from '@/lib/data/guides'
import { organizationRef } from '@/lib/seo/schema'
import { locationPageLanguages } from '@/lib/routing-helpers'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'UK Beauty Influencer Marketing Agency | CA Agency',
  description:
    'Plan a UK beauty or skincare campaign with CA Agency. See creator work, compare UK audience fit and brief a launch for your brand or retail stockist.',
  openGraph: {
    type: 'website',
    siteName: 'CA Agency',
    locale: 'en_US',
    title: 'UK Beauty Influencer Marketing Agency',
    description:
      'Plan a UK beauty or skincare campaign with CA Agency. See creator work, compare UK audience fit and brief a launch for your brand or retail stockist.',
    url: 'https://caagency.com/influencer-marketing-uk',
    images: [
      {
        url: '/images/site/og/influencer-marketing-uk-v2.jpg',
        width: 1200,
        height: 630,
        alt: 'CA Agency, UK Beauty Influencer Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK Beauty Influencer Marketing Agency',
    description:
      'Plan a UK beauty or skincare campaign with CA Agency. See creator work, compare UK audience fit and brief a launch for your brand or retail stockist.',
    images: ['/images/site/og/influencer-marketing-uk-v2.jpg'],
  },
  alternates: {
    canonical: 'https://caagency.com/influencer-marketing-uk',
    // English plus every translated version of this page (Arabic, Spanish).
    languages: locationPageLanguages('/influencer-marketing-uk'),
  },
}


const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'UK Beauty Influencer Marketing Agency',
  serviceType: 'Influencer Marketing',
  description:
    'Plan a UK beauty or skincare campaign with CA Agency. See creator work, compare UK audience fit and brief a launch for your brand or retail stockist.',
  provider: organizationRef,
  areaServed: {
  '@type': 'Country',
  'name': 'United Kingdom'
},
  url: 'https://caagency.com/influencer-marketing-uk',
}

const ukGuides = locationGuides.map((guide) => guide.href === ftcGuide.href ? {
  href: 'https://www.asa.org.uk/resource/influencers-guide.html',
  title: 'UK influencer advertising guidance',
  desc: 'Read the ASA and CAP guide to making advertising clear to a UK audience.',
} : guide)

export default async function UKPage() {
  const [content, talents] = await Promise.all([
    getSiteContent<LocationPageContent>('location-uk'),
    getFeaturedTalents(6),
  ])

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      <LocationLandingPage path="/influencer-marketing-uk" content={content} talents={talents} defaultGuides={ukGuides} />
    </>
  )
}
