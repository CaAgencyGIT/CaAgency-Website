import { test, expect } from '@playwright/test'

// These exercise the proxy/middleware: the (site) vs [locale] split, the
// locale-strip redirects, scanner-probe blocking, and the enforced CSP.

test.describe('routing & middleware', () => {
  const ok = [
    '/',
    '/about',
    '/work',
    '/services',
    '/contact',
    '/talents',
    '/blog',
    '/edba0a2c3d98ad29bbfca51f0f73c0a4.txt',
    '/case-studies',
    '/case-studies/mixsoon-skincare',
    '/influencer-marketing-dubai',
    // Arabic location pages are real translated pages (Oct 2026).
    '/ar/influencer-marketing-dubai',
    '/korean-skincare-influencer-marketing',
    '/beauty-influencer-marketing-agency',
    '/skincare-influencer-marketing-agency',
    '/ar',
    '/ko',
    '/ar/about',
    '/ar/talents',
  ]
  for (const path of ok) {
    test(`200 OK: ${path}`, async ({ request }) => {
      const res = await request.get(path, { maxRedirects: 0 })
      expect(res.status()).toBe(200)
    })
  }

  const redirects: Array<[string, string]> = [
    ['/ar/blog', '/blog'],
    ['/ko/blog', '/blog'],
    ['/ar/case-studies', '/case-studies'],
    ['/ko/case-studies/mixsoon-skincare', '/case-studies/mixsoon-skincare'],
    ['/ar/privacy-policy', '/privacy-policy'],
    ['/ar/korean-skincare-influencer-marketing', '/korean-skincare-influencer-marketing'],
    ['/ar/beauty-influencer-marketing-agency', '/beauty-influencer-marketing-agency'],
  ]
  for (const [from, to] of redirects) {
    test(`308 strips locale: ${from} -> ${to}`, async ({ request }) => {
      const res = await request.get(from, { maxRedirects: 0 })
      expect(res.status()).toBe(308)
      expect(res.headers()['location']).toContain(to)
    })
  }

  for (const probe of ['/.env', '/.git/config', '/backup.sql']) {
    test(`404 blocks scanner probe: ${probe}`, async ({ request }) => {
      const res = await request.get(probe, { maxRedirects: 0 })
      expect(res.status()).toBe(404)
    })
  }

  test('enforces security headers (CSP is enforcing, not report-only)', async ({ request }) => {
    const res = await request.get('/')
    const headers = res.headers()
    expect(headers['content-security-policy']).toBeTruthy()
    expect(headers['content-security-policy-report-only']).toBeFalsy()
    expect(headers['strict-transport-security']).toBeTruthy()
    expect(headers['x-content-type-options']).toBe('nosniff')
  })
})
