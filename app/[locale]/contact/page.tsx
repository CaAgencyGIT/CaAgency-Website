import { getMessages, getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import Heading from '@/components/ui/Heading'
import HeadingAccent from '@/components/ui/HeadingAccent'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import ContactForm from '@/components/blocks/ContactForm'
import { buildContactFormLabels } from '@/lib/contact/form-labels'
import GradientDivider from '@/components/ui/GradientDivider'
import { buildPageMetadata } from '@/lib/seo/metadata'

type Props = {
  params: Promise<{ locale: string }>
}

// Single source per office so each embed and its button can never point at
// different places.
const mapsUrls = (address: string) => {
  const query = encodeURIComponent(address)
  return {
    search: `https://www.google.com/maps/search/?api=1&query=${query}`,
    embed: `https://www.google.com/maps?q=${query}&output=embed`,
  }
}

const OFFICES = [
  {
    labelKey: 'hqLabel',
    mapTitleKey: 'mapTitle',
    lines: ['Meydan Grandstand, 6th Floor,', 'Meydan Road, Nad Al Sheba,', 'Dubai, U.A.E.'],
    ...mapsUrls('Meydan Grandstand, Meydan Road, Nad Al Sheba, Dubai'),
  },
  {
    labelKey: 'usOfficeLabel',
    mapTitleKey: 'usMapTitle',
    lines: ['Corporation Trust Center,', 'Orange Street,', 'Wilmington, DE 19801,', 'United States'],
    // Street number only in the map query, so the pin lands on the building.
    ...mapsUrls('Corporation Trust Center, 1209 N Orange St, Wilmington, DE 19801, United States'),
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

      {/* Office blocks with embedded maps: Dubai HQ (July 2026 R15) and USA (Oct 2026) */}
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
                    <p className="font-jost text-[13px] font-medium uppercase tracking-[0.25em] text-foreground-gray mb-5">
                      {t(office.labelKey)}
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
                  <div className="h-[320px] mobile:h-[260px] md:h-auto md:min-h-[340px]">
                    <iframe
                      src={office.embed}
                      title={t(office.mapTitleKey)}
                      className="h-full w-full border-0"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                    />
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
