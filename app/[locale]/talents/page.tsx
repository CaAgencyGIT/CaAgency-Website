import '@/app/public-utilities.css'
import '@/components/agency-index/agency-index.css'
import Link from 'next/link'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { prisma } from '@/lib/prisma'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { localizeHref } from '@/lib/i18n/client-paths'
import { talentCardArt } from '@/lib/data/talent-cards'
import type { SocialLink } from '@/components/blocks/TalentCard'
import AgencyTalentCard, { type AgencyTalent } from '@/components/agency-index/AgencyTalentCard'
import AgencySearch, { ResetSearchButton } from '@/components/agency-index/AgencySearch'
import CampaignStrip, { type Campaign } from '@/components/agency-index/CampaignStrip'
import { ArrowDown, ArrowUpRight } from '@/components/agency-index/icons'

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
    return await prisma.talent.findMany({
      orderBy: [{ category: 'asc' }, { order: 'asc' }],
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
  } catch (error) {
    console.error('Error fetching talents:', error)
    return []
  }
}

// The three films of the approved Agency Index (Nov 2026), in order. The files
// are light copies made for this strip only (Nov 2026): 540x960 H.264, no
// audio, faststart, keyframe every second, ~1.2-1.5MB each, re-encoded from
// the site's existing encodes (videos/work/kylie-cosmetics-web-v1.mp4,
// videos/redesign/rd-melly-fenty-original-web-v3.mp4 and
// rd-dariia-valentino-web-v3.mp4, which other pages still use). Each poster is
// the film's own first frame, so the swap to video is seamless. The Kylie film
// is Melani Seiffert's (confirmed Nov 2026).
const CAMPAIGNS = [
  { brand: 'Kylie Cosmetics', talent: 'Melani Seiffert', title: 'Melani Seiffert — Kylie Cosmetics', video: '/videos/agency-index/kylie-cosmetics-strip-v1.mp4', poster: '/images/agency-index/kylie-cosmetics-strip-poster-v1.jpg' },
  { brand: 'Fenty Beauty', talent: 'Melly Sanchez', title: 'Melly Sanchez — Fenty Beauty', video: '/videos/agency-index/melly-fenty-strip-v1.mp4', poster: '/images/agency-index/melly-fenty-strip-poster-v1.jpg' },
  { brand: 'Valentino Beauty', talent: 'Dariia Bordun', title: 'Dariia Bordun — Valentino Beauty', video: '/videos/agency-index/dariia-valentino-strip-v1.mp4', poster: '/images/agency-index/dariia-valentino-strip-poster-v1.jpg' },
]

// Card portraits: 3 columns from 801px, 2 below; the page shell caps at 1800px.
const SIZES = '(max-width: 800px) 50vw, (max-width: 1100px) 26vw, (max-width: 1800px) 25vw, 450px'

