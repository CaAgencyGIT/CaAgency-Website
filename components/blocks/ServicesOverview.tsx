// Server component on purpose: no hooks or handlers here, so the five cards'
// copy, SVGs, and lib/data/services stay out of the client bundle. The nested
// ScrollReveal/Stagger animations are client components on their own.
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Stagger from '@/components/ui/motion/Stagger'
import StaggerItem from '@/components/ui/motion/StaggerItem'
import { services as serviceDetails } from '@/lib/data/services'
import { cn } from '@/lib/utils'

type ServicesOverviewContent = {
  title: string
  subtitle: string
  items: Array<{
    title: string
    description: string
    icon: string
  }>
  buttonLabel: string
  buttonHref: string
}

// CMS content has no slug field, so cards map to their service subpage by
// position in the canonical five-service catalog. Extra CMS cards (if the
// array is ever overridden) fall back to the services listing page.
function serviceHref(index: number) {
  return serviceDetails[index] ? `/services/${serviceDetails[index].slug}` : '/services'
}

function renderIcon(icon: string) {
  switch (icon) {
    case 'spark':
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4L24.5 13.2L34.7 14.7L27.35 21.8L29 32L20 27.2L11 32L12.65 21.8L5.3 14.7L15.5 13.2L20 4Z" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'person':
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="2.6" />
          <path d="M8 34C8 27.4 13.4 22 20 22C26.6 22 32 27.4 32 34" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
        </svg>
      )
    case 'video':
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="8" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="2.6" />
          <path d="M17 15L25 18L17 21V15Z" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 32H26" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M20 28V32" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
        </svg>
      )
    case 'compass':
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2.6" />
          <path d="M26 14L22.5 22.5L14 26L17.5 17.5L26 14Z" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
          <circle cx="20" cy="20" r="1.5" fill="currentColor" />
        </svg>
      )
    case 'chart':
    default:
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 32L14 22L22 26L34 10" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 10H34V16" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
  }
}

export default function ServicesOverview({
  content,
  eyebrow,
}: {
  content: ServicesOverviewContent
  eyebrow?: string
}) {
  return (
    <section className="bg-background-base py-[100px] mobile:py-[70px] px-section-x border-t border-black/5">
      <div className="max-w-container mx-auto">
        <ScrollReveal delay={0} yOffset={20}>
          <SectionHeading
            eyebrow={eyebrow}
            title={content.title}
            description={content.subtitle}
            className="mb-16 mobile:mb-12"
          />
        </ScrollReveal>

        <Stagger
          className={cn(
            'grid gap-4 tablet:grid-cols-2 mobile:grid-cols-1 mobile:gap-3',
            content.items.length === 5 ? 'grid-cols-5' : 'grid-cols-4'
          )}
          stagger={0.08}
        >
          {content.items.map((service, index) => (
            <StaggerItem
              key={service.title}
              className={cn(
                'h-full',
                content.items.length === 5 && index === 4 && 'tablet:col-span-2 mobile:col-span-1'
              )}
            >
              {/* Oct 2026: compact cards, one row of five on desktop. Each
                  links to its service subpage. */}
              <Link
                href={serviceHref(index)}
                className="group relative flex h-full flex-col rounded-[20px] border border-black/10 bg-white p-6 transition-[background-color,border-color,box-shadow,transform,color] duration-300 hover:-translate-y-1 hover:border-[#0e0e0e] hover:bg-[#0e0e0e] hover:text-white hover:shadow-e3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-red mobile:p-5"
              >
                <div className="mb-5 flex items-center justify-between mobile:mb-3">
                  <span className="font-jost text-[12px] tracking-[0.18em] text-foreground-primary/40 transition-colors duration-300 group-hover:text-white/60">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-black/[0.04] text-foreground-primary/70 transition-colors duration-300 group-hover:bg-white/15 group-hover:text-white [&_svg]:h-[19px] [&_svg]:w-[19px] [&_svg]:[stroke-width:1.7] group-hover:[&_svg]:[stroke-width:1.7]">
                    {renderIcon(service.icon)}
                  </span>
                </div>
                <h3 className="mb-2 font-anegra text-[20px] leading-[1.2] tracking-[0.3px] text-foreground-primary transition-colors duration-300 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="line-clamp-3 font-work-sans text-[14px] leading-[22px] text-foreground-primary/70 transition-colors duration-300 group-hover:text-white/75 mobile:line-clamp-2">
                  {service.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-4 font-jost text-[11px] font-medium uppercase tracking-[0.16em] text-accent-red transition-colors duration-300 group-hover:text-white">
                  Explore service
                  <span aria-hidden="true" className="inline-block transition-transform duration-300 rtl:-scale-x-100 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <ScrollReveal delay={0.4} yOffset={20}>
          <div className="text-center mt-14">
            <Button href={content.buttonHref}>{content.buttonLabel}</Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
