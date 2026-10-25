import Heading from '@/components/ui/Heading'
import type { Locale } from '@/i18n/config'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import TalentGrid from '@/components/blocks/TalentGrid'
import BrandCarousel from '@/components/blocks/BrandCarousel'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import { getTranslations } from 'next-intl/server'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { brandLogos } from '@/lib/data/brands'
import HeadingAccent from '@/components/ui/HeadingAccent'

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

  const instagramTalents = allTalents
    .filter((talent) => talent.category === 'instagram')
    .map((talent) => ({
      slug: talent.slug,
      name: talent.name,
      imageUrl: talent.imageUrl,
      instagramUrl: talent.instagramUrl || undefined,
      tiktokUrl: talent.tiktokUrl || undefined,
      youtubeUrl: talent.youtubeUrl || undefined,
      twitchUrl: talent.twitchUrl || undefined,
      kickUrl: talent.kickUrl || undefined,
    }))

  const youtubeTalents = allTalents
    .filter((talent) => talent.category === 'youtube')
    .map((talent) => ({
      slug: talent.slug,
      name: talent.name,
      imageUrl: talent.imageUrl,
      instagramUrl: talent.instagramUrl || undefined,
      tiktokUrl: talent.tiktokUrl || undefined,
      youtubeUrl: talent.youtubeUrl || undefined,
      twitchUrl: talent.twitchUrl || undefined,
      kickUrl: talent.kickUrl || undefined,
    }))

  return (
    <>
      {/* Hero Section — CSS load-in (LCP-safe) */}
      <section className="relative overflow-hidden bg-background-base py-[80px] tablet:py-[60px] mobile:py-[50px] px-section-x">
        <div className="relative z-[1] max-w-container mx-auto">
          <div className="max-w-[900px]">
            <Heading as="h1" color="dark" className="hero-rise-media mb-8 text-[48px] tablet:text-[40px] mobile:text-[30px] leading-[1.2]">
              {t('heading')}
            </Heading>
            <div className="hero-rise hero-rise-2 space-y-6">
              <Text color="dark" size="base" className="text-[16px] leading-[28px] tracking-normal">
                {t('subheading')}
              </Text>
            </div>
          </div>
        </div>
      </section>

      {/* Section Title with underline */}
      <section className="bg-background-base pb-[40px] px-section-x">
        <div className="max-w-container mx-auto">
          <h2 className="font-anegra text-[30px] tablet:text-[26px] mobile:text-[22px] font-semibold tracking-[0] text-center">
            <span className="text-foreground-primary">{t('shortStylish')}</span>{' '}
            <span className="text-foreground-primary">{t('instagramTikTok')}</span>
          </h2>
          <HeadingAccent className="mt-5" />
          {/* Horizontal divider line */}
          <div className="mt-8 border-t border-black/10" />
        </div>
      </section>

      {/* Instagram & TikTok Voices Grid */}
      <section className="bg-background-base py-[60px] tablet:py-[50px] mobile:py-[40px] px-section-x">
        <div className="max-w-container mx-auto">
          <TalentGrid talents={instagramTalents} columns={4} prioritizeFirst animate={false} />
        </div>
      </section>

      {/* YouTube Voices Section */}
      <section className="bg-background-base py-section-y-desktop mobile:py-[50px] px-section-x">
        <div className="max-w-container mx-auto">
          <h2 className="font-anegra text-[30px] tablet:text-[26px] mobile:text-[22px] font-semibold tracking-[0] mb-8">
            <span className="text-foreground-primary inline-flex items-center gap-3">
              {t('youtubeVoices')}
              <svg className="inline-block w-10 h-10" viewBox="0 0 576 512" fill="#FF0000" aria-label="YouTube">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
              </svg>
            </span>{' '}
            <span className="text-foreground-primary">{t('moreTalents')}</span>
          </h2>
          <TalentGrid talents={youtubeTalents} columns={4} animate={false} />
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
