import { getMessages, getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import Heading from '@/components/ui/Heading'
import HeadingAccent from '@/components/ui/HeadingAccent'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import ContactForm from '@/components/blocks/ContactForm'
import OfficeMap from '@/components/blocks/OfficeMap'
import { buildContactFormLabels } from '@/lib/contact/form-labels'
import GradientDivider from '@/components/ui/GradientDivider'
import { buildPageMetadata } from '@/lib/seo/metadata'

type Props = {
  params: Promise<{ locale: string }>
}

// Single source per office so each embed and its button can never point at
// different places.
// City-level zoom so both maps read the same way.
// The embed can take its own query: one that resolves to a single place makes
// Google show a large place card instead of Dubai's small "Open in Maps" link.
const mapsUrls = (address: string, embedAddress = address) => ({
  search: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
  embed: `https://www.google.com/maps?q=${encodeURIComponent(embedAddress)}&z=12&output=embed`,
})

const OFFICES = [
  {
    labelKey: 'hqLabel',
    divisionKey: 'hqDivision',
    mapTitleKey: 'mapTitle',
    city: 'Dubai',
    lon: 55.27,
    lat: 25.2,
    lines: ['Meydan Grandstand, 6th Floor,', 'Meydan Road, Nad Al Sheba,', 'Dubai, U.A.E.'],
    ...mapsUrls('Meydan Grandstand, Meydan Road, Nad Al Sheba, Dubai'),
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

export default async function ContactPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'contact' })
  const formLabels = buildContactFormLabels(await getMessages({ locale }))

  return (
    <>

      {/* Hero Section */}
      <section className="bg-background-soft py-[150px] mobile:py-[80px] px-section-x relative overflow-hidden">
        <div className="max-w-container mx-auto relative z-10">
          <div className="max-w-[850px] mx-auto">
            {/* Contact Form Card */}
            <div className="hero-rise-media bg-background-light rounded-card shadow-[0_4px_40px_-10px_rgba(0,0,0,0.15)] py-[70px] mobile:py-[50px] px-[70px] tablet:px-[50px] mobile:px-[30px]">
              {/* Header */}
              <div className="text-center mb-10">
                <Heading as="h1" color="dark" className="mb-4 tracking-[0.1px]">
                  {t('heading')}
                </Heading>
                <Text color="muted" size="sm" className="max-w-[550px] mx-auto">
                  {t('brandDescription')}
                </Text>
              </div>

              {/* Contact Form */}
              <div className="mb-2">
                <Heading as="h2" color="dark" className="mb-4 text-[24px] mobile:text-[20px]">
                  {t('brandInquiries')}
                </Heading>
                <HeadingAccent align="start" className="mb-6" />
                <ContactForm formId={2} labels={formLabels} />
              </div>

              <GradientDivider variant="dark" className="my-14" />

              {/* Talent Submission */}
              <div>
                <Heading as="h2" color="dark" className="mb-3 text-[24px] mobile:text-[20px]">
                  {t('talentSubmission')}
                </Heading>
                <HeadingAccent align="start" className="mb-4" />
                <Text color="muted" size="sm" className="mb-6">
                  {t('talentDescription')}
                </Text>
                <ContactForm formId={3} labels={formLabels} />
              </div>
            </div>
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
      <section className="bg-background-soft pb-[100px] mobile:pb-[60px] px-section-x">
        <div className="max-w-container mx-auto">
          <div className="max-w-[850px] mx-auto flex flex-col gap-8 mobile:gap-6">
            {OFFICES.map((office) => (
              <div
                key={office.labelKey}
                className="bg-background-light rounded-card shadow-[0_4px_40px_-10px_rgba(0,0,0,0.15)] overflow-hidden"
              >
                <div className="grid md:grid-cols-2">
                  <div className="flex flex-col justify-center p-[50px] tablet:p-[40px] mobile:p-[30px]">
                    <p className="font-jost text-[13px] font-medium uppercase tracking-[0.25em] text-foreground-gray mb-3">
                      {t(office.labelKey)}
                    </p>
                    <p className="font-anegra text-[24px] mobile:text-[21px] leading-[1.3] text-foreground-primary mb-5">
                      {t(office.divisionKey)}
                    </p>
                    <p
                      dir="ltr"
                      className="font-work-sans text-[15px] leading-[1.9] text-foreground-body uppercase tracking-[0.05em] mb-8"
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
                  <div className="relative h-[320px] overflow-hidden mobile:h-[260px] md:h-auto md:min-h-[340px]">
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
                      className="absolute left-3 top-3 z-[1] inline-flex items-center gap-2 rounded-[2px] bg-white px-3 py-2 font-[Roboto,Arial,sans-serif] text-[14px] font-medium text-[#1a73e8] shadow-[0_1px_4px_rgba(0,0,0,0.3)] hover:bg-[#f8f9fa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a73e8]"
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
