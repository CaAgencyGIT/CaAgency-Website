import { describe, expect, it } from 'vitest'
import { existsSync } from 'node:fs'
import { caseStudies } from '@/lib/data/case-studies'
import { englishCaseStudyUi } from '@/lib/data/case-study-ui'
import { translateCaseStudy, translatedCaseStudies, translatedCaseStudySeoTitle } from '@/lib/data/case-studies-translated'
import { CASE_STUDY_LOCALES, caseStudyIndexLanguages, caseStudyLanguages, getLocalizedSiteRouteRedirect } from '@/lib/routing-helpers'
import { localizeHref } from '@/lib/i18n/client-paths'

const verticals = [...new Set(caseStudies.map((cs) => cs.vertical))].sort()
const services = [...new Set(caseStudies.flatMap((cs) => cs.services))].sort()

describe('translated case studies', () => {
  it('keeps translations, routes and hreflang in step', () => {
    expect([...CASE_STUDY_LOCALES].sort()).toEqual(Object.keys(translatedCaseStudies).sort())
    expect(existsSync('app/[locale]/case-studies/[slug]/page.tsx')).toBe(true)
    expect(existsSync('app/[locale]/case-studies/page.tsx')).toBe(true)
    expect(Object.keys(caseStudyLanguages('sephora-campaign'))).toEqual(['x-default', 'en', ...CASE_STUDY_LOCALES])
    expect(caseStudyIndexLanguages().de).toBe('https://caagency.com/de/case-studies')
    expect(localizeHref('/case-studies', 'ko')).toBe('/ko/case-studies')
    expect(getLocalizedSiteRouteRedirect('/fr/case-studies/sephora-campaign')).toBeNull()
  })

  it('translates every study, vertical, service and label in every language', () => {
    for (const [locale, translation] of Object.entries(translatedCaseStudies)) {
      expect(Object.keys(translation.studies).sort(), locale).toEqual(caseStudies.map((cs) => cs.slug).sort())
      expect(Object.keys(translation.verticals).sort(), locale).toEqual(verticals)
      expect(Object.keys(translation.services).sort(), locale).toEqual(services)
      expect(Object.keys(translation.ui).sort(), locale).toEqual(Object.keys(englishCaseStudyUi).sort())
      for (const [key, value] of Object.entries(englishCaseStudyUi)) {
        for (const placeholder of value.match(/\{[a-z]+\}/g) ?? []) {
          expect(translation.ui[key as keyof typeof englishCaseStudyUi], `${locale} ${key}`).toContain(placeholder)
        }
      }
      expect(translation.ui.indexDescription.length, locale).toBeLessThanOrEqual(160)
      for (const english of caseStudies) {
        const study = translateCaseStudy(locale, english)!
        const where = `${locale} ${english.slug}`
        // Only the copy changes: media, brand, creator and platforms stay the English study's.
        expect(study.videoSrc, where).toBe(english.videoSrc)
        expect(study.brand, where).toBe(english.brand)
        expect(study.platforms, where).toEqual(english.platforms)
        expect(study.services.length, where).toBe(english.services.length)
        for (const key of ['title', 'summary', 'brief', 'approach', 'outcome'] as const) {
          expect(study[key].length, `${where} ${key}`).toBeGreaterThan(0)
          expect(study[key], `${where} ${key}`).not.toMatch(/[—–]/)
        }
        expect(study.title, where).toContain(english.brand)
        expect(`${translatedCaseStudySeoTitle(locale, study)} | CA Agency`.length, where).toBeLessThanOrEqual(75)
      }
    }
  })
})
