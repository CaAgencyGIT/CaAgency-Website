import '@/app/public-utilities.css'
import { Metadata } from 'next'
import { getSiteContent } from '@/lib/site-content/service'
import { BusinessLicenseContent } from '@/lib/site-content/site-types'
import { buildPageMetadata } from '@/lib/seo/metadata'
import BusinessLicenseBody from '@/components/site/BusinessLicenseBody'
import { translatedPageLanguages } from '@/lib/routing-helpers'

// ISR: prerender at build, refresh the DB-backed footer/content hourly.
export const revalidate = 3600

const baseMetadata = buildPageMetadata({
  title: 'Business License',
  description:
    'CA Agency business license and registration information. Licensed influencer marketing agency in Dubai, UAE. Registration No. 2417532.01.',
  path: '/business-license',
  localized: false,
})

export const metadata: Metadata = {
  ...baseMetadata,
  alternates: { canonical: 'https://caagency.com/business-license', languages: translatedPageLanguages('/business-license') },
}

export default async function BusinessLicensePage() {
  const content = await getSiteContent<BusinessLicenseContent>('business-license')

  return <BusinessLicenseBody content={content} />
}
