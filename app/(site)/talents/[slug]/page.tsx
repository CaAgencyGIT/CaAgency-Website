import '@/app/public-utilities.css'
import { cache } from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import Heading from '@/components/ui/Heading'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import ShareButtons from '@/components/ui/ShareButtons'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { organizationRef } from '@/lib/seo/schema'
import { isIndexableTalentProfile, talentMetaDescription } from '@/lib/seo/talents'
import { jsonLdSafe } from '@/lib/sanitize'
import { caseStudiesForCreator } from '@/lib/data/case-studies'
import { currentCaseStudies } from '@/lib/data/redesign-media'
import CaseStudyCard from '@/components/blocks/CaseStudyCard'

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
    const description = (talent.bio && talentMetaDescription(talent.bio)) ||
      `${talent.name} is ${talent.category === 'youtube' ? 'a YouTube creator' : 'an Instagram and TikTok creator'} represented by CA Agency. Explore their content, audience, and brand partnership opportunities.`

    const metadata = buildPageMetadata({
      title,
      description,
      path: `/talents/${slug}`,
      localized: false,
      type: 'profile',
      image: talent.imageUrl,
      imageAlt: talent.name,
      keywords: [
        talent.name,
        `${talent.name} Instagram`,
        `${talent.name} TikTok`,
        'influencer Dubai',
        'content creator UAE',
        talent.category === 'youtube' ? 'YouTube creator' : 'Instagram influencer',
      ],
    })

    return isIndexableTalentProfile(talent.bio)
      ? metadata
      : { ...metadata, robots: { index: false, follow: true } }
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
      image: talent.imageUrl,
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

      {/* Hero Section */}
      <section className="bg-background-base py-[80px] tablet:py-[60px] mobile:py-[50px] px-section-x">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="w-full lg:w-1/2 max-w-[500px]">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src={talent.imageUrl}
                  alt={talent.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <Heading as="h1" color="dark" className="mb-4 text-[48px] tablet:text-[40px] mobile:text-[32px]">
                {talent.name}
              </Heading>

              <Text color="dark" size="sm" className="mb-2 opacity-60 uppercase tracking-widest">
                {talent.category === 'youtube' ? 'YouTube Creator' : 'Instagram & TikTok Influencer'}
              </Text>

              {talent.bio && (
                <Text color="dark" size="base" className="mb-8 opacity-80 leading-relaxed">
                  {talent.bio}
                </Text>
              )}

              {!talent.bio && (
                <Text color="dark" size="base" className="mb-8 opacity-80 leading-relaxed">
                  {talent.name} is a talented content creator represented by CA Agency.
                  Known for creating engaging content that resonates with audiences across social media platforms.
                </Text>
              )}

              {/* Share Buttons */}
              <div className="mb-8">
                <ShareButtons
                  url={`https://caagency.com/talents/${slug}`}
                  title={`${talent.name} | CA Agency`}
                  description={talent.bio || `Check out ${talent.name}, a talented creator at CA Agency`}
                />
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4">
                {talent.instagramUrl && (
                  <a
                    href={talent.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-full hover:opacity-90 transition-opacity"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                )}
                {talent.tiktokUrl && (
                  <a
                    href={talent.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-black/80 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                    </svg>
                    TikTok
                  </a>
                )}
                {talent.youtubeUrl && (
                  <a
                    href={talent.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    YouTube
                  </a>
                )}
                {talent.twitchUrl && (
                  <a
                    href={talent.twitchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                  >
                    Twitch
                  </a>
                )}
              </div>

              {/* CTA */}
              <div className="mt-10 pt-8 border-t border-black/10">
                <Text color="dark" size="sm" className="mb-4 opacity-60">
                  Interested in collaborating with {talent.name}?
                </Text>
                <Button href="/contact">Get in Touch</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaigns */}
      {campaigns.length > 0 && (
        <section className="bg-background-soft py-[80px] mobile:py-[50px] px-section-x border-t border-black/5">
          <div className="max-w-container mx-auto">
            <Heading as="h2" color="dark" className="mb-10 text-[32px] mobile:mb-6 mobile:text-[24px]">
              Campaigns with CA Agency
            </Heading>
            <div className="grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-[20px]">
              {campaigns.map((cs) => (
                <CaseStudyCard key={cs.slug} study={cs} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Talents */}
      {relatedTalents.length > 0 && (
        <section className="bg-background-base py-[80px] px-section-x border-t border-black/5">
          <div className="max-w-container mx-auto">
            <Heading as="h2" color="dark" className="mb-10 text-[32px]">
              More {talent.category === 'youtube' ? 'YouTube Creators' : 'Talents'}
            </Heading>
            <div className="grid grid-cols-4 tablet:grid-cols-2 mobile:grid-cols-2 gap-6">
              {relatedTalents.map((related) => (
                <Link
                  key={related.id}
                  href={`/talents/${related.slug}`}
                  className="group"
                >
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-3">
                    <Image
                      src={related.imageUrl}
                      alt={related.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 1024px) 50vw, 310px"
                    />
                  </div>
                  <Text color="dark" size="sm" className="font-medium group-hover:text-foreground-subtle transition-colors">
                    {related.name}
                  </Text>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Talents */}
      <section className="bg-background-base py-[50px] px-section-x border-t border-black/5">
        <div className="max-w-container mx-auto text-center">
          <Button href="/talents" variant="dark">
            ← Back to All Talents
          </Button>
        </div>
      </section>
    </>
  )
}
