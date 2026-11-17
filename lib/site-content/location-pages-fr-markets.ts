import type { TranslatedLocationPage } from '@/lib/site-content/location-pages-translated'

// French versions of the market pages that are not in location-pages-fr.ts,
// served at /fr/<path>. Translated from the English defaults; not editable
// in the admin. Plain data: keys are the market keys from lib/data/locations.ts.

export const frenchMarketPages: Record<string, TranslatedLocationPage> = {
  "dubai": {
    "path": "/influencer-marketing-dubai",
    "title": "Agence de marketing d'influence à Dubaï | CA Agency",
    "description": "CA Agency, agence de marketing d'influence à Dubaï : campagnes Instagram, TikTok et YouTube avec des créateurs sélectionnés à Dubaï et aux Émirats.",
    "ogImage": "/images/site/og/influencer-marketing-dubai-v2.jpg",
    "areaServed": [
      {
        "@type": "City",
        "name": "Dubai"
      }
    ],
    "content": {
      "hero": {
        "title": "Agence de marketing\nd'influence à Dubaï",
        "subtitle": "CA Agency est une agence de marketing d'influence à Dubaï. Nous aidons les marques à lancer des campagnes Instagram, TikTok et YouTube performantes avec des créateurs sélectionnés avec soin dans tous les Émirats arabes unis.",
        "primaryButtonLabel": "Commencer",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Voir nos réalisations",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "Campagnes réalisées"
        },
        {
          "value": "18M+",
          "label": "Abonnés cumulés"
        },
        {
          "value": "150+",
          "label": "Marques internationales"
        },
        {
          "value": "Émirats",
          "label": "Marché principal"
        }
      ],
      "highlights": {
        "title": "Pourquoi les marques choisissent notre agence d'influence à Dubaï",
        "items": [
          {
            "title": "Une expertise du marché local",
            "description": "Nous concevons nos campagnes d'influence selon la façon dont le public de Dubaï découvre, compare et achète dans le luxe, la beauté, la mode, l'hôtellerie et le lifestyle."
          },
          {
            "title": "Une portée régionale",
            "description": "Les campagnes lancées avec des créateurs de Dubaï peuvent s'étendre efficacement à Abu Dhabi et à l'ensemble des pays du Golfe lorsque le brief demande une portée plus large."
          },
          {
            "title": "Un réseau de créateurs sélectionnés",
            "description": "Notre agence identifie des créateurs qui ont fait leurs preuves : qualité des contenus, adéquation de l'audience et exécution sûre pour la marque sur Instagram, TikTok et YouTube."
          },
          {
            "title": "Une exécution axée sur la performance",
            "description": "Nous visons des résultats mesurables, comme un trafic qualifié, des conversions et la performance des contenus de marque, plutôt que les seuls indicateurs de vanité."
          }
        ]
      },
      "talents": {
        "title": "Nos créateurs pour le marché de Dubaï",
        "buttonLabel": "Voir tous les talents",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Les secteurs les plus performants",
        "items": [
          {
            "icon": "🏨",
            "title": "Hôtellerie",
            "description": "À Dubaï, les campagnes pour les hôtels, la restauration et les destinations réussissent très bien grâce aux contenus courts des créateurs."
          },
          {
            "icon": "💄",
            "title": "Beauté",
            "description": "Les lancements de soins de la peau, de maquillage et de beauté de luxe obtiennent de très bons résultats grâce à la pédagogie des créateurs et à la confiance qu'ils inspirent."
          },
          {
            "icon": "👗",
            "title": "Mode",
            "description": "Le public de Dubaï réagit bien aux collaborations autour du style premium, du shopping et des tendances."
          }
        ]
      },
      "cta": {
        "title": "Lancez votre campagne à Dubaï",
        "description": "Touchez le bon public à Dubaï avec des créateurs en phase avec votre marque et vos objectifs.",
        "buttonLabel": "Nous contacter",
        "buttonHref": "/contact"
      }
    }
  },
  "uae": {
    "path": "/influencer-marketing-uae",
    "title": "Marketing d'influence aux Émirats arabes unis | CA Agency",
    "description": "CA Agency est une agence de marketing d'influence aux Émirats arabes unis : des campagnes avec des créateurs à Dubaï, Abu Dhabi, Sharjah et au-delà.",
    "ogImage": "/images/site/og/influencer-marketing-uae-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      }
    ],
    "content": {
      "hero": {
        "title": "Agence de marketing d'influence\naux Émirats arabes unis",
        "subtitle": "CA Agency est une agence de marketing d'influence aux Émirats arabes unis. Nous mettons en relation les marques avec des créateurs à Dubaï, Abu Dhabi, Sharjah et au-delà, pour des campagnes axées sur la performance sur Instagram, TikTok et YouTube.",
        "primaryButtonLabel": "Lancer votre campagne",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Rencontrer nos créateurs",
        "secondaryButtonHref": "/talents"
      },
      "stats": [
        {
          "value": "Nationale",
          "label": "Couverture"
        },
        {
          "value": "Multi-villes",
          "label": "Réseau de créateurs"
        },
        {
          "value": "Multiplateforme",
          "label": "Gestion des campagnes"
        },
        {
          "value": "Régionale",
          "label": "Portée des marques"
        }
      ],
      "highlights": {
        "title": "Pourquoi les marques choisissent notre agence d'influence aux Émirats",
        "items": [
          {
            "title": "Des créateurs dans tout le pays",
            "description": "Nous activons des créateurs à Dubaï, Abu Dhabi, Sharjah et dans les autres émirats en fonction de l'adéquation de leur audience, et pas seulement de leur nombre d'abonnés."
          },
          {
            "title": "Des campagnes multiplateformes",
            "description": "Notre équipe gère vos campagnes d'influence de bout en bout sur Instagram, TikTok et YouTube, en tenant compte des particularités du marché local."
          },
          {
            "title": "Une portée en arabe et en anglais",
            "description": "Nous aidons les marques à allier pertinence locale et attrait international auprès des publics multilingues des Émirats."
          },
          {
            "title": "Une approche commerciale",
            "description": "Nos campagnes aux Émirats sont conçues pour servir vos objectifs de notoriété, de considération, de trafic et de conversion, avec un reporting clair."
          }
        ]
      },
      "talents": {
        "title": "Nos créateurs aux Émirats",
        "buttonLabel": "Voir tous les talents",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Nos services d'influence aux Émirats",
        "items": [
          {
            "icon": "📣",
            "title": "Gestion de campagnes",
            "description": "L'exécution de vos campagnes d'influence de bout en bout sur Instagram, TikTok et YouTube."
          },
          {
            "icon": "🎯",
            "title": "Sélection des talents",
            "description": "Un accès aux meilleurs créateurs des Émirats dans la beauté, la mode, le lifestyle, la gastronomie et la tech."
          },
          {
            "icon": "🎥",
            "title": "Production de contenus",
            "description": "Des contenus de marque de grande qualité, qui parlent aux publics des Émirats."
          }
        ]
      },
      "cta": {
        "title": "Lancez votre campagne d'influence aux Émirats",
        "description": "Touchez les publics des Émirats avec une agence de marketing d'influence qui associe votre marque aux bons créateurs et à la bonne stratégie de campagne.",
        "buttonLabel": "Nous contacter",
        "buttonHref": "/contact"
      }
    }
  },
  "saudiArabia": {
    "path": "/influencer-marketing-saudi-arabia",
    "title": "Marketing d'influence en Arabie saoudite | CA Agency",
    "description": "Touchez le public saoudien grâce à des partenariats avec des créateurs, pensés pour Riyad, Djeddah et l'ensemble du marché saoudien.",
    "ogImage": "/images/site/og/influencer-marketing-saudi-arabia-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Saudi Arabia"
      }
    ],
    "content": {
      "hero": {
        "title": "Agence de marketing d'influence\npour l'Arabie saoudite",
        "subtitle": "Collaborez avec des créateurs qui trouvent un écho à Riyad, à Djeddah et sur l'ensemble du marché saoudien, grâce à des campagnes respectueuses de la culture locale et axées sur la performance.",
        "primaryButtonLabel": "Lancer votre campagne",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Voir nos réalisations",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "Élevé",
          "label": "Usage du mobile"
        },
        {
          "value": "Rapide",
          "label": "Croissance de l'économie des créateurs"
        },
        {
          "value": "Forte",
          "label": "Demande en beauté et en mode"
        },
        {
          "value": "Régionale",
          "label": "Influence"
        }
      ],
      "highlights": {
        "title": "Pourquoi miser sur le marketing d'influence en Arabie saoudite ?",
        "items": [
          {
            "title": "Un public jeune et connecté",
            "description": "L'Arabie saoudite compte une population très connectée, qui privilégie le mobile et interagit activement avec les créateurs."
          },
          {
            "title": "Une stratégie guidée par la culture",
            "description": "Les campagnes fonctionnent le mieux lorsque le message, les formats et les créateurs correspondent à la culture locale et aux attentes du public."
          },
          {
            "title": "Une forte confiance envers les créateurs",
            "description": "Le public s'appuie souvent sur les recommandations des créateurs pour découvrir des produits et décider de ses achats."
          },
          {
            "title": "Une adoption rapide par les marques",
            "description": "De plus en plus de marques réorientent leurs budgets vers les partenariats avec des créateurs pour gagner en portée et en pertinence."
          }
        ]
      },
      "talents": {
        "title": "Nos créateurs pour le marché saoudien",
        "buttonLabel": "Voir tous les talents",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Les secteurs les plus performants",
        "items": [
          {
            "icon": "💄",
            "title": "Beauté",
            "description": "Les contenus et tutoriels beauté sont un moteur majeur de découverte et d'essai des produits."
          },
          {
            "icon": "👗",
            "title": "Mode",
            "description": "La mode modeste, le style premium et les campagnes saisonnières obtiennent de très bons résultats."
          },
          {
            "icon": "📱",
            "title": "Tech et lifestyle",
            "description": "Les lancements tech et les créateurs lifestyle du quotidien aident les marques à paraître actuelles et proches de leur public."
          }
        ]
      },
      "cta": {
        "title": "Lancez votre campagne en Arabie saoudite",
        "description": "Construisez des partenariats avec des créateurs que le public saoudien perçoit comme authentiques.",
        "buttonLabel": "Nous contacter",
        "buttonHref": "/contact"
      }
    }
  },
  "gcc": {
    "path": "/influencer-marketing-gcc",
    "title": "Marketing d'influence dans les pays du Golfe | CA Agency",
    "description": "Déployez vos campagnes avec des créateurs dans les pays du Golfe (CCG) grâce à une stratégie de marketing d'influence coordonnée entre les marchés.",
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
        "title": "Agence de marketing d'influence\npour les pays du Golfe",
        "subtitle": "Menez vos campagnes avec des créateurs dans tout le CCG grâce à une stratégie de marketing d'influence coordonnée, qui couvre les Émirats arabes unis, l'Arabie saoudite, le Qatar, le Koweït, Bahreïn et Oman.",
        "primaryButtonLabel": "Commencer",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Rencontrer nos talents",
        "secondaryButtonHref": "/talents"
      },
      "stats": [
        {
          "value": "6",
          "label": "Marchés clés"
        },
        {
          "value": "Régionale",
          "label": "Coordination des campagnes"
        },
        {
          "value": "Multilingue",
          "label": "Exécution"
        },
        {
          "value": "Transfrontalière",
          "label": "Portée des créateurs"
        }
      ],
      "highlights": {
        "title": "Pourquoi les marques nous confient leurs campagnes d'influence dans le Golfe",
        "items": [
          {
            "title": "Une cohérence régionale",
            "description": "Gardez un message de marque cohérent tout en adaptant les contenus à chaque marché."
          },
          {
            "title": "Une portée extensible",
            "description": "Coordonnez plusieurs créateurs et plusieurs pays sans multiplier le travail de vos équipes internes."
          },
          {
            "title": "Une pertinence locale",
            "description": "Appuyez-vous sur des créateurs qui connaissent leur marché et sur des structures de campagne qui reflètent les nuances de chaque public."
          },
          {
            "title": "Une organisation simple",
            "description": "Gérez les briefs, les validations, les contenus et le reporting avec un seul partenaire."
          }
        ]
      },
      "talents": {
        "title": "Des créateurs pour vos campagnes dans le Golfe",
        "buttonLabel": "Voir tous les talents",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Les secteurs les plus performants",
        "items": [
          {
            "icon": "✈️",
            "title": "Voyage et hôtellerie",
            "description": "Les campagnes pour les destinations et l'hôtellerie se déploient particulièrement bien dans toute la région."
          },
          {
            "icon": "💄",
            "title": "Beauté",
            "description": "Les marques de beauté profitent de la forte confiance accordée aux créateurs et des contenus de type tutoriel."
          },
          {
            "icon": "🛍️",
            "title": "Distribution",
            "description": "Les lancements dans la distribution fonctionnent bien lorsqu'ils sont adaptés localement par des créateurs dans chaque marché."
          }
        ]
      },
      "cta": {
        "title": "Planifiez votre déploiement dans le Golfe",
        "description": "Coordonnez un même cadre de campagne sur plusieurs marchés du Golfe.",
        "buttonLabel": "Nous contacter",
        "buttonHref": "/contact"
      }
    }
  },
  "korea": {
    "path": "/influencer-marketing-korea",
    "title": "Marketing d'influence en Corée | CA Agency",
    "description": "CA Agency aide les marques à toucher le public coréen grâce à des campagnes d'influence localisées en beauté, mode, lifestyle et tech.",
    "ogImage": "/images/site/og/influencer-marketing-korea-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "South Korea"
      }
    ],
    "content": {
      "hero": {
        "title": "Agence de marketing d'influence\npour la Corée",
        "subtitle": "CA Agency aide les marques à toucher le public coréen grâce à des campagnes de marketing d'influence localisées dans la beauté, la mode, le lifestyle et la tech.",
        "primaryButtonLabel": "Commencer",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Voir nos réalisations",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "Guidé par les tendances",
          "label": "Comportement des consommateurs"
        },
        {
          "value": "Forte",
          "label": "Adoption des produits de beauté"
        },
        {
          "value": "Fort",
          "label": "Social commerce"
        },
        {
          "value": "Rapide",
          "label": "Rythme des campagnes"
        }
      ],
      "highlights": {
        "title": "Pourquoi les marques nous confient leurs campagnes d'influence en Corée",
        "items": [
          {
            "title": "Un marché leader de la beauté",
            "description": "La Corée est l'un des marchés de la beauté les plus influents au monde, et les créateurs y font autorité."
          },
          {
            "title": "Un public sensible aux tendances",
            "description": "Le public réagit aux formats nouveaux, aux visuels soignés et aux messages en phase avec la culture du moment."
          },
          {
            "title": "Le poids de la preuve sociale",
            "description": "Les créateurs jouent un rôle majeur pour valider les produits et donner envie de les essayer."
          },
          {
            "title": "Un positionnement tourné vers l'international",
            "description": "Les campagnes coréennes servent souvent à la fois la visibilité locale et l'image de la marque à l'international."
          }
        ]
      },
      "talents": {
        "title": "Nos créateurs pour le marché coréen",
        "buttonLabel": "Voir tous les talents",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Les secteurs les plus performants",
        "items": [
          {
            "icon": "💄",
            "title": "Beauté et soins de la peau",
            "description": "Les contenus qui expliquent le produit de façon pédagogique fonctionnent particulièrement bien en Corée."
          },
          {
            "icon": "👟",
            "title": "Mode et streetwear",
            "description": "Les contenus de style des créateurs ancrent la marque dans les tendances et renforcent son prestige."
          },
          {
            "icon": "📲",
            "title": "Tech et gadgets",
            "description": "Les démonstrations de produits et leur intégration dans des contenus lifestyle aident les marques tech à se démarquer."
          }
        ]
      },
      "cta": {
        "title": "Lancez votre campagne en Corée",
        "description": "Construisez des partenariats avec des créateurs, culturellement pertinents pour le marché coréen.",
        "buttonLabel": "Nous contacter",
        "buttonHref": "/contact"
      }
    }
  },
  "asia": {
    "path": "/influencer-marketing-asia",
    "title": "Marketing d'influence en Asie | CA Agency",
    "description": "CA Agency aide les marques à mener des campagnes de marketing d'influence en Asie, avec une stratégie de créateurs localisée et une exécution multi-marchés.",
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
        "title": "Agence de marketing d'influence\npour l'Asie",
        "subtitle": "CA Agency aide les marques à mener des campagnes de marketing d'influence en Asie, avec des créateurs qui connaissent leur marché, une stratégie localisée et une gestion de campagne transfrontalière.",
        "primaryButtonLabel": "Lancer votre campagne",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Voir nos réalisations",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "Multi-marchés",
          "label": "Gestion des campagnes"
        },
        {
          "value": "Régional",
          "label": "Réseau de créateurs"
        },
        {
          "value": "Localisée",
          "label": "Stratégie par marché"
        },
        {
          "value": "Multiplateforme",
          "label": "Exécution"
        }
      ],
      "highlights": {
        "title": "Pourquoi les marques ont besoin d'une agence d'influence pour l'Asie",
        "items": [
          {
            "title": "Chaque marché a ses nuances",
            "description": "L'Asie n'est pas un public unique. Nous adaptons la sélection des créateurs, le message et les formats de contenu à chaque marché et aux comportements de ses consommateurs."
          },
          {
            "title": "Une coordination transfrontalière",
            "description": "Nous aidons les marques à gérer les briefs, les validations, la production et le reporting sur plusieurs marchés asiatiques, sans fragmenter l'exécution."
          },
          {
            "title": "Une stratégie adaptée aux plateformes",
            "description": "Les campagnes reposent sur la bonne combinaison d'Instagram, de TikTok, de YouTube et des usages des plateformes locales, selon le marché visé."
          },
          {
            "title": "Une performance commerciale",
            "description": "Nous ne visons pas seulement la portée. Nous concevons nos campagnes avec des créateurs pour servir vos objectifs de notoriété, de considération, de trafic et de conversion."
          }
        ]
      },
      "talents": {
        "title": "Des créateurs pour vos campagnes en Asie",
        "buttonLabel": "Voir tous les talents",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Les catégories les plus performantes en Asie",
        "items": [
          {
            "icon": "💄",
            "title": "Beauté et soins de la peau",
            "description": "Les marques de beauté profitent des contenus pédagogiques, de l'essai des produits et de la forte confiance accordée aux créateurs dans de nombreux marchés asiatiques."
          },
          {
            "icon": "📱",
            "title": "Tech et mobile",
            "description": "Les créateurs aident les marques tech à expliquer les fonctionnalités, à différencier leurs produits et à générer des conversions grâce aux démonstrations et aux avis."
          },
          {
            "icon": "🧳",
            "title": "Voyage et hôtellerie",
            "description": "La demande de voyages dans la région et les contenus consacrés aux destinations rendent les partenariats avec des créateurs efficaces pour la notoriété et les réservations."
          }
        ]
      },
      "cta": {
        "title": "Lancez votre campagne d'influence en Asie",
        "description": "Travaillez avec une agence de marketing d'influence capable de coordonner créateurs, contenus et stratégie sur les marchés asiatiques.",
        "buttonLabel": "Nous contacter",
        "buttonHref": "/contact"
      }
    }
  },
  "usa": {
    "path": "/influencer-marketing-usa",
    "title": "Marketing d'influence aux États-Unis | CA Agency",
    "description": "CA Agency est une agence de marketing d'influence pour les États-Unis : des campagnes avec des créateurs sur Instagram, TikTok et YouTube.",
    "ogImage": "/images/site/og/influencer-marketing-usa-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States"
      }
    ],
    "content": {
      "hero": {
        "title": "Agence de marketing d'influence\npour les États-Unis",
        "subtitle": "CA Agency est une agence de marketing d'influence pour les États-Unis. Nous aidons les marques à mener des campagnes axées sur la performance avec des créateurs sur Instagram, TikTok et YouTube.",
        "primaryButtonLabel": "Commencer",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Voir nos réalisations",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "6,2 Md$",
          "label": "Taille du marché américain en 2025"
        },
        {
          "value": "84 %",
          "label": "Des adultes sur YouTube"
        },
        {
          "value": "75 %",
          "label": "Des marketeurs utilisent Instagram"
        },
        {
          "value": "60 %",
          "label": "Utilisent TikTok en marketing"
        }
      ],
      "intro": {
        "heading": "Une agence de marketing d'influence pour le marché américain",
        "paragraphs": [
          {
            "text": "Agence de marketing d'influence à service complet pour les États-Unis, CA Agency aide les marques à transformer le travail des créateurs américains en croissance mesurable. De New York et Los Angeles à Miami et Austin, nous concevons des campagnes avec des créateurs qui touchent le public américain là où il passe déjà son temps, sur Instagram, TikTok et YouTube, et nous relions chaque activation à de vrais résultats commerciaux."
          },
          {
            "text": "L'économie des créateurs aux États-Unis est la plus vaste et la plus concurrentielle au monde. L'écart entre une campagne qui génère des ventes et une campagne qui passe inaperçue tient donc à la sélection des créateurs, au brief et à la mesure. Notre équipe prend en charge les trois : nous associons votre marque à des influenceurs américains sélectionnés avec soin, dont l'audience, la niche et l'engagement correspondent réellement à votre produit, puis nous gérons de bout en bout les contrats, la validation des contenus, les droits d'utilisation et les mentions de partenariat conformes aux règles de la FTC."
          },
          {
            "text": "Que vous soyez une marque de beauté en vente directe (DTC) qui se lance sur TikTok Shop, une entreprise SaaS qui construit son autorité sur YouTube ou un distributeur qui développe ses contenus UGC pour la publicité sur les réseaux sociaux, nous composons la bonne combinaison de micro-créateurs, de créateurs intermédiaires et de macro-créateurs selon vos objectifs et votre budget. Chaque campagne fait l'objet d'un reporting fondé sur des KPI clairs, portée, engagement, clics et conversions, pour que vous sachiez toujours ce que votre budget de marketing d'influence a rapporté."
          }
        ]
      },
      "highlights": {
        "title": "Pourquoi les marques nous confient leurs campagnes d'influence aux États-Unis",
        "items": [
          {
            "title": "Le plus grand marché au monde",
            "description": "L'économie des créateurs aux États-Unis offre de l'ampleur, une infrastructure mature et une performance éprouvée dans tous les secteurs."
          },
          {
            "title": "Une forte confiance des consommateurs",
            "description": "Les consommateurs s'appuient sur les créateurs pour découvrir des produits, les valider et acheter en confiance."
          },
          {
            "title": "Des plateformes variées",
            "description": "Des écosystèmes de créateurs solides existent sur YouTube, Instagram, TikTok et les canaux émergents."
          },
          {
            "title": "L'avantage des micro-influenceurs",
            "description": "Les créateurs à plus petite audience obtiennent souvent de meilleurs résultats en engagement et en rapport coût-efficacité."
          }
        ]
      },
      "talents": {
        "title": "Nos créateurs pour le marché américain",
        "buttonLabel": "Voir tous les talents",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Les secteurs les plus performants",
        "items": [
          {
            "icon": "💄",
            "title": "Beauté et soins personnels",
            "description": "Les micro-influenceurs aident les marques de beauté à susciter l'essai des produits et la conversion."
          },
          {
            "icon": "👗",
            "title": "Mode et distribution",
            "description": "Les contenus de style en format court servent à la fois la notoriété de la marque et les ventes directes."
          },
          {
            "icon": "💪",
            "title": "Santé et bien-être",
            "description": "Les créateurs bien-être aident les marques à instaurer la confiance et un engagement régulier."
          }
        ]
      },
      "faq": {
        "title": "Marketing d'influence aux États-Unis : questions fréquentes",
        "items": [
          {
            "question": "Combien coûte le marketing d'influence aux États-Unis ?",
            "answer": "Il n'existe pas de tarif unique pour le marketing d'influence aux États-Unis. Le coût dépend de la plateforme, des profils de créateurs concernés (des micro aux macro-créateurs), du nombre de créateurs, des contenus à produire et des droits d'utilisation. Plutôt que d'annoncer un tarif fixe, CA Agency dimensionne chaque campagne selon vos objectifs et votre budget et relie l'investissement à des résultats mesurables : vous investissez dans des résultats, et pas seulement dans un nombre d'abonnés. Indiquez-nous votre budget et vos objectifs, et nous composerons une sélection de créateurs en conséquence."
          },
          {
            "question": "Quelles plateformes fonctionnent le mieux pour le marketing d'influence aux États-Unis ?",
            "answer": "Instagram, TikTok et YouTube dominent le marketing d'influence aux États-Unis. Instagram et TikTok sont en tête pour la beauté, la mode et le lifestyle, TikTok favorise la découverte et la portée virale, et YouTube est le plus efficace pour les avis détaillés, la tech et les achats qui demandent plus de réflexion. Nous recommandons la combinaison de plateformes selon votre audience et vos objectifs."
          },
          {
            "question": "Comment trouvez-vous les bons influenceurs américains pour ma marque ?",
            "answer": "Nous évaluons les créateurs sur la démographie de leur audience, la qualité de l'engagement, le style de contenu, la sécurité de la marque et les performances passées, et pas seulement sur le nombre d'abonnés. Chaque créateur est choisi en fonction de votre client cible, de votre catégorie et de l'objectif de la campagne avant que nous vous le recommandions."
          },
          {
            "question": "Gérez-vous les mentions exigées par la FTC et les contrats des créateurs ?",
            "answer": "Oui. Nous gérons de bout en bout les contrats des créateurs, les droits d'utilisation et de whitelisting, la validation des contenus et les mentions conformes aux règles de la FTC (par exemple la mention #ad), afin que vos campagnes restent conformes et fidèles à votre marque."
          },
          {
            "question": "Comment mesurez-vous les résultats d'une campagne d'influence ?",
            "answer": "Chaque campagne est rattachée à des KPI clairs, portée, impressions, taux d'engagement, clics sur les liens et conversions, avec un reporting transparent qui vous montre exactement ce que votre budget a rapporté."
          },
          {
            "question": "Pouvez-vous mener des campagnes nationales ou ciblées sur certaines villes américaines ?",
            "answer": "Les deux. Nous menons des campagnes à l'échelle nationale aux États-Unis et pouvons aussi cibler des marchés précis comme New York, Los Angeles, Miami ou Chicago, avec des créateurs pertinents pour chaque région."
          }
        ]
      },
      "cta": {
        "title": "Lancez votre campagne aux États-Unis",
        "description": "Touchez le public américain avec des créateurs choisis selon votre audience et vos objectifs.",
        "buttonLabel": "Nous contacter",
        "buttonHref": "/contact"
      }
    }
  },
  "uk": {
    "path": "/influencer-marketing-uk",
    "title": "Marketing d'influence au Royaume-Uni | CA Agency",
    "description": "Menez vos campagnes d'influence au Royaume-Uni avec des créateurs britanniques sur Instagram, TikTok et YouTube : stratégie axée performance, reporting clair.",
    "ogImage": "/images/site/og/influencer-marketing-uk-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "United Kingdom"
      }
    ],
    "content": {
      "hero": {
        "title": "Agence de marketing d'influence\npour le Royaume-Uni",
        "subtitle": "Associez votre marque aux créateurs de contenu les plus influents du Royaume-Uni. Accédez au plus grand marché du marketing d'influence en Europe, avec une forte intention d'achat et des écosystèmes de créateurs matures.",
        "primaryButtonLabel": "Commencer",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Voir nos réalisations",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "930 M£",
          "label": "Marché britannique en 2024"
        },
        {
          "value": "55,5 M",
          "label": "Utilisateurs des réseaux sociaux"
        },
        {
          "value": "69 %",
          "label": "Achètent après avoir vu"
        },
        {
          "value": "89 %",
          "label": "Des marques utilisent Instagram"
        }
      ],
      "highlights": {
        "title": "Pourquoi miser sur le marketing d'influence au Royaume-Uni ?",
        "items": [
          {
            "title": "Le plus grand marché d'Europe",
            "description": "Le Royaume-Uni est en tête en Europe pour la maturité du marketing d'influence, les budgets investis et le niveau d'organisation."
          },
          {
            "title": "Des taux de conversion élevés",
            "description": "Les consommateurs britanniques achètent fréquemment après avoir vu les recommandations de créateurs."
          },
          {
            "title": "Un écosystème de créateurs mature",
            "description": "Les marques privilégient de plus en plus les partenariats authentiques et de long terme avec des créateurs plutôt que les publications ponctuelles de célébrités."
          },
          {
            "title": "Des résultats pilotés par la donnée",
            "description": "La mesure de la performance et la sécurité de la marque sont des attentes fondamentales sur le marché britannique."
          }
        ]
      },
      "talents": {
        "title": "Nos créateurs pour le marché britannique",
        "buttonLabel": "Voir tous les talents",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Les secteurs les plus performants",
        "items": [
          {
            "icon": "👗",
            "title": "Mode",
            "description": "La mode reste l'une des catégories de créateurs les plus performantes au Royaume-Uni."
          },
          {
            "icon": "💄",
            "title": "Beauté",
            "description": "Les campagnes beauté profitent de la forte autorité des créateurs et des formats tutoriels."
          },
          {
            "icon": "🍽️",
            "title": "Alimentation et boissons",
            "description": "La confiance envers les créateurs est particulièrement forte pour l'alimentation, les boissons et les recommandations du quotidien."
          }
        ]
      },
      "cta": {
        "title": "Lancez votre campagne au Royaume-Uni",
        "description": "Construisez des partenariats de confiance avec des créateurs pour le public britannique.",
        "buttonLabel": "Nous contacter",
        "buttonHref": "/contact"
      }
    }
  },
  "canada": {
    "path": "/influencer-marketing-canada",
    "title": "Marketing d'influence au Canada | CA Agency",
    "description": "Touchez le public canadien avec des campagnes d'influence bilingues à Toronto, Vancouver, Montréal et dans d'autres grands marchés, avec un reporting clair.",
    "ogImage": "/images/site/og/influencer-marketing-canada-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Canada"
      }
    ],
    "content": {
      "hero": {
        "title": "Agence de marketing d'influence\npour le Canada",
        "subtitle": "Associez votre marque aux meilleurs créateurs de contenu du Canada. Accédez à un marché de créateurs bilingue et solide à Toronto, Vancouver et Montréal.",
        "primaryButtonLabel": "Commencer",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Voir nos réalisations",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "660M$",
          "label": "Taille du marché en 2025"
        },
        {
          "value": "882K+",
          "label": "Influenceurs actifs"
        },
        {
          "value": "70 %",
          "label": "Découvrent via les influenceurs"
        },
        {
          "value": "40 %",
          "label": "Achètent immédiatement"
        }
      ],
      "highlights": {
        "title": "Pourquoi miser sur le marketing d'influence au Canada ?",
        "items": [
          {
            "title": "Un vaste réseau de créateurs",
            "description": "Le Canada offre une large couverture de créateurs dans les grandes villes et les principales catégories de contenu."
          },
          {
            "title": "Une forte intention d'achat",
            "description": "Une grande partie des consommateurs canadiens découvrent des produits grâce aux créateurs."
          },
          {
            "title": "Une expertise bilingue",
            "description": "L'adaptation en anglais et en français compte, en particulier pour les campagnes destinées au Québec."
          },
          {
            "title": "Une valeur à long terme",
            "description": "Les collaborations suivies avec les créateurs obtiennent en général de meilleurs résultats que les partenariats ponctuels."
          }
        ]
      },
      "talents": {
        "title": "Nos créateurs pour le marché canadien",
        "buttonLabel": "Voir tous les talents",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Les secteurs les plus performants",
        "items": [
          {
            "icon": "👗",
            "title": "Mode",
            "description": "L'ancrage local associé aux tendances mondiales fait de la mode une catégorie forte chez les créateurs."
          },
          {
            "icon": "💄",
            "title": "Beauté",
            "description": "Les contenus soins de la peau et beauté fonctionnent bien lorsque les créateurs misent sur la pédagogie."
          },
          {
            "icon": "💻",
            "title": "Tech",
            "description": "Les lancements et les tests de produits tech bénéficient de la confiance accordée aux créateurs et de démonstrations détaillées."
          }
        ]
      },
      "cta": {
        "title": "Lancez votre campagne au Canada",
        "description": "Touchez le public canadien avec la bonne combinaison de créateurs et une vraie prise en compte des nuances du marché.",
        "buttonLabel": "Nous contacter",
        "buttonHref": "/contact"
      }
    }
  },
  "australia": {
    "path": "/influencer-marketing-australia",
    "title": "Marketing d'influence en Australie | CA Agency",
    "description": "Lancez des campagnes d'influence en Australie, à Sydney, Melbourne et ailleurs, avec des créateurs vérifiés et un reporting transparent des performances.",
    "ogImage": "/images/site/og/influencer-marketing-australia-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Australia"
      }
    ],
    "content": {
      "hero": {
        "title": "Agence de marketing d'influence\npour l'Australie",
        "subtitle": "Associez votre marque aux créateurs de contenu les plus influents d'Australie, à Sydney, à Melbourne et dans le reste du pays.",
        "primaryButtonLabel": "Commencer",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Voir nos réalisations",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "589M$",
          "label": "Taille du marché en 2025"
        },
        {
          "value": "20,9M",
          "label": "Utilisateurs des réseaux sociaux"
        },
        {
          "value": "46 %",
          "label": "Achètent après avoir vu un contenu"
        },
        {
          "value": "70 %",
          "label": "Marques qui augmentent leur budget"
        }
      ],
      "highlights": {
        "title": "Pourquoi miser sur le marketing d'influence en Australie ?",
        "items": [
          {
            "title": "Une audience très engagée",
            "description": "Les Australiens sont de grands utilisateurs des réseaux sociaux et réagissent fortement aux contenus portés par les créateurs."
          },
          {
            "title": "Une forte influence sur l'achat",
            "description": "Les influenceurs jouent un rôle réel dans la recherche, la considération et la conversion."
          },
          {
            "title": "Une culture de l'authenticité",
            "description": "Des créateurs proches de leur public et des partenariats fondés sur la confiance obtiennent de meilleurs résultats que des campagnes trop léchées."
          },
          {
            "title": "Des investissements en hausse",
            "description": "Les marques australiennes continuent d'augmenter leurs dépenses en marketing d'influence."
          }
        ]
      },
      "intro": {
        "heading": "Une agence de marketing d'influence pour Sydney, Melbourne et toute l'Australie",
        "paragraphs": [
          {
            "text": "CA Agency mène des campagnes de marketing d'influence pour les marques qui veulent toucher le public australien, des lancements nationaux aux actions locales à Sydney et à Melbourne. Nous associons votre marque à des créateurs australiens sur Instagram, TikTok et YouTube et gérons la campagne du brief au reporting."
          },
          {
            "text": "À Sydney, le marketing d'influence est tourné vers la beauté, la mode, le fitness et le mode de vie plage et plein air qui fait la réputation de la ville. Les créateurs de Sydney sont un très bon choix pour les lancements de produits, la couverture d'événements et les contenus qui demandent un rendu soigné et aspirationnel."
          },
          {
            "text": "À Melbourne, le marketing d'influence a un autre caractère : plus éditorial, davantage centré sur la mode, la gastronomie, le café et la culture. Les créateurs de Melbourne conviennent aux marques qui recherchent des contenus réfléchis, axés sur le style, et une audience qui suit les tendances de près. De nombreuses campagnes nationales s'appuient sur les deux villes, puis ajoutent des créateurs à Brisbane, Perth et Adélaïde pour élargir la portée."
          },
          {
            "text": "Pour les marques de beauté et de soins de la peau, y compris les marques de beauté coréennes qui arrivent en Australie, nous tenons compte des règles locales autant que des goûts locaux. La publicité doit être clairement signalée, et les produits réglementés comme produits thérapeutiques, ce qui en Australie inclut de nombreuses protections solaires, sont soumis à des règles plus strictes en matière de recommandations rémunérées. Nous briefons les créateurs en conséquence avant toute création de contenu."
          }
        ]
      },
      "process": {
        "title": "Comment nous menons une campagne d'influence en Australie",
        "steps": [
          {
            "title": "Brief et objectifs",
            "description": "Nous définissons ensemble l'objectif, l'audience, le budget et le calendrier, et déterminons si la campagne est nationale ou centrée sur Sydney, Melbourne ou une autre ville."
          },
          {
            "title": "Présélection des créateurs",
            "description": "Vous recevez une présélection de créateurs australiens avec la localisation de leur audience, leur engagement et leurs collaborations passées avec des marques, vérifiés avant toute recommandation."
          },
          {
            "title": "Contrats et briefing",
            "description": "Nous gérons les contrats, les droits d'utilisation et un brief créatif qui inclut la mention publicitaire exigée par les règles australiennes."
          },
          {
            "title": "Contenus et validation",
            "description": "Les créateurs produisent les contenus, nous les vérifions par rapport au brief et vous les validez avant leur mise en ligne."
          },
          {
            "title": "Reporting",
            "description": "Vous recevez la portée, l'engagement, les clics et les conversions par créateur et par ville, avec une vision claire de ce qu'il faut reconduire."
          }
        ]
      },
      "talents": {
        "title": "Nos créateurs pour le marché australien",
        "buttonLabel": "Voir tous les talents",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Les secteurs les plus performants",
        "items": [
          {
            "icon": "🏃",
            "title": "Lifestyle et fitness",
            "description": "Les créateurs lifestyle et fitness exercent une forte influence sur le public australien."
          },
          {
            "icon": "👗",
            "title": "Mode",
            "description": "La mode fonctionne bien lorsque les créateurs racontent les tendances de façon accessible."
          },
          {
            "icon": "💄",
            "title": "Beauté",
            "description": "Les créateurs beauté favorisent la découverte, l'essai et un engagement répété."
          }
        ]
      },
      "faq": {
        "title": "Marketing d'influence en Australie : questions fréquentes",
        "items": [
          {
            "question": "Menez-vous des campagnes d'influence à Sydney et à Melbourne ?",
            "answer": "Oui. Nous concevons des campagnes propres à chaque ville avec des créateurs de Sydney et de Melbourne, ainsi que des campagnes nationales qui ajoutent Brisbane, Perth et Adélaïde."
          },
          {
            "question": "CA Agency est-elle basée en Australie ?",
            "answer": "Non. Notre siège se trouve à Dubaï, avec des divisions à Amsterdam et dans le Delaware. Nous menons les campagnes australiennes à distance avec des créateurs qui vivent en Australie, et une seule équipe gère le briefing, les contrats, les validations et le reporting."
          },
          {
            "question": "Comment les contenus sponsorisés doivent-ils être signalés en Australie ?",
            "answer": "Selon le code publicitaire australien et le droit de la consommation, les contenus rémunérés des créateurs doivent être clairement identifiables comme de la publicité, par exemple au moyen d'une mention claire « Ad » ou d'un label de partenariat rémunéré. Nous l'intégrons dans chaque brief et le vérifions avant validation."
          },
          {
            "question": "Existe-t-il des règles particulières pour les soins de la peau et les protections solaires en Australie ?",
            "answer": "Oui. Les produits réglementés comme produits thérapeutiques, ce qui inclut de nombreuses protections solaires, sont soumis à des règles publicitaires plus strictes, notamment des limites sur les témoignages rémunérés. Nous vérifions la classification de votre produit avant de planifier les contenus des créateurs."
          },
          {
            "question": "Combien coûte le marketing d'influence en Australie ?",
            "answer": "Le coût dépend de la plateforme, du profil et du nombre de créateurs, des contenus à produire et des droits d'utilisation. Nous dimensionnons chaque campagne selon votre budget et vos objectifs plutôt que d'annoncer un tarif fixe."
          }
        ]
      },
      "cta": {
        "title": "Lancez votre campagne en Australie",
        "description": "Touchez le public australien avec des créateurs adaptés à votre catégorie et à votre marché.",
        "buttonLabel": "Nous contacter",
        "buttonHref": "/contact"
      }
    }
  },
  "sydney": {
    "path": "/influencer-marketing-sydney",
    "title": "Marketing d'influence à Sydney | CA Agency",
    "description": "Campagnes d'influence pour Sydney : créateurs de Sydney vérifiés pour les marques beauté, soins et lifestyle sur Instagram et TikTok, reporting clair.",
    "ogImage": "/images/site/og/influencer-marketing-sydney-v1.jpg",
    "areaServed": [
      {
        "@type": "City",
        "name": "Sydney"
      }
    ],
    "content": {
      "hero": {
        "title": "Agence de marketing d'influence\npour Sydney",
        "subtitle": "CA Agency mène des campagnes de marketing d'influence pour Sydney et met en relation les marques de beauté, de soins de la peau et de lifestyle avec des créateurs de Sydney sur Instagram, TikTok et YouTube.",
        "primaryButtonLabel": "Commencer",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Voir nos réalisations",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "Campagnes réalisées"
        },
        {
          "value": "18M+",
          "label": "Abonnés cumulés"
        },
        {
          "value": "150+",
          "label": "Marques internationales"
        },
        {
          "value": "Sydney",
          "label": "Marché ciblé"
        }
      ],
      "intro": {
        "heading": "Une agence de marketing d'influence pour vos campagnes à Sydney",
        "paragraphs": [
          {
            "text": "Sydney est la plus grande ville d'Australie et le centre de ses industries de la beauté, de la mode et des médias. Les marques qui cherchent une agence de marketing d'influence pour Sydney veulent généralement l'une de ces trois choses : un lancement qui se remarque, des contenus au rendu soigné et aspirationnel, ou une présence régulière auprès du public de la ville, très attentif au style. CA Agency construit ses campagnes à Sydney autour de ces objectifs."
          },
          {
            "text": "Les contenus des créateurs de Sydney ont un caractère reconnaissable : plages et littoral, fitness et bien-être, clean beauty et une esthétique lumineuse, en extérieur, qui convient particulièrement bien aux soins de la peau et aux soins solaires. Nous associons votre marque à des influenceurs de Sydney dont les abonnés vivent réellement dans la ville et ses environs, des banlieues est à l'Inner West, et nous vérifions la localisation de l'audience avant toute recommandation."
          },
          {
            "text": "Nous ne sommes pas une agence basée à Sydney. Notre siège se trouve à Dubaï, avec des divisions à Amsterdam et dans le Delaware, et nous menons les campagnes australiennes à distance avec des créateurs sur place. Pour les marques, cela signifie une seule équipe pour Sydney, le reste de l'Australie et tout autre marché où vous êtes présent, avec le même reporting partout."
          },
          {
            "text": "La beauté et les soins de la peau sont nos catégories principales, y compris les marques de beauté coréennes qui se lancent en Australie. Nous tenons compte des règles publicitaires australiennes dès le premier brief : les contenus sponsorisés doivent être clairement signalés, et les produits réglementés comme produits thérapeutiques, ce qui inclut de nombreuses protections solaires, sont soumis à des limites plus strictes en matière de recommandations rémunérées."
          }
        ]
      },
      "process": {
        "title": "Comment nous menons une campagne d'influence à Sydney",
        "steps": [
          {
            "title": "Brief et objectifs",
            "description": "Nous définissons ensemble l'objectif, l'audience, le budget et le calendrier, et décidons si la campagne concerne uniquement Sydney ou s'inscrit dans un plan national."
          },
          {
            "title": "Présélection des créateurs",
            "description": "Vous recevez une présélection de créateurs de Sydney avec la localisation de leur audience, leur engagement et leurs collaborations passées avec des marques, vérifiés avant toute recommandation."
          },
          {
            "title": "Contrats et briefing",
            "description": "Nous gérons les contrats, les droits d'utilisation et un brief créatif qui inclut la mention publicitaire exigée par les règles australiennes."
          },
          {
            "title": "Contenus et validation",
            "description": "Les créateurs produisent les contenus, nous les vérifions par rapport au brief et vous les validez avant leur mise en ligne."
          },
          {
            "title": "Reporting",
            "description": "Vous recevez la portée, l'engagement, les clics et les conversions par créateur, avec une vision claire de ce qu'il faut reconduire."
          }
        ]
      },
      "highlights": {
        "title": "Pourquoi les marques nous choisissent pour le marketing d'influence à Sydney",
        "items": [
          {
            "title": "Une audience réellement à Sydney",
            "description": "Nous vérifions où vivent les abonnés d'un créateur, pour que votre budget touche des personnes à Sydney, et pas seulement des personnes qui aiment les contenus sur Sydney."
          },
          {
            "title": "Priorité à la beauté et aux soins",
            "description": "Nos campagnes sont conçues principalement pour les marques de beauté, de soins de la peau et de lifestyle, les catégories où les créateurs de Sydney sont les plus forts."
          },
          {
            "title": "Des contenus prêts pour un lancement",
            "description": "Les créateurs de Sydney produisent des contenus soignés et aspirationnels, efficaces pour les lancements et réutilisables comme créations pour la publicité sur les réseaux sociaux."
          },
          {
            "title": "Une équipe, tous les marchés",
            "description": "Sydney peut être activée seule ou aux côtés de Melbourne, d'actions nationales en Australie et de campagnes dans d'autres pays."
          }
        ]
      },
      "talents": {
        "title": "Les créateurs avec lesquels nous travaillons",
        "buttonLabel": "Voir tous les talents",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Les secteurs les plus performants à Sydney",
        "items": [
          {
            "icon": "💄",
            "title": "Beauté et soins de la peau",
            "description": "Les soins de la peau, les soins solaires et la clean beauty s'accordent avec le mode de vie en plein air de Sydney et son public attentif à la beauté."
          },
          {
            "icon": "🏃",
            "title": "Fitness et bien-être",
            "description": "La vie active en bord de mer rend les créateurs fitness et bien-être particulièrement influents à Sydney."
          },
          {
            "icon": "👗",
            "title": "Mode",
            "description": "Les maillots de bain, la mode resort et la mode premium fonctionnent bien auprès des créateurs de Sydney, très axés sur le style."
          }
        ]
      },
      "faq": {
        "title": "Marketing d'influence à Sydney : questions fréquentes",
        "items": [
          {
            "question": "CA Agency est-elle une agence de marketing d'influence à Sydney ?",
            "answer": "Nous menons des campagnes de marketing d'influence pour Sydney, mais nous n'y sommes pas basés. Notre siège se trouve à Dubaï, avec des divisions à Amsterdam et dans le Delaware. Les campagnes sont gérées à distance par une seule équipe et réalisées par des créateurs qui vivent à Sydney."
          },
          {
            "question": "Comment trouvez-vous des influenceurs de Sydney pour une marque ?",
            "answer": "Nous présélectionnons les créateurs selon la localisation de leur audience, la qualité de l'engagement, le style de contenu, la sécurité de la marque et les performances passées. Pour une campagne à Sydney, nous vérifions qu'une part significative de l'audience se trouve dans la région de Sydney avant de recommander un créateur."
          },
          {
            "question": "Combien coûte le marketing d'influence à Sydney ?",
            "answer": "Le coût dépend de la plateforme, du profil et du nombre de créateurs, des contenus à produire et des droits d'utilisation. Nous dimensionnons chaque campagne à Sydney selon votre budget et vos objectifs plutôt que d'annoncer un tarif fixe."
          },
          {
            "question": "Quelles plateformes fonctionnent le mieux pour le marketing d'influence à Sydney ?",
            "answer": "Instagram et TikTok dominent pour la beauté, la mode, le fitness et le lifestyle, et YouTube est utile pour les avis plus longs. Nous recommandons la combinaison adaptée à votre audience et à l'objectif de votre campagne."
          },
          {
            "question": "Gérez-vous la mention des contenus sponsorisés en Australie ?",
            "answer": "Oui. Selon le code publicitaire australien et le droit de la consommation, les contenus rémunérés des créateurs doivent être clairement identifiables comme de la publicité. Cette mention fait partie de chaque brief, et nous vérifions chaque publication avant validation. Pour les produits thérapeutiques, dont de nombreuses protections solaires, nous vérifions aussi les règles plus strictes sur les recommandations."
          },
          {
            "question": "Une campagne à Sydney peut-elle être étendue à Melbourne ou au reste de l'Australie ?",
            "answer": "Oui. De nombreuses marques commencent à Sydney et ajoutent Melbourne, puis Brisbane, Perth et Adélaïde. Nous conservons un seul cadre de campagne et ajoutons des créateurs par ville."
          }
        ]
      },
      "cta": {
        "title": "Lancez votre campagne à Sydney",
        "description": "Parlez-nous de votre marque et nous vous présenterons les créateurs de Sydney qui lui correspondent.",
        "buttonLabel": "Nous contacter",
        "buttonHref": "/contact"
      }
    }
  },
  "melbourne": {
    "path": "/influencer-marketing-melbourne",
    "title": "Marketing d'influence à Melbourne | CA Agency",
    "description": "Campagnes d'influence pour Melbourne : créateurs de Melbourne vérifiés pour les marques mode, beauté et soins sur Instagram et TikTok, reporting clair.",
    "ogImage": "/images/site/og/influencer-marketing-melbourne-v1.jpg",
    "areaServed": [
      {
        "@type": "City",
        "name": "Melbourne"
      }
    ],
    "content": {
      "hero": {
        "title": "Agence de marketing d'influence\npour Melbourne",
        "subtitle": "CA Agency mène des campagnes de marketing d'influence pour Melbourne et met en relation les marques de beauté, de soins de la peau et de mode avec des créateurs de Melbourne sur Instagram, TikTok et YouTube.",
        "primaryButtonLabel": "Commencer",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Voir nos réalisations",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "Campagnes réalisées"
        },
        {
          "value": "18M+",
          "label": "Abonnés cumulés"
        },
        {
          "value": "150+",
          "label": "Marques internationales"
        },
        {
          "value": "Melbourne",
          "label": "Marché ciblé"
        }
      ],
      "intro": {
        "heading": "Une agence de marketing d'influence pour vos campagnes à Melbourne",
        "paragraphs": [
          {
            "text": "Melbourne est la capitale australienne de la mode, de la gastronomie, du café et de la culture, et ses créateurs en sont le reflet. Les marques qui cherchent une agence d'influence pour Melbourne veulent généralement des contenus au regard plus éditorial : un stylisme réfléchi, des opinions affirmées et une audience qui suit les tendances de près. CA Agency construit ses campagnes à Melbourne autour de ce caractère."
          },
          {
            "text": "Les influenceurs de Melbourne ont tendance à fédérer des communautés fidèles et engagées autour d'un point de vue clair, qu'il s'agisse de routines de soins de la peau, de mode indépendante ou de la culture des ruelles et des cafés de la ville. Nous associons votre marque à des créateurs dont les abonnés vivent à Melbourne et dans ses environs et dont le goût correspond à votre produit, et nous vérifions les données d'audience avant toute recommandation."
          },
          {
            "text": "Nous ne sommes pas une agence basée à Melbourne. Notre siège se trouve à Dubaï, avec des divisions à Amsterdam et dans le Delaware, et nous menons les campagnes australiennes à distance avec des créateurs sur place. Les marques disposent d'une seule équipe pour Melbourne, Sydney et tous les autres marchés où elles sont présentes, avec le même reporting partout."
          },
          {
            "text": "Pour les marques de beauté et de soins de la peau, y compris les marques de beauté coréennes qui arrivent en Australie, les campagnes avec des créateurs font souvent le travail qu'assuraient traditionnellement les relations publiques beauté à Melbourne : mettre le produit entre des mains de confiance et devant la bonne audience. Nous intégrons les règles australiennes de mention publicitaire dans chaque brief, y compris les règles plus strictes applicables aux produits thérapeutiques, dont de nombreuses protections solaires."
          }
        ]
      },
      "process": {
        "title": "Comment nous menons une campagne d'influence à Melbourne",
        "steps": [
          {
            "title": "Brief et objectifs",
            "description": "Nous définissons ensemble l'objectif, l'audience, le budget et le calendrier, et décidons si la campagne concerne uniquement Melbourne ou s'inscrit dans un plan national."
          },
          {
            "title": "Présélection des créateurs",
            "description": "Vous recevez une présélection de créateurs de Melbourne avec la localisation de leur audience, leur engagement et leurs collaborations passées avec des marques, vérifiés avant toute recommandation."
          },
          {
            "title": "Contrats et briefing",
            "description": "Nous gérons les contrats, les droits d'utilisation et un brief créatif qui inclut la mention publicitaire exigée par les règles australiennes."
          },
          {
            "title": "Contenus et validation",
            "description": "Les créateurs produisent les contenus, nous les vérifions par rapport au brief et vous les validez avant leur mise en ligne."
          },
          {
            "title": "Reporting",
            "description": "Vous recevez la portée, l'engagement, les clics et les conversions par créateur, avec une vision claire de ce qu'il faut reconduire."
          }
        ]
      },
      "highlights": {
        "title": "Pourquoi les marques nous choisissent pour le marketing d'influence à Melbourne",
        "items": [
          {
            "title": "Une audience réellement à Melbourne",
            "description": "Nous vérifions où vivent les abonnés d'un créateur, pour que votre budget touche des personnes à Melbourne."
          },
          {
            "title": "Des créateurs au style affirmé",
            "description": "Nous recherchons des créateurs au point de vue singulier, car le public de Melbourne récompense le goût plutôt que le volume."
          },
          {
            "title": "Priorité à la beauté et aux soins",
            "description": "Nos campagnes sont conçues principalement pour les marques de beauté, de soins de la peau et de mode, y compris les lancements K-beauty."
          },
          {
            "title": "Une équipe, tous les marchés",
            "description": "Melbourne peut être activée seule ou aux côtés de Sydney, d'actions nationales en Australie et de campagnes dans d'autres pays."
          }
        ]
      },
      "talents": {
        "title": "Les créateurs avec lesquels nous travaillons",
        "buttonLabel": "Voir tous les talents",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Les secteurs les plus performants à Melbourne",
        "items": [
          {
            "icon": "👗",
            "title": "Mode",
            "description": "Les labels indépendants et un stylisme réfléchi conviennent aux créateurs de Melbourne, à la pointe de la mode."
          },
          {
            "icon": "💄",
            "title": "Beauté et soins de la peau",
            "description": "Des contenus soins honnêtes, centrés sur les routines, gagnent la confiance d'un public de Melbourne bien informé."
          },
          {
            "icon": "☕",
            "title": "Gastronomie et lifestyle",
            "description": "Les contenus cafés, restaurants et culture conviennent naturellement aux créateurs de la ville."
          }
        ]
      },
      "faq": {
        "title": "Marketing d'influence à Melbourne : questions fréquentes",
        "items": [
          {
            "question": "CA Agency est-elle une agence d'influence à Melbourne ?",
            "answer": "Nous menons des campagnes de marketing d'influence pour Melbourne, mais nous n'y sommes pas basés. Notre siège se trouve à Dubaï, avec des divisions à Amsterdam et dans le Delaware. Les campagnes sont gérées à distance par une seule équipe et réalisées par des créateurs qui vivent à Melbourne."
          },
          {
            "question": "En quoi le marketing d'influence à Melbourne diffère-t-il de celui de Sydney ?",
            "answer": "Les contenus de Melbourne sont généralement plus éditoriaux et axés sur le style, avec des points forts dans la mode, la gastronomie et la culture, tandis que Sydney est davantage tournée vers la beauté, le fitness et un mode de vie en plein air. C'est pourquoi de nombreuses campagnes nationales font appel à des créateurs des deux villes."
          },
          {
            "question": "Proposez-vous des relations publiques beauté à Melbourne ?",
            "answer": "Nous sommes une agence de marketing d'influence, pas une agence de relations publiques traditionnelle. Pour les marques de beauté, nous prenons en charge le volet créateurs de ce que faisaient auparavant les relations publiques : envois de produits, partenariats avec des créateurs et contenus sponsorisés avec des créateurs de Melbourne, avec un reporting fondé sur des résultats clairs."
          },
          {
            "question": "Combien coûte le marketing d'influence à Melbourne ?",
            "answer": "Le coût dépend de la plateforme, du profil et du nombre de créateurs, des contenus à produire et des droits d'utilisation. Nous dimensionnons chaque campagne à Melbourne selon votre budget et vos objectifs plutôt que d'annoncer un tarif fixe."
          },
          {
            "question": "Gérez-vous la mention des contenus sponsorisés en Australie ?",
            "answer": "Oui. Selon le code publicitaire australien et le droit de la consommation, les contenus rémunérés des créateurs doivent être clairement identifiables comme de la publicité. Cette mention fait partie de chaque brief, et nous vérifions chaque publication avant validation."
          },
          {
            "question": "Une campagne à Melbourne peut-elle être étendue à Sydney ou au reste de l'Australie ?",
            "answer": "Oui. Nous conservons un seul cadre de campagne et ajoutons des créateurs à Sydney, Brisbane, Perth et Adélaïde à mesure que le plan s'étend."
          }
        ]
      },
      "cta": {
        "title": "Lancez votre campagne à Melbourne",
        "description": "Parlez-nous de votre marque et nous vous présenterons les créateurs de Melbourne qui lui correspondent.",
        "buttonLabel": "Nous contacter",
        "buttonHref": "/contact"
      }
    }
  },
  "europe": {
    "path": "/influencer-marketing-europe",
    "title": "Marketing d'influence en Europe | CA Agency",
    "description": "Une seule agence d'influence pour l'Europe : campagnes en Allemagne, France, Suisse, pays nordiques et Royaume-Uni, depuis notre division d'Amsterdam.",
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
        "title": "Agence de marketing d'influence\npour l'Europe",
        "subtitle": "CA Agency est une agence de marketing d'influence pour l'Europe. Depuis notre division Europe à Amsterdam, nous menons des campagnes avec des créateurs pour les marques de beauté et de soins de la peau en Allemagne, en France, en Suisse, dans les pays nordiques et au Royaume-Uni.",
        "primaryButtonLabel": "Commencer",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Voir nos réalisations",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "Campagnes réalisées"
        },
        {
          "value": "18M+",
          "label": "Abonnés cumulés"
        },
        {
          "value": "150+",
          "label": "Marques internationales"
        },
        {
          "value": "Europe",
          "label": "Marché ciblé"
        }
      ],
      "intro": {
        "heading": "Une seule agence de marketing d'influence pour tous les marchés européens",
        "paragraphs": [
          {
            "text": "L'Europe n'est pas un marché unique. Une campagne qui fonctionne à Berlin demande un autre créateur, une autre langue et un autre ton à Paris, Zurich ou Stockholm. Agence de marketing d'influence full-service pour l'Europe, CA Agency aborde chaque pays selon ses spécificités tout en pilotant l'ensemble de la campagne avec une seule équipe, un seul brief et un seul rapport."
          },
          {
            "text": "Notre division Europe travaille depuis Amsterdam, aux côtés de notre siège à Dubaï et de notre division Amérique du Nord dans le Delaware. Cela nous permet de coordonner des créateurs sur plusieurs fuseaux horaires et dans plusieurs langues, de gérer les contrats et les droits d'utilisation pays par pays et de veiller à ce que la mention publicitaire respecte les règles locales en matière de consommation dans chaque marché que nous activons."
          },
          {
            "text": "Nous travaillons principalement avec des marques de beauté, de soins de la peau et de lifestyle, y compris des marques de beauté coréennes qui arrivent en Europe pour la première fois. Que vous ayez besoin de contenus TikTok en allemand, de créateurs Instagram français ou d'une portée en anglais dans les pays nordiques, nous composons la sélection de créateurs en fonction de vos objectifs et mesurons chaque activation à l'aide de KPI clairs."
          }
        ]
      },
      "highlights": {
        "title": "Pourquoi les marques nous confient leurs campagnes d'influence en Europe",
        "items": [
          {
            "title": "Une planification pays par pays",
            "description": "Chaque marché bénéficie de créateurs qui parlent sa langue et connaissent son public, et non d'une copie traduite de la campagne d'un autre pays."
          },
          {
            "title": "Une équipe, plusieurs marchés",
            "description": "Le briefing, les contrats, les validations et le reporting passent par une seule équipe : un lancement dans cinq pays ne signifie pas cinq agences."
          },
          {
            "title": "Les règles locales de mention publicitaire",
            "description": "Les mentions publicitaires diffèrent selon les pays. Nous informons les créateurs de la formulation attendue dans chaque marché avant la mise en ligne des contenus."
          },
          {
            "title": "Des résultats mesurés",
            "description": "La portée, l'engagement, les clics et les conversions sont présentés par marché, pour que vous voyiez quels pays méritent davantage de budget."
          }
        ]
      },
      "talents": {
        "title": "Des créateurs pour vos campagnes en Europe",
        "buttonLabel": "Voir tous les talents",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Les secteurs les plus performants",
        "items": [
          {
            "icon": "💄",
            "title": "Beauté",
            "description": "Avec des créateurs locaux, les lancements et les tutoriels maquillage s'exportent bien d'un marché européen à l'autre."
          },
          {
            "icon": "🧴",
            "title": "Soins de la peau",
            "description": "Les contenus pédagogiques sur les soins de la peau créent la confiance auprès de consommateurs européens attentifs aux ingrédients."
          },
          {
            "icon": "👗",
            "title": "Mode et lifestyle",
            "description": "Les contenus de style et de routines quotidiennes inscrivent les produits dans la vie réelle des Européens."
          }
        ]
      },
      "faq": {
        "title": "Marketing d'influence en Europe : questions fréquentes",
        "items": [
          {
            "question": "Dans quels pays européens menez-vous des campagnes d'influence ?",
            "answer": "Nous concevons et menons des campagnes avec des créateurs dans toute l'Europe, en particulier en Allemagne, en France, en Suisse, dans les pays nordiques (Suède, Norvège, Finlande et Danemark), aux Pays-Bas et au Royaume-Uni. Une campagne peut se dérouler dans un seul pays ou dans plusieurs à la fois."
          },
          {
            "question": "Travaillez-vous avec des créateurs dans les langues locales ?",
            "answer": "Oui. Pour l'Allemagne, la France et la Suisse, nous briefons des créateurs qui publient dans la langue locale. Dans les pays nordiques, de nombreux créateurs s'adressent à leur audience en anglais aussi bien que dans leur propre langue, et nous choisissons la combinaison adaptée à votre marque."
          },
          {
            "question": "Comment gérez-vous la mention publicitaire en Europe ?",
            "answer": "Partout en Europe, les contenus rémunérés des créateurs doivent être reconnaissables comme de la publicité, mais la formulation attendue diffère selon les pays, par exemple « Werbung » ou « Anzeige » en Allemagne et « Publicité » ou « Collaboration commerciale » en France. Nous indiquons la bonne mention dans chaque brief et la vérifions avant la validation des contenus."
          },
          {
            "question": "Combien coûte le marketing d'influence en Europe ?",
            "answer": "Le coût dépend des pays, de la plateforme, du profil et du nombre de créateurs, des contenus à produire et des droits d'utilisation. Nous dimensionnons chaque campagne selon vos objectifs et votre budget plutôt que d'annoncer un tarif fixe. Indiquez-nous votre budget et vos marchés, et nous construirons un plan créateurs sur cette base."
          },
          {
            "question": "Pouvez-vous lancer une marque de beauté coréenne en Europe ?",
            "answer": "Oui. La K-beauty est l'une de nos catégories principales. Nous aidons les marques coréennes de soins de la peau et de maquillage à choisir leurs premiers marchés européens, nous les associons à des créateurs dont l'audience suit déjà les soins de la peau et nous adaptons le message pays par pays."
          }
        ]
      },
      "cta": {
        "title": "Lancez votre campagne en Europe",
        "description": "Dites-nous quels marchés européens comptent pour vous et nous vous présenterons les créateurs qu'il vous faut.",
        "buttonLabel": "Nous contacter",
        "buttonHref": "/contact"
      }
    }
  },
  "germany": {
    "path": "/influencer-marketing-germany",
    "title": "Marketing d'influence en Allemagne | CA Agency",
    "description": "Marketing d'influence pour l'Allemagne et la région DACH : créateurs germanophones pour les marques de beauté et de soins sur Instagram, TikTok et YouTube.",
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
        "title": "Agence de marketing d'influence\npour l'Allemagne",
        "subtitle": "CA Agency est une agence de marketing d'influence pour l'Allemagne et la région DACH. Nous mettons en relation les marques de beauté et de soins de la peau avec des créateurs germanophones sur Instagram, TikTok et YouTube.",
        "primaryButtonLabel": "Commencer",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Voir nos réalisations",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "Campagnes réalisées"
        },
        {
          "value": "18M+",
          "label": "Abonnés cumulés"
        },
        {
          "value": "150+",
          "label": "Marques internationales"
        },
        {
          "value": "DACH",
          "label": "Marché ciblé"
        }
      ],
      "intro": {
        "heading": "Une agence de marketing d'influence pour l'Allemagne, l'Autriche et la Suisse",
        "paragraphs": [
          {
            "text": "L'Allemagne est le plus grand marché de consommation de l'Union européenne, et le public allemand attend des contenus dans sa langue, de la part de créateurs en qui il a déjà confiance. CA Agency conçoit des campagnes d'influence pour l'Allemagne avec des créateurs germanophones, afin que votre produit soit expliqué comme un client allemand poserait la question."
          },
          {
            "text": "Les consommateurs allemands lisent les listes d'ingrédients, comparent les avis et préfèrent des contenus honnêtes et détaillés aux effets d'annonce. Nous associons votre marque à des créateurs dont l'audience, la niche et le ton répondent à cette attente, puis nous gérons le briefing, les contrats, la validation des contenus et les droits d'utilisation depuis notre division Europe à Amsterdam."
          },
          {
            "text": "L'allemand étant partagé avec l'Autriche et la majeure partie de la Suisse, une seule campagne bien préparée peut toucher toute la région DACH. Nous adaptons la sélection de créateurs et les détails qui diffèrent d'un pays à l'autre, et présentons les résultats séparément pour chaque marché."
          }
        ]
      },
      "highlights": {
        "title": "Pourquoi les marques nous confient leurs campagnes d'influence en Allemagne",
        "items": [
          {
            "title": "Des contenus en allemand",
            "description": "Les créateurs s'adressent à leur audience en allemand, ce qui compte pour la confiance et pour la recherche sur TikTok et YouTube."
          },
          {
            "title": "Une mention publicitaire claire",
            "description": "En Allemagne, les publications rémunérées doivent porter la mention « Werbung » ou « Anzeige ». Nous intégrons cette mention dans chaque brief et la vérifions avant validation."
          },
          {
            "title": "Une portée DACH",
            "description": "Un même cadre de campagne peut s'étendre de l'Allemagne à l'Autriche et à la Suisse alémanique."
          },
          {
            "title": "Un public attentif aux détails",
            "description": "Nous privilégions les créateurs qui expliquent vraiment les produits, car les acheteurs allemands sont sensibles au fond."
          }
        ]
      },
      "talents": {
        "title": "Des créateurs pour vos campagnes en Allemagne",
        "buttonLabel": "Voir tous les talents",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Les secteurs les plus performants",
        "items": [
          {
            "icon": "🧴",
            "title": "Soins de la peau",
            "description": "Les contenus soins centrés sur les ingrédients correspondent à la façon dont les consommateurs allemands se renseignent avant d'acheter."
          },
          {
            "icon": "💄",
            "title": "Beauté",
            "description": "Les tutoriels et les premières impressions honnêtes aident les nouvelles marques de maquillage à gagner la confiance en Allemagne."
          },
          {
            "icon": "💪",
            "title": "Santé et bien-être",
            "description": "Les contenus de créateurs fondés sur les routines construisent un engagement durable pour les marques de bien-être."
          }
        ]
      },
      "faq": {
        "title": "Marketing d'influence en Allemagne : questions fréquentes",
        "items": [
          {
            "question": "Travaillez-vous avec des influenceurs germanophones ?",
            "answer": "Oui. Pour les campagnes en Allemagne, en Autriche et en Suisse alémanique, nous briefons des créateurs qui publient en allemand et dont les abonnés se trouvent principalement dans la région DACH."
          },
          {
            "question": "Comment fonctionne la mention publicitaire en Allemagne ?",
            "answer": "Les contenus rémunérés des créateurs doivent être clairement reconnaissables comme de la publicité. En pratique, cela signifie une mention « Werbung » ou « Anzeige » visible au début de la publication, en allemand. Nous l'intégrons dans chaque brief et vérifions chaque publication avant sa validation."
          },
          {
            "question": "Quelles plateformes fonctionnent le mieux pour le marketing d'influence en Allemagne ?",
            "answer": "Instagram et TikTok dominent pour la beauté, les soins de la peau et le lifestyle, et YouTube reste solide pour les avis approfondis. Nous recommandons la combinaison adaptée à votre audience et à l'objectif de votre campagne."
          },
          {
            "question": "Combien coûte une campagne d'influence en Allemagne ?",
            "answer": "Cela dépend de la plateforme, du profil et du nombre de créateurs, des contenus à produire et des droits d'utilisation. Nous dimensionnons chaque campagne selon votre budget et vos objectifs plutôt que d'annoncer un tarif fixe."
          },
          {
            "question": "Une seule campagne peut-elle couvrir l'Allemagne, l'Autriche et la Suisse ?",
            "answer": "Oui. Une langue commune rend les campagnes DACH efficaces. Nous prévoyons un cadre unique, ajoutons des créateurs par pays lorsque c'est utile et présentons les résultats de chaque marché séparément."
          }
        ]
      },
      "cta": {
        "title": "Lancez votre campagne en Allemagne",
        "description": "Touchez le public germanophone avec des créateurs adaptés à votre marque et à vos objectifs.",
        "buttonLabel": "Nous contacter",
        "buttonHref": "/contact"
      }
    }
  },
  "switzerland": {
    "path": "/influencer-marketing-switzerland",
    "title": "Marketing d'influence en Suisse | CA Agency",
    "description": "Marketing d'influence pour la Suisse : campagnes pour les marques de beauté et de soins en Suisse alémanique, en Suisse romande et en Suisse italienne.",
    "ogImage": "/images/site/og/influencer-marketing-switzerland-v1.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Switzerland"
      }
    ],
    "content": {
      "hero": {
        "title": "Agence de marketing d'influence\npour la Suisse",
        "subtitle": "CA Agency est une agence de marketing d'influence pour la Suisse. Nous menons des campagnes avec des créateurs pour les marques de beauté et de soins de la peau en Suisse alémanique, en Suisse romande et en Suisse italienne.",
        "primaryButtonLabel": "Commencer",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Voir nos réalisations",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "Campagnes réalisées"
        },
        {
          "value": "18M+",
          "label": "Abonnés cumulés"
        },
        {
          "value": "150+",
          "label": "Marques internationales"
        },
        {
          "value": "Suisse",
          "label": "Marché ciblé"
        }
      ],
      "intro": {
        "heading": "Une agence de marketing d'influence pour une Suisse plurilingue",
        "paragraphs": [
          {
            "text": "La Suisse est un petit marché au fort pouvoir d'achat, où coexistent plusieurs langues. Une campagne pour Zurich demande des créateurs germanophones, Genève et Lausanne demandent le français, et le Tessin l'italien. CA Agency conçoit des campagnes d'influence pour la Suisse région par région, afin que chaque public découvre votre marque dans sa propre langue."
          },
          {
            "text": "Les consommateurs suisses apprécient la qualité et la discrétion et sont sensibles aux créateurs qui leur paraissent locaux plutôt qu'importés. Nous sélectionnons des créateurs dont les abonnés se trouvent réellement en Suisse, vérifions les données d'audience avant toute recommandation et veillons à ce que la publicité soit clairement signalée, conformément aux règles suisses de loyauté."
          },
          {
            "text": "Comme la Suisse partage ses langues avec l'Allemagne, l'Autriche et la France, une campagne suisse peut exister seule ou s'intégrer à un plan DACH ou européen plus large. Notre division Europe à Amsterdam gère les créateurs, les contrats, les validations et le reporting avec une seule équipe."
          }
        ]
      },
      "highlights": {
        "title": "Pourquoi les marques nous confient leurs campagnes d'influence en Suisse",
        "items": [
          {
            "title": "Trois régions linguistiques",
            "description": "Nous planifions séparément la Suisse alémanique, la Suisse romande et la Suisse italienne et rendons compte de chacune."
          },
          {
            "title": "Une audience réellement suisse",
            "description": "Nous vérifions où vivent les abonnés d'un créateur, pour que le budget serve à toucher un public en Suisse."
          },
          {
            "title": "Un positionnement premium",
            "description": "Les contenus sont conçus pour un public attaché à la qualité, qui attend beaucoup des marques."
          },
          {
            "title": "Un élément d'un plan plus large",
            "description": "Les actions en Suisse peuvent se rattacher à des campagnes en Allemagne, en Autriche et en France sans agences supplémentaires."
          }
        ]
      },
      "talents": {
        "title": "Des créateurs pour vos campagnes en Suisse",
        "buttonLabel": "Voir tous les talents",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Les secteurs les plus performants",
        "items": [
          {
            "icon": "🧴",
            "title": "Soins de la peau",
            "description": "Les soins premium conviennent à un public suisse prêt à payer pour la qualité et des résultats prouvés."
          },
          {
            "icon": "💄",
            "title": "Beauté",
            "description": "Ici, des contenus beauté réfléchis et honnêtes fonctionnent mieux qu'une promotion tapageuse."
          },
          {
            "icon": "⌚",
            "title": "Luxe et lifestyle",
            "description": "Les contenus des créateurs inscrivent les produits premium dans un quotidien aspirationnel mais crédible."
          }
        ]
      },
      "faq": {
        "title": "Marketing d'influence en Suisse : questions fréquentes",
        "items": [
          {
            "question": "Quelles régions linguistiques de Suisse couvrez-vous ?",
            "answer": "Nous concevons des campagnes pour la Suisse alémanique, la Suisse romande et la Suisse italienne. La plupart des marques commencent par la Suisse alémanique et ajoutent des créateurs francophones pour une portée nationale."
          },
          {
            "question": "Puis-je réutiliser ma campagne allemande ou française en Suisse ?",
            "answer": "En partie. La langue reste la même, mais le public suisse réagit mieux à des créateurs qui vivent en Suisse. En général, nous conservons l'idée de la campagne et ajoutons des créateurs suisses pour la porter."
          },
          {
            "question": "Comment les contenus sponsorisés sont-ils signalés en Suisse ?",
            "answer": "Selon les règles suisses de loyauté, les contenus rémunérés des créateurs doivent être clairement reconnaissables comme de la publicité. Nous prévoyons une mention publicitaire claire dans chaque brief et la vérifions avant la validation d'une publication."
          },
          {
            "question": "Combien coûte une campagne d'influence en Suisse ?",
            "answer": "Le coût dépend des régions linguistiques, de la plateforme, du profil et du nombre de créateurs et des droits d'utilisation. Nous dimensionnons chaque campagne selon votre budget et vos objectifs plutôt que d'annoncer un tarif fixe."
          }
        ]
      },
      "cta": {
        "title": "Lancez votre campagne en Suisse",
        "description": "Touchez le public suisse dans la bonne langue avec des créateurs adaptés à votre marque.",
        "buttonLabel": "Nous contacter",
        "buttonHref": "/contact"
      }
    }
  },
  "nordics": {
    "path": "/influencer-marketing-nordics",
    "title": "Marketing d'influence dans les pays nordiques | CA Agency",
    "description": "Agence de marketing d'influence pour les pays nordiques : campagnes beauté et soins en Suède, Norvège, Finlande et au Danemark, planifiées marché par marché.",
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
        "title": "Agence de marketing d'influence\npour les pays nordiques",
        "subtitle": "CA Agency est une agence de marketing d'influence pour les pays nordiques. Nous menons des campagnes avec des créateurs pour les marques de beauté et de soins de la peau en Suède, en Norvège, en Finlande et au Danemark.",
        "primaryButtonLabel": "Commencer",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Voir nos réalisations",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "Campagnes réalisées"
        },
        {
          "value": "18M+",
          "label": "Abonnés cumulés"
        },
        {
          "value": "150+",
          "label": "Marques internationales"
        },
        {
          "value": "Pays nordiques",
          "label": "Marché ciblé"
        }
      ],
      "intro": {
        "heading": "Une agence de marketing d'influence pour la Suède, la Norvège, la Finlande et le Danemark",
        "paragraphs": [
          {
            "text": "Les pays nordiques comptent parmi les marchés les plus numériques d'Europe. En Suède, en Norvège, en Finlande et au Danemark, le public passe beaucoup de temps sur Instagram, TikTok et YouTube, achète en ligne en toute confiance et attend des marques qu'elles soient honnêtes et sobres. CA Agency conçoit ses campagnes d'influence pour les pays nordiques autour de cette attente."
          },
          {
            "text": "Chaque pays nordique a sa langue et ses créateurs, et un créateur suédois ne touche pas automatiquement la Norvège ou la Finlande. Nous traitons Stockholm, Oslo, Helsinki et Copenhague comme des audiences distinctes, choisissons pour chaque marché entre des contenus en langue locale et en anglais, et veillons à ce que la publicité soit clairement signalée, conformément aux règles de chaque pays en matière de consommation."
          },
          {
            "text": "Les consommateurs nordiques sont attentifs aux ingrédients, à la durabilité et à la transparence, ce qui fait de la région un bon terrain pour les soins de la peau et la clean beauty. Depuis notre division Europe à Amsterdam, nous gérons les créateurs, les contrats, les validations et le reporting pour un seul pays nordique ou pour les quatre."
          }
        ]
      },
      "highlights": {
        "title": "Pourquoi les marques nous confient leurs campagnes d'influence dans les pays nordiques",
        "items": [
          {
            "title": "Quatre marchés, un seul plan",
            "description": "La Suède, la Norvège, la Finlande et le Danemark sont planifiés séparément et gérés par une seule équipe."
          },
          {
            "title": "Des contenus honnêtes et sobres",
            "description": "Nous briefons les créateurs pour obtenir le ton calme et crédible auquel le public nordique fait confiance."
          },
          {
            "title": "Une publicité clairement signalée",
            "description": "Les autorités nordiques de protection des consommateurs attendent que les publications rémunérées soient clairement signalées. Chaque brief comporte la bonne mention."
          },
          {
            "title": "Langue locale ou anglais",
            "description": "Nous choisissons pour chaque marché entre des contenus en langue locale et en anglais, selon votre audience."
          }
        ]
      },
      "talents": {
        "title": "Des créateurs pour vos campagnes dans les pays nordiques",
        "buttonLabel": "Voir tous les talents",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Les secteurs les plus performants",
        "items": [
          {
            "icon": "🧴",
            "title": "Soins de la peau",
            "description": "Attentifs aux ingrédients, les consommateurs nordiques sont réceptifs à des contenus soins clairs et pédagogiques."
          },
          {
            "icon": "🌿",
            "title": "Clean beauty",
            "description": "Les allégations de transparence et de durabilité comptent, et les créateurs aident à les expliquer de façon crédible."
          },
          {
            "icon": "🏃",
            "title": "Lifestyle et bien-être",
            "description": "Les contenus de routines quotidiennes s'accordent avec le mode de vie nordique, actif et tourné vers le plein air."
          }
        ]
      },
      "faq": {
        "title": "Marketing d'influence dans les pays nordiques : questions fréquentes",
        "items": [
          {
            "question": "Dans quels pays nordiques menez-vous des campagnes d'influence ?",
            "answer": "En Suède, en Norvège, en Finlande et au Danemark. Une campagne peut se dérouler dans un seul pays ou dans toute la région, avec des créateurs sélectionnés pour chaque marché."
          },
          {
            "question": "Les campagnes nordiques doivent-elles être en anglais ou dans la langue locale ?",
            "answer": "Les deux peuvent fonctionner. L'anglais est largement compris dans les pays nordiques, mais les contenus en langue locale paraissent généralement plus proches et inspirent davantage confiance. Nous recommandons la combinaison marché par marché, selon votre marque et votre audience."
          },
          {
            "question": "Comment les contenus sponsorisés sont-ils signalés dans les pays nordiques ?",
            "answer": "L'autorité de protection des consommateurs de chaque pays attend que les contenus rémunérés soient clairement signalés comme de la publicité au début de la publication, d'une manière compréhensible pour l'audience. Nous indiquons la bonne formulation dans chaque brief et la vérifions avant validation."
          },
          {
            "question": "Un seul créateur suffit-il pour toucher toute la région ?",
            "answer": "Rarement. Les abonnés se concentrent dans le pays du créateur. Nous prévoyons donc normalement au moins un groupe de créateurs par marché et présentons les résultats de chaque pays séparément."
          },
          {
            "question": "Combien coûte une campagne d'influence dans les pays nordiques ?",
            "answer": "Le coût dépend du nombre de pays, de la plateforme, du profil des créateurs, des contenus à produire et des droits d'utilisation. Nous dimensionnons chaque campagne selon votre budget et vos objectifs plutôt que d'annoncer un tarif fixe."
          }
        ]
      },
      "cta": {
        "title": "Lancez votre campagne dans les pays nordiques",
        "description": "Touchez le public en Suède, en Norvège, en Finlande et au Danemark avec des créateurs adaptés à votre marque.",
        "buttonLabel": "Nous contacter",
        "buttonHref": "/contact"
      }
    }
  }
}
