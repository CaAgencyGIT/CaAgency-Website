import type { TranslatedLocationPage } from '@/lib/site-content/location-pages-translated'

// Spanish versions of the beauty, skincare and K-beauty category pages, served at
// /es/<path>. Translated from the English defaults; not editable in the
// admin. Plain data: keys are the page keys from lib/data/locations.ts.

export const spanishCategoryPages: Record<string, TranslatedLocationPage> = {
  "beautyAgency": {
    "path": "/beauty-influencer-marketing-agency",
    "title": "Agencia de marketing de influencers de belleza | CA Agency",
    "description": "CA Agency conecta marcas de maquillaje, cuidado de la piel, cuidado capilar y retail de belleza con creadores que muestran el producto en piel real.",
    "ogImage": "/images/site/og-cover-v2.jpg",
    "content": {
      "hero": {
        "title": "Agencia de marketing\nde influencers de belleza",
        "subtitle": "CA Agency es una agencia de marketing de influencers de belleza que conecta marcas de maquillaje, cuidado de la piel, cuidado capilar y retail de belleza con creadores que muestran cómo funcionan los productos en piel real y con luz real, en Estados Unidos y en mercados globales.",
        "primaryButtonLabel": "Inicia tu campaña",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Ver casos de éxito",
        "secondaryButtonHref": "/case-studies"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "Campañas realizadas"
        },
        {
          "value": "150+",
          "label": "Marcas globales"
        },
        {
          "value": "18M+",
          "label": "Seguidores en conjunto"
        },
        {
          "value": "IG · TikTok · YT",
          "label": "Plataformas"
        }
      ],
      "marquee": {
        "items": [
          "Fenty Beauty",
          "YSL Beauty",
          "NARS",
          "Kylie Cosmetics",
          "Sephora",
          "Kiko Milano",
          "Juvia's Place",
          "Revolve Beauty",
          "Gisou",
          "Laneige"
        ]
      },
      "caseStudies": {
        "title": "Campañas de belleza que hemos realizado",
        "subtitle": "Prestigio, color, cuidado capilar y retail de belleza: una muestra de las marcas que hemos unido con los creadores adecuados.",
        "items": [
          {
            "src": "/videos/work/melly-fenty-web-v1.mp4",
            "brand": "Fenty Beauty",
            "name": "Base de maquillaje en piel real",
            "href": "/case-studies/fenty-beauty-campaign"
          },
          {
            "src": "/videos/work/dariia-ysl-web-v1.mp4",
            "brand": "YSL Beauty",
            "name": "Belleza de lujo con el estilo del creador",
            "href": "/case-studies/ysl-beauty-campaign"
          },
          {
            "src": "/videos/work/fashionfreakk-nars.mp4",
            "brand": "NARS",
            "name": "Belleza de prestigio",
            "href": "/case-studies/nars-campaign"
          },
          {
            "src": "/videos/work/kylie-cosmetics-web-v1.mp4",
            "brand": "Kylie Cosmetics",
            "name": "Cosmética de color",
            "href": "/case-studies/kylie-cosmetics-campaign"
          },
          {
            "src": "/videos/work/albina-sephora-web-v1.mp4",
            "brand": "Sephora",
            "name": "Hauls y favoritos de retail de belleza",
            "href": "/case-studies/sephora-campaign"
          },
          {
            "src": "/videos/work/beatrix-gisou-web-v1.mp4",
            "brand": "Gisou",
            "name": "Textura y acabado en cuidado capilar",
            "href": "/case-studies/gisou-campaign"
          }
        ]
      },
      "process": {
        "title": "Cómo gestionamos una campaña de influencers de belleza",
        "subtitle": "Un solo equipo responsable, desde el primer briefing hasta el informe final.",
        "steps": [
          {
            "title": "Briefing y estrategia",
            "description": "Definimos el producto estrella, las afirmaciones que puedes hacer, los tonos o tipos de piel que hay que mostrar, tus mercados y el resultado que importa: notoriedad, prueba de producto o ventas."
          },
          {
            "title": "Selección de creadores",
            "description": "Preseleccionamos creadores de belleza por afinidad de audiencia, tipo de piel y gama de tonos, calidad de la interacción y oficio en el contenido, no solo por número de seguidores."
          },
          {
            "title": "Contenido y aprobaciones",
            "description": "Aplicación, pruebas de duración, swatches y formatos «get ready with me», gestionados con briefing, aprobaciones, derechos de uso y divulgación publicitaria."
          },
          {
            "title": "Amplificación e informes",
            "description": "El contenido con mejor rendimiento se amplía con anuncios de colaboración y Spark Ads, y de cada campaña se informa en alcance, interacción, clics y conversiones."
          }
        ]
      },
      "intro": {
        "heading": "La agencia de marketing de influencers de belleza construida sobre campañas reales",
        "paragraphs": [
          {
            "text": "La belleza es la categoría en la que más importan los creadores. Antes de comprar, el público quiere ver que una base coincide con un tono de piel real, que un labial aguanta todo el día y que un sérum se absorbe. CA Agency es una agencia de marketing de influencers de belleza que construye exactamente esa prueba: une marcas de maquillaje, cuidado de la piel, cuidado capilar y retail de belleza con creadores capaces de demostrar un producto ante la cámara y hacer que convierta en Instagram, TikTok y YouTube."
          },
          {
            "text": "Nuestro trabajo abarca firmas de prestigio y lujo como YSL Beauty y NARS, marcas de cosmética de color como Fenty Beauty, Kylie Cosmetics, Kiko Milano y Juvia’s Place, retailers de belleza como Sephora y Revolve Beauty, y cuidado capilar de Gisou. Cada briefing es distinto: una casa de lujo necesita un acabado cuidado que siga resultando natural en el feed del creador, mientras que una marca de color necesita que el pigmento, los swatches y la gama de tonos se muestren con honestidad."
          },
          {
            "text": "Para las marcas que se dirigen a Estados Unidos, el mayor mercado de belleza del mundo, combinamos alcance en todo el país con divulgación publicitaria conforme a las normas de la FTC y disciplina en las afirmaciones sobre el producto. Para los lanzamientos globales coordinamos creadores en Norteamérica, Europa, Oriente Medio y Asia, de modo que una misma historia de producto se cuente de forma coherente. Las marcas centradas en el cuidado de la piel pueden profundizar con nuestros programas de marketing de influencers de cuidado de la piel, y las marcas coreanas, con nuestro equipo dedicado a K-beauty."
          }
        ]
      },
      "highlights": {
        "title": "Por qué las marcas de belleza eligen CA Agency",
        "items": [
          {
            "title": "La belleza es nuestro núcleo",
            "description": "La belleza y el cuidado de la piel son nuestro foco principal, por eso el briefing a los creadores lo hacen personas que conocen el acabado, la duración, la gama de tonos y las afirmaciones que importan."
          },
          {
            "title": "Pruebas antes que pulido",
            "description": "Pedimos en el briefing una demostración honesta (swatches, pruebas de duración, antes y después en piel real) porque eso es lo que genera confianza e impulsa la prueba de producto."
          },
          {
            "title": "Una red que pone el talento primero",
            "description": "Gestionamos nuestro propio roster de creadores de belleza y trabajamos con una red más amplia, para que cuentes con creadores que de verdad usan y aman la categoría."
          },
          {
            "title": "Medido como un medio",
            "description": "De cada campaña se informa en alcance, interacción, clics y conversiones, y el contenido puede amplificarse con anuncios de colaboración de pago."
          }
        ]
      },
      "talents": {
        "title": "Creadores de belleza de nuestro roster",
        "buttonLabel": "Ver todos los talentos",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Categorías de belleza en las que nos especializamos",
        "items": [
          {
            "icon": "💄",
            "title": "Maquillaje y cosmética de color",
            "description": "Lanzamientos de bases, labios, ojos y rostro mostrados con swatches, aplicación y uso real."
          },
          {
            "icon": "💧",
            "title": "Cuidado de la piel",
            "description": "Rutinas, activos y planos de textura que explican qué hace un producto y para quién es."
          },
          {
            "icon": "✨",
            "title": "Cuidado capilar y retail de belleza",
            "description": "Contenido de cuidado capilar centrado en el acabado y campañas de retail tipo haul que llevan tráfico a la tienda y a la web."
          }
        ]
      },
      "faq": {
        "title": "Preguntas frecuentes sobre marketing de influencers de belleza",
        "items": [
          {
            "question": "¿Qué hace una agencia de marketing de influencers de belleza?",
            "answer": "Planificamos y gestionamos de principio a fin campañas con creadores para marcas de belleza: estrategia, selección de creadores, briefing, contratos, aprobaciones de contenido, derechos de uso, divulgación publicitaria, amplificación de pago e informes. Cuentas con un solo equipo responsable en lugar de gestionar tú mismo a decenas de creadores."
          },
          {
            "question": "¿Cuánto cuesta el marketing de influencers de belleza?",
            "answer": "El coste depende de las plataformas, los niveles de creadores, el número de creadores, los entregables y los derechos de uso. En lugar de dar una tarifa fija, dimensionamos cada campaña según tus objetivos y tu presupuesto y te mostramos qué combinación de creadores ofrece el mejor retorno. Cuéntanos tu presupuesto y tus objetivos y construiremos el plan a partir de ellos."
          },
          {
            "question": "¿Qué plataformas funcionan mejor para las marcas de belleza?",
            "answer": "TikTok impulsa el descubrimiento y las tendencias, los Reels y las Stories de Instagram dan cabida a rutinas y lanzamientos cuidados, y YouTube es la más fuerte para tutoriales y reseñas en profundidad. La mayoría de las campañas de belleza usan una combinación, ponderada según tu audiencia y tu objetivo."
          },
          {
            "question": "¿Trabajan con marcas de belleza en Estados Unidos?",
            "answer": "Sí. Estados Unidos es nuestro mercado principal y realizamos campañas en todo el país con creadores estadounidenses, incluida la divulgación publicitaria conforme a las normas de la FTC, junto con campañas en Europa, Oriente Medio y Asia."
          },
          {
            "question": "¿Pueden trabajar tanto con marcas de belleza emergentes como con firmas globales?",
            "answer": "Sí. Trabajamos con todo tipo de marcas, desde nuevas firmas independientes que construyen su primer programa de creadores hasta casas globales que lanzan nuevos productos, y adaptamos la combinación de creadores (micro, de nivel medio y macro) a la etapa de la marca."
          }
        ]
      },
      "cta": {
        "title": "Lanza tu campaña de belleza",
        "description": "Cuéntanos tu producto, tu mercado y tus objetivos, y te conectaremos con creadores de belleza capaces de venderlo.",
        "buttonLabel": "Contáctanos",
        "buttonHref": "/contact"
      }
    }
  },
  "skincareAgency": {
    "path": "/skincare-influencer-marketing-agency",
    "title": "Agencia de influencers de cuidado de la piel | CA Agency",
    "description": "CA Agency ayuda a las marcas de cuidado de la piel a convertir ingredientes, texturas y rutinas en contenido de creadores que genera confianza.",
    "ogImage": "/images/site/og-cover-v2.jpg",
    "content": {
      "hero": {
        "title": "Agencia de marketing de influencers\nde cuidado de la piel",
        "subtitle": "CA Agency es una agencia de marketing de influencers de cuidado de la piel que ayuda a las marcas a convertir ingredientes, texturas y rutinas en contenido de creadores que genera confianza e impulsa la prueba de producto en Estados Unidos y en todo el mundo.",
        "primaryButtonLabel": "Inicia tu campaña",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Ver casos de éxito",
        "secondaryButtonHref": "/case-studies"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "Campañas realizadas"
        },
        {
          "value": "150+",
          "label": "Marcas globales"
        },
        {
          "value": "18M+",
          "label": "Seguidores en conjunto"
        },
        {
          "value": "IG · TikTok · YT",
          "label": "Plataformas"
        }
      ],
      "marquee": {
        "items": [
          "DELERE",
          "Purito",
          "Anua",
          "Mixsoon",
          "Haruharu Wonder",
          "Medicube",
          "Laneige",
          "YesStyle"
        ]
      },
      "caseStudies": {
        "title": "Campañas de cuidado de la piel que hemos realizado",
        "subtitle": "Contenido de creadores para marcas de cuidado de la piel, con la rutina como hilo conductor y el ingrediente en primer plano.",
        "items": [
          {
            "src": "/videos/work/saranda-delere-web-v1.mp4",
            "brand": "DELERE",
            "name": "Cuidado de la piel centrado en la rutina",
            "href": "/case-studies/delere-campaign"
          },
          {
            "src": "/videos/work/aiym-purito-web-v1.mp4",
            "brand": "Purito",
            "name": "Cuidado limpio para piel sensible",
            "href": "/case-studies/purito-campaign"
          },
          {
            "src": "/videos/work/anton-anua-web-v1.mp4",
            "brand": "Anua",
            "name": "Rutina de cuidado de la piel masculina",
            "href": "/case-studies/anua-campaign"
          },
          {
            "src": "/videos/work/albina-mixsoon-web-v1.mp4",
            "brand": "Mixsoon",
            "name": "Cuidado de la piel centrado en ingredientes",
            "href": "/case-studies/mixsoon-skincare"
          },
          {
            "src": "/videos/work/rebecca-haruharu-web-v1.mp4",
            "brand": "Haruharu Wonder",
            "name": "Cuidado de la piel fermentado y suave",
            "href": "/case-studies/haruharu-wonder-campaign"
          },
          {
            "src": "/videos/work/medicube.mp4",
            "brand": "Medicube",
            "name": "Cuidado clínico de la piel y dispositivos"
          }
        ]
      },
      "process": {
        "title": "Cómo gestionamos una campaña de influencers de cuidado de la piel",
        "subtitle": "Basada en la divulgación, los resultados honestos y unas afirmaciones conformes a la normativa.",
        "steps": [
          {
            "title": "Afirmaciones y briefing",
            "description": "Partimos de tus ingredientes estrella, las afirmaciones aprobadas y las preocupaciones de la piel a las que te diriges, para que el briefing de cada creador sea preciso y conforme a la normativa desde el primer día."
          },
          {
            "title": "Selección de creadores",
            "description": "Seleccionamos creadores que entienden de cuidado de la piel según su tipo de piel, sus preocupaciones, la afinidad de su audiencia y su credibilidad, para que la persona que explica el producto se parezca de verdad al cliente."
          },
          {
            "title": "Contenido de rutina",
            "description": "Demostraciones de rutina, primeros planos de textura, explicaciones de ingredientes y contenido honesto sobre la evolución, con las aprobaciones, los derechos de uso y la divulgación publicitaria resueltos."
          },
          {
            "title": "Medir y escalar",
            "description": "Informamos sobre alcance, interacción, clics y conversiones, y después escalamos los creadores y formatos que impulsan la prueba de producto."
          }
        ]
      },
      "intro": {
        "heading": "Una agencia de marketing de influencers de cuidado de la piel que habla el idioma de los ingredientes",
        "paragraphs": [
          {
            "text": "El cuidado de la piel se compra por confianza. Antes de incorporar un sérum o un protector solar a su rutina, una persona quiere entender qué contiene, ver la textura y escuchar a alguien con una piel como la suya. CA Agency es una agencia de marketing de influencers de cuidado de la piel que construye esa confianza: une marcas de cuidado de la piel con creadores capaces de explicar los activos con claridad, demostrar una rutina ante la cámara y mostrar resultados honestos a lo largo del tiempo en Instagram, TikTok y YouTube."
          },
          {
            "text": "Hemos realizado campañas de cuidado de la piel para marcas como DELERE, Purito, Anua, Mixsoon, Haruharu Wonder y Medicube, que abarcan lanzamientos centrados en la rutina, posicionamiento limpio y para piel sensible, divulgación con el ingrediente en primer plano y cuidado de la piel masculina. Esa experiencia determina cómo preparamos el briefing: qué demostrar, qué afirmaciones pueden y no pueden hacer los creadores y cómo mostrar la evolución sin prometer de más."
          },
          {
            "text": "La disciplina en las afirmaciones importa sobre todo en Estados Unidos, donde las afirmaciones cosméticas deben mantenerse lejos de las promesas propias de un medicamento y cada publicación patrocinada necesita una divulgación clara conforme a la FTC. Incorporamos ambas cosas en cada briefing y en cada aprobación. Las marcas coreanas y de K-beauty pueden trabajar con nuestro equipo dedicado a K-beauty, y las marcas con una gama de belleza más amplia pueden combinar el cuidado de la piel con el maquillaje y el cuidado capilar mediante nuestros programas de marketing de influencers de belleza."
          }
        ]
      },
      "highlights": {
        "title": "Por qué las marcas de cuidado de la piel trabajan con nosotros",
        "items": [
          {
            "title": "Briefings que entienden de ingredientes",
            "description": "Un equipo que conoce el cuidado de la piel informa a los creadores sobre activos, concentraciones y rutinas, para que la divulgación llegue de forma correcta."
          },
          {
            "title": "Afirmaciones que puedes respaldar",
            "description": "En las aprobaciones se revisa cada afirmación y cada divulgación publicitaria, de modo que el contenido siga siendo persuasivo sin derivar en promesas médicas o exageradas."
          },
          {
            "title": "Selección por preocupación de la piel",
            "description": "Emparejamos los productos con creadores cuyo tipo de piel y preocupaciones coinciden con los de tu cliente: piel con tendencia acneica, sensible, madura o grasa."
          },
          {
            "title": "Resultados antes que ruido",
            "description": "Los planos de textura, las demostraciones de rutina y el contenido honesto sobre la evolución convierten mejor que un unboxing puntual, y los medimos para demostrarlo."
          }
        ]
      },
      "talents": {
        "title": "Creadores que hablan el idioma del cuidado de la piel",
        "buttonLabel": "Ver todos los talentos",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Campañas de cuidado de la piel que realizamos",
        "items": [
          {
            "icon": "🧴",
            "title": "Rutinas y divulgación sobre ingredientes",
            "description": "Contenido centrado en el ingrediente y en la rutina que explica qué hace un producto y para quién es, sin tecnicismos."
          },
          {
            "icon": "🌿",
            "title": "Piel sensible y cuidado masculino",
            "description": "Rutinas suaves, limpias y masculinas asignadas a creadores cuya piel y audiencia encajan con el producto."
          },
          {
            "icon": "🔬",
            "title": "Cuidado clínico de la piel y dispositivos",
            "description": "Dispositivos de uso doméstico y líneas clínicas demostrados con contenido creíble y centrado en resultados."
          }
        ]
      },
      "faq": {
        "title": "Preguntas frecuentes sobre marketing de influencers de cuidado de la piel",
        "items": [
          {
            "question": "¿Cómo encuentran a los influencers de cuidado de la piel adecuados?",
            "answer": "Evaluamos a los creadores por su tipo de piel y sus preocupaciones, los datos demográficos de su audiencia, la calidad de la interacción, el estilo de contenido y la seguridad para la marca. El objetivo es un creador cuya audiencia se parezca a tu cliente y que pueda explicar el producto con credibilidad."
          },
          {
            "question": "¿Cómo gestionan las afirmaciones sobre cuidado de la piel y la divulgación exigida por la FTC?",
            "answer": "Informamos a los creadores de tus afirmaciones aprobadas, revisamos el contenido antes de que se publique y nos aseguramos de que cada publicación patrocinada lleve una divulgación clara, como #ad. En Estados Unidos eso también implica mantener las afirmaciones cosméticas lejos de promesas propias de un medicamento, como tratar o curar afecciones."
          },
          {
            "question": "¿Qué plataformas funcionan mejor para las marcas de cuidado de la piel?",
            "answer": "TikTok es la más fuerte para el descubrimiento y las tendencias de rutinas, Instagram para las rutinas cuidadas y los Reels, y YouTube para las reseñas en profundidad y los resultados a largo plazo. Ponderamos la combinación según tu audiencia y tu objetivo."
          },
          {
            "question": "¿Solo trabajan con marcas coreanas de cuidado de la piel?",
            "answer": "No. Trabajamos con marcas de cuidado de la piel de todos los mercados. Las marcas coreanas y de K-beauty cuentan con un equipo dedicado, y el enfoque divulgativo que popularizó el K-beauty funciona para cualquier marca de cuidado de la piel."
          },
          {
            "question": "¿Cuánto cuesta una campaña de influencers de cuidado de la piel?",
            "answer": "Depende de las plataformas, los niveles de creadores, el número de creadores, los entregables y los derechos de uso. Dimensionamos cada campaña según tus objetivos y tu presupuesto en lugar de dar una tarifa fija, y mostramos qué combinación de creadores ofrece el mejor retorno."
          }
        ]
      },
      "cta": {
        "title": "Lanza tu campaña de cuidado de la piel",
        "description": "Cuéntanos cuál es tu producto estrella y tus objetivos, y te conectaremos con creadores de cuidado de la piel capaces de explicarlo, demostrarlo y venderlo.",
        "buttonLabel": "Contáctanos",
        "buttonHref": "/contact"
      }
    }
  },
  "kBeautySkincare": {
    "path": "/korean-skincare-influencer-marketing",
    "title": "Agencia de marketing de influencers K-beauty | CA Agency",
    "description": "CA Agency conecta marcas coreanas de cuidado de la piel y belleza con creadores que convierten las rutinas en resultados en Instagram, TikTok y YouTube.",
    "ogImage": "/images/site/og/korean-skincare-influencer-marketing-v2.jpg",
    "content": {
      "hero": {
        "title": "Agencia de marketing de influencers\nde cuidado de la piel coreano",
        "subtitle": "CA Agency es una agencia de marketing de influencers de K-beauty que conecta marcas coreanas de cuidado de la piel y belleza con creadores que convierten las rutinas en resultados en Instagram, TikTok y YouTube.",
        "primaryButtonLabel": "Empezar",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Descubre nuestros proyectos",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "K-Beauty",
          "label": "Especialización de nicho"
        },
        {
          "value": "18M+",
          "label": "Alcance de creadores"
        },
        {
          "value": "Global",
          "label": "Mercados de audiencia"
        },
        {
          "value": "IG · TikTok · YT",
          "label": "Plataformas"
        }
      ],
      "marquee": {
        "items": [
          "Medicube",
          "Mixsoon",
          "YesStyle",
          "Laneige",
          "Sumwon Men",
          "Morphe",
          "YSL Beauty",
          "Kylie Cosmetics",
          "NARS",
          "Elemis"
        ]
      },
      "caseStudies": {
        "title": "Campañas recientes de K-beauty",
        "subtitle": "Una muestra de las marcas coreanas de cuidado de la piel y belleza que hemos puesto ante los creadores adecuados.",
        "items": [
          {
            "src": "/videos/work/medicube.mp4",
            "brand": "Medicube",
            "name": "Cuidado clínico de la piel y dispositivos de belleza"
          },
          {
            "src": "/videos/work/albina-mixsoon-web-v1.mp4",
            "brand": "Mixsoon",
            "name": "Cuidado de la piel coreano centrado en ingredientes"
          },
          {
            "src": "/videos/work/georgii-yesstyle-web-v1.mp4",
            "brand": "YesStyle",
            "name": "Retail y descubrimiento de K-beauty"
          },
          {
            "image": "/images/work/work-laneige-package.webp",
            "brand": "Laneige",
            "name": "Cuidado de la piel coreano de prestigio"
          },
          {
            "image": "/images/work/work-sumwonmen-closet.webp",
            "brand": "Sumwon Men",
            "name": "Cuidado masculino coreano"
          }
        ]
      },
      "process": {
        "title": "Cómo gestionamos una campaña de K-beauty",
        "subtitle": "Un proceso claro y repetible, desde el primer briefing hasta el informe final.",
        "steps": [
          {
            "title": "Descubrimiento",
            "description": "Conocemos tu producto, tus afirmaciones principales, tus mercados objetivo y tus metas, y a partir de ahí damos forma al briefing de la campaña."
          },
          {
            "title": "Selección de creadores",
            "description": "Elegimos uno a uno creadores que dominan el cuidado de la piel según la afinidad de su audiencia, la interacción y la calidad del contenido, no solo por número de seguidores."
          },
          {
            "title": "Contenido y aprobaciones",
            "description": "Demostraciones de rutina, planos de textura y un relato honesto del antes y el después, gestionados con briefing, aprobaciones y derechos de uso."
          },
          {
            "title": "Informe",
            "description": "Cada campaña se mide en alcance, interacción y conversión, para que sepas exactamente qué ha generado tu inversión."
          }
        ]
      },
      "intro": {
        "heading": "La agencia de marketing de influencers de K-beauty en la que confían las marcas",
        "paragraphs": [
          {
            "text": "El cuidado de la piel coreano transformó la belleza global con rutinas por capas, activos clínicos y resultados de piel de cristal (glass skin) que el público quiere ver demostrados, no solo descritos. CA Agency conecta marcas de K-beauty y de cuidado de la piel coreano con creadores capaces de enseñar una rutina ante la cámara y hacer que convierta en Instagram, TikTok y YouTube."
          },
          {
            "text": "Hemos realizado campañas para nombres del cuidado de la piel coreano como Medicube, Mixsoon y YesStyle, junto con una cartera más amplia de marcas de belleza globales. Por eso entendemos cómo el relato divulgativo, la prueba honesta del antes y el después y el momento adecuado respecto a las tendencias impulsan una prueba de producto real en esta categoría."
          },
          {
            "text": "Desde un único lanzamiento estrella hasta un programa de creadores permanente, gestionamos de principio a fin la selección de creadores, el briefing, las aprobaciones de contenido, los derechos de uso y la divulgación publicitaria, e informamos de cada campaña en alcance, interacción y conversión, para que sepas qué ha generado tu inversión."
          }
        ]
      },
      "highlights": {
        "title": "Por qué las marcas eligen nuestra agencia de influencers de K-beauty",
        "items": [
          {
            "title": "Especialistas en la categoría",
            "description": "Trabajamos con creadores que de verdad entienden los activos, las rutinas y las afirmaciones que importan en el cuidado de la piel, en lugar de generalistas que hacen conjeturas sobre los ingredientes."
          },
          {
            "title": "Divulgación que convierte",
            "description": "Las demostraciones de rutina, los planos de textura y un relato honesto del antes y el después convierten la curiosidad en prueba de producto para el cuidado de la piel y la belleza."
          },
          {
            "title": "Lanzamientos al ritmo de las tendencias",
            "description": "El K-beauty avanza rápido, por eso publicamos el contenido en los formatos y tendencias mientras siguen en su punto más alto, no después."
          },
          {
            "title": "Alcance global de K-beauty",
            "description": "Nuestra red de creadores ayuda a las marcas coreanas a viajar, y ayuda a las marcas internacionales a aprovechar la estética K-beauty que al público ya le encanta."
          }
        ]
      },
      "talents": {
        "title": "Creadores que hablan el idioma del cuidado de la piel",
        "buttonLabel": "Ver todos los talentos",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Categorías en las que nos especializamos",
        "items": [
          {
            "icon": "💧",
            "title": "Cuidado de la piel y rutinas",
            "description": "Esencias, sérums y tratamientos explicados mediante rutinas reales ante la cámara."
          },
          {
            "icon": "💄",
            "title": "Maquillaje y color",
            "description": "Bases de efecto piel de cristal, tintes y looks de tendencia que muestran el acabado y la duración."
          },
          {
            "icon": "🔬",
            "title": "Tecnología de belleza y dispositivos",
            "description": "Dispositivos de uso doméstico y herramientas clínicas demostrados con contenido creíble y centrado en resultados."
          }
        ]
      },
      "faq": {
        "title": "Preguntas frecuentes sobre marketing de influencers de K-beauty",
        "items": [
          {
            "question": "¿Solo trabajan con marcas coreanas?",
            "answer": "No. Nos especializamos en la categoría de K-beauty y cuidado de la piel, que incluye marcas coreanas en expansión global y marcas internacionales que quieren el estilo de contenido divulgativo y basado en rutinas que popularizó el K-beauty."
          },
          {
            "question": "¿Qué plataformas funcionan mejor para el cuidado de la piel?",
            "answer": "Instagram, TikTok y YouTube cumplen cada una su papel: TikTok para el descubrimiento y las tendencias, Instagram para las rutinas cuidadas y los Reels, y YouTube para las reseñas y los tutoriales en profundidad. Construimos la combinación adecuada para tus objetivos."
          },
          {
            "question": "¿Pueden gestionar campañas globales en varios mercados?",
            "answer": "Sí. Nuestra red de creadores abarca varios mercados, por lo que podemos adaptar las campañas de K-beauty a distintas regiones manteniendo una historia de marca coherente."
          },
          {
            "question": "¿Qué incluye una campaña típica de K-beauty?",
            "answer": "Selección de creadores, briefing, supervisión de la producción de contenido, aprobaciones, derechos de uso, divulgación publicitaria e informes en alcance, interacción y conversiones."
          }
        ]
      },
      "cta": {
        "title": "Lanza tu campaña de K-beauty",
        "description": "Pon tu marca coreana de cuidado de la piel o de belleza ante creadores capaces de vender la rutina. Cuéntanos tus objetivos y construiremos el plan.",
        "buttonLabel": "Contáctanos",
        "buttonHref": "/contact"
      }
    }
  }
}
