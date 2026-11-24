import { describe, expect, it } from 'vitest'
import { creatorBenchmarks2026 as data } from '@/lib/data/creator-benchmarks-2026'

describe('creator benchmarks 2026 data', () => {
  it('has video-length shares that add up to about 100%', () => {
    const total = data.tiktok.lengths.reduce((sum, l) => sum + l.shareOfVideos, 0)
    expect(total).toBeGreaterThanOrEqual(98)
    expect(total).toBeLessThanOrEqual(102)
  })

  it('has follower bands that cover every creator', () => {
    expect(data.tiktok.tiers.reduce((sum, t) => sum + t.creators, 0)).toBe(data.tiktok.creators)
    expect(data.instagram.tiers.reduce((sum, t) => sum + t.creators, 0)).toBe(data.instagram.creators)
  })

  it('keeps percentages in range', () => {
    for (const t of [...data.tiktok.tiers, ...data.instagram.tiers]) {
      expect(t.viewsPerFollower).toBeGreaterThan(0)
      expect(t.viewsPerFollower).toBeLessThan(500)
    }
    expect(data.tiktok.shareOver1M).toBeLessThan(data.tiktok.shareOver100K)
  })
})

import { englishBenchmarkCopy } from '@/lib/data/benchmark-page-copy'
import { translatedBenchmarkCopy } from '@/lib/data/benchmark-page-copy/index'
import { benchmarkFormat, benchmarkStats } from '@/components/site/CreatorBenchmarksBody'
import { BENCHMARK_LOCALES, benchmarkPageLanguages, hasTranslatedPage } from '@/lib/routing-helpers'
import { EUROPEAN_CASE_SLUGS, europeanBrandCases } from '@/lib/site-content/european-brand-cases'
import { translatedLocationPages } from '@/lib/site-content/location-pages-translated'
import { europePageDefaults, francePageDefaults, germanyPageDefaults } from '@/lib/site-content/europe-pages'

const period = { from: '2025-11-22', to: '2026-11-15', readOn: '2026-11-22' }

describe('benchmark page translations', () => {
  const all = { en: englishBenchmarkCopy, ...translatedBenchmarkCopy }

  it('registers the same locales in routing and copy', () => {
    expect([...BENCHMARK_LOCALES].sort()).toEqual(Object.keys(translatedBenchmarkCopy).sort())
    for (const locale of BENCHMARK_LOCALES) expect(hasTranslatedPage('/influencer-benchmarks-2026', locale)).toBe(true)
    expect(Object.keys(benchmarkPageLanguages())).toEqual(expect.arrayContaining(['x-default', 'en', ...BENCHMARK_LOCALES]))
  })

  it.each(Object.entries(all))('%s renders every text with the real figures', (locale, copy) => {
    const f = benchmarkFormat(locale)
    const label = { tier: (t: keyof typeof copy.tier) => copy!.tier[t], length: (l: keyof typeof copy.length) => copy!.length[l] }
    const texts = [
      copy!.metaDescription(data, f),
      copy!.intro(data, f),
      ...copy!.findings(data, f, label).flatMap((x) => [x.title, x.body]),
      ...copy!.method(data, f, period),
      ...copy!.caveats(data, f, { min: 4, max: 11 }),
      ...copy!.faq(data, f, label).flatMap((x) => [x.question, x.answer]),
    ]
    for (const text of texts) {
      expect(text).not.toMatch(/undefined|NaN|\[object/)
      expect(text).not.toContain('—')
    }
    expect(copy!.findings(data, f, label)).toHaveLength(5)
    expect(copy!.faq(data, f, label)).toHaveLength(5)
    // The headline figures appear in the finding texts exactly as formatted.
    const body = copy!.findings(data, f, label).map((x) => x.body).join(' ')
    expect(body).toContain(f.pct(data.tiktok.viewsPerFollower))
    expect(body).toContain(f.pct(data.instagram.viewsPerFollower))
    expect(benchmarkStats(f)).toHaveLength(5)
  })
})

describe('European brand case studies on market pages', () => {
  it('builds every listed study with a link and media', () => {
    const block = europeanBrandCases('de')
    expect(block.items).toHaveLength(EUROPEAN_CASE_SLUGS.length)
    for (const item of block.items) {
      expect(item.href).toMatch(/^\/case-studies\//)
      expect(item.src ?? item.image).toBeTruthy()
    }
  })

  it('shows on the English Europe, Germany and France pages', () => {
    for (const page of [europePageDefaults, germanyPageDefaults, francePageDefaults]) {
      expect(page.brandCaseStudies?.items).toHaveLength(EUROPEAN_CASE_SLUGS.length)
    }
  })

  it('shows on every translated Europe, Germany and France page in that language', () => {
    for (const [locale, entry] of Object.entries(translatedLocationPages)) {
      const pages = Object.values(entry.pages).filter((p) => ['/influencer-marketing-europe', '/influencer-marketing-germany', '/influencer-marketing-france'].includes(p.path))
      expect(pages.length, locale).toBe(3)
      for (const page of pages) expect(page.content.brandCaseStudies?.title, `${locale} ${page.path}`).toBe(europeanBrandCases(locale).title)
    }
  })
})

import { siteContentDefinitions } from '@/lib/site-content/definitions'
import { UK_PATH, ukFaq } from '@/lib/site-content/uk-faq'

describe('UK market page proof and FAQ', () => {
  it('quotes the benchmark figures in the platform answer', () => {
    const answer = ukFaq('en').items.find((i) => i.question.includes('platforms'))!.answer
    expect(answer).toContain(`${data.instagram.viewsPerFollower}%`)
    expect(answer).toContain(`${data.tiktok.viewsPerFollower}%`)
  })

  it('has the same six questions in every language, with no prices', () => {
    for (const locale of ['en', 'ar', 'de', 'es', 'fr', 'ko', 'zh']) {
      const faq = ukFaq(locale)
      expect(faq.items, locale).toHaveLength(6)
      for (const item of faq.items) expect(item.answer, locale).not.toMatch(/£|\$|€|GBP \d/)
    }
  })

  it('shows the European brands and the FAQ on the English UK page', () => {
    const uk = siteContentDefinitions.find((d) => d.key === 'location-uk')!.defaultData as { brandCaseStudies?: { items: unknown[] }; faq?: { items: unknown[] } }
    expect(uk.brandCaseStudies?.items).toHaveLength(EUROPEAN_CASE_SLUGS.length)
    expect(uk.faq?.items).toHaveLength(6)
  })

  it('shows both on every translated UK page in that language', () => {
    for (const [locale, entry] of Object.entries(translatedLocationPages)) {
      const page = Object.values(entry.pages).find((p) => p.path === UK_PATH)
      expect(page, locale).toBeTruthy()
      expect(page!.content.brandCaseStudies?.title, locale).toBe(europeanBrandCases(locale).title)
      expect(page!.content.faq?.title, locale).toBe(ukFaq(locale).title)
    }
  })
})
