import { describe, expect, it } from 'vitest'
import { caseStudies } from '@/lib/data/case-studies'
import { countryNames, formatCount, formatMonth, publicResultsJsonLd, publicResultsLine } from '@/lib/data/case-study-results'

const medicube = caseStudies.find((study) => study.slug === 'medicube-campaign')!

describe('public case-study results', () => {
  it('formats counts and dates per locale', () => {
    expect(formatCount(1_700_000, 'en')).toBe('1.7M')
    expect(formatCount(52_800, 'en')).toBe('52.8K')
    expect(formatCount(475, 'en')).toBe('475')
    expect(formatMonth('2026-11-22', 'en')).toBe('November 2026')
    expect(formatMonth('2026-11-22', 'de')).toBe('November 2026')
    expect(countryNames(['US', 'CY'], 'en')).toBe('United States, Cyprus')
    expect(countryNames(['AE'], 'de')).toBe('Vereinigte Arabische Emirate')
  })

  it('cites the source post with its counts in schema.org', () => {
    expect(publicResultsJsonLd(medicube)).toMatchObject({
      '@type': 'VideoObject',
      url: medicube.publicResults!.url,
      uploadDate: '2026-01-10',
      interactionStatistic: [
        { interactionType: { '@type': 'WatchAction' }, userInteractionCount: 1_700_000 },
        { interactionType: { '@type': 'LikeAction' }, userInteractionCount: 52_800 },
        { interactionType: { '@type': 'CommentAction' }, userInteractionCount: 475 },
      ],
    })
    expect(publicResultsJsonLd({ ...medicube, publicResults: undefined })).toBeUndefined()
  })

  it('writes one plain line for llms-full.txt', () => {
    expect(publicResultsLine(medicube.publicResults!)).toBe(
      `1.7M views, 52.8K likes and 475 comments on the TikTok post of 10 January 2026 (public counts as of 22 November 2026): ${medicube.publicResults!.url}`
    )
  })

  it('keeps every entry well formed', () => {
    const withResults = caseStudies.filter((study) => study.publicResults)
    expect(withResults.length).toBeGreaterThanOrEqual(8)
    for (const study of withResults) {
      const r = study.publicResults!
      expect(r.url, study.slug).toMatch(/^https:\/\/www\.(tiktok|instagram)\.com\//)
      expect(r.postedOn <= r.asOf, study.slug).toBe(true)
      expect(Math.min(r.views, r.likes, r.comments), study.slug).toBeGreaterThanOrEqual(0)
      expect(study.showcase, study.slug).toBeFalsy()
    }
    for (const study of caseStudies.filter((s) => s.creatorBase)) {
      for (const code of study.creatorBase!) expect(code, study.slug).toMatch(/^[A-Z]{2}$/)
    }
  })
})
