import { caseStudies } from '@/lib/data/case-studies'
import type { LocationPageContent } from '@/lib/site-content/location-pages'

// K-beauty page (/korean-skincare-influencer-marketing): a grid of real K-beauty
// case studies (each linked, several with public view counts) and three FAQ
// questions on launching a Korean brand in the UK and Europe, in every language.
// Facts only: no claims about where creators live and no prices.

export const KBEAUTY_PATH = '/korean-skincare-influencer-marketing'

/** K-beauty case studies with a full page; most carry public results. Six, two rows: each one autoplays. */
export const KBEAUTY_CASE_SLUGS = [
  'beauty-of-joseon-campaign',
  'biodance-campaign',
  'dr-althea-campaign',
  'frankly-campaign',
  'anua-campaign',
  'arencia-campaign',
] as const

type Faq = NonNullable<LocationPageContent['faq']>
type Copy = { title: string; subtitle: string; faq: Faq['items'] }

const copy: Record<string, Copy> = {
  en: {
    title: 'K-Beauty Brands With Full Case Studies',
    subtitle: 'Korean skincare campaigns by creators on our roster, each with its own case study and, where the post is public, its view count.',
    faq: [
      {
        question: 'Can you launch a Korean skincare brand in the UK and Europe?',
        answer: 'Yes. K-beauty is one of our core categories, and we plan launches market by market: the UK, Germany, France, the Netherlands, the Nordics and Switzerland. We match the brand with creators whose audience already follows skincare in that market, link each post to the local stockist or online shop, and report results per country.',
      },
      {
        question: 'What does a Korean brand need before a UK or EU creator campaign?',
        answer: 'The products must be legally on sale in the market first. In the EU that means a Responsible Person based in the EU and a CPNP notification for each cosmetic product; in Great Britain it means a UK Responsible Person and an SCPN notification. Creators should only link to listings where shoppers in that country can actually buy.',
      },
      {
        question: 'How do ad disclosure rules differ between the UK and the EU?',
        answer: 'In the UK the ASA and CMA expect a clear "Ad" or "#ad" at the start of a paid post. In the EU each country has its own wording, for example "Werbung" or "Anzeige" in Germany and "Publicité" or "Collaboration commerciale" in France. We write the right label into every brief and check it before content is approved.',
      },
    ],
  },
  de: {
    title: 'K-Beauty-Marken mit vollständigen Fallstudien',
    subtitle: 'Kampagnen für koreanische Hautpflege mit Creatorn aus unserem Roster, jeweils mit eigener Fallstudie und, wo der Beitrag öffentlich ist, mit Aufrufzahlen.',
    faq: [
      {
        question: 'Können Sie eine koreanische Hautpflegemarke in Großbritannien und Europa einführen?',
        answer: 'Ja. K-Beauty gehört zu unseren Kernkategorien, und wir planen Launches Markt für Markt: Großbritannien, Deutschland, Frankreich, die Niederlande, die nordischen Länder und die Schweiz. Wir verbinden die Marke mit Creatorn, deren Publikum in diesem Markt bereits Hautpflege verfolgt, verlinken jeden Beitrag auf den lokalen Händler oder Onlineshop und berichten die Ergebnisse pro Land.',
      },
      {
        question: 'Was braucht eine koreanische Marke vor einer Creator-Kampagne in Großbritannien oder der EU?',
        answer: 'Die Produkte müssen im Markt zuerst legal verkauft werden dürfen. In der EU bedeutet das eine verantwortliche Person mit Sitz in der EU und eine CPNP-Notifizierung für jedes kosmetische Mittel, in Großbritannien eine verantwortliche Person im Vereinigten Königreich und eine SCPN-Notifizierung. Creator sollten nur auf Angebote verlinken, bei denen Käufer in diesem Land tatsächlich bestellen können.',
      },
      {
        question: 'Wie unterscheiden sich die Kennzeichnungsregeln für Werbung in Großbritannien und der EU?',
        answer: 'In Großbritannien erwarten ASA und CMA ein klares „Ad“ oder „#ad“ am Anfang eines bezahlten Beitrags. In der EU hat jedes Land eigene Begriffe, zum Beispiel „Werbung“ oder „Anzeige“ in Deutschland und „Publicité“ oder „Collaboration commerciale“ in Frankreich. Wir nehmen die richtige Kennzeichnung in jedes Briefing auf und prüfen sie vor der Freigabe.',
      },
    ],
  },
  fr: {
    title: 'Marques K-beauty avec étude de cas complète',
    subtitle: 'Des campagnes de soin coréen menées avec des créateurs de notre roster, chacune avec son étude de cas et, lorsque la publication est publique, son nombre de vues.',
    faq: [
      {
        question: 'Pouvez-vous lancer une marque de soin coréenne au Royaume-Uni et en Europe ?',
        answer: 'Oui. La K-beauty fait partie de nos catégories phares, et nous planifions les lancements marché par marché : Royaume-Uni, Allemagne, France, Pays-Bas, pays nordiques et Suisse. Nous associons la marque à des créateurs dont l’audience suit déjà le soin de la peau dans ce marché, chaque publication renvoie vers le distributeur ou la boutique en ligne locale, et nous présentons les résultats par pays.',
      },
      {
        question: 'De quoi une marque coréenne a-t-elle besoin avant une campagne au Royaume-Uni ou dans l’UE ?',
        answer: 'Les produits doivent d’abord pouvoir être vendus légalement sur le marché. Dans l’UE, cela implique une personne responsable établie dans l’UE et une notification CPNP pour chaque produit cosmétique ; en Grande-Bretagne, une personne responsable au Royaume-Uni et une notification SCPN. Les créateurs ne doivent renvoyer que vers des offres réellement accessibles aux acheteurs de ce pays.',
      },
      {
        question: 'En quoi les règles de mention publicitaire diffèrent-elles entre le Royaume-Uni et l’UE ?',
        answer: 'Au Royaume-Uni, l’ASA et la CMA attendent une mention claire « Ad » ou « #ad » au début d’une publication rémunérée. Dans l’UE, chaque pays a sa propre formulation, par exemple « Werbung » ou « Anzeige » en Allemagne et « Publicité » ou « Collaboration commerciale » en France. Nous intégrons la bonne mention à chaque brief et la vérifions avant validation.',
      },
    ],
  },
  es: {
    title: 'Marcas de K-beauty con caso de éxito completo',
    subtitle: 'Campañas de cosmética coreana con creadores de nuestro roster, cada una con su propio caso de éxito y, cuando la publicación es pública, su número de visualizaciones.',
    faq: [
      {
        question: '¿Podéis lanzar una marca de cosmética coreana en Reino Unido y Europa?',
        answer: 'Sí. La K-beauty es una de nuestras categorías principales y planificamos los lanzamientos mercado a mercado: Reino Unido, Alemania, Francia, Países Bajos, los países nórdicos y Suiza. Unimos la marca con creadores cuya audiencia ya sigue el cuidado de la piel en ese mercado, enlazamos cada publicación con el distribuidor o la tienda online local y presentamos los resultados por país.',
      },
      {
        question: '¿Qué necesita una marca coreana antes de una campaña con creadores en Reino Unido o la UE?',
        answer: 'Primero, los productos deben poder venderse legalmente en el mercado. En la UE eso supone una persona responsable establecida en la UE y una notificación CPNP para cada producto cosmético; en Gran Bretaña, una persona responsable en Reino Unido y una notificación SCPN. Los creadores solo deben enlazar a ofertas donde los compradores de ese país puedan comprar de verdad.',
      },
      {
        question: '¿En qué se diferencian las normas de etiquetado publicitario entre Reino Unido y la UE?',
        answer: 'En Reino Unido, la ASA y la CMA exigen un «Ad» o «#ad» claro al principio de una publicación pagada. En la UE cada país tiene su propia fórmula, por ejemplo «Werbung» o «Anzeige» en Alemania y «Publicité» o «Collaboration commerciale» en Francia. Incluimos la etiqueta correcta en cada brief y la revisamos antes de aprobar el contenido.',
      },
    ],
  },
  ar: {
    title: 'علامات جمال كوري مع دراسات حالة كاملة',
    subtitle: 'حملات عناية كورية بالبشرة مع صنّاع محتوى من قائمتنا، ولكل منها دراسة حالة خاصة بها، مع عدد المشاهدات عندما يكون المنشور عامًا.',
    faq: [
      {
        question: 'هل يمكنكم إطلاق علامة عناية كورية بالبشرة في المملكة المتحدة وأوروبا؟',
        answer: 'نعم. الجمال الكوري من فئاتنا الأساسية، ونخطط الإطلاق سوقًا بسوق: المملكة المتحدة وألمانيا وفرنسا وهولندا ودول الشمال الأوروبي وسويسرا. نربط العلامة بصنّاع محتوى يتابع جمهورهم العناية بالبشرة في ذلك السوق، ونضع في كل منشور رابطًا إلى متجر التجزئة أو المتجر الإلكتروني المحلي، ونقدّم النتائج لكل دولة.',
      },
      {
        question: 'ماذا تحتاج العلامة الكورية قبل حملة مع صنّاع المحتوى في المملكة المتحدة أو الاتحاد الأوروبي؟',
        answer: 'يجب أولًا أن يكون بيع المنتجات قانونيًا في السوق. في الاتحاد الأوروبي يعني ذلك وجود شخص مسؤول مقيم في الاتحاد وإخطار CPNP لكل منتج تجميلي، وفي بريطانيا العظمى وجود شخص مسؤول في المملكة المتحدة وإخطار SCPN. ويجب ألا يضع صنّاع المحتوى روابط إلا لعروض يستطيع المتسوقون في تلك الدولة الشراء منها فعلًا.',
      },
      {
        question: 'كيف تختلف قواعد الإفصاح عن الإعلانات بين المملكة المتحدة والاتحاد الأوروبي؟',
        answer: 'في المملكة المتحدة تتوقع هيئتا ASA وCMA وسمًا واضحًا مثل "Ad" أو "#ad" في بداية المنشور المدفوع. وفي الاتحاد الأوروبي لكل دولة صيغتها، مثل "Werbung" أو "Anzeige" في ألمانيا و"Publicité" أو "Collaboration commerciale" في فرنسا. نضيف الوسم الصحيح إلى كل موجز ونتحقق منه قبل اعتماد المحتوى.',
      },
    ],
  },
  ko: {
    title: '전체 사례를 볼 수 있는 K-뷰티 브랜드',
    subtitle: '저희 로스터 크리에이터와 진행한 한국 스킨케어 캠페인입니다. 각 캠페인마다 사례 페이지가 있으며, 공개 게시물은 조회수도 확인할 수 있습니다.',
    faq: [
      {
        question: '한국 스킨케어 브랜드의 영국·유럽 진출도 도와주시나요?',
        answer: '네. K-뷰티는 저희 핵심 카테고리이며, 영국, 독일, 프랑스, 네덜란드, 북유럽, 스위스 등 시장별로 런칭을 계획합니다. 해당 시장에서 이미 스킨케어에 관심 있는 오디언스를 가진 크리에이터와 브랜드를 연결하고, 각 게시물을 현지 유통처나 온라인 스토어로 연결하며, 국가별 결과를 보고합니다.',
      },
      {
        question: '영국이나 EU에서 크리에이터 캠페인을 하기 전에 한국 브랜드에 무엇이 필요한가요?',
        answer: '먼저 제품이 해당 시장에서 합법적으로 판매될 수 있어야 합니다. EU에서는 EU 내 책임자(Responsible Person)와 화장품별 CPNP 신고가, 영국(그레이트브리튼)에서는 영국 내 책임자와 SCPN 신고가 필요합니다. 크리에이터는 그 나라 소비자가 실제로 구매할 수 있는 판매처로만 링크해야 합니다.',
      },
      {
        question: '영국과 EU의 광고 표시 규정은 어떻게 다른가요?',
        answer: '영국에서는 ASA와 CMA가 유료 게시물 앞부분에 "Ad" 또는 "#ad"를 분명히 표시하도록 요구합니다. EU에서는 국가마다 표현이 달라 독일은 "Werbung" 또는 "Anzeige", 프랑스는 "Publicité" 또는 "Collaboration commerciale"을 씁니다. 모든 브리프에 올바른 표시를 넣고 콘텐츠 승인 전에 확인합니다.',
      },
    ],
  },
  zh: {
    title: '附完整案例的韩国美妆品牌',
    subtitle: '与我们旗下创作者合作的韩国护肤活动，每个都有独立案例页面；公开发布的内容还附有播放量。',
    faq: [
      {
        question: '你们能帮助韩国护肤品牌进入英国和欧洲市场吗？',
        answer: '可以。韩国美妆是我们的核心品类之一，我们按市场逐一规划上市：英国、德国、法国、荷兰、北欧和瑞士。我们为品牌匹配在当地受众本就关注护肤的创作者，每条内容都链接到当地零售渠道或网店，并按国家汇报结果。',
      },
      {
        question: '韩国品牌在英国或欧盟开展创作者活动前需要准备什么？',
        answer: '首先，产品必须能在当地合法销售。在欧盟，需要一名设在欧盟境内的责任人，并为每款化妆品完成 CPNP 通报；在英国（大不列颠），需要一名英国责任人并完成 SCPN 通报。创作者只应链接到该国消费者真正能够购买的渠道。',
      },
      {
        question: '英国和欧盟的广告标注规则有何不同？',
        answer: '在英国，ASA 和 CMA 要求在付费内容开头清楚标注 "Ad" 或 "#ad"。在欧盟，各国用语不同，例如德国使用 "Werbung" 或 "Anzeige"，法国使用 "Publicité" 或 "Collaboration commerciale"。我们会在每份简报中写明正确的标注，并在内容审核前检查。',
      },
    ],
  },
}

