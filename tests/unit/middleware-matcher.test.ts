import { readFileSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

// The matcher in middleware.ts decides which URLs go through the i18n middleware. Names that are excluded
// (served only by app/(site)/) must be excluded as whole path segments: "/blog2" is NOT "/blog" and has to
// reach the middleware, otherwise [locale] receives "blog2" as a locale and the request ends in a 500.
const source = readFileSync(path.join(process.cwd(), 'middleware.ts'), 'utf8')
const matcher = /matcher:\s*\[\s*'([^']+)'/.exec(source)?.[1]
const compiled = new RegExp(`^${matcher}$`)
const runsMiddleware = (pathname: string) => compiled.test(pathname)

describe('middleware matcher', () => {
  it('was found in middleware.ts', () => {
    expect(matcher).toBeTruthy()
  })

  it.each([
    '/api', '/api/contact', '/_next/static/x.js', '/admin', '/admin/login', '/blog', '/blog/', '/blog/instagram-reels-beauty-brands',
    '/blog/feed.xml', '/case-studies', '/case-studies/some-case', '/privacy-policy', '/terms-of-service', '/business-license',
    '/korean-skincare-influencer-marketing', '/beauty-influencer-marketing-agency', '/skincare-influencer-marketing-agency',
    '/influencer-marketing-dubai', '/influencer-marketing-usa', '/talents/jane-doe', '/services/instagram',
  ])('keeps the English-only route %s out of the i18n middleware', (pathname) => {
    expect(runsMiddleware(pathname)).toBe(false)
  })

  it.each([
    '/images/site/logo.svg', '/videos/redesign/a.mp4', '/media/talents/x.webp', '/fonts/Anegra.woff2', '/assets/x.css',
    '/favicon.ico', '/favicon-32-v2.png', '/apple-touch-icon-v2.png', '/icon-512-v2.png',
  ])('lets the static file %s skip the middleware', (pathname) => {
    expect(runsMiddleware(pathname)).toBe(false)
  })

  it.each([
    '/imagesx', '/images', '/videos', '/iconography', '/media-kit',
  ])('still routes the page-like path %s through the middleware', (pathname) => {
    expect(runsMiddleware(pathname)).toBe(true)
  })

  it.each([
    '/blog2', '/blogger', '/en/blog2', '/admin2', '/apix', '/case-studies-extra', '/privacy-policy-old', '/terms-of-service2',
    '/business-licenses', '/korean-skincare-influencer-marketing-x', '/beauty-influencer-marketing-agency2', '/talents', '/services',
    '/', '/en', '/ar', '/about', '/contact', '/does-not-exist',
  ])('sends %s through the i18n middleware', (pathname) => {
    expect(runsMiddleware(pathname)).toBe(true)
  })
})
