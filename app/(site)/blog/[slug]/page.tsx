import { cache } from 'react'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { prisma } from '@/lib/prisma'
import Heading from '@/components/ui/Heading'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import { resolveFeaturedImage } from '@/lib/blog-cover'
import RelatedPosts from '@/components/blocks/RelatedPosts'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { jsonLdSafe, sanitizeTrustedHtml } from '@/lib/sanitize'
import { livePostsWhere } from '@/lib/blog-posts'
import { blogPostingJsonLd } from '@/lib/seo/schema'
import { blogFeedAlternate } from '@/lib/seo/rss'
import {
  plainTextExcerpt,
  readingTimeMinutes,
  withHeadingAnchors,
} from '@/lib/blog-html'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

// DB errors propagate on purpose: under ISR a failed regeneration keeps the
// previous page, whereas swallowing to null would cache a 404 for an hour.
const getPost = cache((slug: string) => prisma.post.findUnique({ where: { slug } }))

export const revalidate = 3600

// Prerenders live posts at build and makes the rest ISR on first hit; without
// this export the route rendered (and queried the DB) on every request.
export async function generateStaticParams() {
  try {
    const posts = await prisma.post.findMany({
      where: livePostsWhere(),
      select: { slug: true },
    })
    return posts.map(({ slug }) => ({ slug }))
  } catch (error) {
    console.error('[blog] generateStaticParams failed, falling back to on-demand ISR', error)
    return []
  }
}

