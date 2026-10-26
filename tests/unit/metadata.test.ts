import { describe, expect, it } from 'vitest'
import { buildPageMetadata, clampDescription, normalizeBrandedTitle } from '@/lib/seo/metadata'

describe('normalizeBrandedTitle', () => {
  it('adds the brand exactly once', () => {
    expect(normalizeBrandedTitle('Influencer Marketing USA')).toBe(
      'Influencer Marketing USA | CA Agency'
    )
    expect(normalizeBrandedTitle('Influencer Marketing USA | CA Agency')).toBe(
      'Influencer Marketing USA | CA Agency'
    )
    expect(normalizeBrandedTitle('Influencer Marketing USA | CA Agency | CA Agency')).toBe(
      'Influencer Marketing USA | CA Agency'
    )
    expect(normalizeBrandedTitle('Welcome to CA Agency Blog')).toBe('Welcome to CA Agency Blog')
  })

  it('drops the brand when it would push the title past 60 characters', () => {
    const longTitle = 'How Much Does Influencer Marketing Cost in Dubai and the UAE?'
    expect(normalizeBrandedTitle(longTitle)).toBe(longTitle)
    expect(normalizeBrandedTitle(`${longTitle} | CA Agency`)).toBe(longTitle)
  })
})

describe('clampDescription', () => {
  it('keeps descriptions that already fit', () => {
    expect(clampDescription('  Short   description. ')).toBe('Short description.')
  })

  it('ends on a whole sentence when one fits', () => {
    const first = 'Albina Mavriqi is a beauty and skincare creator based in Kosovo with a loyal audience across Europe and the Gulf region.'
    const result = clampDescription(`${first} She has partnered with Sephora, Medicube and Torriden on campaigns that drove sales.`)
    expect(result).toBe(first)
  })

  it('falls back to a word boundary with an ellipsis', () => {
    const result = clampDescription('word '.repeat(60))
    expect(result.length).toBeLessThanOrEqual(160)
    expect(result.endsWith('word…')).toBe(true)
  })

  it('applies to page metadata, Open Graph and Twitter', () => {
    const metadata = buildPageMetadata({ title: 'Talent', description: 'word '.repeat(60) })
    expect((metadata.description ?? '').length).toBeLessThanOrEqual(160)
    expect(metadata.openGraph?.description).toBe(metadata.description)
    expect(metadata.twitter?.description).toBe(metadata.description)
  })
})

describe('buildPageMetadata', () => {
  it('builds reciprocal localized metadata', () => {
    const metadata = buildPageMetadata({
      title: 'About',
      description: 'About CA Agency.',
      locale: 'ar',
      path: '/about',
    })

    expect(metadata.title).toEqual({ absolute: 'About | CA Agency' })
    expect(metadata.alternates?.canonical).toBe('https://caagency.com/ar/about')
    expect(metadata.openGraph?.url).toBe('https://caagency.com/ar/about')
    expect(metadata.openGraph?.locale).toBe('ar_AE')
    expect(metadata.alternates?.languages).toEqual({
      'x-default': 'https://caagency.com/about',
      en: 'https://caagency.com/about',
      ar: 'https://caagency.com/ar/about',
      ko: 'https://caagency.com/ko/about',
      zh: 'https://caagency.com/zh/about',
      fr: 'https://caagency.com/fr/about',
      es: 'https://caagency.com/es/about',
      de: 'https://caagency.com/de/about',
    })
  })

  it('does not claim translations for English-only routes', () => {
    const metadata = buildPageMetadata({
      title: 'Privacy Policy | CA Agency',
      description: 'Privacy policy.',
      path: '/privacy-policy',
      localized: false,
    })

    expect(metadata.alternates?.languages).toBeUndefined()
    expect(metadata.alternates?.canonical).toBe('https://caagency.com/privacy-policy')
  })
})
