import Button from '@/components/ui/Button'
import CollageVideo from '@/components/blocks/CollageVideo'
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
// a wide band of campaign videos with a black text card overlapping its
// lower-left edge.
export default function IntroFeature({ eyebrow, kicker, title, paragraphs, button, items, locale }: IntroFeatureProps) {
  return (
    <section className="bg-[#0e0e0e] text-white py-[96px] mobile:py-[56px] px-section-x">
      <div className="max-w-container mx-auto">
        <div className="mb-6 flex items-baseline gap-4 mobile:mb-4 mobile:flex-col mobile:gap-1">
          <h2 className="font-anegra text-[28px] mobile:text-[24px] leading-none">{eyebrow}</h2>
          <p className="font-jost text-[13px] uppercase tracking-[0.2em] text-white/55">{kicker}</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-3 overflow-hidden rounded-[20px] mobile:rounded-[14px]">
            {items.slice(0, 3).map((item) => (
              <div key={item.src} className="relative aspect-[4/5] mobile:aspect-[9/16]">
                <div className="hero-collage-tile absolute inset-0 rounded-none">
                  <CollageVideo src={item.src} poster={item.poster} label={item.alt} />
                </div>
              </div>
            ))}
          </div>

          <div className="relative z-[2] -mt-[180px] ml-[22%] w-[min(560px,60%)] tablet:-mt-[120px] tablet:ml-[8%] tablet:w-[70%] mobile:-mt-[48px] mobile:mx-3 mobile:w-auto">
            <span
              aria-hidden="true"
              className="absolute -top-[74px] left-8 font-anegra text-[150px] leading-none text-white mobile:-top-[46px] mobile:left-5 mobile:text-[96px]"
            >
              &ldquo;
            </span>
            <div className="bg-[#161616] px-10 pt-12 pb-10 mobile:px-6 mobile:pt-9 mobile:pb-7">
              <h3 className="font-anegra text-[44px] tablet:text-[38px] mobile:text-[30px] leading-[1.1] text-balance">{title}</h3>
              <div className="my-7 h-px w-full bg-white/25 mobile:my-5" />
              <div className="flex flex-col gap-4 font-work-sans text-[15px] mobile:text-[14px] leading-[1.75] text-white/80">
                {paragraphs.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
              <div className="mt-8 mobile:mt-6">
                <Button href={button.href} locale={locale} variant="light">
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
