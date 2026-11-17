import { describe, expect, it } from 'vitest'
import { existsSync, readFileSync } from 'node:fs'
import { locationPages, marketLinks, marketPages } from '@/lib/data/locations'
import { LOCALIZED_LOCATION_PATHS, locationPageLanguages } from '@/lib/routing-helpers'
import { siteContentDefinitionsByKey } from '@/lib/site-content/definitions'
import { translatedLocationPages } from '@/lib/site-content/location-pages-translated'
import { marketRoutes } from '@/lib/data/market-routes'
import type { LocationPageContent } from '@/lib/site-content/location-pages'

describe('market pages', () => {
  it('registers every market with a route, content, a preview image and a link row entry', () => {
    for (const page of Object.values(marketRoutes)) {
      expect(existsSync(`app/(site)${page.path}/page.tsx`), page.path).toBe(true)
      expect(siteContentDefinitionsByKey[page.contentKey], page.contentKey).toBeDefined()
      expect(existsSync(`public${page.ogImage}`), page.ogImage).toBe(true)
      expect(locationPages.some((entry) => entry.path === page.path), page.path).toBe(true)
      expect(marketLinks.some((link) => link.href === page.path), page.path).toBe(true)
      expect(page.title.length, page.title).toBeLessThanOrEqual(60)
      expect(page.description.length, page.description).toBeLessThanOrEqual(160)
    }
  })

  it('gives each market page an intro, FAQs and one H1-sized hero title', () => {
    for (const page of Object.values(marketRoutes)) {
      const content = siteContentDefinitionsByKey[page.contentKey].defaultData as LocationPageContent
      expect(content.intro?.paragraphs.length, page.path).toBeGreaterThanOrEqual(3)
      expect(content.faq?.items.length, page.path).toBeGreaterThanOrEqual(4)
      expect(content.hero.title).toContain('Influencer Marketing')
    }
  })

  it('keeps translated pages, routes and hreflang in step', () => {
    for (const [locale, { pages }] of Object.entries(translatedLocationPages)) {
      const paths = Object.values(pages).map((page) => page.path).sort()
      expect([...(LOCALIZED_LOCATION_PATHS[locale] ?? [])].sort()).toEqual(paths)
      for (const page of Object.values(pages)) {
        expect(existsSync(`app/[locale]${page.path}/page.tsx`), page.path).toBe(true)
        expect(existsSync(`public${page.ogImage}`), page.ogImage).toBe(true)
        expect(page.description.length, page.description).toBeLessThanOrEqual(160)
        expect(locationPageLanguages(page.path)[locale]).toBe(`https://caagency.com/${locale}${page.path}`)
      }
    }
    expect(locationPageLanguages('/influencer-marketing-switzerland')).toEqual({
      'x-default': 'https://caagency.com/influencer-marketing-switzerland',
      en: 'https://caagency.com/influencer-marketing-switzerland',
      de: 'https://caagency.com/de/influencer-marketing-switzerland',
      es: 'https://caagency.com/es/influencer-marketing-switzerland',
    })
    expect(Object.keys(locationPageLanguages('/influencer-marketing-nordics'))).toEqual(['x-default', 'en', 'es'])
    // Spanish has every market page; the Gulf pages keep their Arabic version too.
    expect(Object.keys(translatedLocationPages.es.pages).sort()).toEqual(marketPages.map((page) => page.key).sort())
    expect(Object.keys(locationPageLanguages('/influencer-marketing-dubai'))).toEqual(['x-default', 'en', 'ar', 'es'])
    for (const [key, city] of [['sydney', 'Sídney'], ['melbourne', 'Melbourne']] as const) {
      // The Spanish city pages keep the statement that the agency is not based there.
      expect(JSON.stringify(translatedLocationPages.es.pages[key].content), key).toContain(`no somos una agencia con sede en ${city}`)
    }
  })

  it('links the Australia, Sydney and Melbourne pages to each other and never claims a local office', () => {
    const hrefs = (key: 'sydney' | 'melbourne') => (marketRoutes[key].related?.items ?? []).map((item) => item.href)
    expect(hrefs('sydney')).toEqual(['/influencer-marketing-melbourne', '/influencer-marketing-australia'])
    expect(hrefs('melbourne')).toEqual(['/influencer-marketing-sydney', '/influencer-marketing-australia'])
    const australiaPage = readFileSync('app/(site)/influencer-marketing-australia/page.tsx', 'utf8')
    expect(australiaPage).toContain('sydneyPage')
    expect(australiaPage).toContain('melbournePage')
    for (const [key, city] of [['sydney', 'Sydney'], ['melbourne', 'Melbourne']] as const) {
      const content = siteContentDefinitionsByKey[marketRoutes[key].contentKey].defaultData as LocationPageContent
      const text = JSON.stringify(content)
      expect(text, key).toContain(`not a ${city}-based agency`)
      expect(text, key).toContain('not based there')
      expect(content.process?.steps.length, key).toBe(5)
      expect(content.faq?.items[0].question, key).toContain(city)
    }
    const australia = siteContentDefinitionsByKey['location-australia'].defaultData as LocationPageContent
    expect(australia.process?.steps.length).toBe(5)
  })

  it('adds Sydney and Melbourne copy and FAQs to the Australia page', () => {
    const content = siteContentDefinitionsByKey['location-australia'].defaultData as LocationPageContent
    const intro = content.intro?.paragraphs.map((paragraph) => paragraph.text).join(' ') ?? ''
    expect(intro).toContain('Sydney')
    expect(intro).toContain('Melbourne')
    expect(content.faq?.items.length).toBeGreaterThanOrEqual(4)
  })
})
