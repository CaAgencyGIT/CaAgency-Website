import '@/app/public-utilities.css'
import { Metadata } from 'next'
import LegalContentPage from '@/components/site/LegalContentPage'
import { getSiteContent } from '@/lib/site-content/service'
import { LegalPageContent } from '@/lib/site-content/site-types'
import { buildPageMetadata } from '@/lib/seo/metadata'

// ISR: prerender at build, refresh the DB-backed footer/content hourly.
export const revalidate = 3600

export const metadata: Metadata = buildPageMetadata({
  title: 'Privacy Policy',
  description:
    'How CA Agency collects, uses, and protects your personal data, and the purposes we process it for, in compliance with UAE data protection regulations.',
  path: '/privacy-policy',
  localized: false,
})

export default async function PrivacyPolicyPage() {
  const content = await getSiteContent<LegalPageContent>('privacy-policy')
  return <LegalContentPage content={content} />
}
