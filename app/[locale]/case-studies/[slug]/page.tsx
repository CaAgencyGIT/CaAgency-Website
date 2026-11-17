import '@/app/public-utilities.css'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import BreadcrumbTrail from '@/components/ui/BreadcrumbTrail'
import CaseStudyDetail from '@/components/site/CaseStudyDetail'
import { caseStudies, caseStudyStill, getCaseStudy } from '@/lib/data/case-studies'
import { translateCaseStudy, translatedCaseStudies, translatedCaseStudySeoTitle } from '@/lib/data/case-studies-translated'
import { getCreatorTalent, relatedCaseStudies } from '@/lib/case-study-creator'
import { currentCaseStudies } from '@/lib/data/redesign-media'
import { posterFor, publishedDateFor } from '@/lib/data/videos'
import { caseStudyLanguages } from '@/lib/routing-helpers'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { organizationRef } from '@/lib/seo/schema'
import { jsonLdSafe } from '@/lib/sanitize'

// Translated case studies (lib/data/case-studies-translated). The set of
// pages comes from code; like the English page, only the creator link reads
// the roster, hourly.

interface PageProps {
  params: Promise<{ locale: string; slug: string }>
}

const baseUrl = 'https://caagency.com'

export const revalidate = 3600

export function generateStaticParams() {
  return Object.keys(translatedCaseStudies).flatMap((locale) => caseStudies.map((cs) => ({ locale, slug: cs.slug })))
}

function findStudy(locale: string, slug: string) {
  const english = getCaseStudy(slug)
  return english ? translateCaseStudy(locale, english) : undefined
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const study = findStudy(locale, slug)
  if (!study) return {}
  const metadata = buildPageMetadata({
    title: translatedCaseStudySeoTitle(locale, study),
    description: study.summary,
    path: `/case-studies/${slug}`,
    locale,
    localized: false,
    type: 'article',
  })
  return {
    ...metadata,
    alternates: { canonical: `${baseUrl}/${locale}/case-studies/${slug}`, languages: caseStudyLanguages(slug) },
  }
}

export default async function TranslatedCaseStudyPage({ params }: PageProps) {
  const { locale, slug } = await params
  const study = findStudy(locale, slug)
  if (!study) notFound()
  setRequestLocale(locale)

  const { ui } = translatedCaseStudies[locale]
  const tBreadcrumbs = await getTranslations({ locale, namespace: 'breadcrumbs' })
  const creatorTalent = await getCreatorTalent(study.creator)
  const listed = currentCaseStudies().map((cs) => translateCaseStudy(locale, cs) ?? cs)
  const related = relatedCaseStudies(study, listed)
  const url = `${baseUrl}/${locale}/case-studies/${slug}`
  const headline = translatedCaseStudySeoTitle(locale, study)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description: study.summary,
    inLanguage: locale,
    image: `${baseUrl}${caseStudyStill(study)}`,
    author: organizationRef,
    publisher: organizationRef,
    datePublished: publishedDateFor(study.videoSrc),
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    ...(study.videoSrc && {
      video: {
        '@type': 'VideoObject',
        name: study.title,
        description: study.summary,
        contentUrl: `${baseUrl}${study.videoSrc}`,
        thumbnailUrl: `${baseUrl}${posterFor(study.videoSrc)}`,
        uploadDate: publishedDateFor(study.videoSrc),
      },
    }),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(schema) }} />
      {/* The layout leaves the trail to this page, which knows the translated title. */}
      <BreadcrumbTrail
        locale={locale}
        ariaLabel={tBreadcrumbs('label')}
        breadcrumbs={[
          { label: tBreadcrumbs('home'), href: '/' },
          { label: tBreadcrumbs('case-studies'), href: '/case-studies' },
          { label: study.title, href: `/case-studies/${slug}` },
        ]}
      />
      <CaseStudyDetail study={study} related={related} creatorTalent={creatorTalent} ui={ui} locale={locale} />
    </>
  )
}
