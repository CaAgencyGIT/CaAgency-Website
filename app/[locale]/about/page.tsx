import Image from 'next/image'
import type { Locale } from '@/i18n/config'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CollageVideo from '@/components/blocks/CollageVideo'
import IntroReelSync from '@/components/blocks/IntroReelSync'
import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { filmLabel, filmSrc, introShowreels, workFilms, type FilmKey } from '@/lib/data/redesign-media'
import { posterFor } from '@/lib/data/videos'

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

// Campaign stills for the tilted photo strip: every film on the Work page.
const stripFilms: FilmKey[] = workFilms
const TILTS = [-2.2, 1.6, -1, 2, -1.6, 1.1]

const OFFICES = [
  { divisionKey: 'hqDivision', city: 'Dubai' },
  { divisionKey: 'usDivision', city: 'Wilmington' },
  { divisionKey: 'nlDivision', city: 'Espel' },
] as const

// About page (Oct 2026, after scooperz.com/about-us, shorter and in the CA
// Agency style): statement hero, showreel band, black statement panel,
// tilted campaign strip, offices with a few facts, closing CTA.
export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })
  const tContact = await getTranslations({ locale, namespace: 'contact' })
  const strip = stripFilms.map((key) => ({ key, src: posterFor(filmSrc(key)), alt: filmLabel(key) }))

  return (
    <div className="rd">
      {/* Statement hero */}
      <section className="about-hero px-section-x pt-[90px] pb-[80px] mobile:pt-[50px] mobile:pb-[44px]">
        <div className="max-w-container mx-auto grid grid-cols-[1.15fr_1fr] items-center gap-[7vw] tablet:grid-cols-1 mobile:grid-cols-1 mobile:gap-8">
          <h1 className="hero-rise-media font-anegra text-[clamp(52px,7.4vw,112px)] leading-[0.95] tracking-[-0.02em] text-foreground-primary text-balance">
            {t('heroTitle')}
          </h1>
          <div className="hero-rise hero-rise-2 max-w-[480px]">
            <p className="mb-6 font-jost text-[13px] font-medium uppercase leading-[1.7] tracking-[0.18em] text-foreground-primary">
              {t('heroKicker')}
            </p>
            <p className="mb-5 font-work-sans text-[16px] leading-[1.8] text-foreground-body">{t('heroText')}</p>
            <p className="font-anegra text-[22px] italic text-foreground-primary">{t('heroTagline')}</p>
          </div>
        </div>
      </section>

      {/* Showreel band with overlay line */}
      <section className="relative overflow-hidden bg-[#0e0e0e]">
        <div className="grid h-[min(78vh,760px)] grid-cols-3 mobile:h-[62vh]">
          {introShowreels.map((reel) => (
            <div key={reel.src} className="relative h-full overflow-hidden">
              <div className="intro-feature-tile absolute inset-0 overflow-hidden">
                <CollageVideo src={reel.src} poster={reel.poster} label={reel.alt} />
              </div>
            </div>
          ))}
          <IntroReelSync />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/25" />
        <p className="pointer-events-none absolute inset-x-0 top-[8%] px-section-x text-center font-anegra text-[clamp(44px,7vw,108px)] leading-none text-white">
          {t('bandOverlay')}
        </p>
      </section>

      {/* Black statement panel */}
      <section className="rd-cta-panel">
        <ScrollReveal yOffset={24} className="about-panel">
          <div>
            <p className="mb-8 font-jost text-[17px] uppercase leading-[1.65] tracking-[0.08em] text-white mobile:text-[15px]">
              {t('panelStatement')}
            </p>
            <Button href="/work" locale={locale as Locale} variant="light" prefetch={false}>
              {t('panelButton')}
            </Button>
          </div>
          <div>
            <h2 className="mb-5 font-anegra text-[40px] leading-[1.1] text-white text-balance tablet:text-[34px] mobile:text-[28px]">
              {t('panelTitle')}
            </h2>
            <p className="font-work-sans text-[16px] leading-[1.8] text-white/75">{t('panelText')}</p>
          </div>
        </ScrollReveal>
      </section>

      {/* Tilted campaign strip */}
      <section className="about-strip" aria-label={t('stripLabel')}>
        <div className="about-strip-track">
          {[...strip, ...strip].map((item, i) => (
            <figure
              key={`${item.key}-${i}`}
              className="about-strip-card"
              style={{ transform: `rotate(${TILTS[i % TILTS.length]}deg)` }}
              aria-hidden={i >= strip.length || undefined}
            >
              <Image src={item.src} alt={i < strip.length ? item.alt : ''} fill sizes="260px" className="object-cover" />
            </figure>
          ))}
        </div>
      </section>

      {/* Offices and facts */}
      <section className="px-section-x pt-[40px] pb-[100px] mobile:pb-[60px]">
        <div className="max-w-container mx-auto grid grid-cols-[1fr_1.2fr] gap-[7vw] tablet:grid-cols-1 mobile:grid-cols-1 mobile:gap-10">
          <ScrollReveal yOffset={24}>
            <h2 className="mb-5 font-anegra text-[48px] leading-[1.05] text-foreground-primary text-balance tablet:text-[40px] mobile:text-[32px]">
              {t('officesTitle')}
            </h2>
            <p className="mb-8 max-w-[460px] font-work-sans text-[16px] leading-[1.8] text-foreground-body">{t('officesText')}</p>
            <ul className="about-offices">
              {OFFICES.map((office) => (
                <li key={office.city}>
                  <span>{office.city}</span>
                  {tContact(office.divisionKey)}
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal yOffset={24} className="about-stats">
            <div>
              <strong>2019</strong>
              <span>{t('statFounded')}</span>
            </div>
            <div>
              <strong>3,000+</strong>
              <span>{t('statCampaigns')}</span>
            </div>
            <div>
              <strong>3</strong>
              <span>{t('statOffices')}</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing */}
      <section className="rd-cta-panel">
        <ScrollReveal yOffset={24} className="rd-cta-panel-inner">
          <h2 className="font-anegra text-[44px] leading-[1.1] text-white text-balance tablet:text-[36px] mobile:text-[28px]">
            {t('closingTitle')}
          </h2>
          <div>
            <Button href="/contact" locale={locale as Locale} variant="light" prefetch={false}>
              {t('closingButton')}
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
