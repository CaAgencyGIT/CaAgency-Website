import '@/app/public-utilities.css'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import CaseStudiesIndex from '@/components/site/CaseStudiesIndex'
import { caseStudies } from '@/lib/data/case-studies'
import { translateCaseStudy, translatedCaseStudies, translatedCaseStudySeoTitle } from '@/lib/data/case-studies-translated'
import { currentCaseStudies } from '@/lib/data/redesign-media'
import { caseStudyIndexLanguages } from '@/lib/routing-helpers'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { jsonLdSafe } from '@/lib/sanitize'

// The case-studies index in each translated language. No database read.

interface PageProps {
  params: Promise<{ locale: string }>
}

const baseUrl = 'https://caagency.com'

export const revalidate = 3600

export function generateStaticParams() {
  return Object.keys(translatedCaseStudies).map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const translation = translatedCaseStudies[locale]
  if (!translation) return {}
  const metadata = buildPageMetadata({
    title: translation.ui.indexTitle,
    description: translation.ui.indexDescription,
    path: '/case-studies',
    locale,
    localized: false,
  })
  return {
    ...metadata,
    alternates: { canonical: `${baseUrl}/${locale}/case-studies`, languages: caseStudyIndexLanguages() },
  }
}

export default async function TranslatedCaseStudiesPage({ params }: PageProps) {
  const { locale } = await params
  const translation = translatedCaseStudies[locale]
  if (!translation) notFound()
  setRequestLocale(locale)

  const inLanguage = (study: (typeof caseStudies)[number]) => translateCaseStudy(locale, study) ?? study
  const listed = currentCaseStudies().map(inLanguage)
  const listedSlugs = new Set(listed.map((cs) => cs.slug))
  const archive = caseStudies.filter((cs) => !listedSlugs.has(cs.slug)).map(inLanguage)

  const listSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: listed.map((cs, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: translatedCaseStudySeoTitle(locale, cs),
      url: `${baseUrl}/${locale}/case-studies/${cs.slug}`,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(listSchema) }} />
      <CaseStudiesIndex listed={listed} archive={archive} ui={translation.ui} locale={locale} />
    </>
  )
}