// Agency Index talents page (Nov 2026, approved design): introduction and
// search in a sticky left rail, a three-column roster on the right (two
// columns and stacked intro at 800px and below), the campaign feature after
// the first six beauty talents, the "Beyond beauty" creators in their own
// section, and a closing contact band. The roster is server-rendered; search
// enhances it on the client. Styles: components/agency-index/agency-index.css,
// ported from the supplied approved-page/styles.css.
export default async function TalentsPage({ params }: Props) {
  const { locale } = await params
  const [t, allTalents] = await Promise.all([getTranslations({ locale, namespace: 'talents' }), getTalents()])

  const toTalent = (talent: (typeof allTalents)[number]): AgencyTalent => {
    const art = talentCardArt[talent.slug]
    const name = art?.name ?? talent.name
    const space = name.indexOf(' ')
    const socials: SocialLink[] = [
      ...(talent.instagramUrl ? [{ platform: 'instagram' as const, url: talent.instagramUrl }] : []),
      ...(talent.youtubeUrl ? [{ platform: 'youtube' as const, url: talent.youtubeUrl }] : []),
      ...(talent.tiktokUrl ? [{ platform: 'tiktok' as const, url: talent.tiktokUrl }] : []),
      ...(talent.twitchUrl ? [{ platform: 'twitch' as const, url: talent.twitchUrl }] : []),
      ...(talent.kickUrl ? [{ platform: 'kick' as const, url: talent.kickUrl }] : []),
    ]
    return {
      slug: talent.slug,
      name,
      firstName: space > 0 ? name.slice(0, space) : name,
      lastName: space > 0 ? name.slice(space + 1) : '',
      image: art?.src ?? talent.imageUrl,
      alt: art?.alt ?? `${name}, CA Agency talent portrait`,
      socials,
    }
  }

  const beauty = allTalents.filter((talent) => talent.category === 'instagram').map(toTalent)
  const more = allTalents.filter((talent) => talent.category === 'youtube').map(toTalent)
  const total = beauty.length + more.length
  const platformName: Record<string, string> = { instagram: 'Instagram', tiktok: 'TikTok', youtube: 'YouTube', twitch: 'Twitch', kick: 'Kick' }

  const renderCard = (talent: AgencyTalent, index: number) => (
    <AgencyTalentCard
      key={talent.slug}
      talent={talent}
      eager={index < 6}
      locale={locale}
      sizes={SIZES}
      profileAria={t('profileAria', { name: talent.name })}
      socialAria={(platform) => t('socialAria', { name: talent.name, platform: platformName[platform] ?? platform })}
    />
  )

  const campaigns: Campaign[] = CAMPAIGNS.map((c) => ({
    ...c,
    href: localizeHref('/work', locale),
    aria: t('campaignAria', { brand: c.brand }),
    videoLabel: t('campaignVideoLabel', { title: c.title }),
  }))

  return (
    <div className="agency-index">
      <div className="page-shell">
        <aside className="intro-column">
          <div className="intro-sticky">
            <p className="eyebrow">{t('indexEyebrow')}</p>
            <h1>
              {(() => {
                const [first, ...rest] = t('heading').split(' ')
                return (
                  <>
                    {first}
                    <br />
                    <span className="h1-gap"> </span>
                    {rest.join(' ')}
                  </>
                )
              })()}
            </h1>
            <p className="intro-copy">{t('subheading')}</p>
            <AgencySearch
              entries={[...beauty, ...more].map((talent) => ({
                slug: talent.slug,
                names: [...new Set([talent.name, allTalents.find((x) => x.slug === talent.slug)?.name ?? talent.name])],
              }))}
              labels={{
                search: t('searchLabel'),
                placeholder: t('searchPlaceholder'),
                clear: t('clearSearch'),
                countAll: t('countAll', { count: total }),
                countFound: Array.from({ length: total + 1 }, (_, n) => t('countFound', { count: n })),
              }}
            />
            <div className="intro-bottom">
              <p>
                {t('tagline1')}
                <br />
                {t('tagline2')}
                <br />
                {t('tagline3')}
              </p>
              <Link className="text-link" href={localizeHref('/contact', locale)} prefetch={false}>
                {t('introLink')}{' '}
                <span aria-hidden="true">
                  <ArrowUpRight />
                </span>
              </Link>
            </div>
          </div>
        </aside>

        <section id="roster" className="roster-column" aria-label={t('rosterAria')}>
          <div className="roster-top">
            <h2 className="roster-label">{t('rosterLabel')}</h2>
            <a href="#talent-in-action">
              {t('inActionLink')}{' '}
              <span aria-hidden="true">
                <ArrowDown />
              </span>
            </a>
          </div>
          <div className="talent-grid" id="first-roster">
            {beauty.slice(0, 6).map(renderCard)}
          </div>
          <section className="editorial-break" id="talent-in-action" aria-labelledby="work-title">
            <div className="work-intro">
              <p className="eyebrow">{t('featureEyebrow')}</p>
              <h2 id="work-title">
                {t('featureTitle1')}
                <br />
                <em>{t('featureTitle2')}</em>
              </h2>
              <Link href={localizeHref('/work', locale)} className="text-link" prefetch={false}>
                {t('featureLink')}{' '}
                <span aria-hidden="true">
                  <ArrowUpRight />
                </span>
              </Link>
            </div>
            <CampaignStrip campaigns={campaigns} />
          </section>
          <div className="talent-grid" id="remaining-roster">
            {beauty.slice(6).map((talent, i) => renderCard(talent, i + 6))}
          </div>
          {more.length > 0 && (
            <section id="additional-section" className="additional-section">
              <div className="additional-heading">
                <p className="eyebrow">{t('beyondEyebrow')}</p>
                <h2>
                  {t('beyondTitle1')}
                  <br />
                  {t('beyondTitle2')}
                </h2>
                <p className="additional-description">{t('beyondLine')}</p>
              </div>
              <div className="talent-grid" id="additional-roster">
                {more.map((talent, i) => renderCard(talent, i + beauty.length))}
              </div>
            </section>
          )}
          <div id="empty-state" className="empty-state" hidden>
            <span aria-hidden="true">
              <ArrowUpRight />
            </span>
            <h2>{t('emptyTitle')}</h2>
            <p>{t('emptyText')}</p>
            <ResetSearchButton label={t('emptyReset')} />
          </div>
        </section>
      </div>

      <section className="closing" aria-labelledby="closing-title">
        <p className="eyebrow">{t('closingEyebrow')}</p>
        <div>
          <h2 id="closing-title">
            {t('closingTitle1')}
            <br />
            {t('closingTitle2')}
          </h2>
          <Link className="closing-link" href={localizeHref('/contact', locale)} prefetch={false} aria-label={t('closingAria')}>
            <span>{t('closingLink')}</span>
            <span aria-hidden="true">
              <ArrowUpRight />
            </span>
          </Link>
        </div>
      </section>
    </div>
  )
}
