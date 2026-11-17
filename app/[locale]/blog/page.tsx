import '@/app/public-utilities.css'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { setRequestLocale } from 'next-intl/server'
import Heading from '@/components/ui/Heading'
import Text from '@/components/ui/Text'
import Stagger from '@/components/ui/motion/Stagger'
import StaggerItem from '@/components/ui/motion/StaggerItem'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { resolveFeaturedImage } from '@/lib/blog-cover'
import { jsonLdSafe } from '@/lib/sanitize'
import { organizationRef } from '@/lib/seo/schema'
import { blogIndexLanguages, translatedPosts } from '@/lib/blog-translations'

// The German and French blog index: every guide translated into that language
// (lib/blog-translations). Like the guides it reads no database, so it builds
// the same in CI and in production. Other locales have no index: the
// middleware sends /<locale>/blog to the English /blog.

interface PageProps {
  params: Promise<{ locale: string }>
}

const baseUrl = 'https://caagency.com'

export const revalidate = 3600

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const entry = translatedPosts[locale]
  if (!entry) return {}
  const metadata = buildPageMetadata({
    title: entry.labels.indexTitle,
    description: entry.labels.indexDescription,
    path: '/blog',
    locale,
    localized: false,
  })
  return { ...metadata, alternates: { canonical: `${baseUrl}/${locale}/blog`, languages: blogIndexLanguages() } }
}

export default async function TranslatedBlogIndexPage({ params }: PageProps) {
  const { locale } = await params
  const entry = translatedPosts[locale]
  if (!entry) notFound()
  setRequestLocale(locale)

  const { labels, posts } = entry
  const url = `${baseUrl}/${locale}/blog`
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${url}#blog`,
    name: labels.indexHeading,
    url,
    inLanguage: locale,
    publisher: organizationRef,
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      '@id': `${url}/${post.slug}#article`,
      headline: post.title,
      url: `${url}/${post.slug}`,
      datePublished: new Date(post.publishedAt).toISOString(),
    })),
  }

  return (
    <>
      <script type="application/ld+json">{jsonLdSafe(blogSchema)}</script>

      <section className="bg-background-base py-[100px] tablet:py-[80px] mobile:pt-[40px] mobile:pb-[24px] px-section-x">
        <div className="max-w-container mx-auto text-center">
          <Heading as="h1" color="dark" className="mb-6 text-[56px] tablet:text-[44px] mobile:mb-3 mobile:text-[30px]">
            {labels.indexHeading}
          </Heading>
          <Text color="dark" size="lg" className="max-w-[700px] mx-auto opacity-80 mobile:text-[14.5px] mobile:leading-[1.65]">
            {labels.indexIntro}
          </Text>
        </div>
      </section>

      {/* Same card as the English blog: cover, date and title, plus the excerpt. */}
      <section className="bg-background-base py-[80px] mobile:pt-[16px] mobile:pb-[56px] px-section-x">
        <div className="max-w-container mx-auto">
          <Stagger className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 mobile:gap-x-3 mobile:gap-y-6" stagger={0.08}>
            {posts.map((post, index) => {
              const cover = resolveFeaturedImage({ slug: post.slug })
              const href = `/${locale}/blog/${post.slug}`
              return (
                <StaggerItem key={post.slug} className="h-full">
                  <article className="group relative h-full">
                    {cover && (
                      <Link href={href} prefetch={false} tabIndex={-1} aria-hidden="true">
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] ring-1 ring-black/5 transition-shadow duration-500 group-hover:shadow-e3 mobile:rounded-[12px]">
                          <Image
                            src={cover}
                            alt=""
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            sizes="(max-width: 767px) 50vw, (max-width: 1024px) 50vw, 420px"
                            preload={index === 0}
                            loading={index < 3 ? 'eager' : 'lazy'}
                          />
                        </div>
                      </Link>
                    )}
                    <div className="px-0.5 pt-4 mobile:pt-2.5">
                      <time dateTime={new Date(post.publishedAt).toISOString()} className="font-work-sans text-[13px] text-black/55 mobile:text-[11px]">
                        {new Date(post.publishedAt).toLocaleDateString(labels.dateLocale, { year: 'numeric', month: 'long', day: 'numeric' })}
                      </time>
                      <Link href={href} prefetch={false}>
                        <Heading
                          as="h2"
                          color="dark"
                          className="mt-1.5 text-[20px] leading-[1.3] hover:text-foreground-subtle transition-colors mobile:mt-1 mobile:text-[14.5px]"
                        >
                          {post.title}
                        </Heading>
                      </Link>
                      <p className="mt-2 font-work-sans text-[14px] leading-[1.6] text-foreground-body mobile:hidden">{post.excerpt}</p>
                    </div>
                  </article>
                </StaggerItem>
              )
            })}
          </Stagger>
          <p className="mt-14 text-center mobile:mt-10">
            <Link href="/blog" hrefLang="en" prefetch={false} className="text-foreground-primary underline underline-offset-4">
              {labels.englishBlog} →
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
