import type { TalentUi } from '@/lib/data/talent-ui'
import type { BusinessLicenseContent, LegalPageContent } from '@/lib/site-content/site-types'
import { siteContentDefinitionsByKey } from '@/lib/site-content/definitions'
import { bioSources } from '@/lib/data/people-translated/sources'
import * as de from '@/lib/data/people-translated/de'
import * as fr from '@/lib/data/people-translated/fr'
import * as es from '@/lib/data/people-translated/es'
import * as ar from '@/lib/data/people-translated/ar'
import * as ko from '@/lib/data/people-translated/ko'
import * as zh from '@/lib/data/people-translated/zh'

// Talent bios and the legal pages in each translated language. Both are
// editable in the admin (roster bios, legal content), so every translation is
// tied to the English text it was made from: when the English text has changed
// since, the page shows the current English text instead of a stale
// translation. Re-translate and update sources.ts to bring it back.

export interface LegalPageCopy extends LegalPageContent {
  metaTitle: string
  metaDescription: string
}

export interface BusinessLicenseCopy extends BusinessLicenseContent {
  metaTitle: string
  metaDescription: string
  imageAlt: string
  companyInformation: string
  legalDocuments: string
}

export interface LegalCopy {
  /** Shown above a translated legal text: the English version is the authoritative one. */
  notice: string
  readEnglish: string
  /** "Last updated: {date}" */
  lastUpdated: string
  privacy: LegalPageCopy
  terms: LegalPageCopy
  businessLicense: BusinessLicenseCopy
}

export interface PeopleTranslation {
  talentUi: TalentUi
  /** Translated bio by talent slug */
  bios: Record<string, string>
  legal: LegalCopy
}

export const translatedPeople: Record<string, PeopleTranslation> = { de, fr, es, ar, ko, zh }

/** The translated bio, or null when there is none or the English bio changed since it was translated. */
export function translatedBio(locale: string, slug: string, currentBio: string | null | undefined): string | null {
  const translation = translatedPeople[locale]?.bios[slug]
  return translation && currentBio && currentBio === bioSources[slug] ? translation : null
}

const LEGAL_KEYS = { privacy: 'privacy-policy', terms: 'terms-of-service' } as const

/** The translated legal page, or null when the English content no longer matches the translated source. */
export function translatedLegalPage(locale: string, page: keyof typeof LEGAL_KEYS, current: LegalPageContent): LegalPageCopy | null {
  const copy = translatedPeople[locale]?.legal[page]
  const source = siteContentDefinitionsByKey[LEGAL_KEYS[page]].defaultData as LegalPageContent
  return copy && current.html === source.html && current.title === source.title ? copy : null
}

/** The translated business-license page, or null when the English content changed. */
export function translatedBusinessLicense(locale: string, current: BusinessLicenseContent): BusinessLicenseCopy | null {
  const copy = translatedPeople[locale]?.legal.businessLicense
  const source = siteContentDefinitionsByKey['business-license'].defaultData
  return copy && JSON.stringify(current) === JSON.stringify(source) ? copy : null
}
