import { describe, expect, it } from 'vitest'
import { talentMetaDescription } from '@/lib/seo/talents'

describe('talentMetaDescription', () => {
  it('keeps a short bio as is', () => {
    expect(talentMetaDescription('Short bio.')).toBe('Short bio.')
  })

  it('keeps whole opening sentences within 160 characters', () => {
    const bio =
      'Baka (@bakaprase) is one of the best-known Serbian-language entertainment creators. His comedy is built for the Balkan audience. CA Agency represents Baka for brand partnerships, from product launches and app campaigns to always-on collaborations.'
    const d = talentMetaDescription(bio)
    expect(d.length).toBeLessThanOrEqual(160)
    expect(d).toBe('Baka (@bakaprase) is one of the best-known Serbian-language entertainment creators. His comedy is built for the Balkan audience.')
  })

  it('cuts a single long sentence at a word boundary', () => {
    const d = talentMetaDescription('word '.repeat(60))
    expect(d.length).toBeLessThanOrEqual(160)
    expect(d.endsWith('…')).toBe(true)
  })
})
