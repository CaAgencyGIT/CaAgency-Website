import '@/app/public-utilities.css'
import { Metadata } from 'next'
import LegalContentPage from '@/components/site/LegalContentPage'
import { getSiteContent } from '@/lib/site-content/service'
import { LegalPageContent } from '@/lib/site-content/site-types'
import { buildPageMetadata } from '@/lib/seo/metadata'

// ISR: prerender at build, refresh the DB-backed footer/content hourly.
export const revalidate = 3600

export const metadata: Metadata = buildPageMetadata({
  title: 'Terms of Service',
  description:
    'Terms of Service for CA Agency covering use of the website, services, payments, intellectual property, and legal conditions.',
  path: '/terms-of-service',
  localized: false,
})

export default async function TermsOfServicePage() {
  const content = await getSiteContent<LegalPageContent>('terms-of-service')
  return <LegalContentPage content={content} />
}
