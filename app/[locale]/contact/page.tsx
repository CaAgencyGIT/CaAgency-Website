import { getMessages, getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import { BrandEnquiryForm, TalentApplicationForm } from '@/components/blocks/contact/ContactForms'
import { prisma } from '@/lib/prisma'
import ContactTabs from '@/components/blocks/ContactTabs'
import { defaultFooterContent, SOCIAL_ICONS } from '@/components/layout/Footer'
import OfficeMap from '@/components/blocks/OfficeMap'
import { buildContactFormLabels } from '@/lib/contact/form-labels'
import { buildPageMetadata } from '@/lib/seo/metadata'

type Props = {
  params: Promise<{ locale: string }>
}

// Single source per office so each embed and its button can never point at
// different places.
// City-level zoom so both maps read the same way.
// The embed can take its own query: one that resolves to a single place makes
// Google show a large place card instead of Dubai's small "Open in Maps" link.
const mapsUrls = (address: string, embedAddress = address, zoom = 12) => ({
  search: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
  embed: `https://www.google.com/maps?q=${encodeURIComponent(embedAddress)}&z=${zoom}&output=embed`,
})

const OFFICES = [
  {
    labelKey: 'hqLabel',
    divisionKey: 'hqDivision',
    mapTitleKey: 'mapTitle',
    city: 'Dubai',
    lon: 55.27,
    lat: 25.2,
    lines: ['Meydan Grandstand, 6th Floor,', 'Meydan Road, Nad Al Sheba,', 'Dubai, United Arab Emirates'],
    // The embed is centred on the grandstand's coordinates (by the Meydan
    // Hotel) at a closer zoom, so the HQ map shows Meydan rather than desert.
    ...mapsUrls('Meydan Grandstand, Meydan Road, Nad Al Sheba, Dubai', '25.1553,55.2999', 15),
  },
  {
    labelKey: 'usOfficeLabel',
    divisionKey: 'usDivision',
    mapTitleKey: 'usMapTitle',
    city: 'Wilmington',
    lon: -75.55,
    lat: 39.74,
    lines: ['Corporation Trust Center,', 'Orange Street,', 'Wilmington, DE 19801,', 'United States'],
    // Street number only in the map query, so the pin lands on the building.
    ...mapsUrls('Corporation Trust Center, 1209 N Orange St, Wilmington, DE 19801, United States', 'Corporation Trust Wilmington DE'),
  },
  {
    labelKey: 'nlOfficeLabel',
    divisionKey: 'nlDivision',
    mapTitleKey: 'nlMapTitle',
    city: 'Amsterdam',
    lon: 4.83,
    lat: 52.35,
    lines: ['B. Amsterdam,', 'Johan Huizingalaan 763A,', '1066 VH Amsterdam,', 'The Netherlands'],
    ...mapsUrls('B. Amsterdam, Johan Huizingalaan 763A, 1066 VH Amsterdam, Netherlands', 'Johan Huizingalaan 763A, 1066 VH Amsterdam, Netherlands'),
  },
] as const

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'contact' })

  return buildPageMetadata({
    title: t('title'),
    description: t('description'),
    locale,
    path: '/contact',
    keywords: [
      'contact CA Agency',
      'influencer marketing inquiry',
      'brand partnership',
      'talent submission',
      'influencer agency contact',
      'Dubai marketing agency',
    ],
    imageAlt: 'Contact CA Agency',
  })
}

