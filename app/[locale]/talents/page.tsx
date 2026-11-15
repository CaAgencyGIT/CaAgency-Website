import '@/app/public-utilities.css'
import Heading from '@/components/ui/Heading'
import type { Locale } from '@/i18n/config'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import TalentDirectory from '@/components/blocks/TalentDirectory'
import TalentGrid from '@/components/blocks/TalentGrid'
import { talentCardArt } from '@/lib/data/talent-cards'
import BrandCarousel from '@/components/blocks/BrandCarousel'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import { getTranslations } from 'next-intl/server'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { brandLogos } from '@/lib/data/brands'

export const revalidate = 600

// Brand logos

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'talents' })

  return buildPageMetadata({
    title: t('title'),
    description: t('description'),
    locale,
    path: '/talents',
    keywords: [
      'influencers Dubai',
      'content creators',
      'Instagram influencers',
      'TikTok creators',
      'YouTube influencers',
      'beauty influencers',
      'fashion influencers',
      'lifestyle creators',
    ],
    imageAlt: 'CA Agency Talents',
  })
}

async function getTalents() {
  try {
    const talents = await prisma.talent.findMany({
      orderBy: [
        { category: 'asc' },
        { order: 'asc' },
      ],
      select: {
        slug: true,
        name: true,
        imageUrl: true,
        category: true,
        instagramUrl: true,
        tiktokUrl: true,
        youtubeUrl: true,
        twitchUrl: true,
        kickUrl: true,
      },
    })
    return talents
  } catch (error) {
    console.error('Error fetching talents:', error)
    return []
  }
}

export default async function TalentsPage({ params }: Props) {
  const { locale } = await params
  const [t, tCommon, allTalents] = await Promise.all([
    getTranslations({ locale, namespace: 'talents' }),
    getTranslations({ locale, namespace: 'common' }),
    getTalents(),
  ])

  const toCard = (talent: (typeof allTalents)[number]) => ({
    slug: talent.slug,
    name: talent.name,
    imageUrl: talent.imageUrl,
    instagramUrl: talent.instagramUrl || undefined,
    tiktokUrl: talent.tiktokUrl || undefined,
    youtubeUrl: talent.youtubeUrl || undefined,
    twitchUrl: talent.twitchUrl || undefined,
    kickUrl: talent.kickUrl || undefined,
  })

  // One roster: the Instagram & TikTok talents, then the YouTube talents,
  // each in their existing order.
  const instagramRoster = allTalents.filter((talent) => talent.category === 'instagram').map(toCard)
  const youtubeRoster = allTalents.filter((talent) => talent.category === 'youtube').map(toCard)
  const roster = [...instagramRoster, ...youtubeRoster]

  return (
    <>
      {/* Hero Section — CSS load-in (LCP-safe) */}
      <section className="relative overflow-hidden bg-white pt-[72px] pb-[36px] tablet:pt-[56px] tablet:pb-[28px] mobile:pt-[28px] mobile:pb-[20px] px-section-x">
        <div className="relative z-[1] max-w-container mx-auto">
          <p className="hero-rise mb-4 mobile:mb-3 font-work-sans text-[12px] font-medium uppercase tracking-[0.24em] rtl:tracking-normal text-[#666666]">
            {t('eyebrow')}
          </p>
          <div className="flex items-center gap-8 tablet:gap-6 mobile:flex-col mobile:items-start mobile:gap-3">
            <Heading as="h1" color="dark" className="hero-rise-media shrink-0 text-[48px] tablet:text-[40px] mobile:text-[30px] leading-[1.15]">
              {t('heading')}
            </Heading>
            <span aria-hidden="true" className="w-px self-stretch bg-[#DCDCDC] my-1 mobile:hidden" />
            <Text color="dark" size="base" className="hero-rise hero-rise-2 max-w-[440px] text-[16px] leading-[26px] tracking-normal text-[#666666] mobile:max-w-none mobile:text-[15px] mobile:leading-[24px]">
              {t('subheading')}
            </Text>
          </div>
        </div>
      </section>

      {/* Talent roster with search */}
      <section className="bg-white pt-[8px] pb-[60px] tablet:pb-[50px] mobile:pt-0 mobile:pb-[40px] px-section-x">
        <div className="max-w-container mx-auto">
          <TalentDirectory
            // Search by the record name and the name printed on the card.
            entries={roster.map((talent) => ({
              slug: talent.slug,
              names: [talent.name, talentCardArt[talent.slug]?.name].filter((n): n is string => Boolean(n)),
            }))}
            labels={{
              search: t('searchLabel'),
              placeholder: t('searchPlaceholder'),
              clear: t('clearSearch'),
              noResults: t.raw('noResults') as string,
            }}
          >
            <TalentGrid talents={instagramRoster} columns={4} cardArt mobileLayout="list" animate={false} prioritizeFirst />
            {youtubeRoster.length > 0 && (
              // Hidden by the search when none of its talents match.
              <div data-talent-group className="mt-[150px] tablet:mt-[120px] mobile:mt-[88px]">
                <h2 className="mb-8 font-anegra text-[30px] font-semibold tracking-[0] tablet:text-[26px] mobile:mb-6 mobile:text-[22px]">
                  <span className="inline-flex items-center gap-3 text-foreground-primary">
                    {t('youtubeVoices')}
                    <svg className="inline-block h-10 w-10 mobile:h-8 mobile:w-8" viewBox="0 0 576 512" fill="#FF0000" aria-label="YouTube" role="img">
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                    </svg>
                  </span>
                </h2>
                <TalentGrid talents={youtubeRoster} columns={4} cardArt mobileLayout="list" animate={false} />
              </div>
            )}
          </TalentDirectory>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background-base py-[60px] px-section-x">
        <ScrollReveal yOffset={24} className="max-w-container mx-auto text-center">
          <Text color="dark" size="lg" className="mb-6">
            {t('interestedCollaborating')}
          </Text>
          <Button href="/contact" locale={locale as Locale}>{tCommon('getInTouch')}</Button>
        </ScrollReveal>
      </section>

      {/* Brand Carousel */}
      <section className="bg-background-base py-[50px] px-0">
        <BrandCarousel images={brandLogos} />
      </section>
    </>
  )
}
