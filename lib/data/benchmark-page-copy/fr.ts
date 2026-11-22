import type { BenchmarkCopy, BenchmarkData, Tier } from '@/lib/data/benchmark-page-copy'

// French copy of the benchmark page. Every number comes from the data through
// `f`; the English page (lib/data/benchmark-page-copy.ts) is the original.

const tier = (d: BenchmarkData['tiktok']['tiers'] | BenchmarkData['instagram']['tiers'], name: Tier) =>
  (d as readonly { tier: string; viewsPerFollower: number }[]).find((t) => t.tier === name)!.viewsPerFollower

export const frBenchmarkCopy: BenchmarkCopy = {
  metaTitle: 'Benchmarks des créateurs beauté 2026 : TikTok et Instagram Reels',
  metaDescription: (d, f) =>
    `Benchmarks 2026 inédits issus de ${f.int(d.tiktok.posts)} TikToks et ${f.int(d.instagram.reels)} Instagram Reels des créateurs beauté et soin de la peau de CA Agency : portée par abonné, engagement et meilleures durées de vidéo.`,
  keywords: [
    'benchmarks marketing d’influence 2026',
    'statistiques tiktok créateurs beauté',
    'benchmark instagram reels',
    'vues tiktok par abonné',
    'taux d’engagement influenceur 2026',
    'durée idéale vidéo tiktok',
  ],
  eyebrow: (date) => `Étude CA Agency · ${date}`,
  title: 'Benchmarks des créateurs beauté 2026 : TikTok et Instagram Reels',
  intro: (d, f) =>
    `Quels résultats un créateur beauté ou soin de la peau obtient-il réellement par publication ? Ces benchmarks reposent sur ${f.int(d.tiktok.posts)} TikToks de ${d.tiktok.creators} créateurs et ${f.int(d.instagram.reels)} Instagram Reels de ${d.instagram.creators} créateurs du propre roster de talents de CA Agency, à partir des nombres publics de vues, de likes et de commentaires. Chaque chiffre est une médiane : aucun créateur ne peut être identifié et aucun grand compte ne peut à lui seul fausser le résultat.`,
  findingsEyebrow: 'Principaux enseignements',
  findingsTitle: 'Cinq chiffres à retenir',
  findings: (d, f, label) => {
    const tt = d.tiktok
    const ig = d.instagram
    const L = tt.lengths
    const shortest = L[0]
    const longest = L[L.length - 1]
    const weakest = [...L].sort((a, b) => a.vsCreatorTypical - b.vsCreatorTypical)[0]
    const commonest = [...L].sort((a, b) => b.shareOfVideos - a.shareOfVideos)[0]
    return [
      {
        title: 'Un TikTok type touche environ la moitié des abonnés',
        body: `Le nombre médian de vues par vidéo équivaut à ${f.pct(tt.viewsPerFollower)} des abonnés. Cette part diminue à mesure que les comptes grandissent : ${f.pct(tier(tt.tiers, 'under 100K'))} sous 100K abonnés, ${f.pct(tier(tt.tiers, '100K–500K'))} entre 100K et 500K et ${f.pct(tier(tt.tiers, '500K+'))} au-delà de 500K.`,
      },
      {
        title: 'Les Instagram Reels conservent leur portée à grande échelle',
        body: `Un Reel type touche ${f.pct(ig.viewsPerFollower)} des abonnés : ${f.pct(tier(ig.tiers, 'under 100K'))} sous 100K, ${f.pct(tier(ig.tiers, '100K–500K'))} entre 100K et 500K et encore ${f.pct(tier(ig.tiers, '500K+'))} au-delà de 500K.`,
      },
      {
        title: 'Les TikToks très courts et longs devancent les formats intermédiaires',
        body: `Par rapport à la vidéo type de chaque créateur, les clips de ${label.length(shortest.length)} obtiennent ${f.times(shortest.vsCreatorTypical)} les vues et les vidéos de ${label.length(longest.length)} ${f.times(longest.vsCreatorTypical)}. La durée ${label.length(weakest.length)} est la moins performante (${f.times(weakest.vsCreatorTypical)}), et pourtant la plupart des vidéos (${f.pct(commonest.shareOfVideos)}) durent ${label.length(commonest.length)}.`,
      },
      {
        title: 'des TikToks dépassent 100 000 vues',
        body: `${f.pct(tt.shareOver1M)} dépassent un million. Le créateur type publie environ ${Math.round(tt.postsPerWeek)} TikToks par semaine.`,
      },
      {
        title: 'Engagement TikTok par vue',
        body: `Les likes et commentaires représentent ${f.pct(tt.engagementPerView)} des vues TikTok et ${f.pct(ig.engagementPerView)} des vues de Reels (${f.pct(ig.engagementPerFollower)} des abonnés).`,
      },
    ]
  },
  tiktokEyebrow: 'TikTok',
  tiktokTitle: 'Portée et engagement selon la taille du compte',
  tiktokHead: ['Abonnés', 'Créateurs', 'Vues médianes par vidéo', 'Vues en % des abonnés', 'Engagement par vue'],
  instagramEyebrow: 'Instagram',
  instagramTitle: 'Reels selon la taille du compte',
  instagramHead: ['Abonnés', 'Créateurs', 'Vues médianes par Reel', 'Vues en % des abonnés', 'Engagement par abonné'],
  lengthTitle: 'Vues selon la durée de la vidéo',
  lengthHead: ['Durée', 'Part des vidéos', 'Vues par rapport à la vidéo type du créateur'],
  tier: { 'under 100K': 'moins de 100K', '100K–500K': '100K–500K', '500K+': '500K+' },
  length: { '≤10 s': '≤10 s', '11–20 s': '11–20 s', '21–30 s': '21–30 s', '31–60 s': '31–60 s', 'over 60 s': 'plus de 60 s' },
  methodTitle: 'Notre méthode',
  method: (d, f, p) => [
    'Créateurs : le roster de talents de CA Agency, principalement beauté, soin de la peau et lifestyle, basés aux Émirats arabes unis, en Europe, aux États-Unis, en Afrique du Sud et en Asie centrale.',
    `TikTok : ${d.tiktok.creators} créateurs, ${f.int(d.tiktok.posts)} vidéos publiées du ${f.date(p.from)} au ${f.date(p.to)} (l’historique complet de la période).`,
    `Instagram : ${d.instagram.creators} créateurs, ${f.int(d.instagram.reels)} Reels (les Reels les plus récents de chaque créateur).`,
    `Chiffres publics relevés le ${f.date(p.readOn)}. Les publications des 7 derniers jours ont été exclues, car leurs chiffres progressaient encore.`,
    'Médianes par créateur, puis entre créateurs. La durée des vidéos est comparée à la vidéo type de chaque créateur.',
  ],
  caveatsTitle: 'À lire avec précaution',
  caveats: (d, _f, bands) => [
    'Il s’agit du roster d’une seule agence, sélectionné pour ses performances, et non du marché dans son ensemble : lisez ces chiffres comme ce qu’obtient un créateur beauté performant, et non comme une moyenne du secteur.',
    `De ${d.tiktok.creators} à ${d.instagram.creators} créateurs, l’échantillon reste modeste ; chaque tranche d’abonnés repose sur ${bands.min} à ${bands.max} créateurs.`,
    `L’engagement Instagram exclut les ${d.instagram.creators - d.instagram.creatorsWithLikes} créateurs qui masquent leurs likes.`,
  ],
  license: { before: 'Libre de citation sous licence ', after: ', en mentionnant CA Agency.' },
  faqEyebrow: 'FAQ',
  faqTitle: 'Questions sur ces benchmarks',
  faq: (d, f, label) => {
    const tt = d.tiktok
    const ig = d.instagram
    const L = tt.lengths
    const shortest = L[0]
    const longest = L[L.length - 1]
    const weakest = [...L].sort((a, b) => a.vsCreatorTypical - b.vsCreatorTypical)[0]
    return [
      {
        question: 'Combien de vues un créateur beauté obtient-il par TikTok en 2026 ?',
        answer: `Sur le roster de CA Agency, le TikTok médian touche ${f.pct(tt.viewsPerFollower)} du nombre d’abonnés du créateur. Les créateurs de moins de 100K abonnés touchent environ ${f.pct(tier(tt.tiers, 'under 100K'))}, et ceux de plus de 500K environ ${f.pct(tier(tt.tiers, '500K+'))}. ${f.pct(tt.shareOver100K)} des vidéos dépassent 100 000 vues.`,
      },
      {
        question: 'Les Instagram Reels touchent-ils plus d’abonnés que les TikToks ?',
        answer: `Dans ces données, les Reels conservent mieux leur portée à mesure que les comptes grandissent : un Reel type touche ${f.pct(ig.viewsPerFollower)} des abonnés et encore ${f.pct(tier(ig.tiers, '500K+'))} pour les comptes de plus de 500K, contre ${f.pct(tier(tt.tiers, '500K+'))} pour les TikToks à taille égale.`,
      },
      {
        question: 'Quelle est la durée idéale d’une vidéo TikTok pour du contenu beauté ?',
        answer: `Les clips très courts (${label.length(shortest.length)}) ont obtenu ${f.times(shortest.vsCreatorTypical)} et les vidéos longues (${label.length(longest.length)}) ${f.times(longest.vsCreatorTypical)} les vues de la vidéo type de chaque créateur, tandis que la durée ${label.length(weakest.length)} a fait le moins bien, à ${f.times(weakest.vsCreatorTypical)}. La durée n’est qu’un facteur parmi d’autres : l’accroche, le sujet et le moment de publication comptent aussi.`,
      },
      {
        question: 'Quel est un bon taux d’engagement pour un créateur beauté en 2026 ?',
        answer: `Les likes et commentaires ont représenté ${f.pct(tt.engagementPerView)} des vues sur TikTok et ${f.pct(ig.engagementPerView)} des vues sur Instagram Reels (${f.pct(ig.engagementPerFollower)} des abonnés) pour le créateur médian de notre roster.`,
      },
      {
        question: 'Puis-je citer ces chiffres ?',
        answer: 'Oui. Les chiffres sont publiés sous licence CC BY 4.0 : citez-les en mentionnant CA Agency, avec un lien (caagency.com/influencer-benchmarks-2026).',
      },
    ]
  },
  ctaTitle: 'Planifiez une campagne sur des chiffres réels',
  cta: {
    before: 'Découvrez les performances de ces créateurs pour les marques dans nos ',
    link: 'études de cas',
    after: ', ou parlez-nous de votre lancement et nous vous mettrons en relation avec les bons créateurs.',
  },
  ctaButton: 'Lancez votre campagne',
  translationNote: 'Cette page est une traduction. Version originale en ',
}
