import { Metadata } from 'next'
import Link from 'next/link'
import { PHASE_PRODUCTION_BUILD } from 'next/constants'
import { prisma } from '@/lib/prisma'
import Image from 'next/image'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { resolveFeaturedImage } from '@/lib/blog-cover'
import { livePostsWhere, newestFirst } from '@/lib/blog-posts'
import { jsonLdSafe } from '@/lib/sanitize'
import { BLOG_ID, SITE_URL, blogPostUrl, organizationRef } from '@/lib/seo/schema'
import { blogFeedAlternate } from '@/lib/seo/rss'
import { blogCoverFilms, filmSrc } from '@/lib/data/redesign-media'
import { posterFor } from '@/lib/data/videos'

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

// Redesign: illustrative creator stills on the cards (not campaign claims);
// posts without one keep their own featured image.
function cardImage(post: ListedPost) {
  const film = blogCoverFilms[post.slug]
  return film ? posterFor(filmSrc(film)) : resolveFeaturedImage(post)
}

export default async function BlogPage() {
  const posts = await getPublishedPosts()

  return (
    <div className="rd">
      <script type="application/ld+json">{jsonLdSafe(blogJsonLd(posts))}</script>

      <section className="rd-section rd-page-hero">
        <div>
          <h1>Influencer Marketing Blog</h1>
        </div>
        <div className="rd-hero-description">
          <p>Expert insights, strategies, and tips from CA Agency's experience with 3000+ influencer campaigns.</p>
        </div>
      </section>

      <section className="rd-section pt-2.5">
        {posts.length === 0 ? (
          <p className="py-20 text-center">No blog posts yet. Check back soon!</p>
        ) : (
          <div className="rd-blog-grid">
            {posts.map((post, index) => {
              const image = cardImage(post)
              return (
                <article key={post.id} className="rd-blog-card">
                  {image && (
                    <Link href={`/blog/${post.slug}`} prefetch={false} tabIndex={-1} aria-hidden="true" className="rd-blog-image block">
                      <Image
                        src={image}
                        alt=""
                        fill
                        className="object-cover object-[50%_22%]"
                        sizes={index === 0 ? '(max-width: 760px) 100vw, 62vw' : '(max-width: 760px) 50vw, 30vw'}
                        preload={index === 0}
                        loading={index < 3 ? 'eager' : 'lazy'}
                      />
                    </Link>
                  )}
                  {post.publishedAt && (
                    <time dateTime={post.publishedAt.toISOString()}>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  )}
                  <Link href={`/blog/${post.slug}`} prefetch={false}>
                    <h2>{post.title}</h2>
                  </Link>
                  {post.excerpt && <p>{post.excerpt}</p>}
                  <Link href={`/blog/${post.slug}`} prefetch={false} className="rd-read-more">
                    Read More
                  </Link>
                </article>
              )
            })}
          </div>
        )}
      </section>
    </div>
  )
}
