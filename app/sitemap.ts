import { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'
import { routing } from '@/i18n/routing'
import { caseStudies } from '@/lib/data/case-studies'
import { services } from '@/lib/data/services'
import { locationPages } from '@/lib/data/locations'
import { hasLocalizedLocationPage } from '@/lib/routing-helpers'
import { livePostsWhere } from '@/lib/blog-posts'
import { isIndexableTalentProfile } from '@/lib/seo/talents'
import { resolveFeaturedImage } from '@/lib/blog-cover'
import { posterFor } from '@/lib/data/videos'

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
    ...defaultOnlyPages.map((page) =>
      createDefaultOnlyEntry(page.path, {
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      })
    ),
    ...locationPages.flatMap(({ path }) => {
      const entry = createDefaultOnlyEntry(path.slice(1), {
        changeFrequency: 'monthly',
        priority: 0.8,
      })
      if (!hasLocalizedLocationPage(path, 'ar')) return [entry]
      const alternates = {
        languages: { 'x-default': entry.url, en: entry.url, ar: `${baseUrl}/ar${path}` },
      }
      return [
        { ...entry, alternates },
        { ...entry, url: `${baseUrl}/ar${path}`, alternates },
      ]
    }),
    ...caseStudies.map((cs) =>
      createDefaultOnlyEntry(`case-studies/${cs.slug}`, {
        changeFrequency: 'monthly',
        priority: 0.7,
        images: absoluteImage(posterFor(cs.videoSrc)),
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
        images: absoluteImage(talent.imageUrl),
      })
    ),
    ...posts.map((post) =>
      createDefaultOnlyEntry(`blog/${post.slug}`, {
        lastModified: post.updatedAt,
        changeFrequency: 'weekly',
        priority: 0.6,
        images: absoluteImage(resolveFeaturedImage(post)),
      })
    ),
  ]

  return [...localizedEntries, ...defaultOnlyEntries]
}
