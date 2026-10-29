import '@/app/public-utilities.css'
import { Metadata } from 'next'
import { getSiteContent } from '@/lib/site-content/service'
import { getFeaturedTalents } from '@/lib/site-content/public'
import { LocationPageContent } from '@/lib/site-content/location-pages'
import LocationLandingPage from '@/components/site/LocationLandingPage'
import { findSkincareGuide, tiktokShopBeautyGuide } from '@/lib/data/guides'
import { organizationRef } from '@/lib/seo/schema'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'K-Beauty & Korean Skincare Influencer Marketing | CA Agency',
  description:
    'K-beauty influencer marketing for Korean skincare brands: creator campaigns that turn routines into results on Instagram, TikTok, and YouTube.',
  keywords: [
    'korean skincare influencer marketing',
    'k-beauty influencer agency',
    'k-beauty marketing agency',
    'korean skincare marketing',
    'beauty influencer agency',
    'skincare influencer marketing',
  ],
  openGraph: {
    type: 'website',
    siteName: 'CA Agency',
    locale: 'en_US',
    title: 'Korean Skincare & K-Beauty Influencer Marketing Agency',
    description:
      'Creator campaigns for K-beauty and Korean skincare brands across Instagram, TikTok, and YouTube.',
    url: 'https://caagency.com/korean-skincare-influencer-marketing',
    images: [
      {
        url: '/images/site/og/korean-skincare-influencer-marketing-v2.jpg',
        width: 1200,
        height: 630,
        alt: 'CA Agency, K-Beauty Influencer Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Korean Skincare & K-Beauty Influencer Marketing Agency',
    description:
      'Creator campaigns for K-beauty and Korean skincare brands across Instagram, TikTok, and YouTube.',
    images: ['/images/site/og/korean-skincare-influencer-marketing-v2.jpg'],
  },
  alternates: {
    canonical: 'https://caagency.com/korean-skincare-influencer-marketing',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Korean Skincare (K-Beauty) Influencer Marketing',
  serviceType: 'Influencer Marketing',
  description:
    'Influencer marketing campaigns for Korean skincare and K-beauty brands across Instagram, TikTok, and YouTube, creator selection, content, and reporting.',
  provider: organizationRef,
  areaServed: 'Worldwide',
  url: 'https://caagency.com/korean-skincare-influencer-marketing',
}

export default async function KoreanSkincarePage() {
  const [content, talents] = await Promise.all([
    getSiteContent<LocationPageContent>('location-korean-skincare'),
    getFeaturedTalents(6),
  ])

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      <LocationLandingPage content={content} talents={talents} featuredGuides={[tiktokShopBeautyGuide, findSkincareGuide]} />
    </>
  )
}
