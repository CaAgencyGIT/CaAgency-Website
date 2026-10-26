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
