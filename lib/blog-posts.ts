import type { Prisma } from '@prisma/client'

// A post is live once published, unless it is scheduled for the future. A null
// publishedAt counts as live so the listing, sitemap and feed agree with the
// post page itself.
export function livePostsWhere(now: Date = new Date()) {
  return {
    status: 'published',
    OR: [{ publishedAt: null }, { publishedAt: { lte: now } }],
  } satisfies Prisma.PostWhereInput
}

type Dated = { publishedAt: Date | null; createdAt: Date }

export function effectivePostDate(post: Dated): Date {
  return post.publishedAt ?? post.createdAt
}

// Prisma cannot order by coalesce(publishedAt, createdAt), so sort in memory.
export function newestFirst<T extends Dated>(posts: readonly T[]): T[] {
  return [...posts].sort(
    (a, b) => effectivePostDate(b).getTime() - effectivePostDate(a).getTime()
  )
}

// Blog listing order (Oct 2026, client): the United States, Europe and Asia
// first; the UAE and Saudi Arabia further down, not at the top. Posts not
// listed here follow, newest first.
export const BLOG_LISTING_ORDER = [
  'find-skincare-influencers-usa',
  'k-beauty-influencer-marketing-guide',
  'influencer-marketing-for-fashion-brands',
  'ftc-disclosure-guidelines-influencer-marketing',
  'tiktok-shop-beauty-brands',
  'instagram-reels-beauty-brands',
  'influencer-marketing-for-beauty-brands',
  'youtube-influencer-marketing-beauty-brands',
  'influencer-marketing-trends-2026',
  'influencer-whitelisting-spark-ads-guide',
  'influencer-marketing-dubai-uae-cost-guide',
  'tiktok-shop-fashion-wellness-brands',
  'influencer-marketing-guide',
  'how-to-choose-influencer-marketing-agency',
  'saudi-arabia-influencer-marketing-guide',
] as const

export function blogListingOrder<T extends Dated & { slug: string }>(posts: readonly T[]): T[] {
  const rank = new Map<string, number>(BLOG_LISTING_ORDER.map((slug, i) => [slug, i]))
  const pinned = posts.filter((p) => rank.has(p.slug)).sort((a, b) => rank.get(a.slug)! - rank.get(b.slug)!)
  return [...pinned, ...newestFirst(posts.filter((p) => !rank.has(p.slug)))]
}
