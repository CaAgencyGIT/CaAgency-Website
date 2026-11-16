import { describe, expect, it } from 'vitest'
import { existsSync } from 'node:fs'
import { locationPages, marketLinks } from '@/lib/data/locations'
import { LOCALIZED_LOCATION_PATHS, locationPageLanguages } from '@/lib/routing-helpers'
import { siteContentDefinitionsByKey } from '@/lib/site-content/definitions'
import { translatedLocationPages } from '@/lib/site-content/location-pages-translated'
import { europeanMarkets } from '@/lib/data/european-markets'
import type { LocationPageContent } from '@/lib/site-content/location-pages'

describe('European market pages', () => {
  it('registers every market with a route, content, a preview image and a link row entry', () => {
    for (const page of Object.values(europeanMarkets)) {
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
    for (const page of Object.values(europeanMarkets)) {
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
    })
    expect(Object.keys(locationPageLanguages('/influencer-marketing-nordics'))).toEqual(['x-default', 'en'])
  })

  it('adds Sydney and Melbourne copy and FAQs to the Australia page', () => {
    const content = siteContentDefinitionsByKey['location-australia'].defaultData as LocationPageContent
    const intro = content.intro?.paragraphs.map((paragraph) => paragraph.text).join(' ') ?? ''
    expect(intro).toContain('Sydney')
    expect(intro).toContain('Melbourne')
    expect(content.faq?.items.length).toBeGreaterThanOrEqual(4)
  })
})
