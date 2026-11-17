import '@/app/public-utilities.css'
import { cache } from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import TalentProfile from '@/components/site/TalentProfile'
import { prisma } from '@/lib/prisma'
import { talentCoverSrc } from '@/lib/data/talent-cards'
import { caseStudiesForCreator } from '@/lib/data/case-studies'
import { translateCaseStudy, translatedCaseStudies } from '@/lib/data/case-studies-translated'
import { translatedBio, translatedPeople } from '@/lib/data/people-translated'
import { currentCaseStudies } from '@/lib/data/redesign-media'
import { translatedPageLanguages } from '@/lib/routing-helpers'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { organizationRef } from '@/lib/seo/schema'
import { isIndexableTalentProfile, talentMetaDescription } from '@/lib/seo/talents'
import { jsonLdSafe } from '@/lib/sanitize'

// Talent profiles in each translated language. Labels and bios come from
// lib/data/people-translated; a talent without a (current) translated bio
// shows the English bio. Same data reads and caching as the English page.

interface PageProps {
  params: Promise<{ locale: string; slug: string }>
}

const baseUrl = 'https://caagency.com'

export const revalidate = 3600

export async function generateStaticParams() {
  try {
    const talents = await prisma.talent.findMany({ select: { slug: true } })
    return Object.keys(translatedPeople).flatMap((locale) => talents.map(({ slug }) => ({ locale, slug })))
  } catch (error) {
    console.error('[talents] generateStaticParams failed, falling back to on-demand ISR', error)
    return []
  }
}

// DB errors propagate on purpose (see the English page): a failed
// regeneration keeps the previous page instead of caching a 404.
const getTalent = cache((slug: string) => prisma.talent.findUnique({ where: { slug } }))

async function getRelatedTalents(category: string, excludeSlug: string) {
  try {
    return await prisma.talent.findMany({
      where: { category, slug: { not: excludeSlug } },
      select: { id: true, slug: true, name: true, imageUrl: true },
      take: 4,
      orderBy: { order: 'asc' },
    })
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const translation = translatedPeople[locale]
  if (!translation) return {}
  try {
    const talent = await getTalent(slug)
    if (!talent) return {}
    const { talentUi: ui } = translation
    const bio = translatedBio(locale, slug, talent.bio) ?? talent.bio
    const metadata = buildPageMetadata({
      title: `${talent.name} - ${talent.category === 'youtube' ? ui.roleYoutube : ui.roleSocial}`,
      description: bio ? talentMetaDescription(bio) : ui.fallbackDescription.replace('{name}', talent.name),
      path: `/talents/${slug}`,
      locale,
      localized: false,
      type: 'profile',
      image: talentCoverSrc(slug, talent.imageUrl),
      imageAlt: talent.name,
    })
    const withLanguages = {
      ...metadata,
      alternates: { canonical: `${baseUrl}/${locale}/talents/${slug}`, languages: translatedPageLanguages(`/talents/${slug}`) },
    }
    return isIndexableTalentProfile(talent.bio) ? withLanguages : { ...withLanguages, robots: { index: false, follow: true } }
  } catch {
    return {}
  }
}

export default async function TranslatedTalentPage({ params }: PageProps) {
  const { locale, slug } = await params
  const translation = translatedPeople[locale]
  if (!translation) notFound()
  const talent = await getTalent(slug)
  if (!talent) notFound()
  setRequestLocale(locale)

  const { talentUi: ui } = translation
  const bio = translatedBio(locale, slug, talent.bio) ?? talent.bio
  const relatedTalents = await getRelatedTalents(talent.category, slug)

  // This talent's case studies: the ones on the Work page first, then older ones.
  const listed = new Set(currentCaseStudies())
  const campaigns = caseStudiesForCreator([talent.instagramUrl, talent.tiktokUrl])
    .sort((a, b) => Number(listed.has(b)) - Number(listed.has(a)))
    .map((study) => translateCaseStudy(locale, study) ?? study)

  const profileUrl = `${baseUrl}/${locale}/talents/${talent.slug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: profileUrl,
    inLanguage: locale,
    dateModified: talent.updatedAt.toISOString(),
    mainEntity: {
      '@type': 'Person',
      name: talent.name,
      url: profileUrl,
      image: talentCoverSrc(talent.slug, talent.imageUrl),
      description: bio || ui.fallbackBio.replace('{name}', talent.name),
      jobTitle: talent.category === 'youtube' ? ui.roleYoutube : ui.roleSocial,
      // Represented by the agency, not employed by it.
      affiliation: organizationRef,
      sameAs: [talent.instagramUrl, talent.tiktokUrl, talent.youtubeUrl, talent.twitchUrl, talent.kickUrl].filter(Boolean),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(jsonLd) }} />
      <TalentProfile
        talent={talent}
        bio={bio}
        relatedTalents={relatedTalents}
        campaigns={campaigns}
        ui={ui}
        caseStudyUi={translatedCaseStudies[locale].ui}
        locale={locale}
      />
    </>
  )
}
