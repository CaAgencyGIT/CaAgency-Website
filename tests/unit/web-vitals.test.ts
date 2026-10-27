import { describe, expect, it } from 'vitest'
import { isAutomatedUserAgent, normalizeVitalsPath, parseVitalsBeacon } from '@/lib/performance/vitals'

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

  it('treats headless browsers, crawlers and speed tests as automated', () => {
    for (const ua of [
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/148.0.0.0 Safari/537.36',
      'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
      'Mozilla/5.0 (Linux; Android 11; moto g power (2022)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0 Mobile Safari/537.36 Chrome-Lighthouse',
      'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)',
      'curl/8.7.1',
      '',
      null,
    ]) expect(isAutomatedUserAgent(ua)).toBe(true)
  })

  it('keeps real browsers, including names that merely contain "bot"', () => {
    for (const ua of [
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/156.0.0.0 Safari/537.36',
      'Mozilla/5.0 (iPhone; CPU iPhone OS 19_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/19.0 Mobile/15E148 Safari/604.1',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/19.0 Safari/605.1.15 Abbott',
    ]) expect(isAutomatedUserAgent(ua)).toBe(false)
  })

  it('groups slugs and locales and drops query strings', () => {
    expect(normalizeVitalsPath('/blog/some-post?utm=x')).toBe('/blog/[slug]')
    expect(normalizeVitalsPath('/ar/about')).toBe('/[locale]/about')
    expect(normalizeVitalsPath('/work')).toBe('/work')
  })
})
