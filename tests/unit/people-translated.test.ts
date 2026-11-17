import { describe, expect, it } from 'vitest'
import { existsSync } from 'node:fs'
import { englishTalentUi } from '@/lib/data/talent-ui'
import { bioSources } from '@/lib/data/people-translated/sources'
import { translatedBio, translatedBusinessLicense, translatedLegalPage, translatedPeople } from '@/lib/data/people-translated'
import { siteContentDefinitionsByKey } from '@/lib/site-content/definitions'
import type { BusinessLicenseContent, LegalPageContent } from '@/lib/site-content/site-types'
import { CASE_STUDY_LOCALES, translatedPageLanguages } from '@/lib/routing-helpers'

const count = (html: string, tag: string) => html.split(tag).length - 1
const privacy = siteContentDefinitionsByKey['privacy-policy'].defaultData as LegalPageContent
const terms = siteContentDefinitionsByKey['terms-of-service'].defaultData as LegalPageContent
const license = siteContentDefinitionsByKey['business-license'].defaultData as BusinessLicenseContent

describe('translated talent profiles and legal pages', () => {
  it('has routes and hreflang for every translated language', () => {
    expect(Object.keys(translatedPeople).sort()).toEqual([...CASE_STUDY_LOCALES].sort())
    for (const route of ['talents/[slug]', 'privacy-policy', 'terms-of-service', 'business-license']) {
      expect(existsSync(`app/[locale]/${route}/page.tsx`), route).toBe(true)
    }
    expect(Object.keys(translatedPageLanguages('/privacy-policy'))).toEqual(['x-default', 'en', ...CASE_STUDY_LOCALES])
  })

  it('shows a translated bio only while the English bio is unchanged', () => {
    const [slug, english] = Object.entries(bioSources)[0]
    for (const [locale, { bios, talentUi }] of Object.entries(translatedPeople)) {
      expect(Object.keys(bios).sort(), locale).toEqual(Object.keys(bioSources).sort())
      expect(Object.keys(talentUi).sort(), locale).toEqual(Object.keys(englishTalentUi).sort())
      for (const [key, value] of Object.entries(englishTalentUi)) {
        if (value.includes('{name}')) expect(talentUi[key as keyof typeof englishTalentUi], `${locale} ${key}`).toContain('{name}')
      }
      for (const bio of Object.values(bios)) expect(bio, locale).not.toMatch(/[—–]/)
      expect(translatedBio(locale, slug, english)).toBe(bios[slug])
      expect(translatedBio(locale, slug, `${english} Edited.`)).toBeNull()
      expect(translatedBio(locale, slug, null)).toBeNull()
      expect(translatedBio(locale, 'someone-new', 'A new bio.')).toBeNull()
    }
  })

  it('keeps the legal translations complete and falls back to English after an edit', () => {
    for (const [locale, { legal }] of Object.entries(translatedPeople)) {
      expect(legal.lastUpdated, locale).toContain('{date}')
      expect(legal.notice.length, locale).toBeGreaterThan(20)
      for (const [copy, source, key] of [[legal.privacy, privacy, 'privacy'], [legal.terms, terms, 'terms']] as const) {
        for (const tag of ['<h2>', '<p>', '<li>', '<a ']) {
          expect(count(copy.html, tag), `${locale} ${key} ${tag}`).toBe(count(source.html, tag))
        }
        expect(copy.metaDescription.length, `${locale} ${key}`).toBeLessThanOrEqual(160)
        expect(translatedLegalPage(locale, key, source)).toBe(copy)
        expect(translatedLegalPage(locale, key, { ...source, html: `${source.html}<p>New clause.</p>` })).toBeNull()
      }
      const copy = legal.businessLicense
      expect(copy.imageUrl, locale).toBe(license.imageUrl)
      expect(copy.documents.map((document) => document.href), locale).toEqual(license.documents.map((document) => document.href))
      // Company name, licence number, manager and email are never translated.
      for (const index of [0, 1, 4, 5]) expect(copy.companyInfo[index].value, locale).toBe(license.companyInfo[index].value)
      expect(translatedBusinessLicense(locale, license)).toBe(copy)
      expect(translatedBusinessLicense(locale, { ...license, title: 'Changed' })).toBeNull()
    }
  })
})
