import type { BenchmarkCopy, BenchmarkData, Tier } from '@/lib/data/benchmark-page-copy'

// German copy of the benchmark page (/de/influencer-benchmarks-2026).
// Every number comes from the data through `f`, exactly as in the English copy.

const tier = (d: BenchmarkData['tiktok']['tiers'] | BenchmarkData['instagram']['tiers'], name: Tier) =>
  (d as readonly { tier: string; viewsPerFollower: number }[]).find((t) => t.tier === name)!.viewsPerFollower

export const deBenchmarkCopy: BenchmarkCopy = {
  metaTitle: 'Benchmarks für Beauty-Creator 2026: TikTok und Instagram Reels',
  metaDescription: (d, f) =>
    `Eigene Benchmarks 2026 aus ${f.int(d.tiktok.posts)} TikToks und ${f.int(d.instagram.reels)} Instagram Reels der Beauty- und Skincare-Creator von CA Agency: Reichweite pro Follower, Engagement und die besten Videolängen.`,
  keywords: [
    'influencer marketing benchmarks 2026',
    'tiktok aufrufe pro follower',
    'engagement rate influencer 2026',
    'instagram reels reichweite benchmarks',
    'beauty influencer tiktok benchmarks',
    'optimale tiktok videolänge',
  ],
  eyebrow: (date) => `CA Agency Research · ${date}`,
  title: 'Benchmarks für Beauty-Creator 2026: TikTok und Instagram Reels',
  intro: (d, f) =>
    `Was erreicht ein Beauty- oder Skincare-Creator tatsächlich pro Beitrag? Diese Benchmarks basieren auf ${f.int(d.tiktok.posts)} TikToks von ${d.tiktok.creators} Creatorn und ${f.int(d.instagram.reels)} Instagram Reels von ${d.instagram.creators} Creatorn aus dem eigenen Talent-Roster von CA Agency, ausgewertet anhand der öffentlichen Aufrufe, Likes und Kommentare. Jeder Wert ist ein Median: So lässt sich kein einzelner Creator identifizieren, und kein einzelner großer Account kann das Ergebnis verzerren.`,
  findingsEyebrow: 'Die wichtigsten Ergebnisse',
  findingsTitle: 'Fünf Zahlen, die Sie kennen sollten',
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
        title: 'Ein typisches TikTok erreicht etwa die Hälfte der Follower',
        body: `Die mittleren Aufrufe pro Video entsprechen ${f.pct(tt.viewsPerFollower)} der Follower. Mit wachsender Account-Größe sinkt dieser Anteil: ${f.pct(tier(tt.tiers, 'under 100K'))} unter 100K Followern, ${f.pct(tier(tt.tiers, '100K–500K'))} bei 100K–500K und ${f.pct(tier(tt.tiers, '500K+'))} über 500K.`,
      },
      {
        title: 'Instagram Reels halten ihre Reichweite auch bei großen Accounts',
        body: `Ein typisches Reel erreicht ${f.pct(ig.viewsPerFollower)} der Follower: ${f.pct(tier(ig.tiers, 'under 100K'))} unter 100K, ${f.pct(tier(ig.tiers, '100K–500K'))} bei 100K–500K und immer noch ${f.pct(tier(ig.tiers, '500K+'))} über 500K.`,
      },
      {
        title: 'Sehr kurze und lange TikToks schlagen die mittlere Länge',
        body: `Verglichen mit dem typischen Video des jeweiligen Creators erzielen Clips mit ${label.length(shortest.length)} das ${f.times(shortest.vsCreatorTypical)} an Aufrufen und Videos mit ${label.length(longest.length)} das ${f.times(longest.vsCreatorTypical)}. ${label.length(weakest.length)} ist die schwächste Länge (${f.times(weakest.vsCreatorTypical)}), dennoch sind die meisten Videos (${f.pct(commonest.shareOfVideos)}) ${label.length(commonest.length)} lang.`,
      },
      {
        title: 'der TikToks übertreffen 100.000 Aufrufe',
        body: `${f.pct(tt.shareOver1M)} übertreffen eine Million. Der typische Creator veröffentlicht etwa ${Math.round(tt.postsPerWeek)} TikToks pro Woche.`,
      },
      {
        title: 'TikTok-Engagement pro Aufruf',
        body: `Likes und Kommentare zusammen entsprechen ${f.pct(tt.engagementPerView)} der TikTok-Aufrufe und ${f.pct(ig.engagementPerView)} der Reel-Aufrufe (${f.pct(ig.engagementPerFollower)} der Follower).`,
      },
    ]
  },
  tiktokEyebrow: 'TikTok',
  tiktokTitle: 'Reichweite und Engagement nach Account-Größe',
  tiktokHead: ['Follower', 'Creator', 'Mittlere Aufrufe pro Video', 'Aufrufe in % der Follower', 'Engagement pro Aufruf'],
  instagramEyebrow: 'Instagram',
  instagramTitle: 'Reels nach Account-Größe',
  instagramHead: ['Follower', 'Creator', 'Mittlere Aufrufe pro Reel', 'Aufrufe in % der Follower', 'Engagement pro Follower'],
  lengthTitle: 'Aufrufe nach Videolänge',
  lengthHead: ['Länge', 'Anteil der Videos', 'Aufrufe im Vergleich zum typischen Video des Creators'],
  tier: { 'under 100K': 'unter 100K', '100K–500K': '100K–500K', '500K+': '500K+' },
  length: { '≤10 s': '≤10 s', '11–20 s': '11–20 s', '21–30 s': '21–30 s', '31–60 s': '31–60 s', 'over 60 s': 'über 60 s' },
  methodTitle: 'So haben wir gemessen',
  method: (d, f, p) => [
    'Creator: das Talent-Roster von CA Agency, überwiegend Beauty, Skincare und Lifestyle, mit Sitz in den VAE, in Europa, den USA, Südafrika und Zentralasien.',
    `TikTok: ${d.tiktok.creators} Creator, ${f.int(d.tiktok.posts)} Videos, veröffentlicht vom ${f.date(p.from)} bis zum ${f.date(p.to)} (der vollständige Verlauf für diesen Zeitraum).`,
    `Instagram: ${d.instagram.creators} Creator, ${f.int(d.instagram.reels)} Reels (jeweils die neuesten Reels jedes Creators).`,
    `Öffentliche Zahlen, abgerufen am ${f.date(p.readOn)}. Beiträge der letzten 7 Tage wurden nicht berücksichtigt, da ihre Zahlen noch stiegen.`,
    'Mediane zuerst pro Creator, dann über alle Creator hinweg. Die Videolänge wird mit dem typischen Video des jeweiligen Creators verglichen.',
  ],
  caveatsTitle: 'Bitte mit Vorsicht lesen',
  caveats: (d, _f, bands) => [
    'Dies ist das Roster einer einzelnen Agentur, ausgewählt nach Performance, nicht der gesamte Markt: Verstehen Sie die Zahlen als das, was ein starker Beauty-Creator erreicht, nicht als Branchendurchschnitt.',
    `${d.tiktok.creators} bis ${d.instagram.creators} Creator sind eine überschaubare Stichprobe; jede Follower-Gruppe stützt sich auf ${bands.min} bis ${bands.max} Creator.`,
    `Beim Instagram-Engagement fehlen die ${d.instagram.creators - d.instagram.creatorsWithLikes} Creator, die ihre Likes ausblenden.`,
  ],
  license: { before: 'Frei zitierbar unter ', after: ' mit Quellenangabe CA Agency.' },
  faqEyebrow: 'FAQ',
  faqTitle: 'Fragen zu diesen Benchmarks',
  faq: (d, f, label) => {
    const tt = d.tiktok
    const ig = d.instagram
    const L = tt.lengths
    const shortest = L[0]
    const longest = L[L.length - 1]
    const weakest = [...L].sort((a, b) => a.vsCreatorTypical - b.vsCreatorTypical)[0]
    return [
      {
        question: 'Wie viele Aufrufe bekommt ein Beauty-Creator 2026 pro TikTok?',
        answer: `Im Roster von CA Agency erreicht das mittlere TikTok ${f.pct(tt.viewsPerFollower)} der Follower des Creators. Creator mit unter 100K Followern erreichen etwa ${f.pct(tier(tt.tiers, 'under 100K'))}, Creator mit über 500K etwa ${f.pct(tier(tt.tiers, '500K+'))}. ${f.pct(tt.shareOver100K)} der Videos übertreffen 100.000 Aufrufe.`,
      },
      {
        question: 'Erreichen Instagram Reels oder TikToks mehr Follower eines Creators?',
        answer: `In diesen Daten halten Reels ihre Reichweite bei wachsenden Accounts besser: Ein typisches Reel erreicht ${f.pct(ig.viewsPerFollower)} der Follower und bei Accounts über 500K immer noch ${f.pct(tier(ig.tiers, '500K+'))}, gegenüber ${f.pct(tier(tt.tiers, '500K+'))} bei TikToks in dieser Größe.`,
      },
      {
        question: 'Welche TikTok-Videolänge ist für Beauty-Content am besten?',
        answer: `Sehr kurze Clips (${label.length(shortest.length)}) erzielten das ${f.times(shortest.vsCreatorTypical)} und lange Videos (${label.length(longest.length)}) das ${f.times(longest.vsCreatorTypical)} der Aufrufe des typischen Videos des jeweiligen Creators, während ${label.length(weakest.length)} mit ${f.times(weakest.vsCreatorTypical)} am schwächsten abschnitt. Die Länge ist nur ein Faktor unter vielen: Hook, Thema und Timing spielen ebenfalls eine Rolle.`,
      },
      {
        question: 'Was ist 2026 eine gute Engagement-Rate für Beauty-Creator?',
        answer: `Likes und Kommentare zusammen machten beim mittleren Creator in unserem Roster ${f.pct(tt.engagementPerView)} der Aufrufe auf TikTok und ${f.pct(ig.engagementPerView)} der Aufrufe bei Instagram Reels aus (${f.pct(ig.engagementPerFollower)} der Follower).`,
      },
      {
        question: 'Darf ich diese Zahlen zitieren?',
        answer: 'Ja. Die Zahlen sind unter CC BY 4.0 veröffentlicht: Zitieren Sie sie mit Quellenangabe und einem Link zu CA Agency (caagency.com/influencer-benchmarks-2026).',
      },
    ]
  },
  ctaTitle: 'Planen Sie Ihre Kampagne auf Basis echter Zahlen',
  cta: {
    before: 'Wie diese Creator für Marken performen, sehen Sie in unseren ',
    link: 'Fallstudien',
    after: '. Oder erzählen Sie uns von Ihrem Launch, und wir finden die passenden Creator für Sie.',
  },
  ctaButton: 'Kampagne starten',
  translationNote: 'Diese Seite ist eine Übersetzung. Das Original finden Sie auf',
}
