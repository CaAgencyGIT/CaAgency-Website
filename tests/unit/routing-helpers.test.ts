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
    expect(getLocalizedSiteRouteRedirect('/zh/blog/a-post-without-a-translation')).toBe('/blog/a-post-without-a-translation')
    expect(getLocalizedSiteRouteRedirect('/zh/case-studies')).toBe('/case-studies')
    expect(getLocalizedSiteRouteRedirect('/ar/privacy-policy')).toBe('/privacy-policy')
    expect(getLocalizedSiteRouteRedirect('/ar/talents/jay-sadiq')).toBe('/talents/jay-sadiq')
    expect(getLocalizedSiteRouteRedirect('/ar/services/not-a-service')).toBe('/services/not-a-service')
    expect(getLocalizedSiteRouteRedirect('/zh/blog/a-post-without-a-translation')).toBe('/blog/a-post-without-a-translation')
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
    expect(getLocalizedSiteRouteRedirect('/de/influencer-marketing-germany')).toBeNull()
    expect(getLocalizedSiteRouteRedirect('/de/influencer-marketing-switzerland')).toBeNull()
    expect(getLocalizedSiteRouteRedirect('/fr/influencer-marketing-france')).toBeNull()
    // A market page without a translation in that language still goes to English.
    expect(getLocalizedSiteRouteRedirect('/fr/influencer-marketing-germany')).toBeNull()
    // Category and service pages exist in every translated language; unknown service slugs go to English.
    expect(getLocalizedSiteRouteRedirect('/ko/korean-skincare-influencer-marketing')).toBeNull()
    expect(getLocalizedSiteRouteRedirect('/fr/beauty-influencer-marketing-agency')).toBeNull()
    expect(getLocalizedSiteRouteRedirect('/de/skincare-influencer-marketing-agency')).toBeNull()
    expect(getLocalizedSiteRouteRedirect('/ar/services/influencer-campaigns')).toBeNull()
    expect(getLocalizedSiteRouteRedirect('/ko/services/brand-consultancy')).toBeNull()
    expect(getLocalizedSiteRouteRedirect('/de/influencer-marketing-dubai')).toBeNull()
    expect(getLocalizedSiteRouteRedirect('/de/influencer-marketing-nordics')).toBeNull()
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
    expect(isUnknownRootFile('/BingSiteAuth.xml')).toBe(false)
    expect(isUnknownRootFile('/about')).toBe(false)
    expect(isUnknownRootFile('/blog/feed.xml')).toBe(false)
    expect(isUnknownRootFile('/ar')).toBe(false)
  })
})

describe('localizedSiteRedirectLocation', () => {
  it('redirects on the public host over https, keeping the query', async () => {
    const { localizedSiteRedirectLocation } = await import('@/lib/routing-helpers')
    const origin = 'http://localhost:3001'
    expect(localizedSiteRedirectLocation('/blog/some-post', '', 'caagency.com', origin)).toBe('https://caagency.com/blog/some-post')
    expect(localizedSiteRedirectLocation('/case-studies', '?utm_source=x', 'caagency.com', origin)).toBe(
      'https://caagency.com/case-studies?utm_source=x'
    )
    expect(localizedSiteRedirectLocation('/blog', '', 'localhost:3111', origin)).toBe('http://localhost:3111/blog')
    // A hostile or missing Host header never ends up in the Location.
    expect(localizedSiteRedirectLocation('/blog', '', 'evil.example/x?', origin)).toBe('http://localhost:3001/blog')
    expect(localizedSiteRedirectLocation('/blog', '', '', origin)).toBe('http://localhost:3001/blog')
    expect(localizedSiteRedirectLocation('//evil.example/blog', '', 'caagency.com', origin)).toBe('https://caagency.com/evil.example/blog')
  })
})
