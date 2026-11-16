import { describe, expect, it } from 'vitest'
import { getTranslatedPost, postLanguages, translatedGuides, translatedPosts, translationLocales } from '@/lib/blog-translations'
import { LOCALIZED_BLOG_PATHS, getLocalizedSiteRouteRedirect } from '@/lib/routing-helpers'
import { localizeHref } from '@/lib/i18n/client-paths'

describe('translated blog guides', () => {
  it('keeps the routing allow-list in step with the translations', () => {
    for (const [locale, { posts }] of Object.entries(translatedPosts)) {
      expect([...(LOCALIZED_BLOG_PATHS[locale] ?? [])].sort()).toEqual(posts.map((post) => `/blog/${post.slug}`).sort())
    }
    expect(Object.keys(LOCALIZED_BLOG_PATHS).sort()).toEqual(Object.keys(translatedPosts).sort())
  })

  it('serves translated posts under their locale and redirects every other post to English', () => {
    expect(getLocalizedSiteRouteRedirect('/de/blog/influencer-marketing-cost-2026')).toBeNull()
    expect(getLocalizedSiteRouteRedirect('/fr/blog/how-to-choose-influencer-marketing-agency')).toBeNull()
    expect(getLocalizedSiteRouteRedirect('/ko/blog/influencer-marketing-cost-2026')).toBe('/blog/influencer-marketing-cost-2026')
    expect(getLocalizedSiteRouteRedirect('/de/blog/tiktok-influencer-marketing-guide')).toBe('/blog/tiktok-influencer-marketing-guide')
    expect(localizeHref('/blog/influencer-marketing-cost-2026', 'de')).toBe('/de/blog/influencer-marketing-cost-2026')
    expect(localizeHref('/blog', 'de')).toBe('/blog')
  })

  it('builds hreflang for a translated post', () => {
    expect(translationLocales('influencer-marketing-cost-2026')).toEqual(['de', 'fr'])
    expect(postLanguages('influencer-marketing-cost-2026')).toEqual({
      'x-default': 'https://caagency.com/blog/influencer-marketing-cost-2026',
      en: 'https://caagency.com/blog/influencer-marketing-cost-2026',
      de: 'https://caagency.com/de/blog/influencer-marketing-cost-2026',
      fr: 'https://caagency.com/fr/blog/influencer-marketing-cost-2026',
    })
    expect(translationLocales('tiktok-influencer-marketing-guide')).toEqual([])
  })

  it('gives every translation search-ready metadata and links inside its own language', () => {
    for (const [locale, { posts }] of Object.entries(translatedPosts)) {
      for (const post of posts) {
        expect(getTranslatedPost(locale, post.slug)).toBe(post)
        expect((post.seoTitle ?? post.title).length, post.title).toBeLessThanOrEqual(60)
        expect(post.excerpt.length, post.excerpt).toBeLessThanOrEqual(160)
        expect(post.content.match(/<h2>/g)?.length ?? 0).toBeGreaterThanOrEqual(5)
        const hrefs = [...post.content.matchAll(/href="([^"]+)"/g)].map((match) => match[1])
        expect(hrefs.length).toBeGreaterThan(0)
        for (const href of hrefs) expect(href.startsWith(`/${locale}/`), `${locale} ${post.slug}: ${href}`).toBe(true)
        // No em dashes, matching the rest of the site copy.
        expect(post.content).not.toContain('—')
      }
      expect(translatedGuides(locale).map((guide) => guide.href)).toEqual(posts.map((post) => `/${locale}/blog/${post.slug}`))
    }
  })
})
