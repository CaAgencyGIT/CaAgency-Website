import type { Metadata, Viewport } from 'next'
import { marketRoutes } from '@/lib/data/market-routes'
import { services } from '@/lib/data/services'
import { locales } from '@/i18n/config'
import {
  ORGANIZATION_ID,
  ORGANIZATION_LOGO_URL,
  WEBSITE_ID,
  organizationRef,
} from '@/lib/seo/schema'

const siteUrl = 'https://caagency.com'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Global Beauty Influencer Marketing Agency | CA Agency',
    template: '%s',
  },
  description:
    'Talent management and creator campaigns for beauty and skincare brands. Based in Dubai, working across North America, Europe, the Middle East and Asia.',
  keywords: [
    'global influencer marketing agency',
    'beauty influencer marketing agency',
    'influencer marketing agency USA',
    'Korean skincare influencer marketing',
    'K-beauty influencer agency',
    'talent management agency',
    'creator marketing agency',
    'Instagram marketing',
    'TikTok marketing',
    'YouTube influencers',
    'CA Agency',
  ],
  authors: [{ name: 'CA Agency', url: siteUrl }],
  creator: 'CA Agency',
  publisher: 'CA Agency',
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/favicon-32-v2.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192-v2.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512-v2.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: { url: '/apple-touch-icon-v2.png', sizes: '180x180' },
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'CA Agency',
    title: 'Global Beauty Influencer Marketing Agency | CA Agency',
    description:
      'Talent management and creator campaigns for beauty and skincare brands. Based in Dubai, working across North America, Europe, the Middle East and Asia.',
    images: [
      {
        url: '/images/site/og-cover-v2.jpg',
        width: 1200,
        height: 630,
        alt: 'CA Agency: global beauty influencer marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Beauty Influencer Marketing Agency | CA Agency',
    description: 'Talent management and creator campaigns for beauty and skincare brands. Based in Dubai, working across North America, Europe, the Middle East and Asia.',
    images: ['/images/site/og-cover-v2.jpg'],
    creator: '@caagency',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Marketing',
  verification: {
    google:
      process.env.GOOGLE_SITE_VERIFICATION ||
      process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION ||
      undefined,
  },
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'Organization'],
  '@id': ORGANIZATION_ID,
  name: 'CA Agency',
  alternateName: 'CA Agency Global',
  url: siteUrl,
  logo: {
    '@type': 'ImageObject',
    url: ORGANIZATION_LOGO_URL,
    width: 512,
    height: 512,
  },
  image: `${siteUrl}/images/site/og-cover-v2.jpg`,
  description:
    'Global influencer marketing agency connecting beauty and skincare brands with creators across Europe, North America, the Middle East and Asia.',
  foundingDate: '2019',
  email: 'info@caagency.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Meydan Grandstand, 6th floor, Meydan Road',
    addressLocality: 'Nad Al Sheba',
    addressRegion: 'Dubai',
    addressCountry: 'AE',
  },
  department: {
    '@type': 'Organization',
    '@id': `${siteUrl}/contact#amsterdam`,
    name: 'CA Agency Europe Division',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Johan Huizingalaan 763A',
      postalCode: '1066 VH',
      addressLocality: 'Amsterdam',
      addressCountry: 'NL',
    },
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'info@caagency.com',
    availableLanguage: ['English', 'Arabic', 'Korean', 'French', 'Spanish', 'German'],
  },
  sameAs: [
    'https://www.instagram.com/caagency/',
    'https://www.tiktok.com/@caagency/',
    'https://www.linkedin.com/company/caagency/',
    'https://www.facebook.com/caagencyglobal/',
  ],
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Saudi Arabia' },
    ...marketRoutes.europe.areaServed,
    { '@type': 'Country', name: 'Austria' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'South Korea' },
  ],
  knowsAbout: [
    'Influencer Marketing',
    'Beauty Marketing',
    'Social Media Marketing',
    'Content Creation',
    'Brand Partnerships',
    'Talent Management',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Influencer marketing services',
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.summary,
        url: `${siteUrl}/services/${service.slug}`,
      },
    })),
  },
  slogan: 'Influence • Digital • Marketing',
  priceRange: '$$',
}

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: 'CA Agency',
  url: siteUrl,
  inLanguage: [...locales],
  publisher: organizationRef,
}
