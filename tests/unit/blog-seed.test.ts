import { AI_COVER_VERSION, aiCoverPath } from '@/lib/data/blog-ai-covers'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { seedPosts, selectPostsToSeed } from '@/prisma/blog-seed'
import {
  CATEGORY_ACCENTS,
  COVER_BACKGROUND,
  COVER_MOTIFS,
  COVER_VERSION,
  COVER_WIDTH,
  assignCoverMotifs,
  blogCoverPath,
  coverAccent,
  coverBarHeights,
  coverDotGrid,
  coverLabelSize,
  coverRings,
  coverStripeAngle,
  coverTopLabel,
  hashSlug,
  hexToRgb,
  resolveFeaturedImage,
} from '@/lib/blog-cover'
import { generatedCoverSlugs } from '@/lib/data/blog-covers'
import { gulfCostGuide, locationGuides, saudiGuide, serviceGuides } from '@/lib/data/guides'
import { getCaseStudy } from '@/lib/data/case-studies'
import { getService } from '@/lib/data/services'

const seededSlugs = new Set(seedPosts.map((post) => post.slug))

function relativeLuminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex).map((channel) => {
    const c = channel / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

function contrastRatio(foreground: string, background: string): number {
  const [light, dark] = [relativeLuminance(foreground), relativeLuminance(background)].sort((a, b) => b - a)
  return (light + 0.05) / (dark + 0.05)
}

describe('selectPostsToSeed', () => {
  it('returns every post when no slugs are requested', () => {
    expect(selectPostsToSeed(seedPosts, [])).toHaveLength(seedPosts.length)
  })

  it('returns only the requested posts', () => {
    const selected = selectPostsToSeed(seedPosts, ['tiktok-shop-beauty-brands', 'saudi-arabia-influencer-marketing-guide'])
    expect(selected.map((post) => post.slug).sort()).toEqual([
      'saudi-arabia-influencer-marketing-guide',
      'tiktok-shop-beauty-brands',
    ])
  })

  it('rejects unknown slugs instead of silently seeding nothing', () => {
    expect(() => selectPostsToSeed(seedPosts, ['tiktok-shop-beauty-brands', 'no-such-post'])).toThrow(/no-such-post/)
  })

  it('does not mutate the source list', () => {
    const before = seedPosts.map((post) => post.slug)
    selectPostsToSeed(seedPosts, [])
    expect(seedPosts.map((post) => post.slug)).toEqual(before)
  })
})

describe('seed posts', () => {
  it('have unique slugs', () => {
    expect(seededSlugs.size).toBe(seedPosts.length)
  })

  it('only link to other seeded posts', () => {
    for (const post of seedPosts) {
      const hrefs = [...post.content.matchAll(/href="\/blog\/([a-z0-9-]+)"/g)].map((match) => match[1])
      for (const slug of hrefs) {
        expect(seededSlugs.has(slug), `${post.slug} -> ${slug}`).toBe(true)
      }
    }
  })

  it('are referenced by guide links only if seeded', () => {
    const guides = [gulfCostGuide, saudiGuide, ...locationGuides, ...Object.values(serviceGuides).flat()]
    for (const guide of guides) {
      expect(seededSlugs.has(guide.href.replace('/blog/', '')), guide.href).toBe(true)
    }
  })

  it('have a generated cover on disk and in the manifest', () => {
    for (const slug of seededSlugs) {
      expect(generatedCoverSlugs.has(slug), slug).toBe(true)
      expect(existsSync(path.join(process.cwd(), 'public', blogCoverPath(slug))), slug).toBe(true)
    }
  })
})

describe('blog covers', () => {
  it('prefers an uploaded featured image', () => {
    expect(resolveFeaturedImage({ slug: 'tiktok-shop-beauty-brands', featuredImage: '/images/custom.webp' })).toBe(
      '/images/custom.webp'
    )
  })

  it('prefers the editorial AI cover for seeded slugs', () => {
    expect(resolveFeaturedImage({ slug: 'tiktok-shop-beauty-brands', featuredImage: null })).toBe(
      aiCoverPath('tiktok-shop-beauty-brands')
    )
    expect(aiCoverPath('tiktok-shop-beauty-brands')).toBe(
      `/images/blog/ai/tiktok-shop-beauty-brands-v${AI_COVER_VERSION}.webp`
    )
  })

  it('builds versioned paths for the typographic fallback covers', () => {
    expect(blogCoverPath('tiktok-shop-beauty-brands')).toBe(
      `/images/blog/covers/tiktok-shop-beauty-brands-v${COVER_VERSION}.webp`
    )
  })

  it('returns null for posts with no image and no generated cover', () => {
    expect(resolveFeaturedImage({ slug: 'admin-written-post' })).toBeNull()
  })

  it('draws the same rings for the same slug and different rings otherwise', () => {
    expect(coverRings('a-post')).toEqual(coverRings('a-post'))
    expect(hashSlug('a-post')).not.toBe(hashSlug('another-post'))
    expect(coverRings('a-post')).toHaveLength(9)
  })

  it('has an accent for every primary category in the seed', () => {
    const categories = new Set(seedPosts.map((post) => post.categories[0] ?? 'Insights'))
    for (const category of categories) {
      expect(CATEGORY_ACCENTS[category], `no accent for "${category}"`).toBeDefined()
    }
  })

  it('keeps accents distinct and readable on the cover background', () => {
    const accents = Object.values(CATEGORY_ACCENTS)
    expect(new Set(accents).size).toBe(accents.length)
    for (const accent of accents) {
      expect(contrastRatio(accent, COVER_BACKGROUND), accent).toBeGreaterThanOrEqual(7)
    }
  })

  it('falls back to white for an unknown category', () => {
    expect(coverAccent('Something New')).toBe('#FFFFFF')
  })

  it('gives neighbouring posts in a category different artwork', () => {
    const motifs = assignCoverMotifs(seedPosts)
    const byCategory = new Map<string, string[]>()
    for (const post of seedPosts) {
      const category = post.categories[0] ?? 'Insights'
      byCategory.set(category, [...(byCategory.get(category) ?? []), motifs.get(post.slug) as string])
    }
    for (const [category, list] of byCategory) {
      const firstRun = list.slice(0, COVER_MOTIFS.length)
      expect(new Set(firstRun).size, category).toBe(firstRun.length)
      list.slice(1).forEach((motif, i) => expect(motif, `${category} #${i + 1}`).not.toBe(list[i]))
    }
  })

  it('labels a cover with its second category, else the brand line', () => {
    expect(coverTopLabel(['Platforms', 'Beauty'])).toBe('BEAUTY')
    expect(coverTopLabel(['Strategy'])).toBe('INFLUENCER MARKETING')
  })

  it('derives the same geometry for the same slug', () => {
    expect(coverBarHeights('a-post')).toEqual(coverBarHeights('a-post'))
    expect(coverBarHeights('a-post')).toHaveLength(10)
    expect(coverBarHeights('a-post')).not.toEqual(coverBarHeights('another-post'))
    expect(coverDotGrid('a-post')).toEqual(coverDotGrid('a-post'))
    expect([35, 55, 125, 145]).toContain(coverStripeAngle('a-post'))
  })

  it('shrinks the category label as it gets longer', () => {
    expect(coverLabelSize('Guides')).toBeGreaterThan(coverLabelSize('Costs & Budgeting'))
    expect(coverLabelSize('x'.repeat(200))).toBeGreaterThanOrEqual(40)
    expect(COVER_WIDTH).toBe(1200)
  })
})

describe('seed post internal links', () => {
  // A re-seed overwrites live post content, so a stale link here goes
  // straight back to production (the Medicube case study did, Oct 2026).
  const linkedSlugs = (section: string) =>
    seedPosts.flatMap((post) =>
      [...post.content.matchAll(new RegExp(`href="/${section}/([\\w-]+)"`, 'g'))].map((m) => ({
        post: post.slug,
        slug: m[1],
      }))
    )

  it('only links to case studies that exist', () => {
    expect(linkedSlugs('case-studies').filter(({ slug }) => !getCaseStudy(slug))).toEqual([])
  })

  it('only links to service pages that exist', () => {
    expect(linkedSlugs('services').filter(({ slug }) => !getService(slug))).toEqual([])
  })
})