function isLive(post: { status: string; publishedAt: Date | null }) {
  return post.status === 'published' && !(post.publishedAt && post.publishedAt > new Date())
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post || !isLive(post)) {
    return {
      title: 'Post Not Found',
    }
  }

  const description = post.excerpt || plainTextExcerpt(post.content)
  const metadata = buildPageMetadata({
    title: post.title,
    description,
    path: `/blog/${slug}`,
    localized: false,
    type: 'article',
    image: resolveFeaturedImage(post) ?? '/images/site/og-cover-v2.jpg',
    keywords: post.tags,
  })

  return {
    ...metadata,
    alternates: { ...metadata.alternates, types: blogFeedAlternate },
    openGraph: {
      ...metadata.openGraph,
      type: 'article' as const,
      publishedTime: (post.publishedAt ?? post.createdAt).toISOString(),
      modifiedTime: post.updatedAt.toISOString(),
      authors: [post.author],
      tags: post.tags,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post || !isLive(post)) {
    notFound()
  }

  const { processed: articleHtml, toc } = withHeadingAnchors(
    sanitizeTrustedHtml(post.content)
  )
  const minutes = readingTimeMinutes(post.content)
  const coverImage = resolveFeaturedImage(post)

  const articleSchema = blogPostingJsonLd({
    ...post,
    description: post.excerpt || plainTextExcerpt(post.content),
    image: resolveFeaturedImage(post) ?? '/images/site/og-cover-v2.jpg',
  })

  return (
    <>
      <script type="application/ld+json">{jsonLdSafe(articleSchema)}</script>

      {/* Hero — CSS load-in (LCP-safe) */}
      <section className="relative overflow-hidden bg-background-base py-[80px] tablet:py-[60px] mobile:py-[50px] px-section-x">
        <div className="relative z-[1] max-w-container mx-auto">
          <div className="hero-rise-media max-w-[800px] mx-auto">
            {post.publishedAt && (
              <time
                dateTime={post.publishedAt.toISOString()}
                className="text-black/60 text-sm mb-4 block"
              >
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            )}
            <Heading as="h1" color="dark" className="mb-6 text-[48px] tablet:text-[40px] mobile:text-[32px]">
              {post.title}
            </Heading>
            {post.excerpt && (
              <Text color="dark" size="lg" className="opacity-80 mb-4">
                {post.excerpt}
              </Text>
            )}
            <div className="flex items-center gap-4 text-black/60 text-sm">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{minutes} min read</span>
              {post.categories.length > 0 && (
                <>
                  <span>•</span>
                  <div className="flex gap-2">
                    {post.categories.map((cat: string) => (
                      <span key={cat} className="px-2 py-1 bg-black/10 rounded-sm">
                        {cat}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {coverImage && (
        <section className="bg-background-base px-section-x pb-[40px]">
          <div className="max-w-container mx-auto">
            <div className="hero-rise-media max-w-[1000px] mx-auto">
              <div
                className={`relative w-full rounded-card overflow-hidden ring-1 ring-black/5 shadow-e3 ${
                  post.featuredImage ? 'aspect-video' : 'aspect-[1200/630]'
                }`}
              >

                <Image
                  src={coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1000px"
                  preload
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="bg-background-base py-[60px] px-section-x">
        <div className="max-w-container mx-auto">
          <ScrollReveal yOffset={24} className="max-w-[800px] mx-auto">
            {toc.length >= 3 && (
              <nav
                aria-label="Table of contents"
                className="mb-10 rounded-card border border-black/10 bg-background-soft p-6"
              >
                <span className="mb-3 block font-jost text-[13px] font-medium uppercase tracking-[0.2em] text-accent-red">
                  In This Article
                </span>
                <ol className="space-y-1.5">
                  {toc.map((item, i) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="font-work-sans text-[15px] text-foreground-body hover:text-foreground-subtle transition-colors"
                      >
                        {i + 1}. {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            <div
              className="article-body max-w-none text-[16px] leading-[1.8] text-black/85 [text-wrap:pretty] [&_h2]:font-anegra [&_h2]:text-[28px] [&_h2]:mobile:text-[24px] [&_h2]:font-semibold [&_h2]:text-foreground-primary [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-anegra [&_h3]:text-[20px] [&_h3]:font-semibold [&_h3]:text-foreground-primary [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-5 [&_ul]:list-disc [&_ul]:ms-6 [&_ul]:mb-5 [&_ol]:list-decimal [&_ol]:ms-6 [&_ol]:mb-5 [&_li]:mb-2 [&_a]:font-medium [&_a]:text-accent-red [&_a:hover]:underline [&_blockquote]:border-s-2 [&_blockquote]:border-accent-red [&_blockquote]:ps-4 [&_blockquote]:italic [&_blockquote]:text-foreground-subtle [&_blockquote]:my-6 [&_img]:rounded-card [&_img]:my-8 [&_strong]:text-foreground-primary [&_strong]:font-semibold [&_table]:w-full [&_table]:my-6 [&_th]:text-start [&_th]:border-b [&_th]:border-black/15 [&_th]:py-2 [&_td]:border-b [&_td]:border-black/5 [&_td]:py-2"
              dangerouslySetInnerHTML={{ __html: articleHtml }}
            />
            {/* Author box — E-E-A-T signal */}
            <aside className="mt-12 flex items-start gap-5 rounded-card border border-black/10 bg-background-soft p-6 mobile:flex-col">
              <Image
                src="/images/site/logo_payoff.svg"
                alt=""
                width={343}
                height={274}
                className="h-[48px] w-auto shrink-0"
              />
              <div>
                <p className="font-jost text-[13px] font-medium uppercase tracking-[0.15em] text-foreground-subtle mb-1">
                  Written by
                </p>
                <p className="font-anegra text-[18px] font-semibold text-foreground-primary mb-2">{post.author}</p>
                <p className="font-work-sans text-[14px] leading-[1.7] text-foreground-body">
                  The CA Agency editorial team draws on 3,000+ influencer campaigns run for global
                  brands across Instagram, TikTok, and YouTube, with deep specialism in beauty and
                  Korean skincare (K-beauty).{' '}
                  <Link href="/contact" className="font-medium underline decoration-current/30 underline-offset-4 transition-colors hover:decoration-current">
                    Work with us
                  </Link>
                </p>
              </div>
            </aside>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Posts */}
      <RelatedPosts currentSlug={slug} categories={post.categories} tags={post.tags} />

      {/* CTA */}
      <section className="bg-background-base py-[80px] px-section-x border-t border-black/5">
        <ScrollReveal yOffset={24} className="max-w-container mx-auto text-center">
          <Heading as="h2" color="dark" className="mb-6 text-[40px] mobile:text-[28px]">
            Ready to Work With Us?
          </Heading>
          <Text color="dark" size="lg" className="max-w-[600px] mx-auto mb-8 opacity-80">
            Let's create an influencer campaign that drives real results for your brand.
          </Text>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/contact">Get Started</Button>
            <Button href="/blog" variant="dark">View All Posts</Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
