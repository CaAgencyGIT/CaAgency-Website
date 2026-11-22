import type { BenchmarkCopy, BenchmarkData, Tier } from '@/lib/data/benchmark-page-copy'

const tier = (d: BenchmarkData['tiktok']['tiers'] | BenchmarkData['instagram']['tiers'], name: Tier) =>
  (d as readonly { tier: string; viewsPerFollower: number }[]).find((t) => t.tier === name)!.viewsPerFollower

export const esBenchmarkCopy: BenchmarkCopy = {
  metaTitle: 'Benchmarks de creadores de belleza 2026: TikTok e Instagram Reels',
  metaDescription: (d, f) =>
    `Benchmarks originales de 2026 a partir de ${f.int(d.tiktok.posts)} TikToks y ${f.int(d.instagram.reels)} Instagram Reels de los creadores de belleza y skincare de CA Agency: alcance por seguidor, engagement y las mejores duraciones de vídeo.`,
  keywords: [
    'benchmarks de marketing de influencers 2026',
    'benchmarks de tiktok para creadores de belleza',
    'benchmarks de instagram reels',
    'visualizaciones por seguidor en tiktok',
    'tasa de engagement de influencers 2026',
    'mejor duración de vídeo en tiktok',
  ],
  eyebrow: (date) => `Estudio de CA Agency · ${date}`,
  title: 'Benchmarks de creadores de belleza 2026: TikTok e Instagram Reels',
  intro: (d, f) =>
    `¿Qué consigue realmente un creador de belleza o skincare por publicación? Estos benchmarks proceden de ${f.int(d.tiktok.posts)} TikToks de ${d.tiktok.creators} creadores y ${f.int(d.instagram.reels)} Instagram Reels de ${d.instagram.creators} creadores de la propia cartera de talentos de CA Agency, a partir de los recuentos públicos de visualizaciones, me gusta y comentarios. Cada cifra es una mediana, de modo que no se puede identificar a ningún creador concreto y ninguna cuenta grande puede distorsionar el resultado.`,
  findingsEyebrow: 'Conclusiones clave',
  findingsTitle: 'Cinco cifras que conviene conocer',
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
        title: 'Un TikTok típico llega a aproximadamente la mitad de los seguidores',
        body: `La mediana de visualizaciones por vídeo equivale al ${f.pct(tt.viewsPerFollower)} de los seguidores. La proporción baja a medida que crecen las cuentas: ${f.pct(tier(tt.tiers, 'under 100K'))} con menos de 100K seguidores, ${f.pct(tier(tt.tiers, '100K–500K'))} entre 100K–500K y ${f.pct(tier(tt.tiers, '500K+'))} por encima de 500K.`,
      },
      {
        title: 'Los Instagram Reels mantienen su alcance a gran escala',
        body: `Un Reel típico llega al ${f.pct(ig.viewsPerFollower)} de los seguidores: ${f.pct(tier(ig.tiers, 'under 100K'))} con menos de 100K, ${f.pct(tier(ig.tiers, '100K–500K'))} entre 100K–500K y todavía ${f.pct(tier(ig.tiers, '500K+'))} por encima de 500K.`,
      },
      {
        title: 'Los TikToks muy cortos y los largos superan a los de duración media',
        body: `Frente al vídeo típico de cada creador, los clips de ${label.length(shortest.length)} obtienen ${f.times(shortest.vsCreatorTypical)} las visualizaciones y los vídeos de ${label.length(longest.length)} obtienen ${f.times(longest.vsCreatorTypical)}. ${label.length(weakest.length)} es la duración con peor resultado (${f.times(weakest.vsCreatorTypical)}), y sin embargo la mayoría de los vídeos (${f.pct(commonest.shareOfVideos)}) dura ${label.length(commonest.length)}.`,
      },
      {
        title: 'de los TikToks superan las 100.000 visualizaciones',
        body: `El ${f.pct(tt.shareOver1M)} supera el millón. El creador típico publica unos ${Math.round(tt.postsPerWeek)} TikToks por semana.`,
      },
      {
        title: 'Engagement por visualización en TikTok',
        body: `Los me gusta más los comentarios suman el ${f.pct(tt.engagementPerView)} de las visualizaciones en TikTok y el ${f.pct(ig.engagementPerView)} de las visualizaciones de los Reels (${f.pct(ig.engagementPerFollower)} de los seguidores).`,
      },
    ]
  },
  tiktokEyebrow: 'TikTok',
  tiktokTitle: 'Alcance y engagement según el tamaño de la cuenta',
  tiktokHead: ['Seguidores', 'Creadores', 'Mediana de visualizaciones por vídeo', 'Visualizaciones en % de seguidores', 'Engagement por visualización'],
  instagramEyebrow: 'Instagram',
  instagramTitle: 'Reels según el tamaño de la cuenta',
  instagramHead: ['Seguidores', 'Creadores', 'Mediana de visualizaciones por Reel', 'Visualizaciones en % de seguidores', 'Engagement por seguidor'],
  lengthTitle: 'Visualizaciones según la duración del vídeo',
  lengthHead: ['Duración', 'Proporción de vídeos', 'Visualizaciones frente al vídeo típico del creador'],
  tier: { 'under 100K': 'menos de 100K', '100K–500K': '100K–500K', '500K+': '500K+' },
  length: { '≤10 s': '≤10 s', '11–20 s': '11–20 s', '21–30 s': '21–30 s', '31–60 s': '31–60 s', 'over 60 s': 'más de 60 s' },
  methodTitle: 'Cómo lo medimos',
  method: (d, f, p) => [
    'Creadores: la cartera de talentos de CA Agency, principalmente de belleza, skincare y lifestyle, con sede en los EAU, Europa, EE. UU., Sudáfrica y Asia Central.',
    `TikTok: ${d.tiktok.creators} creadores, ${f.int(d.tiktok.posts)} vídeos publicados del ${f.date(p.from)} al ${f.date(p.to)} (el historial completo del periodo).`,
    `Instagram: ${d.instagram.creators} creadores, ${f.int(d.instagram.reels)} Reels (los Reels más recientes de cada creador).`,
    `Recuentos públicos consultados el ${f.date(p.readOn)}. Se excluyeron las publicaciones de los últimos 7 días, ya que sus recuentos seguían subiendo.`,
    'Medianas por creador y, después, entre creadores. La duración del vídeo se compara con el vídeo típico de cada creador.',
  ],
  caveatsTitle: 'Cómo interpretar los datos',
  caveats: (d, _f, bands) => [
    'Se trata de la cartera de una sola agencia, seleccionada por su rendimiento, no del mercado en su conjunto: las cifras reflejan lo que consigue un creador de belleza sólido, no una media del sector.',
    `De ${d.tiktok.creators} a ${d.instagram.creators} creadores es una muestra modesta; cada franja de seguidores se basa en ${bands.min} a ${bands.max} creadores.`,
    `El engagement de Instagram no incluye a los ${d.instagram.creators - d.instagram.creatorsWithLikes} creadores que ocultan sus me gusta.`,
  ],
  license: { before: 'Puede citarse libremente bajo licencia ', after: ', mencionando a CA Agency como fuente.' },
  faqEyebrow: 'Preguntas frecuentes',
  faqTitle: 'Preguntas sobre estos benchmarks',
  faq: (d, f, label) => {
    const tt = d.tiktok
    const ig = d.instagram
    const L = tt.lengths
    const shortest = L[0]
    const longest = L[L.length - 1]
    const weakest = [...L].sort((a, b) => a.vsCreatorTypical - b.vsCreatorTypical)[0]
    return [
      {
        question: '¿Cuántas visualizaciones consigue un creador de belleza por TikTok en 2026?',
        answer: `En la cartera de CA Agency, la mediana de un TikTok llega al ${f.pct(tt.viewsPerFollower)} de los seguidores del creador. Los creadores con menos de 100K seguidores llegan a aproximadamente el ${f.pct(tier(tt.tiers, 'under 100K'))}, y los que superan los 500K, a aproximadamente el ${f.pct(tier(tt.tiers, '500K+'))}. El ${f.pct(tt.shareOver100K)} de los vídeos supera las 100.000 visualizaciones.`,
      },
      {
        question: '¿Qué llega a más seguidores de un creador, los Instagram Reels o los TikToks?',
        answer: `En estos datos, los Reels mantienen mejor su alcance a medida que crecen las cuentas: un Reel típico llega al ${f.pct(ig.viewsPerFollower)} de los seguidores y todavía al ${f.pct(tier(ig.tiers, '500K+'))} en cuentas de más de 500K, frente al ${f.pct(tier(tt.tiers, '500K+'))} de los TikToks con ese tamaño.`,
      },
      {
        question: '¿Cuál es la mejor duración de vídeo en TikTok para contenido de belleza?',
        answer: `Los clips muy cortos (${label.length(shortest.length)}) obtuvieron ${f.times(shortest.vsCreatorTypical)} y los vídeos largos (${label.length(longest.length)}) ${f.times(longest.vsCreatorTypical)} las visualizaciones del vídeo típico de cada creador, mientras que ${label.length(weakest.length)} tuvo el peor resultado, con ${f.times(weakest.vsCreatorTypical)}. La duración es un factor entre muchos: el gancho, el tema y el momento de publicación también cuentan.`,
      },
      {
        question: '¿Qué tasa de engagement se considera buena para creadores de belleza en 2026?',
        answer: `Los me gusta más los comentarios fueron el ${f.pct(tt.engagementPerView)} de las visualizaciones en TikTok y el ${f.pct(ig.engagementPerView)} de las visualizaciones en Instagram Reels (${f.pct(ig.engagementPerFollower)} de los seguidores) para el creador mediano de nuestra cartera.`,
      },
      {
        question: '¿Puedo citar estas cifras?',
        answer: 'Sí. Las cifras se publican bajo licencia CC BY 4.0: puede citarlas mencionando a CA Agency e incluyendo un enlace (caagency.com/influencer-benchmarks-2026).',
      },
    ]
  },
  ctaTitle: 'Planifique una campaña con cifras reales',
  cta: {
    before: 'Vea cómo rinden estos creadores para las marcas en nuestros ',
    link: 'casos de éxito',
    after: ', o cuéntenos su lanzamiento y le pondremos en contacto con los creadores adecuados.',
  },
  ctaButton: 'Inicie su campaña',
  translationNote: 'Esta página es una traducción. Original en ',
}
