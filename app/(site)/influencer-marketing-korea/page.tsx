import '@/app/public-utilities.css'
import { Metadata } from 'next'
import { getSiteContent } from '@/lib/site-content/service'
import { getFeaturedTalents } from '@/lib/site-content/public'
import { LocationPageContent } from '@/lib/site-content/location-pages'
import LocationLandingPage from '@/components/site/LocationLandingPage'
import { tiktokShopBeautyGuide } from '@/lib/data/guides'
import { organizationRef } from '@/lib/seo/schema'
import { locationPageLanguages } from '@/lib/routing-helpers'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Influencer Marketing Agency Korea | CA Agency',
  description:
    'CA Agency helps brands reach Korean audiences through localized influencer marketing campaigns in beauty, fashion, lifestyle, and tech.',
  keywords: [
    'influencer marketing agency korea',
    'korea influencer agency',
    'korean influencer marketing agency',
    'influencer marketing korea',
    'south korea influencer agency',
  ],
  openGraph: {
    type: 'website',
    siteName: 'CA Agency',
    locale: 'en_US',
    title: 'Influencer Marketing Agency Korea | Korea Influencer Agency',
    description:
      'CA Agency helps brands reach Korean audiences through localized influencer marketing campaigns in beauty, fashion, lifestyle, and tech.',
    url: 'https://caagency.com/influencer-marketing-korea',
    images: [
      {
        url: '/images/site/og/influencer-marketing-korea-v2.jpg',
        width: 1200,
        height: 630,
        alt: 'CA Agency, Influencer Marketing Agency Korea',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Influencer Marketing Agency Korea | Korea Influencer Agency',
    description:
      'CA Agency helps brands reach Korean audiences through localized influencer marketing campaigns in beauty, fashion, lifestyle, and tech.',
    images: ['/images/site/og/influencer-marketing-korea-v2.jpg'],
  },
  alternates: {
    canonical: 'https://caagency.com/influencer-marketing-korea',
    // English plus every translated version of this page (Arabic, Spanish).
    languages: locationPageLanguages('/influencer-marketing-korea'),
  },
}


const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Influencer Marketing Agency Korea',
  serviceType: 'Influencer Marketing',
  description:
    'CA Agency helps brands reach Korean audiences through localized influencer marketing campaigns in beauty, fashion, lifestyle, and tech.',
  provider: organizationRef,
  areaServed: {
  '@type': 'Country',
  'name': 'South Korea'
},
  url: 'https://caagency.com/influencer-marketing-korea',
}

export default async function KoreaPage() {
  const [content, talents] = await Promise.all([
    getSiteContent<LocationPageContent>('location-korea'),
    getFeaturedTalents(6),
  ])

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      <LocationLandingPage
        path="/influencer-marketing-korea"
        content={content}
        talents={talents}
        featuredGuides={[tiktokShopBeautyGuide]}
        relatedPages={{
          eyebrow: 'K-beauty campaign planning',
          title: 'Taking a Korean skincare launch to Europe',
          items: [
            { href: '/case-studies/anua-campaign', title: 'Anua’s guided face-massage tutorial', desc: 'See how Georgii Galaev uses on-screen instructions to show the cream and its built-in tool in action.' },
            { href: '/case-studies/medicube-campaign', title: 'Medicube’s overnight mask demonstration', desc: 'Follow Melani Seiffert from the initial application to the peel-off reveal.' },
            { href: '/influencer-marketing-europe', title: 'Plan the European launch', desc: 'Choose launch markets, brief creators in the audience’s language and confirm where shoppers can buy the product.' },
          ],
        }}
      />
    </>
  )
}
