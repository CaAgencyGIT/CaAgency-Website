import { describe, expect, it } from 'vitest'
import { caseStudies, caseStudiesForCreator, socialHandle } from '@/lib/data/case-studies'

describe('socialHandle', () => {
  it('reads Instagram and TikTok profile URLs and @handles', () => {
    expect(socialHandle('https://www.instagram.com/Albina/')).toBe('albina')
    expect(socialHandle('https://www.tiktok.com/@khutjo.matsoma/')).toBe('khutjo.matsoma')
    expect(socialHandle('https://www.instagram.com/_idareen_?igsh=abc')).toBe('_idareen_')
    expect(socialHandle('@jaysadiq_')).toBe('jaysadiq_')
  })

  it('returns null for empty values and other sites', () => {
    expect(socialHandle(null)).toBeNull()
    expect(socialHandle('')).toBeNull()
    expect(socialHandle('https://www.youtube.com/@Windoh')).toBeNull()
  })
})

describe('caseStudiesForCreator', () => {
  it('matches studies credited by either the Instagram or the TikTok handle', () => {
    const slugs = caseStudiesForCreator([
      'https://www.instagram.com/beatrixramosaj/',
      'https://www.tiktok.com/@therealbeatrixramosaj/',
    ]).map((cs) => cs.slug)
    expect(slugs).toContain('patrick-ta-beatrix')
    expect(slugs).toContain('biodance-campaign')
    for (const slug of slugs) {
      const study = caseStudies.find((cs) => cs.slug === slug)!
      expect(['beatrixramosaj', 'therealbeatrixramosaj']).toContain(socialHandle(study.creator))
    }
  })

  it('returns nothing for a creator without profiles', () => {
    expect(caseStudiesForCreator([null, undefined])).toEqual([])
  })
})
