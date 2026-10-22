import { Metadata } from 'next'
import Link from 'next/link'
import { PHASE_PRODUCTION_BUILD } from 'next/constants'
import { prisma } from '@/lib/prisma'
import Heading from '@/components/ui/Heading'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import Stagger from '@/components/ui/motion/Stagger'
import StaggerItem from '@/components/ui/motion/StaggerItem'
import Image from 'next/image'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { resolveFeaturedImage } from '@/lib/blog-cover'
import { livePostsWhere, newestFirst } from '@/lib/blog-posts'
import { jsonLdSafe } from '@/lib/sanitize'
import { BLOG_ID, SITE_URL, blogPostUrl, organizationRef } from '@/lib/seo/schema'
import { blogFeedAlternate } from '@/lib/seo/rss'

export const revalidate = 3600

const pageMetadata = buildPageMetadata({
  title: 'Blog | Influencer Marketing Insights & Tips',
  description:
    'Expert insights on influencer marketing, content creation, and social media strategy. Learn from CA Agency\'s experience with 3000+ campaigns.',
  path: '/blog',
  localized: false,
  keywords: [
    'influencer marketing blog',
    'social media marketing tips',
    'content creator insights',
    'influencer marketing strategy',
    'brand partnerships guide',
  ],
})

export const metadata: Metadata = {
  ...pageMetadata,
  alternates: { ...pageMetadata.alternates, types: blogFeedAlternate },
}

// Every live post is listed: this page is the only crawlable hub linking to
// all of them. At runtime DB errors propagate so a failed ISR regeneration
// keeps the previous page instead of caching an empty "no posts" page. Only
// the build (CI runs it without a database) falls back to an empty list; the
// first hourly regeneration then fills it in.
async function getPublishedPosts() {
  try {
    return newestFirst(await queryLivePosts())
  } catch (error) {
    if (process.env.NEXT_PHASE !== PHASE_PRODUCTION_BUILD) throw error
    console.error('[blog] post query failed during build; rendering empty listing', error)
    return []
  }
}

function queryLivePosts() {
  return prisma.post.findMany({
    where: livePostsWhere(),
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      featuredImage: true,
      publishedAt: true,
      createdAt: true,
      author: true,
      categories: true,
      tags: true,
    },
  })
}

type ListedPost = Awaited<ReturnType<typeof queryLivePosts>>[number]

function blogJsonLd(posts: ListedPost[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': BLOG_ID,
    name: 'CA Agency Influencer Marketing Blog',
    url: `${SITE_URL}/blog`,
    inLanguage: 'en',
    publisher: organizationRef,
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      '@id': `${blogPostUrl(post.slug)}#article`,
      headline: post.title,
      url: blogPostUrl(post.slug),
      datePublished: (post.publishedAt ?? post.createdAt).toISOString(),
    })),
  }
}

export default async function BlogPage() {
  const posts = await getPublishedPosts()

  return (
    <>
      <script type="application/ld+json">{jsonLdSafe(blogJsonLd(posts))}</script>

      {/* Hero */}
      <section className="bg-background-base py-[100px] tablet:py-[80px] mobile:py-[60px] px-section-x">
        <div className="max-w-container mx-auto text-center">
          <Heading as="h1" color="dark" className="mb-6 text-[56px] tablet:text-[44px] mobile:text-[32px]">
            Influencer Marketing Blog
          </Heading>
          <Text color="dark" size="lg" className="max-w-[700px] mx-auto opacity-80">
            Expert insights, strategies, and tips from CA Agency's experience with 3000+ influencer campaigns.
          </Text>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="bg-background-base py-[80px] px-section-x">
        <div className="max-w-container mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <Text color="dark" size="lg" className="opacity-60">
                No blog posts yet. Check back soon!
              </Text>
            </div>
          ) : (
            <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.08}>
              {posts.map((post, index) => (
                <StaggerItem key={post.id} className="h-full">
                <article
                  className="hover-lift group h-full bg-background-soft rounded-card overflow-hidden ring-1 ring-black/10 hover:bg-white hover:ring-black/15 hover:shadow-e3"
                >
                  {resolveFeaturedImage(post) && (
                    <Link href={`/blog/${post.slug}`} prefetch={false} tabIndex={-1} aria-hidden="true">
                      <div className="relative aspect-video w-full overflow-hidden">
                        <Image
                          src={resolveFeaturedImage(post) as string}
                          alt=""
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 420px"
                          preload={index === 0}
                          loading={index < 3 ? 'eager' : 'lazy'}
                        />
                      </div>
                    </Link>
                  )}
                  <div className="p-6">
                    {post.publishedAt && (
                      <time
                        dateTime={post.publishedAt.toISOString()}
                        className="text-black/60 text-sm"
                      >
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    )}
                    <Link href={`/blog/${post.slug}`} prefetch={false}>
                      <Heading
                        as="h2"
                        color="dark"
                        className="mt-2 mb-3 text-[24px] hover:text-foreground-subtle transition-colors"
                      >
                        {post.title}
                      </Heading>
                    </Link>
                    {post.excerpt && (
                      <Text color="dark" size="sm" className="opacity-70 mb-4 line-clamp-3">
                        {post.excerpt}
                      </Text>
                    )}
                    <Link href={`/blog/${post.slug}`} prefetch={false}>
                      <Button variant="dark" className="w-full">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </article>
                </StaggerItem>
              ))}
            </Stagger>
          )}
        </div>
      </section>
    </>
  )
}
