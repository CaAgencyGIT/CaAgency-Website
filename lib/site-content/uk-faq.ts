import { creatorBenchmarks2026 } from '@/lib/data/creator-benchmarks-2026'
import type { LocationPageContent } from '@/lib/site-content/location-pages'

// FAQ for the UK market page (/influencer-marketing-uk) in every language.
// The renderer turns it into FAQPage JSON-LD. The platform answer quotes the
// benchmark page, so its percentages come from the benchmark data and are
// formatted per locale. No prices: cost questions are answered with scoping.

type Faq = NonNullable<LocationPageContent['faq']>

/** 47 → "47%" / "47 %" in the page's language. */
function pct(locale: string, value: number) {
  return new Intl.NumberFormat(locale, { style: 'percent', maximumFractionDigits: 1 }).format(value / 100)
}

function faqs(locale: string): Faq | undefined {
  const reels = pct(locale, creatorBenchmarks2026.instagram.viewsPerFollower)
  const tiktok = pct(locale, creatorBenchmarks2026.tiktok.viewsPerFollower)
  switch (locale) {
    case 'en':
      return {
        title: 'Influencer Marketing in the UK, FAQs',
        items: [
          {
            question: 'How do you find creators with a UK audience?',
            answer: 'We shortlist creators on the audience geography of the platform that will carry the post, not on where the creator lives. For each creator we compare the UK share of the audience, typical views on similar beauty content and the questions viewers ask, then recommend the mix that reaches UK shoppers.',
          },
          {
            question: 'How must influencer adverts be labelled in the UK?',
            answer: 'The ASA and the CMA expect paid creator content to be obviously identifiable as advertising, with a clear label such as "Ad" or "#ad" at the start of the post. Gifted products should be disclosed as well. We put the right label in every brief and check it before content is approved.',
          },
          {
            question: 'Which platforms work best for beauty campaigns in the UK?',
            answer: `Instagram Reels for tutorials and routines, TikTok for product discovery, and YouTube for longer reviews. In our Beauty Creator Benchmarks 2026, a typical Instagram Reel reached ${reels} of a creator's followers, against ${tiktok} for a TikTok, so we usually combine both.`,
          },
          {
            question: 'Can you launch a Korean beauty brand in the UK?',
            answer: 'Yes. K-beauty is one of our core categories, with campaigns for brands such as Purito, Arencia, Anua, Medicube and Beauty of Joseon. For a UK launch we match the brand with creators whose audience already follows skincare and link every post to the UK stockist or the brand’s own UK shop.',
          },
          {
            question: 'Do you handle usage rights and paid social?',
            answer: 'Yes. The creator contract states where the content may run, for how long, and whether the brand may use it in paid social or whitelisted ads, so there are no surprises after the campaign.',
          },
          {
            question: 'How much does influencer marketing cost in the UK?',
            answer: 'Cost depends on the platform, the creator tiers, the number of creators, the deliverables and the usage rights. We scope each UK campaign to your goals and budget instead of quoting a flat rate. Share your budget and launch date and we will build a creator plan around them.',
          },
        ],
      }
    case 'de':
      return {
        title: 'Influencer-Marketing in Großbritannien: FAQ',
        items: [
          {
            question: 'Wie finden Sie Creator mit britischem Publikum?',
            answer: 'Wir wählen Creator nach der Herkunft ihres Publikums auf der Plattform aus, auf der der Beitrag erscheint, nicht nach ihrem Wohnort. Für jeden Creator vergleichen wir den britischen Anteil des Publikums, die typischen Aufrufe ähnlicher Beauty-Inhalte und die Fragen der Zuschauer und empfehlen dann die Mischung, die britische Käuferinnen und Käufer erreicht.',
          },
          {
            question: 'Wie muss Influencer-Werbung in Großbritannien gekennzeichnet werden?',
            answer: 'Die ASA und die CMA erwarten, dass bezahlte Creator-Inhalte eindeutig als Werbung erkennbar sind, mit einer klaren Kennzeichnung wie „Ad“ oder „#ad“ am Anfang des Beitrags. Auch geschenkte Produkte sollten offengelegt werden. Wir nehmen die richtige Kennzeichnung in jedes Briefing auf und prüfen sie vor der Freigabe.',
          },
          {
            question: 'Welche Plattformen eignen sich in Großbritannien am besten für Beauty-Kampagnen?',
            answer: `Instagram Reels für Tutorials und Routinen, TikTok für die Produktentdeckung und YouTube für längere Reviews. In unseren Beauty Creator Benchmarks 2026 erreichte ein typisches Instagram Reel ${reels} der Follower eines Creators, ein TikTok ${tiktok}. Deshalb kombinieren wir meist beide.`,
          },
          {
            question: 'Können Sie eine koreanische Beauty-Marke in Großbritannien einführen?',
            answer: 'Ja. K-Beauty gehört zu unseren Kernkategorien, mit Kampagnen für Marken wie Purito, Arencia, Anua, Medicube und Beauty of Joseon. Für einen Launch in Großbritannien verbinden wir die Marke mit Creatorn, deren Publikum Hautpflege bereits verfolgt, und verlinken jeden Beitrag auf den britischen Händler oder den eigenen britischen Shop der Marke.',
          },
          {
            question: 'Kümmern Sie sich um Nutzungsrechte und Paid Social?',
            answer: 'Ja. Der Creator-Vertrag legt fest, wo der Inhalt laufen darf, wie lange und ob die Marke ihn für Paid Social oder Whitelisting-Anzeigen nutzen darf. So gibt es nach der Kampagne keine Überraschungen.',
          },
          {
            question: 'Was kostet Influencer-Marketing in Großbritannien?',
            answer: 'Die Kosten hängen von der Plattform, den Creator-Größen, der Anzahl der Creator, den Inhalten und den Nutzungsrechten ab. Wir planen jede Kampagne für Großbritannien nach Ihren Zielen und Ihrem Budget, statt einen Pauschalpreis zu nennen. Nennen Sie uns Budget und Launch-Termin, und wir erstellen einen passenden Creator-Plan.',
          },
        ],
      }
    case 'fr':
      return {
        title: 'Marketing d’influence au Royaume-Uni : FAQ',
        items: [
          {
            question: 'Comment trouvez-vous des créateurs avec une audience britannique ?',
            answer: 'Nous sélectionnons les créateurs selon la provenance de leur audience sur la plateforme qui diffusera le contenu, et non selon leur lieu de résidence. Pour chaque créateur, nous comparons la part d’audience britannique, les vues habituelles sur des contenus beauté similaires et les questions posées par les abonnés, puis nous recommandons la combinaison qui touche les acheteurs britanniques.',
          },
          {
            question: 'Comment les publicités d’influenceurs doivent-elles être signalées au Royaume-Uni ?',
            answer: 'L’ASA et la CMA attendent que les contenus rémunérés soient clairement identifiables comme de la publicité, avec une mention telle que « Ad » ou « #ad » au début de la publication. Les produits offerts doivent aussi être signalés. Nous intégrons la bonne mention à chaque brief et la vérifions avant validation.',
          },
          {
            question: 'Quelles plateformes fonctionnent le mieux pour la beauté au Royaume-Uni ?',
            answer: `Les Reels Instagram pour les tutoriels et les routines, TikTok pour la découverte de produits et YouTube pour les tests plus longs. Dans nos Beauty Creator Benchmarks 2026, un Reel Instagram typique a atteint ${reels} des abonnés d’un créateur, contre ${tiktok} pour un TikTok. Nous combinons donc généralement les deux.`,
          },
          {
            question: 'Pouvez-vous lancer une marque de beauté coréenne au Royaume-Uni ?',
            answer: 'Oui. La K-beauty fait partie de nos catégories phares, avec des campagnes pour des marques comme Purito, Arencia, Anua, Medicube et Beauty of Joseon. Pour un lancement au Royaume-Uni, nous associons la marque à des créateurs dont l’audience suit déjà le soin de la peau et chaque publication renvoie vers le distributeur britannique ou la boutique britannique de la marque.',
          },
          {
            question: 'Gérez-vous les droits d’utilisation et la publicité payante ?',
            answer: 'Oui. Le contrat du créateur précise où le contenu peut être diffusé, pendant combien de temps et si la marque peut l’utiliser en publicité payante ou en whitelisting, pour éviter toute surprise après la campagne.',
          },
          {
            question: 'Combien coûte le marketing d’influence au Royaume-Uni ?',
            answer: 'Le coût dépend de la plateforme, de la taille des créateurs, de leur nombre, des contenus livrés et des droits d’utilisation. Nous construisons chaque campagne britannique selon vos objectifs et votre budget plutôt que d’annoncer un tarif fixe. Indiquez-nous votre budget et votre date de lancement, et nous bâtirons un plan créateurs adapté.',
          },
        ],
      }
    case 'es':
      return {
        title: 'Marketing de influencers en Reino Unido: preguntas frecuentes',
        items: [
          {
            question: '¿Cómo encontráis creadores con audiencia en Reino Unido?',
            answer: 'Seleccionamos a los creadores según la procedencia de su audiencia en la plataforma donde se publicará el contenido, no según dónde viven. Para cada creador comparamos el porcentaje de audiencia británica, las visualizaciones habituales en contenido de belleza similar y las preguntas de sus seguidores, y recomendamos la combinación que llega a los compradores británicos.',
          },
          {
            question: '¿Cómo se debe etiquetar la publicidad con influencers en Reino Unido?',
            answer: 'La ASA y la CMA exigen que el contenido pagado sea claramente identificable como publicidad, con una etiqueta como «Ad» o «#ad» al principio de la publicación. Los productos regalados también deben indicarse. Incluimos la etiqueta correcta en cada brief y la revisamos antes de aprobar el contenido.',
          },
          {
            question: '¿Qué plataformas funcionan mejor para belleza en Reino Unido?',
            answer: `Instagram Reels para tutoriales y rutinas, TikTok para descubrir productos y YouTube para reseñas más largas. En nuestros Beauty Creator Benchmarks 2026, un Reel típico de Instagram alcanzó al ${reels} de los seguidores de un creador, frente al ${tiktok} de un TikTok, así que normalmente combinamos ambos.`,
          },
          {
            question: '¿Podéis lanzar una marca de belleza coreana en Reino Unido?',
            answer: 'Sí. La K-beauty es una de nuestras categorías principales, con campañas para marcas como Purito, Arencia, Anua, Medicube y Beauty of Joseon. Para un lanzamiento en Reino Unido unimos la marca con creadores cuya audiencia ya sigue el cuidado de la piel y enlazamos cada publicación con el distribuidor británico o la tienda británica de la marca.',
          },
          {
            question: '¿Gestionáis los derechos de uso y la publicidad pagada?',
            answer: 'Sí. El contrato con el creador fija dónde puede usarse el contenido, durante cuánto tiempo y si la marca puede emplearlo en publicidad pagada o en anuncios con whitelisting, para que no haya sorpresas después de la campaña.',
          },
          {
            question: '¿Cuánto cuesta el marketing de influencers en Reino Unido?',
            answer: 'El coste depende de la plataforma, el tamaño de los creadores, cuántos participan, los contenidos y los derechos de uso. Planificamos cada campaña en Reino Unido según tus objetivos y tu presupuesto en lugar de dar una tarifa fija. Cuéntanos tu presupuesto y la fecha de lanzamiento y crearemos un plan de creadores a medida.',
          },
        ],
      }
    case 'ar':
      return {
        title: 'التسويق عبر المؤثرين في المملكة المتحدة: الأسئلة الشائعة',
        items: [
          {
            question: 'كيف تجدون صنّاع محتوى لديهم جمهور في المملكة المتحدة؟',
            answer: 'نختار صنّاع المحتوى بحسب موقع جمهورهم على المنصة التي سيُنشر عليها المحتوى، لا بحسب مكان إقامتهم. نقارن لكل صانع محتوى نسبة جمهوره في المملكة المتحدة، والمشاهدات المعتادة لمحتوى تجميل مشابه، والأسئلة التي يطرحها المتابعون، ثم نوصي بالمزيج الذي يصل إلى المتسوقين في المملكة المتحدة.',
          },
          {
            question: 'كيف يجب الإفصاح عن إعلانات المؤثرين في المملكة المتحدة؟',
            answer: 'تتوقع هيئة ASA وهيئة CMA أن يكون المحتوى المدفوع واضحًا كإعلان، مع وسم صريح مثل "Ad" أو "#ad" في بداية المنشور. ويجب الإفصاح أيضًا عن المنتجات المُهداة. نضيف الوسم الصحيح إلى كل موجز ونتحقق منه قبل اعتماد المحتوى.',
          },
          {
            question: 'ما المنصات الأنسب لحملات التجميل في المملكة المتحدة؟',
            answer: `‏Instagram Reels للشروحات والروتين، وTikTok لاكتشاف المنتجات، وYouTube للمراجعات الأطول. في تقرير Beauty Creator Benchmarks 2026 الخاص بنا، وصل مقطع Reel نموذجي إلى ${reels} من متابعي صانع المحتوى مقابل ${tiktok} لمقطع TikTok، لذلك نجمع بينهما عادةً.`,
          },
          {
            question: 'هل يمكنكم إطلاق علامة تجميل كورية في المملكة المتحدة؟',
            answer: 'نعم. الجمال الكوري من فئاتنا الأساسية، ولدينا حملات لعلامات مثل Purito وArencia وAnua وMedicube وBeauty of Joseon. عند الإطلاق في المملكة المتحدة نربط العلامة بصنّاع محتوى يتابع جمهورهم العناية بالبشرة، ونضع في كل منشور رابطًا إلى متجر التجزئة البريطاني أو متجر العلامة في المملكة المتحدة.',
          },
          {
            question: 'هل تتولون حقوق الاستخدام والإعلانات المدفوعة؟',
            answer: 'نعم. يحدد عقد صانع المحتوى أين يمكن نشر المحتوى، ولأي مدة، وهل يحق للعلامة استخدامه في الإعلانات المدفوعة أو إعلانات الحسابات المعتمدة، حتى لا تكون هناك مفاجآت بعد الحملة.',
          },
          {
            question: 'كم تكلفة التسويق عبر المؤثرين في المملكة المتحدة؟',
            answer: 'تعتمد التكلفة على المنصة وحجم صنّاع المحتوى وعددهم والمحتوى المطلوب وحقوق الاستخدام. نخطط كل حملة في المملكة المتحدة وفق أهدافك وميزانيتك بدل تقديم سعر ثابت. شاركنا ميزانيتك وموعد الإطلاق وسنبني خطة صنّاع محتوى تناسبها.',
          },
        ],
      }
    case 'ko':
      return {
        title: '영국 인플루언서 마케팅 FAQ',
        items: [
          {
            question: '영국 오디언스를 가진 크리에이터는 어떻게 찾나요?',
            answer: '크리에이터가 사는 곳이 아니라, 콘텐츠가 게시될 플랫폼에서 오디언스가 어디에 있는지를 기준으로 선정합니다. 크리에이터마다 영국 오디언스 비율, 비슷한 뷰티 콘텐츠의 평균 조회수, 시청자가 묻는 질문을 비교한 뒤 영국 소비자에게 닿는 조합을 제안합니다.',
          },
          {
            question: '영국에서는 인플루언서 광고를 어떻게 표시해야 하나요?',
            answer: '영국 ASA와 CMA는 유료 크리에이터 콘텐츠가 광고임을 분명히 알 수 있도록 게시물 앞부분에 "Ad" 또는 "#ad" 같은 표시를 요구합니다. 협찬받은 제품도 밝혀야 합니다. 모든 브리프에 올바른 표시를 넣고, 콘텐츠 승인 전에 확인합니다.',
          },
          {
            question: '영국 뷰티 캠페인에는 어떤 플랫폼이 가장 효과적인가요?',
            answer: `튜토리얼과 루틴에는 Instagram Reels, 제품 발견에는 TikTok, 긴 리뷰에는 YouTube가 적합합니다. 저희 Beauty Creator Benchmarks 2026에서 일반적인 Instagram Reel은 크리에이터 팔로워의 ${reels}에 도달했고 TikTok은 ${tiktok}였기 때문에 보통 두 플랫폼을 함께 활용합니다.`,
          },
          {
            question: '한국 뷰티 브랜드의 영국 진출도 도와주시나요?',
            answer: '네. K-뷰티는 저희 핵심 카테고리로, Purito, Arencia, Anua, Medicube, Beauty of Joseon 등과 캠페인을 진행했습니다. 영국 런칭 시에는 이미 스킨케어에 관심 있는 오디언스를 가진 크리에이터와 브랜드를 연결하고, 모든 게시물을 영국 유통처나 브랜드의 영국 온라인 스토어로 연결합니다.',
          },
          {
            question: '사용 권한과 유료 광고도 관리하나요?',
            answer: '네. 크리에이터 계약서에 콘텐츠를 어디에, 얼마 동안 사용할 수 있는지, 그리고 브랜드가 유료 소셜 광고나 화이트리스팅 광고에 활용할 수 있는지를 명시해 캠페인 후에도 문제가 없도록 합니다.',
          },
          {
            question: '영국 인플루언서 마케팅 비용은 얼마인가요?',
            answer: '비용은 플랫폼, 크리에이터 규모와 인원, 제작 콘텐츠, 사용 권한에 따라 달라집니다. 고정 가격을 제시하는 대신 목표와 예산에 맞춰 영국 캠페인을 설계합니다. 예산과 런칭 일정을 알려주시면 그에 맞는 크리에이터 플랜을 만들어 드립니다.',
          },
        ],
      }
    case 'zh':
      return {
        title: '英国网红营销常见问题',
        items: [
          {
            question: '你们如何找到拥有英国受众的创作者？',
            answer: '我们根据内容发布平台上受众所在地区来挑选创作者，而不是看创作者住在哪里。我们会比较每位创作者的英国受众占比、同类美妆内容的常规播放量以及观众提出的问题，再推荐能触达英国消费者的创作者组合。',
          },
          {
            question: '在英国，网红广告需要如何标注？',
            answer: '英国广告标准局（ASA）和竞争与市场管理局（CMA）要求付费创作者内容能被一眼识别为广告，并在帖子开头使用 "Ad" 或 "#ad" 等明确标注。赠送的产品也应披露。我们会在每份简报中写明正确的标注，并在内容审核前进行检查。',
          },
          {
            question: '在英国做美妆营销，哪些平台效果最好？',
            answer: `Instagram Reels 适合教程和护肤流程，TikTok 适合产品发现，YouTube 适合较长的测评。在我们的 Beauty Creator Benchmarks 2026 中，一条典型的 Instagram Reel 覆盖了创作者 ${reels} 的粉丝，TikTok 为 ${tiktok}，因此我们通常会结合使用两者。`,
          },
          {
            question: '你们能帮助韩国美妆品牌进入英国市场吗？',
            answer: '可以。韩国美妆是我们的核心品类之一，我们曾为 Purito、Arencia、Anua、Medicube 和 Beauty of Joseon 等品牌开展活动。在英国上市时，我们会为品牌匹配受众本就关注护肤的创作者，并在每条内容中链接到英国零售渠道或品牌的英国官方网店。',
          },
          {
            question: '你们负责内容使用权和付费推广吗？',
            answer: '负责。创作者合同会写明内容可以在哪里使用、使用多长时间，以及品牌能否将其用于付费社交广告或白名单广告，避免活动结束后出现意外。',
          },
          {
            question: '在英国做网红营销需要多少费用？',
            answer: '费用取决于平台、创作者级别和人数、交付内容以及使用权。我们会根据您的目标和预算规划每个英国活动，而不是给出固定报价。告诉我们您的预算和上市时间，我们会据此制定创作者方案。',
          },
        ],
      }
    default:
      return undefined
  }
}

/** The UK FAQ in one language (English when the locale has none). */
export function ukFaq(locale = 'en'): Faq {
  return faqs(locale) ?? faqs('en')!
}

export const UK_PATH = '/influencer-marketing-uk'

/** Adds the UK FAQ to the UK market page; other pages pass through unchanged. */
export function withUkFaq<T extends { path: string; content: LocationPageContent }>(page: T, locale: string): T {
  if (page.path !== UK_PATH) return page
  return { ...page, content: { ...page.content, faq: ukFaq(locale) } }
}
