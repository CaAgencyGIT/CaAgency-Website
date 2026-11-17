import '@/app/public-utilities.css'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { caseStudies, caseStudySeoTitle, caseStudyStill, getCaseStudy } from '@/lib/data/case-studies'
import { englishCaseStudyUi } from '@/lib/data/case-study-ui'
import { getCreatorTalent, relatedCaseStudies } from '@/lib/case-study-creator'
import CaseStudyDetail from '@/components/site/CaseStudyDetail'
import { caseStudyLanguages } from '@/lib/routing-helpers'
import { posterFor, publishedDateFor } from '@/lib/data/videos'
import { currentCaseStudies } from '@/lib/data/redesign-media'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { organizationRef } from '@/lib/seo/schema'

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

// No `dynamicParams = false`: it rejects unknown slugs before the (site)
// layout renders, so visitors got Next's bare unbranded 404 (no header, no
// <html lang>). The page calls notFound() itself, which renders not-found.tsx.

// Hourly ISR so the creator link follows roster changes (talent saves also
// revalidate these pages, see lib/revalidate.ts).
export const revalidate = 3600

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)

  if (!study) {
    return { title: 'Case Study Not Found' }
  }

  const title = caseStudySeoTitle(study)

  const metadata = buildPageMetadata({
    title,
    description: study.summary,
    path: `/case-studies/${slug}`,
    localized: false,
    type: 'article',
    keywords: [
      `${study.brand} influencer campaign`,
      'influencer marketing case study',
      study.vertical.toLowerCase(),
      ...study.platforms.map((p) => `${p} campaign`),
    ],
  })
  return {
    ...metadata,
    alternates: { canonical: `https://caagency.com/case-studies/${slug}`, languages: caseStudyLanguages(slug) },
  }
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const study = getCaseStudy(slug)

  if (!study) {
    notFound()
  }

  const creatorTalent = await getCreatorTalent(study.creator)

  const related = relatedCaseStudies(study, currentCaseStudies())

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseStudySeoTitle(study),
    description: study.summary,
    image: `https://caagency.com${caseStudyStill(study)}`,
    author: organizationRef,
    publisher: organizationRef,
    datePublished: publishedDateFor(study.videoSrc),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://caagency.com/case-studies/${slug}`,
    },
    ...(study.videoSrc && {
      video: {
        '@type': 'VideoObject',
        name: study.title,
        description: study.summary,
        contentUrl: `https://caagency.com${study.videoSrc}`,
        thumbnailUrl: `https://caagency.com${posterFor(study.videoSrc)}`,
        uploadDate: publishedDateFor(study.videoSrc),
      },
    }),
  }

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <CaseStudyDetail study={study} related={related} creatorTalent={creatorTalent} ui={englishCaseStudyUi} locale="en" />
    </>
  )
}
