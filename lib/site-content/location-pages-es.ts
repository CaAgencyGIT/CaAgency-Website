import type { LocationLabels } from '@/lib/site-content/location-pages'
import type { TranslatedLocationPage } from '@/lib/site-content/location-pages-translated'

// Spanish versions of every market page, served at /es/<path>. Translated from
// the English defaults (definitions.ts, europe-pages.ts, australia-pages.ts);
// like the other translated pages they are not editable in the admin. The
// object below is plain data: keys are the market keys from lib/data/locations.ts.

export const spanishLocationLabels: LocationLabels = {
  intro: 'Quiénes somos',
  caseStudies: 'Casos de éxito',
  process: 'Cómo trabajamos',
  highlights: 'Por qué CA Agency',
  talents: 'Nuestros creadores',
  industries: 'Sectores',
  faq: 'Preguntas frecuentes',
  otherMarkets: 'Otros mercados',
}

export const spanishLocationPages: Record<string, TranslatedLocationPage> = {
  "dubai": {
    "path": "/influencer-marketing-dubai",
    "title": "Agencia de marketing de influencers en Dubái | CA Agency",
    "description": "CA Agency, agencia de marketing de influencers en Dubái, crea campañas para marcas en Instagram, TikTok y YouTube con creadores evaluados de Dubái y los EAU.",
    "ogImage": "/images/site/og/influencer-marketing-dubai-v2.jpg",
    "areaServed": [
      {
        "@type": "City",
        "name": "Dubai"
      }
    ],
    "content": {
      "hero": {
        "title": "Agencia de marketing\nde influencers en Dubái",
        "subtitle": "CA Agency es una agencia de marketing de influencers en Dubái que ayuda a las marcas a lanzar campañas de alto rendimiento en Instagram, TikTok y YouTube con creadores evaluados de todos los Emiratos Árabes Unidos.",
        "primaryButtonLabel": "Empezar",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Descubre nuestros proyectos",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "Campañas realizadas"
        },
        {
          "value": "18M+",
          "label": "Seguidores en conjunto"
        },
        {
          "value": "150+",
          "label": "Marcas globales"
        },
        {
          "value": "EAU",
          "label": "Mercado principal"
        }
      ],
      "highlights": {
        "title": "Por qué las marcas eligen nuestra agencia de influencers en Dubái",
        "items": [
          {
            "title": "Conocimiento del mercado local",
            "description": "Diseñamos campañas de influencers a partir de cómo el público de Dubái descubre, valora y compra en lujo, belleza, moda, hostelería y estilo de vida."
          },
          {
            "title": "Escala regional",
            "description": "Las campañas lanzadas con creadores de Dubái pueden ampliarse de forma eficiente a Abu Dabi y al resto del CCG cuando el briefing requiere un alcance mayor."
          },
          {
            "title": "Red de creadores evaluados",
            "description": "Nuestra agencia selecciona creadores con calidad de contenido demostrada, afinidad de audiencia y una ejecución segura para la marca en Instagram, TikTok y YouTube."
          },
          {
            "title": "Ejecución orientada a resultados",
            "description": "Nos centramos en resultados medibles, como tráfico cualificado, conversiones y rendimiento del contenido de marca, y no solo en métricas de vanidad."
          }
        ]
      },
      "talents": {
        "title": "Nuestros creadores para el mercado de Dubái",
        "buttonLabel": "Ver todos los talentos",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Sectores con mejor rendimiento",
        "items": [
          {
            "icon": "🏨",
            "title": "Hostelería",
            "description": "Las campañas de hoteles, restauración y destinos funcionan muy bien en Dubái gracias al contenido breve de los creadores."
          },
          {
            "icon": "💄",
            "title": "Belleza",
            "description": "Los lanzamientos de cuidado de la piel, maquillaje y belleza de lujo rinden con fuerza gracias a la divulgación y la confianza que aportan los creadores."
          },
          {
            "icon": "👗",
            "title": "Moda",
            "description": "El público de Dubái responde bien a las colaboraciones de estilismo premium, compras y tendencias."
          }
        ]
      },
      "cta": {
        "title": "Lanza tu campaña en Dubái",
        "description": "Llega al público adecuado en Dubái con creadores alineados con tu marca y tus objetivos.",
        "buttonLabel": "Contáctanos",
        "buttonHref": "/contact"
      }
    }
  },
  "uae": {
    "path": "/influencer-marketing-uae",
    "title": "Agencia de marketing de influencers en EAU | CA Agency",
    "description": "CA Agency es una agencia de marketing de influencers en los EAU que ayuda a las marcas con campañas de creadores en Dubái, Abu Dabi, Sharjah y más allá.",
    "ogImage": "/images/site/og/influencer-marketing-uae-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      }
    ],
    "content": {
      "hero": {
        "title": "Agencia de marketing\nde influencers en EAU",
        "subtitle": "CA Agency es una agencia de marketing de influencers en los Emiratos Árabes Unidos que conecta marcas con creadores de Dubái, Abu Dabi, Sharjah y más allá para campañas orientadas al rendimiento en Instagram, TikTok y YouTube.",
        "primaryButtonLabel": "Inicia tu campaña",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Conoce a nuestros creadores",
        "secondaryButtonHref": "/talents"
      },
      "stats": [
        {
          "value": "Nacional",
          "label": "Cobertura"
        },
        {
          "value": "Varias ciudades",
          "label": "Red de creadores"
        },
        {
          "value": "Multiplataforma",
          "label": "Ejecución de campañas"
        },
        {
          "value": "Regional",
          "label": "Alcance de marca"
        }
      ],
      "highlights": {
        "title": "Por qué las marcas eligen nuestra agencia de influencers en los EAU",
        "items": [
          {
            "title": "Acceso a creadores en todo el país",
            "description": "Activamos creadores de Dubái, Abu Dabi, Sharjah y otros emiratos según su afinidad con la audiencia, no solo por su número de seguidores."
          },
          {
            "title": "Campañas multiplataforma",
            "description": "Nuestro equipo gestiona campañas de influencers de principio a fin en Instagram, TikTok y YouTube, con atención a los matices del mercado local."
          },
          {
            "title": "Alcance en árabe e inglés",
            "description": "Ayudamos a las marcas a combinar relevancia local y atractivo internacional entre las audiencias multilingües de los EAU."
          },
          {
            "title": "Enfoque comercial",
            "description": "Nuestras campañas en los EAU están pensadas para apoyar objetivos de notoriedad, consideración, tráfico y conversión, con informes claros."
          }
        ]
      },
      "talents": {
        "title": "Nuestros creadores de los EAU",
        "buttonLabel": "Ver todos los talentos",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Nuestros servicios de influencers en los EAU",
        "items": [
          {
            "icon": "📣",
            "title": "Gestión de campañas",
            "description": "Ejecución integral de campañas de influencers en Instagram, TikTok y YouTube."
          },
          {
            "icon": "🎯",
            "title": "Selección de talento",
            "description": "Acceso a los mejores creadores de los EAU en belleza, moda, estilo de vida, gastronomía y tecnología."
          },
          {
            "icon": "🎥",
            "title": "Producción de contenido",
            "description": "Contenido de marca de alta calidad que conecta con el público de los EAU."
          }
        ]
      },
      "cta": {
        "title": "Lanza tu campaña de influencers en los EAU",
        "description": "Llega al público de los EAU con una agencia de marketing de influencers que une tu marca con los creadores y la estrategia de campaña adecuados.",
        "buttonLabel": "Contáctanos",
        "buttonHref": "/contact"
      }
    }
  },
  "saudiArabia": {
    "path": "/influencer-marketing-saudi-arabia",
    "title": "Marketing de influencers en Arabia Saudí | CA Agency",
    "description": "Llega al público saudí con colaboraciones con creadores pensadas para Riad, Yeda y el conjunto del mercado de Arabia Saudí.",
    "ogImage": "/images/site/og/influencer-marketing-saudi-arabia-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Saudi Arabia"
      }
    ],
    "content": {
      "hero": {
        "title": "Agencia de marketing\nde influencers para Arabia Saudí",
        "subtitle": "Conecta con creadores que llegan al público de Riad, Yeda y el conjunto del mercado saudí mediante campañas orientadas al rendimiento y con sensibilidad cultural.",
        "primaryButtonLabel": "Inicia tu campaña",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Descubre nuestros proyectos",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "Alto",
          "label": "Uso de dispositivos móviles"
        },
        {
          "value": "Rápido",
          "label": "Crecimiento de la economía de creadores"
        },
        {
          "value": "Fuerte",
          "label": "Demanda de belleza y moda"
        },
        {
          "value": "Regional",
          "label": "Influencia"
        }
      ],
      "highlights": {
        "title": "¿Por qué apostar por el marketing de influencers en Arabia Saudí?",
        "items": [
          {
            "title": "Audiencia joven y digital",
            "description": "Arabia Saudí tiene una población muy conectada, que prioriza los dispositivos móviles e interactúa activamente con los creadores."
          },
          {
            "title": "Estrategia guiada por la cultura",
            "description": "Las campañas rinden mejor cuando los mensajes, los formatos y los creadores encajan con la cultura local y las expectativas de la audiencia."
          },
          {
            "title": "Gran confianza en los creadores",
            "description": "Las audiencias suelen apoyarse en las recomendaciones de los creadores para descubrir productos y decidir sus compras."
          },
          {
            "title": "Rápida adopción por parte de las marcas",
            "description": "Cada vez más marcas trasladan inversión a colaboraciones con creadores para ganar alcance y relevancia."
          }
        ]
      },
      "talents": {
        "title": "Nuestros creadores para el mercado saudí",
        "buttonLabel": "Ver todos los talentos",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Sectores con mejor rendimiento",
        "items": [
          {
            "icon": "💄",
            "title": "Belleza",
            "description": "El contenido y los tutoriales de belleza son un motor importante del descubrimiento y la prueba de producto."
          },
          {
            "icon": "👗",
            "title": "Moda",
            "description": "La moda modesta, el estilismo premium y las campañas de temporada rinden con fuerza."
          },
          {
            "icon": "📱",
            "title": "Tecnología y estilo de vida",
            "description": "Los lanzamientos tecnológicos y los creadores de estilo de vida cotidiano ayudan a que las marcas se perciban actuales y cercanas."
          }
        ]
      },
      "cta": {
        "title": "Lanza tu campaña en Arabia Saudí",
        "description": "Construye colaboraciones con creadores que resulten auténticas para el público saudí.",
        "buttonLabel": "Contáctanos",
        "buttonHref": "/contact"
      }
    }
  },
  "gcc": {
    "path": "/influencer-marketing-gcc",
    "title": "Marketing de influencers en el Golfo (CCG) | CA Agency",
    "description": "Escala tus campañas con creadores en todo el CCG con una única estrategia coordinada de agencia de marketing de influencers para los mercados del Golfo.",
    "ogImage": "/images/site/og/influencer-marketing-gcc-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      },
      {
        "@type": "Country",
        "name": "Saudi Arabia"
      },
      {
        "@type": "Country",
        "name": "Qatar"
      },
      {
        "@type": "Country",
        "name": "Kuwait"
      },
      {
        "@type": "Country",
        "name": "Bahrain"
      },
      {
        "@type": "Country",
        "name": "Oman"
      }
    ],
    "content": {
      "hero": {
        "title": "Agencia de marketing\nde influencers para el CCG",
        "subtitle": "Lleva a cabo campañas con creadores en todo el CCG con una única estrategia coordinada de marketing de influencers que abarca Emiratos Árabes Unidos, Arabia Saudí, Catar, Kuwait, Baréin y Omán.",
        "primaryButtonLabel": "Empezar",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Conoce a nuestros talentos",
        "secondaryButtonHref": "/talents"
      },
      "stats": [
        {
          "value": "6",
          "label": "Mercados principales"
        },
        {
          "value": "Regional",
          "label": "Coordinación de campañas"
        },
        {
          "value": "Multilingüe",
          "label": "Ejecución"
        },
        {
          "value": "Transfronterizo",
          "label": "Alcance de creadores"
        }
      ],
      "highlights": {
        "title": "Por qué las marcas eligen nuestra agencia de influencers en el CCG",
        "items": [
          {
            "title": "Coherencia regional",
            "description": "Mantén un mensaje de marca coherente mientras adaptas el contenido a cada mercado."
          },
          {
            "title": "Alcance escalable",
            "description": "Coordina varios creadores y países sin duplicar el esfuerzo interno."
          },
          {
            "title": "Relevancia local",
            "description": "Trabaja con creadores que conocen su mercado y con estructuras de campaña que reflejan los matices de cada audiencia."
          },
          {
            "title": "Operativa sencilla",
            "description": "Gestiona briefing, aprobaciones, contenido e informes a través de un único socio."
          }
        ]
      },
      "talents": {
        "title": "Creadores para campañas en el CCG",
        "buttonLabel": "Ver todos los talentos",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Sectores con mejor rendimiento",
        "items": [
          {
            "icon": "✈️",
            "title": "Viajes y hostelería",
            "description": "Las campañas de destinos y hostelería escalan especialmente bien en toda la región."
          },
          {
            "icon": "💄",
            "title": "Belleza",
            "description": "Las marcas de belleza se benefician de la gran confianza en los creadores y del contenido en formato tutorial."
          },
          {
            "icon": "🛍️",
            "title": "Retail",
            "description": "Los lanzamientos de retail funcionan bien cuando se localizan a través de creadores en cada mercado."
          }
        ]
      },
      "cta": {
        "title": "Planifica tu despliegue en el CCG",
        "description": "Coordina un único marco de campaña en varios mercados del Golfo.",
        "buttonLabel": "Contáctanos",
        "buttonHref": "/contact"
      }
    }
  },
  "korea": {
    "path": "/influencer-marketing-korea",
    "title": "Marketing de influencers en Corea | CA Agency",
    "description": "CA Agency ayuda a las marcas a llegar al público coreano con campañas de marketing de influencers localizadas en belleza, moda, estilo de vida y tecnología.",
    "ogImage": "/images/site/og/influencer-marketing-korea-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "South Korea"
      }
    ],
    "content": {
      "hero": {
        "title": "Agencia de marketing\nde influencers para Corea",
        "subtitle": "CA Agency ayuda a las marcas a llegar al público coreano con campañas de marketing de influencers localizadas en belleza, moda, estilo de vida y tecnología.",
        "primaryButtonLabel": "Empezar",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Descubre nuestros proyectos",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "Guiado por tendencias",
          "label": "Comportamiento del consumidor"
        },
        {
          "value": "Alta",
          "label": "Adopción de productos de belleza"
        },
        {
          "value": "Fuerte",
          "label": "Comercio social"
        },
        {
          "value": "Rápido",
          "label": "Ritmo de las campañas"
        }
      ],
      "highlights": {
        "title": "Por qué las marcas eligen nuestra agencia de influencers para Corea",
        "items": [
          {
            "title": "Liderazgo en belleza",
            "description": "Corea es uno de los mercados de belleza más influyentes del mundo, con creadores de gran autoridad."
          },
          {
            "title": "Sensibilidad a las tendencias",
            "description": "Las audiencias responden a formatos novedosos, una imagen cuidada y mensajes culturalmente actuales."
          },
          {
            "title": "La prueba social importa",
            "description": "Los creadores desempeñan un papel importante a la hora de validar productos e impulsar su prueba."
          },
          {
            "title": "Posicionamiento con proyección exterior",
            "description": "Las campañas coreanas suelen apoyar tanto la visibilidad local como la percepción internacional de la marca."
          }
        ]
      },
      "talents": {
        "title": "Nuestros creadores para el mercado coreano",
        "buttonLabel": "Ver todos los talentos",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Sectores con mejor rendimiento",
        "items": [
          {
            "icon": "💄",
            "title": "Belleza y cuidado de la piel",
            "description": "Las historias de producto con enfoque divulgativo funcionan especialmente bien en Corea."
          },
          {
            "icon": "👟",
            "title": "Moda y streetwear",
            "description": "El contenido de creadores centrado en el estilo aporta relevancia en tendencias y prestigio de marca."
          },
          {
            "icon": "📲",
            "title": "Tecnología y gadgets",
            "description": "Las demostraciones de producto y su integración en el estilo de vida ayudan a las marcas tecnológicas a destacar."
          }
        ]
      },
      "cta": {
        "title": "Lanza tu campaña en Corea",
        "description": "Construye colaboraciones con creadores culturalmente relevantes para el mercado coreano.",
        "buttonLabel": "Contáctanos",
        "buttonHref": "/contact"
      }
    }
  },
  "asia": {
    "path": "/influencer-marketing-asia",
    "title": "Marketing de influencers en Asia | CA Agency",
    "description": "CA Agency ayuda a las marcas con campañas de marketing de influencers en Asia, con estrategia de creadores localizada y ejecución en varios mercados.",
    "ogImage": "/images/site/og/influencer-marketing-asia-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "South Korea"
      },
      {
        "@type": "Country",
        "name": "Japan"
      },
      {
        "@type": "Country",
        "name": "Singapore"
      },
      {
        "@type": "Country",
        "name": "Thailand"
      },
      {
        "@type": "Country",
        "name": "Indonesia"
      },
      {
        "@type": "Country",
        "name": "Philippines"
      },
      {
        "@type": "Country",
        "name": "Vietnam"
      },
      {
        "@type": "Country",
        "name": "Malaysia"
      }
    ],
    "content": {
      "hero": {
        "title": "Agencia de marketing\nde influencers para Asia",
        "subtitle": "CA Agency ayuda a las marcas a llevar a cabo campañas de marketing de influencers en Asia con creadores que conocen su mercado, estrategia localizada y gestión de campañas entre países.",
        "primaryButtonLabel": "Inicia tu campaña",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Descubre nuestros proyectos",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "Multimercado",
          "label": "Ejecución de campañas"
        },
        {
          "value": "Regional",
          "label": "Red de creadores"
        },
        {
          "value": "Localizada",
          "label": "Estrategia de mercado"
        },
        {
          "value": "Multiplataforma",
          "label": "Ejecución"
        }
      ],
      "highlights": {
        "title": "Por qué las marcas necesitan una agencia de influencers para Asia",
        "items": [
          {
            "title": "Los matices de cada mercado importan",
            "description": "Asia no es una sola audiencia. Adaptamos la selección de creadores, los mensajes y los formatos de contenido a cada mercado y a su comportamiento de consumo."
          },
          {
            "title": "Coordinación entre países",
            "description": "Ayudamos a las marcas a gestionar briefings, aprobaciones, producción e informes en varios mercados asiáticos sin fragmentar la ejecución."
          },
          {
            "title": "Estrategia adaptada a cada plataforma",
            "description": "Las campañas se construyen con la combinación adecuada de Instagram, TikTok, YouTube y los hábitos en plataformas locales, según el mercado objetivo."
          },
          {
            "title": "Rendimiento comercial",
            "description": "No nos centramos solo en el alcance. Creamos campañas con creadores para apoyar objetivos de notoriedad, consideración, tráfico y conversión."
          }
        ]
      },
      "talents": {
        "title": "Creadores para campañas en Asia",
        "buttonLabel": "Ver todos los talentos",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Categorías con mejor rendimiento en Asia",
        "items": [
          {
            "icon": "💄",
            "title": "Belleza y cuidado de la piel",
            "description": "Las marcas de belleza se benefician del contenido divulgativo, la prueba de producto y la gran confianza en los creadores en muchos mercados asiáticos."
          },
          {
            "icon": "📱",
            "title": "Tecnología y telefonía móvil",
            "description": "Los creadores ayudan a las marcas tecnológicas a explicar funciones, diferenciar productos e impulsar la conversión con demostraciones y reseñas."
          },
          {
            "icon": "🧳",
            "title": "Viajes y hostelería",
            "description": "La demanda de viajes en la región y el contenido centrado en destinos hacen que las colaboraciones con creadores sean eficaces para generar notoriedad y reservas."
          }
        ]
      },
      "cta": {
        "title": "Lanza tu campaña de influencers en Asia",
        "description": "Trabaja con una agencia de marketing de influencers capaz de coordinar creadores, contenido y estrategia en los mercados asiáticos.",
        "buttonLabel": "Contáctanos",
        "buttonHref": "/contact"
      }
    }
  },
  "usa": {
    "path": "/influencer-marketing-usa",
    "title": "Marketing de influencers en Estados Unidos | CA Agency",
    "description": "CA Agency es una agencia de marketing de influencers para Estados Unidos que ayuda a las marcas con campañas de creadores en Instagram, TikTok y YouTube.",
    "ogImage": "/images/site/og/influencer-marketing-usa-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States"
      }
    ],
    "content": {
      "hero": {
        "title": "Agencia de marketing\nde influencers para Estados Unidos",
        "subtitle": "CA Agency es una agencia de marketing de influencers para Estados Unidos que ayuda a las marcas a llevar a cabo campañas con creadores orientadas al rendimiento en Instagram, TikTok y YouTube.",
        "primaryButtonLabel": "Empezar",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Descubre nuestros proyectos",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "$6.2B",
          "label": "Tamaño del mercado de EE. UU. 2025"
        },
        {
          "value": "84%",
          "label": "De los adultos usan YouTube"
        },
        {
          "value": "75%",
          "label": "De los marketers usan Instagram"
        },
        {
          "value": "60%",
          "label": "Usan marketing en TikTok"
        }
      ],
      "intro": {
        "heading": "La agencia de marketing de influencers en la que confían las marcas en EE. UU.",
        "paragraphs": [
          {
            "text": "Como agencia de marketing de influencers de servicio integral para Estados Unidos, CA Agency ayuda a las marcas a convertir a los creadores estadounidenses en crecimiento medible. De Nueva York y Los Ángeles a Miami y Austin, diseñamos campañas con creadores que llegan al público estadounidense allí donde ya pasa su tiempo, en Instagram, TikTok y YouTube, y vinculamos cada activación a resultados de negocio reales."
          },
          {
            "text": "La economía de creadores de Estados Unidos es la más grande y competitiva del mundo, por lo que la diferencia entre una campaña que genera ventas y otra que pasa desapercibida está en la selección de creadores, el briefing y la medición. Nuestro equipo se ocupa de las tres cosas: conectamos tu marca con influencers estadounidenses evaluados cuya audiencia, nicho e interacción encajan de verdad con tu producto, y después gestionamos de principio a fin la contratación, las aprobaciones de contenido, los derechos de uso y la divulgación publicitaria conforme a las normas de la FTC."
          },
          {
            "text": "Tanto si eres una marca de belleza DTC (venta directa al consumidor) que se lanza en TikTok Shop, una empresa SaaS que construye autoridad en YouTube o un retailer que escala contenido UGC para publicidad de pago en redes sociales, creamos la combinación adecuada de creadores micro, de nivel medio y macro para tus objetivos y tu presupuesto. Cada campaña se reporta frente a KPI claros: alcance, interacción, clics y conversiones, para que siempre sepas qué ha generado tu inversión en marketing de influencers."
          }
        ]
      },
      "highlights": {
        "title": "Por qué las marcas eligen nuestra agencia de influencers para EE. UU.",
        "items": [
          {
            "title": "El mayor mercado del mundo",
            "description": "La economía de creadores de Estados Unidos ofrece escala, una infraestructura madura y un rendimiento demostrado en todos los sectores."
          },
          {
            "title": "Alta confianza del consumidor",
            "description": "Los consumidores se apoyan en los creadores para descubrir productos, validarlos y comprar con confianza."
          },
          {
            "title": "Diversidad de plataformas",
            "description": "Existen ecosistemas de creadores sólidos en YouTube, Instagram, TikTok y canales emergentes."
          },
          {
            "title": "La ventaja de los microinfluencers",
            "description": "Los creadores más pequeños suelen rendir mejor en interacción y rentabilidad."
          }
        ]
      },
      "talents": {
        "title": "Nuestros creadores para el mercado de EE. UU.",
        "buttonLabel": "Ver todos los talentos",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Sectores con mejor rendimiento",
        "items": [
          {
            "icon": "💄",
            "title": "Belleza y cuidado personal",
            "description": "Los microinfluencers ayudan a las marcas de belleza a impulsar la prueba de producto y la conversión."
          },
          {
            "icon": "👗",
            "title": "Moda y retail",
            "description": "El contenido breve de estilo apoya tanto la notoriedad de marca como las ventas directas."
          },
          {
            "icon": "💪",
            "title": "Salud y bienestar",
            "description": "Los creadores de bienestar ayudan a las marcas a generar confianza y una interacción habitual."
          }
        ]
      },
      "faq": {
        "title": "Marketing de influencers en Estados Unidos: preguntas frecuentes",
        "items": [
          {
            "question": "¿Cuánto cuesta el marketing de influencers en Estados Unidos?",
            "answer": "No existe un precio único para el marketing de influencers en Estados Unidos: el precio depende de la plataforma, los niveles de creadores implicados (de micro a macro), el número de creadores, los entregables de contenido y los derechos de uso. En lugar de dar una tarifa fija, CA Agency dimensiona cada campaña según tus objetivos y tu presupuesto y ajusta la inversión a resultados medibles, para que inviertas en resultados y no solo en número de seguidores. Cuéntanos tu presupuesto y tus objetivos y construiremos una combinación de creadores a su medida."
          },
          {
            "question": "¿Qué plataformas funcionan mejor para el marketing de influencers en EE. UU.?",
            "answer": "Instagram, TikTok y YouTube dominan el marketing de influencers en Estados Unidos. Instagram y TikTok lideran en belleza, moda y estilo de vida, TikTok impulsa el descubrimiento y el alcance viral, y YouTube es la más fuerte para reseñas en profundidad, tecnología y compras que requieren más reflexión. Recomendamos la combinación de plataformas en función de tu audiencia y tus objetivos."
          },
          {
            "question": "¿Cómo encuentra CA Agency a los influencers estadounidenses adecuados para mi marca?",
            "answer": "Evaluamos a los creadores por los datos demográficos de su audiencia, la calidad de la interacción, el estilo de contenido, la seguridad de marca y el rendimiento anterior, no solo por su número de seguidores. Antes de recomendar a un creador, comprobamos que encaja con tu cliente objetivo, tu categoría y el objetivo de la campaña."
          },
          {
            "question": "¿Se encarga CA Agency de la divulgación exigida por la FTC y de los contratos con los creadores?",
            "answer": "Sí. Gestionamos de principio a fin los contratos con los creadores, los derechos de uso y de whitelisting, las aprobaciones de contenido y la divulgación publicitaria conforme a las normas de la FTC (como el etiquetado #ad), para que tus campañas cumplan la normativa y sean fieles a tu marca."
          },
          {
            "question": "¿Cómo se miden los resultados de una campaña de influencers?",
            "answer": "Cada campaña se vincula a KPI claros: alcance, impresiones, tasa de interacción, clics en enlaces y conversiones, con informes transparentes para que veas exactamente qué ha generado tu inversión."
          },
          {
            "question": "¿Es posible hacer campañas nacionales o centradas en ciudades concretas de EE. UU.?",
            "answer": "Ambas. Llevamos a cabo campañas nacionales en Estados Unidos y también podemos dirigirnos a mercados concretos como Nueva York, Los Ángeles, Miami o Chicago con creadores relevantes para cada región."
          }
        ]
      },
      "cta": {
        "title": "Lanza tu campaña en EE. UU.",
        "description": "Llega al público estadounidense con creadores elegidos según tu audiencia y tus objetivos.",
        "buttonLabel": "Contáctanos",
        "buttonHref": "/contact"
      }
    }
  },
  "uk": {
    "path": "/influencer-marketing-uk",
    "title": "Marketing de influencers en Reino Unido | CA Agency",
    "description": "Lanza campañas de influencers en Reino Unido con creadores británicos en Instagram, TikTok y YouTube, con estrategia de rendimiento e informes claros.",
    "ogImage": "/images/site/og/influencer-marketing-uk-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "United Kingdom"
      }
    ],
    "content": {
      "hero": {
        "title": "Agencia de marketing\nde influencers para Reino Unido",
        "subtitle": "Conecta tu marca con los creadores de contenido más influyentes de Gran Bretaña. Accede al mayor mercado de marketing de influencers de Europa, con una fuerte intención de compra y ecosistemas de creadores maduros.",
        "primaryButtonLabel": "Empezar",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Descubre nuestros proyectos",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "£930M",
          "label": "Mercado británico 2024"
        },
        {
          "value": "55.5M",
          "label": "Usuarios de redes sociales"
        },
        {
          "value": "69%",
          "label": "Compran después de verlo"
        },
        {
          "value": "89%",
          "label": "De las marcas usan Instagram"
        }
      ],
      "highlights": {
        "title": "¿Por qué apostar por el marketing de influencers en Reino Unido?",
        "items": [
          {
            "title": "El mayor mercado de Europa",
            "description": "Reino Unido lidera Europa en madurez, inversión y sofisticación operativa del marketing de influencers."
          },
          {
            "title": "Altas tasas de conversión",
            "description": "Los consumidores británicos compran con frecuencia después de ver recomendaciones de creadores."
          },
          {
            "title": "Un ecosistema de creadores sofisticado",
            "description": "Las marcas prefieren cada vez más las colaboraciones auténticas y a largo plazo con creadores frente a las publicaciones puntuales de celebridades."
          },
          {
            "title": "Resultados basados en datos",
            "description": "La medición del rendimiento y la seguridad de marca son expectativas básicas en el mercado británico."
          }
        ]
      },
      "talents": {
        "title": "Nuestros creadores para el mercado británico",
        "buttonLabel": "Ver todos los talentos",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Sectores con mejor rendimiento",
        "items": [
          {
            "icon": "👗",
            "title": "Moda",
            "description": "La moda sigue siendo una de las categorías de creadores con mejor rendimiento en Reino Unido."
          },
          {
            "icon": "💄",
            "title": "Belleza",
            "description": "Las campañas de belleza se benefician de la gran autoridad de los creadores y de los formatos tutorial."
          },
          {
            "icon": "🍽️",
            "title": "Alimentación y bebidas",
            "description": "La confianza en los creadores es especialmente fuerte en alimentación, bebidas y recomendaciones del día a día."
          }
        ]
      },
      "cta": {
        "title": "Lanza tu campaña en Reino Unido",
        "description": "Construye colaboraciones con creadores basadas en la confianza para el público británico.",
        "buttonLabel": "Contáctanos",
        "buttonHref": "/contact"
      }
    }
  },
  "canada": {
    "path": "/influencer-marketing-canada",
    "title": "Marketing de influencers en Canadá | CA Agency",
    "description": "Llega al público canadiense con campañas bilingües de influencers en Toronto, Vancouver, Montreal y otros grandes mercados, con informes claros.",
    "ogImage": "/images/site/og/influencer-marketing-canada-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Canada"
      }
    ],
    "content": {
      "hero": {
        "title": "Agencia de marketing\nde influencers para Canadá",
        "subtitle": "Conecta tu marca con los mejores creadores de contenido de Canadá. Accede a un sólido mercado bilingüe de creadores en Toronto, Vancouver y Montreal.",
        "primaryButtonLabel": "Empezar",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Descubre nuestros proyectos",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "$660M",
          "label": "Tamaño del mercado 2025"
        },
        {
          "value": "882K+",
          "label": "Influencers activos"
        },
        {
          "value": "70%",
          "label": "Descubren a través de influencers"
        },
        {
          "value": "40%",
          "label": "Compran de inmediato"
        }
      ],
      "highlights": {
        "title": "¿Por qué apostar por el marketing de influencers en Canadá?",
        "items": [
          {
            "title": "Una enorme red de creadores",
            "description": "Canadá ofrece una amplia cobertura de creadores en las principales ciudades y en las categorías de contenido clave."
          },
          {
            "title": "Alta intención de compra",
            "description": "Una gran parte de los consumidores canadienses descubre productos a través de los creadores."
          },
          {
            "title": "Experiencia bilingüe",
            "description": "La localización en inglés y francés importa, sobre todo en las campañas dirigidas a Quebec."
          },
          {
            "title": "Valor a largo plazo",
            "description": "Las colaboraciones continuadas con creadores suelen rendir mejor que las puntuales."
          }
        ]
      },
      "talents": {
        "title": "Nuestros creadores para el mercado canadiense",
        "buttonLabel": "Ver todos los talentos",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Sectores con mejor rendimiento",
        "items": [
          {
            "icon": "👗",
            "title": "Moda",
            "description": "La relevancia local unida a las tendencias globales convierte la moda en una categoría fuerte para los creadores."
          },
          {
            "icon": "💄",
            "title": "Belleza",
            "description": "El contenido de cuidado de la piel y belleza funciona bien cuando los creadores adoptan un enfoque divulgativo."
          },
          {
            "icon": "💻",
            "title": "Tecnología",
            "description": "Los lanzamientos y las reseñas de tecnología se benefician de la confianza en los creadores y de las demostraciones detalladas."
          }
        ]
      },
      "cta": {
        "title": "Lanza tu campaña en Canadá",
        "description": "Llega al público canadiense con la combinación adecuada de creadores y atención a los matices del mercado.",
        "buttonLabel": "Contáctanos",
        "buttonHref": "/contact"
      }
    }
  },
  "australia": {
    "path": "/influencer-marketing-australia",
    "title": "Marketing de influencers en Australia | CA Agency",
    "description": "Lanza campañas de marketing de influencers en Australia, en Sídney, Melbourne y más allá, con creadores evaluados e informes de rendimiento transparentes.",
    "ogImage": "/images/site/og/influencer-marketing-australia-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Australia"
      }
    ],
    "content": {
      "hero": {
        "title": "Agencia de marketing\nde influencers para Australia",
        "subtitle": "Conecta tu marca con los creadores de contenido más influyentes de Australia en Sídney, Melbourne y más allá.",
        "primaryButtonLabel": "Empezar",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Descubre nuestros proyectos",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "$589M",
          "label": "Tamaño del mercado 2025"
        },
        {
          "value": "20.9M",
          "label": "Usuarios de redes sociales"
        },
        {
          "value": "46%",
          "label": "Compran después de verlo"
        },
        {
          "value": "70%",
          "label": "De las marcas aumentan su presupuesto"
        }
      ],
      "highlights": {
        "title": "¿Por qué apostar por el marketing de influencers en Australia?",
        "items": [
          {
            "title": "Una audiencia muy participativa",
            "description": "Los australianos son grandes usuarios de redes sociales y responden con fuerza al contenido de los creadores."
          },
          {
            "title": "Fuerte influencia en la compra",
            "description": "Los influencers desempeñan un papel relevante en la búsqueda de información, la consideración y la conversión."
          },
          {
            "title": "Una cultura que prioriza la autenticidad",
            "description": "Los creadores cercanos y las colaboraciones basadas en la confianza rinden mejor que las campañas demasiado pulidas."
          },
          {
            "title": "Inversión en aumento",
            "description": "Las marcas australianas siguen aumentando su inversión en marketing de influencers."
          }
        ]
      },
      "intro": {
        "heading": "Una agencia de marketing de influencers para Sídney, Melbourne y toda Australia",
        "paragraphs": [
          {
            "text": "CA Agency lleva a cabo campañas de marketing de influencers para marcas que quieren llegar al público australiano, desde lanzamientos nacionales hasta acciones a nivel de ciudad en Sídney y Melbourne. Conectamos tu marca con creadores australianos en Instagram, TikTok y YouTube y gestionamos la campaña desde el briefing hasta el informe."
          },
          {
            "text": "El marketing de influencers en Sídney se inclina hacia la belleza, la moda, el fitness y el estilo de vida de playa y aire libre por el que se conoce a la ciudad. Los creadores de Sídney son una buena opción para lanzamientos de producto, cobertura de eventos y contenido que necesita un aspecto cuidado y aspiracional."
          },
          {
            "text": "El marketing de influencers en Melbourne tiene un carácter distinto: más editorial y más centrado en la moda, la gastronomía, el café y la cultura. Los creadores de Melbourne encajan con marcas que buscan contenido meditado y con estilo, y una audiencia que sigue de cerca las tendencias. Muchas campañas nacionales utilizan ambas ciudades y después añaden creadores de Brisbane, Perth y Adelaida para ampliar el alcance."
          },
          {
            "text": "Para las marcas de belleza y cuidado de la piel, incluidas las marcas de belleza coreana que entran en Australia, planificamos teniendo en cuenta tanto las normas locales como el gusto local. La publicidad debe identificarse con claridad, y los productos regulados como productos terapéuticos (therapeutic goods), que en Australia incluyen muchos protectores solares, tienen normas más estrictas sobre las recomendaciones pagadas. Informamos de ello a los creadores en el briefing antes de que se produzca ningún contenido."
          }
        ]
      },
      "process": {
        "title": "Cómo gestionamos una campaña de influencers en Australia",
        "steps": [
          {
            "title": "Briefing y objetivos",
            "description": "Acordamos el objetivo, la audiencia, el presupuesto y los plazos, y si la campaña es nacional o se centra en Sídney, Melbourne u otra ciudad."
          },
          {
            "title": "Preselección de creadores",
            "description": "Recibes una preselección de creadores australianos con la ubicación de su audiencia, su interacción y sus trabajos anteriores con marcas, comprobados antes de que recomendemos a nadie."
          },
          {
            "title": "Contratos y briefing",
            "description": "Nos encargamos de los contratos, los derechos de uso y un briefing creativo que incluye la identificación publicitaria que exigen las normas australianas."
          },
          {
            "title": "Contenido y aprobación",
            "description": "Los creadores producen el contenido, nosotros lo revisamos conforme al briefing y tú lo apruebas antes de que se publique."
          },
          {
            "title": "Informes",
            "description": "Recibes alcance, interacción, clics y conversiones por creador y por ciudad, con una visión clara de lo que conviene repetir."
          }
        ]
      },
      "talents": {
        "title": "Nuestros creadores para el mercado australiano",
        "buttonLabel": "Ver todos los talentos",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Sectores con mejor rendimiento",
        "items": [
          {
            "icon": "🏃",
            "title": "Estilo de vida y fitness",
            "description": "Los creadores de estilo de vida y fitness tienen una fuerte influencia entre el público australiano."
          },
          {
            "icon": "👗",
            "title": "Moda",
            "description": "La moda funciona bien con historias de creadores guiadas por las tendencias pero cercanas."
          },
          {
            "icon": "💄",
            "title": "Belleza",
            "description": "Los creadores de belleza ayudan a impulsar el descubrimiento, la prueba y la interacción recurrente."
          }
        ]
      },
      "faq": {
        "title": "Marketing de influencers en Australia: preguntas frecuentes",
        "items": [
          {
            "question": "¿Hace CA Agency campañas de influencers en Sídney y Melbourne?",
            "answer": "Sí. Planificamos campañas específicas por ciudad con creadores de Sídney y Melbourne, además de campañas nacionales que suman Brisbane, Perth y Adelaida."
          },
          {
            "question": "¿CA Agency tiene su sede en Australia?",
            "answer": "No. Nuestra sede central está en Dubái, con divisiones en Ámsterdam y Delaware. Gestionamos las campañas australianas en remoto con creadores que viven en Australia, y llevamos el briefing, los contratos, las aprobaciones y los informes con un único equipo."
          },
          {
            "question": "¿Cómo debe identificarse el contenido patrocinado en Australia?",
            "answer": "El contenido pagado de creadores debe poder distinguirse claramente como publicidad conforme al código publicitario australiano y a la legislación de consumo, por ejemplo con una etiqueta clara de \"Ad\" o de colaboración pagada. Lo incluimos en cada briefing y lo comprobamos antes de la aprobación."
          },
          {
            "question": "¿Hay normas especiales para el cuidado de la piel y los protectores solares en Australia?",
            "answer": "Sí. Los productos regulados como productos terapéuticos, entre los que se incluyen muchos protectores solares, tienen normas publicitarias más estrictas, incluidos límites a los testimonios pagados. Comprobamos cómo está clasificado tu producto antes de planificar el contenido de los creadores."
          },
          {
            "question": "¿Cuánto cuesta el marketing de influencers en Australia?",
            "answer": "El precio depende de la plataforma, los niveles de creadores, el número de creadores, los entregables y los derechos de uso. Dimensionamos cada campaña según tu presupuesto y tus objetivos en lugar de dar una tarifa fija."
          }
        ]
      },
      "cta": {
        "title": "Lanza tu campaña en Australia",
        "description": "Llega al público australiano con creadores que encajan con tu categoría y tu mercado.",
        "buttonLabel": "Contáctanos",
        "buttonHref": "/contact"
      }
    }
  },
  "sydney": {
    "path": "/influencer-marketing-sydney",
    "title": "Agencia de marketing de influencers para Sídney | CA Agency",
    "description": "Marketing de influencers para Sídney: creadores de Sídney verificados para marcas de belleza, skincare y lifestyle en Instagram y TikTok, con informes claros.",
    "ogImage": "/images/site/og/influencer-marketing-sydney-v1.jpg",
    "areaServed": [
      {
        "@type": "City",
        "name": "Sydney"
      }
    ],
    "content": {
      "hero": {
        "title": "Agencia de marketing de influencers\npara Sídney",
        "subtitle": "CA Agency gestiona campañas de marketing de influencers para Sídney y conecta marcas de belleza, cuidado de la piel y lifestyle con creadores de Sídney en Instagram, TikTok y YouTube.",
        "primaryButtonLabel": "Empezar",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Ver nuestro trabajo",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "Campañas realizadas"
        },
        {
          "value": "18M+",
          "label": "Seguidores en total"
        },
        {
          "value": "150+",
          "label": "Marcas globales"
        },
        {
          "value": "Sídney",
          "label": "Mercado en foco"
        }
      ],
      "intro": {
        "heading": "Una agencia de marketing de influencers para campañas en Sídney",
        "paragraphs": [
          {
            "text": "Sídney es la ciudad más grande de Australia y el centro de sus industrias de belleza, moda y medios. Las marcas que buscan una agencia de marketing de influencers para Sídney suelen querer una de tres cosas: un lanzamiento que no pase desapercibido, contenido con un acabado cuidado y aspiracional, o un alcance constante entre el público de la ciudad más atento al estilo. CA Agency planifica las campañas para Sídney en torno a esos objetivos."
          },
          {
            "text": "El contenido de los creadores de Sídney tiene un carácter reconocible: playas y costa, fitness y bienestar, clean beauty y una estética luminosa y al aire libre que encaja especialmente bien con el cuidado de la piel y la protección solar. Conectamos tu marca con influencers de Sídney cuyos seguidores viven de verdad en la ciudad y sus alrededores, desde los suburbios del este hasta el Inner West, y comprobamos la ubicación de la audiencia antes de recomendar a nadie."
          },
          {
            "text": "No somos una agencia con sede en Sídney. Nuestra sede central está en Dubái, con divisiones en Ámsterdam y Delaware, y gestionamos las campañas australianas a distancia, con creadores sobre el terreno. Para las marcas, eso significa un solo equipo para Sídney, el resto de Australia y cualquier otro mercado en el que estés presente, con los mismos informes en todas partes."
          },
          {
            "text": "La belleza y el cuidado de la piel son nuestras categorías principales, incluidas las marcas de belleza coreana que se lanzan en Australia. Planificamos teniendo en cuenta las normas publicitarias australianas desde el primer brief: el contenido patrocinado debe identificarse con claridad, y los productos regulados como productos terapéuticos, entre los que se encuentran muchos protectores solares, tienen límites más estrictos para las recomendaciones pagadas."
          }
        ]
      },
      "process": {
        "title": "Cómo gestionamos una campaña de influencers en Sídney",
        "steps": [
          {
            "title": "Brief y objetivos",
            "description": "Acordamos el objetivo, la audiencia, el presupuesto y los plazos, y decidimos si la campaña es solo para Sídney o forma parte de un plan nacional."
          },
          {
            "title": "Preselección de creadores",
            "description": "Recibes una preselección de creadores de Sídney con la ubicación de su audiencia, su engagement y sus trabajos anteriores con marcas, todo comprobado antes de recomendar a nadie."
          },
          {
            "title": "Contratos y briefing",
            "description": "Nos ocupamos de los contratos, los derechos de uso y un brief creativo que incluye la identificación publicitaria que exigen las normas australianas."
          },
          {
            "title": "Contenido y aprobación",
            "description": "Los creadores producen el contenido, nosotros lo revisamos según el brief y tú lo apruebas antes de que se publique."
          },
          {
            "title": "Informes",
            "description": "Recibes el alcance, el engagement, los clics y las conversiones por creador, con una visión clara de lo que conviene repetir."
          }
        ]
      },
      "highlights": {
        "title": "Por qué las marcas nos eligen para el marketing de influencers en Sídney",
        "items": [
          {
            "title": "Audiencias realmente de Sídney",
            "description": "Verificamos dónde viven los seguidores de cada creador, para que tu presupuesto llegue a personas que están en Sídney y no solo a quienes les gusta el contenido sobre Sídney."
          },
          {
            "title": "Foco en belleza y cuidado de la piel",
            "description": "Nuestras campañas están pensadas sobre todo para marcas de belleza, cuidado de la piel y lifestyle, las categorías en las que los creadores de Sídney son más fuertes."
          },
          {
            "title": "Contenido listo para lanzamientos",
            "description": "Los creadores de Sídney producen contenido cuidado y aspiracional que funciona en lanzamientos y sirve también como creatividad para publicidad en redes sociales."
          },
          {
            "title": "Un equipo, todos los mercados",
            "description": "Sídney puede activarse por separado o junto con Melbourne, acciones nacionales en Australia y campañas en otros países."
          }
        ]
      },
      "talents": {
        "title": "Creadores con los que trabajamos",
        "buttonLabel": "Ver todos los talentos",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Los sectores que mejor funcionan en Sídney",
        "items": [
          {
            "icon": "💄",
            "title": "Belleza y cuidado de la piel",
            "description": "El cuidado de la piel, la protección solar y la clean beauty encajan con el estilo de vida al aire libre de Sídney y con su público conocedor de la belleza."
          },
          {
            "icon": "🏃",
            "title": "Fitness y bienestar",
            "description": "La vida activa junto a la costa hace que los creadores de fitness y bienestar sean especialmente influyentes en Sídney."
          },
          {
            "icon": "👗",
            "title": "Moda",
            "description": "La moda de baño, la ropa resort y la moda premium funcionan bien con los creadores de Sídney más centrados en el estilo."
          }
        ]
      },
      "faq": {
        "title": "Marketing de influencers en Sídney: preguntas frecuentes",
        "items": [
          {
            "question": "¿Es CA Agency una agencia de marketing de influencers en Sídney?",
            "answer": "Gestionamos campañas de marketing de influencers para Sídney, pero no somos una agencia con sede en Sídney. Nuestra sede central está en Dubái, con divisiones en Ámsterdam y Delaware. Un solo equipo gestiona las campañas a distancia y las llevan a cabo creadores que viven en Sídney."
          },
          {
            "question": "¿Cómo encuentran influencers de Sídney para una marca?",
            "answer": "Preseleccionamos a los creadores según la ubicación de su audiencia, la calidad de su engagement, su estilo de contenido, la seguridad de marca y sus resultados anteriores. Para una campaña en Sídney comprobamos que una parte significativa de la audiencia esté en el área de Sídney antes de recomendar a un creador."
          },
          {
            "question": "¿Cuánto cuesta el marketing de influencers en Sídney?",
            "answer": "El coste depende de la plataforma, el nivel de los creadores, el número de creadores, los entregables y los derechos de uso. Definimos cada campaña para Sídney según tu presupuesto y tus objetivos, en lugar de dar una tarifa fija."
          },
          {
            "question": "¿Qué plataformas funcionan mejor para el marketing de influencers en Sídney?",
            "answer": "Instagram y TikTok lideran en belleza, moda, fitness y lifestyle, y YouTube resulta útil para reseñas más largas. Recomendamos la combinación según tu audiencia y el objetivo de la campaña."
          },
          {
            "question": "¿Se ocupan de la identificación del contenido patrocinado en Australia?",
            "answer": "Sí. El contenido pagado de los creadores debe poder distinguirse claramente como publicidad según el código publicitario australiano y la legislación de consumo. La identificación forma parte de cada brief y revisamos cada publicación antes de aprobarla. En el caso de los productos terapéuticos, como muchos protectores solares, comprobamos además las normas más estrictas sobre recomendaciones."
          },
          {
            "question": "¿Se puede ampliar una campaña de Sídney a Melbourne o al resto de Australia?",
            "answer": "Sí. Muchas marcas empiezan en Sídney y añaden Melbourne, y después Brisbane, Perth y Adelaida. Mantenemos un único marco de campaña y sumamos creadores por ciudad."
          }
        ]
      },
      "cta": {
        "title": "Lanza tu campaña en Sídney",
        "description": "Cuéntanos sobre tu marca y te conectaremos con los creadores de Sídney adecuados.",
        "buttonLabel": "Contáctanos",
        "buttonHref": "/contact"
      }
    }
  },
  "melbourne": {
    "path": "/influencer-marketing-melbourne",
    "title": "Marketing de influencers para Melbourne | CA Agency",
    "description": "Marketing de influencers para Melbourne: creadores de Melbourne verificados para marcas de moda, belleza y skincare en Instagram y TikTok, con informes claros.",
    "ogImage": "/images/site/og/influencer-marketing-melbourne-v1.jpg",
    "areaServed": [
      {
        "@type": "City",
        "name": "Melbourne"
      }
    ],
    "content": {
      "hero": {
        "title": "Agencia de marketing de influencers\npara Melbourne",
        "subtitle": "CA Agency gestiona campañas de marketing de influencers para Melbourne y conecta marcas de belleza, cuidado de la piel y moda con creadores de Melbourne en Instagram, TikTok y YouTube.",
        "primaryButtonLabel": "Empezar",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Ver nuestro trabajo",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "Campañas realizadas"
        },
        {
          "value": "18M+",
          "label": "Seguidores en total"
        },
        {
          "value": "150+",
          "label": "Marcas globales"
        },
        {
          "value": "Melbourne",
          "label": "Mercado en foco"
        }
      ],
      "intro": {
        "heading": "Una agencia de marketing de influencers para campañas en Melbourne",
        "paragraphs": [
          {
            "text": "Melbourne es la capital australiana de la moda, la gastronomía, el café y la cultura, y sus creadores lo reflejan. Las marcas que buscan una agencia de influencers para Melbourne suelen querer contenido con una mirada más editorial: un estilismo meditado, opiniones firmes y una audiencia que sigue de cerca las tendencias. CA Agency planifica las campañas para Melbourne en torno a ese carácter."
          },
          {
            "text": "Los influencers de Melbourne tienden a construir comunidades fieles y participativas en torno a un punto de vista claro, ya sean las rutinas de cuidado de la piel, la moda independiente o la cultura de los callejones y las cafeterías de la ciudad. Conectamos tu marca con creadores cuyos seguidores viven en Melbourne y sus alrededores y cuyo gusto encaja con tu producto, y comprobamos los datos de audiencia antes de recomendar a nadie."
          },
          {
            "text": "No somos una agencia con sede en Melbourne. Nuestra sede central está en Dubái, con divisiones en Ámsterdam y Delaware, y gestionamos las campañas australianas a distancia, con creadores sobre el terreno. Las marcas cuentan con un solo equipo para Melbourne, Sídney y cualquier otro mercado en el que estén presentes, con los mismos informes en todas partes."
          },
          {
            "text": "Para las marcas de belleza y cuidado de la piel, incluidas las marcas de belleza coreana que entran en Australia, las campañas con creadores hacen a menudo el trabajo que tradicionalmente hacían las relaciones públicas de belleza en Melbourne: poner el producto en manos de confianza y delante de la audiencia adecuada. Incorporamos las normas australianas de identificación publicitaria en cada brief, incluidas las normas más estrictas para los productos terapéuticos, como muchos protectores solares."
          }
        ]
      },
      "process": {
        "title": "Cómo gestionamos una campaña de influencers en Melbourne",
        "steps": [
          {
            "title": "Brief y objetivos",
            "description": "Acordamos el objetivo, la audiencia, el presupuesto y los plazos, y decidimos si la campaña es solo para Melbourne o forma parte de un plan nacional."
          },
          {
            "title": "Preselección de creadores",
            "description": "Recibes una preselección de creadores de Melbourne con la ubicación de su audiencia, su engagement y sus trabajos anteriores con marcas, todo comprobado antes de recomendar a nadie."
          },
          {
            "title": "Contratos y briefing",
            "description": "Nos ocupamos de los contratos, los derechos de uso y un brief creativo que incluye la identificación publicitaria que exigen las normas australianas."
          },
          {
            "title": "Contenido y aprobación",
            "description": "Los creadores producen el contenido, nosotros lo revisamos según el brief y tú lo apruebas antes de que se publique."
          },
          {
            "title": "Informes",
            "description": "Recibes el alcance, el engagement, los clics y las conversiones por creador, con una visión clara de lo que conviene repetir."
          }
        ]
      },
      "highlights": {
        "title": "Por qué las marcas nos eligen para el marketing de influencers en Melbourne",
        "items": [
          {
            "title": "Audiencias realmente de Melbourne",
            "description": "Verificamos dónde viven los seguidores de cada creador, para que tu presupuesto llegue a personas que están en Melbourne."
          },
          {
            "title": "Creadores con estilo propio",
            "description": "Buscamos creadores con un punto de vista propio, porque las audiencias de Melbourne premian el buen gusto por encima del volumen."
          },
          {
            "title": "Foco en belleza y cuidado de la piel",
            "description": "Nuestras campañas están pensadas sobre todo para marcas de belleza, cuidado de la piel y moda, incluidos los lanzamientos de K-beauty."
          },
          {
            "title": "Un equipo, todos los mercados",
            "description": "Melbourne puede activarse por separado o junto con Sídney, acciones nacionales en Australia y campañas en otros países."
          }
        ]
      },
      "talents": {
        "title": "Creadores con los que trabajamos",
        "buttonLabel": "Ver todos los talentos",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Los sectores que mejor funcionan en Melbourne",
        "items": [
          {
            "icon": "👗",
            "title": "Moda",
            "description": "Las firmas independientes y el estilismo meditado encajan con los creadores de Melbourne, siempre a la vanguardia de la moda."
          },
          {
            "icon": "💄",
            "title": "Belleza y cuidado de la piel",
            "description": "El contenido de cuidado de la piel honesto y basado en rutinas se gana la confianza de una audiencia de Melbourne bien informada."
          },
          {
            "icon": "☕",
            "title": "Gastronomía y lifestyle",
            "description": "El contenido de cafeterías, restaurantes y cultura encaja de forma natural con los creadores de la ciudad."
          }
        ]
      },
      "faq": {
        "title": "Marketing de influencers en Melbourne: preguntas frecuentes",
        "items": [
          {
            "question": "¿Es CA Agency una agencia de influencers en Melbourne?",
            "answer": "Gestionamos campañas de marketing de influencers para Melbourne, pero no somos una agencia con sede en Melbourne. Nuestra sede central está en Dubái, con divisiones en Ámsterdam y Delaware. Un solo equipo gestiona las campañas a distancia y las llevan a cabo creadores que viven en Melbourne."
          },
          {
            "question": "¿En qué se diferencia el marketing de influencers en Melbourne del de Sídney?",
            "answer": "El contenido de Melbourne suele ser más editorial y centrado en el estilo, con fortaleza en moda, gastronomía y cultura, mientras que Sídney se inclina hacia la belleza, el fitness y un estilo de vida al aire libre. Por eso muchas campañas nacionales utilizan creadores de ambas ciudades."
          },
          {
            "question": "¿Ofrecen relaciones públicas de belleza en Melbourne?",
            "answer": "Somos una agencia de marketing de influencers, no una agencia tradicional de relaciones públicas. Para las marcas de belleza cubrimos la parte de creadores de lo que antes hacían las relaciones públicas: envío de producto, colaboraciones con creadores y contenido patrocinado con creadores de Melbourne, con informes basados en resultados claros."
          },
          {
            "question": "¿Cuánto cuesta el marketing de influencers en Melbourne?",
            "answer": "El coste depende de la plataforma, el nivel de los creadores, el número de creadores, los entregables y los derechos de uso. Definimos cada campaña para Melbourne según tu presupuesto y tus objetivos, en lugar de dar una tarifa fija."
          },
          {
            "question": "¿Se ocupan de la identificación del contenido patrocinado en Australia?",
            "answer": "Sí. El contenido pagado de los creadores debe poder distinguirse claramente como publicidad según el código publicitario australiano y la legislación de consumo. La identificación forma parte de cada brief y revisamos cada publicación antes de aprobarla."
          },
          {
            "question": "¿Se puede ampliar una campaña de Melbourne a Sídney o al resto de Australia?",
            "answer": "Sí. Mantenemos un único marco de campaña y sumamos creadores en Sídney, Brisbane, Perth y Adelaida a medida que crece el plan."
          }
        ]
      },
      "cta": {
        "title": "Lanza tu campaña en Melbourne",
        "description": "Cuéntanos sobre tu marca y te conectaremos con los creadores de Melbourne adecuados.",
        "buttonLabel": "Contáctanos",
        "buttonHref": "/contact"
      }
    }
  },
  "europe": {
    "path": "/influencer-marketing-europe",
    "title": "Agencia de influencers para campañas en Europa | CA Agency",
    "description": "Una agencia de marketing de influencers para Europa: campañas en Alemania, Francia, Suiza, países nórdicos y Reino Unido desde nuestra división de Ámsterdam.",
    "ogImage": "/images/site/og/influencer-marketing-europe-v1.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Germany"
      },
      {
        "@type": "Country",
        "name": "France"
      },
      {
        "@type": "Country",
        "name": "Switzerland"
      },
      {
        "@type": "Country",
        "name": "Sweden"
      },
      {
        "@type": "Country",
        "name": "Norway"
      },
      {
        "@type": "Country",
        "name": "Finland"
      },
      {
        "@type": "Country",
        "name": "Denmark"
      },
      {
        "@type": "Country",
        "name": "Netherlands"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      }
    ],
    "content": {
      "hero": {
        "title": "Agencia de influencers\npara campañas en Europa",
        "subtitle": "CA Agency es una agencia de marketing de influencers para Europa que gestiona campañas con creadores para marcas de belleza y cuidado de la piel en Alemania, Francia, Suiza, los países nórdicos y el Reino Unido desde nuestra división de Europa en Ámsterdam.",
        "primaryButtonLabel": "Cuéntanos tu campaña",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Ver nuestro trabajo",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "Campañas realizadas"
        },
        {
          "value": "18M+",
          "label": "Seguidores en total"
        },
        {
          "value": "150+",
          "label": "Marcas globales"
        },
        {
          "value": "Europa",
          "label": "Mercado en foco"
        }
      ],
      "intro": {
        "heading": "Una sola agencia de marketing de influencers para todos los mercados europeos",
        "paragraphs": [
          {
            "text": "Europa no es un único mercado. Una campaña que funciona en Berlín necesita otro creador, otro idioma y otro tono en París, Zúrich o Estocolmo. Como agencia de marketing de influencers de servicio integral para Europa, CA Agency planifica cada país según sus propias reglas y, aun así, gestiona toda la campaña con un solo equipo, un solo brief y un solo informe."
          },
          {
            "text": "Nuestra división de Europa trabaja desde Ámsterdam, junto con nuestra sede central en Dubái y nuestra división de Norteamérica en Delaware. Eso nos permite coordinar creadores en distintas zonas horarias e idiomas, gestionar los contratos y los derechos de uso país por país y mantener la identificación publicitaria en línea con las normas de consumo locales en cada mercado que activamos."
          },
          {
            "text": "Trabajamos sobre todo con marcas de belleza, cuidado de la piel y lifestyle, incluidas las marcas de belleza coreana que entran en Europa por primera vez. Tanto si necesitas contenido de TikTok en alemán, creadores franceses de Instagram o alcance en inglés en los países nórdicos, construimos la combinación de creadores en torno a tus objetivos y medimos cada activación con KPI claros."
          }
        ]
      },
      "caseStudies": {
        "title": "Cómo preparar un lanzamiento europeo desde España",
        "subtitle": "Si coordinas la campaña desde España, indica en el brief en qué países se puede comprar el producto, en qué idioma debe hablar cada creador y a qué tienda debe dirigir a su audiencia. Reserva un enlace por país para poder comparar los clics después del lanzamiento.",
        "items": [
          { "brand": "Purito × Ardita Gashi", "name": "Una rutina que muestra la textura y la aplicación de dos productos", "image": "/images/video-thumbs/case-purito-ardita-v1.jpg", "href": "/case-studies/purito-ardita" }
        ]
      },
      "highlights": {
        "title": "Por qué las marcas contratan a nuestra agencia de influencers para Europa",
        "items": [
          {
            "title": "Planificación país por país",
            "description": "Cada mercado tiene creadores que hablan su idioma y conocen a su audiencia, no una copia traducida de la campaña de otro país."
          },
          {
            "title": "Un equipo, muchos mercados",
            "description": "El briefing, la contratación, las aprobaciones y los informes pasan por un solo equipo, así que un lanzamiento en cinco países no implica cinco agencias."
          },
          {
            "title": "Normas locales de identificación",
            "description": "Las etiquetas publicitarias cambian según el país. Explicamos a los creadores la fórmula que se espera en cada mercado antes de que el contenido se publique."
          },
          {
            "title": "Resultados medidos",
            "description": "El alcance, el engagement, los clics y las conversiones se presentan por mercado, para que veas qué países merecen más presupuesto."
          }
        ]
      },
      "talents": {
        "title": "Creadores para campañas europeas",
        "buttonLabel": "Ver todos los talentos",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Los sectores que mejor funcionan",
        "items": [
          {
            "icon": "💄",
            "title": "Belleza",
            "description": "Los lanzamientos y tutoriales de maquillaje se trasladan bien de un mercado europeo a otro con creadores locales."
          },
          {
            "icon": "🧴",
            "title": "Cuidado de la piel",
            "description": "El contenido divulgativo sobre cuidado de la piel genera confianza entre los consumidores europeos, atentos a los ingredientes."
          },
          {
            "icon": "👗",
            "title": "Moda y lifestyle",
            "description": "El contenido de estilismo y de rutinas diarias sitúa los productos dentro de vidas europeas reales."
          }
        ]
      },
      "faq": {
        "title": "Marketing de influencers en Europa: preguntas frecuentes",
        "items": [
          {
            "question": "¿En qué países europeos gestionan campañas de influencers?",
            "answer": "Planificamos y gestionamos campañas con creadores en toda Europa, con especial atención a Alemania, Francia, Suiza, los países nórdicos (Suecia, Noruega, Finlandia y Dinamarca), los Países Bajos y el Reino Unido. Las campañas pueden desarrollarse en un solo país o en varios a la vez."
          },
          {
            "question": "¿Trabajan con creadores en los idiomas locales?",
            "answer": "Sí. Para Alemania, Francia y Suiza trabajamos con creadores que publican en el idioma local. En los países nórdicos, muchos creadores llegan a su audiencia tanto en inglés como en su propio idioma, y elegimos la combinación que mejor encaja con tu marca."
          },
          {
            "question": "¿Cómo gestionan la identificación publicitaria en Europa?",
            "answer": "El contenido pagado de los creadores debe poder reconocerse como publicidad en toda Europa, pero la fórmula que se espera cambia según el país, por ejemplo \"Werbung\" o \"Anzeige\" en Alemania y \"Publicité\" o \"Collaboration commerciale\" en Francia. Incluimos la etiqueta correcta en cada brief y la comprobamos antes de aprobar el contenido."
          },
          {
            "question": "¿Cuánto cuesta el marketing de influencers en Europa?",
            "answer": "El coste depende de los países, la plataforma, el nivel de los creadores, el número de creadores, los entregables y los derechos de uso. Definimos cada campaña según tus objetivos y tu presupuesto, en lugar de dar una tarifa fija. Cuéntanos tu presupuesto y tus mercados y diseñaremos un plan de creadores a su medida."
          },
          {
            "question": "¿Pueden lanzar una marca de belleza coreana en Europa?",
            "answer": "Sí. La K-beauty es una de nuestras categorías principales. Ayudamos a las marcas coreanas de cuidado de la piel y maquillaje a elegir sus primeros mercados europeos, las conectamos con creadores cuya audiencia ya sigue contenido de cuidado de la piel y adaptamos el mensaje a cada país."
          }
        ]
      },
      "cta": {
        "title": "Lanza tu campaña europea",
        "description": "Cuéntanos qué mercados europeos te interesan y te conectaremos con los creadores adecuados.",
        "buttonLabel": "Contáctanos",
        "buttonHref": "/contact"
      }
    }
  },
  "germany": {
    "path": "/influencer-marketing-germany",
    "title": "Marketing de influencers en Alemania | CA Agency",
    "description": "Agencia de marketing de influencers para Alemania y la región DACH: creadores de habla alemana para marcas de belleza y skincare en Instagram, TikTok y YouTube.",
    "ogImage": "/images/site/og/influencer-marketing-germany-v1.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Germany"
      },
      {
        "@type": "Country",
        "name": "Austria"
      },
      {
        "@type": "Country",
        "name": "Switzerland"
      }
    ],
    "content": {
      "hero": {
        "title": "Agencia de marketing de influencers\npara Alemania",
        "subtitle": "CA Agency es una agencia de marketing de influencers para Alemania y la región DACH que conecta marcas de belleza y cuidado de la piel con creadores de habla alemana en Instagram, TikTok y YouTube.",
        "primaryButtonLabel": "Empezar",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Ver nuestro trabajo",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "Campañas realizadas"
        },
        {
          "value": "18M+",
          "label": "Seguidores en total"
        },
        {
          "value": "150+",
          "label": "Marcas globales"
        },
        {
          "value": "DACH",
          "label": "Mercado en foco"
        }
      ],
      "intro": {
        "heading": "Una agencia de marketing de influencers para Alemania, Austria y Suiza",
        "paragraphs": [
          {
            "text": "Alemania es el mayor mercado de consumo de la Unión Europea, y el público alemán espera contenido en su propio idioma de creadores en los que ya confía. CA Agency planifica campañas de influencers para Alemania con creadores de habla alemana, para que tu producto se explique tal como lo preguntaría un cliente alemán."
          },
          {
            "text": "Los consumidores alemanes leen las listas de ingredientes, comparan reseñas y premian el contenido honesto y detallado por encima del ruido promocional. Conectamos tu marca con creadores cuya audiencia, nicho y tono responden a esa expectativa, y después gestionamos el briefing, los contratos, la aprobación del contenido y los derechos de uso desde nuestra división de Europa en Ámsterdam."
          },
          {
            "text": "Como el alemán se comparte con Austria y la mayor parte de Suiza, una sola campaña bien planificada puede llegar a toda la región DACH (Alemania, Austria y Suiza). Adaptamos la combinación de creadores y los detalles que cambian en cada país, y presentamos los resultados de cada mercado por separado."
          }
        ]
      },
      "highlights": {
        "title": "Por qué las marcas contratan a nuestra agencia de influencers para Alemania",
        "items": [
          {
            "title": "Contenido en alemán",
            "description": "Los creadores se dirigen a su audiencia en alemán, algo importante para la confianza y para las búsquedas en TikTok y YouTube."
          },
          {
            "title": "Publicidad claramente etiquetada",
            "description": "En Alemania, las publicaciones pagadas deben marcarse como \"Werbung\" o \"Anzeige\". Incorporamos la etiqueta en cada brief y la comprobamos antes de la aprobación."
          },
          {
            "title": "Alcance DACH",
            "description": "Un mismo marco de campaña puede extenderse de Alemania a Austria y a la Suiza de habla alemana."
          },
          {
            "title": "Audiencias atentas al detalle",
            "description": "Damos preferencia a los creadores que explican bien los productos, porque los compradores alemanes responden al contenido con sustancia."
          }
        ]
      },
      "talents": {
        "title": "Creadores para campañas en Alemania",
        "buttonLabel": "Ver todos los talentos",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Los sectores que mejor funcionan",
        "items": [
          {
            "icon": "🧴",
            "title": "Cuidado de la piel",
            "description": "El contenido de cuidado de la piel centrado en los ingredientes encaja con la forma en que los consumidores alemanes se informan antes de comprar."
          },
          {
            "icon": "💄",
            "title": "Belleza",
            "description": "Los tutoriales y las primeras impresiones honestas ayudan a las nuevas marcas de maquillaje a ganarse la confianza en Alemania."
          },
          {
            "icon": "💪",
            "title": "Salud y bienestar",
            "description": "El contenido de creadores basado en rutinas genera engagement a largo plazo para las marcas de bienestar."
          }
        ]
      },
      "faq": {
        "title": "Marketing de influencers en Alemania: preguntas frecuentes",
        "items": [
          {
            "question": "¿Trabajan con influencers de habla alemana?",
            "answer": "Sí. Para las campañas en Alemania, Austria y la Suiza de habla alemana trabajamos con creadores que publican en alemán y cuyos seguidores están principalmente en la región DACH."
          },
          {
            "question": "¿Cómo funciona la identificación publicitaria en Alemania?",
            "answer": "El contenido pagado de los creadores debe poder reconocerse claramente como publicidad. En la práctica, eso significa una etiqueta visible \"Werbung\" o \"Anzeige\" al inicio de la publicación, en alemán. Lo incluimos en cada brief y revisamos cada publicación antes de aprobarla."
          },
          {
            "question": "¿Qué plataformas funcionan mejor para el marketing de influencers en Alemania?",
            "answer": "Instagram y TikTok lideran en belleza, cuidado de la piel y lifestyle, y YouTube sigue siendo fuerte para las reseñas en profundidad. Recomendamos la combinación según tu audiencia y el objetivo de la campaña."
          },
          {
            "question": "¿Cuánto cuesta una campaña de influencers en Alemania?",
            "answer": "Depende de la plataforma, el nivel de los creadores, el número de creadores, los entregables y los derechos de uso. Definimos cada campaña según tu presupuesto y tus objetivos, en lugar de dar una tarifa fija."
          },
          {
            "question": "¿Puede una sola campaña cubrir Alemania, Austria y Suiza?",
            "answer": "Sí. El idioma compartido hace que las campañas DACH sean eficientes. Planificamos un único marco, sumamos creadores por país donde aporta valor y presentamos los resultados de cada mercado por separado."
          }
        ]
      },
      "cta": {
        "title": "Lanza tu campaña en Alemania",
        "description": "Llega a audiencias de habla alemana con creadores elegidos según tu marca y tus objetivos.",
        "buttonLabel": "Contáctanos",
        "buttonHref": "/contact"
      }
    }
  },
  "france": {
    "path": "/influencer-marketing-france",
    "title": "Marketing de influencers en Francia | CA Agency",
    "description": "Agencia de marketing de influencers para Francia: creadores francófonos para marcas de belleza y cuidado de la piel, con campañas conformes y bien etiquetadas.",
    "ogImage": "/images/site/og/influencer-marketing-france-v1.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "France"
      }
    ],
    "content": {
      "hero": {
        "title": "Agencia de marketing de influencers\npara Francia",
        "subtitle": "CA Agency es una agencia de marketing de influencers para Francia que conecta marcas de belleza y cuidado de la piel con creadores francófonos en Instagram, TikTok y YouTube.",
        "primaryButtonLabel": "Empezar",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Ver nuestro trabajo",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "Campañas realizadas"
        },
        {
          "value": "18M+",
          "label": "Seguidores en total"
        },
        {
          "value": "150+",
          "label": "Marcas globales"
        },
        {
          "value": "Francia",
          "label": "Mercado en foco"
        }
      ],
      "intro": {
        "heading": "Una agencia de marketing de influencers para el mercado francés",
        "paragraphs": [
          {
            "text": "Francia es uno de los mercados de belleza más exigentes del mundo. Los consumidores franceses conocen el cuidado de la piel, tienen marcas locales fuertes con las que comparar y esperan contenido en francés. CA Agency planifica campañas de influencers para Francia con creadores francófonos capaces de presentar tu marca de forma creíble ante ese público."
          },
          {
            "text": "Francia también regula el marketing con creadores más de cerca que la mayoría de los países. Desde la ley del 9 de junio de 2023 sobre la influencia comercial, el contenido pagado debe llevar una etiqueta clara \"Publicité\" o \"Collaboration commerciale\", y algunas categorías de producto están restringidas. Explicamos estas normas a los creadores y revisamos cada publicación antes de que salga."
          },
          {
            "text": "Desde nuestra división de Europa en Ámsterdam nos ocupamos de la selección de creadores, los contratos, la aprobación del contenido, los derechos de uso y los informes, para que tu equipo tenga un único punto de contacto para Francia y para cualquier mercado vecino que añadas más adelante."
          }
        ]
      },
      "highlights": {
        "title": "Por qué las marcas contratan a nuestra agencia de influencers para Francia",
        "items": [
          {
            "title": "Creadores en francés",
            "description": "El contenido lo crean en francés creadores cuyos seguidores están en Francia, no se traduce de otro mercado."
          },
          {
            "title": "Cumplimiento desde el diseño",
            "description": "Cada brief incluye la etiqueta \"Publicité\" o \"Collaboration commerciale\" exigida para el contenido pagado en Francia."
          },
          {
            "title": "Experiencia en belleza",
            "description": "Trabajamos sobre todo con marcas de belleza y cuidado de la piel y sabemos cómo posicionar un nombre nuevo junto a las marcas francesas consolidadas."
          },
          {
            "title": "Informes transparentes",
            "description": "El alcance, el engagement, los clics y las conversiones se presentan con claridad después de cada activación."
          }
        ]
      },
      "talents": {
        "title": "Creadores para campañas en Francia",
        "buttonLabel": "Ver todos los talentos",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Los sectores que mejor funcionan",
        "items": [
          {
            "icon": "💄",
            "title": "Belleza",
            "description": "El contenido de maquillaje funciona muy bien con un público francés que sigue la belleza de cerca."
          },
          {
            "icon": "🧴",
            "title": "Cuidado de la piel",
            "description": "El contenido sobre rutinas e ingredientes ayuda a las nuevas marcas de cuidado de la piel a ganarse un lugar junto a los favoritos de farmacia."
          },
          {
            "icon": "👗",
            "title": "Moda",
            "description": "El contenido de estilismo conecta a las marcas con una de las audiencias más atentas a la moda de Europa."
          }
        ]
      },
      "faq": {
        "title": "Marketing de influencers en Francia: preguntas frecuentes",
        "items": [
          {
            "question": "¿Trabajan con influencers francófonos?",
            "answer": "Sí. Las campañas para Francia se encargan a creadores que publican en francés y cuya audiencia está principalmente en Francia. El mismo enfoque funciona para la Suiza francófona y Bélgica."
          },
          {
            "question": "¿Cuáles son las normas para la publicidad con influencers en Francia?",
            "answer": "La ley francesa del 9 de junio de 2023 sobre la influencia comercial exige que el contenido pagado se etiquete claramente como \"Publicité\" o \"Collaboration commerciale\" y restringe la promoción de determinados productos y servicios. Incorporamos estos requisitos en cada brief y revisamos cada publicación antes de aprobarla."
          },
          {
            "question": "¿Qué plataformas funcionan mejor para el marketing de influencers en Francia?",
            "answer": "Instagram y TikTok lideran en belleza, cuidado de la piel y moda, y YouTube es fuerte para reseñas y rutinas más largas. Recomendamos la combinación de plataformas según tu audiencia y tus objetivos."
          },
          {
            "question": "¿Cuánto cuesta una campaña de influencers en Francia?",
            "answer": "El coste depende de la plataforma, el nivel de los creadores, el número de creadores, los entregables y los derechos de uso. Definimos cada campaña según tu presupuesto y tus objetivos, en lugar de dar una tarifa fija."
          },
          {
            "question": "¿Pueden ayudar a una marca de belleza internacional a entrar en Francia?",
            "answer": "Sí. Ayudamos a marcas de fuera de Francia, incluidas las marcas de belleza coreana, a elegir a los creadores adecuados, adaptar el mensaje a los consumidores franceses y lanzarse con contenido conforme a la normativa y creado localmente."
          }
        ]
      },
      "cta": {
        "title": "Lanza tu campaña en Francia",
        "description": "Llega a audiencias francesas con creadores elegidos según tu marca y tus objetivos.",
        "buttonLabel": "Contáctanos",
        "buttonHref": "/contact"
      }
    }
  },
  "switzerland": {
    "path": "/influencer-marketing-switzerland",
    "title": "Marketing de influencers en Suiza | CA Agency",
    "description": "Agencia de marketing de influencers para Suiza: campañas con creadores para marcas de belleza y skincare en las regiones de habla alemana, francesa e italiana.",
    "ogImage": "/images/site/og/influencer-marketing-switzerland-v1.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Switzerland"
      }
    ],
    "content": {
      "hero": {
        "title": "Agencia de marketing de influencers\npara Suiza",
        "subtitle": "CA Agency es una agencia de marketing de influencers para Suiza que gestiona campañas con creadores para marcas de belleza y cuidado de la piel en las regiones de habla alemana, francesa e italiana.",
        "primaryButtonLabel": "Empezar",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Ver nuestro trabajo",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "Campañas realizadas"
        },
        {
          "value": "18M+",
          "label": "Seguidores en total"
        },
        {
          "value": "150+",
          "label": "Marcas globales"
        },
        {
          "value": "Suiza",
          "label": "Mercado en foco"
        }
      ],
      "intro": {
        "heading": "Una agencia de marketing de influencers para la Suiza multilingüe",
        "paragraphs": [
          {
            "text": "Suiza es un mercado pequeño con un alto poder adquisitivo y varios idiomas. Una campaña para Zúrich necesita creadores de habla alemana, Ginebra y Lausana necesitan francés, y el Tesino necesita italiano. CA Agency planifica campañas de influencers para Suiza región por región, para que cada audiencia conozca tu marca en su propio idioma."
          },
          {
            "text": "Los consumidores suizos valoran la calidad y la discreción, y responden a creadores que se sienten locales y no importados. Seleccionamos creadores cuyos seguidores están realmente en Suiza, comprobamos los datos de audiencia antes de recomendar a nadie y mantenemos la publicidad claramente identificada, en línea con las normas suizas de lealtad comercial."
          },
          {
            "text": "Como Suiza comparte idiomas con Alemania, Austria y Francia, una campaña suiza puede funcionar por sí sola o integrarse en un plan DACH o europeo más amplio. Nuestra división de Europa en Ámsterdam gestiona los creadores, los contratos, las aprobaciones y los informes con un solo equipo."
          }
        ]
      },
      "highlights": {
        "title": "Por qué las marcas contratan a nuestra agencia de influencers para Suiza",
        "items": [
          {
            "title": "Tres regiones lingüísticas",
            "description": "Planificamos por separado la Suiza de habla alemana, francesa e italiana, y presentamos informes de cada una."
          },
          {
            "title": "Audiencias realmente suizas",
            "description": "Comprobamos dónde viven los seguidores de cada creador, para que el presupuesto se destine a alcance dentro de Suiza."
          },
          {
            "title": "Posicionamiento premium",
            "description": "El contenido se crea a la medida de una audiencia centrada en la calidad y con altas expectativas hacia las marcas."
          },
          {
            "title": "Parte de un plan más amplio",
            "description": "Las acciones en Suiza pueden conectarse con campañas en Alemania, Austria y Francia sin agencias adicionales."
          }
        ]
      },
      "talents": {
        "title": "Creadores para campañas en Suiza",
        "buttonLabel": "Ver todos los talentos",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Los sectores que mejor funcionan",
        "items": [
          {
            "icon": "🧴",
            "title": "Cuidado de la piel",
            "description": "El cuidado de la piel premium encaja con una audiencia suiza que paga por la calidad y los resultados demostrados."
          },
          {
            "icon": "💄",
            "title": "Belleza",
            "description": "Aquí el contenido de belleza meditado y honesto funciona mejor que la promoción estridente."
          },
          {
            "icon": "⌚",
            "title": "Lujo y lifestyle",
            "description": "El contenido de los creadores sitúa los productos premium dentro de un día a día aspiracional pero creíble."
          }
        ]
      },
      "faq": {
        "title": "Marketing de influencers en Suiza: preguntas frecuentes",
        "items": [
          {
            "question": "¿Qué regiones lingüísticas de Suiza cubren?",
            "answer": "Planificamos campañas para la Suiza de habla alemana, francesa e italiana. La mayoría de las marcas empiezan por la región de habla alemana y añaden creadores francófonos para lograr alcance nacional."
          },
          {
            "question": "¿Puedo reutilizar mi campaña alemana o francesa en Suiza?",
            "answer": "En parte. El idioma se mantiene, pero las audiencias suizas responden mejor a creadores que viven en Suiza. Normalmente conservamos la idea de la campaña y sumamos creadores suizos para llevarla a cabo."
          },
          {
            "question": "¿Cómo se identifica el contenido patrocinado en Suiza?",
            "answer": "El contenido pagado de los creadores debe poder reconocerse claramente como publicidad según las normas suizas de lealtad comercial. Incluimos una etiqueta publicitaria clara en cada brief y la comprobamos antes de aprobar una publicación."
          },
          {
            "question": "¿Cuánto cuesta una campaña de influencers en Suiza?",
            "answer": "El coste depende de las regiones lingüísticas, la plataforma, el nivel de los creadores, el número de creadores y los derechos de uso. Definimos cada campaña según tu presupuesto y tus objetivos, en lugar de dar una tarifa fija."
          }
        ]
      },
      "cta": {
        "title": "Lanza tu campaña en Suiza",
        "description": "Llega a audiencias suizas en el idioma adecuado con creadores elegidos según tu marca.",
        "buttonLabel": "Contáctanos",
        "buttonHref": "/contact"
      }
    }
  },
  "nordics": {
    "path": "/influencer-marketing-nordics",
    "title": "Marketing de influencers: países nórdicos | CA Agency",
    "description": "Agencia de marketing de influencers para los países nórdicos: campañas de belleza y skincare en Suecia, Noruega, Finlandia y Dinamarca, mercado a mercado.",
    "ogImage": "/images/site/og/influencer-marketing-nordics-v1.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Sweden"
      },
      {
        "@type": "Country",
        "name": "Norway"
      },
      {
        "@type": "Country",
        "name": "Finland"
      },
      {
        "@type": "Country",
        "name": "Denmark"
      }
    ],
    "content": {
      "hero": {
        "title": "Agencia de marketing de influencers\npara los países nórdicos",
        "subtitle": "CA Agency es una agencia de marketing de influencers para los países nórdicos que gestiona campañas con creadores para marcas de belleza y cuidado de la piel en Suecia, Noruega, Finlandia y Dinamarca.",
        "primaryButtonLabel": "Empezar",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Ver nuestro trabajo",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "Campañas realizadas"
        },
        {
          "value": "18M+",
          "label": "Seguidores en total"
        },
        {
          "value": "150+",
          "label": "Marcas globales"
        },
        {
          "value": "Países nórdicos",
          "label": "Mercado en foco"
        }
      ],
      "intro": {
        "heading": "Una agencia de marketing de influencers para Suecia, Noruega, Finlandia y Dinamarca",
        "paragraphs": [
          {
            "text": "Los países nórdicos están entre los mercados más digitales de Europa. Las audiencias de Suecia, Noruega, Finlandia y Dinamarca pasan mucho tiempo en Instagram, TikTok y YouTube, compran en línea con confianza y esperan que las marcas sean honestas y sobrias. CA Agency planifica campañas de influencers para los países nórdicos en torno a esa expectativa."
          },
          {
            "text": "Cada país nórdico tiene su propio idioma y sus propios creadores, y un creador sueco no llega automáticamente a Noruega ni a Finlandia. Planificamos Estocolmo, Oslo, Helsinki y Copenhague como audiencias separadas, elegimos en cada mercado entre contenido en el idioma local y contenido en inglés, y mantenemos la publicidad claramente identificada, en línea con las normas de consumo de cada país."
          },
          {
            "text": "A los consumidores nórdicos les importan los ingredientes, la sostenibilidad y la transparencia, lo que hace que la región encaje bien con el cuidado de la piel y la clean beauty. Desde nuestra división de Europa en Ámsterdam gestionamos los creadores, los contratos, las aprobaciones y los informes para un solo país nórdico o para los cuatro."
          }
        ]
      },
      "highlights": {
        "title": "Por qué las marcas contratan a nuestra agencia de influencers para los países nórdicos",
        "items": [
          {
            "title": "Cuatro mercados, un plan",
            "description": "Suecia, Noruega, Finlandia y Dinamarca se planifican por separado y se gestionan con un solo equipo."
          },
          {
            "title": "Contenido honesto y sobrio",
            "description": "Orientamos a los creadores hacia el tono sereno y creíble en el que confían las audiencias nórdicas."
          },
          {
            "title": "Publicidad claramente identificada",
            "description": "Las autoridades de consumo nórdicas esperan que las publicaciones pagadas se identifiquen con claridad. Cada brief incluye la etiqueta correcta."
          },
          {
            "title": "Idioma local o inglés",
            "description": "Elegimos en cada mercado entre contenido en el idioma local y contenido en inglés, según tu audiencia."
          }
        ]
      },
      "talents": {
        "title": "Creadores para campañas nórdicas",
        "buttonLabel": "Ver todos los talentos",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Los sectores que mejor funcionan",
        "items": [
          {
            "icon": "🧴",
            "title": "Cuidado de la piel",
            "description": "Los consumidores nórdicos, atentos a los ingredientes, responden a un contenido de cuidado de la piel claro y divulgativo."
          },
          {
            "icon": "🌿",
            "title": "Clean beauty",
            "description": "Los mensajes de transparencia y sostenibilidad importan, y los creadores ayudan a explicarlos de forma creíble."
          },
          {
            "icon": "🏃",
            "title": "Lifestyle y bienestar",
            "description": "El contenido de rutinas diarias encaja con el estilo de vida nórdico, activo y orientado al aire libre."
          }
        ]
      },
      "faq": {
        "title": "Marketing de influencers en los países nórdicos: preguntas frecuentes",
        "items": [
          {
            "question": "¿En qué países nórdicos gestionan campañas de influencers?",
            "answer": "Suecia, Noruega, Finlandia y Dinamarca. Las campañas pueden desarrollarse en un solo país o en toda la región, con creadores seleccionados para cada mercado."
          },
          {
            "question": "¿Las campañas nórdicas deben hacerse en inglés o en el idioma local?",
            "answer": "Ambas opciones pueden funcionar. El inglés se entiende ampliamente en los países nórdicos, pero el contenido en el idioma local suele resultar más cercano y generar más confianza. Recomendamos la combinación para cada mercado, según tu marca y tu audiencia."
          },
          {
            "question": "¿Cómo se identifica el contenido patrocinado en los países nórdicos?",
            "answer": "La autoridad de consumo de cada país espera que el contenido pagado se identifique claramente como publicidad al inicio de la publicación, de una forma que la audiencia entienda. Incluimos la fórmula correcta en cada brief y la comprobamos antes de la aprobación."
          },
          {
            "question": "¿Basta un solo creador para llegar a toda la región?",
            "answer": "Rara vez. Los seguidores se concentran en el país del propio creador, por lo que normalmente planificamos al menos un grupo de creadores por mercado y presentamos los resultados de cada país por separado."
          },
          {
            "question": "¿Cuánto cuesta una campaña de influencers en los países nórdicos?",
            "answer": "El coste depende del número de países, la plataforma, el nivel de los creadores, los entregables y los derechos de uso. Definimos cada campaña según tu presupuesto y tus objetivos, en lugar de dar una tarifa fija."
          }
        ]
      },
      "cta": {
        "title": "Lanza tu campaña nórdica",
        "description": "Llega a audiencias de Suecia, Noruega, Finlandia y Dinamarca con creadores elegidos según tu marca.",
        "buttonLabel": "Contáctanos",
        "buttonHref": "/contact"
      }
    }
  }
}