/** The K-beauty case-study grid in one language (English when the locale has no copy). */
export function kbeautyBrandCases(locale = 'en'): NonNullable<LocationPageContent['caseStudies']> {
  const { title, subtitle } = copy[locale] ?? copy.en
  const items = KBEAUTY_CASE_SLUGS.map((slug) => {
    const study = caseStudies.find((s) => s.slug === slug)
    if (!study) throw new Error(`kbeauty-europe: unknown case study ${slug}`)
    return {
      ...(study.videoSrc ? { src: study.videoSrc } : { image: study.image?.src }),
      brand: study.brand,
      name: study.creatorName ?? study.creator ?? study.vertical,
      href: `/case-studies/${slug}`,
    }
  })
  return { title, subtitle, items }
}

/** The UK and Europe questions in one language. */
export function kbeautyEuropeFaq(locale = 'en'): Faq['items'] {
  return (copy[locale] ?? copy.en).faq
}

/** Adds the grid and appends the UK and Europe questions to the K-beauty page's FAQ. */
export function withKBeautyEurope(content: LocationPageContent, locale: string): LocationPageContent {
  const extra = kbeautyEuropeFaq(locale)
  const faq = content.faq ? { ...content.faq, items: [...content.faq.items, ...extra] } : undefined
  return { ...content, brandCaseStudies: kbeautyBrandCases(locale), ...(faq ? { faq } : {}) }
}
