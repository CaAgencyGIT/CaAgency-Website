import type { LocationLabels } from '@/lib/site-content/location-pages'
import type { TranslatedLocationPage } from '@/lib/site-content/location-pages-translated'

// German versions of the Germany and Switzerland market pages, served at
// /de/<path>. Translated from the English defaults in europe-pages.ts; like
// the Arabic Gulf pages they are not editable in the admin.

export const germanLocationLabels: LocationLabels = {
  intro: 'Wer wir sind',
  caseStudies: 'Fallstudien',
  process: 'So arbeiten wir',
  highlights: 'Warum CA Agency',
  talents: 'Unsere Creators',
  industries: 'Branchen',
  faq: 'FAQ',
  otherMarkets: 'Weitere Märkte',
}

const buttons = {
  primaryButtonLabel: 'Jetzt starten',
  primaryButtonHref: '/contact',
  secondaryButtonLabel: 'Unsere Arbeit ansehen',
  secondaryButtonHref: '/work',
}

const agencyStats = (market: string) => [
  { value: '3000+', label: 'Umgesetzte Kampagnen' },
  { value: '18M+', label: 'Follower insgesamt' },
  { value: '150+', label: 'Globale Marken' },
  { value: market, label: 'Marktfokus' },
]

export const germanLocationPages = {
  germany: {
    path: '/influencer-marketing-germany',
    title: 'Influencer-Marketing-Agentur für Deutschland | CA Agency',
    description:
      'Influencer-Marketing-Agentur für Deutschland und den DACH-Raum: deutschsprachige Creators für Beauty- und Hautpflegemarken auf Instagram, TikTok und YouTube.',
    ogImage: '/images/site/og/influencer-marketing-germany-v1.jpg',
    areaServed: [
      { '@type': 'Country', name: 'Germany' },
      { '@type': 'Country', name: 'Austria' },
      { '@type': 'Country', name: 'Switzerland' },
    ],
    content: {
      hero: {
        title: 'Influencer-Marketing-Agentur\nfür Deutschland',
        subtitle:
          'CA Agency ist eine Influencer-Marketing-Agentur für Deutschland und die DACH-Region. Wir verbinden Beauty- und Hautpflegemarken mit deutschsprachigen Creators auf Instagram, TikTok und YouTube.',
        ...buttons,
        primaryButtonLabel: 'Kampagne anfragen',
      },
      stats: agencyStats('DACH'),
      intro: {
        heading: 'Die Influencer-Marketing-Agentur für Deutschland, Österreich und die Schweiz',
        paragraphs: [
          {
            text: 'Deutschland ist der größte Verbrauchermarkt der Europäischen Union, und das deutsche Publikum erwartet Inhalte in der eigenen Sprache, von Creators, denen es bereits vertraut. CA Agency plant Influencer-Kampagnen für Deutschland mit deutschsprachigen Creators, damit Ihr Produkt so erklärt wird, wie Ihre Kundinnen und Kunden danach fragen.',
          },
          {
            text: 'Für einen Start im deutschen Handel gehört der konkrete Verkaufsort ins Briefing. Ein Video kann zeigen, wie die Verpackung im Regal aussieht, ein anderes führt direkt zur Produktseite des Händlers. Wir stimmen die Auswahl der Creators, die Freigaben und die Nutzungsrechte mit Ihrem Team ab.',
          },
          {
            text: 'Da Deutsch auch in Österreich und im größten Teil der Schweiz gesprochen wird, erreicht eine gut geplante Kampagne die gesamte DACH-Region. Wir passen die Creator-Auswahl und die Details an, die sich je Land unterscheiden, und werten jeden Markt getrennt aus.',
          },
        ],
      },
      caseStudies: {
        title: 'So zeigen unsere Creators Hautpflege im Einsatz',
        subtitle: 'Drei Beispiele aus unserer Arbeit zeigen, wie unsere Creators Textur und Anwendung für Beauty-Marken sichtbar machen.',
        items: [
          { brand: 'Purito × Ardita Gashi', name: 'Eine Pflegeroutine mit der Oat-in Calming Gel Cream', image: '/images/video-thumbs/case-purito-ardita-v1.jpg', href: '/case-studies/purito-ardita' },
          { brand: 'Arencia × Albina Mavriqi', name: 'Der NAD+ Booster Shot in der Nahaufnahme', image: '/images/video-thumbs/case-arencia-albina-v2.jpg', href: '/case-studies/arencia-albina' },
          { brand: 'First Aid Beauty × Albulena Mavriqi', name: 'Hautpflege als Basis für Foundation', image: '/images/video-thumbs/case-first-aid-beauty-albulena-v1.jpg', href: '/case-studies/first-aid-beauty-albulena' },
        ],
      },
      highlights: {
        title: 'Warum Marken unsere Influencer-Agentur für Deutschland wählen',
        items: [
          { title: 'Inhalte auf Deutsch', description: 'Creators sprechen ihre Community auf Deutsch an. Das schafft Vertrauen und hilft bei der Suche auf TikTok und YouTube.' },
          { title: 'Klare Werbekennzeichnung', description: 'Bezahlte Beiträge müssen in Deutschland als „Werbung“ oder „Anzeige“ gekennzeichnet sein. Das steht in jedem Briefing und wird vor der Freigabe geprüft.' },
          { title: 'Reichweite im DACH-Raum', description: 'Ein Kampagnenkonzept lässt sich von Deutschland auf Österreich und die Deutschschweiz ausweiten.' },
          { title: 'Substanz statt Hype', description: 'Wir setzen auf Creators, die Produkte gründlich erklären, weil deutsche Käufer auf Inhalte mit Substanz reagieren.' },
        ],
      },
      talents: { title: 'Creators für Ihre Kampagne in Deutschland', buttonLabel: 'Alle Talente ansehen', buttonHref: '/talents' },
      industries: {
        title: 'Die stärksten Branchen',
        items: [
          { icon: '🧴', title: 'Hautpflege', description: 'Inhalte rund um Inhaltsstoffe passen dazu, wie deutsche Verbraucher vor dem Kauf recherchieren.' },
          { icon: '💄', title: 'Beauty', description: 'Tutorials und ehrliche erste Eindrücke helfen neuen Make-up-Marken, Vertrauen aufzubauen.' },
          { icon: '💪', title: 'Gesundheit & Wellness', description: 'Creator-Inhalte aus dem Alltag sorgen bei Wellness-Marken für langfristige Bindung.' },
        ],
      },
      faq: {
        title: 'Influencer Marketing in Deutschland: häufige Fragen',
        items: [
          {
            question: 'Arbeiten Sie mit deutschsprachigen Influencern?',
            answer: 'Ja. Für Kampagnen in Deutschland, Österreich und der Deutschschweiz briefen wir Creators, die auf Deutsch posten und deren Follower überwiegend im DACH-Raum leben.',
          },
          {
            question: 'Wie funktioniert die Werbekennzeichnung in Deutschland?',
            answer: 'Bezahlte Creator-Inhalte müssen klar als Werbung erkennbar sein. In der Praxis heißt das: ein gut sichtbarer Hinweis „Werbung“ oder „Anzeige“ am Anfang des Beitrags, auf Deutsch. Das ist Teil jedes Briefings, und wir prüfen jeden Beitrag vor der Freigabe.',
          },
          {
            question: 'Welche Plattformen eignen sich in Deutschland am besten?',
            answer: 'Instagram und TikTok sind bei Beauty, Hautpflege und Lifestyle führend, YouTube bleibt stark für ausführliche Reviews. Wir empfehlen den Mix passend zu Ihrer Zielgruppe und Ihrem Kampagnenziel.',
          },
          {
            question: 'Was kostet eine Influencer-Kampagne in Deutschland?',
            answer: 'Das hängt von der Plattform, der Größe und Anzahl der Creators, den Inhalten und den Nutzungsrechten ab. Wir planen jede Kampagne nach Ihrem Budget und Ihren Zielen, statt einen Pauschalpreis zu nennen.',
          },
          {
            question: 'Kann eine Kampagne Deutschland, Österreich und die Schweiz abdecken?',
            answer: 'Ja. Die gemeinsame Sprache macht DACH-Kampagnen effizient. Wir planen ein gemeinsames Konzept, ergänzen bei Bedarf Creators je Land und werten jeden Markt getrennt aus.',
          },
        ],
      },
      cta: {
        title: 'Starten Sie Ihre Kampagne in Deutschland',
        description: 'Erreichen Sie ein deutschsprachiges Publikum mit Creators, die zu Ihrer Marke und Ihren Zielen passen.',
        buttonLabel: 'Kontakt aufnehmen',
        buttonHref: '/contact',
      },
    },
  },
  switzerland: {
    path: '/influencer-marketing-switzerland',
    title: 'Influencer Marketing Agentur Schweiz | CA Agency',
    description:
      'Influencer-Marketing-Agentur für die Schweiz: Creator-Kampagnen für Beauty- und Hautpflegemarken in der Deutschschweiz, der Romandie und im Tessin.',
    ogImage: '/images/site/og/influencer-marketing-switzerland-v1.jpg',
    areaServed: [{ '@type': 'Country', name: 'Switzerland' }],
    content: {
      hero: {
        title: 'Influencer Marketing\nAgentur Schweiz',
        subtitle:
          'CA Agency ist eine Influencer-Marketing-Agentur für die Schweiz. Wir setzen Creator-Kampagnen für Beauty- und Hautpflegemarken in der Deutschschweiz, der Romandie und im Tessin um.',
        ...buttons,
      },
      stats: agencyStats('Schweiz'),
      intro: {
        heading: 'Die Influencer-Marketing-Agentur für die mehrsprachige Schweiz',
        paragraphs: [
          {
            text: 'Die Schweiz ist ein kleiner Markt mit hoher Kaufkraft und mehreren Sprachen. Eine Kampagne für Zürich braucht deutschsprachige Creators, Genf und Lausanne brauchen Französisch, das Tessin Italienisch. CA Agency plant Influencer-Kampagnen für die Schweiz Region für Region, damit jedes Publikum in seiner Sprache von Ihrer Marke erfährt.',
          },
          {
            text: 'Schweizer Konsumentinnen und Konsumenten legen Wert auf Qualität und Zurückhaltung und reagieren auf Creators, die lokal wirken. Wir wählen Creators aus, deren Follower tatsächlich in der Schweiz leben, prüfen die Zielgruppendaten vor jeder Empfehlung und achten auf eine klare Werbekennzeichnung nach den Schweizer Lauterkeitsregeln.',
          },
          {
            text: 'Weil die Schweiz ihre Sprachen mit Deutschland, Österreich und Frankreich teilt, kann eine Schweizer Kampagne für sich stehen oder Teil eines DACH- oder Europa-Plans sein. Unsere Europa-Division in Amsterdam betreut Creators, Verträge, Freigaben und Reporting aus einer Hand.',
          },
        ],
      },
      process: {
        title: 'Das Briefing nach Sprachregion planen',
        steps: [
          { title: 'Deutschschweiz', description: 'Klären Sie mit der Creatorin oder dem Creator, ob Dialekt oder Hochdeutsch zur Community passt. Prüfen Sie die Reichweite in der Schweiz separat von der Reichweite in Deutschland.' },
          { title: 'Romandie', description: 'Briefen Sie auf Französisch und verlinken Sie die französischsprachige Schweizer Produktseite. Prüfen Sie den Preis in Franken und die Lieferbedingungen für die Schweiz.' },
          { title: 'Tessin', description: 'Stimmen Sie die italienische Produktbezeichnung, den Preis in Franken und den lokalen Händler ab. Fragen Sie nach dem Anteil des Publikums im Tessin.' },
        ],
      },
      highlights: {
        title: 'Warum Marken unsere Influencer-Agentur für die Schweiz wählen',
        items: [
          { title: 'Drei Sprachregionen', description: 'Wir planen die Deutschschweiz, die Romandie und das Tessin getrennt und werten jede Region aus.' },
          { title: 'Echtes Schweizer Publikum', description: 'Wir prüfen, wo die Follower eines Creators leben, damit Ihr Budget Reichweite in der Schweiz erzielt.' },
          { title: 'Premium-Positionierung', description: 'Die Inhalte passen zu einem qualitätsbewussten Publikum mit hohen Erwartungen an Marken.' },
          { title: 'Teil eines grösseren Plans', description: 'Schweizer Aktivitäten lassen sich ohne zusätzliche Agenturen mit Kampagnen in Deutschland, Österreich und Frankreich verbinden.' },
        ],
      },
      talents: { title: 'Creators für Ihre Kampagne in der Schweiz', buttonLabel: 'Alle Talente ansehen', buttonHref: '/talents' },
      industries: {
        title: 'Die stärksten Branchen',
        items: [
          { icon: '🧴', title: 'Hautpflege', description: 'Premium-Hautpflege passt zu einem Publikum, das für Qualität und belegte Wirkung bezahlt.' },
          { icon: '💄', title: 'Beauty', description: 'Durchdachte, ehrliche Beauty-Inhalte wirken hier besser als laute Werbung.' },
          { icon: '⌚', title: 'Luxus & Lifestyle', description: 'Creator-Inhalte zeigen Premium-Produkte in einem erstrebenswerten, aber glaubwürdigen Alltag.' },
        ],
      },
      faq: {
        title: 'Influencer Marketing in der Schweiz: häufige Fragen',
        items: [
          {
            question: 'Welche Sprachregionen der Schweiz decken Sie ab?',
            answer: 'Wir planen Kampagnen für die Deutschschweiz, die Romandie und das Tessin. Die meisten Marken beginnen in der Deutschschweiz und ergänzen französischsprachige Creators für landesweite Reichweite.',
          },
          {
            question: 'Kann ich meine deutsche Kampagne in der Schweiz weiterverwenden?',
            answer: 'Teilweise. Die Sprache lässt sich übernehmen, aber das Schweizer Publikum reagiert am besten auf Creators, die in der Schweiz leben. In der Regel behalten wir die Kampagnenidee bei und setzen sie mit Schweizer Creators um.',
          },
          {
            question: 'Wie werden bezahlte Inhalte in der Schweiz gekennzeichnet?',
            answer: 'Bezahlte Creator-Inhalte müssen nach den Schweizer Lauterkeitsregeln klar als Werbung erkennbar sein. Ein eindeutiger Werbehinweis ist Teil jedes Briefings und wird vor der Freigabe geprüft.',
          },
          {
            question: 'Was kostet eine Influencer-Kampagne in der Schweiz?',
            answer: 'Das hängt von den Sprachregionen, der Plattform, der Größe und Anzahl der Creators und den Nutzungsrechten ab. Wir planen jede Kampagne nach Ihrem Budget und Ihren Zielen, statt einen Pauschalpreis zu nennen.',
          },
        ],
      },
      cta: {
        title: 'Starten Sie Ihre Kampagne in der Schweiz',
        description: 'Erreichen Sie das Schweizer Publikum in der richtigen Sprache, mit Creators, die zu Ihrer Marke passen.',
        buttonLabel: 'Kontakt aufnehmen',
        buttonHref: '/contact',
      },
    },
  },
} satisfies Record<string, TranslatedLocationPage>
