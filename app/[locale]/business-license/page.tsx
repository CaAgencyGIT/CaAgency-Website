import '@/app/public-utilities.css'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import BusinessLicenseBody from '@/components/site/BusinessLicenseBody'
import { getSiteContent } from '@/lib/site-content/service'
import type { BusinessLicenseContent } from '@/lib/site-content/site-types'
import { translatedBusinessLicense, translatedPeople } from '@/lib/data/people-translated'
import { translatedPageLanguages } from '@/lib/routing-helpers'
import { buildPageMetadata } from '@/lib/seo/metadata'

// Translated business-license page. If the English content was edited after
// the translation was made, the current English content is shown instead.

const PATH = '/business-license'

export const revalidate = 3600

export function generateStaticParams() {
  return Object.keys(translatedPeople).map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const copy = translatedPeople[locale]?.legal.businessLicense
  if (!copy) return {}
  const metadata = buildPageMetadata({ title: copy.metaTitle, description: copy.metaDescription, path: PATH, locale, localized: false })
  return {
    ...metadata,
    alternates: { canonical: `https://caagency.com/${locale}${PATH}`, languages: translatedPageLanguages(PATH) },
  }
}

export default async function TranslatedBusinessLicensePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!translatedPeople[locale]) notFound()
  setRequestLocale(locale)

  const current = await getSiteContent<BusinessLicenseContent>('business-license')
  const copy = translatedBusinessLicense(locale, current)
  if (!copy) return <BusinessLicenseBody content={current} />
  return <BusinessLicenseBody content={copy} labels={copy} locale={locale} />
}
