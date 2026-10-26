import { describe, it, expect } from 'vitest'
import {
  isPublicAsset,
  isSensitiveProbe,
  isUnknownRootFile,
  getLocalizedSiteRouteRedirect,
} from '@/lib/routing-helpers'

describe('isPublicAsset', () => {
  it('matches known public files and asset prefixes', () => {
    expect(isPublicAsset('/robots.txt')).toBe(true)
    expect(isPublicAsset('/sitemap.xml')).toBe(true)
    expect(isPublicAsset('/images/site/logo.svg')).toBe(true)
    expect(isPublicAsset('/videos/work/medicube.mp4')).toBe(true)
    expect(isPublicAsset('/fonts/anegra.woff2')).toBe(true)
    expect(isPublicAsset('/assets/rev-2026-07/hero-slide-1-916.jpg')).toBe(true)
  })

  it('rejects normal routes', () => {
    expect(isPublicAsset('/')).toBe(false)
    expect(isPublicAsset('/about')).toBe(false)
    expect(isPublicAsset('/blog')).toBe(false)
  })
})

describe('isSensitiveProbe', () => {
  it('flags scanner probes', () => {
    expect(isSensitiveProbe('/.env')).toBe(true)
    expect(isSensitiveProbe('/.env.local')).toBe(true)
    expect(isSensitiveProbe('/.git/config')).toBe(true)
    expect(isSensitiveProbe('/backup.sql')).toBe(true)
  })

  it('does not flag legitimate routes', () => {
    expect(isSensitiveProbe('/')).toBe(false)
    expect(isSensitiveProbe('/about')).toBe(false)
    expect(isSensitiveProbe('/environment')).toBe(false)
  })
})

describe('getLocalizedSiteRouteRedirect', () => {
  it('strips the locale prefix for (site)-only routes', () => {
    expect(getLocalizedSiteRouteRedirect('/ar/blog')).toBe('/blog')
    expect(getLocalizedSiteRouteRedirect('/ko/blog')).toBe('/blog')
    expect(getLocalizedSiteRouteRedirect('/ar/privacy-policy')).toBe('/privacy-policy')
    expect(getLocalizedSiteRouteRedirect('/ko/influencer-marketing-dubai')).toBe(
      '/influencer-marketing-dubai'
    )
    expect(getLocalizedSiteRouteRedirect('/ar/influencer-marketing-usa')).toBe(
      '/influencer-marketing-usa'
    )
    expect(getLocalizedSiteRouteRedirect('/ko/korean-skincare-influencer-marketing')).toBe(
      '/korean-skincare-influencer-marketing'
    )
    expect(getLocalizedSiteRouteRedirect('/fr/beauty-influencer-marketing-agency')).toBe(
      '/beauty-influencer-marketing-agency'
    )
    expect(getLocalizedSiteRouteRedirect('/de/skincare-influencer-marketing-agency')).toBe(
      '/skincare-influencer-marketing-agency'
    )
    expect(getLocalizedSiteRouteRedirect('/ar/talents/jay-sadiq')).toBe('/talents/jay-sadiq')
    expect(getLocalizedSiteRouteRedirect('/ar/services/influencer-campaigns')).toBe(
      '/services/influencer-campaigns'
    )
    expect(getLocalizedSiteRouteRedirect('/ko/services/brand-consultancy')).toBe(
      '/services/brand-consultancy'
    )
    expect(getLocalizedSiteRouteRedirect('/fr/blog')).toBe('/blog')
    expect(getLocalizedSiteRouteRedirect('/es/case-studies')).toBe('/case-studies')
    expect(getLocalizedSiteRouteRedirect('/de/business-license')).toBe('/business-license')
    expect(getLocalizedSiteRouteRedirect('/de/talents/jay-sadiq')).toBe('/talents/jay-sadiq')
  })

  it('returns null for localized pages that have a [locale] variant', () => {
    expect(getLocalizedSiteRouteRedirect('/ar')).toBeNull()
    expect(getLocalizedSiteRouteRedirect('/ar/about')).toBeNull()
    expect(getLocalizedSiteRouteRedirect('/fr/about')).toBeNull()
    expect(getLocalizedSiteRouteRedirect('/de/contact')).toBeNull()
    expect(getLocalizedSiteRouteRedirect('/ar/influencer-marketing-dubai')).toBeNull()
    expect(getLocalizedSiteRouteRedirect('/ar/influencer-marketing-gcc')).toBeNull()
    // services *listing* is localized; only the /services/<slug> detail is (site)-only
    expect(getLocalizedSiteRouteRedirect('/ar/services')).toBeNull()
    // talents *listing* is localized; only the /talents/<slug> detail is (site)-only
    expect(getLocalizedSiteRouteRedirect('/ar/talents')).toBeNull()
  })

  it('matches whole route segments only', () => {
    expect(getLocalizedSiteRouteRedirect('/fr/blog/some-post')).toBe('/blog/some-post')
    expect(getLocalizedSiteRouteRedirect('/fr/blogger')).toBeNull()
    expect(getLocalizedSiteRouteRedirect('/es/case-studies-archive')).toBeNull()
    expect(getLocalizedSiteRouteRedirect('/de/influencer-marketing-')).toBeNull()
  })

  it('returns null for default-locale (unprefixed) routes', () => {
    expect(getLocalizedSiteRouteRedirect('/blog')).toBeNull()
    expect(getLocalizedSiteRouteRedirect('/privacy-policy')).toBeNull()
  })
})

describe('isUnknownRootFile', () => {
  it('flags guessed files at the root', () => {
    expect(isUnknownRootFile('/favicon-32x32.png')).toBe(true)
    expect(isUnknownRootFile('/apple-touch-icon-precomposed.png')).toBe(true)
    expect(isUnknownRootFile('/wp-login.php')).toBe(true)
  })

  it('leaves real files, pages and nested paths alone', () => {
    expect(isUnknownRootFile('/favicon.ico')).toBe(false)
    expect(isUnknownRootFile('/robots.txt')).toBe(false)
    expect(isUnknownRootFile('/site.webmanifest')).toBe(false)
    expect(isUnknownRootFile('/about')).toBe(false)
    expect(isUnknownRootFile('/blog/feed.xml')).toBe(false)
    expect(isUnknownRootFile('/ar')).toBe(false)
  })
})
