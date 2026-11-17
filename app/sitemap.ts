import { MetadataRoute } from 'next'
import { talentCoverSrc } from '@/lib/data/talent-cards'
import { prisma } from '@/lib/prisma'
import { routing } from '@/i18n/routing'
import { caseStudies, caseStudyStill } from '@/lib/data/case-studies'
import caseStudyDates from '@/lib/data/case-study-dates.json'
import { services } from '@/lib/data/services'
import { locationPages } from '@/lib/data/locations'
import { locationPageLanguages } from '@/lib/routing-helpers'
import { livePostsWhere } from '@/lib/blog-posts'
import { isIndexableTalentProfile } from '@/lib/seo/talents'
import { resolveFeaturedImage } from '@/lib/blog-cover'
import { blogIndexLanguages, getTranslatedPost, postLanguages, translatedPosts, translationLocales } from '@/lib/blog-translations'

// Cache the sitemap for 1 hour so crawlers don't hammer the DB on every fetch.
// Prisma calls are compatible with ISR; force-dynamic is not needed here.
export const revalidate = 3600

const baseUrl = 'https://caagency.com'
const locales = routing.locales
const defaultLocale = routing.defaultLocale

// Image sitemap entries need absolute URLs; uploads may already be absolute.
function absoluteImage(src: string | null | undefined): string[] {
  if (!src) return []
  return [src.startsWith('http') ? src : `${baseUrl}${src}`]
}

// Helper to generate URL for a specific locale
function getLocalizedUrl(path: string, locale: string): string {
  if (locale === defaultLocale) {
    return path ? `${baseUrl}/${path}` : baseUrl
  }
  return path ? `${baseUrl}/${locale}/${path}` : `${baseUrl}/${locale}`
}

// Helper to generate alternates for all locales
function generateAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {
    'x-default': getLocalizedUrl(path, defaultLocale),
  }
  for (const locale of locales) {
    languages[locale] = getLocalizedUrl(path, locale)
  }
  return languages
}

// Entries for routes under app/[locale]/ (localized)
function createLocalizedEntries(
  path: string,
  options: {
    lastModified?: Date
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
    priority: number
  }
): MetadataRoute.Sitemap {
  const alternates = { languages: generateAlternates(path) }
  return locales.map((locale) => ({
    url: getLocalizedUrl(path, locale),
    ...(options.lastModified ? { lastModified: options.lastModified } : {}),
    changeFrequency: options.changeFrequency,
    priority: options.priority,
    alternates,
  }))
}

// Single entry for English-only routes (app/(site)/, excluded from proxy)
function createDefaultOnlyEntry(
  path: string,
  options: {
    lastModified?: Date
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
    priority: number
    images?: string[]
  }
): MetadataRoute.Sitemap[0] {
  return {
    url: path ? `${baseUrl}/${path}` : baseUrl,
    ...(options.lastModified ? { lastModified: options.lastModified } : {}),
    ...(options.images?.length ? { images: options.images } : {}),
    changeFrequency: options.changeFrequency,
    priority: options.priority,
  }
}

async function getTalentSlugs() {
  try {
    const talents = await prisma.talent.findMany({
      select: { slug: true, updatedAt: true, bio: true, imageUrl: true },
    })
    return talents.filter((talent) => isIndexableTalentProfile(talent.bio))
  } catch (error) {
    console.error('[sitemap] talent query failed; talent URLs omitted', error)
    return []
  }
}

async function getPublishedPosts() {
  try {
    const posts = await prisma.post.findMany({
      where: livePostsWhere(),
      select: { slug: true, updatedAt: true, featuredImage: true },
    })
    return posts
  } catch (error) {
    console.error('[sitemap] post query failed; blog URLs omitted', error)
    return []
  }
}

// The five service subpages shipped with the July 2026 round-3 revisions.
const SERVICES_LAST_MODIFIED = new Date('2026-07-09')

