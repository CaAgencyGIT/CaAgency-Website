import { describe, expect, it } from 'vitest'
import { authorized, parsePublication, versionOf } from '@/lib/publications/core'

const base = { id: 'a'.repeat(64), kind: 'blog', target: 'verified-company-news', expectedVersion: versionOf(null), sourceIds: ['approved-campaign'], sourceHash: 'b'.repeat(64), payload: { title: 'Company news', content: '<p>Verified news</p>' } }
describe('machine publication boundaries', () => {
  it('requires a dedicated long credential and never accepts a browser session as publisher authority', () => {
    expect(authorized(new Request('https://caagency.com/api/automation/publications'), 's'.repeat(32))).toBe(false)
    expect(authorized(new Request('https://caagency.com', { headers: { authorization: `Bearer ${'s'.repeat(32)}` } }), 's'.repeat(32))).toBe(true)
    expect(authorized(new Request('https://caagency.com', { headers: { authorization: 'Bearer short' } }), 'short')).toBe(false)
  })
  it('requires authoritative source references and removes active HTML before it is staged', () => {
    const p = parsePublication({ ...base, payload: { ...base.payload, content: '<h1>News</h1><script>alert(1)</script><img src="/media/approved.webp" onerror="alert(2)">' } })
    expect(p.payload.content).toContain('<h2>News</h2>')
    expect(p.payload.content).not.toMatch(/script|onerror/)
    expect(() => parsePublication({ ...base, sourceIds: [] })).toThrow(/Source/)
    expect(() => parsePublication({ ...base, expectedVersion: null })).toThrow()
  })
  it.each(['privacy-policy', 'terms-of-service', 'business-license', 'footer'])('keeps %s outside marketing authority', target => {
    expect(() => parsePublication({ ...base, kind: 'site-content', target, payload: { html: 'changed' } })).toThrow(/outside marketing/)
  })
  it('accepts only registered marketing fields and safe URLs', () => {
    expect(parsePublication({ ...base, kind: 'site-content', target: 'home', payload: { hero: { title: 'Updated approved headline' } } }).payload).toEqual({ hero: { title: 'Updated approved headline' } })
    expect(() => parsePublication({ ...base, kind: 'site-content', target: 'home', payload: { execute: 'anything' } })).toThrow(/protected/)
    expect(() => parsePublication({ ...base, payload: { ...base.payload, featuredImage: 'javascript:alert(1)' } })).toThrow(/HTTPS/)
  })
  it('preserves stable revisions across JSON key ordering', () => {
    expect(versionOf({ title: 'a', count: 1 })).toBe(versionOf({ count: 1, title: 'a' }))
    expect(versionOf({ count: 2 })).not.toBe(versionOf({ count: 1 }))
  })
})
