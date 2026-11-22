import type { CaseStudyUi } from '@/lib/data/case-study-ui'
import type { CaseStudyCopy } from '@/lib/data/case-studies-translated'

// Spanish copy for the case-study pages, served at /es/case-studies/<slug>.
// Translated from lib/data/case-studies.ts (and creator-cases, profile-cases).
// Plain data: `studies` is keyed by the English slug.

export const ui: CaseStudyUi = {
  "eyebrowSuffix": "Caso de éxito",
  "brand": "Marca",
  "platforms": "Plataformas",
  "creator": "Creador",
  "services": "Servicios",
  "theBrief": "El briefing",
  "ourApproach": "Nuestro enfoque",
  "theOutcome": "El resultado",
  "overview": "Resumen",
  "inTheVideo": "En el vídeo",
  "inThePost": "En la publicación",
  "highlights": "Lo más destacado",
  "moreCaseStudies": "Más casos de éxito",
  "viewCaseStudy": "Ver caso de éxito",
  "detailCtaTitle": "Consigue resultados de este nivel",
  "detailCtaText": "Cuéntanos sobre tu marca y te propondremos los creadores adecuados para tu próxima campaña.",
  "startCampaign": "Inicia tu campaña",
  "viewAllWork": "Ver todos los proyectos",
  "watchTheWork": "Ver el trabajo",
  "seoTitleBrand": "{brand}: caso de éxito con influencers",
  "seoTitleCreator": "{brand} × {creator}: caso de éxito",
  "indexEyebrow": "Casos de éxito",
  "indexHeading": "El trabajo y cómo se hizo",
  "indexIntro": "Detrás de cada vídeo de campaña hay un briefing, una selección de creadores y un proceso de producción. Estos casos de éxito muestran cómo gestionamos campañas de influencers para marcas de belleza, cuidado de la piel y tecnología, de la primera llamada a la entrega final.",
  "indexTitle": "Casos de éxito en marketing de influencers",
  "indexDescription": "Cómo CA Agency gestiona campañas de influencers para marcas como YSL Beauty, NARS, HONOR y Mixsoon: el briefing, el enfoque y el trabajo en sí.",
  "indexCtaTitle": "Tu marca podría ser la siguiente",
  "indexCtaText": "Cuéntanos qué vas a lanzar y te propondremos los creadores adecuados.",
  "stillAlt": "Fotograma del vídeo de campaña de {brand}",
  "logoAlt": "Logotipo de {brand}",
  "views": "Visualizaciones",
  "likes": "Me gusta",
  "comments": "Comentarios",
  "creatorBase": "País del creador",
  "publicResultsNote": "Cifras públicas de la publicación de {platform} del creador, a {date}.",
  "viewOriginalPost": "Ver la publicación original"
}

export const verticals: Record<string, string> = {
  "Beauty E-commerce": "E-commerce de belleza",
  "Beauty Retail": "Retail de belleza",
  "Beauty Tech": "Tecnología de belleza",
  "Clean Beauty": "Clean beauty",
  "Color Cosmetics": "Cosmética de color",
  "Consumer Tech": "Tecnología de consumo",
  "Haircare": "Cuidado del cabello",
  "K-Beauty Retail": "Retail de K-beauty",
  "K-Beauty Skincare": "Cuidado de la piel K-beauty",
  "Luxury Beauty": "Belleza de lujo",
  "Makeup": "Maquillaje",
  "Premium Skincare": "Cuidado de la piel premium",
  "Prestige Beauty": "Belleza de prestigio",
  "Skincare": "Cuidado de la piel"
}

export const services: Record<string, string> = {
  "Brand-safety review": "Revisión de seguridad de marca",
  "Campaign management": "Gestión de campañas",
  "Concept development": "Desarrollo de conceptos",
  "Content production": "Producción de contenido",
  "Creator matching": "Selección de creadores",
  "Talent management": "Gestión de talento",
  "Usage rights": "Derechos de uso"
}

