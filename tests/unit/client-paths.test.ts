import { describe, expect, it } from 'vitest'
import { localizeHref, stripLocalePrefix } from '@/lib/i18n/client-paths'

describe('client locale paths', () => {
  it('keeps English unprefixed and prefixes translated routes', () => {
    expect(localizeHref('/', 'en')).toBe('/')
    expect(localizeHref('/about', 'en')).toBe('/about')
    expect(localizeHref('/', 'ar')).toBe('/ar')
    expect(localizeHref('/about', 'ko')).toBe('/ko/about')
  })

  it('leaves English-only routes unprefixed to avoid redirect hops', () => {
    expect(localizeHref('/blog', 'zh')).toBe('/blog')
    expect(localizeHref('/case-studies/sephora', 'de')).toBe('/case-studies/sephora')
    expect(localizeHref('/influencer-marketing-usa', 'es')).toBe('/es/influencer-marketing-usa')
    expect(localizeHref('/influencer-marketing-usa', 'zh')).toBe('/influencer-marketing-usa')
    expect(localizeHref('/influencer-marketing-dubai', 'ar')).toBe('/ar/influencer-marketing-dubai')
    expect(localizeHref('/influencer-marketing-dubai', 'zh')).toBe('/influencer-marketing-dubai')
    expect(localizeHref('/influencer-marketing-usa', 'ar')).toBe('/ar/influencer-marketing-usa')
    expect(localizeHref('/influencer-marketing-germany', 'de')).toBe('/de/influencer-marketing-germany')
    expect(localizeHref('/influencer-marketing-france', 'fr')).toBe('/fr/influencer-marketing-france')
    expect(localizeHref('/influencer-marketing-france', 'de')).toBe('/influencer-marketing-france')
    expect(localizeHref('/talents', 'ar')).toBe('/ar/talents')
    expect(localizeHref('/services', 'ko')).toBe('/ko/services')
    expect(localizeHref('/blog?page=2', 'fr')).toBe('/blog?page=2')
  })

  it('strips only supported locale prefixes', () => {
    expect(stripLocalePrefix('/ar/about')).toBe('/about')
    expect(stripLocalePrefix('/ko')).toBe('/')
    expect(stripLocalePrefix('/about')).toBe('/about')
  })
})
