import type { CaseStudy } from '@/lib/data/case-studies'
import type { CaseStudyUi } from '@/lib/data/case-study-ui'
import * as de from '@/lib/data/case-studies-translated/de'
import * as fr from '@/lib/data/case-studies-translated/fr'
import * as es from '@/lib/data/case-studies-translated/es'
import * as ar from '@/lib/data/case-studies-translated/ar'
import * as ko from '@/lib/data/case-studies-translated/ko'
import * as zh from '@/lib/data/case-studies-translated/zh'

// Every case study in each translated language, served at
// /<locale>/case-studies/<slug>. Only the copy is translated: media, brand,
// creator, platforms and slugs come from the English study. Keep
// CASE_STUDY_LOCALES in lib/routing-helpers.ts in step
// (tests/unit/case-studies-translated.test.ts checks).

export interface CaseStudyCopy {
  title: string
  summary: string
  brief: string
  approach: string
  outcome: string
}

export interface CaseStudyTranslation {
  ui: CaseStudyUi
  /** English vertical tag -> translated tag */
  verticals: Record<string, string>
  /** English service name -> translated name */
  services: Record<string, string>
  studies: Record<string, CaseStudyCopy>
}

export const translatedCaseStudies: Record<string, CaseStudyTranslation> = { de, fr, es, ar, ko, zh }

/** The study with its copy, vertical and services in this language; undefined when not translated. */
export function translateCaseStudy(locale: string, study: CaseStudy): CaseStudy | undefined {
  const translation = translatedCaseStudies[locale]
  const copy = translation?.studies[study.slug]
  if (!translation || !copy) return undefined
  return {
    ...study,
    ...copy,
    vertical: translation.verticals[study.vertical] ?? study.vertical,
    services: study.services.map((service) => translation.services[service] ?? service),
  }
}

/** Search-result title, following caseStudySeoTitle: creator showcases name the creator. */
export function translatedCaseStudySeoTitle(locale: string, study: Pick<CaseStudy, 'brand' | 'creatorName'>): string {
  const { ui } = translatedCaseStudies[locale]
  return study.creatorName
    ? ui.seoTitleCreator.replace('{brand}', study.brand).replace('{creator}', study.creatorName)
    : ui.seoTitleBrand.replace('{brand}', study.brand)
}
