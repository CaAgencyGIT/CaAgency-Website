import '@/app/public-utilities.css'
import { cache } from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { setRequestLocale } from 'next-intl/server'
import { prisma } from '@/lib/prisma'
import Heading from '@/components/ui/Heading'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { resolveFeaturedImage } from '@/lib/blog-cover'
import { jsonLdSafe, sanitizeTrustedHtml } from '@/lib/sanitize'
import { blogPostingJsonLd } from '@/lib/seo/schema'
import { readingTimeMinutes, withHeadingAnchors } from '@/lib/blog-html'
import { getTranslatedPost, postLanguages, translatedPosts } from '@/lib/blog-translations'
import type { Locale } from '@/i18n/config'

// German and French versions of selected blog guides (lib/blog-translations).
// The text is in code; dates, author and cover come from the English post, and
// the page 404s while that post is not live.

interface PageProps {
  params: Promise<{ locale: string; slug: string }>
}

const baseUrl = 'https://caagency.com'
const DEFAULT_IMAGE = '/images/site/og-cover-v2.jpg'

// DB errors propagate on purpose: under ISR a failed regeneration keeps the
// previous page, whereas swallowing to null would cache a 404 for an hour.
const getEnglishPost = cache((slug: string) => prisma.post.findUnique({ where: { slug } }))

export const revalidate = 3600

export function generateStaticParams() {
  return Object.entries(translatedPosts).flatMap(([locale, { posts }]) =>
    posts.map((post) => ({ locale, slug: post.slug }))
  )
}

function isLive(post: { status: string; publishedAt: Date | null }) {
  return post.status === 'published' && !(post.publishedAt && post.publishedAt > new Date())
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const translation = getTranslatedPost(locale, slug)
  const english = translation ? await getEnglishPost(slug) : null
  if (!translation || !english || !isLive(english)) return {}

  const metadata = buildPageMetadata({
    title: translation.seoTitle ?? translation.title,
    description: translation.excerpt,
    path: `/blog/${slug}`,
    locale,
    localized: false,
    type: 'article',
    image: resolveFeaturedImage(english) ?? DEFAULT_IMAGE,
    imageAlt: translation.title,
  })

  return {
    ...metadata,
    alternates: { canonical: `${baseUrl}/${locale}/blog/${slug}`, languages: postLanguages(slug) },
    openGraph: {
      ...metadata.openGraph,
      type: 'article' as const,
      publishedTime: (english.publishedAt ?? english.createdAt).toISOString(),
      modifiedTime: english.updatedAt.toISOString(),
      authors: [english.author],
    },
  }
}

export default async function TranslatedBlogPostPage({ params }: PageProps) {
  const { locale, slug } = await params
  const translation = getTranslatedPost(locale, slug)
  if (!translation) notFound()
  setRequestLocale(locale)

  const english = await getEnglishPost(slug)
  if (!english || !isLive(english)) notFound()

  const { labels } = translatedPosts[locale]
  const { processed: articleHtml, toc } = withHeadingAnchors(sanitizeTrustedHtml(translation.content))
  const minutes = readingTimeMinutes(translation.content)
  const coverImage = resolveFeaturedImage(english)
  const url = `${baseUrl}/${locale}/blog/${slug}`
  const published = english.publishedAt ?? english.createdAt

  const articleSchema = {
    ...blogPostingJsonLd({
      ...english,
      title: translation.title,
      description: translation.excerpt,
      image: coverImage ?? DEFAULT_IMAGE,
      tags: [],
      categories: translation.categories,
    }),
    '@id': `${url}#article`,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    inLanguage: locale,
    translationOfWork: { '@id': `${baseUrl}/blog/${slug}#article` },
  }

  return (
    <>
      <script type="application/ld+json">{jsonLdSafe(articleSchema)}</script>

      {/* Hero — CSS load-in (LCP-safe) */}
      <section className="relative overflow-hidden bg-background-base py-[80px] tablet:py-[60px] mobile:py-[50px] px-section-x">
        <div className="relative z-[1] max-w-container mx-auto">
          <div className="hero-rise-media max-w-[800px] mx-auto">
            <time dateTime={published.toISOString()} className="text-black/60 text-sm mb-4 block">
              {published.toLocaleDateString(labels.dateLocale, { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
            <Heading as="h1" color="dark" className="mb-6 text-[48px] tablet:text-[40px] mobile:text-[32px]">
              {translation.title}
            </Heading>
            <Text color="dark" size="lg" className="opacity-80 mb-4">
              {translation.excerpt}
            </Text>
            <div className="flex flex-wrap items-center gap-4 text-black/60 text-sm">
              <span>
                {labels.by} {english.author}
              </span>
              <span>•</span>
              <span>
                {minutes} {labels.minRead}
              </span>
              <span>•</span>
              <div className="flex gap-2">
                {translation.categories.map((category) => (
                  <span key={category} className="px-2 py-1 bg-black/10 rounded-sm">
                    {category}
                  </span>
                ))}
              </div>
              <Link href={`/blog/${slug}`} hrefLang="en" lang="en" className="underline underline-offset-4 hover:text-black">
                Read in English
              </Link>
            </div>
          </div>
        </div>
      </section>

      {coverImage && (
        <section className="bg-background-base px-section-x pb-[40px]">
          <div className="max-w-container mx-auto">
            <div className="hero-rise-media max-w-[1000px] mx-auto">
              <div
                className={`relative w-full rounded-card overflow-hidden ring-1 ring-black/5 shadow-e3 ${
                  english.featuredImage ? 'aspect-video' : 'aspect-[1200/630]'
                }`}
              >
                <Image src={coverImage} alt={translation.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 1000px" preload />
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-background-base py-[60px] px-section-x">
        <div className="max-w-container mx-auto">
          <ScrollReveal yOffset={24} className="max-w-[800px] mx-auto">
            {toc.length >= 3 && (
              <nav aria-label={labels.toc} className="mb-10 rounded-card border border-black/10 bg-background-soft p-6">
                <span className="mb-3 block font-jost text-[13px] font-medium uppercase tracking-[0.2em] text-accent-red">
                  {labels.toc}
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
            <aside className="mt-12 flex items-start gap-5 rounded-card border border-black/10 bg-background-soft p-6 mobile:flex-col">
              <Image src="/images/site/logo_payoff.svg" alt="" width={343} height={274} className="h-[48px] w-auto shrink-0" />
              <div>
                <p className="font-jost text-[13px] font-medium uppercase tracking-[0.15em] text-foreground-subtle mb-1">
                  {labels.writtenBy}
                </p>
                <p className="font-anegra text-[18px] font-semibold text-foreground-primary mb-2">{english.author}</p>
                <p className="font-work-sans text-[14px] leading-[1.7] text-foreground-body">
                  {labels.authorBio}{' '}
                  <Link
                    href={`/${locale}/contact`}
                    className="font-medium underline decoration-current/30 underline-offset-4 transition-colors hover:decoration-current"
                  >
                    {labels.workWithUs}
                  </Link>
                </p>
              </div>
            </aside>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-background-base py-[80px] px-section-x border-t border-black/5">
        <ScrollReveal yOffset={24} className="max-w-container mx-auto text-center">
          <Heading as="h2" color="dark" className="mb-6 text-[40px] mobile:text-[28px]">
            {labels.ctaTitle}
          </Heading>
          <Text color="dark" size="lg" className="max-w-[600px] mx-auto mb-8 opacity-80">
            {labels.ctaText}
          </Text>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button locale={locale as Locale} href="/contact">
              {labels.ctaButton}
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
