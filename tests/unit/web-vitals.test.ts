import { describe, expect, it } from 'vitest'
import { normalizeVitalsPath, parseVitalsBeacon } from '@/lib/performance/vitals'

const beacon = (overrides: Record<string, unknown> = {}) => ({
  path: '/talents/albina',
  device: 'mobile',
  connection: '4g',
  metrics: [{ name: 'LCP', value: 2310.4, rating: 'good' }, { name: 'CLS', value: 0.01234, rating: 'good' }],
  ...overrides,
})

describe('web vitals beacon', () => {
  it('turns a valid beacon into one log line per metric', () => {
    expect(parseVitalsBeacon(beacon())).toEqual([
      { m: 'LCP', v: 2310, r: 'good', p: '/talents/[slug]', d: 'mobile', c: '4g' },
      { m: 'CLS', v: 0.012, r: 'good', p: '/talents/[slug]', d: 'mobile', c: '4g' },
    ])
  })

  it('rejects unknown metrics, bad values and foreign paths', () => {
    expect(parseVitalsBeacon(beacon({ metrics: [{ name: 'FID', value: 10, rating: 'good' }] }))).toBeNull()
    expect(parseVitalsBeacon(beacon({ metrics: [{ name: 'LCP', value: -1, rating: 'good' }] }))).toBeNull()
    expect(parseVitalsBeacon(beacon({ metrics: [{ name: 'LCP', value: Number.NaN, rating: 'good' }] }))).toBeNull()
    expect(parseVitalsBeacon(beacon({ path: 'https://evil.example/' }))).toBeNull()
    expect(parseVitalsBeacon(beacon({ device: 'fridge' }))).toBeNull()
    expect(parseVitalsBeacon(beacon({ metrics: [] }))).toBeNull()
    expect(parseVitalsBeacon(null)).toBeNull()
  })

  it('falls back to an unknown connection instead of storing free text', () => {
    expect(parseVitalsBeacon(beacon({ connection: '<script>' }))?.[0].c).toBe('unknown')
  })

  it('groups slugs and locales and drops query strings', () => {
    expect(normalizeVitalsPath('/blog/some-post?utm=x')).toBe('/blog/[slug]')
    expect(normalizeVitalsPath('/ar/about')).toBe('/[locale]/about')
    expect(normalizeVitalsPath('/work')).toBe('/work')
  })
})
