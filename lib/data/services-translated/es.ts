import type { ServiceDetail } from '@/lib/data/services'
import type { ServiceUi } from '@/lib/data/service-ui'

// Spanish versions of the five service pages and their fixed labels, served at
// /es/services/<slug>. Translated from lib/data/services.ts. Plain data.

export const ui: ServiceUi = {
  "eyebrow": "Qué hacemos",
  "howWeWork": "Cómo trabajamos",
  "included": "Qué incluye",
  "whoFor": "Para quién es",
  "howRuns": "Cómo se desarrolla una colaboración",
  "specialismTitle": "Pensado para belleza y cuidado de la piel",
  "specialismText": "Nos especializamos en marcas de belleza, cuidado de la piel y estilo de vida, en Estados Unidos y en todo el mundo.",
  "specialismBeauty": "Marketing de influencers de belleza",
  "specialismSkincare": "Marketing de influencers de cuidado de la piel",
  "specialismKBeauty": "Marketing de influencers de K-beauty",
  "specialismUsa": "Marketing de influencers en Estados Unidos",
  "faqEyebrow": "Preguntas frecuentes",
  "faqTitle": "Preguntas frecuentes sobre {service}",
  "relatedGuides": "Guías relacionadas",
  "otherServices": "Explora nuestros otros servicios",
  "ctaTitle": "Construyamos tu próxima campaña",
  "ctaText": "Cuéntanos tus objetivos y daremos forma a la combinación adecuada de creadores, contenido y estrategia en torno a ellos.",
  "ctaPrimary": "Consultas de colaboración",
  "ctaSecondary": "Descubre nuestros proyectos"
}

