import type { ServiceDetail } from '@/lib/data/services'
import type { ServiceUi } from '@/lib/data/service-ui'
import * as de from '@/lib/data/services-translated/de'
import * as fr from '@/lib/data/services-translated/fr'
import * as es from '@/lib/data/services-translated/es'
import * as ar from '@/lib/data/services-translated/ar'
import * as ko from '@/lib/data/services-translated/ko'
import * as zh from '@/lib/data/services-translated/zh'

// The five service pages in every translated language, served at
// /<locale>/services/<slug>. Keep LOCALIZED_SERVICE_PATHS in
// lib/routing-helpers.ts in step (tests/unit/services-translated.test.ts checks).

export const translatedServices: Record<string, { ui: ServiceUi; services: ServiceDetail[] }> = { de, fr, es, ar, ko, zh }

export function getTranslatedService(locale: string, slug: string): ServiceDetail | undefined {
  return translatedServices[locale]?.services.find((service) => service.slug === slug)
}
