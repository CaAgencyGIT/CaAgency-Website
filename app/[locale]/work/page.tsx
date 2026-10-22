import { Metadata } from 'next'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import Film from '@/components/redesign/Film'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { organizationRef } from '@/lib/seo/schema'
import { filmCaseStudies, films, filmVideoSchema, workFilms } from '@/lib/data/redesign-media'
import { localizeHref } from '@/lib/i18n/client-paths'

// VideoObject schema for SEO
const videoSchemaList = filmVideoSchema(workFilms, organizationRef)

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'work' })

  return buildPageMetadata({
    title: t('title'),
    description: t('description'),
    locale,
    path: '/work',
    keywords: [
      'influencer campaigns',
      'branded content',
      'Instagram Reels',
      'TikTok content',
      'influencer portfolio',
      'brand collaborations',
      'campaign examples',
    ],
    imageAlt: 'CA Agency Portfolio',
  })
}

export default async function WorkPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'work' })
  const tCommon = await getTranslations({ locale, namespace: 'common' })
  const labels = { play: tCommon('play'), pause: tCommon('pause'), playVideo: tCommon('playVideo'), pauseVideo: tCommon('pauseVideo') }

  return (
    <div className="rd">
      <script type="application/ld+json">{JSON.stringify(videoSchemaList)}</script>

      <section className="rd-section rd-page-hero">
        <div>
          <h1>{t('heading')}</h1>
        </div>
        <div className="rd-hero-description">
          <p>
            <strong>{t('heroP1')}</strong>
          </p>
          <p>{t('heroP2')}</p>
        </div>
      </section>

      <section className="rd-section pt-0">
        <div className="rd-work-grid">
          {workFilms.map((film, index) => {
            const study = filmCaseStudies[film]
            const { creator, brand, sourceUrl } = films[film]
            return (
              <article key={film} className="rd-work-card">
                <Film film={film} priority={index === 0} sizes="(max-width: 760px) 50vw, 30vw" labels={labels} />
                <div className="rd-work-meta">
                  <h2>{study ? brand : creator}</h2>
                  {study ? (
                    // Case-study routes are English-only (site) pages, so no locale prefix.
                    <Link className="rd-text-link" href={`/case-studies/${study}`} prefetch={false} aria-label={`${brand} case study`}>
                      {t('viewCaseStudy')} →
                    </Link>
                  ) : (
                    <a className="rd-text-link" href={sourceUrl} target="_blank" rel="noopener noreferrer" aria-label={`${creator} on Instagram`}>
                      Instagram
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="rd-cta">
        <h2>{t('ctaTitle')}</h2>
        <p>{t('ctaText')}</p>
        <div className="rd-actions">
          <Link className="rd-pill" href={localizeHref('/contact', locale)} prefetch={false}>{tCommon('getStarted')}</Link>
          <Link className="rd-pill" href={localizeHref('/services', locale)} prefetch={false}>{tCommon('ourServices')}</Link>
          <Link className="rd-pill" href={localizeHref('/talents', locale)} prefetch={false}>{tCommon('meetOurTalents')}</Link>
        </div>
      </section>
    </div>
  )
}
