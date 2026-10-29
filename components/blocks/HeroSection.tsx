import { useTranslations } from 'next-intl'
import CoverflowCarousel from './CoverflowCarousel'
import HomeCollage, { type HomeCollageTile } from './HomeCollage'
import Button from '@/components/ui/Button'
import Magnetic from '@/components/ui/Magnetic'
import type { Locale } from '@/i18n/config'

interface HeroCta {
  label: string
  href: string
}

interface HeroSectionProps {
  // Keyword heading rendered as the page H1 (eyebrow style). When set, the
  // brand title below becomes display text so the page keeps a single H1.
  heading?: string
  title: string
  titleSecondLine?: string
  subtitle?: React.ReactNode
  primaryCta?: HeroCta
  secondaryCta?: HeroCta
  carouselImages?: Array<{ url: string; alt?: string; buttonText?: string; buttonLink?: string }>
  collageTiles?: HomeCollageTile[]
  locale?: Locale
}

export default function HeroSection({
  heading,
  title,
  titleSecondLine,
  subtitle,
  primaryCta,
  secondaryCta,
  carouselImages,
  collageTiles,
  locale = 'en',
}: HeroSectionProps) {
  const t = useTranslations('common')
  const TitleTag = heading ? 'p' : 'h1'
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-background-base to-background-soft py-[56px] mobile:py-[40px] px-section-x"
    >
      <div className="relative z-[1] max-w-container mx-auto">
        {/* Show the hero in its final position immediately. Entrance motion
            makes the headline and introduction keep moving after they paint. */}
        <div className="text-center mb-4 mobile:mb-3">
          {heading && (
            <h1 className="mb-4 mobile:mb-3 font-jost text-[14px] mobile:text-[12px] font-medium uppercase tracking-[0.2em] rtl:tracking-normal text-accent-red text-balance">
              {heading}
            </h1>
          )}
          <TitleTag className="font-anegra text-[clamp(40px,6.2vw,96px)] leading-[1.02] tracking-[-0.02em] rtl:tracking-normal text-foreground-primary text-center text-balance">
            {title}
            {titleSecondLine && (
              <>
                <br />
                <span className="font-jost uppercase tracking-[0.16em] rtl:tracking-normal text-[clamp(14px,1.6vw,22px)] leading-none inline-block mt-4">{titleSecondLine}</span>
              </>
            )}
          </TitleTag>
        </div>

        {/* Subtitle */}
        {subtitle && (
          <div className="text-center mb-6 mobile:mb-5 max-w-[640px] mx-auto">
            <p className="font-work-sans text-[17px] mobile:text-[16px] leading-[1.6] text-foreground-body text-center text-pretty">
              {subtitle}
            </p>
          </div>
        )}

        {/* CTAs */}
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6 mobile:mb-5">
            {primaryCta && (
              <Magnetic>
                <Button href={primaryCta.href} locale={locale}>{primaryCta.label}</Button>
              </Magnetic>
            )}
            {secondaryCta && (
              <Button href={secondaryCta.href} locale={locale} variant="ghost" prefetch={false}>
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}

        {/* Keep the hero photos still and paintable from the first frame. */}
        {collageTiles && collageTiles.length > 0 ? (
          <div className="mt-2">
            <HomeCollage tiles={collageTiles} priority />
          </div>
        ) : carouselImages && carouselImages.length > 0 && (
          <div className="mt-2">
            <CoverflowCarousel
              images={carouselImages}
              autoplay={false}
              locale={locale}
              labels={{ region: t('featuredCreators'), goToSlide: t.raw('goToSlide') }}
            />
          </div>
        )}
      </div>
    </section>
  )
}
