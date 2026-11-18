import type { LocationLabels } from '@/lib/site-content/location-pages'
import type { TranslatedLocationPage } from '@/lib/site-content/location-pages-translated'

// French version of the France market page, served at /fr/<path>. Translated
// from the English defaults in europe-pages.ts; not editable in the admin.

export const frenchLocationLabels: LocationLabels = {
  intro: 'Qui sommes-nous',
  caseStudies: 'Études de cas',
  process: 'Notre méthode',
  highlights: 'Pourquoi CA Agency',
  talents: 'Nos créateurs',
  industries: 'Secteurs',
  faq: 'FAQ',
  otherMarkets: 'Autres marchés',
}

export const frenchLocationPages = {
  france: {
    path: '/influencer-marketing-france',
    title: "Agence d’influence beauté en France | CA Agency",
    description:
      "Agence de marketing d'influence pour la France : des créateurs francophones pour les marques de beauté et de soins sur Instagram, TikTok et YouTube.",
    ogImage: '/images/site/og/influencer-marketing-france-v1.jpg',
    areaServed: [{ '@type': 'Country', name: 'France' }],
    content: {
      hero: {
        title: "Agence d’influence beauté\nen France",
        subtitle:
          "Vous lancez un soin en France ? Nous sélectionnons des créateurs suivis en France et préparons avec eux une démonstration adaptée au produit et à son point de vente.",
        primaryButtonLabel: 'Commencer',
        primaryButtonHref: '/contact',
        secondaryButtonLabel: 'Voir nos réalisations',
        secondaryButtonHref: '/work',
      },
      stats: [
        { value: '3000+', label: 'Campagnes réalisées' },
        { value: '18M+', label: 'Abonnés cumulés' },
        { value: '150+', label: 'Marques internationales' },
        { value: 'France', label: 'Marché ciblé' },
      ],
      intro: {
        heading: "Une agence de marketing d'influence pour le marché français",
        paragraphs: [
          {
            text: "La France est l'un des marchés de la beauté les plus exigeants au monde. Les consommateurs français connaissent les soins de la peau, comparent avec de grandes marques locales et attendent des contenus en français. CA Agency conçoit des campagnes d'influence pour la France avec des créateurs francophones capables de présenter votre marque de façon crédible à ce public.",
          },
          {
            text: "La France encadre aussi le marketing d'influence plus strictement que la plupart des pays. Depuis la loi du 9 juin 2023 sur l'influence commerciale, les contenus rémunérés doivent porter clairement la mention « Publicité » ou « Collaboration commerciale », et certaines catégories de produits sont restreintes. Nous informons les créateurs de ces règles et vérifions chaque publication avant sa mise en ligne.",
          },
          {
            text: "Depuis notre division Europe à Amsterdam, nous gérons la sélection des créateurs, les contrats, la validation des contenus, les droits d'utilisation et le reporting. Votre équipe dispose ainsi d'un seul interlocuteur pour la France et pour tout marché voisin que vous ajouterez ensuite.",
          },
        ],
      },
      caseStudies: {
        title: 'Comment montrer un soin en quelques secondes ?',
        subtitle: 'Pour un lancement en enseigne, fournissez le nom français du produit, la teinte ou le format vendu, la date de mise en rayon et le lien vers la fiche produit. Vérifiez le stock avant la publication.',
        items: [
          { brand: 'Arencia × Albina Mavriqi', name: 'Le geste d’application du NAD+ Booster Shot en gros plan', image: '/images/video-thumbs/case-arencia-albina-v2.jpg', href: '/case-studies/arencia-albina' },
        ],
      },
      highlights: {
        title: "Pourquoi les marques choisissent notre agence d'influence en France",
        items: [
          { title: 'Des créateurs francophones', description: "Les contenus sont créés en français par des créateurs dont la communauté vit en France, et non traduits d'un autre marché." },
          { title: 'La conformité dès le départ', description: 'Chaque brief prévoit la mention « Publicité » ou « Collaboration commerciale » exigée pour les contenus rémunérés en France.' },
          { title: 'Une expertise beauté', description: 'Nous travaillons surtout avec des marques de beauté et de soins et savons positionner un nouveau nom face aux marques françaises établies.' },
          { title: 'Un reporting transparent', description: 'Portée, engagement, clics et conversions sont présentés clairement après chaque activation.' },
        ],
      },
      talents: { title: 'Des créateurs pour vos campagnes en France', buttonLabel: 'Voir tous les talents', buttonHref: '/talents' },
      industries: {
        title: 'Les secteurs les plus performants',
        items: [
          { icon: '💄', title: 'Beauté', description: 'Les contenus maquillage fonctionnent très bien auprès d’un public français passionné de beauté.' },
          { icon: '🧴', title: 'Soins de la peau', description: 'Les routines et les contenus sur les ingrédients aident les nouvelles marques à trouver leur place à côté des références de pharmacie.' },
          { icon: '👗', title: 'Mode', description: "Les contenus de style rapprochent les marques de l'un des publics les plus attentifs à la mode en Europe." },
        ],
      },
      faq: {
        title: "Marketing d'influence en France : questions fréquentes",
        items: [
          {
            question: 'Travaillez-vous avec des influenceurs francophones ?',
            answer: 'Oui. Les campagnes pour la France sont confiées à des créateurs qui publient en français et dont l’audience se trouve principalement en France. La même approche vaut pour la Suisse romande et la Belgique.',
          },
          {
            question: "Quelles sont les règles de la publicité d'influence en France ?",
            answer: "La loi du 9 juin 2023 sur l'influence commerciale impose d'indiquer clairement « Publicité » ou « Collaboration commerciale » sur les contenus rémunérés et restreint la promotion de certains produits et services. Nous intégrons ces exigences dans chaque brief et vérifions chaque publication avant validation.",
          },
          {
            question: "Quelles plateformes fonctionnent le mieux pour le marketing d'influence en France ?",
            answer: 'Instagram et TikTok dominent pour la beauté, les soins et la mode, et YouTube reste efficace pour les avis détaillés et les routines. Nous recommandons la combinaison adaptée à votre audience et à vos objectifs.',
          },
          {
            question: "Combien coûte une campagne d'influence en France ?",
            answer: "Le coût dépend de la plateforme, du profil et du nombre de créateurs, des contenus à produire et des droits d'utilisation. Nous dimensionnons chaque campagne selon votre budget et vos objectifs plutôt que d'annoncer un tarif fixe.",
          },
          {
            question: 'Pouvez-vous aider une marque de beauté internationale à se lancer en France ?',
            answer: 'Oui. Nous aidons les marques étrangères, notamment les marques de beauté coréennes, à choisir les bons créateurs, à adapter leur message aux consommateurs français et à se lancer avec des contenus conformes, créés localement.',
          },
        ],
      },
      cta: {
        title: 'Lancez votre campagne en France',
        description: 'Touchez le public français avec des créateurs adaptés à votre marque et à vos objectifs.',
        buttonLabel: 'Nous contacter',
        buttonHref: '/contact',
      },
    },
  },
} satisfies Record<string, TranslatedLocationPage>
