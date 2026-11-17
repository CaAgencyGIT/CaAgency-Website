import '@/app/public-utilities.css'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import LegalContentPage from '@/components/site/LegalContentPage'
import { getSiteContent } from '@/lib/site-content/service'
import type { LegalPageContent } from '@/lib/site-content/site-types'
import { translatedLegalPage, translatedPeople } from '@/lib/data/people-translated'
import { translatedPageLanguages } from '@/lib/routing-helpers'
import { buildPageMetadata } from '@/lib/seo/metadata'

// Translated legal page. The English version stays the authoritative text
// (the page says so and links to it). If the English content was edited after
// the translation was made, the current English text is shown instead.

const PATH = '/terms-of-service'

export const revalidate = 3600

export function generateStaticParams() {
  return Object.keys(translatedPeople).map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const copy = translatedPeople[locale]?.legal.terms
  if (!copy) return {}
  const metadata = buildPageMetadata({ title: copy.metaTitle, description: copy.metaDescription, path: PATH, locale, localized: false })
  return {
    ...metadata,
    alternates: { canonical: `https://caagency.com/${locale}${PATH}`, languages: translatedPageLanguages(PATH) },
  }
}

export default async function TranslatedTermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const translation = translatedPeople[locale]
  if (!translation) notFound()
  setRequestLocale(locale)

  const current = await getSiteContent<LegalPageContent>('terms-of-service')
  const copy = translatedLegalPage(locale, 'terms', current)
  if (!copy) return <LegalContentPage content={current} />
  const { legal } = translation
  return (
    <LegalContentPage
      content={copy}
      lastUpdatedLabel={legal.lastUpdated}
      notice={{ text: legal.notice, href: PATH, linkLabel: legal.readEnglish }}
    />
  )
}
