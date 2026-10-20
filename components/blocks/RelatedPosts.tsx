import Link from 'next/link'
import Image from 'next/image'
import { prisma } from '@/lib/prisma'
import Heading from '@/components/ui/Heading'
import Text from '@/components/ui/Text'
import { resolveFeaturedImage } from '@/lib/blog-cover'

interface RelatedPostsProps {
  currentSlug: string
  categories?: string[]
  tags?: string[]
}

interface RelatedPostCard {
  id: string
  slug: string
  title: string
  excerpt: string | null
  featuredImage: string | null
}

const MAX_RELATED = 3

const relatedSelect = {
  id: true,
  slug: true,
  title: true,
  excerpt: true,
  featuredImage: true,
} as const

async function fetchRelatedPosts(
  currentSlug: string,
  categories: string[],
  tags: string[]
): Promise<RelatedPostCard[]> {
  try {
    const overlap = [...new Set([...categories, ...tags])].filter(Boolean)

    // Prefer posts that share a category or tag with the current post.
    const candidates = overlap.length
      ? await prisma.post.findMany({
          where: {
            slug: { not: currentSlug },
            status: 'published',
            publishedAt: { lte: new Date() },
          },
          select: { ...relatedSelect, categories: true, tags: true },
          orderBy: { publishedAt: 'desc' },
        })
      : []
    const matched = candidates.filter(post => [...post.categories, ...post.tags].some(value => overlap.includes(value))).slice(0, MAX_RELATED)

    if (matched.length >= MAX_RELATED) {
      return matched
    }

    // Backfill with the most recent published posts, excluding current + already matched.
    const excludeSlugs = [currentSlug, ...matched.map((post) => post.slug)]
    const fillers = await prisma.post.findMany({
      where: {
        slug: { notIn: excludeSlugs },
        status: 'published',
        publishedAt: { lte: new Date() },
      },
      select: relatedSelect,
      take: MAX_RELATED - matched.length,
      orderBy: { publishedAt: 'desc' },
    })

    return [...matched, ...fillers]
  } catch {
    return []
  }
}

export default async function RelatedPosts({
  currentSlug,
  categories = [],
  tags = [],
}: RelatedPostsProps) {
  const posts = await fetchRelatedPosts(currentSlug, categories, tags)

  if (posts.length === 0) {
    return null
  }

  return (
    <section
      aria-label="Related articles"
      className="bg-background-base py-[80px] tablet:py-[60px] px-section-x border-t border-black/5"
    >
      <div className="max-w-container mx-auto">
        <Heading
          as="h2"
          color="dark"
          className="mb-8 text-[40px] mobile:text-[28px]"
        >
          Related articles
        </Heading>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none p-0 m-0">
          {posts.map((post) => (
            <li key={post.id} className="h-full">
              <Link
                href={`/blog/${post.slug}`}
                className="hover-lift group flex h-full flex-col bg-background-soft rounded-xl overflow-hidden ring-1 ring-black/10 hover:bg-white hover:ring-black/15 hover:shadow-e3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-red"
              >
                {resolveFeaturedImage(post) && (
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={resolveFeaturedImage(post) as string}
                      alt=""
                      fill
                      loading="lazy"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 420px"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <Heading
                    as="h3"
                    color="dark"
                    className="text-[20px] mb-2 group-hover:text-foreground-subtle transition-colors"
                  >
                    {post.title}
                  </Heading>
                  {post.excerpt && (
                    <Text color="dark" size="sm" className="opacity-70 line-clamp-3">
                      {post.excerpt}
                    </Text>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