// Day each case study last changed, from git history (scripts/build-case-study-dates.py).
// A study without a date gets no <lastmod> rather than a guessed one.
function caseStudyLastModified(slug: string): Date | undefined {
  const day = (caseStudyDates as Record<string, string>)[slug]
  return day ? new Date(day) : undefined
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [talents, posts] = await Promise.all([getTalentSlugs(), getPublishedPosts()])

  // Localized pages (exist under app/[locale]/)
  const localizedPages = [
    { path: '', changeFrequency: 'monthly' as const, priority: 1 },
    { path: 'about', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: 'talents', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: 'work', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: 'services', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: 'contact', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: 'faq', changeFrequency: 'monthly' as const, priority: 0.6 },
  ]

  // English-only pages (app/(site)/, excluded from i18n proxy)
  const defaultOnlyPages = [
    { path: 'privacy-policy', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: 'terms-of-service', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: 'business-license', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: 'blog', changeFrequency: 'weekly' as const, priority: 0.7 },
    { path: 'case-studies', changeFrequency: 'monthly' as const, priority: 0.8 },
  ]

  const localizedEntries = localizedPages.flatMap((page) =>
    createLocalizedEntries(page.path, {
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })
  )

  const defaultOnlyEntries = [
    ...defaultOnlyPages.flatMap((page) => {
      const entry = createDefaultOnlyEntry(page.path, {
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      })
      if (page.path !== 'blog') return [entry]
      // The blog index also exists in German and French (app/[locale]/blog/page.tsx).
      const alternates = { languages: blogIndexLanguages(baseUrl) }
      return [
        { ...entry, alternates },
        ...Object.keys(translatedPosts).map((locale) => ({ ...entry, url: `${baseUrl}/${locale}/blog`, alternates })),
      ]
    }),
    ...locationPages.flatMap(({ path }) => {
      const entry = createDefaultOnlyEntry(path.slice(1), {
        changeFrequency: 'monthly',
        priority: 0.8,
      })
      // English plus each translated version (Arabic Gulf pages, German and French market pages).
      const languages = locationPageLanguages(path, baseUrl)
      const translated = Object.entries(languages).filter(([locale]) => locale !== 'x-default' && locale !== 'en')
      if (translated.length === 0) return [entry]
      const alternates = { languages }
      return [{ ...entry, alternates }, ...translated.map(([, url]) => ({ ...entry, url, alternates }))]
    }),
    ...caseStudies.map((cs) =>
      createDefaultOnlyEntry(`case-studies/${cs.slug}`, {
        lastModified: caseStudyLastModified(cs.slug),
        changeFrequency: 'monthly',
        priority: 0.7,
        images: absoluteImage(caseStudyStill(cs)),
      })
    ),
    ...services.map((service) =>
      createDefaultOnlyEntry(`services/${service.slug}`, {
        lastModified: SERVICES_LAST_MODIFIED,
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    ),
    ...talents.map((talent) =>
      createDefaultOnlyEntry(`talents/${talent.slug}`, {
        lastModified: talent.updatedAt,
        changeFrequency: 'monthly',
        priority: 0.7,
        images: absoluteImage(talentCoverSrc(talent.slug, talent.imageUrl)),
      })
    ),
    ...posts.flatMap((post) => {
      const entry = createDefaultOnlyEntry(`blog/${post.slug}`, {
        lastModified: post.updatedAt,
        changeFrequency: 'weekly',
        priority: 0.6,
        images: absoluteImage(resolveFeaturedImage(post)),
      })
      // German and French versions of a guide (lib/blog-translations), with hreflang.
      const translations = translationLocales(post.slug)
      if (translations.length === 0) return [entry]
      const alternates = { languages: postLanguages(post.slug, baseUrl) }
      return [
        { ...entry, alternates },
        ...translations.map((locale) => ({
          ...entry,
          url: `${baseUrl}/${locale}/blog/${post.slug}`,
          lastModified: new Date(getTranslatedPost(locale, post.slug)!.updatedAt),
          alternates,
        })),
      ]
    }),
  ]

  return [...localizedEntries, ...defaultOnlyEntries]
}
