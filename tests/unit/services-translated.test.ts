import { describe, expect, it } from 'vitest'
import { existsSync } from 'node:fs'
import { services } from '@/lib/data/services'
import { englishServiceUi } from '@/lib/data/service-ui'
import { getTranslatedService, translatedServices } from '@/lib/data/services-translated'
import { LOCALIZED_SERVICE_PATHS, getLocalizedSiteRouteRedirect, servicePageLanguages } from '@/lib/routing-helpers'
import { localizeHref } from '@/lib/i18n/client-paths'

describe('translated service pages', () => {
  it('keeps translations, routes and hreflang in step', () => {
    expect(Object.keys(LOCALIZED_SERVICE_PATHS).sort()).toEqual(Object.keys(translatedServices).sort())
    expect(existsSync('app/[locale]/services/[slug]/page.tsx')).toBe(true)
    for (const [locale, { ui, services: translated }] of Object.entries(translatedServices)) {
      expect(translated.map((service) => service.slug), locale).toEqual(services.map((service) => service.slug))
      expect([...(LOCALIZED_SERVICE_PATHS[locale] ?? [])]).toEqual(services.map((service) => `/services/${service.slug}`))
      expect(Object.keys(ui).sort(), locale).toEqual(Object.keys(englishServiceUi).sort())
      expect(ui.faqTitle, locale).toContain('{service}')
      for (const [index, service] of translated.entries()) {
        const english = services[index]
        expect(getTranslatedService(locale, service.slug)).toBe(service)
        expect(service.image).toBe(english.image)
        expect(service.icon).toBe(english.icon)
        // Same amount of content as the English page, and search-ready metadata.
        for (const key of ['breakdown', 'deliverables', 'idealFor', 'process', 'faqs'] as const) {
          expect(service[key].length, `${locale} ${service.slug} ${key}`).toBe(english[key].length)
        }
        expect(`${service.seoTitle} | CA Agency`.length, service.seoTitle).toBeLessThanOrEqual(60)
        expect(service.seoDescription.length, service.seoDescription).toBeLessThanOrEqual(160)
        expect(JSON.stringify(service), `${locale} ${service.slug}`).not.toMatch(/[—–]/)
        expect(servicePageLanguages(service.slug)[locale]).toBe(`https://caagency.com/${locale}/services/${service.slug}`)
        expect(localizeHref(`/services/${service.slug}`, locale)).toBe(`/${locale}/services/${service.slug}`)
        expect(getLocalizedSiteRouteRedirect(`/${locale}/services/${service.slug}`)).toBeNull()
      }
    }
    expect(Object.keys(servicePageLanguages('influencer-campaigns'))).toEqual(['x-default', 'en', 'ar', 'de', 'fr', 'es', 'ko', 'zh'])
    expect(localizeHref('/services/influencer-campaigns', 'en')).toBe('/services/influencer-campaigns')
  })
})
