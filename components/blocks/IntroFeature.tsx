import Button from '@/components/ui/Button'
import CollageVideo from '@/components/blocks/CollageVideo'
import IntroReelSync from '@/components/blocks/IntroReelSync'
import type { Locale } from '@/i18n/config'

interface IntroFeatureProps {
  eyebrow: string
  kicker: string
  title: string
  paragraphs: string[]
  button: { label: string; href: string }
  items: Array<{ src: string; alt: string; poster?: string }>
  locale?: Locale
}

// "This is CA Agency" as an editorial feature (Oct 2026, after era.agency):
// a wide band of campaign videos with a small white text card tucked under
// its lower-left edge, so the videos stay mostly uncovered.
export default function IntroFeature({ eyebrow, kicker, title, paragraphs, button, items, locale }: IntroFeatureProps) {
  return (
    <section className="intro-feature bg-background-base text-foreground-primary py-[96px] mobile:py-[56px] px-section-x">
      <div className="max-w-container mx-auto">
        <div className="mb-8 flex items-baseline gap-5 mobile:mb-5 mobile:flex-col mobile:gap-1.5">
          <h2 className="font-anegra text-[44px] tablet:text-[38px] mobile:text-[32px] leading-none">{eyebrow}</h2>
          <p className="font-jost text-[15px] uppercase tracking-[0.2em] text-foreground-gray mobile:text-[13px]">{kicker}</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-3 overflow-hidden rounded-[20px] mobile:rounded-[14px]">
            {items.slice(0, 3).map((item) => (
              <div key={item.src} className="relative aspect-[4/5] mobile:aspect-[9/16]">
                <div className="intro-feature-tile absolute inset-0 overflow-hidden">
                  <CollageVideo src={item.src} poster={item.poster} label={item.alt} />
                </div>
              </div>
            ))}
            <IntroReelSync />
          </div>

          <div className="relative z-[2] -mt-[72px] ml-[6%] w-[min(470px,48%)] tablet:-mt-[56px] tablet:ml-[5%] tablet:w-[62%] mobile:-mt-[28px] mobile:mx-3 mobile:w-auto">
            <div className="rounded-[18px] border border-black/[0.06] bg-white px-9 pt-9 pb-8 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.28)] mobile:rounded-[14px] mobile:px-6 mobile:pt-7 mobile:pb-6">
              <span aria-hidden="true" className="block font-anegra text-[56px] leading-[0.6] text-foreground-primary/20 mobile:text-[44px]">
                &ldquo;
              </span>
              <h3 className="mt-2 font-anegra text-[30px] tablet:text-[28px] mobile:text-[24px] leading-[1.15] text-balance text-foreground-primary">{title}</h3>
              <div className="my-5 h-px w-12 bg-black/20 mobile:my-4" />
              <div className="flex flex-col gap-3 font-work-sans text-[14px] mobile:text-[13.5px] leading-[1.7] text-foreground-primary/70">
                {paragraphs.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
              <div className="mt-6 mobile:mt-5">
                <Button href={button.href} locale={locale} variant="dark" size="sm">
                  {button.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
