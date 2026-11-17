import '@/app/public-utilities.css'
import { cache } from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { talentCoverSrc } from '@/lib/data/talent-cards'
import { prisma } from '@/lib/prisma'
import TalentProfile from '@/components/site/TalentProfile'
import { englishTalentUi } from '@/lib/data/talent-ui'
import { englishCaseStudyUi } from '@/lib/data/case-study-ui'
import { translatedPageLanguages } from '@/lib/routing-helpers'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { organizationRef } from '@/lib/seo/schema'
import { isIndexableTalentProfile, talentMetaDescription, talentSeoOverrides } from '@/lib/seo/talents'
import { jsonLdSafe } from '@/lib/sanitize'
import { caseStudiesForCreator } from '@/lib/data/case-studies'
import { currentCaseStudies } from '@/lib/data/redesign-media'

interface TalentPageProps {
  params: Promise<{ slug: string }>
}

export const revalidate = 3600

// Prerenders the roster at build and makes new talents ISR on first hit;
// without this export the route rendered on every request.
export async function generateStaticParams() {
  try {
    const talents = await prisma.talent.findMany({ select: { slug: true } })
    return talents.map(({ slug }) => ({ slug }))
  } catch (error) {
    console.error('[talents] generateStaticParams failed, falling back to on-demand ISR', error)
    return []
  }
}

export async function generateMetadata({ params }: TalentPageProps): Promise<Metadata> {
  const { slug } = await params

  try {
    const talent = await getTalent(slug)

    if (!talent) {
      return {
        title: 'Talent Not Found',
      }
    }

    const role = talent.category === 'youtube' ? 'YouTube Creator' : 'Instagram & TikTok Influencer'
    const title = `${talent.name} - ${role}`
    const seo = talentSeoOverrides[slug]
    const description = seo?.description || (talent.bio && talentMetaDescription(talent.bio)) ||
      `${talent.name} is ${talent.category === 'youtube' ? 'a YouTube creator' : 'an Instagram and TikTok creator'} represented by CA Agency. Explore their content, audience, and brand partnership opportunities.`

    const metadata = buildPageMetadata({
      title,
      description,
      path: `/talents/${slug}`,
      localized: false,
      type: 'profile',
      image: talentCoverSrc(slug, talent.imageUrl),
      imageAlt: talent.name,
      keywords: seo?.keywords ?? [
        talent.name,
        `${talent.name} Instagram`,
        `${talent.name} TikTok`,
        'influencer Dubai',
        'content creator UAE',
        talent.category === 'youtube' ? 'YouTube creator' : 'Instagram influencer',
      ],
    })

    const withLanguages = {
      ...metadata,
      alternates: { canonical: `https://caagency.com/talents/${slug}`, languages: translatedPageLanguages(`/talents/${slug}`) },
    }
    return isIndexableTalentProfile(talent.bio)
      ? withLanguages
      : { ...withLanguages, robots: { index: false, follow: true } }
  } catch {
    return {
      title: 'Talent Not Found',
    }
  }
}

// DB errors propagate on purpose: under ISR a failed regeneration keeps the
// previous page, whereas swallowing to null would cache a 404 for an hour.
const getTalent = cache((slug: string) => prisma.talent.findUnique({ where: { slug } }))

async function getRelatedTalents(category: string, excludeSlug: string) {
  try {
    return await prisma.talent.findMany({
      where: {
        category,
        slug: { not: excludeSlug },
      },
      select: {
        id: true,
        slug: true,
        name: true,
        imageUrl: true,
      },
      take: 4,
      orderBy: { order: 'asc' },
    })
  } catch {
    return []
  }
}

export default async function TalentPage({ params }: TalentPageProps) {
  const { slug } = await params
  const talent = await getTalent(slug)

  if (!talent) {
    notFound()
  }

  const relatedTalents = await getRelatedTalents(talent.category, slug)

  // This talent's case studies: the ones on the Work page first, then older ones.
  const listed = new Set(currentCaseStudies())
  const campaigns = caseStudiesForCreator([talent.instagramUrl, talent.tiktokUrl]).sort(
    (a, b) => Number(listed.has(b)) - Number(listed.has(a)),
  )

  const profileUrl = `https://caagency.com/talents/${talent.slug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: profileUrl,
    dateModified: talent.updatedAt.toISOString(),
    mainEntity: {
      '@type': 'Person',
      name: talent.name,
      url: profileUrl,
      image: talentCoverSrc(talent.slug, talent.imageUrl),
      description: talent.bio || `Content creator and influencer represented by CA Agency`,
      jobTitle: talent.category === 'youtube' ? 'YouTube Creator' : 'Social Media Influencer',
      // Represented by the agency, not employed by it.
      affiliation: organizationRef,
      sameAs: [
        talent.instagramUrl,
        talent.tiktokUrl,
        talent.youtubeUrl,
        talent.twitchUrl,
        talent.kickUrl,
      ].filter(Boolean),
      knowsAbout: ['Content Creation', 'Social Media', 'Influencer Marketing', 'Brand Partnerships'],
    },
  }

  return (
    <>
      <script type="application/ld+json">{jsonLdSafe(jsonLd)}</script>

      <TalentProfile
        talent={talent}
        bio={talent.bio}
        relatedTalents={relatedTalents}
        campaigns={campaigns}
        ui={englishTalentUi}
        caseStudyUi={englishCaseStudyUi}
        locale="en"
      />
    </>
  )
}
