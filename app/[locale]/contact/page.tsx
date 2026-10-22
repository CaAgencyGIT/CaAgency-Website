import { getMessages, getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import ContactForm from '@/components/blocks/ContactForm'
import Film from '@/components/redesign/Film'
import { buildContactFormLabels } from '@/lib/contact/form-labels'
import type { FilmKey } from '@/lib/data/redesign-media'
import { buildPageMetadata } from '@/lib/seo/metadata'

type Props = {
  params: Promise<{ locale: string }>
}

// Single source for the HQ address so the embed and the button can never
// point at different places.
const HQ_MAPS_QUERY = encodeURIComponent('Meydan Grandstand, Meydan Road, Nad Al Sheba, Dubai')
const HQ_MAPS_SEARCH_URL = `https://www.google.com/maps/search/?api=1&query=${HQ_MAPS_QUERY}`
const HQ_MAPS_EMBED_URL = `https://www.google.com/maps?q=${HQ_MAPS_QUERY}&output=embed`

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

const contactFilms: FilmKey[] = ['albina-medicube', 'melani-dalba', 'beatrix-gisou', 'skincare']

export default async function ContactPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'contact' })
  const tCommon = await getTranslations({ locale, namespace: 'common' })
  const formLabels = buildContactFormLabels(await getMessages({ locale }))
  const labels = { play: tCommon('play'), pause: tCommon('pause'), playVideo: tCommon('playVideo'), pauseVideo: tCommon('pauseVideo') }

  return (
    <div className="rd">
      <section className="rd-section rd-page-hero">
        <div>
          <h1>{t('heading')}</h1>
        </div>
        <div className="rd-hero-description">
          <p>{t('brandDescription')}</p>
        </div>
      </section>

      <section className="rd-section rd-contact-layout">
        <div className="rd-contact-films">
          <div className="rd-contact-film-grid">
            {contactFilms.map((film) => (
              <Film key={film} film={film} sizes="(max-width: 760px) 25vw, 17vw" labels={labels} />
            ))}
          </div>
        </div>
        <div className="rd-contact-forms">
          <div className="rd-contact-form">
            <h2>{t('brandInquiries')}</h2>
            <ContactForm formId={2} variant="editorial" labels={formLabels} />
          </div>
          <div className="rd-contact-form">
            <h2>{t('talentSubmission')}</h2>
            <p>{t('talentDescription')}</p>
            <ContactForm formId={3} variant="editorial" labels={formLabels} />
          </div>
        </div>
      </section>

      {/* CA Agency HQ office block with embedded map (July 2026 R15) */}
      <section className="rd-address">
        <div className="mx-auto grid max-w-[calc(1600px-10vw)] gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p>{t('hqLabel')}</p>
            <p dir="ltr">
              Meydan Grandstand, 6th Floor,
              <br />
              Meydan Road, Nad Al Sheba,
              <br />
              Dubai, U.A.E.
            </p>
            <a href={HQ_MAPS_SEARCH_URL} target="_blank" rel="noopener noreferrer">
              {t('findOnMaps')}
            </a>
          </div>
          <div className="h-[260px] overflow-hidden rounded-[8px] md:h-[320px]">
            <iframe
              src={HQ_MAPS_EMBED_URL}
              title={t('mapTitle')}
              className="h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
