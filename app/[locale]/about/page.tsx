import type { Locale } from '@/i18n/config'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CollageVideo from '@/components/blocks/CollageVideo'
import IntroReelSync from '@/components/blocks/IntroReelSync'
import CountUp from '@/components/ui/CountUp'
import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { aboutCollageTiles, introShowreels } from '@/lib/data/redesign-media'
import HomeCollage from '@/components/blocks/HomeCollage'

// Safety net next to the on-save revalidation in lib/revalidate.ts.
export const revalidate = 3600

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
    image: '/images/site/og/about-v1.jpg',
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


const OFFICES = [
  { divisionKey: 'hqDivision', city: 'Dubai' },
  { divisionKey: 'usDivision', city: 'Wilmington' },
  { divisionKey: 'nlDivision', city: 'Amsterdam' },
] as const

// About page (Oct 2026, after scooperz.com/about-us, shorter and in the CA
// Agency style): statement hero, showreel band, black statement panel,
// tilted campaign strip, offices with a few facts, closing CTA.
export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })
  const tContact = await getTranslations({ locale, namespace: 'contact' })

  return (
    <div className="rd">
      {/* Statement hero */}
      <section className="about-hero px-section-x pt-[90px] pb-[80px] mobile:pt-[50px] mobile:pb-[44px]">
        <div className="max-w-container mx-auto grid grid-cols-[1.15fr_1fr] items-center gap-[7vw] tablet:grid-cols-1 mobile:grid-cols-1 mobile:gap-8">
          <h1 className="hero-rise-media font-anegra text-[clamp(40px,7.4vw,112px)] leading-[0.95] tracking-[-0.02em] text-foreground-primary text-balance">
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
      {/* Three 9:16 reels joined into one rounded frame on a white band; the
          tint sits on the videos only, and IntroReelSync keeps their flashes
          firing together (Oct 2026). */}
      <section className="relative overflow-hidden bg-background-base px-section-x py-[40px] mobile:py-[24px]">
        <div className="relative mx-auto grid max-w-[1120px] grid-cols-3 overflow-hidden rounded-[18px] mobile:rounded-[10px]">
          {introShowreels.map((reel) => (
            <div key={reel.src} className="relative aspect-[9/16] overflow-hidden">
              <div className="intro-feature-tile absolute inset-0 overflow-hidden">
                <CollageVideo src={reel.src} poster={reel.poster} label={reel.alt} eager />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-black/20" />
            </div>
          ))}
          <IntroReelSync />
        </div>
        <p className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 px-section-x text-center font-anegra [text-shadow:0_2px_18px_rgba(0,0,0,0.45)] text-[clamp(30px,4.4vw,66px)] leading-none text-white">
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
            <Button href="/work" locale={locale as Locale} variant="light">
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

      {/* Story (Oct 2026): what CA Agency stands for, what drives it and how
          it stands apart. */}
      <section className="px-section-x pt-[110px] pb-[70px] mobile:pt-[64px] mobile:pb-[40px]">
        <div className="about-story mx-auto max-w-container">
          <ScrollReveal yOffset={24}>
            <p className="mb-5 font-jost text-[12px] font-medium uppercase tracking-[0.22em] text-foreground-gray">{t('storyEyebrow')}</p>
            <h2 className="mb-6 font-anegra text-[48px] leading-[1.05] text-foreground-primary text-balance tablet:text-[40px] mobile:text-[32px]">
              {t('storyTitle')}
            </h2>
            <p className="max-w-[520px] font-work-sans text-[16px] leading-[1.8] text-foreground-body">{t('storyIntro')}</p>
          </ScrollReveal>
          <ol className="about-story-pillars">
            {([1, 2, 3] as const).map((n) => (
              <li key={n}>
                <ScrollReveal yOffset={24} delay={n * 0.08}>
                  <span className="font-jost text-[12px] tracking-[0.2em] text-foreground-gray">{String(n).padStart(2, '0')}</span>
                  <h3 className="mt-3 mb-3 font-anegra text-[26px] leading-[1.15] text-foreground-primary mobile:text-[22px]">{t(`story${n}Title`)}</h3>
                  <p className="font-work-sans text-[15px] leading-[1.75] text-foreground-body">{t(`story${n}Text`)}</p>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* The same six-photo collection as the homepage. */}
      <section className="px-section-x pb-[90px] mobile:pb-[56px]">
        <div className="mx-auto max-w-container">
          <HomeCollage tiles={aboutCollageTiles} swipe />
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
              <strong>
                <CountUp value={6000} suffix="+" />
              </strong>
              <span>{t('statCollabs')}</span>
            </div>
            <div>
              <strong>
                <CountUp value={8} suffix="+" duration={1200} />
              </strong>
              <span>{t('statLanguages')}</span>
            </div>
            <div>
              <strong>{t('statDailyValue')}</strong>
              <span>{t('statDaily')}</span>
            </div>
            <div>
              <strong>
                <CountUp value={3} duration={1000} />
              </strong>
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
            <Button href="/contact" locale={locale as Locale} variant="light">
              {t('closingButton')}
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