// Talent names for the brand form's "Talent of interest" picker, read from the
// live roster so the list never goes stale. Same order as /talents.
async function getRosterNames(): Promise<string[]> {
  try {
    const talents = await prisma.talent.findMany({
      orderBy: [{ category: 'asc' }, { order: 'asc' }],
      select: { name: true },
    })
    return talents.map((t) => t.name)
  } catch (error) {
    console.error('Failed to load talent roster for the contact form:', error)
    return []
  }
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'contact' })
  const formLabels = buildContactFormLabels(await getMessages({ locale }))
  const roster = await getRosterNames()

  return (
    <>

      {/* Get in touch (Oct 2026, after scooperz.com/contact): office photo and
          direct contact details left, heading and the brand / influencer form
          tabs right. White, so the page stays light; only the map is black. */}
      <section className="contact-panel bg-background-base px-section-x pt-[80px] pb-[100px] mobile:pt-[34px] mobile:pb-[52px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] gap-[6vw] tablet:grid-cols-1 mobile:grid-cols-1 mobile:gap-12">
          <div className="flex flex-col gap-10 tablet:order-2 mobile:order-2">
            <div className="relative aspect-[4/3] w-full max-w-[440px] overflow-hidden rounded-[18px] mobile:aspect-[16/10] mobile:rounded-[14px]">
              <Image
                src="/images/site/ca-office-v1.webp"
                alt="CA Agency office lounge"
                fill
                priority
                unoptimized
                sizes="(max-width: 767px) 100vw, 440px"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="mb-4 font-anegra text-[34px] leading-tight text-foreground-primary mobile:mb-3 mobile:text-[24px]">{t('contactUsTitle')}</h2>
              <p className="mb-7 max-w-[440px] font-work-sans text-[15px] leading-[1.8] text-foreground-body mobile:mb-5 mobile:text-[14.5px] mobile:leading-[1.7]">{t('contactUsText')}</p>
              <ul className="mb-8 flex flex-col gap-3 font-work-sans text-[17px] text-foreground-primary mobile:mb-6 mobile:text-[15px]">
                <li>
                  <a href="mailto:info@caagency.com" className="underline decoration-black/25 underline-offset-[6px] transition-colors hover:decoration-black">
                    info@caagency.com
                  </a>
                </li>
                <li>
                  <a href="tel:+97148869229" dir="ltr" className="underline decoration-black/25 underline-offset-[6px] transition-colors hover:decoration-black">
                    +971 4 886 9229
                  </a>
                </li>
              </ul>
              <div className="flex gap-3">
                {defaultFooterContent.socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="grid h-11 w-11 place-items-center rounded-full border mobile:h-10 mobile:w-10 border-black/20 text-foreground-primary transition-colors hover:bg-[#0e0e0e] hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-current" aria-hidden="true">
                      <path d={SOCIAL_ICONS[social.name] ?? ''} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="tablet:order-1 mobile:order-1">
            <h1 className="mb-6 font-anegra text-[clamp(40px,6.4vw,96px)] leading-[0.95] text-foreground-primary mobile:mb-5 mobile:text-[34px]">{t('getInTouch')}</h1>
            <ContactTabs
              tabs={[
                { id: 'brand', label: t('tabBrands'), intro: t('brandDescription'), panel: <BrandEnquiryForm labels={formLabels} roster={roster} /> },
                { id: 'talent', label: t('tabInfluencers'), intro: t('talentDescription'), panel: <TalentApplicationForm labels={formLabels} /> },
              ]}
            />
          </div>
        </div>
      </section>

      <OfficeMap
        heading={t('mapHeading')}
        intro={t('mapIntro')}
        openInMapsLabel={t('findOnMaps')}
        offices={OFFICES.map((office) => ({
          id: office.labelKey,
          city: office.city,
          label: t(office.labelKey),
          division: t(office.divisionKey),
          lines: office.lines.map((line) => line.replace(/,$/, '')),
          mapsUrl: office.search,
          lon: office.lon,
          lat: office.lat,
        }))}
      />

      {/* Office blocks with embedded maps: Dubai HQ (July 2026 R15), USA and the Netherlands (Oct 2026) */}
      <section className="bg-background-soft pt-[80px] pb-[100px] mobile:pt-[36px] mobile:pb-[48px] px-section-x">
        <div className="max-w-container mx-auto">
          <div className="max-w-[850px] mx-auto flex flex-col gap-8 mobile:gap-4">
            {OFFICES.map((office) => (
              <div
                key={office.labelKey}
                className="bg-background-light rounded-card shadow-[0_4px_40px_-10px_rgba(0,0,0,0.15)] overflow-hidden mobile:rounded-[16px]"
              >
                <div className="grid md:grid-cols-2">
                  <div className="flex flex-col justify-center p-[50px] tablet:p-[40px] mobile:p-[20px]">
                    <p className="font-jost text-[13px] font-medium uppercase tracking-[0.25em] text-foreground-gray mb-3 mobile:mb-2 mobile:text-[10.5px] mobile:tracking-[0.2em]">
                      {t(office.labelKey)}
                    </p>
                    <p className="font-anegra text-[24px] mobile:text-[18px] leading-[1.3] text-foreground-primary mb-5 mobile:mb-3">
                      {t(office.divisionKey)}
                    </p>
                    <p
                      dir="ltr"
                      className="font-work-sans text-[15px] leading-[1.9] text-foreground-body uppercase tracking-[0.05em] mb-8 mobile:mb-5 mobile:text-[12.5px] mobile:leading-[1.75]"
                    >
                      {office.lines.map((line, i) => (
                        <span key={line}>
                          {i > 0 && <br />}
                          {line}
                        </span>
                      ))}
                    </p>
                    <div>
                      <Button href={office.search} size="sm" unlocalized target="_blank">
                        {t('findOnMaps')}
                      </Button>
                    </div>
                  </div>
                  {/* Google draws either a large address card or a small button in
                      the top-left depending on the query; the top strip is cropped
                      off and our own "Open in Maps" button sits there instead, so
                      every office map looks the same. */}
                  <div className="relative h-[320px] overflow-hidden mobile:h-[180px] md:h-auto md:min-h-[340px]">
                    <iframe
                      src={office.embed}
                      title={t(office.mapTitleKey)}
                      className="absolute inset-x-0 bottom-0 h-[calc(100%+140px)] w-full border-0"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    <a
                      href={office.search}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute left-3 top-3 z-[1] inline-flex items-center gap-2 rounded-[2px] bg-white px-3 py-2 font-jost text-[13px] font-medium tracking-[0.04em] text-[#1a73e8] shadow-[0_1px_4px_rgba(0,0,0,0.3)] hover:bg-[#f8f9fa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a73e8]"
                    >
                      {t('openInMaps')}
                      <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="currentColor" aria-hidden="true">
                        <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