export const studies: Record<string, CaseStudyCopy> = {
  "honor-smartphone-launch": {
    "title": "HONOR: colaboración con creadores",
    "summary": "Un contenido narrativo que muestra el smartphone de HONOR en momentos cotidianos, de los mensajes con amigos al selfi frente al espejo.",
    "brief": "HONOR quería que su nuevo smartphone se viera en manos reales, en el día a día, y no a través de una ficha técnica, con una historia contada en una voz cercana y propia de la región. El lanzamiento se dirigía a un público joven de la región, que vive en las redes sociales y responde mejor a historias cercanas contadas en su propio idioma. El briefing pedía que el teléfono se sintiera parte de la vida diaria, que su diseño y su cámara se mostraran con el uso y que el tono fuera ligero y nativo de la plataforma.",
    "approach": "La creadora construye un relato breve en torno a su día: se arregla, chatea con sus amigos en burbujas de mensajes escritas en dialecto local, hace el unboxing del nuevo dispositivo y se saca un selfi frente al espejo. El teléfono aparece de forma natural en cada escena, de modo que su diseño y su cámara se muestran con el uso en lugar de explicarse.",
    "outcome": "HONOR recibió contenido de creadora con enfoque narrativo que hace que el dispositivo se sienta parte de la vida diaria. Su tono cercano encaja en canales orgánicos y en formatos de pago de apariencia nativa."
  },
  "ysl-beauty-campaign": {
    "title": "YSL Beauty: campaña con creadores",
    "summary": "Contenido de belleza de lujo que conserva el acabado impecable de YSL y, a la vez, resulta natural en el feed de una creadora.",
    "brief": "La belleza de lujo es un ejercicio de equilibrio: el contenido tiene que proteger los códigos premium de la marca y, al mismo tiempo, parecer algo que una creadora publicaría de verdad. YSL Beauty necesitaba vídeo corto que lograra ambas cosas.",
    "approach": "Seleccionamos a una creadora de belleza cuya estética ya estaba cerca de la marca en iluminación, tono y acabado, para que el contenido patrocinado no rompiera el feed. Las secuencias centradas en la aplicación mantuvieron el producto en plano y mostraron de cerca la textura y el resultado.",
    "outcome": "YSL Beauty recibió contenido de creadora que mantuvo su imagen premium en un formato vertical y con sonido, el tipo de pieza que funciona tanto de forma orgánica en el canal de la creadora como en paid social desde la marca."
  },
  "kylie-cosmetics-campaign": {
    "title": "Kylie Cosmetics: campaña con creadores",
    "summary": "Un tutorial de labios muy concreto que muestra la combinación de perfilador y labial de Kylie Cosmetics para un nude definido y brillante.",
    "brief": "Kylie Cosmetics se ha construido en torno a los labios, así que el contenido debía mostrar ese look característico con claridad y rapidez, de una forma que el público pudiera copiar. La audiencia de Kylie Cosmetics espera contenido cuidado y en línea con las tendencias, y conoce bien la marca, por lo que el reto era ofrecer un look que se sintiera actual sin perder el foco nítido en el producto. El vídeo tenía que ser breve, fácil de copiar y visualmente coherente con la estética brillante de la marca.",
    "approach": "La creadora trabaja en primerísimo plano: perfila los labios con un perfilador de Kylie Cosmetics y después superpone color y brillo, con cada paso claramente visible. Una iluminación uniforme, un fondo limpio y una sencilla camiseta negra mantienen la atención en el producto y en el acabado, y al final sostiene el resultado ante la cámara para que se vea el look completo.",
    "outcome": "Kylie Cosmetics recibió un tutorial de labios limpio y fácil de repetir que muestra el producto en uso y el efecto final. Su estilismo sencillo lo hace eficaz en el canal de la creadora y adaptable a formatos de pago."
  },
  "yesstyle-collaboration": {
    "title": "YesStyle: colaboración con creadores",
    "summary": "Una rutina paso a paso para el cuidado de los poros, creada íntegramente con superventas de K-beauty disponibles en YesStyle.",
    "brief": "YesStyle es un destino de referencia para la K-beauty, así que el contenido debía mostrar la amplitud de lo que se puede combinar allí. El objetivo era una rutina didáctica que resolviera una preocupación habitual, los poros visibles, con varios productos en una secuencia fácil de seguir. Al ser un distribuidor y no una marca única, a YesStyle le beneficia sobre todo el contenido que lleva al público hacia varios productos a la vez. El briefing pedía construir una rutina con una lógica clara de antes y después, incluir productos de distintas marcas disponibles todos ellos en YesStyle y añadir un incentivo rastreable para poder medir el contenido tanto en ventas como en alcance.",
    "approach": "Georgii Galaev abre con la pregunta «¿poros perfectos?» y después numera cada paso en pantalla. Masajea el ma:nyo Herbgreen Cleansing Oil en las zonas con puntos negros durante un minuto entero, sigue con el Anua Rice Enzyme Brightening Cleansing Powder, que hace espuma entre las manos, aplica después la Medicube Zero Pore Blackhead Mud Mask y termina con la Medicube PDRN Pink Collagen Capsule Cream. El encuadre en primer plano y su propio código de descuento convierten una rutina en una lista de la compra ya hecha.",
    "outcome": "YesStyle recibió un tutorial de gran utilidad que muestra varias marcas de su catálogo en un solo vídeo y da al público un motivo claro para comprar. Los pasos numerados y el código del creador lo hacen eficaz tanto para los guardados como para las conversiones rastreables."
  },
  "insta360-campaign": {
    "title": "Insta360 X: campaña con creadores",
    "summary": "Contenido de creadores centrado en la acción que deja que la cámara Insta360 X se demuestre a sí misma.",
    "brief": "Una cámara de 360° es su mejor vendedora, siempre que las imágenes muestren de lo que es capaz. Insta360 necesitaba contenido de creadores en el que el protagonista fuera lo que graba el producto, no una reseña a cámara.",
    "approach": "El concepto puso la cámara en movimiento: imágenes grabadas por creadores que muestran los ángulos de apariencia imposible y el reencuadre por los que es conocida la serie X. El dispositivo aparece en uso y los resultados hablan en el montaje.",
    "outcome": "Insta360 recibió vídeo de creadores que muestra en lugar de contar, donde la prueba del producto es el propio contenido, el formato más sólido posible para una cámara."
  },
  "mixsoon-skincare": {
    "title": "Mixsoon: campaña de K-beauty",
    "summary": "Un vídeo a cámara que explica los ingredientes del Bean Copper Peptide Firming Serum de Mixsoon, pensado para el cuidado de la piel masculino.",
    "brief": "Mixsoon quería llegar a hombres interesados en el cuidado de la piel antiedad y explicar con un lenguaje claro y directo qué hace su Bean Copper Peptide Firming Serum. Los hombres son un público de cuidado de la piel en rápido crecimiento, pero a menudo necesitan explicaciones más claras y un tono directo. El briefing pedía contenido directo y creíble que explicara cómo funciona el sérum y por qué importan sus ingredientes clave, sin que pareciera un anuncio de belleza dirigido a otra persona.",
    "approach": "Jay Sadiq habla directamente a cámara con el sérum en la mano mientras explica sus ingredientes principales. Los textos en pantalla desglosan los beneficios: el péptido de cobre (GHK-Cu) contribuye a una piel de aspecto más firme y a la producción de colágeno, mientras que la esencia de soja fermentada aporta hidratación y nutrición. Termina aplicándolo para mostrar lo fácil que es incorporarlo a una rutina de cuidado personal.",
    "outcome": "Mixsoon recibió contenido creíble y de enfoque didáctico que abre la puerta al público masculino de cuidado de la piel. El desglose claro de los ingredientes lo hace eficaz de forma orgánica y como creatividad de performance."
  },
  "kiko-milano-campaign": {
    "title": "Kiko Milano × @_idareen_",
    "summary": "@_idareen_, talento de CA Agency, protagoniza una campaña de Kiko Milano con contenido de belleza centrado en la aplicación.",
    "brief": "Kiko Milano quería que sus productos los mostrara una creadora con credibilidad real en belleza ante una audiencia comprometida, con contenido que funcionara primero como tutorial y después como anuncio.",
    "approach": "Unimos a la marca con nuestro talento @_idareen_, cuyo estilo de contenido de belleza encaja con el posicionamiento de glamur accesible de Kiko, y gestionamos la colaboración de principio a fin: briefing, producción, revisión de la marca y entrega.",
    "outcome": "La colaboración dio como resultado contenido de campaña cuidado y centrado en la aplicación, de una creadora de nuestro propio roster: el modelo de servicio integral en el que CA Agency se ocupa tanto del lado de la marca como del lado del talento."
  },
  "juvias-place-campaign": {
    "title": "Juvia's Place × @beatrixramosaj",
    "summary": "Contenido de creadora con el pigmento como protagonista para Juvia's Place, con @beatrixramosaj, talento de CA Agency.",
    "brief": "Juvia's Place gusta por su color intenso y muy pigmentado. El briefing pedía contenido que llevara ese resultado del pigmento a la cámara a través de una creadora en cuyos looks su audiencia confía.",
    "approach": "Nuestro talento @beatrixramosaj construyó el contenido en torno a momentos de swatch y aplicación en los que es el pigmento el que convence. Nosotros gestionamos el calendario, los comentarios de la marca y la entrega final.",
    "outcome": "Juvia's Place recibió contenido de creadora que pone por delante su fortaleza más distintiva, el resultado del color, entregado a través de una relación de talento gestionada y con un único punto de contacto."
  },
  "nars-campaign": {
    "title": "NARS × @thefashionfreakk",
    "summary": "Contenido de belleza de prestigio para NARS, protagonizado por @thefashionfreakk, talento de CA Agency.",
    "brief": "NARS necesitaba contenido de creadora con el acabado propio de la belleza de prestigio que, a la vez, llegara a una audiencia a través de una personalidad a la que sigue por su estilo y no solo por los productos.",
    "approach": "Unimos a NARS con nuestro talento @thefashionfreakk, cuya estética centrada en la moda sitúa los productos de belleza dentro de una historia de estilo más amplia. El contenido integra el producto en su look característico en lugar de aislarlo.",
    "outcome": "La colaboración dio a NARS contenido de creadora con contexto de estilo, la belleza presentada como parte de un look y de una vida, que es donde las marcas de prestigio ganan en el formato corto."
  },
  "elemis-campaign": {
    "title": "ELEMIS: campaña con creadores",
    "summary": "Una narrativa de cuidado de la piel premium para ELEMIS, construida en torno al ritual, la textura y la rutina.",
    "brief": "ELEMIS pertenece al cuidado de la piel premium, donde el contenido tiene que transmitir ritual y textura, las razones sensoriales por las que la gente paga más. El briefing pedía contenido de creadores con esa sensación elevada de autocuidado.",
    "approach": "El contenido se construyó en torno al ritual de la aplicación: primeros planos de textura, un ritmo pausado y una voz en off en primera persona que suena a rutina real y no a guion leído.",
    "outcome": "ELEMIS recibió contenido de creadores sensorial y centrado en la rutina, acorde con su posicionamiento premium y producido mediante una colaboración con creadores gestionada de principio a fin."
  },
  "fenty-beauty-campaign": {
    "title": "Fenty Beauty: campaña con creadores",
    "summary": "Una prueba en tiempo real de la base Pro Filt’r Fluid Flex Foundation de Fenty Beauty, construida en torno a lo ligera que se siente.",
    "brief": "Fenty Beauty quería presentar su nueva Pro Filt’r Fluid Flex Foundation desde el ángulo de unas primeras impresiones sinceras. El objetivo era mostrar la cobertura y el acabado y, a la vez, captar la reacción real de la creadora ante la fórmula. Los lanzamientos de bases de maquillaje se juegan todo en la confianza: antes de comprar, el público quiere ver una cobertura real, un acabado real y una reacción real. El briefing pedía captar una primera impresión sin guion de la nueva Pro Filt’r Fluid Flex Foundation, mostrar la aplicación completa sin cortes que oculten el resultado y nombrar el tono para que quienes tengan una piel parecida pudieran comprarlo.",
    "approach": "Melly Sanchez aplica la base, en el tono 396N, ante la cámara y con brocha, mientras el texto en pantalla, «espera… ¿por qué siento que no llevo NADA en la piel?», recoge su reacción en tiempo real. Se muestra la aplicación completa para que el público pueda juzgar por sí mismo la cobertura y el acabado mate natural, y el estilismo seguro de la creadora mantiene el vídeo de lleno en el universo de marca atrevido e inclusivo de Fenty.",
    "outcome": "Fenty Beauty recibió contenido auténtico de primeras impresiones que destaca los beneficios clave de la fórmula, cobertura, acabado mate y sensación de ligereza, con la voz propia de la creadora. Funciona como pieza de lanzamiento en orgánico y como creatividad de pago creíble."
  },
  "delere-campaign": {
    "title": "DELERE: campaña con creadores",
    "summary": "Una presentación del cuidado de la piel con caviar que convierte la historia del ingrediente de lujo de DELERE en algo que se ve sobre la piel.",
    "brief": "«¿Caviar para el cuidado de la piel?» es una pregunta que se hará la mayoría del público, y DELERE necesitaba contenido que la respondiera. El briefing pedía explicar la fórmula, 15 % de omega-3 de caviar y péptido de colágeno, y mostrar a la vez la luminosidad que el público debería esperar, todo dentro de un formato vertical breve. Como nombre más reciente en el cuidado de la piel de lujo, DELERE también necesitaba ganar credibilidad ante un público que nunca había oído hablar de la marca. Eso suponía acompañar la afirmación sobre el ingrediente con una prueba visible en la piel, mantener un tono premium y no efectista, y dar a la marca una pieza que pudiera reutilizar en campañas de notoriedad.",
    "approach": "Saranda Mavriqi arranca con el gancho de la curiosidad y pasa directamente a la aplicación: la crema se extiende con una brocha en un trazo lento y después se presiona con la mano, de modo que el público ve tanto la textura como el acabado. El texto en pantalla cuenta la historia del ingrediente mientras la cámara permanece en su piel, y el vídeo termina con el resultado luminoso en un baño de ambiente tranquilo, acorde con el posicionamiento premium de la marca.",
    "outcome": "DELERE recibió contenido de creadora que presenta un ingrediente de lujo poco conocido en términos sencillos y lo respalda con textura y luminosidad visibles. Los textos sobre el ingrediente lo convierten en una sólida pieza didáctica para nuevas audiencias, mientras que su imagen limpia y elevada lo mantiene en línea con la marca para paid social."
  },
  "sephora-campaign": {
    "title": "Sephora: campaña con creadores",
    "summary": "Una historia de cuidado de la piel centrada en la barrera cutánea que integra la línea propia Hydrate de Sephora en una rutina para días de piel seca e irritada.",
    "brief": "Sephora quería posicionar su colección propia Hydrate como una gama de cuidado de la piel bien pensada y no como una alternativa económica. El reto era mostrar tres texturas con tres funciones distintas, la Bouncy Water Jelly con ácidos hialurónico y poliglutámico, la Balmy Rich Cream con lípidos y ceramidas, y la Satin Light Cream, de forma que cualquiera pudiera relacionarlas al instante con su propia piel en un día concreto. La audiencia eran compradores entendidos en cuidado de la piel, que ya conocen los nombres de los ingredientes y quieren que les digan qué usar y cuándo, no que les vendan un milagro. El vídeo debía funcionar en TikTok y Reels sin parecer un anuncio de tienda, mantener visible el nombre de Sephora en todo momento y dejar al público una regla sencilla que pudiera aplicar ante el lineal.",
    "approach": "Albina Mavriqi parte de un problema real: un primer plano de rojeces y sequedad con el texto «en los días de piel seca o irritada, mi barrera necesita un apoyo extra». Esa sinceridad da paso con naturalidad a la presentación del producto. Sostiene cada tarro ante la cámara el tiempo suficiente para leer los ingredientes principales y, después, un corte a la textura de la crema deja que el público juzgue por sí mismo su riqueza. El vídeo se cierra con el resultado, una piel jugosa y visiblemente más calmada, en torno a la idea de elegir la hidratación «según lo que mi piel necesita ese día», lo que convierte una selección de productos en una guía para decidir.",
    "outcome": "Sephora recibió un vídeo de creadora didáctico y centrado en los ingredientes que vende la lógica de toda la gama y no solo una referencia. El planteamiento de antes y después y las menciones de ingredientes en pantalla lo hacen igual de aprovechable como contenido orgánico en el canal de Albina y como pieza de pago dirigida a quienes comparan hidratantes."
  },
  "revolve-beauty-campaign": {
    "title": "Revolve Beauty: campaña con creadores",
    "summary": "Un look glam de invierno con efecto «escarchado», creado íntegramente con productos disponibles en Revolve Beauty.",
    "brief": "Revolve Beauty quería un look de temporada que mostrara la amplitud de su surtido multimarca y enlazara directamente con productos que se pueden comprar. El contenido tenía que resultar lo bastante editorial para la audiencia de moda de Revolve. Revolve Beauty ofrece una selección cuidada de marcas, así que el briefing pedía un look que mostrara varias de ellas y aun así se sintiera como una visión coherente. El contenido necesitaba un gancho de temporada, un estilismo editorial acorde con la identidad de moda de Revolve y una lista de productos clara para que el público pudiera comprar el look directamente en la tienda.",
    "approach": "Melani Seiffert crea un look glam de invierno suave en un espacio iluminado por lámparas de araña, envuelta en piel sintética blanca. Va recorriendo una selección de productos de Revolve Beauty, entre ellos el Tower 28 Swipe Serum Concealer, el Nudestix Tinted Blur Sculpt Stick y el colorete Kevyn Aucoin The Sensual Skin, y sostiene cada uno ante la cámara antes de aplicarlo. El estilismo frío y muy glam hace que el vídeo parezca un editorial de moda sin dejar de ser fácil de seguir.",
    "outcome": "Revolve Beauty recibió un tutorial de calidad editorial que muestra varias marcas en un solo look que se puede comprar. Su estética premium encaja en los canales propios de Revolve, y la estructura producto a producto favorece los clics hacia la tienda."
  },
  "anua-campaign": {
    "title": "Anua: campaña de cuidado de la piel con creadores",
    "summary": "Un tutorial de masaje facial en cinco reglas con la crema gua sha de Anua, del drenaje linfático al esculpido.",
    "brief": "Anua quería mostrar su crema gua sha como el producto que hace que el masaje facial sea fácil y eficaz. El contenido debía enseñar la técnica, no solo mostrar el producto. El esculpido facial y el drenaje linfático son populares, pero mucha gente no sabe bien cómo hacerlos correctamente. El briefing pedía posicionar la crema gua sha de Anua como el producto que facilita la técnica y crear un vídeo didáctico, muy fácil de guardar, al que el público quisiera volver.",
    "approach": "Georgii Galaev convierte el vídeo en una pequeña clase magistral, con cada paso rotulado en pantalla: abrir los ganglios linfáticos, esculpir la mandíbula, elevar los pómulos, deshinchar la nariz y drenar todo hacia abajo. Utiliza la crema gua sha de Anua en todo momento y muestra cómo la herramienta integrada y la crema aportan el deslizamiento suficiente para cada movimiento.",
    "outcome": "Anua recibió un tutorial centrado en la técnica y muy fácil de guardar que posiciona su producto como esencial en la rutina. Funciona como contenido orgánico didáctico y como creatividad de pago para quienes se interesan por el esculpido facial."
  },
  "purito-campaign": {
    "title": "Purito: campaña con creadores",
    "summary": "Un vlog de «rutina de mañana» con marcas de hora que integra Purito Seoul en una rutina auténtica, paso a paso.",
    "brief": "El posicionamiento de Purito Seoul, limpio y pensado para pieles sensibles, funciona mejor cuando se siente parte de la vida real. El objetivo era un contenido que encajara con naturalidad en el popularísimo formato de vlog de rutina, y no una pausa publicitaria dentro de él. La audiencia de Purito desconfía de los anuncios demasiado producidos y responde a rutinas sinceras y sin filtros. El briefing pedía un formato con un tiempo de visualización alto, en el que el producto se ganara su sitio dentro de una mañana real en lugar de interrumpirla, y un contenido que siguiera funcionando como tráfico de descubrimiento mucho después de publicarse.",
    "approach": "Aiym Kablan documenta su mañana minuto a minuto, con marcas de hora en pantalla mientras se ducha, se envuelve el pelo, prepara la piel y se instala en su rutina. Purito Seoul aparece en el transcurso de esos pasos, cogido y aplicado sobre la marcha, de modo que el producto se ve en contexto en lugar de presentarse. El ambiente acogedor y sin filtros y los detalles cercanos lo mantienen auténtico y muy agradable de ver.",
    "outcome": "Purito Seoul recibió contenido nativo, con el estilo de vida por delante, en uno de los formatos cortos que más enganchan. Como el producto vive dentro de una rutina que el público ya quiere ver, el vídeo funciona como contenido de descubrimiento para nuevas audiencias y como pieza de pago creíble y sin presión."
  },
  "gisou-campaign": {
    "title": "Gisou: campaña con creadores",
    "summary": "Contenido con el cabello como protagonista que deja que el acabado brillante característico de Gisou hable por sí solo en unas ondas largas y con volumen.",
    "brief": "La marca Gisou se ha construido sobre un brillo saludable, así que el contenido tenía que hacer visible ese brillo en cámara. El objetivo era un momento de cabello breve y aspiracional que se sintiera parte natural del feed de Beatrix, no una demostración de producto. La comunidad de Gisou compra un look y un estilo de vida tanto como un producto, por lo que el briefing daba prioridad al ambiente frente a la explicación. El contenido debía convivir cómodamente con las cuidadas imágenes de la propia marca, mantener el cabello como protagonista de cada plano y funcionar sin sonido ni subtítulos para quien hace scroll deprisa.",
    "approach": "Beatrix Ramosaj graba con una luz natural suave y uniforme que capta el brillo de su brushing con movimiento. En lugar de un tutorial, el vídeo se construye en torno al movimiento: pasa los dedos por los largos, trabaja el producto entre las palmas y termina en las puntas, de modo que el público ve cómo responde el cabello en tiempo real. El encuadre cerrado mantiene la atención en la textura y el brillo, y el ritmo tranquilo refleja el tono discreto y premium de Gisou.",
    "outcome": "Gisou recibió un vídeo de cabello cuidado y con enfoque de estilo de vida que comunica la promesa central de la marca, un brillo de aspecto saludable, en pocos segundos y sin mucho texto. Su estilo visual limpio encaja tanto con la audiencia de Beatrix como con formatos de pago junto al contenido de marca de la propia Gisou."
  },
  "samsung-campaign": {
    "title": "Samsung: campaña con creadores",
    "summary": "Contenido de creadores con enfoque de estilo de vida que sitúa los dispositivos Samsung dentro de una rutina diaria real.",
    "brief": "Samsung quería que el dispositivo se mostrara como un compañero del día a día y no como una ficha técnica, con contenido que se sintiera como el día de una creadora y en el que el producto se ganara su tiempo en pantalla de forma natural.",
    "approach": "Construimos el concepto en torno al estilo de contenido cotidiano de nuestro talento Khutjo Matsoma: el dispositivo aparece donde aparecería de verdad, en momentos de cámara y en el uso sobre la marcha, y termina con un momento dedicado a una función que llega sin venta agresiva.",
    "outcome": "Samsung recibió vídeo de creadora auténtico y nativo del feed que llega a audiencias que pasan de largo ante la publicidad tecnológica tradicional."
  },
  "haruharu-wonder-campaign": {
    "title": "Haruharu Wonder: campaña con creadores",
    "summary": "Una historia activa y de luminosidad al aire libre para la bruma glow de arroz negro de Haruharu Wonder, usada a lo largo del día.",
    "brief": "Haruharu Wonder quería mostrar su bruma como una forma no pegajosa de mantener la piel hidratada y luminosa sobre la marcha. La bruma de arroz negro de Haruharu Wonder se vende ampliamente en Amazon, así que el briefing se centró en demostrar su uso en la vida real. El contenido debía mostrar la bruma usada varias veces a lo largo del día, destacar su acabado no pegajoso y mantener un tono natural y de aire libre acorde con la marca.",
    "approach": "Rebecca Ghaderi se graba al aire libre y a lo largo de su día, desde un paseo temprano al sol hasta momentos de calma más tarde, pulverizándose el rostro cada vez con la bruma glow de Haruharu Wonder. La luz natural intensa hace que el acabado fresco y jugoso se aprecie con facilidad, y la variedad de escenarios muestra cómo encaja la bruma en una rutina ajetreada.",
    "outcome": "Haruharu Wonder recibió contenido de estilo de vida que muestra un uso real y repetido y una luminosidad natural. Encaja tanto en publicaciones orgánicas como en formatos de pago para su ficha de producto en Amazon."
  },
  "armani-beauty-campaign": {
    "title": "Armani Beauty: campaña con creadores",
    "summary": "Un tutorial de color modulable para las mejillas con el colorete líquido Luminous Silk de Armani Beauty.",
    "brief": "Armani Beauty quería mostrar cómo su colorete líquido se funde en un rubor natural y luminoso, con un look sin esfuerzo y premium. El posicionamiento de lujo de Armani Beauty exige contenido que se perciba refinado y pausado. El briefing pedía mostrar cómo el colorete se construye desde un velo ligero hasta un rubor, destacar su acabado luminoso y mantener el propio producto claramente visible.",
    "approach": "La creadora aplica el colorete Armani Luminous Silk a toquecitos sobre la mejilla y después lo difumina con una brocha, construyendo el color poco a poco para que el público vea lo modulable que es. El encuadre en primer plano y la luz suave muestran el acabado luminoso, y el vídeo se cierra con el producto, sostenido ante la cámara, junto al resultado final.",
    "outcome": "Armani Beauty recibió una demostración limpia y elegante de un solo producto que destaca lo bien que se difumina y su acabado. Encaja tanto en uso orgánico como en formatos de pago."
  },
  "valentino-beauty-campaign": {
    "title": "Valentino Beauty: campaña con creadores",
    "summary": "Un tutorial de maquillaje a juego que combina el labial Spike y el colorete Eye2Cheek de Valentino en un solo look coordinado.",
    "brief": "Valentino Beauty quería mostrar que sus productos de labios y mejillas funcionan como un conjunto. La idea debía parecer un consejo de estilismo, de los que se guardan, y no una simple muestra de producto. El maquillaje de Valentino Beauty se posiciona como alta costura, así que el contenido tenía que sentirse cuidado y pensado sin dejar de ser práctico. Los dos productos protagonistas debían poder identificarse claramente por nombre y tono, para que el público pudiera recrear el look, y el rostro terminado tenía que ser lo bastante fotogénico como para que la marca lo utilizara más allá del feed de la creadora.",
    "approach": "Dariia Bordun plantea el vídeo a partir de una analogía de moda: igual que coordinas los zapatos con el bolso, tus labios y tus mejillas deberían ir a juego. Aplica el Spike Valentino Buttery Matte Lip en 134 Couture in the Streets y después el Valentino Eye2Cheek en 01 Born in Roma, creando un suave «halo» de color que unifica el rostro. El labial dorado con tachuelas y la polvera roja de alta costura se sostienen ante la cámara con los nombres de los tonos en pantalla, de modo que el look es fácil de comprar.",
    "outcome": "Valentino Beauty recibió un tutorial que vende dos productos como un solo look y da al público una técnica que puede reutilizar. Los tonos nombrados, la aplicación en primer plano y el acabado coordinado lo hacen eficaz en orgánico y como pieza de pago orientada a la conversión."
  },
  "chanel-beauty-campaign": {
    "title": "Chanel Beauty: campaña con creadores",
    "summary": "Un tutorial de base con un solo producto que muestra cómo Les Beiges Pearly Glow de Chanel crea un acabado nacarado en la piel.",
    "brief": "Chanel Beauty quería mostrar un único producto luminoso para el rostro de una forma que se percibiera natural y lujosa. El reto era mostrar con claridad en cámara un efecto sutil, la luminosidad nacarada. La audiencia de Chanel espera contención y elegancia, así que el contenido debía evitar la venta agresiva sin que el producto dejara de ser el claro protagonista. El briefing pedía mostrar de forma convincente en cámara un acabado sutil que refleja la luz, mantener un estilismo mínimo y lujoso y presentar el producto como un básico fácil para el día a día.",
    "approach": "Dariia Bordun empieza con la piel al natural y después presenta Chanel Les Beiges Pearly Glow, que aplica con las yemas de los dedos y difumina por los puntos altos del rostro. Una luz suave y favorecedora deja que el brillo nacarado se vaya construyendo a la vista, y el texto, «DE VERDAD el único producto que necesitas para ese efecto de piel nacarada», lo presenta como producto estrella. Termina sosteniendo el frasco junto al resultado final.",
    "outcome": "Chanel Beauty recibió un tutorial elegante de un solo producto que hace que un acabado sutil sea fácil de ver y fácil de desear. Su estilismo mínimo y un antes y después claro lo mantienen en línea con la marca para uso orgánico y de pago."
  },
  "rare-beauty-campaign": {
    "title": "Rare Beauty: campaña con creadores",
    "summary": "Un look de maquillaje sonrosado y luminoso que combina el colorete de Rare Beauty con su aceite labial.",
    "brief": "Rare Beauty quería un look alegre y fácil de llevar que mostrara dos de sus categorías de culto, colorete y labios, funcionando juntas. La comunidad de Rare Beauty responde a un maquillaje alegre y accesible más que a la técnica compleja. El briefing pedía mostrar el colorete y el aceite labial juntos en un look divertido y fácil, mantener un tono animado e inclusivo y hacer que ambos productos fueran fáciles de identificar y de comprar.",
    "approach": "Melly Sanchez crea un look sonrosado, todo en rosa, en un escenario desenfadado, con pinzas de pelo rosas y neón suave incluidos. Se aplica el colorete de Rare Beauty en las mejillas a toquecitos con una brocha, enseña el producto a cámara, se perfila los labios y termina con el aceite labial para un rubor con brillo. El texto, «Rare beauty blush + lip oil», hace que la combinación sea fácil de comprar.",
    "outcome": "Rare Beauty recibió un tutorial animado y en línea con la marca que vende dos productos como un solo look. Su estilismo luminoso y sus pasos claros encajan tanto en publicaciones orgánicas como en paid social."
  },
  "saie-campaign": {
    "title": "Saie: campaña con creadores",
    "summary": "Un look luminoso, soleado y para llevar, creado íntegramente con Saie y aplicado directamente desde el neceser.",
    "brief": "Los productos de Saie, limpios y pensados ante todo para la piel, están hechos para un acabado fácil y luminoso. El objetivo era mostrarlos en un entorno relajado y de la vida real, acorde con el tono desenfadado de la marca. La audiencia de Saie valora los ingredientes limpios y un look fácil y natural. El briefing pedía contenido relajado y de la vida real que mostrara lo rápido que se aplican los productos, cómo se ven con luz natural y cómo encajan en un estilo de vida en movimiento.",
    "approach": "Rebecca Ghaderi se maquilla al aire libre, con la luz intensa del verano, sacando los productos de Saie directamente del bolso. Aplica a toquecitos y difumina los productos de mejillas y de base con brochas de Saie y sostiene cada uno ante la cámara, de modo que el público ve los tonos, las herramientas y el acabado de piel besada por el sol con luz natural.",
    "outcome": "Saie recibió contenido de maquillaje auténtico, con el estilo de vida por delante, que muestra sus productos en condiciones reales. Funciona bien de forma orgánica y como creatividad de pago cercana y que inspira confianza."
  },
  "patrick-ta-campaign": {
    "title": "Patrick Ta: campaña con creadores",
    "summary": "Un tutorial de soft glam construido en torno a la sombra de ojos con brillo y los dúos de colorete de Patrick Ta.",
    "brief": "Los productos de Patrick Ta son conocidos por su acabado luminoso y esculpido. El briefing pedía mostrar esa luminosidad característica en ojos y mejillas con un look que el público pudiera recrear. Los productos de Patrick Ta se posicionan como de calidad profesional, así que el briefing pedía contenido que mostrara de cerca la textura, el pigmento y el acabado. El look debía ser glamuroso pero alcanzable, y las polveras tenían que verse con la claridad suficiente para que el público pudiera reconocerlas en tienda.",
    "approach": "Beatrix Ramosaj abre con primeros planos de la sombra de ojos con brillo y del dúo de colorete, y después construye el look paso a paso: el brillo presionado sobre el párpado, pestañas y delineado definidos y, a continuación, el colorete difuminado sobre las mejillas. El encuadre cerrado sobre las polveras y las texturas muestra la calidad del producto, mientras que el look terminado demuestra su efecto luminoso.",
    "outcome": "Patrick Ta recibió un tutorial premium, con el producto en primer plano, que muestra varios productos y un look final coherente. Funciona para la audiencia de la creadora y como contenido de pago aspiracional."
  },
  "medicube-campaign": {
    "title": "Medicube: campaña con creadores",
    "summary": "Una rutina de noche glass skin construida en torno a la Collagen Night Wrapping Mask de Medicube, de la aplicación al momento de retirarla.",
    "brief": "La Collagen Night Wrapping Mask de Medicube tiene un formato peel-off muy particular, así que el contenido debía mostrar toda la experiencia, la aplicación, el uso durante la noche y el resultado, y explicar a la vez qué hace. La mascarilla de colágeno de Medicube es un producto viral, por lo que el contenido tenía que destacar en un feed saturado. El briefing pedía una demostración completa y satisfactoria, de la aplicación al resultado, una explicación clara de cuándo y por qué usarla, y un resultado glass skin lo bastante potente como para detener el scroll.",
    "approach": "Melani Seiffert abre con su «piel luminosa como un espejo» y después muestra cómo la mascarilla se aplica con brocha como último paso de su rutina. Los textos en pantalla explican que se aplica después del cuidado de la piel para sellarlo todo durante la noche y que contiene extracto de colágeno y ácido hialurónico para ayudar a mejorar la elasticidad y aportar hidratación profunda. El vídeo termina con el satisfactorio momento de retirarla y primeros planos de una piel jugosa, con efecto cristal.",
    "outcome": "Medicube recibió una demostración completa de un producto estrella, con una explicación clara y un resultado final muy fácil de compartir. Funciona como contenido orgánico de descubrimiento y como creatividad de performance dirigida a compradores de cuidado de la piel."
  },
  "celimax-campaign": {
    "title": "Celimax: campaña con creadores",
    "summary": "Un tutorial de aplicación preciso para el retinal shot de Celimax, asociado a ojeras, líneas finas y tono irregular.",
    "brief": "El retinal puede imponer respeto, así que Celimax necesitaba contenido que mostrara exactamente dónde y cómo usarlo. El objetivo era una demostración clara y centrada en los beneficios para quienes se preocupan por las manchas oscuras, las líneas finas y el tono irregular de la piel. Mucha gente siente curiosidad por el retinal, pero no sabe bien cómo ni dónde utilizarlo. El briefing pedía una demostración precisa y que no intimidara, que mostrara exactamente dónde aplicar el producto, nombrara el beneficio de cada zona y posicionara a Celimax como una puerta de entrada fácil al cuidado de la piel con retinal.",
    "approach": "Loresa Konushevci aplica el retinal shot de Celimax en puntos sobre las zonas a las que se dirige, bajo los ojos, a lo largo de las líneas de la sonrisa y por la frente, con textos en pantalla que nombran cada beneficio: ilumina las ojeras, reduce las líneas finas, para una piel más lisa y firme. Después lo masajea y muestra que una pequeña cantidad cubre el rostro. Los puntos de color amarillo vivo hacen que la técnica sea fácil de copiar.",
    "outcome": "Celimax recibió un vídeo instructivo que elimina las dudas a la hora de usar retinal y vincula cada punto de aplicación a un beneficio. Funciona como contenido didáctico para nuevos usuarios y como pieza de pago clara y favorable a la conversión."
  },
  "abib-campaign": {
    "title": "Abib: campaña con creadores",
    "summary": "Un día de reaplicación del protector solar con el Airy Sunstick de Abib, del parque al coche.",
    "brief": "La mayoría de la gente se aplica el protector solar una vez y se olvida de reaplicarlo. Abib quería mostrar que su Airy Sunstick hace que reaplicarlo sea rápido y fácil estés donde estés, y presentar el colgante indicador de UV, que cambia de color a medida que sube el nivel de radiación UV. El contenido debía sentirse como un día real fuera de casa, mostrar el stick deslizándose por el rostro sin dejar rastro blanco y hacer que el cambio de color del colgante se entendiera de un vistazo.",
    "approach": "Beatrix Ramosaj sigue el índice UV a lo largo de su día. Al aire libre, en las horas de más sol, el colgante se vuelve rojo intenso y ella reaplica el producto en segundos, usando el stick en forma de C para cubrir con rapidez las zonas más amplias y los contornos del rostro. Más tarde, en el coche, vuelve a reaplicarlo cuando baja el nivel de UV, con rótulos en pantalla que siguen el índice y un acabado que se mantiene transparente y natural.",
    "outcome": "Abib recibió un vídeo de creadora práctico y con enfoque narrativo que convierte la reaplicación en un hábito sencillo y hace del colgante indicador de UV el gancho. Funciona como contenido de descubrimiento para compradores de protección solar y como demostración clara de producto para paid social."
  },
  "axis-y-campaign": {
    "title": "AXIS-Y: campaña con creadores",
    "summary": "Una rutina de cuidado labial que presenta los aceites labiales de AXIS-Y, de los swatches a un acabado brillante y cuidado.",
    "brief": "AXIS-Y es conocida por su cuidado de la piel, y sus aceites labiales llevan a los labios ese mismo enfoque que pone el cuidado por delante. El briefing pedía mostrar los aceites como cuidado y como acabado a la vez: cómo se ven los tonos, cómo se desliza la textura y cómo quedan los labios una vez aplicados. El contenido debía sentirse como una parte natural de una rutina de belleza, mantener los frascos claramente en plano y encajar con una audiencia de belleza cuidada en Instagram y TikTok.",
    "approach": "Sadaf Torabi abre mostrando los aceites labiales uno junto a otro para que cada tono se vea con facilidad y después los aplica uno a uno en primer plano. La cámara se mantiene cerrada sobre el aplicador de esponja y los labios, de modo que el público puede seguir la textura y el acabado brillante e hidratado, antes de cerrar con el look terminado.",
    "outcome": "AXIS-Y recibió un vídeo de belleza cuidado, con el producto en primer plano, que muestra los tonos, la textura y el acabado de los aceites labiales en menos de veinte segundos. Funciona como contenido orgánico de descubrimiento y como pieza limpia para paid social en torno al cuidado labial."
  },
  "arencia-campaign": {
    "title": "Arencia: campaña con creadores",
    "summary": "Una guía preocupación a preocupación que asocia cada Booster Shot de Arencia con el problema de la piel al que se dirige.",
    "brief": "Arencia ofrece varios booster shots con distintos activos, así que quien compra necesita ayuda para elegir. El briefing pedía explicar la gama con claridad y hacer que cada producto se percibiera como la respuesta a una preocupación concreta. La gama de boosters de Arencia contiene distintos activos para distintas necesidades, lo que puede resultar confuso para los nuevos clientes. El briefing pedía que la gama fuera fácil de recorrer, vincular cada producto a una preocupación visible y crear una pieza atemporal y fácil de guardar que hiciera el trabajo de un buscador de productos.",
    "approach": "Aurela Elshani construye el vídeo como una tabla visual. Para cada preocupación muestra un primer plano de la zona y después aplica el booster correspondiente, con rótulos en pantalla que los emparejan: arrugas del cuello con NAD+, comedones cerrados con ácido glicólico, flacidez bajo los ojos con retinal y líneas de la sonrisa con PDRN. Los primeros planos insertados de cada preocupación, junto con la aplicación punto a punto, hacen que cada paso se entienda al instante.",
    "outcome": "Arencia recibió un vídeo de enfoque didáctico y muy fácil de guardar que vende toda la gama ayudando al público a elegir por sí mismo el producto adecuado. Funciona tanto como contenido de descubrimiento como pieza de performance dirigida a preocupaciones concretas de la piel."
  },
  "lilyeve-campaign": {
    "title": "Lilyeve: campaña con creadores",
    "summary": "Contenido de cuidado del cuero cabelludo que muestra cómo la GROW:TURN Pink Collagen Capsule Ampoule de Lilyeve encaja en una rutina capilar.",
    "brief": "El colágeno es un ingrediente conocido en el cuidado de la piel, pero una idea nueva para el cabello. Lilyeve necesitaba contenido que hiciera que el cuidado del cuero cabelludo pareciera fácil y apetecible, y que mostrara la recompensa: un cabello de aspecto más sano y brillante. La audiencia ya invierte en el cuidado de la piel, pero a menudo deja el cuidado del cabello en segundo plano. Lilyeve necesitaba presentar la GROW:TURN Pink Collagen Capsule Ampoule como un ritual sencillo y agradable, mostrar cómo funcionan su textura en cápsulas y su aplicador con cepillo, y conectar la rutina con un resultado visual que el público quisiera para sí.",
    "approach": "Albina Mavriqi empieza con un primer plano del cepillo aplicador dispensando la ampolla directamente sobre el cuero cabelludo, lo que muestra lo sencillo que es su uso. El vídeo corta después al resultado, un cabello largo y sedoso «como el cristal», antes de cerrar con la GROW:TURN Pink Collagen Capsule Ampoule y su nombre en pantalla. La estructura de antes de la rutina y después de la rutina vincula el producto con el resultado en segundos.",
    "outcome": "Lilyeve recibió contenido que presenta una categoría nueva, el colágeno para el cabello, mediante una demostración clara y un resultado aspiracional. Funciona como contenido didáctico para nuevas audiencias y como una sólida pieza visual para paid social."
  },
  "dr-althea-campaign": {
    "title": "Dr. Althea: campaña con creadores",
    "summary": "Un momento glass skin centrado en la hidratación con la Aqua Marine Jelly Mist de Dr. Althea.",
    "brief": "Dr. Althea quería mostrar su bruma facial como un aporte rápido de hidratación que deja un acabado fresco y jugoso. Las brumas faciales pueden parecer un extra opcional, así que el briefing pedía que la Aqua Marine Jelly Mist se percibiera como un paso de hidratación esencial. El contenido necesitaba un gancho visual potente, un resultado de luminosidad claro y un tono atento a las tendencias que encajara con naturalidad en las plataformas de formato corto.",
    "approach": "Khutjo Matsoma usa la bruma en una serie de planos lentos y muy cercanos que captan la fina pulverización y la piel luminosa que deja. El texto, «facemistmaxxing», aporta un tono desenfadado y atento a las tendencias, mientras que la iluminación resalta su luminosidad jugosa, de efecto glass skin.",
    "outcome": "Dr. Althea recibió un vídeo visualmente llamativo y guiado por las tendencias que comunica hidratación y luminosidad en segundos. Funciona para el alcance orgánico y como creatividad de pago que capta la atención."
  },
  "torriden-campaign": {
    "title": "Torriden: campaña con creadores",
    "summary": "Una historia de cuidado reafirmante para la Cellmazing Low Molecular Collagen Firming Cream de Torriden, de la textura a un resultado de piel elástica.",
    "brief": "Las cremas de colágeno suelen considerarse pesadas. Torriden quería mostrar que su Cellmazing Firming Cream se siente ligera y, a la vez, deja un aspecto más firme y elástico. Torriden quería dar a conocer su gama reafirmante entre compradores que ya conocen sus superventas hidratantes. El briefing pedía contenido que abordara una objeción habitual a las cremas de colágeno, explicara la fórmula en términos sencillos y enlazara con una oferta clara y rastreable.",
    "approach": "Albina Mavriqi abre con «cuando tu piel pierde elasticidad…», presionando la mejilla para hacer tangible la preocupación. Dispensa la crema, con el texto «las cremas de colágeno suelen ser pesadas, pero esta se funde como una hidratante», y enumera en pantalla sus ingredientes clave: colágeno 5D de bajo peso molecular, péptidos para la elasticidad y ácido hialurónico para la hidratación. La masajea y termina con un resultado radiante y de piel rellena, descrito como líneas de aspecto más suave e hidratación y firmeza en un solo paso.",
    "outcome": "Torriden recibió contenido de creadora centrado en los ingredientes que da la vuelta a una objeción habitual y muestra un resultado claro. Combinado con su código de descuento, funciona a la vez como contenido didáctico y como pieza orientada a la conversión."
  },
  "beauty-of-joseon-campaign": {
    "title": "Beauty of Joseon: campaña con creadores",
    "summary": "Un diario de siete días del contorno de ojos con el Revive Eye Serum y el Revive Under Eye Patch de Beauty of Joseon, con ginseng y retinal.",
    "brief": "Beauty of Joseon quería mostrar su dúo de ojos con retinal actuando a lo largo del tiempo, no tras un solo uso. El contenido debía generar confianza a través de la constancia y de un antes y después visible. Quienes compran cuidado para el contorno de ojos son escépticos ante las soluciones rápidas, así que el briefing pedía construir credibilidad con constancia y no con afirmaciones. El contenido debía mostrar los dos productos usados juntos, documentar el progreso durante varios días y hacer que la comparación fuera fácil de juzgar para el propio público.",
    "approach": "Saranda Mavriqi abre con un antes y después en pantalla dividida y luego documenta su rutina día a día. Presenta el Revive Under Eye Patch (Ginseng + Retinal) y el Revive Eye Serum, y aplica los parches y el sérum bajo los ojos con los rótulos Día 1, Día 3, Día 5 y Día 7 en pantalla. Los primeros planos cerrados y bien iluminados hacen que la zona sea fácil de comparar, y el vídeo se cierra con la imagen del antes para que el público pueda juzgar el cambio por sí mismo.",
    "outcome": "Beauty of Joseon recibió contenido en formato diario que une dos productos en una rutina creíble y los muestra en uso continuado. Funciona como contenido orgánico que genera confianza y como pieza de pago persuasiva para compradores de cuidado del contorno de ojos."
  },
  "frankly-campaign": {
    "title": "Frankly: campaña con creadores",
    "summary": "Una rutina glass skin de poros imperceptibles centrada en unas gotas del Closer Serum de Frankly.",
    "brief": "Frankly quería mostrar cómo su Closer Serum actúa sobre los poros visibles y la textura, con un resultado que el público pudiera ver con claridad en cámara. Frankly es un nombre más reciente para buena parte del público, así que el contenido debía causar una buena primera impresión. El briefing pedía vincular el Closer Serum a una preocupación concreta y cercana, los poros y la textura irregular, y mostrar una mejora visible del acabado dentro de un vídeo breve.",
    "approach": "Khutjo Matsoma abre con el objetivo, «glass skin sin poros», y después muestra primerísimos planos de textura y poros para situar la escena. Aplica unas gotas del Frankly Closer Serum con el cuentagotas, lo presiona sobre la piel y termina con primeros planos de una piel radiante y de aspecto uniforme. La luz cálida y unos movimientos lentos y deliberados resaltan el acabado liso y cristalino.",
    "outcome": "Frankly recibió una demostración de sérum clara y centrada en el resultado, con un potente efecto visual. Funciona como contenido orgánico para la audiencia de cuidado de la piel de Khutjo y como creatividad de pago para quienes se preocupan por los poros y la textura."
  },
  "biodance-campaign": {
    "title": "Biodance: campaña con creadores",
    "summary": "Un día en la vida que muestra cómo perdura la luminosidad de la mascarilla de noche de Biodance, retocada con la Caviar PDRN Jelly Serum Mist.",
    "brief": "Biodance quería vender la idea de una «luminosidad de mascarilla de 24 horas» duradera. El contenido debía mostrar ambos productos en contexto: la mascarilla de noche en casa y la bruma sérum como un refresco rápido a lo largo del día siguiente. Biodance es conocida sobre todo por sus mascarillas de tejido para la noche, y el briefing pedía extender ese reconocimiento a su Caviar PDRN Jelly Serum Mist. El contenido debía presentar los dos productos como un sistema, comunicar cuánto dura la luminosidad y hacerlo en un formato aspiracional y de estilo de vida, no en una demostración de producto estática.",
    "approach": "Beatrix Ramosaj construye la historia en torno a un reloj. Las marcas de hora van desde las 8PM, cuando se aplica la mascarilla en la cama, pasan por su velada en casa y llegan hasta la tarde siguiente, ante el portátil, al aire libre y fuera de casa durante el día. En cada momento recurre a la Caviar PDRN Jelly Serum Mist, de modo que el público ve cómo se mantiene la luminosidad en la vida real. Los interiores cálidos y los exteriores soleados mantienen el vídeo aspiracional y, a la vez, cercano.",
    "outcome": "Biodance recibió contenido con enfoque de estilo de vida que demuestra dos productos y una pauta de uso clara: tres horas por la noche y tres segundos para mantener la luminosidad. El formato narrativo retiene la atención y da a la marca una pieza versátil para uso orgánico y de pago."
  },
  "skin1004-campaign": {
    "title": "SKIN1004: campaña con creadores",
    "summary": "Un vídeo de rutina diaria para el Azelaic Acid 10% de SKIN1004, planteado desde la experiencia del propio Anton con la piel con tendencia acneica.",
    "brief": "SKIN1004 quería presentar su Azelaic Acid 10% a personas que lidian con brotes, rojeces y marcas posacné. El ácido azelaico es eficaz, pero todavía poco conocido para mucha gente, así que el briefing pedía un creador que pudiera hablar desde su experiencia personal y explicar, en términos sencillos, qué hace el ingrediente y cómo encaja en una rutina diaria. El contenido debía ser sincero y tranquilizador, no clínico, nombrar cada beneficio en pantalla y mostrar el frasco con la claridad suficiente para que el público pudiera volver a encontrarlo.",
    "approach": "Anton Drozhzhin, que ha hablado abiertamente de su propio acné, presenta el sérum como el ingrediente que le habría gustado conocer antes. El vídeo recorre su rutina en planos breves y limpios: gotas aplicadas en la frente y las mejillas, la textura mostrada en el dorso de la mano y el sérum presionado sobre la piel. Los textos en pantalla vinculan cada paso a un beneficio (ácido azelaico al 10 % a diario, controla el exceso de sebo, calma las rojeces) antes de un primer plano del frasco y una última imagen de su piel calmada y uniforme.",
    "outcome": "SKIN1004 recibió un vídeo de creador personal y de enfoque didáctico que explica un activo menos conocido en pocos segundos y mantiene el producto a la vista en todo momento. Encaja en el descubrimiento orgánico para audiencias con tendencia acneica y puede reutilizarse como creatividad de performance centrada en las rojeces y las marcas posacné."
  },
  "rejuran-jay": {
    "title": "Rejuran × Jay Sadiq",
    "summary": "Jay Sadiq pone a prueba el Pore Tightening Pad & Ampoule de Rejuran en una rutina de verano para el cuidado de los poros.",
    "brief": "El cuidado de los poros es una preocupación habitual, y más aún en verano. Jay muestra cómo funcionan el Pore Tightening Pad & Ampoule de Rejuran y destaca sus beneficios para afinar los poros mediante la aplicación y comparaciones de antes y después.",
    "approach": "El vídeo abre con la presentación del producto: Jay sostiene los discos con el texto «Este es el Rejuran Pore Tightening Pad & Ampoule, diseñado para el cuidado de los poros en verano» en pantalla. Se pasa un disco por la piel, coloca los discos sobre la nariz y las mejillas a modo de mascarilla refrescante y sigue después con la ampolla. Los textos en pantalla explican cada paso antes de que el reel corte a una comparación de «Antes» y «Después».",
    "outcome": "Una rutina paso a paso con planos de producto claros y un antes y después que el público puede juzgar por sí mismo."
  },
  "eclado-loresa": {
    "title": "ECLADO × Loresa Konushevci",
    "summary": "Loresa Konushevci muestra el CELVIX PRO de ECLADO, un dispositivo de RF para casa, junto con la EXO FILAGEN CREAM, de la primera aplicación al resultado final.",
    "brief": "Un dispositivo de belleza para usar en casa necesita verse en uso: cómo se sujeta, cómo se desliza y cómo queda la piel después. Este reel presenta el CELVIX PRO de ECLADO, descrito en el texto de la publicación como un dispositivo de RF para casa para una piel de aspecto más firme y contorneado, junto con la EXO FILAGEN CREAM, que le da un deslizamiento suave.",
    "approach": "Loresa abre con un primer plano de la piel al natural rotulado «Antes», aplica la EXO FILAGEN CREAM y después pasa el dispositivo por la mejilla y la mandíbula. Los textos en pantalla recorren cada fase, potenciar la absorción, efecto lifting y esculpido, cuidado que realza la luminosidad, antes de que el reel se cierre con una imagen de «Después» de una piel hidratada y de aspecto radiante.",
    "outcome": "Una demostración del dispositivo clara y paso a paso, en el estilo propio de Loresa, tranquilo y en primer plano, con el dispositivo y la crema siempre a la vista."
  },
  "too-faced-melly": {
    "title": "Too Faced × Melly Sanchez",
    "summary": "Melly Sanchez se viste para un evento de Too Faced en un reel en tonos rosas con formato «get ready with me».",
    "brief": "El contenido de eventos funciona mejor cuando el público se siente parte de los preparativos. El texto de la publicación de Melly sitúa la escena: «get dressed with me for a Too Faced event».",
    "approach": "Melly empieza mostrando el vestido rosa suave que ha elegido y después construye el look pieza a pieza, enseñando a cámara los zapatos, las joyas y los detalles, antes de recorrer el pasillo con el conjunto terminado.",
    "outcome": "Un «get ready with me» centrado en la moda que acerca el ambiente del evento de Too Faced a la audiencia de Melly."
  },
  "vt-cosmetics-anton": {
    "title": "VT Cosmetics × Anton Drozhzhin",
    "summary": "Anton Drozhzhin presenta el contorno de ojos vibrante de VT Cosmetics como una pieza de tecnología coreana para el cuidado de la piel.",
    "brief": "Un contorno de ojos con aplicador vibrante integrado es más fácil de enseñar que de describir. Este reel presenta el contorno de ojos vibrante de VT Cosmetics a través de la rutina del propio Anton.",
    "approach": "Anton abre con el aplicador en la mano y después muestra la punta vibrante en primer plano con el texto «Vibrating eye cream» en pantalla. Aplica la crema bajo cada ojo y alrededor de la zona, con textos breves que nombran los beneficios mostrados en el vídeo, y cierra con una última imagen del aplicador en uso.",
    "outcome": "Una demostración de la tecnología del producto en la que el dispositivo, la textura y la aplicación se ven de cerca."
  },
  "vichy-dariia": {
    "title": "Vichy × Dariia Bordun",
    "summary": "Dariia Bordun crea paso a paso un look de maquillaje natural de diario, de efecto «no makeup», empezando por el cuidado de la piel de Vichy.",
    "brief": "Un look de efecto «no makeup» empieza por la piel. Este reel, titulado en pantalla «everyday no makeup makeup step by step tutorial», comienza con Vichy antes de aplicar ningún maquillaje.",
    "approach": "Dariia empieza por las cejas, después aplica sus productos de cuidado de la piel de Vichy y los presiona sobre el rostro con las manos. Sigue con una base ligera difuminada con esponja, delineador y brillo de labios, con pasos breves y fáciles de imitar, y termina con un look fresco y natural.",
    "outcome": "Un tutorial práctico para el día a día en el que el cuidado de la piel se muestra como el primer paso de la rutina."
  },
  "iunik-khutjo": {
    "title": "IUNIK × Khutjo Matsoma",
    "summary": "Khutjo Matsoma presenta el Beta-Glucan Power Moisture Serum de IUNIK como un «skin drink» para un acabado jugoso de efecto glass skin.",
    "brief": "La hidratación se entiende mejor cuando se ve. Este reel plantea el Beta-Glucan Power Moisture Serum de IUNIK como un vaso de agua para la piel, una idea sencilla que recorre todo el vídeo.",
    "approach": "Khutjo abre con un vaso de agua en la mano y después pasa al sérum con el texto «SKIN DRINK SERUM!» en pantalla. Lo aplica con el cuentagotas, lo presiona con las yemas de los dedos y se gira hacia la luz para mostrar el acabado jugoso. Unos textos breves nombran los puntos que ella destaca de la fórmula, y el reel se cierra con el frasco junto a su piel luminosa.",
    "outcome": "Un concepto sencillo y fácil de recordar, apoyado en la aplicación en primer plano y en un acabado brillante de efecto glass skin."
  },
  "patrick-ta-beatrix": {
    "title": "Patrick Ta × Beatrix Ramosaj",
    "summary": "Beatrix Ramosaj crea un look suave de «transition blush» con la nueva colección de coloretes de Patrick Ta, compartido antes de su lanzamiento.",
    "brief": "El lanzamiento de Patrick Ta, presentado en el texto de la publicación como «The Evolution of Blush», gira en torno a un colorete que se funde desde la zona bajo el ojo hacia las mejillas. Beatrix comparte la colección el día anterior a su lanzamiento y muestra cómo se combinan la colocación y las texturas.",
    "approach": "Beatrix coloca el color justo debajo del ojo mientras aún está húmedo, da toques en lugar de arrastrar y lo difumina. Después aplica el dúo de colorete de efecto difuminado y termina en la parte alta de las mejillas. Los textos en pantalla explican cada paso, y el reel acaba con el rubor suave y editorial ya terminado y los productos en la mano.",
    "outcome": "Un look en formato tutorial que el público puede seguir paso a paso, con la descripción de la propia Beatrix de la colección como suave, romántica y para llevar a diario."
  },
  "k-secret-aiym": {
    "title": "K-SECRET × Aiym Kablan",
    "summary": "Aiym Kablan incorpora el SEOUL 1988 Eye Cream de K-SECRET a su rutina de mañana para una piel luminosa.",
    "brief": "El contorno de ojos es fácil de olvidar en una rutina de mañana. Este reel acompaña a Aiym en la suya y muestra dónde encaja el SEOUL 1988 Eye Cream de K-SECRET.",
    "approach": "Aiym recorre su mañana, con hilo dental, cepillado y limpieza, mientras unos textos identifican cada paso. El texto en pantalla explica por qué elige un contorno específico para la delicada zona de los ojos, y aplica pequeños puntos del SEOUL 1988 Eye Cream alrededor de los ojos antes de que el reel termine con «Enjoy the results».",
    "outcome": "Un formato de rutina de mañana con el que es fácil identificarse y que da al contorno de ojos un lugar y un propósito claros."
  },
  "lashify-dariia": {
    "title": "Lashify × Dariia Bordun",
    "summary": "Dariia Bordun pone a prueba cómo se difuminan y cuánto resisten los perfiladores de labios nude cremosos de Lashify, con una prueba de agua ante la cámara.",
    "brief": "Un perfilador de labios se juzga por dos cosas: cómo se difumina y cuánto tiempo se mantiene en su sitio. El reel de Dariia, con el texto «creamy nude lipliners that blend perfectly and won’t smudge», pone a prueba ambas.",
    "approach": "Dariia abre con «Waterproof lip liner???» y un vaso de agua, prueba los tonos sobre la mano y después perfila y rellena los labios con cada uno. Los tonos Nude Taupe, Nude Plum y Nude Rouge aparecen nombrados en pantalla. Cierra vertiendo agua sobre los labios para mostrar que el perfilador se mantiene en su sitio.",
    "outcome": "Una reseña en formato demostración que enseña la gama de tonos y somete la promesa del producto a una prueba visible."
  },
  "first-aid-beauty-albulena": {
    "title": "First Aid Beauty × Albulena Mavriqi",
    "summary": "Albulena Mavriqi muestra cómo queda la base sobre una piel preparada con First Aid Beauty, con el texto «Good skin = flawless makeup».",
    "brief": "El maquillaje se asienta mejor sobre una piel bien preparada. Este reel une ambas cosas y muestra la base aplicada sobre una piel cuidada con First Aid Beauty.",
    "approach": "En primeros planos muy cerrados de la zona de la boca y la barbilla, Albulena aplica la base con una espátula, la difumina con una esponja y muestra una comparación lado a lado del acabado. El reel termina con el tarro de First Aid Beauty en la mano.",
    "outcome": "Un vídeo macro centrado en la textura que relaciona un producto de cuidado de la piel con un acabado de maquillaje uniforme."
  },
  "meditherapy-aurela": {
    "title": "Meditherapy × Aurela Elshani",
    "summary": "Aurela Elshani sigue en primer plano el Hyaluronic Skin Booster First Serum de Meditherapy a lo largo de catorce días.",
    "brief": "Un sérum hidratante se muestra mejor a lo largo del tiempo. En este reel, Aurela da vida al Hyaluronic Skin Booster First Serum con planos de aplicación de cerca y comparaciones de la piel, destacando sus beneficios hidratantes y el aspecto de una piel más lisa y rellena.",
    "approach": "El vídeo empieza con un primer plano de las líneas finas de la frente y después sigue a Aurela mientras aplica el sérum con marcadores de día en pantalla: Day 1, Day 3, Day 7, Day 10 y Day 14. El encuadre se mantiene cerrado sobre la misma zona en todo momento, para que el público pueda comparar la textura por sí mismo, y el reel termina con Aurela sosteniendo el frasco.",
    "outcome": "Un formato de diario en primer plano que mantiene el producto y la piel en el centro de cada plano."
  },
  "arencia-albina": {
    "title": "Arencia × Albina Mavriqi",
    "summary": "Albina Mavriqi muestra el NAD+ Booster Shot de Arencia en una rutina en primer plano para la zona bajo los ojos y la mejilla.",
    "brief": "El cuidado de la zona bajo los ojos exige precisión. Este reel abre con «POV: your skin needs NAD+» y presenta el NAD+ Booster Shot de Arencia, con textos en pantalla que señalan las líneas finas y las arrugas como zona de atención.",
    "approach": "Albina aplica la fórmula lila en pequeños puntos bajo el ojo y sobre la mejilla, y después la extiende con un accesorio facial. Los planos macro muestran la textura sobre su piel, y el tubo se enseña con claridad antes de que el reel termine con un plano más abierto de su rostro, de aspecto luminoso e hidratado.",
    "outcome": "Un vídeo de aplicación cuidado y atento al detalle, en el que tanto el nombre del producto como su textura se reconocen con facilidad."
  },
  "revcell-loresa": {
    "title": "REVCELL × Loresa Konushevci",
    "summary": "Loresa Konushevci convierte su rutina REVCELL en un día de spa en casa, desde el Vita Collagen Activfilm hasta un brillo instantáneo.",
    "brief": "Una rutina de varios pasos necesita una historia que la sostenga. Loresa plantea su rutina REVCELL como un día de spa en casa, con el texto «Healthy, glowing skin starts with my REVCELL routine».",
    "approach": "El reel abre con los productos dispuestos en una bandeja y después sigue cada paso: la lámina Vita Collagen Activfilm aplicada sobre el rostro, una capa cremosa extendida encima y un sérum aplicado con un aplicador de tipo jeringa. Termina con un primer plano acompañado del texto «Instant glow».",
    "outcome": "Un vídeo de rutina con enfoque de estilo de vida que muestra varios productos en orden y en contexto."
  },
  "nyx-albulena": {
    "title": "NYX Professional Makeup × Albulena Mavriqi",
    "summary": "Albulena Mavriqi responde a un problema conocido, las cejas que no se mantienen en su sitio, con un gel de cejas de NYX Professional Makeup.",
    "brief": "El reel abre con un «POV: eyebrows keep falling?» con el que es fácil identificarse y presenta un gel de cejas de NYX Professional Makeup como la solución.",
    "approach": "Albulena enseña de cerca el tubo rosa intenso, peina las cejas hacia arriba con el gel y termina con las cejas fijadas y elevadas a la luz natural. El vídeo es breve y directo, y mantiene el producto y las cejas en cada plano.",
    "outcome": "Un formato rápido de problema y solución que se adapta al consumo de vídeo corto."
  },
  "prada-beauty-rebecca": {
    "title": "Prada Beauty × Rebecca Ghaderi",
    "summary": "Rebecca Ghaderi en el pop-up de Prada Beauty Touch Blush, fotografiada con un look de lunares ante el decorado rosa y rojo de la marca.",
    "brief": "Rebecca visita el pop-up de Prada Beauty Touch Blush, un espacio en rosa y rojo ambientado en torno al lanzamiento. Su publicación de fotos se muestra aquí como un pase de las once imágenes, empezando por la portada.",
    "approach": "El carrusel alterna retratos de Rebecca con camisa blanca y vestido de lunares ante los rótulos de Prada y Touch Blush con detalles de los estuches de colorete y del decorado. La imagen de portada la sitúa en el pop-up con el expositor de Touch Blush a su espalda.",
    "outcome": "Una publicación de fotos editorial y ligada a un evento, en la que el entorno y el estilismo transmiten la estética de la marca."
  },
  "mixsoon-dora": {
    "title": "Mixsoon × Dora Nguyen",
    "summary": "Dora Nguyen aplica el Bean Copper Peptide Firming Serum de Mixsoon en las líneas de la sonrisa y la frente, con textos breves que explican cada paso.",
    "brief": "Es más fácil hablar de las líneas finas cuando se pueden señalar. Este vídeo presenta el Bean Copper Peptide Firming Serum de Mixsoon, descrito en el texto de la publicación como la forma que tiene Dora de «fading smile lines and forehead wrinkles» con un sérum de péptidos de cobre.",
    "approach": "Dora abre señalando sus líneas de la sonrisa y la frente bajo el texto «Treat These Aging Signals Before Getting Wrinkles», y después muestra entre los dedos la textura elástica del sérum. Lo aplica con el dosificador en mejillas, frente y zona bajo los ojos, lo extiende con un accesorio facial fino, y los textos en pantalla mencionan el péptido de cobre, una piel de aspecto más liso y más firme, y la esencia de soja para la hidratación.",
    "outcome": "Una rutina en primer plano y fácil de seguir que mantiene el sérum y su textura a la vista de principio a fin, y que cierra con el propio frasco."
  },
  "arencia-dora": {
    "title": "Arencia × Dora Nguyen",
    "summary": "Dora Nguyen dedica al cuello su propia rutina con el NAD+ Booster Shot de Arencia, aplicado en una secuencia de primeros planos día a día.",
    "brief": "El cuidado del cuello suele quedar en segundo plano dentro de una rutina de cuidado de la piel. El texto de Dora, «Neck care routine 💜 NAD+ Booster Shot», sitúa el tubo lavanda del booster de Arencia en el centro de una rutina pensada solo para el cuello.",
    "approach": "El vídeo abre con las líneas del cuello de Dora y la pregunta «Filler cream exists?», antes de que la crema lavanda salga del tubo. Se envuelve el cuello con film transparente sobre la crema y después sigue una secuencia día a día: dibuja líneas onduladas del booster a lo largo del cuello y lo presiona con las yemas de los dedos. Cierra con sus manos enmarcando un cuello liso y con un brillo suave.",
    "outcome": "Una rutina visual y muy concreta en la que el color y la textura del producto llevan el relato, rodada íntegramente en primer plano."
  },
  "axis-y-dora": {
    "title": "AXIS-Y × Dora Nguyen",
    "summary": "Dora Nguyen sigue el Dark Spot Correcting Glow Serum de AXIS-Y en un breve diario de piel día a día, centrado en las marcas posacné.",
    "brief": "Las marcas posacné y el tono desigual son una preocupación lenta y cotidiana. Este vídeo presenta el Dark Spot Correcting Glow Serum de AXIS-Y, que el texto de Dora describe como una ayuda para atenuar las marcas posacné, unificar el tono desigual y devolver a la piel una luminosidad saludable.",
    "approach": "Dora abre con un primer plano de su mejilla y el texto «Fade acne & redness with just ONE product..», acerca el tubo a la cámara y después aplica el sérum sobre la piel. Los textos marcan cada etapa de su diario con lo que ella destaca: antioxidantes, efecto calmante y un tono de aspecto más uniforme, una luminosidad natural y serena, y una sensación ligera y de rápida absorción. El vídeo termina con los dos tubos junto a su rostro.",
    "outcome": "Un formato de diario sencillo que permite al público seguir el sérum durante varios días, con el producto nombrado en pantalla al cierre."
  },
  "medicube-dora": {
    "title": "Medicube × Dora Nguyen",
    "summary": "Dora Nguyen muestra que los Zero Pore Pads de Medicube no son solo para el rostro y los usa desde la nariz hasta los talones.",
    "brief": "Los discos de tónico suelen reservarse para el rostro. El texto de Dora, «Your sign to add ‘zero pore’ toner pads to your skincare routine for clear skin», da pie a un vídeo construido sobre una idea: los discos pueden usarse casi en cualquier zona.",
    "approach": "Dora abre con «Reminder that you can use Zero Pore Pads anywhere» y acerca a la cámara el tarro de Medicube Zero Pore Pad. Pasa un disco por la nariz y el rostro mientras el texto dice «Clears pores & smooths skin texture», y después sigue con las piernas y las axilas («Get rid of strawberry skin»), los talones («Smooths dry heels») y el escote («Reduces chest acne»).",
    "outcome": "Un vídeo rápido y práctico que muestra un mismo producto en varios usos cotidianos, con el tarro bien visible al principio."
  },
  "axis-y-qendresa": {
    "title": "AXIS-Y × Qendresa Konushevci",
    "summary": "Qendresa Konushevci crea una rutina tranquila para las manchas con el Dark Spot Correcting Glow Toner y el sérum de AXIS-Y, aplicados en capas durante varios días.",
    "brief": "Las manchas se atenúan con constancia, no con un único paso. El texto de Qendresa, «Fade the look of dark spots and reveal your natural glow», presenta la gama para manchas de AXIS-Y como parte de su rutina diaria.",
    "approach": "El vídeo abre con un primer plano de piel con imperfecciones y el texto «My life saver», y después pasa a Qendresa sosteniendo el Dark Spot Correcting Glow Toner. Presiona el tónico sobre la piel, aplica el sérum con el dosificador en las mejillas y bajo los ojos y lo asienta a toques, con cada sesión marcada por una diadema distinta. Termina sosteniendo, uno junto al otro, el tónico y el tubo del Dark Spot Correcting Glow Serum.",
    "outcome": "Una rutina relajada y fácil de repetir, con primeros planos suaves y luminosos y los dos productos de AXIS-Y identificados en sus envases."
  },
  "arencia-qendresa": {
    "title": "Arencia × Qendresa Konushevci",
    "summary": "Qendresa Konushevci asocia cuatro booster shots de Arencia a cuatro preocupaciones de la piel, de los labios oscuros a las líneas de la sonrisa, en una guía rápida.",
    "brief": "Una gama de boosters específicos se entiende mejor cuando cada uno se asocia a una preocupación. El texto de Qendresa, «Booster shots💜🤍🩷💛», presenta cuatro tubos de Arencia, cada uno con su color.",
    "approach": "Qendresa abre sosteniendo los tubos de los boosters NAD+, Eraser Shot Glycolic Acid, PDRN y Vitamin C con el texto «Always remember...». Los textos en pantalla emparejan después cada preocupación con un booster: labios oscuros con Vitamin C aplicada en puntos alrededor de los labios, arrugas del cuello con NAD+, comedones cerrados con Glycolic Acid en la frente y líneas de la sonrisa con PDRN.",
    "outcome": "Una guía clara de «cuál para qué» que mantiene la etiqueta de cada producto en plano y ofrece al público una referencia fácil de guardar."
  },
  "purito-qendresa": {
    "title": "Purito × Qendresa Konushevci",
    "summary": "Qendresa Konushevci presenta el Retinol Retinal 2000 NAD+ Serum de Purito y muestra cómo se agita y cómo se aplica.",
    "brief": "Retinol o retinal es una duda habitual para quien empieza. El texto de Qendresa nombra el Retinol Retinal 2000 NAD+ Serum de Purito, y el vídeo responde a la pregunta con un sérum que combina ambos.",
    "approach": "Qendresa abre con «Your skin needs Retinol or Retinal...» sobre primeros planos de su frente y de la zona bajo los ojos, y responde «My skin both». Muestra el frasco con «Shake to activate retinol AND retinal» y después aplica el sérum dorado con el cuentagotas por todo el rostro. Los textos indican «Retinal + Retinol = Fast + deep care» y una textura que se siente más firme, antes de terminar sonriendo a cámara con el frasco.",
    "outcome": "Un vídeo breve e informativo que explica con palabras sencillas la idea dos en uno del sérum y mantiene en primer plano la aplicación con cuentagotas."
  },
  "dr-althea-qendresa": {
    "title": "Dr. Althea × Qendresa Konushevci",
    "summary": "Qendresa Konushevci comparte la historia de su piel, del acné de la adolescencia a su rutina actual, con la 345 Relief Cream de Dr. Althea.",
    "brief": "Las historias sobre la piel resultan más sinceras cuando se cuentan paso a paso. El texto de Qendresa, «My skin didn’t change overnight, but every step was worth it.», presenta la 345 Relief Cream de Dr. Althea como parte de la rutina que sigue ahora.",
    "approach": "El vídeo abre con primeros planos de brotes pasados y un texto en pantalla sobre cómo convivió con el acné durante toda su adolescencia, y después pasa a «My skin now...». Qendresa aplica la crema en puntos sobre la frente y las mejillas, la asienta con las yemas de los dedos y la extiende por el cuello y el escote, antes de terminar con «From acne to clear skin» y el tubo de la 345 Relief Cream frente a la cámara.",
    "outcome": "Un vídeo personal y de ritmo pausado que une la historia de la propia Qendresa con una aplicación sencilla, y que cierra con el producto bien a la vista."
  },
  "patrick-ta-anisa": {
    "title": "Patrick Ta × Anisa Hukmova",
    "summary": "Anisa Hukmova muestra un tutorial de maquillaje de ojos «principiante frente a profesional», con un stick de Patrick Ta para elevar y definir la mirada.",
    "brief": "Pequeños cambios de técnica marcan una gran diferencia en el maquillaje de ojos. El texto de Anisa, «Eye makeup tutorial», etiqueta a Patrick Ta Beauty, y el vídeo se construye sobre una comparación lado a lado «beginner ✗ / pro ✓».",
    "approach": "Anisa parte de un ahumado en un ojo y de un maquillaje más sencillo, de estilo principiante, en el otro. Traza con un stick de Patrick Ta una línea clara y ascendente desde el extremo exterior, la difumina con una brocha y trabaja la sombra en la cuenca y en la línea de las pestañas, hasta terminar con un ojo definido y elevado.",
    "outcome": "Un tutorial rápido y fácil de imitar en el estilo de primer plano de Anisa, con el stick de Patrick Ta claramente en la mano."
  },
  "yesstyle-anisa": {
    "title": "YesStyle × Anisa Hukmova",
    "summary": "Anisa Hukmova comparte un truco rápido para dar volumen a los labios, hecho con productos que, según su texto, proceden todos de YesStyle.",
    "brief": "Las combinaciones de labios son uno de los sellos de Anisa. Su texto presenta un «Lip Plumping Hack», etiqueta a Holika Holika y Kaleidos Makeup e indica que todos los productos usados en el vídeo son de YesStyle.",
    "approach": "Anisa empieza con una barra de labios, perfila por fuera del contorno con un perfilador marrón y rellena la forma, después añade corrector alrededor del borde y difumina con un pincel de labios. Termina con una capa brillante de un tubo rojo, y cierra con unos labios voluminosos y de acabado cristalino y el brillo frente a la cámara.",
    "outcome": "Una combinación de labios paso a paso que el público puede seguir en segundos, con el look terminado y el último producto mostrados juntos."
  },
  "tirtir-anisa": {
    "title": "TIRTIR × Anisa Hukmova",
    "summary": "Anisa Hukmova compara dos formas de colocar el colorete, «+5Y» y «−5Y», con productos de TIRTIR para un rubor más suave y elevado.",
    "brief": "La colocación del colorete puede cambiar todo el rostro. El texto de Anisa, «+5y VS -5y with @TIRTIR Inc. from @YesStyle», plantea una comparación rápida entre una colocación baja y cargada y otra elevada.",
    "approach": "Anisa tacha el colorete bajo y cargado y vuelve a empezar: se muestra un TIRTIR Mood Glider Lip & Blush sobre su caja, y después un corrector claro y un colorete rojo en stick se trazan en una línea más alta, desde la mejilla hacia la sien. Lo difumina con una brocha y termina sosteniendo un stick de TIRTIR junto al rubor ya terminado, más suave.",
    "outcome": "Un antes y después rápido que hace que la colocación sea fácil de recordar, con los envases de TIRTIR visibles en todo momento."
  },
  "dr-althea-anhelina": {
    "title": "Dr. Althea × Anhelina Andrusik",
    "summary": "Anhelina Andrusik graba una «glass skincare routine» con varios pasos en capas, entre ellos una espuma con dosificador de Dr. Althea y la 345 Relief Cream de la marca.",
    "brief": "Una rutina de glass skin es más fácil de seguir cuando cada paso se muestra en orden. El texto invita al público a guardar el vídeo para no tener que adivinar nunca qué pasos seguir, y los productos de Dr. Althea ocupan el centro de la rutina junto a otros favoritos de cuidado de la piel.",
    "approach": "Sobre un fondo rosa suave, Anhelina abre con un primer plano de su piel bajo el texto «glass skincare routine». Recorre cada paso ante la cámara, desde un disco de tónico y una fórmula lechosa vertida en la palma de la mano hasta una espuma con dosificador de Dr. Althea, que aplica directamente sobre la frente y las mejillas; después muestra la 345 Relief Cream y termina con una crema iluminadora extendida sobre los pómulos.",
    "outcome": "Una rutina rápida y fácil de guardar que termina con primeros planos de una piel de aspecto fresco y jugoso, con cada producto de Dr. Althea mostrado con claridad a la cámara."
  },
  "skin1004-anhelina": {
    "title": "SKIN1004 × Anhelina Andrusik",
    "summary": "Anhelina Andrusik se arregla en su nuevo apartamento, con la Madagascar Centella Ampoule de SKIN1004 como paso clave de su cuidado de la piel de mañana.",
    "brief": "Un vídeo «get ready with me» muestra un producto como parte de una rutina real y no de forma aislada. Con el texto «Grwm in my new apartment», el vídeo sigue la mañana de otoño de Anhelina, y SKIN1004 es una de las marcas que etiqueta junto a sus productos coreanos de cuidado de la piel.",
    "approach": "Bajo el título «get ready with me in my new apartment», Anhelina pasa de despertarse a la ducha y a vestirse, hasta llegar a su tocador. Allí presiona un tónico sobre la piel, después muestra la Madagascar Centella Ampoule de SKIN1004, la carga con el cuentagotas y la asienta a toques, antes de añadir un sérum, parches para los ojos y un labial con color.",
    "outcome": "Una rutina de mañana suave y estética en la que la ampolla de SKIN1004 tiene su propio momento en primer plano y se muestra en uso."
  },
  "patrick-ta-anhelina": {
    "title": "Patrick Ta × Anhelina Andrusik",
    "summary": "Anhelina Andrusik recrea un look luminoso inspirado en la pasarela, construido en torno al dúo de sombras de Patrick Ta en el tono «in your dreams».",
    "brief": "El vídeo, titulado en pantalla «Victoria’s Secret makeup tutorial», se propone recrear un look de pasarela suave y luminoso. El texto señala como secreto de la sombra luminosa el nuevo dúo de sombras favorito de Anhelina, de Patrick Ta, en el tono «in your dreams».",
    "approach": "Anhelina abre con su look terminado junto a una imagen de referencia de pasarela y después construye el rostro paso a paso: base, corrector, contorno, polvos e iluminador. Acerca el dúo de Patrick Ta a la cámara, extiende el brillo sobre los párpados y termina con máscara de pestañas, colorete, labios y cejas.",
    "outcome": "Un tutorial de rostro completo que el público puede seguir desde la piel sin maquillar hasta el look terminado, con el dúo de Patrick Ta mostrado con claridad a mitad del proceso."
  },
  "purito-anhelina": {
    "title": "Purito × Anhelina Andrusik",
    "summary": "Anhelina Andrusik prueba por primera vez el cuidado de la piel de Purito y comenta cada producto como persona de piel sensible, grasa o mixta y con tendencia acneica.",
    "brief": "Quienes tienen la piel sensible quieren saber cómo se siente un producto antes de probarlo. En el texto, Anhelina cuenta que prueba Purito Seoul por primera vez como una chica de piel sensible, grasa o mixta y con tendencia acneica, y da las gracias a YesStyle y a Purito por enviarle los productos.",
    "approach": "Anhelina habla directamente a cámara mientras abre la caja de la gama y muestra la Mighty Bamboo Panthenol Cream y la Oat-in Calming Gel Cream. Prueba una crema en el dorso de la mano, se aplica los productos en el rostro mientras habla y termina con la línea completa, incluido el Daily Soft Touch Sunscreen, dispuesta delante de ella.",
    "outcome": "Una primera impresión sincera y comentada que mantiene todos los productos de Purito a la vista y da al público una idea de la textura y la sensación."
  },
  "abib-vania": {
    "title": "Abib × Vania Fernandes",
    "summary": "Vania Fernandes prueba el Collagen eye patch (Jericho rose jelly) de Abib en unas ojeras cansadas, de un primer plano a las 8 de la mañana a un antes y después lado a lado.",
    "brief": "Una zona bajo los ojos de aspecto cansado es un problema matutino conocido. En el texto, Vania la llama su mayor enemigo de las mañanas y se propone probar los parches de colágeno en gel de Abib, preguntándose si merece la pena añadirlos a la rutina.",
    "approach": "Vania abre con un primer plano de la zona bajo sus ojos con la etiqueta «8:00 am» y después acerca a la cámara el tarro del Abib Collagen eye patch. Se coloca los parches de gel, con «wait 20-30 min» en pantalla, retira uno y pasa a un plano de «final result» y a una pantalla dividida con el antes y el después.",
    "outcome": "Un formato breve y claro de prueba y resultado, con el tarro y la textura en gel de los parches siempre en primer plano."
  },
  "fenty-skin-vania": {
    "title": "Fenty Skin × Vania Fernandes",
    "summary": "Vania Fernandes abre el Quench Kit navideño de Fenty Skin y pone en uso los minis en una rutina rápida de tres pasos.",
    "brief": "Un kit navideño se entiende mejor cuando su contenido se usa y no solo se enseña. En el texto, Vania dice que la colección navideña de Fenty «understood the assignment» y que está obsesionada con los minis que incluye el Quench Kit.",
    "approach": "Vania saca el kit de su caja de regalo ilustrada y nombra cada artículo en pantalla: la Mini Backpack, la Few N Plump Intensive Hydration Mask, la Plush Puddin’ Intensive Recovery Lip Mask y el Fat Water Hydrating Milky Toner. Después sigue «step 1: toner», «step 2: leave in mask» y «step 3: lip treatment» antes de guardar de nuevo los minis en la mochila.",
    "outcome": "Un unboxing festivo que sirve a la vez de rutina sencilla, con cada producto del kit nombrado y mostrado en uso."
  },
  "skin1004-vania": {
    "title": "SKIN1004 × Vania Fernandes",
    "summary": "Vania Fernandes aplica el Probio-Cica Bakuchiol Eye Cream de SKIN1004 sobre las ojeras, con un antes y después rápido.",
    "brief": "Las ojeras son una de las preocupaciones de cuidado de la piel más buscadas. En el texto, Vania dice que está obsesionada con el Probio-Cica Bakuchiol Eye Cream de SKIN1004 y pregunta a su audiencia si debería hacer una prueba más larga.",
    "approach": "El vídeo abre con un primer plano muy cerrado de la zona bajo el ojo con «dark circles???» en pantalla. Vania aplica la crema en puntos directamente desde el tubo, rotulado «CENTELLA Probio-Cica Eye Cream», la asienta a toques con la yema del dedo y termina con una comparación de «before» y «after», con el tubo junto al rostro.",
    "outcome": "Un primer plano rápido y concreto que muestra la textura, la aplicación y el tubo en pocos segundos."
  },
  "medicube-vania": {
    "title": "Medicube × Vania Fernandes",
    "summary": "Vania Fernandes prueba por primera vez el Medicube Booster Pro, lo combina con la Collagen Jelly Cream y muestra el acabado justo después.",
    "brief": "Un dispositivo de belleza hay que verlo en uso: cómo se sujeta, cómo se mueve y qué aspecto tiene la piel después. En el texto, Vania está «finally trying the viral medicube booster pro».",
    "approach": "Vania abre con «trying the viral medicube booster pro» en pantalla, muestra la Collagen Jelly Cream y la aplica, y después enseña el dispositivo ajustado en «booster mode: level 1». Lo desliza por la mejilla y la zona bajo el ojo, girándose para mostrar cada lado, y cierra con «the finish immediately after».",
    "outcome": "Una demostración del dispositivo limpia y en primer plano que mantiene a la vista tanto el Booster Pro como la crema de principio a fin."
  },
  "purito-ardita": {
    "title": "Purito × Ardita Gashi",
    "summary": "Ardita Gashi muestra el cuidado Oat-in Calming de Purito para piel sensible, de un primer paso lechoso a una crema en gel calmante.",
    "brief": "La piel sensible y con tendencia acneica pide pasos suaves. El texto describe este reel como un cuidado delicado para ese tipo de piel, con «gentle cleansing, soothing hydration and barrier care» de la gama Oat-in Calming de Purito Seoul.",
    "approach": "Ardita vierte una fórmula lechosa de un frasco blanco de Purito sobre la mejilla, la mano y la clavícula, después muestra la Oat-in Calming Gel Cream, la aplica en el dorso de la mano y la presiona sobre la piel. El reel termina con el pelo suelto y un acabado fresco y jugoso.",
    "outcome": "Una rutina breve y sensorial que mantiene los dos productos a la vista y deja que las texturas hablen por sí solas."
  },
  "abib-ardita": {
    "title": "Abib × Ardita Gashi",
    "summary": "Ardita Gashi presta una atención especial a la zona bajo los ojos con el Collagen eye patch de Abib antes de una base de maquillaje uniforme.",
    "brief": "El texto lo plantea como un paso para los pliegues bajo los ojos, «giving this step the attention it deserves», y etiqueta a Abib junto a los hashtags Iron Patch y Collagen.",
    "approach": "Ardita abre con un primer plano de la zona bajo el ojo y el texto «My under-eye creases keep getting more noticeable», y después prepara la zona mientras aparece en pantalla «This Iron Patch helps smooth the look of fine lines». Pasa al corrector y a la base, muestra un primer plano de «After» y termina acercando a la cámara el tarro del Abib Collagen eye patch.",
    "outcome": "Una historia rápida, de la preparación al maquillaje, que relaciona el cuidado de la piel con una base de aspecto más uniforme, con el tarro mostrado con claridad al final."
  },
  "anua-ardita": {
    "title": "Anua × Ardita Gashi",
    "summary": "Ardita Gashi vaporiza el spray de PDRN y cápsulas de ácido hialurónico de Anua y después lo sella con una crema para un acabado jugoso y de aspecto relleno.",
    "brief": "El texto presenta el Blue Dewy Spray de Anua como una forma de conseguir «dewy, plump & glowing skin in a mist». El vídeo se centra en la rapidez con la que la bruma encaja en una rutina.",
    "approach": "Ardita muestra el frasco con «All you need is this…» en pantalla y después vaporiza el rostro y el cuello mientras los textos señalan el PDRN, el colágeno y «Deep Hydration & Plumpness». Aplica en puntos una crema de Anua por el rostro y el cuello, «A cream to lock in hydration», la extiende y cierra con un primer plano de «After».",
    "outcome": "Una rutina rápida y en primer plano que muestra el spray y la crema en uso, y que termina con una luminosidad fresca y jugosa."
  },
  "axis-y-ardita": {
    "title": "AXIS-Y × Ardita Gashi",
    "summary": "Ardita Gashi dedica una semana a la zona bajo los ojos con el Vegan Collagen Eye Serum de AXIS-Y, aplicado con su punta roller de efecto frío.",
    "brief": "El texto presenta el Vegan Collagen Eye Serum de AXIS-Y como su elección para «fresh under-eyes, healthy glow». El vídeo se construye sobre un hábito diario sencillo: un sérum para los ojos, usado cada día durante una semana.",
    "approach": "Ardita abre muy cerca de la cámara con «My eyes were in need of this serum» en pantalla y después muestra el tubo de tapón verde y su punta roller. Lo aplica bajo el ojo el día 1, el día 4 y el día 7, y cierra con luz natural suave, sosteniendo el tubo junto al rostro.",
    "outcome": "Una rutina clara en formato diario que muestra exactamente cómo se usa el aplicador roller, en el estilo de primer plano propio de Ardita."
  },
  "john-farmer-gvantsa": {
    "title": "John Farmer × Gvantsa Okinashvili",
    "summary": "Gvantsa Okinashvili convierte el champú Ginseng Caffeine de JOHN FARMER en una rutina capilar tranquila a la luz de las velas, de la primera espuma a un pelo brillante y de aspecto sano.",
    "brief": "El cuidado capilar coreano suele explicarse a través de sus ingredientes. El reel de Gvantsa presenta JOHN FARMER Ginseng Caffeine, descrito en su texto como elaborado con «real whole ginseng» y cafeína para ayudar a cuidar un cuero cabelludo sano y un pelo de aspecto más sano.",
    "approach": "El reel abre con el frasco ámbar rodeado de velas y después pasa a la ducha: el champú se dosifica, se trabaja en el cuero cabelludo hasta formar una espuma abundante y se aclara a lo largo del pelo, con el producto siempre en plano. Cierra con Gvantsa en albornoz, pasando las manos por un pelo suave y brillante.",
    "outcome": "Un vídeo de rutina pausado y con atmósfera que mantiene el producto en el centro y termina con el pelo ya listo."
  },
  "medicube-gvantsa": {
    "title": "Medicube × Gvantsa Okinashvili",
    "summary": "Gvantsa Okinashvili lleva dos mascarillas en gel de Medicube a la vez, una para la luminosidad y otra para la firmeza, y las compara en el mismo rostro.",
    "brief": "«Same face, two different masks, so which one does your skin need?» El texto presenta la PDRN Pink Collagen Gel Mask de Medicube para los días de piel apagada y cansada, y la EGF NAD Firming Gel Mask para cuando quiere que la piel se vea más lisa y firme.",
    "approach": "Gvantsa muestra cada envase y después aplica la mascarilla rosa en una mitad del rostro y la mascarilla de un rosa más intenso en la otra, con textos que explican el enfoque de cada una. Tras unas horas, ambas mascarillas se vuelven transparentes y las retira para mostrar el acabado fresco y liso. El texto añade que usa los trozos sobrantes en las líneas de la sonrisa y en el cuello.",
    "outcome": "Una comparación mitad y mitad fácil de leer que ayuda al público a elegir entre las dos mascarillas, con un tono tranquilo y cerca de la cámara."
  },
  "estee-lauder-gvantsa": {
    "title": "Estée Lauder × Gvantsa Okinashvili",
    "summary": "La rutina «makeup with me» de Gvantsa Okinashvili, construida sobre el Advanced Night Repair y la base Double Wear de Estée Lauder.",
    "brief": "Un formato «makeup with me», etiquetado con #esteelauder en el texto, que parte de la preparación de la piel y avanza hasta un look suave y terminado con productos de Estée Lauder.",
    "approach": "Gvantsa abre ante el espejo de su tocador y después muestra el sérum Advanced Night Repair, la base Double Wear y una máscara de pestañas de estuche dorado. Aplica el sérum, presiona la base sobre la piel, la fija con polvos y añade color con una brocha, para terminar con la máscara ante su espejo de mano y una última mirada a la cámara.",
    "outcome": "Una rutina relajada, paso a paso, que mantiene los productos en plano y termina con un acabado natural y cuidado."
  }
}
