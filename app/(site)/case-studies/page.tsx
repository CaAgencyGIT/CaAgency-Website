import '@/app/public-utilities.css'
import { Metadata } from 'next'
import { currentCaseStudies } from '@/lib/data/redesign-media'
import { caseStudies, caseStudySeoTitle } from '@/lib/data/case-studies'
import { englishCaseStudyUi } from '@/lib/data/case-study-ui'
import CaseStudiesIndex from '@/components/site/CaseStudiesIndex'
import { caseStudyIndexLanguages } from '@/lib/routing-helpers'

const listed = currentCaseStudies()
// Every other case study, as plain links under the grid, so each page is
// reachable from this index and none is left without an internal link.
const listedSlugs = new Set(listed.map((cs) => cs.slug))
const archive = caseStudies.filter((cs) => !listedSlugs.has(cs.slug))
import { buildPageMetadata } from '@/lib/seo/metadata'

const baseMetadata = buildPageMetadata({
  title: 'Influencer Marketing Case Studies',
  description:
    'How CA Agency runs influencer campaigns for brands like YSL Beauty, NARS, HONOR, and Mixsoon, the brief, the approach, and the work itself.',
  path: '/case-studies',
  localized: false,
  keywords: [
    'influencer marketing case studies',
    'influencer campaign examples',
    'beauty influencer campaigns',
    'creator marketing results',
  ],
})

export const metadata: Metadata = {
  ...baseMetadata,
  alternates: { canonical: 'https://caagency.com/case-studies', languages: caseStudyIndexLanguages() },
}

const listSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: listed.map((cs, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: caseStudySeoTitle(cs),
    url: `https://caagency.com/case-studies/${cs.slug}`,
  })),
}

export default function CaseStudiesPage() {
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(listSchema)}</script>

      <CaseStudiesIndex listed={listed} archive={archive} ui={englishCaseStudyUi} locale="en" />
    </>
  )
}
