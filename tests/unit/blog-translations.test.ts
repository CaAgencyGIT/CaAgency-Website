import { describe, expect, it } from 'vitest'
import { blogIndexLanguages, getTranslatedPost, postLanguages, translatedGuides, translatedPosts, translationLocales } from '@/lib/blog-translations'
import { LOCALIZED_BLOG_PATHS, getLocalizedSiteRouteRedirect } from '@/lib/routing-helpers'
import { localizeHref } from '@/lib/i18n/client-paths'

const US_GUIDES = new Set(['ftc-disclosure-guidelines-influencer-marketing', 'find-skincare-influencers-usa'])

describe('translated blog guides', () => {
  it('keeps the routing allow-list in step with the translations', () => {
    for (const [locale, { posts }] of Object.entries(translatedPosts)) {
      expect([...(LOCALIZED_BLOG_PATHS[locale] ?? [])].sort()).toEqual(['/blog', ...posts.map((post) => `/blog/${post.slug}`)].sort())
    }
    expect(Object.keys(LOCALIZED_BLOG_PATHS).sort()).toEqual(Object.keys(translatedPosts).sort())
  })

  it('serves translated posts under their locale and redirects every other post to English', () => {
    expect(getLocalizedSiteRouteRedirect('/de/blog/influencer-marketing-cost-2026')).toBeNull()
    expect(getLocalizedSiteRouteRedirect('/fr/blog/how-to-choose-influencer-marketing-agency')).toBeNull()
    expect(getLocalizedSiteRouteRedirect('/ko/blog/influencer-marketing-cost-2026')).toBe('/blog/influencer-marketing-cost-2026')
    expect(getLocalizedSiteRouteRedirect('/de/blog/a-post-without-a-translation')).toBe('/blog/a-post-without-a-translation')
    expect(localizeHref('/blog/influencer-marketing-cost-2026', 'de')).toBe('/de/blog/influencer-marketing-cost-2026')
    // The blog index exists in German and French; other languages go to the English one.
    expect(localizeHref('/blog', 'de')).toBe('/de/blog')
    expect(localizeHref('/blog', 'es')).toBe('/es/blog')
    expect(localizeHref('/blog', 'ko')).toBe('/blog')
    expect(getLocalizedSiteRouteRedirect('/fr/blog')).toBeNull()
    expect(getLocalizedSiteRouteRedirect('/ko/blog')).toBe('/blog')
    expect(blogIndexLanguages()).toEqual({
      'x-default': 'https://caagency.com/blog',
      en: 'https://caagency.com/blog',
      de: 'https://caagency.com/de/blog',
      fr: 'https://caagency.com/fr/blog',
      es: 'https://caagency.com/es/blog',
    })
  })

  it('builds hreflang for a translated post', () => {
    expect(translationLocales('influencer-marketing-cost-2026')).toEqual(['de', 'fr', 'es'])
    expect(postLanguages('influencer-marketing-cost-2026')).toEqual({
      'x-default': 'https://caagency.com/blog/influencer-marketing-cost-2026',
      en: 'https://caagency.com/blog/influencer-marketing-cost-2026',
      de: 'https://caagency.com/de/blog/influencer-marketing-cost-2026',
      fr: 'https://caagency.com/fr/blog/influencer-marketing-cost-2026',
      es: 'https://caagency.com/es/blog/influencer-marketing-cost-2026',
    })
    expect(translationLocales('a-post-without-a-translation')).toEqual([])
    expect(Object.values(translatedPosts).map(({ posts }) => posts.length)).toEqual([25, 25, 25])
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
        for (const href of hrefs.filter((link) => link.startsWith('/'))) {
          // In the page's language wherever that page exists; plain English paths only for English-only pages.
          const expected = href.startsWith(`/${locale}/`) ? href : localizeHref(href, locale)
          expect(href, `${locale} ${post.slug}: ${href}`).toBe(expected)
          // Only the two guides about the US market link to the English US page.
          if (!US_GUIDES.has(post.slug)) expect(href, `${locale} ${post.slug}: ${href}`).not.toBe('/influencer-marketing-usa')
        }
        // No em dashes, matching the rest of the site copy.
        expect(post.content).not.toContain('—')
      }
      expect(translatedGuides(locale).map((guide) => guide.href)).toEqual(posts.map((post) => `/${locale}/blog/${post.slug}`))
      expect(translatedGuides(locale, 3)).toHaveLength(3)
    }
  })
})
