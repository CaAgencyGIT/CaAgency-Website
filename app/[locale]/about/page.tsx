import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import Film from '@/components/redesign/Film'
import BrandCarousel from '@/components/blocks/BrandCarousel'
import { brandLogos } from '@/lib/data/brands'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { organizationRef } from '@/lib/seo/schema'
import { aboutClosingFilms, aboutFilms, aboutStoryFilms, aboutWallFilms, filmVideoSchema } from '@/lib/data/redesign-media'
import { localizeHref } from '@/lib/i18n/client-paths'
type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })

  return buildPageMetadata({
    title: t('title'),
    description: t('description'),
    locale,
    path: '/about',
    keywords: [
      'about CA Agency',
      'influencer agency Dubai',
      'talent management UAE',
      'social media agency',
      'content creator management',
    ],
    imageAlt: t('heading'),
  })
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })
  const tCommon = await getTranslations({ locale, namespace: 'common' })
  const labels = { play: tCommon('play'), pause: tCommon('pause'), playVideo: tCommon('playVideo'), pauseVideo: tCommon('pauseVideo') }
  const videoSchema = filmVideoSchema(aboutFilms, organizationRef)

  return (
    <div className="rd">
      <script type="application/ld+json">{JSON.stringify(videoSchema)}</script>

      <section className="rd-section rd-page-hero">
        <div>
          <h1>{t('heading')}</h1>
          <p className="rd-hero-sub">
            {t('mission')} • {t('vision')}
          </p>
        </div>
        <div className="rd-hero-description">
          <p>{t('intro')}</p>
        </div>
      </section>

      <section className="rd-section pt-0">
        <div className="rd-six-wall">
          {aboutWallFilms.map((film, index) => (
            <Film key={film} film={film} priority={index < 2} sizes="(max-width: 1100px) 33vw, 15vw" labels={labels} />
          ))}
        </div>
      </section>

      <section className="rd-section rd-story">
        <div className="rd-copy">
          <h2>CA Agency</h2>
          <p>{t('whoWeAreP1')}</p>
        </div>
        <div className="rd-duo">
          {aboutStoryFilms.map((film) => (
            <Film key={film} film={film} sizes="(max-width: 760px) 50vw, 22vw" labels={labels} />
          ))}
        </div>
      </section>

      <section className="rd-section rd-story rd-reverse">
        <div className="rd-duo">
          {aboutClosingFilms.map((film) => (
            <Film key={film} film={film} sizes="(max-width: 760px) 50vw, 22vw" labels={labels} />
          ))}
        </div>
        <div className="rd-copy">
          <h2>{t('subheading')}</h2>
          <p>{t('storyText')}</p>
          <Link className="rd-pill" href={localizeHref('/contact', locale)} prefetch={false}>
            {tCommon('contactUs')}
          </Link>
        </div>
      </section>

      <section className="bg-background-base py-[50px] px-0">
        <BrandCarousel images={brandLogos} />
      </section>
    </div>
  )
}
