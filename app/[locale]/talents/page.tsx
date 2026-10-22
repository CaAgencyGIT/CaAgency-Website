import Link from 'next/link'
import { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import { getTranslations } from 'next-intl/server'
import { buildPageMetadata } from '@/lib/seo/metadata'
import RosterCard, { type RosterTalent } from '@/components/redesign/RosterCard'
import { priorityTalentSlugs, talentFilms } from '@/lib/data/redesign-media'
import { localizeHref } from '@/lib/i18n/client-paths'
export const revalidate = 600


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
  const labels = { play: tCommon('play'), pause: tCommon('pause'), playVideo: tCommon('playVideo'), pauseVideo: tCommon('pauseVideo') }

  const toCard = (talent: (typeof allTalents)[number]): RosterTalent => ({
    slug: talent.slug,
    name: talent.name,
    imageUrl: talent.imageUrl,
    instagramUrl: talent.instagramUrl || undefined,
    tiktokUrl: talent.tiktokUrl || undefined,
    youtubeUrl: talent.youtubeUrl || undefined,
    twitchUrl: talent.twitchUrl || undefined,
    kickUrl: talent.kickUrl || undefined,
  })

  // Redesign: the priority six lead (Albina first), then the rest of the
  // Instagram & TikTok roster in its existing order.
  const instagramTalents = allTalents.filter((talent) => talent.category === 'instagram').map(toCard)
  const priority = priorityTalentSlugs.flatMap((slug) => instagramTalents.filter((talent) => talent.slug === slug))
  const wider = instagramTalents.filter((talent) => !priorityTalentSlugs.includes(talent.slug))
  const youtubeTalents = allTalents.filter((talent) => talent.category === 'youtube').map(toCard)

  return (
    <div className="rd">
      <section className="rd-section rd-page-hero">
        <div>
          <h1>{t('heading')}</h1>
        </div>
        <div className="rd-hero-description">
          <p>{t('subheading')}</p>
        </div>
      </section>

      <section className="rd-section rd-talent-section pt-5">
        <h2>
          {t('shortStylish')} {t('instagramTikTok')}
        </h2>
        <div className="rd-talent-grid rd-priority">
          {priority.map((talent, index) => (
            <RosterCard
              key={talent.slug}
              talent={talent}
              film={talentFilms[talent.slug]}
              priority={index === 0}
              sizes="(max-width: 760px) 50vw, 30vw"
              labels={labels}
            />
          ))}
        </div>
        <div className="rd-talent-grid rd-wider">
          {wider.map((talent) => (
            <RosterCard
              key={talent.slug}
              talent={talent}
              film={talentFilms[talent.slug]}
              sizes="(max-width: 760px) 50vw, 22vw"
              labels={labels}
            />
          ))}
        </div>
      </section>

      {youtubeTalents.length > 0 && (
        <section className="rd-section rd-talent-section rd-secondary rd-rule">
          <h2>
            {t('youtubeVoices')} {t('moreTalents')}
          </h2>
          <div className="rd-talent-grid rd-six">
            {youtubeTalents.map((talent) => (
              <RosterCard key={talent.slug} talent={talent} sizes="(max-width: 760px) 50vw, (max-width: 1100px) 33vw, 15vw" />
            ))}
          </div>
        </section>
      )}

      <section className="rd-cta rd-rule">
        <p>{t('interestedCollaborating')}</p>
        <div className="rd-actions">
          <Link className="rd-pill" href={localizeHref('/contact', locale)} prefetch={false}>
            {tCommon('getInTouch')}
          </Link>
        </div>
      </section>
    </div>
  )
}