export const services: ServiceDetail[] = [
  {
    "slug": "influencer-campaigns",
    "title": "Campañas de influencers",
    "icon": "spark",
    "tagline": "Colaboraciones con creadores que detienen el scroll.",
    "summary": "Campañas de influencers de principio a fin en Instagram, TikTok y YouTube: desde la selección de creadores y el briefing hasta los derechos, las aprobaciones y los informes.",
    "seoTitle": "Gestión de campañas de influencers de belleza",
    "seoDescription": "Gestión integral de campañas de influencers para marcas de belleza, cuidado de la piel y estilo de vida: creadores, briefing, derechos e informes.",
    "breakdown": [
      "Cada campaña empieza por el encaje. Cruzamos tu audiencia, tu categoría y tus objetivos con nuestra red de creadores y preseleccionamos las voces cuyas comunidades coinciden de verdad con tu cliente: el alcance importa, pero es la afinidad la que convierte.",
      "A partir de ahí gestionamos la campaña internamente: briefings creativos que dejan espacio a la voz propia del creador, plazos y calendarios de entregables, aprobaciones de contenido, derechos de uso y cumplimiento de las normas de cada plataforma, todo a cargo de un solo equipo.",
      "Cuando el contenido se publica, le hacemos seguimiento (entrega, interacción, tráfico y sentimiento) e informamos en un lenguaje claro, con aprendizajes que afinan la siguiente oleada."
    ],
    "deliverables": [
      "Estrategia de campaña y dirección creativa",
      "Preselección, evaluación y contacto con creadores",
      "Contratación y derechos de uso",
      "Briefing, aprobaciones y control de calidad",
      "Informes de rendimiento e insights"
    ],
    "idealFor": [
      "Lanzamientos de producto que necesitan voces de creadores creíbles en las primeras semanas, no solo alcance de pago.",
      "Marcas que entran en un nuevo mercado, como Estados Unidos, el Golfo o Asia, y necesitan creadores locales que ya hablan a esa audiencia.",
      "Equipos sin capacidad para hacer el briefing, contratar, dar seguimiento e informar sobre decenas de creadores a la vez."
    ],
    "process": [
      {
        "title": "Briefing y objetivos",
        "description": "Acordamos el producto, la audiencia, los mercados, el presupuesto y el único resultado por el que se juzga la campaña: notoriedad, prueba de producto o ventas."
      },
      {
        "title": "Preselección de creadores",
        "description": "Recibes una preselección evaluada con la afinidad de audiencia, la calidad de la interacción y el estilo de contenido de cada creador, y apruebas la selección final."
      },
      {
        "title": "Contenido y publicación",
        "description": "Hacemos el briefing, revisamos los borradores según tus afirmaciones y directrices, aseguramos los derechos de uso y la divulgación publicitaria, y programamos las publicaciones en las distintas plataformas."
      },
      {
        "title": "Informe y aprendizaje",
        "description": "Un informe en lenguaje claro cubre alcance, interacción, clics y conversiones, con lo que conviene repetir, eliminar o escalar en la siguiente oleada."
      }
    ],
    "faqs": [
      {
        "question": "¿Cómo eligen a los influencers para una campaña?",
        "answer": "Partimos de tu cliente, no del número de seguidores. Cada creador se evalúa por los datos demográficos y la ubicación de su audiencia, la calidad de la interacción, el estilo de contenido, la seguridad para la marca y sus colaboraciones anteriores, y tú apruebas la selección final antes de contratar a nadie."
      },
      {
        "question": "¿En qué plataformas realizan campañas de influencers?",
        "answer": "Instagram, TikTok y YouTube. TikTok suele liderar en descubrimiento y tendencias, Instagram en lanzamientos cuidados, Reels y Stories, y YouTube en reseñas y tutoriales en profundidad. La mayoría de las campañas combinan dos o tres plataformas, ponderadas según dónde pasa el tiempo tu audiencia y lo que la campaña necesita conseguir."
      },
      {
        "question": "¿Cuánto cuesta una campaña de influencers?",
        "answer": "Depende de las plataformas, los niveles de creadores, el número de creadores, los entregables y los derechos de uso. En lugar de dar una tarifa fija, dimensionamos la campaña según tu objetivo y tu presupuesto y mostramos las alternativas, por ejemplo más creadores micro para la prueba de producto frente a menos creadores de mayor tamaño para la notoriedad."
      },
      {
        "question": "¿Se encargan de los contratos, los derechos de uso y la divulgación publicitaria?",
        "answer": "Sí. Negociamos y gestionamos los contratos con los creadores, los derechos de uso y de whitelisting, las aprobaciones de contenido y la divulgación publicitaria conforme a las normas de cada plataforma, como #ad y las etiquetas de colaboración pagada, para que la campaña cumpla la normativa en todos los mercados en los que se realiza."
      },
      {
        "question": "¿Cómo miden los resultados de una campaña de influencers?",
        "answer": "Acordamos los KPI antes del lanzamiento y les hacemos seguimiento durante toda la campaña: alcance, tasa de interacción, clics en enlaces, canjes de códigos y conversiones cuando el seguimiento lo permite. El informe final explica qué ha aportado cada creador y cada formato, para que la siguiente campaña parta de la evidencia y no de suposiciones."
      }
    ],
    "image": "/images/services/final/01-albina.jpg",
    "imageAlt": "Albina en un selfie en primer plano, con el pelo largo con mechas y una iluminación suave y equilibrada."
  },
  {
    "slug": "talent-management",
    "title": "Representación integral de talentos",
    "icon": "person",
    "tagline": "Carreras construidas a largo plazo.",
    "summary": "Representación completa para creadores: colaboraciones remuneradas, alianzas exclusivas, negociación y crecimiento profesional a largo plazo, a cargo de un solo equipo.",
    "seoTitle": "Agencia de representación de influencers",
    "seoDescription": "Representación integral para creadores: acuerdos con marcas, negociación, contratos, facturación y plan de carrera a largo plazo, a cargo de un solo equipo.",
    "breakdown": [
      "Representamos un roster reducido y cuidado, no un directorio. Eso significa que cada talento recibe una gestión real: posicionamiento, estrategia de tarifas y una cartera de colaboraciones acorde con la dirección que toman su contenido y su audiencia.",
      "En el día a día gestionamos las propuestas entrantes y salientes, negociamos condiciones y usos, llevamos los contratos y la facturación, y protegemos el tiempo del creador para que pueda centrarse en hacer un gran contenido.",
      "A largo plazo planificamos carreras: nuevas plataformas, nuevos formatos y el tipo de relaciones con marcas que se renuevan año tras año en lugar de terminar en una sola publicación."
    ],
    "deliverables": [
      "Contacto con marcas y gestión de propuestas entrantes",
      "Negociación, contratación y facturación",
      "Estrategia de contenido y de publicación",
      "Crecimiento de audiencia y desarrollo de tarifas",
      "Plan de carrera a largo plazo"
    ],
    "idealFor": [
      "Creadores cuya bandeja de entrada los ha desbordado y que quieren que cada consulta de una marca se atienda, se negocie y tenga el seguimiento adecuado.",
      "Creadores de belleza, cuidado de la piel, moda, estilo de vida y gaming listos para pasar de publicaciones puntuales a colaboraciones de marca a largo plazo.",
      "Marcas que quieren trabajar directamente con nuestro roster, con un único punto de contacto para briefings, contratos y aprobaciones."
    ],
    "process": [
      {
        "title": "Presentación",
        "description": "Hablamos de tu contenido, tu audiencia, tus objetivos y las marcas con las que quieres trabajar, y acordamos si somos la opción adecuada."
      },
      {
        "title": "Posicionamiento y tarifas",
        "description": "Definimos tu posicionamiento, tu media kit y tu estrategia de tarifas para que cada propuesta y cada negociación partan de un valor claro."
      },
      {
        "title": "Flujo de acuerdos",
        "description": "Presentamos propuestas a marcas, atendemos las consultas entrantes, negociamos condiciones y usos, y gestionamos contratos, facturación y plazos."
      },
      {
        "title": "Plan de carrera",
        "description": "En revisiones periódicas analizamos qué ha funcionado, qué colaboraciones renovar y hacia qué plataformas o formatos crecer a continuación."
      }
    ],
    "faqs": [
      {
        "question": "¿Qué hace un mánager de talento de influencers?",
        "answer": "Un mánager de talento lleva la parte de negocio de la carrera de un creador: busca y propone colaboraciones con marcas, negocia honorarios y derechos de uso, gestiona contratos y facturas, protege al creador de condiciones desfavorables y planifica el crecimiento a largo plazo, para que el creador pueda centrarse en crear contenido."
      },
      {
        "question": "¿A qué creadores representa CA Agency?",
        "answer": "Representamos un roster reducido y cuidado de creadores de belleza, cuidado de la piel, moda, estilo de vida, gaming y entretenimiento en Instagram, TikTok, YouTube y Twitch. Puedes ver el roster actual en nuestra página de talentos, y cada perfil enlaza con los canales del propio creador."
      },
      {
        "question": "¿Cómo contratan las marcas a un creador de su roster?",
        "answer": "Envíanos tu briefing, tu presupuesto y tus fechas a través del formulario de contacto. Confirmamos la disponibilidad y el encaje, proponemos los entregables y el uso, y gestionamos el contrato, las aprobaciones de contenido y la facturación para que la marca tenga un único punto de contacto."
      },
      {
        "question": "¿Negocian los derechos de uso y la exclusividad?",
        "answer": "Sí. El periodo de uso, la amplificación de pago y el whitelisting, las ventanas de exclusividad y las restricciones por categoría afectan a los honorarios de un creador y a sus acuerdos futuros, por eso negociamos cada punto de forma explícita y nos aseguramos de que quede por escrito en el contrato."
      },
      {
        "question": "¿Puede un creador unirse al roster de CA Agency?",
        "answer": "Mantenemos un roster reducido para que cada creador reciba una gestión real. Si creas contenido de belleza, cuidado de la piel, moda, estilo de vida o gaming y buscas representación, preséntate a través del formulario de contacto con enlaces a tus canales."
      }
    ],
    "image": "/images/services/final/02-anton.jpg",
    "imageAlt": "Anton con un albornoz blanco, parches bajo los ojos y la piel luminosa."
  },
  {
    "slug": "content-production",
    "title": "Creación y producción de contenido",
    "icon": "video",
    "tagline": "Contenido que detiene el scroll, de principio a fin.",
    "summary": "Vídeo corto y fotografía de marca, ideados, rodados y editados internamente para captar a la audiencia y elevar la visibilidad de la marca en todas las plataformas.",
    "seoTitle": "Contenido de creadores para marcas de belleza",
    "seoDescription": "Vídeo corto y fotografía para marcas de belleza y cuidado de la piel: ganchos, guiones, producción con creadores y ediciones listas para cada plataforma.",
    "breakdown": [
      "Un buen vídeo corto parece espontáneo porque el trabajo de reflexión se hizo antes de encender la cámara. Ideamos ganchos, guiones y listas de planos pensados para cómo ve el contenido la gente en realidad: el primer segundo se gana los diez siguientes.",
      "La producción se realiza con nuestros creadores y socios de producción, en exteriores o en estudio, para que el contenido resulte nativo en el feed y no parezca un anuncio insertado en él.",
      "Cada máster se entrega con la edición terminada y listo para cada plataforma: versiones cortas, versiones por formato, subtítulos y portadas, con los derechos liberados para el uso que contrataste."
    ],
    "deliverables": [
      "Conceptos creativos, ganchos y guiones",
      "Producción en exteriores o en estudio",
      "Ediciones, versiones cortas y versiones por relación de aspecto",
      "Subtítulos, portadas y llamadas a la acción",
      "Archivos máster listos para su uso"
    ],
    "idealFor": [
      "Marcas que necesitan un suministro constante de vídeo corto para redes sociales orgánicas, anuncios de pago y páginas de producto.",
      "Lanzamientos que necesitan planos de textura, demostraciones de aplicación y contenido de rutina que muestren el producto funcionando en piel real.",
      "Equipos cuyo contenido actual parece publicidad y rinde por debajo de lo esperado en feeds pensados para creadores."
    ],
    "process": [
      {
        "title": "Concepto",
        "description": "Definimos los ganchos, los mensajes clave, los formatos y la lista de planos para cada plataforma, a partir del producto y de cómo ve el contenido tu audiencia."
      },
      {
        "title": "Casting",
        "description": "Asignamos creadores o talento al concepto y al cliente, para que la persona ante la cámara se parezca a la audiencia y hable como ella."
      },
      {
        "title": "Producción",
        "description": "Los rodajes se realizan en exteriores o en estudio con nuestros creadores y socios de producción, y tu equipo revisa los fotogramas clave durante el proceso."
      },
      {
        "title": "Edición y entrega",
        "description": "Recibes másteres con la edición terminada, versiones cortas y versiones por formato con subtítulos y portadas, con los derechos liberados para el uso que contrataste."
      }
    ],
    "faqs": [
      {
        "question": "¿Qué tipo de contenido producen?",
        "answer": "Sobre todo vídeo corto vertical para TikTok, Instagram Reels y YouTube Shorts, además de fotografía y ediciones más largas cuando hace falta. En belleza y cuidado de la piel eso suele significar pruebas de aplicación y de duración, rutinas paso a paso, primeros planos de textura, formatos «get ready with me» y vídeos explicativos de producto."
      },
      {
        "question": "¿Es mejor el contenido de creadores que el contenido de estudio para los anuncios?",
        "answer": "Para los anuncios en redes sociales a menudo lo es, porque el vídeo con estilo de creador resulta nativo en el feed y mantiene la atención durante más tiempo. El trabajo de estudio sigue siendo importante para las piezas principales. Normalmente combinamos ambos: un rodaje controlado para las imágenes clave y contenido de creadores para el volumen y las pruebas."
      },
      {
        "question": "¿De quién es el contenido y cómo podemos usarlo?",
        "answer": "El uso se acuerda antes de la producción: en qué canales, en qué mercados, durante cuánto tiempo y si puede emitirse como anuncio de pago. Los másteres se entregan con los derechos liberados exactamente para ese uso, y más adelante pueden negociarse ampliaciones si una pieza funciona bien."
      },
      {
        "question": "¿Cuántas versiones recibimos?",
        "answer": "Cada concepto se entrega como un máster más las versiones cortas y las relaciones de aspecto que necesita el plan de medios, normalmente 9:16 para Reels, TikTok y Shorts, además de cuadrado o 4:5 para feed y anuncios, con subtítulos y portadas. El paquete exacto se fija en el alcance del proyecto para que no haya sorpresas."
      },
      {
        "question": "¿Cuánto tarda la producción de contenido?",
        "answer": "Depende del número de conceptos, de cuánto casting implique y de si el rodaje se hace con creadores existentes o con una producción específica. Acordamos el calendario en el alcance del proyecto y planificamos hacia atrás desde tu fecha de lanzamiento o de medios, de modo que la aprobación del concepto, el rodaje, las ediciones y la entrega tengan cada uno un hueco fijo."
      }
    ],
    "image": "/images/services/final/03a-dariia.jpg",
    "imageAlt": "Dariia con un look de maquillaje otoñal terminado en un retrato de tres cuartos en primer plano."
  },
  {
    "slug": "performance-marketing",
    "title": "Marketing de resultados",
    "icon": "chart",
    "tagline": "Contenido de creadores, medido como un medio.",
    "summary": "Amplificación basada en datos del contenido de creadores: paid social, pruebas creativas y seguimiento de conversiones, con un ROI medible desde la notoriedad hasta la venta.",
    "seoTitle": "Marketing de resultados con influencers",
    "seoDescription": "Convierte el contenido de creadores en paid social que vende: anuncios de colaboración, Spark Ads, pruebas creativas, conversiones y optimización semanal.",
    "breakdown": [
      "El alcance orgánico empieza la historia; la distribución de pago la termina. Amplificamos el contenido de creadores que ya ha demostrado su valor y lo emitimos como anuncios de contenido de marca y de tipo Spark, con la segmentación que la publicación orgánica nunca tuvo.",
      "Las creatividades se prueban como un medio: ganchos, aperturas y formatos comparados cara a cara, con el presupuesto desplazado hacia las variantes que retienen la atención y convierten.",
      "El seguimiento se configura antes de invertir el primer dírham (píxeles, eventos y UTM), para que los informes hablen de resultados: tráfico, carritos y retorno de la inversión, no solo de impresiones."
    ],
    "deliverables": [
      "Amplificación de pago del contenido de creadores",
      "Matrices de pruebas creativas",
      "Arquitectura de audiencias y de embudo",
      "Seguimiento de conversiones y atribución",
      "Optimización e informes semanales"
    ],
    "idealFor": [
      "Marcas que ya realizan campañas de influencers y quieren que las publicaciones con mejor rendimiento lleguen mucho más allá de los seguidores del creador.",
      "Marcas de comercio electrónico y DTC que necesitan que el contenido de creadores genere tráfico, carritos y ventas medibles.",
      "Equipos que quieren pruebas creativas y optimización semanal en lugar de una sola publicación promocionada."
    ],
    "process": [
      {
        "title": "Configuración del seguimiento",
        "description": "Los píxeles, los eventos de conversión y los UTM se revisan y se corrigen antes del lanzamiento para que cada resultado pueda atribuirse."
      },
      {
        "title": "Selección de creatividades",
        "description": "Elegimos las publicaciones de creadores con las señales orgánicas más fuertes y aseguramos los derechos para emitirlas como anuncios."
      },
      {
        "title": "Prueba y lanzamiento",
        "description": "Ganchos, aperturas y formatos compiten cara a cara en audiencias definidas, con reglas claras sobre cuándo gana una variante."
      },
      {
        "title": "Optimización e informes",
        "description": "El presupuesto se traslada cada semana a las variantes ganadoras, y los informes cubren tráfico, carritos, ventas y retorno de la inversión publicitaria."
      }
    ],
    "faqs": [
      {
        "question": "¿Qué son los anuncios de colaboración y los Spark Ads?",
        "answer": "Permiten a una marca emitir la publicación de un creador como anuncio de pago desde la cuenta del propio creador: anuncios de colaboración en Instagram y Facebook, Spark Ads en TikTok. Como el anuncio tiene el aspecto del contenido del creador, suele generar más confianza y atención que un anuncio de marca estándar."
      },
      {
        "question": "¿Por qué amplificar el contenido de influencers con medios de pago?",
        "answer": "Las publicaciones orgánicas llegan a una parte de los seguidores de un creador durante unos días. La amplificación de pago pone el contenido con mejor rendimiento ante audiencias nuevas y segmentadas mientras siga funcionando, y hace que los resultados sean medibles hasta el nivel de clics, carritos y ventas."
      },
      {
        "question": "¿Cómo hacen el seguimiento de las ventas generadas por el contenido de influencers?",
        "answer": "Mediante los píxeles y los eventos de conversión de las plataformas, enlaces etiquetados con UTM, códigos de descuento y los informes propios de las plataformas publicitarias. Lo configuramos antes del lanzamiento, porque los resultados que no se miden desde el primer día no pueden atribuirse después."
      },
      {
        "question": "¿Con qué rapidez podemos ver resultados?",
        "answer": "Las primeras señales, como la tasa de gancho, el porcentaje de clics y el coste por clic, aparecen en cuestión de días. Las decisiones basadas en conversiones necesitan datos suficientes para ser fiables, por eso normalmente evaluamos una creatividad tras su primer ciclo completo de pruebas y a partir de ahí optimizamos cada semana."
      },
      {
        "question": "¿Qué presupuesto necesitamos para la amplificación de pago?",
        "answer": "El suficiente para que cada creatividad y cada audiencia reúnan datos fiables antes de tomar decisiones. En lugar de un mínimo fijo, dimensionamos el presupuesto según el número de creatividades y audiencias de la prueba y después trasladamos la inversión a las ganadoras cuando están claras, para que el dinero no se reparta tanto que no se aprenda nada."
      }
    ],
    "image": "/images/services/final/04-melly.jpg",
    "imageAlt": "Melly mirando a la cámara con un look de maquillaje de ojos ahumados terminado."
  },
  {
    "slug": "brand-consultancy",
    "title": "Gestión y consultoría de marketing de marca",
    "icon": "compass",
    "tagline": "Acompañamiento estratégico, del posicionamiento al lanzamiento.",
    "summary": "Acompañamiento estratégico de marketing para marcas de belleza, cuidado de la piel y estilo de vida: posicionamiento, plan de lanzamiento, entrada en nuevos mercados y gestión de marca continua.",
    "seoTitle": "Consultoría de marketing para marcas de belleza",
    "seoDescription": "Consultoría para marcas de belleza, cuidado de la piel y estilo de vida: auditorías, posicionamiento, lanzamiento, nuevos mercados y programas de influencers.",
    "breakdown": [
      "Algunas marcas necesitan una campaña; otras necesitan una brújula. Nuestro trabajo de consultoría empieza con una auditoría honesta de dónde se sitúa la marca (posicionamiento, canales, contenido y comunidad) y hacia dónde se mueve la categoría.",
      "Sobre esa base construimos el plan: mensajes y dirección creativa, hojas de ruta de lanzamiento y go-to-market, estrategia de entrada en nuevas regiones y el diseño del programa de influencers que lo sostiene.",
      "Para las marcas que quieren un socio y no un proyecto, ofrecemos gestión continua: un equipo estable que planifica, ejecuta e itera trimestre tras trimestre."
    ],
    "deliverables": [
      "Auditorías de marca, canales y contenido",
      "Posicionamiento y mensajes",
      "Planificación de lanzamiento y go-to-market",
      "Diseño de programas de influencers",
      "Asesoría y gestión continuas"
    ],
    "idealFor": [
      "Marcas de belleza y cuidado de la piel que preparan un lanzamiento, un relanzamiento o una nueva línea de producto y necesitan una historia clara antes de empezar a invertir.",
      "Marcas que entran en una nueva región, como Estados Unidos, el Golfo o Corea, y necesitan un plan de entrada en el mercado y de creadores para esa audiencia.",
      "Equipos de marketing que quieren apoyo estratégico sénior y un socio permanente sin crear un equipo interno completo."
    ],
    "process": [
      {
        "title": "Auditoría",
        "description": "Revisamos tu posicionamiento, canales, contenido, comunidad y competidores para ver dónde está la marca y hacia dónde se mueve la categoría."
      },
      {
        "title": "Estrategia",
        "description": "Definimos el posicionamiento, los mensajes, las audiencias y los mercados prioritarios, y el papel que desempeñan los creadores y el contenido para llegar a ellos."
      },
      {
        "title": "Hoja de ruta",
        "description": "Recibes un plan de lanzamiento o de go-to-market con plazos, canales, presupuestos y los KPI con los que se mide cada fase."
      },
      {
        "title": "Ejecución y revisión",
        "description": "Ejecutamos el plan contigo o junto a tu equipo, revisamos los resultados cada trimestre y ajustamos la hoja de ruta."
      }
    ],
    "faqs": [
      {
        "question": "¿Qué incluye un proyecto de consultoría de marketing de marca?",
        "answer": "Normalmente empieza con una auditoría del posicionamiento, los canales, el contenido y los competidores, seguida de una estrategia y una hoja de ruta que cubren mensajes, mercados prioritarios, calendario de lanzamiento, presupuestos y KPI. Las marcas pueden quedarse en el plan o seguir con nosotros para gestionar la ejecución."
      },
      {
        "question": "¿Ayudan a las marcas a entrar en los mercados de Estados Unidos o del Golfo?",
        "answer": "Sí. La entrada en nuevos mercados es una parte central de nuestro trabajo de consultoría. Analizamos en qué se diferencian la categoría, las plataformas y el panorama de creadores en el mercado de destino y construimos un plan de lanzamiento con creadores locales, afirmaciones y divulgación publicitaria conformes a la normativa y la combinación de canales adecuada para esa audiencia."
      },
      {
        "question": "¿Pueden diseñar nuestro programa de influencers?",
        "answer": "Sí. Diseñamos programas permanentes y de lanzamiento: qué niveles de creadores utilizar, cuántos creadores, qué plataformas, envío de producto frente a colaboración pagada, derechos sobre el contenido y cómo se mide el rendimiento, para que el programa se ajuste a tu presupuesto y pueda escalar."
      },
      {
        "question": "¿Es un proyecto puntual o una colaboración continua?",
        "answer": "Ambas opciones son posibles. Algunas marcas necesitan una estrategia y un plan de lanzamiento; otras quieren un equipo estable que planifique, ejecute e itere cada trimestre. Acordamos el modelo y el alcance desde el principio."
      },
      {
        "question": "¿Con quién trabajaremos en el día a día?",
        "answer": "Con un solo equipo que cubre la estrategia, las colaboraciones con creadores y el contenido, para que el plan y su ejecución se mantengan unidos. Tendrás reuniones de seguimiento periódicas e informes sobre los KPI acordados en la hoja de ruta."
      }
    ],
    "image": "/images/services/final/05-rebecca.jpg",
    "imageAlt": "Rebecca en el evento de LolaVie y Charlotte Tilbury."
  }
]
