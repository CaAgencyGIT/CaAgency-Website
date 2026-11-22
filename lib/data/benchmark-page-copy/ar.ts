import type { BenchmarkCopy, BenchmarkData, Tier } from '@/lib/data/benchmark-page-copy'

// Arabic copy of the benchmark page, served at /ar/influencer-benchmarks-2026.
// Translated from englishBenchmarkCopy in lib/data/benchmark-page-copy.ts.
// Every number still comes from the data through `f`.

const tier = (d: BenchmarkData['tiktok']['tiers'] | BenchmarkData['instagram']['tiers'], name: Tier) =>
  (d as readonly { tier: string; viewsPerFollower: number }[]).find((t) => t.tier === name)!.viewsPerFollower

export const arBenchmarkCopy: BenchmarkCopy = {
  metaTitle: 'مؤشرات أداء صنّاع محتوى الجمال 2026: TikTok وInstagram Reels',
  metaDescription: (d, f) =>
    `مؤشرات أصلية لعام 2026 مستخلصة من ${f.int(d.tiktok.posts)} فيديو على TikTok و${f.int(d.instagram.reels)} مقطع Instagram Reels لصنّاع محتوى الجمال والعناية بالبشرة لدى CA Agency: الوصول لكل متابع، والتفاعل، وأفضل مدة للفيديو.`,
  keywords: [
    'مؤشرات تسويق المؤثرين 2026',
    'متوسط مشاهدات تيك توك لمؤثرات الجمال',
    'معدل التفاعل للمؤثرين في الإمارات',
    'إحصائيات ريلز إنستغرام',
    'أفضل مدة لفيديو تيك توك',
    'نسبة المشاهدات إلى المتابعين تيك توك',
  ],
  eyebrow: (date) => `أبحاث CA Agency · ${date}`,
  title: 'مؤشرات أداء صنّاع محتوى الجمال 2026: TikTok وInstagram Reels',
  intro: (d, f) =>
    `ما الذي يحققه صانع محتوى الجمال أو العناية بالبشرة فعلاً في كل منشور؟ تستند هذه المؤشرات إلى ${f.int(d.tiktok.posts)} فيديو على TikTok من ${d.tiktok.creators} صانع محتوى، و${f.int(d.instagram.reels)} مقطع Instagram Reels من ${d.instagram.creators} صانع محتوى ضمن قائمة المواهب الخاصة بـ CA Agency، اعتماداً على الأعداد العلنية للمشاهدات والإعجابات والتعليقات. كل رقم هنا هو قيمة وسيطة، فلا يمكن التعرّف على أي صانع محتوى بعينه، ولا يستطيع حساب كبير واحد أن يحرّف النتيجة.`,
  findingsEyebrow: 'أبرز النتائج',
  findingsTitle: 'خمسة أرقام تستحق المعرفة',
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
        title: 'فيديو TikTok المعتاد يصل إلى نحو نصف عدد المتابعين',
        body: `يعادل وسيط المشاهدات لكل فيديو ${f.pct(tt.viewsPerFollower)} من المتابعين. وتنخفض هذه النسبة كلما كبر الحساب: ${f.pct(tier(tt.tiers, 'under 100K'))} للحسابات التي تقل عن 100K متابع، و${f.pct(tier(tt.tiers, '100K–500K'))} بين 100K–500K، و${f.pct(tier(tt.tiers, '500K+'))} فوق 500K.`,
      },
      {
        title: 'مقاطع Instagram Reels تحافظ على وصولها مع نمو الحساب',
        body: `يصل مقطع Reels المعتاد إلى ${f.pct(ig.viewsPerFollower)} من المتابعين: ${f.pct(tier(ig.tiers, 'under 100K'))} للحسابات التي تقل عن 100K، و${f.pct(tier(ig.tiers, '100K–500K'))} بين 100K–500K، ولا يزال ${f.pct(tier(ig.tiers, '500K+'))} فوق 500K.`,
      },
      {
        title: 'فيديوهات TikTok القصيرة جداً والطويلة تتفوّق على المتوسطة',
        body: `مقارنةً بالفيديو المعتاد لكل صانع محتوى، تحصد المقاطع بمدة ${label.length(shortest.length)} ${f.times(shortest.vsCreatorTypical)} المشاهدات، والفيديوهات بمدة ${label.length(longest.length)} ${f.times(longest.vsCreatorTypical)}. أضعف مدة هي ${label.length(weakest.length)} (${f.times(weakest.vsCreatorTypical)})، ومع ذلك فإن معظم الفيديوهات (${f.pct(commonest.shareOfVideos)}) بمدة ${label.length(commonest.length)}.`,
      },
      {
        title: 'من فيديوهات TikTok تتجاوز 100,000 مشاهدة',
        body: `وتتجاوز ${f.pct(tt.shareOver1M)} منها مليون مشاهدة. وينشر صانع المحتوى المعتاد نحو ${Math.round(tt.postsPerWeek)} فيديو على TikTok أسبوعياً.`,
      },
      {
        title: 'التفاعل لكل مشاهدة على TikTok',
        body: `تبلغ الإعجابات والتعليقات معاً ${f.pct(tt.engagementPerView)} من مشاهدات TikTok و${f.pct(ig.engagementPerView)} من مشاهدات Reels (${f.pct(ig.engagementPerFollower)} من المتابعين).`,
      },
    ]
  },
  tiktokEyebrow: 'TikTok',
  tiktokTitle: 'الوصول والتفاعل حسب حجم الحساب',
  tiktokHead: ['المتابعون', 'صنّاع المحتوى', 'وسيط المشاهدات لكل فيديو', 'المشاهدات كنسبة من المتابعين', 'التفاعل لكل مشاهدة'],
  instagramEyebrow: 'Instagram',
  instagramTitle: 'مقاطع Reels حسب حجم الحساب',
  instagramHead: ['المتابعون', 'صنّاع المحتوى', 'وسيط المشاهدات لكل مقطع Reels', 'المشاهدات كنسبة من المتابعين', 'التفاعل لكل متابع'],
  lengthTitle: 'المشاهدات حسب مدة الفيديو',
  lengthHead: ['المدة', 'نسبة الفيديوهات', 'المشاهدات مقارنةً بالفيديو المعتاد لصانع المحتوى'],
  tier: { 'under 100K': 'أقل من 100K', '100K–500K': '100K–500K', '500K+': '500K+' },
  length: { '≤10 s': '≤10 ث', '11–20 s': '11–20 ث', '21–30 s': '21–30 ث', '31–60 s': '31–60 ث', 'over 60 s': 'أكثر من 60 ث' },
  methodTitle: 'كيف أجرينا القياس',
  method: (d, f, p) => [
    'صنّاع المحتوى: قائمة المواهب لدى CA Agency، ومعظمهم في مجالات الجمال والعناية بالبشرة وأسلوب الحياة، ومقيمون في الإمارات وأوروبا والولايات المتحدة وجنوب أفريقيا وآسيا الوسطى.',
    `TikTok: ${d.tiktok.creators} صانع محتوى، و${f.int(d.tiktok.posts)} فيديو نُشرت من ${f.date(p.from)} إلى ${f.date(p.to)} (السجل الكامل لهذه الفترة).`,
    `Instagram: ${d.instagram.creators} صانع محتوى، و${f.int(d.instagram.reels)} مقطع Reels (أحدث مقاطع Reels لكل صانع محتوى).`,
    `الأعداد العلنية كما قُرئت في ${f.date(p.readOn)}. استُبعدت المنشورات من آخر 7 أيام لأن أعدادها كانت لا تزال في ارتفاع.`,
    'القيم الوسيطة لكل صانع محتوى أولاً، ثم عبر جميع صنّاع المحتوى. وتُقارن مدة الفيديو بالفيديو المعتاد لكل صانع محتوى نفسه.',
  ],
  caveatsTitle: 'اقرأها بعناية',
  caveats: (d, _f, bands) => [
    'هذه قائمة مواهب وكالة واحدة، اختيرت على أساس الأداء، وليست السوق بأكمله: اقرأ الأرقام على أنها ما يحققه صانع محتوى جمال قوي، لا متوسطاً للقطاع.',
    `عيّنة من ${d.tiktok.creators} إلى ${d.instagram.creators} صانع محتوى هي عيّنة متواضعة؛ وتستند كل فئة من فئات المتابعين إلى ${bands.min} إلى ${bands.max} من صنّاع المحتوى.`,
    `لا يشمل التفاعل على Instagram عدد ${d.instagram.creators - d.instagram.creatorsWithLikes} من صنّاع المحتوى الذين يخفون إعجاباتهم.`,
  ],
  license: { before: 'يمكن الاقتباس مجاناً بموجب ترخيص ', after: ' مع نسب المصدر إلى CA Agency.' },
  faqEyebrow: 'الأسئلة الشائعة',
  faqTitle: 'أسئلة حول هذه المؤشرات',
  faq: (d, f, label) => {
    const tt = d.tiktok
    const ig = d.instagram
    const L = tt.lengths
    const shortest = L[0]
    const longest = L[L.length - 1]
    const weakest = [...L].sort((a, b) => a.vsCreatorTypical - b.vsCreatorTypical)[0]
    return [
      {
        question: 'كم مشاهدة يحصل عليها صانع محتوى الجمال في كل فيديو على TikTok في 2026؟',
        answer: `ضمن قائمة مواهب CA Agency، يصل وسيط فيديو TikTok إلى ${f.pct(tt.viewsPerFollower)} من عدد متابعي صانع المحتوى. ويصل صنّاع المحتوى الذين لديهم أقل من 100K متابع إلى نحو ${f.pct(tier(tt.tiers, 'under 100K'))}، ومن لديهم أكثر من 500K إلى نحو ${f.pct(tier(tt.tiers, '500K+'))}. وتتجاوز ${f.pct(tt.shareOver100K)} من الفيديوهات 100,000 مشاهدة.`,
      },
      {
        question: 'أيهما يصل إلى نسبة أكبر من متابعي صانع المحتوى: Instagram Reels أم TikTok؟',
        answer: `في هذه البيانات، تحافظ مقاطع Reels على وصولها بشكل أفضل مع نمو الحسابات: يصل مقطع Reels المعتاد إلى ${f.pct(ig.viewsPerFollower)} من المتابعين، ولا يزال يصل إلى ${f.pct(tier(ig.tiers, '500K+'))} للحسابات التي تتجاوز 500K، مقابل ${f.pct(tier(tt.tiers, '500K+'))} لفيديوهات TikTok عند الحجم نفسه.`,
      },
      {
        question: 'ما أفضل مدة لفيديو TikTok في محتوى الجمال؟',
        answer: `حصدت المقاطع القصيرة جداً (${label.length(shortest.length)}) ${f.times(shortest.vsCreatorTypical)} والفيديوهات الطويلة (${label.length(longest.length)}) ${f.times(longest.vsCreatorTypical)} مشاهدات الفيديو المعتاد لكل صانع محتوى، بينما جاءت مدة ${label.length(weakest.length)} في المرتبة الأخيرة بـ ${f.times(weakest.vsCreatorTypical)}. المدة عامل واحد من بين عوامل كثيرة: فالافتتاحية والموضوع وتوقيت النشر مهمة أيضاً.`,
      },
      {
        question: 'ما معدل التفاعل الجيد لصنّاع محتوى الجمال في 2026؟',
        answer: `بلغت الإعجابات والتعليقات معاً ${f.pct(tt.engagementPerView)} من المشاهدات على TikTok و${f.pct(ig.engagementPerView)} من المشاهدات على Instagram Reels (${f.pct(ig.engagementPerFollower)} من المتابعين) لدى صانع المحتوى الوسيط في قائمة مواهبنا.`,
      },
      {
        question: 'هل يمكنني الاقتباس من هذه الأرقام؟',
        answer: 'نعم. الأرقام منشورة بموجب ترخيص CC BY 4.0: اقتبسها مع نسب المصدر ووضع رابط إلى CA Agency (caagency.com/influencer-benchmarks-2026).',
      },
    ]
  },
  ctaTitle: 'خطّط لحملتك بناءً على أرقام حقيقية',
  cta: {
    before: 'اطّلع على أداء صنّاع المحتوى هؤلاء مع العلامات التجارية في ',
    link: 'دراسات الحالة',
    after: ' الخاصة بنا، أو أخبرنا عن إطلاقك القادم وسنرشّح لك صنّاع المحتوى المناسبين.',
  },
  ctaButton: 'ابدأ حملتك',
  translationNote: 'هذه الصفحة مترجمة. النسخة الأصلية باللغة ',
}
