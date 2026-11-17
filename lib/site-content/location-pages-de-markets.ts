import type { TranslatedLocationPage } from '@/lib/site-content/location-pages-translated'

// German versions of the market pages that are not in location-pages-de.ts,
// served at /de/<path>. Translated from the English defaults; not editable
// in the admin. Plain data: keys are the market keys from lib/data/locations.ts.

export const germanMarketPages: Record<string, TranslatedLocationPage> = {
  "dubai": {
    "path": "/influencer-marketing-dubai",
    "title": "Influencer Marketing in Dubai | CA Agency",
    "description": "Influencer-Marketing-Agentur in Dubai: CA Agency setzt für Marken Kampagnen auf Instagram, TikTok und YouTube mit geprüften Creators in Dubai und den VAE um.",
    "ogImage": "/images/site/og/influencer-marketing-dubai-v2.jpg",
    "areaServed": [
      {
        "@type": "City",
        "name": "Dubai"
      }
    ],
    "content": {
      "hero": {
        "title": "Influencer Marketing\nAgentur Dubai",
        "subtitle": "CA Agency ist eine Influencer-Marketing-Agentur in Dubai. Wir unterstützen Marken dabei, leistungsstarke Kampagnen auf Instagram, TikTok und YouTube mit geprüften Creators in den gesamten VAE zu starten.",
        "primaryButtonLabel": "Jetzt starten",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Unsere Arbeit ansehen",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "Umgesetzte Kampagnen"
        },
        {
          "value": "18M+",
          "label": "Follower insgesamt"
        },
        {
          "value": "150+",
          "label": "Globale Marken"
        },
        {
          "value": "VAE",
          "label": "Kernmarkt"
        }
      ],
      "highlights": {
        "title": "Warum Marken unsere Influencer-Agentur in Dubai wählen",
        "items": [
          {
            "title": "Lokale Marktkenntnis",
            "description": "Wir richten Influencer-Kampagnen daran aus, wie das Publikum in Dubai Produkte entdeckt, bewertet und kauft: in den Bereichen Luxus, Beauty, Mode, Hotellerie und Lifestyle."
          },
          {
            "title": "Regionale Skalierung",
            "description": "Kampagnen, die mit Creators aus Dubai starten, lassen sich effizient auf Abu Dhabi und die weitere GCC-Region ausweiten, wenn das Briefing mehr Reichweite verlangt."
          },
          {
            "title": "Geprüftes Creator-Netzwerk",
            "description": "Unsere Agentur wählt Creators mit nachgewiesener Content-Qualität, passender Zielgruppe und markensicherer Umsetzung auf Instagram, TikTok und YouTube aus."
          },
          {
            "title": "Leistungsorientierte Umsetzung",
            "description": "Wir konzentrieren uns auf messbare Ergebnisse wie qualifizierten Traffic, Conversions und die Performance von Branded Content, statt allein auf Eitelkeitskennzahlen."
          }
        ]
      },
      "talents": {
        "title": "Unsere Creators für den Markt Dubai",
        "buttonLabel": "Alle Talente ansehen",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Die stärksten Branchen",
        "items": [
          {
            "icon": "🏨",
            "title": "Hotellerie",
            "description": "Hotel-, Gastronomie- und Destinationskampagnen funktionieren in Dubai besonders gut mit Kurzvideos von Creators."
          },
          {
            "icon": "💄",
            "title": "Beauty",
            "description": "Launches in Hautpflege, Make-up und Luxus-Beauty erzielen starke Ergebnisse, wenn Creators Produkte erklären und Vertrauen schaffen."
          },
          {
            "icon": "👗",
            "title": "Mode",
            "description": "Das Publikum in Dubai reagiert gut auf Premium-Styling, Shopping und trendorientierte Kooperationen."
          }
        ]
      },
      "cta": {
        "title": "Starten Sie Ihre Kampagne in Dubai",
        "description": "Erreichen Sie in Dubai die richtige Zielgruppe mit Creators, die zu Ihrer Marke und Ihren Zielen passen.",
        "buttonLabel": "Kontakt aufnehmen",
        "buttonHref": "/contact"
      }
    }
  },
  "uae": {
    "path": "/influencer-marketing-uae",
    "title": "Influencer Marketing in den VAE | CA Agency",
    "description": "CA Agency ist eine Influencer-Marketing-Agentur in den VAE und setzt für Marken Creator-Kampagnen in Dubai, Abu Dhabi, Schardscha und darüber hinaus um.",
    "ogImage": "/images/site/og/influencer-marketing-uae-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      }
    ],
    "content": {
      "hero": {
        "title": "Influencer Marketing\nAgentur VAE",
        "subtitle": "CA Agency ist eine Influencer-Marketing-Agentur in den VAE. Wir verbinden Marken mit Creators in Dubai, Abu Dhabi, Schardscha und darüber hinaus, für leistungsorientierte Kampagnen auf Instagram, TikTok und YouTube.",
        "primaryButtonLabel": "Kampagne starten",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Unsere Creators kennenlernen",
        "secondaryButtonHref": "/talents"
      },
      "stats": [
        {
          "value": "Landesweit",
          "label": "Abdeckung"
        },
        {
          "value": "Mehrere Städte",
          "label": "Creator-Netzwerk"
        },
        {
          "value": "Plattformübergreifend",
          "label": "Kampagnenumsetzung"
        },
        {
          "value": "Regional",
          "label": "Markenreichweite"
        }
      ],
      "highlights": {
        "title": "Warum Marken unsere Influencer-Agentur in den VAE wählen",
        "items": [
          {
            "title": "Creators im ganzen Land",
            "description": "Wir aktivieren Creators in Dubai, Abu Dhabi, Schardscha und weiteren Emiraten nach der passenden Zielgruppe, nicht nur nach Followerzahlen."
          },
          {
            "title": "Plattformübergreifende Kampagnen",
            "description": "Unser Team steuert Influencer-Kampagnen von Anfang bis Ende auf Instagram, TikTok und YouTube, mit Gespür für die Besonderheiten des lokalen Marktes."
          },
          {
            "title": "Reichweite auf Arabisch und Englisch",
            "description": "Wir helfen Marken, lokale Relevanz mit internationaler Ausstrahlung zu verbinden, für das mehrsprachige Publikum in den VAE."
          },
          {
            "title": "Kommerzieller Fokus",
            "description": "Unsere Kampagnen in den VAE sind darauf ausgelegt, Ziele bei Bekanntheit, Kaufinteresse, Traffic und Conversion zu unterstützen, mit klarem Reporting."
          }
        ]
      },
      "talents": {
        "title": "Unsere Creators in den VAE",
        "buttonLabel": "Alle Talente ansehen",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Unsere Influencer-Leistungen in den VAE",
        "items": [
          {
            "icon": "📣",
            "title": "Kampagnenmanagement",
            "description": "Umsetzung von Influencer-Kampagnen von Anfang bis Ende auf Instagram, TikTok und YouTube."
          },
          {
            "icon": "🎯",
            "title": "Creator-Auswahl",
            "description": "Zugang zu den Top-Creators der VAE in Beauty, Mode, Lifestyle, Food und Tech."
          },
          {
            "icon": "🎥",
            "title": "Content-Produktion",
            "description": "Hochwertiger Branded Content, der beim Publikum in den VAE ankommt."
          }
        ]
      },
      "cta": {
        "title": "Starten Sie Ihre Influencer-Kampagne in den VAE",
        "description": "Erreichen Sie das Publikum in den VAE mit einer Influencer-Marketing-Agentur, die Ihre Marke mit den richtigen Creators und der passenden Kampagnenstrategie zusammenbringt.",
        "buttonLabel": "Kontakt aufnehmen",
        "buttonHref": "/contact"
      }
    }
  },
  "saudiArabia": {
    "path": "/influencer-marketing-saudi-arabia",
    "title": "Influencer Marketing in Saudi-Arabien | CA Agency",
    "description": "Erreichen Sie das saudische Publikum mit Creator-Partnerschaften, zugeschnitten auf Riad, Dschidda und den gesamten saudischen Markt.",
    "ogImage": "/images/site/og/influencer-marketing-saudi-arabia-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Saudi Arabia"
      }
    ],
    "content": {
      "hero": {
        "title": "Influencer Marketing Agentur\nfür Saudi-Arabien",
        "subtitle": "Arbeiten Sie mit Creators, die in Riad, Dschidda und im gesamten saudischen Markt ankommen, in kulturell sensiblen, leistungsorientierten Kampagnen.",
        "primaryButtonLabel": "Kampagne starten",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Unsere Arbeit ansehen",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "Hoch",
          "label": "Mobile Nutzung"
        },
        {
          "value": "Schnell",
          "label": "Wachstum der Creator Economy"
        },
        {
          "value": "Stark",
          "label": "Nachfrage nach Beauty & Mode"
        },
        {
          "value": "Regional",
          "label": "Einfluss"
        }
      ],
      "highlights": {
        "title": "Warum Influencer Marketing in Saudi-Arabien?",
        "items": [
          {
            "title": "Junges, digitales Publikum",
            "description": "Saudi-Arabien hat eine stark vernetzte Bevölkerung, die vor allem mobil online ist und aktiv mit Creators interagiert."
          },
          {
            "title": "Strategie mit kulturellem Gespür",
            "description": "Kampagnen funktionieren am besten, wenn Botschaften, Formate und Creators zur lokalen Kultur und zu den Erwartungen des Publikums passen."
          },
          {
            "title": "Hohes Vertrauen in Creators",
            "description": "Das Publikum verlässt sich oft auf Empfehlungen von Creators, wenn es Produkte entdeckt und Kaufentscheidungen trifft."
          },
          {
            "title": "Marken ziehen schnell nach",
            "description": "Immer mehr Marken verlagern Budget in Creator-Partnerschaften, um Reichweite und Relevanz aufzubauen."
          }
        ]
      },
      "talents": {
        "title": "Creators für Ihre Kampagne in Saudi-Arabien",
        "buttonLabel": "Alle Talente ansehen",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Die stärksten Branchen",
        "items": [
          {
            "icon": "💄",
            "title": "Beauty",
            "description": "Beauty-Inhalte und Tutorials sind ein wichtiger Treiber dafür, dass Produkte entdeckt und ausprobiert werden."
          },
          {
            "icon": "👗",
            "title": "Mode",
            "description": "Modest Fashion, Premium-Styling und saisonale Kampagnen erzielen starke Ergebnisse."
          },
          {
            "icon": "📱",
            "title": "Tech & Lifestyle",
            "description": "Tech-Launches und Lifestyle-Creators aus dem Alltag helfen Marken, aktuell und nahbar zu wirken."
          }
        ]
      },
      "cta": {
        "title": "Starten Sie Ihre Kampagne in Saudi-Arabien",
        "description": "Bauen Sie Creator-Partnerschaften auf, die für das saudische Publikum authentisch wirken.",
        "buttonLabel": "Kontakt aufnehmen",
        "buttonHref": "/contact"
      }
    }
  },
  "gcc": {
    "path": "/influencer-marketing-gcc",
    "title": "Influencer Marketing in der GCC-Region | CA Agency",
    "description": "Skalieren Sie Creator-Kampagnen in der GCC-Region mit einer abgestimmten Influencer-Marketing-Strategie für alle Golfmärkte.",
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
        "title": "Influencer Marketing Agentur\nfür die GCC-Region",
        "subtitle": "Setzen Sie Creator-Kampagnen in der gesamten GCC-Region um, mit einer abgestimmten Influencer-Marketing-Strategie für die VAE, Saudi-Arabien, Katar, Kuwait, Bahrain und Oman.",
        "primaryButtonLabel": "Jetzt starten",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Unsere Talente kennenlernen",
        "secondaryButtonHref": "/talents"
      },
      "stats": [
        {
          "value": "6",
          "label": "Kernmärkte"
        },
        {
          "value": "Regional",
          "label": "Kampagnenkoordination"
        },
        {
          "value": "Mehrsprachig",
          "label": "Umsetzung"
        },
        {
          "value": "Grenzüberschreitend",
          "label": "Creator-Reichweite"
        }
      ],
      "highlights": {
        "title": "Warum Marken unsere Influencer-Agentur für die GCC-Region wählen",
        "items": [
          {
            "title": "Regionale Konsistenz",
            "description": "Halten Sie Ihre Markenbotschaft einheitlich und passen Sie die Inhalte zugleich an jeden Markt an."
          },
          {
            "title": "Skalierbare Reichweite",
            "description": "Koordinieren Sie mehrere Creators und Länder, ohne den internen Aufwand zu vervielfachen."
          },
          {
            "title": "Lokale Relevanz",
            "description": "Setzen Sie auf Creators mit Marktkenntnis und auf Kampagnenstrukturen, die die Besonderheiten des jeweiligen Publikums berücksichtigen."
          },
          {
            "title": "Einfache Abläufe",
            "description": "Steuern Sie Briefing, Freigaben, Content und Reporting über einen einzigen Partner."
          }
        ]
      },
      "talents": {
        "title": "Creators für GCC-Kampagnen",
        "buttonLabel": "Alle Talente ansehen",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Die stärksten Branchen",
        "items": [
          {
            "icon": "✈️",
            "title": "Reisen & Hotellerie",
            "description": "Destinations- und Hotelkampagnen lassen sich in der Region besonders gut skalieren."
          },
          {
            "icon": "💄",
            "title": "Beauty",
            "description": "Beauty-Marken profitieren vom hohen Vertrauen in Creators und von Inhalten im Tutorial-Stil."
          },
          {
            "icon": "🛍️",
            "title": "Einzelhandel",
            "description": "Launches im Einzelhandel funktionieren gut, wenn Creators sie in jedem Markt lokal umsetzen."
          }
        ]
      },
      "cta": {
        "title": "Planen Sie Ihren Rollout in der GCC-Region",
        "description": "Koordinieren Sie ein Kampagnenkonzept über mehrere Golfmärkte hinweg.",
        "buttonLabel": "Kontakt aufnehmen",
        "buttonHref": "/contact"
      }
    }
  },
  "korea": {
    "path": "/influencer-marketing-korea",
    "title": "Influencer Marketing in Korea | CA Agency",
    "description": "CA Agency hilft Marken, das koreanische Publikum mit lokalisierten Influencer-Marketing-Kampagnen in Beauty, Mode, Lifestyle und Tech zu erreichen.",
    "ogImage": "/images/site/og/influencer-marketing-korea-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "South Korea"
      }
    ],
    "content": {
      "hero": {
        "title": "Influencer Marketing Agentur\nfür Korea",
        "subtitle": "CA Agency hilft Marken, das koreanische Publikum mit lokalisierten Influencer-Marketing-Kampagnen in Beauty, Mode, Lifestyle und Tech zu erreichen.",
        "primaryButtonLabel": "Jetzt starten",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Unsere Arbeit ansehen",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "Trendgetrieben",
          "label": "Konsumverhalten"
        },
        {
          "value": "Hoch",
          "label": "Beauty-Affinität"
        },
        {
          "value": "Stark",
          "label": "Social Commerce"
        },
        {
          "value": "Schnell",
          "label": "Kampagnentempo"
        }
      ],
      "highlights": {
        "title": "Warum Marken unsere Influencer-Agentur für Korea wählen",
        "items": [
          {
            "title": "Führend in Beauty",
            "description": "Korea ist einer der einflussreichsten Beauty-Märkte der Welt, und Creators genießen dort hohe Autorität."
          },
          {
            "title": "Gespür für Trends",
            "description": "Das Publikum reagiert auf neue Formate, starke Bildsprache und Botschaften, die kulturell am Puls der Zeit sind."
          },
          {
            "title": "Social Proof zählt",
            "description": "Creators spielen eine wichtige Rolle dabei, Produkte zu bestätigen und zum Ausprobieren anzuregen."
          },
          {
            "title": "Positionierung mit Exportwirkung",
            "description": "Kampagnen in Korea unterstützen oft sowohl die lokale Sichtbarkeit als auch die internationale Wahrnehmung der Marke."
          }
        ]
      },
      "talents": {
        "title": "Creators für Ihre Kampagne in Korea",
        "buttonLabel": "Alle Talente ansehen",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Die stärksten Branchen",
        "items": [
          {
            "icon": "💄",
            "title": "Beauty & Hautpflege",
            "description": "Produkt-Storytelling, das erklärt und Wissen vermittelt, funktioniert in Korea besonders gut."
          },
          {
            "icon": "👟",
            "title": "Mode & Streetwear",
            "description": "Stilprägende Creator-Inhalte sorgen für Trendrelevanz und Markenprestige."
          },
          {
            "icon": "📲",
            "title": "Tech & Gadgets",
            "description": "Produktdemos und die Einbindung in den Alltag helfen Tech-Marken, sich abzuheben."
          }
        ]
      },
      "cta": {
        "title": "Starten Sie Ihre Kampagne in Korea",
        "description": "Bauen Sie kulturell relevante Creator-Partnerschaften für den koreanischen Markt auf.",
        "buttonLabel": "Kontakt aufnehmen",
        "buttonHref": "/contact"
      }
    }
  },
  "asia": {
    "path": "/influencer-marketing-asia",
    "title": "Influencer Marketing in Asien | CA Agency",
    "description": "CA Agency setzt für Marken Influencer-Marketing-Kampagnen in ganz Asien um, mit lokalisierter Creator-Strategie und marktübergreifender Umsetzung.",
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
        "title": "Influencer Marketing Agentur\nfür Asien",
        "subtitle": "CA Agency setzt für Marken Influencer-Marketing-Kampagnen in ganz Asien um, mit Creators, die ihren Markt kennen, lokalisierter Strategie und grenzüberschreitendem Kampagnenmanagement.",
        "primaryButtonLabel": "Kampagne starten",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Unsere Arbeit ansehen",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "Mehrere Märkte",
          "label": "Kampagnenumsetzung"
        },
        {
          "value": "Regional",
          "label": "Creator-Netzwerk"
        },
        {
          "value": "Lokalisiert",
          "label": "Marktstrategie"
        },
        {
          "value": "Plattformübergreifend",
          "label": "Umsetzung"
        }
      ],
      "highlights": {
        "title": "Warum Marken eine Influencer-Agentur für Asien brauchen",
        "items": [
          {
            "title": "Jeder Markt ist anders",
            "description": "Asien ist nicht ein einziges Publikum. Wir passen Creator-Auswahl, Botschaften und Content-Formate an jeden Markt und sein Konsumverhalten an."
          },
          {
            "title": "Grenzüberschreitende Koordination",
            "description": "Wir helfen Marken, Briefings, Freigaben, Produktion und Reporting über mehrere asiatische Märkte hinweg zu steuern, ohne die Umsetzung zu zersplittern."
          },
          {
            "title": "Strategie nach Plattform",
            "description": "Kampagnen bauen auf dem richtigen Mix aus Instagram, TikTok, YouTube und dem lokalen Plattformverhalten auf, je nach Zielmarkt."
          },
          {
            "title": "Kommerzielle Wirkung",
            "description": "Uns geht es nicht nur um Reichweite. Wir entwickeln Creator-Kampagnen, die Ziele bei Bekanntheit, Kaufinteresse, Traffic und Conversion unterstützen."
          }
        ]
      },
      "talents": {
        "title": "Creators für Kampagnen in Asien",
        "buttonLabel": "Alle Talente ansehen",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Die stärksten Kategorien in Asien",
        "items": [
          {
            "icon": "💄",
            "title": "Beauty & Hautpflege",
            "description": "Beauty-Marken profitieren in vielen asiatischen Märkten von erklärenden Inhalten, Produkttests und hohem Vertrauen in Creators."
          },
          {
            "icon": "📱",
            "title": "Tech & Mobile",
            "description": "Creators helfen Tech-Marken, Funktionen zu erklären, Produkte abzugrenzen und mit Demos und Reviews Conversions zu erzielen."
          },
          {
            "icon": "🧳",
            "title": "Reisen & Hotellerie",
            "description": "Die regionale Reisenachfrage und Inhalte rund um Reiseziele machen Creator-Partnerschaften wirksam für Bekanntheit und Buchungen."
          }
        ]
      },
      "cta": {
        "title": "Starten Sie Ihre Influencer-Kampagne in Asien",
        "description": "Arbeiten Sie mit einer Influencer-Marketing-Agentur, die Creators, Content und Strategie über asiatische Märkte hinweg koordinieren kann.",
        "buttonLabel": "Kontakt aufnehmen",
        "buttonHref": "/contact"
      }
    }
  },
  "usa": {
    "path": "/influencer-marketing-usa",
    "title": "Influencer Marketing in den USA | CA Agency",
    "description": "CA Agency ist eine Influencer-Marketing-Agentur für die USA und setzt für Marken Creator-Kampagnen auf Instagram, TikTok und YouTube um.",
    "ogImage": "/images/site/og/influencer-marketing-usa-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States"
      }
    ],
    "content": {
      "hero": {
        "title": "Influencer Marketing Agentur\nfür die USA",
        "subtitle": "CA Agency ist eine Influencer-Marketing-Agentur für die USA und setzt für Marken leistungsorientierte Creator-Kampagnen auf Instagram, TikTok und YouTube um.",
        "primaryButtonLabel": "Jetzt starten",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Unsere Arbeit ansehen",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "6,2 Mrd. $",
          "label": "US-Marktvolumen 2025"
        },
        {
          "value": "84 %",
          "label": "Erwachsene auf YouTube"
        },
        {
          "value": "75 %",
          "label": "Marketer nutzen Instagram"
        },
        {
          "value": "60 %",
          "label": "nutzen TikTok-Marketing"
        }
      ],
      "intro": {
        "heading": "Die Influencer-Marketing-Agentur für Marken im US-Markt",
        "paragraphs": [
          {
            "text": "Als Full-Service-Agentur für Influencer Marketing in den USA hilft CA Agency Marken, aus der Zusammenarbeit mit amerikanischen Creators messbares Wachstum zu machen. Von New York und Los Angeles bis Miami und Austin entwickeln wir Creator-Kampagnen, die das US-Publikum dort erreichen, wo es ohnehin seine Zeit verbringt: auf Instagram, TikTok und YouTube. Jede Aktivierung verknüpfen wir mit konkreten Geschäftsergebnissen."
          },
          {
            "text": "Die Creator Economy der USA ist die größte und wettbewerbsintensivste der Welt. Ob eine Kampagne Umsatz bringt oder untergeht, entscheidet sich deshalb bei Creator-Auswahl, Briefing und Erfolgsmessung. Unser Team übernimmt alle drei Aufgaben: Wir bringen Ihre Marke mit geprüften amerikanischen Influencern zusammen, deren Publikum, Nische und Engagement wirklich zu Ihrem Produkt passen, und steuern anschließend Verträge, Content-Freigaben, Nutzungsrechte und die FTC-konforme Kennzeichnung von Anfang bis Ende."
          },
          {
            "text": "Ob Sie als DTC-Beauty-Marke im TikTok Shop starten, als SaaS-Unternehmen auf YouTube Autorität aufbauen oder als Händler UGC für Paid Social skalieren: Wir stellen den passenden Mix aus Micro-, Mid-Tier- und Macro-Creators für Ihre Ziele und Ihr Budget zusammen. Jede Kampagne wird anhand klarer KPIs ausgewertet, nämlich Reichweite, Engagement, Klicks und Conversions. So wissen Sie jederzeit, was Ihr Influencer-Marketing-Budget gebracht hat."
          }
        ]
      },
      "highlights": {
        "title": "Warum Marken unsere Influencer-Agentur für die USA wählen",
        "items": [
          {
            "title": "Der größte Markt der Welt",
            "description": "Die Creator Economy der USA bietet Größe, eine ausgereifte Infrastruktur und nachgewiesene Performance über Branchen hinweg."
          },
          {
            "title": "Hohes Verbrauchervertrauen",
            "description": "Verbraucher verlassen sich auf Creators, wenn sie Produkte entdecken, sich bestätigen lassen und Sicherheit für den Kauf suchen."
          },
          {
            "title": "Plattformvielfalt",
            "description": "Starke Creator-Ökosysteme gibt es auf YouTube, Instagram, TikTok und auf neu entstehenden Kanälen."
          },
          {
            "title": "Vorteil Micro-Influencer",
            "description": "Kleinere Creators schneiden bei Engagement und Kosteneffizienz oft besser ab."
          }
        ]
      },
      "talents": {
        "title": "Creators für Ihre Kampagne in den USA",
        "buttonLabel": "Alle Talente ansehen",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Die stärksten Branchen",
        "items": [
          {
            "icon": "💄",
            "title": "Beauty & Körperpflege",
            "description": "Micro-Influencer helfen Beauty-Marken, Produkttests und Conversions voranzutreiben."
          },
          {
            "icon": "👗",
            "title": "Mode & Einzelhandel",
            "description": "Kurze Style-Videos unterstützen sowohl die Markenbekanntheit als auch den Direktverkauf."
          },
          {
            "icon": "💪",
            "title": "Gesundheit & Wellness",
            "description": "Wellness-Creators helfen Marken, Vertrauen und regelmäßige Interaktion aufzubauen."
          }
        ]
      },
      "faq": {
        "title": "Influencer Marketing in den USA: häufige Fragen",
        "items": [
          {
            "question": "Was kostet Influencer Marketing in den USA?",
            "answer": "Einen Einheitspreis für Influencer Marketing in den USA gibt es nicht. Die Kosten hängen von der Plattform, den beteiligten Creator-Größen (von Micro bis Macro), der Zahl der Creators, den vereinbarten Inhalten und den Nutzungsrechten ab. Statt einen Pauschalpreis zu nennen, plant CA Agency jede Kampagne nach Ihren Zielen und Ihrem Budget und richtet die Ausgaben an messbaren Ergebnissen aus. So investieren Sie in Resultate und nicht allein in Followerzahlen. Nennen Sie uns Ihr Budget und Ihre Ziele, und wir stellen den passenden Creator-Mix zusammen."
          },
          {
            "question": "Welche Plattformen eignen sich in den USA am besten für Influencer Marketing?",
            "answer": "Instagram, TikTok und YouTube dominieren das Influencer Marketing in den USA. Instagram und TikTok sind bei Beauty, Mode und Lifestyle führend, TikTok sorgt für Entdeckung und virale Reichweite, und YouTube ist am stärksten bei ausführlichen Reviews, Tech und Käufen, die länger überlegt werden. Wir empfehlen den Plattform-Mix passend zu Ihrer Zielgruppe und Ihren Zielen."
          },
          {
            "question": "Wie finden Sie die richtigen US-Influencer für meine Marke?",
            "answer": "Wir prüfen Creators nach Demografie ihres Publikums, Qualität des Engagements, Content-Stil, Brand Safety und bisheriger Performance, nicht nur nach der Followerzahl. Jeder Creator wird mit Ihrer Zielkundschaft, Ihrer Kategorie und Ihrem Kampagnenziel abgeglichen, bevor wir ihn empfehlen."
          },
          {
            "question": "Übernehmen Sie FTC-Kennzeichnung und Creator-Verträge?",
            "answer": "Ja. Wir übernehmen Creator-Verträge, Nutzungs- und Whitelisting-Rechte, Content-Freigaben und die FTC-konforme Kennzeichnung (etwa mit #ad) von Anfang bis Ende, damit Ihre Kampagnen regelkonform bleiben und zur Marke passen."
          },
          {
            "question": "Wie messen Sie die Ergebnisse von Influencer-Kampagnen?",
            "answer": "Jede Kampagne ist an klare KPIs geknüpft: Reichweite, Impressionen, Engagement-Rate, Link-Klicks und Conversions. Dazu kommt ein transparentes Reporting, damit Sie genau sehen, was Ihr Budget gebracht hat."
          },
          {
            "question": "Können Sie Kampagnen landesweit oder für einzelne US-Städte umsetzen?",
            "answer": "Beides. Wir setzen landesweite US-Kampagnen um und können auch gezielt einzelne Märkte wie New York, Los Angeles, Miami oder Chicago ansprechen, mit Creators, die regional relevant sind."
          }
        ]
      },
      "cta": {
        "title": "Starten Sie Ihre Kampagne in den USA",
        "description": "Erreichen Sie das amerikanische Publikum mit Creators, die zu Ihrer Zielgruppe und Ihren Zielen passen.",
        "buttonLabel": "Kontakt aufnehmen",
        "buttonHref": "/contact"
      }
    }
  },
  "uk": {
    "path": "/influencer-marketing-uk",
    "title": "Influencer Marketing in Großbritannien | CA Agency",
    "description": "Influencer-Kampagnen in Großbritannien mit britischen Creators auf Instagram, TikTok und YouTube, mit leistungsorientierter Strategie und klarem Reporting.",
    "ogImage": "/images/site/og/influencer-marketing-uk-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "United Kingdom"
      }
    ],
    "content": {
      "hero": {
        "title": "Influencer Marketing Agentur\nfür Großbritannien",
        "subtitle": "Verbinden Sie Ihre Marke mit den einflussreichsten Content Creators Großbritanniens. Erschließen Sie Europas größten Markt für Influencer Marketing, mit hoher Kaufbereitschaft und ausgereiften Creator-Ökosystemen.",
        "primaryButtonLabel": "Jetzt starten",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Unsere Arbeit ansehen",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "930 Mio. £",
          "label": "UK-Markt 2024"
        },
        {
          "value": "55,5 Mio.",
          "label": "Social-Media-Nutzer"
        },
        {
          "value": "69 %",
          "label": "Kauf nach Creator-Inhalten"
        },
        {
          "value": "89 %",
          "label": "Marken nutzen Instagram"
        }
      ],
      "highlights": {
        "title": "Warum Influencer Marketing in Großbritannien?",
        "items": [
          {
            "title": "Europas größter Markt",
            "description": "Großbritannien führt in Europa bei Reife, Budgets und operativer Professionalität im Influencer Marketing."
          },
          {
            "title": "Hohe Conversion-Raten",
            "description": "Britische Verbraucher kaufen häufig, nachdem sie Empfehlungen von Creators gesehen haben."
          },
          {
            "title": "Ausgereiftes Creator-Ökosystem",
            "description": "Marken setzen zunehmend auf langfristige, authentische Creator-Partnerschaften statt auf einmalige Promi-Posts."
          },
          {
            "title": "Datenbasierte Ergebnisse",
            "description": "Erfolgsmessung und Brand Safety gehören im britischen Markt zu den Grunderwartungen."
          }
        ]
      },
      "talents": {
        "title": "Creators für Ihre Kampagne in Großbritannien",
        "buttonLabel": "Alle Talente ansehen",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Die stärksten Branchen",
        "items": [
          {
            "icon": "👗",
            "title": "Mode",
            "description": "Mode bleibt eine der leistungsstärksten Creator-Kategorien in Großbritannien."
          },
          {
            "icon": "💄",
            "title": "Beauty",
            "description": "Beauty-Kampagnen profitieren von der hohen Autorität der Creators und von Tutorial-Formaten."
          },
          {
            "icon": "🍽️",
            "title": "Essen & Trinken",
            "description": "Das Vertrauen in Creators ist bei Essen, Getränken und Alltagsempfehlungen besonders hoch."
          }
        ]
      },
      "cta": {
        "title": "Starten Sie Ihre Kampagne in Großbritannien",
        "description": "Bauen Sie vertrauensstarke Creator-Partnerschaften für das britische Publikum auf.",
        "buttonLabel": "Kontakt aufnehmen",
        "buttonHref": "/contact"
      }
    }
  },
  "canada": {
    "path": "/influencer-marketing-canada",
    "title": "Influencer Marketing in Kanada | CA Agency",
    "description": "Erreichen Sie Kanadas Publikum mit zweisprachigen Creator-Kampagnen in Toronto, Vancouver, Montreal und weiteren wichtigen Märkten, mit klarem Reporting.",
    "ogImage": "/images/site/og/influencer-marketing-canada-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Canada"
      }
    ],
    "content": {
      "hero": {
        "title": "Influencer Marketing Agentur\nfür Kanada",
        "subtitle": "Verbinden Sie Ihre Marke mit Kanadas führenden Content Creators. Nutzen Sie einen starken zweisprachigen Creator-Markt in Toronto, Vancouver und Montreal.",
        "primaryButtonLabel": "Jetzt starten",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Unsere Arbeit ansehen",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "660 Mio. $",
          "label": "Marktvolumen 2025"
        },
        {
          "value": "882.000+",
          "label": "Aktive Influencer"
        },
        {
          "value": "70 %",
          "label": "Entdecken Produkte über Influencer"
        },
        {
          "value": "40 %",
          "label": "Kaufen sofort"
        }
      ],
      "highlights": {
        "title": "Warum Influencer Marketing in Kanada?",
        "items": [
          {
            "title": "Großes Creator-Netzwerk",
            "description": "Kanada bietet eine breite Creator-Abdeckung in den großen Städten und den wichtigsten Content-Kategorien."
          },
          {
            "title": "Hohe Kaufabsicht",
            "description": "Ein großer Teil der kanadischen Verbraucher entdeckt Produkte über Creators."
          },
          {
            "title": "Zweisprachige Expertise",
            "description": "Die Lokalisierung auf Englisch und Französisch ist wichtig, vor allem bei Kampagnen für Québec."
          },
          {
            "title": "Langfristiger Wert",
            "description": "Laufende Zusammenarbeit mit Creators schneidet in der Regel besser ab als einmalige Partnerschaften."
          }
        ]
      },
      "talents": {
        "title": "Unsere Creators für den kanadischen Markt",
        "buttonLabel": "Alle Talente ansehen",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Die stärksten Branchen",
        "items": [
          {
            "icon": "👗",
            "title": "Mode",
            "description": "Lokale Relevanz in Verbindung mit globalen Trends macht Mode zu einer starken Creator-Kategorie."
          },
          {
            "icon": "💄",
            "title": "Beauty",
            "description": "Hautpflege- und Beauty-Inhalte funktionieren gut, wenn Creators Wissen vermitteln."
          },
          {
            "icon": "💻",
            "title": "Tech",
            "description": "Tech-Launches und Reviews profitieren vom Vertrauen in Creators und von ausführlichen Demos."
          }
        ]
      },
      "cta": {
        "title": "Starten Sie Ihre Kampagne in Kanada",
        "description": "Erreichen Sie das kanadische Publikum mit dem richtigen Creator-Mix und Gespür für die Besonderheiten des Marktes.",
        "buttonLabel": "Kontakt aufnehmen",
        "buttonHref": "/contact"
      }
    }
  },
  "australia": {
    "path": "/influencer-marketing-australia",
    "title": "Influencer Marketing in Australien | CA Agency",
    "description": "Creator-Kampagnen für Australien, in Sydney, Melbourne und darüber hinaus: mit geprüften Creators und transparentem Performance-Reporting.",
    "ogImage": "/images/site/og/influencer-marketing-australia-v2.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Australia"
      }
    ],
    "content": {
      "hero": {
        "title": "Influencer Marketing Agentur\nfür Australien",
        "subtitle": "Verbinden Sie Ihre Marke mit Australiens einflussreichsten Content Creators in Sydney, Melbourne und darüber hinaus.",
        "primaryButtonLabel": "Jetzt starten",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Unsere Arbeit ansehen",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "589 Mio. $",
          "label": "Marktvolumen 2025"
        },
        {
          "value": "20,9 Mio.",
          "label": "Social-Media-Nutzer"
        },
        {
          "value": "46 %",
          "label": "Kaufen nach dem Ansehen"
        },
        {
          "value": "70 %",
          "label": "Marken erhöhen ihr Budget"
        }
      ],
      "highlights": {
        "title": "Warum Influencer Marketing in Australien?",
        "items": [
          {
            "title": "Sehr aktives Publikum",
            "description": "Australier nutzen soziale Medien intensiv und reagieren stark auf Inhalte von Creators."
          },
          {
            "title": "Starker Einfluss auf den Kauf",
            "description": "Influencer spielen eine spürbare Rolle bei Recherche, Abwägung und Kaufentscheidung."
          },
          {
            "title": "Authentizität zuerst",
            "description": "Nahbare Creators und Partnerschaften auf Vertrauensbasis schneiden besser ab als allzu glatt polierte Kampagnen."
          },
          {
            "title": "Wachsende Investitionen",
            "description": "Australische Marken erhöhen ihre Ausgaben für Influencer Marketing weiter."
          }
        ]
      },
      "intro": {
        "heading": "Eine Influencer-Marketing-Agentur für Sydney, Melbourne und ganz Australien",
        "paragraphs": [
          {
            "text": "CA Agency setzt Influencer-Marketing-Kampagnen für Marken um, die das australische Publikum erreichen wollen, von landesweiten Launches bis zu Aktivitäten auf Stadtebene in Sydney und Melbourne. Wir bringen Ihre Marke mit australischen Creators auf Instagram, TikTok und YouTube zusammen und betreuen die Kampagne vom Briefing bis zum Report."
          },
          {
            "text": "Influencer Marketing in Sydney ist geprägt von Beauty, Mode, Fitness und dem Strand- und Outdoor-Lifestyle, für den die Stadt bekannt ist. Creators aus Sydney sind eine gute Wahl für Produkteinführungen, Event-Berichterstattung und Inhalte, die hochwertig und erstrebenswert wirken sollen."
          },
          {
            "text": "Influencer Marketing in Melbourne hat einen anderen Charakter: redaktioneller, stärker auf Mode, Essen, Kaffee und Kultur ausgerichtet. Creators aus Melbourne passen zu Marken, die durchdachte, stilbetonte Inhalte und ein Publikum suchen, das Trends aufmerksam verfolgt. Viele landesweite Kampagnen nutzen beide Städte und ergänzen dann Creators in Brisbane, Perth und Adelaide für mehr Reichweite."
          },
          {
            "text": "Für Beauty- und Hautpflegemarken, darunter koreanische Beauty-Marken, die in Australien starten, planen wir nach den lokalen Regeln ebenso wie nach dem lokalen Geschmack. Werbung muss klar gekennzeichnet sein, und für Produkte, die als therapeutische Güter reguliert sind, wozu in Australien viele Sonnenschutzmittel gehören, gelten strengere Regeln für bezahlte Empfehlungen. Wir briefen die Creators entsprechend, bevor Inhalte entstehen."
          }
        ]
      },
      "process": {
        "title": "So setzen wir eine Influencer-Kampagne in Australien um",
        "steps": [
          {
            "title": "Briefing und Ziele",
            "description": "Wir stimmen Ziel, Zielgruppe, Budget und Zeitplan ab und klären, ob die Kampagne landesweit läuft oder sich auf Sydney, Melbourne oder eine andere Stadt konzentriert."
          },
          {
            "title": "Creator-Shortlist",
            "description": "Sie erhalten eine Shortlist australischer Creators mit Angaben zu Standort der Zielgruppe, Engagement und bisherigen Markenkooperationen, geprüft, bevor wir jemanden empfehlen."
          },
          {
            "title": "Verträge und Briefing",
            "description": "Wir übernehmen Verträge, Nutzungsrechte und ein kreatives Briefing, das die Werbekennzeichnung enthält, die die australischen Regeln verlangen."
          },
          {
            "title": "Inhalte und Freigabe",
            "description": "Die Creators produzieren die Inhalte, wir prüfen sie anhand des Briefings, und Sie geben sie frei, bevor sie online gehen."
          },
          {
            "title": "Reporting",
            "description": "Sie erhalten Reichweite, Engagement, Klicks und Conversions je Creator und je Stadt und sehen klar, was sich zu wiederholen lohnt."
          }
        ]
      },
      "talents": {
        "title": "Unsere Creators für den australischen Markt",
        "buttonLabel": "Alle Talente ansehen",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Die stärksten Branchen",
        "items": [
          {
            "icon": "🏃",
            "title": "Lifestyle & Fitness",
            "description": "Lifestyle- und Fitness-Creators haben großen Einfluss auf das australische Publikum."
          },
          {
            "icon": "👗",
            "title": "Mode",
            "description": "Mode funktioniert gut mit Creator-Storytelling, das Trends aufgreift und trotzdem nahbar bleibt."
          },
          {
            "icon": "💄",
            "title": "Beauty",
            "description": "Beauty-Creators tragen dazu bei, dass Produkte entdeckt, ausprobiert und immer wieder aufgegriffen werden."
          }
        ]
      },
      "faq": {
        "title": "Influencer Marketing in Australien: häufige Fragen",
        "items": [
          {
            "question": "Setzen Sie Influencer-Kampagnen in Sydney und Melbourne um?",
            "answer": "Ja. Wir planen stadtspezifische Kampagnen mit Creators aus Sydney und Melbourne sowie landesweite Kampagnen, die Brisbane, Perth und Adelaide ergänzen."
          },
          {
            "question": "Hat CA Agency ihren Sitz in Australien?",
            "answer": "Nein. Unser Hauptsitz ist in Dubai, mit Divisionen in Amsterdam und Delaware. Wir steuern australische Kampagnen remote mit Creators, die in Australien leben, und betreuen Briefing, Verträge, Freigaben und Reporting mit einem Team."
          },
          {
            "question": "Wie müssen gesponserte Inhalte in Australien gekennzeichnet werden?",
            "answer": "Bezahlte Creator-Inhalte müssen nach dem australischen Werbekodex und dem Verbraucherrecht klar als Werbung erkennbar sein, zum Beispiel durch einen eindeutigen Hinweis „Ad“ oder ein Label für bezahlte Partnerschaften. Das steht in jedem Briefing, und wir prüfen es vor der Freigabe."
          },
          {
            "question": "Gibt es in Australien besondere Regeln für Hautpflege und Sonnenschutz?",
            "answer": "Ja. Für Produkte, die als therapeutische Güter reguliert sind, wozu viele Sonnenschutzmittel gehören, gelten strengere Werberegeln, darunter Einschränkungen für bezahlte Testimonials. Wir prüfen, wie Ihr Produkt eingestuft ist, bevor wir Creator-Inhalte planen."
          },
          {
            "question": "Was kostet Influencer Marketing in Australien?",
            "answer": "Das hängt von der Plattform, der Größe und Anzahl der Creators, den Inhalten und den Nutzungsrechten ab. Wir planen jede Kampagne nach Ihrem Budget und Ihren Zielen, statt einen Pauschalpreis zu nennen."
          }
        ]
      },
      "cta": {
        "title": "Starten Sie Ihre Kampagne in Australien",
        "description": "Erreichen Sie das australische Publikum mit Creators, die zu Ihrer Kategorie und Ihrem Markt passen.",
        "buttonLabel": "Kontakt aufnehmen",
        "buttonHref": "/contact"
      }
    }
  },
  "sydney": {
    "path": "/influencer-marketing-sydney",
    "title": "Influencer Marketing in Sydney | CA Agency",
    "description": "Influencer-Kampagnen für Sydney: geprüfte Creators aus Sydney für Beauty-, Hautpflege- und Lifestyle-Marken auf Instagram und TikTok, mit klarem Reporting.",
    "ogImage": "/images/site/og/influencer-marketing-sydney-v1.jpg",
    "areaServed": [
      {
        "@type": "City",
        "name": "Sydney"
      }
    ],
    "content": {
      "hero": {
        "title": "Influencer Marketing Agentur\nfür Sydney",
        "subtitle": "CA Agency setzt Influencer-Marketing-Kampagnen für Sydney um und bringt Beauty-, Hautpflege- und Lifestyle-Marken mit Creators aus Sydney auf Instagram, TikTok und YouTube zusammen.",
        "primaryButtonLabel": "Jetzt starten",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Unsere Arbeit ansehen",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "Umgesetzte Kampagnen"
        },
        {
          "value": "18M+",
          "label": "Follower insgesamt"
        },
        {
          "value": "150+",
          "label": "Globale Marken"
        },
        {
          "value": "Sydney",
          "label": "Marktfokus"
        }
      ],
      "intro": {
        "heading": "Eine Influencer-Marketing-Agentur für Kampagnen in Sydney",
        "paragraphs": [
          {
            "text": "Sydney ist Australiens größte Stadt und das Zentrum der australischen Beauty-, Mode- und Medienbranche. Marken, die eine Influencer-Marketing-Agentur für Sydney suchen, wollen meist eines von drei Dingen: einen Launch, der auffällt, Inhalte mit hochwertiger, erstrebenswerter Anmutung oder verlässliche Reichweite beim stilbewussten Publikum der Stadt. CA Agency plant Kampagnen in Sydney entlang dieser Ziele."
          },
          {
            "text": "Creator-Inhalte aus Sydney haben einen erkennbaren Charakter: Strände und Küste, Fitness und Wellness, Clean Beauty und eine helle Outdoor-Ästhetik, die besonders gut zu Hautpflege und Sonnenpflege passt. Wir bringen Ihre Marke mit Influencern aus Sydney zusammen, deren Follower tatsächlich in der Stadt und ihrer Umgebung leben, von den Eastern Suburbs bis zum Inner West, und prüfen den Standort der Zielgruppe, bevor wir jemanden empfehlen."
          },
          {
            "text": "Wir sind keine Agentur mit Sitz in Sydney. Unser Hauptsitz ist in Dubai, mit Divisionen in Amsterdam und Delaware, und wir steuern australische Kampagnen remote mit Creators vor Ort. Für Marken bedeutet das: ein Team für Sydney, das übrige Australien und jeden weiteren Markt, in dem Sie aktiv sind, überall mit demselben Reporting."
          },
          {
            "text": "Beauty und Hautpflege sind unsere Kernkategorien, dazu gehören koreanische Beauty-Marken, die in Australien starten. Wir planen vom ersten Briefing an nach den australischen Werberegeln: Gesponserte Inhalte müssen klar gekennzeichnet sein, und für Produkte, die als therapeutische Güter reguliert sind, wozu viele Sonnenschutzmittel gehören, gelten strengere Grenzen für bezahlte Empfehlungen."
          }
        ]
      },
      "process": {
        "title": "So setzen wir eine Influencer-Kampagne in Sydney um",
        "steps": [
          {
            "title": "Briefing und Ziele",
            "description": "Wir stimmen Ziel, Zielgruppe, Budget und Zeitplan ab und entscheiden, ob die Kampagne nur in Sydney läuft oder Teil eines landesweiten Plans ist."
          },
          {
            "title": "Creator-Shortlist",
            "description": "Sie erhalten eine Shortlist von Creators aus Sydney mit Angaben zu Standort der Zielgruppe, Engagement und bisherigen Markenkooperationen, geprüft, bevor wir jemanden empfehlen."
          },
          {
            "title": "Verträge und Briefing",
            "description": "Wir übernehmen Verträge, Nutzungsrechte und ein kreatives Briefing, das die Werbekennzeichnung enthält, die die australischen Regeln verlangen."
          },
          {
            "title": "Inhalte und Freigabe",
            "description": "Die Creators produzieren die Inhalte, wir prüfen sie anhand des Briefings, und Sie geben sie frei, bevor sie online gehen."
          },
          {
            "title": "Reporting",
            "description": "Sie erhalten Reichweite, Engagement, Klicks und Conversions je Creator und sehen klar, was sich zu wiederholen lohnt."
          }
        ]
      },
      "highlights": {
        "title": "Warum Marken uns für Influencer Marketing in Sydney wählen",
        "items": [
          {
            "title": "Echtes Publikum in Sydney",
            "description": "Wir prüfen, wo die Follower eines Creators leben, damit Ihr Budget Menschen in Sydney erreicht und nicht nur Menschen, die Inhalte aus Sydney mögen."
          },
          {
            "title": "Fokus auf Beauty und Hautpflege",
            "description": "Unsere Kampagnen sind vor allem für Beauty-, Hautpflege- und Lifestyle-Marken konzipiert, die Kategorien, in denen Creators aus Sydney am stärksten sind."
          },
          {
            "title": "Inhalte für den Launch",
            "description": "Creators aus Sydney produzieren hochwertige, erstrebenswerte Inhalte, die für Launches funktionieren und sich zugleich als Paid-Social-Creatives nutzen lassen."
          },
          {
            "title": "Ein Team, jeder Markt",
            "description": "Sydney kann für sich stehen oder zusammen mit Melbourne, landesweiten Aktivitäten in Australien und Kampagnen in anderen Ländern laufen."
          }
        ]
      },
      "talents": {
        "title": "Creators, mit denen wir arbeiten",
        "buttonLabel": "Alle Talente ansehen",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Die stärksten Branchen in Sydney",
        "items": [
          {
            "icon": "💄",
            "title": "Beauty & Hautpflege",
            "description": "Hautpflege, Sonnenpflege und Clean Beauty passen zum Outdoor-Lifestyle und zum beautybewussten Publikum in Sydney."
          },
          {
            "icon": "🏃",
            "title": "Fitness & Wellness",
            "description": "Das aktive Leben an der Küste macht Fitness- und Wellness-Creators in Sydney besonders einflussreich."
          },
          {
            "icon": "👗",
            "title": "Mode",
            "description": "Bademode, Resort Wear und Premium-Mode funktionieren gut mit den stilbetonten Creators aus Sydney."
          }
        ]
      },
      "faq": {
        "title": "Influencer Marketing in Sydney: häufige Fragen",
        "items": [
          {
            "question": "Ist CA Agency eine Influencer-Marketing-Agentur in Sydney?",
            "answer": "Wir setzen Influencer-Marketing-Kampagnen für Sydney um, haben dort aber keinen Sitz. Unser Hauptsitz ist in Dubai, mit Divisionen in Amsterdam und Delaware. Die Kampagnen werden von einem Team remote gesteuert und von Creators umgesetzt, die in Sydney leben."
          },
          {
            "question": "Wie finden Sie Influencer aus Sydney für eine Marke?",
            "answer": "Wir wählen Creators nach Standort der Zielgruppe, Qualität des Engagements, Content-Stil, Brand Safety und bisheriger Performance aus. Bei einer Kampagne für Sydney prüfen wir, ob ein nennenswerter Teil der Zielgruppe im Raum Sydney lebt, bevor wir einen Creator empfehlen."
          },
          {
            "question": "Was kostet Influencer Marketing in Sydney?",
            "answer": "Das hängt von der Plattform, der Größe und Anzahl der Creators, den Inhalten und den Nutzungsrechten ab. Wir planen jede Kampagne in Sydney nach Ihrem Budget und Ihren Zielen, statt einen Pauschalpreis zu nennen."
          },
          {
            "question": "Welche Plattformen eignen sich für Influencer Marketing in Sydney am besten?",
            "answer": "Instagram und TikTok sind bei Beauty, Mode, Fitness und Lifestyle führend, YouTube eignet sich für längere Reviews. Wir empfehlen den Mix passend zu Ihrer Zielgruppe und Ihrem Kampagnenziel."
          },
          {
            "question": "Kümmern Sie sich um die Kennzeichnung gesponserter Inhalte in Australien?",
            "answer": "Ja. Bezahlte Creator-Inhalte müssen nach dem australischen Werbekodex und dem Verbraucherrecht klar als Werbung erkennbar sein. Die Kennzeichnung ist Teil jedes Briefings, und wir prüfen jeden Beitrag vor der Freigabe. Bei therapeutischen Gütern wie vielen Sonnenschutzmitteln prüfen wir außerdem die strengeren Regeln für Empfehlungen."
          },
          {
            "question": "Lässt sich eine Kampagne in Sydney auf Melbourne oder das übrige Australien ausweiten?",
            "answer": "Ja. Viele Marken beginnen in Sydney und ergänzen Melbourne, danach Brisbane, Perth und Adelaide. Wir behalten einen Kampagnenrahmen bei und ergänzen Creators je Stadt."
          }
        ]
      },
      "cta": {
        "title": "Starten Sie Ihre Kampagne in Sydney",
        "description": "Erzählen Sie uns von Ihrer Marke, und wir bringen Sie mit den passenden Creators aus Sydney zusammen.",
        "buttonLabel": "Kontakt aufnehmen",
        "buttonHref": "/contact"
      }
    }
  },
  "melbourne": {
    "path": "/influencer-marketing-melbourne",
    "title": "Influencer Marketing in Melbourne | CA Agency",
    "description": "Influencer-Kampagnen für Melbourne: geprüfte Creators aus Melbourne für Mode-, Beauty- und Hautpflegemarken auf Instagram und TikTok, mit klarem Reporting.",
    "ogImage": "/images/site/og/influencer-marketing-melbourne-v1.jpg",
    "areaServed": [
      {
        "@type": "City",
        "name": "Melbourne"
      }
    ],
    "content": {
      "hero": {
        "title": "Influencer Marketing Agentur\nfür Melbourne",
        "subtitle": "CA Agency setzt Influencer-Marketing-Kampagnen für Melbourne um und bringt Beauty-, Hautpflege- und Modemarken mit Creators aus Melbourne auf Instagram, TikTok und YouTube zusammen.",
        "primaryButtonLabel": "Jetzt starten",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Unsere Arbeit ansehen",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "Umgesetzte Kampagnen"
        },
        {
          "value": "18M+",
          "label": "Follower insgesamt"
        },
        {
          "value": "150+",
          "label": "Globale Marken"
        },
        {
          "value": "Melbourne",
          "label": "Marktfokus"
        }
      ],
      "intro": {
        "heading": "Eine Influencer-Marketing-Agentur für Kampagnen in Melbourne",
        "paragraphs": [
          {
            "text": "Melbourne ist Australiens Hauptstadt für Mode, Essen, Kaffee und Kultur, und die Creators der Stadt spiegeln das wider. Marken, die eine Influencer-Agentur für Melbourne suchen, wollen meist Inhalte mit einem redaktionelleren Blick: durchdachtes Styling, klare Meinungen und ein Publikum, das Trends aufmerksam verfolgt. CA Agency plant Kampagnen in Melbourne entlang dieses Charakters."
          },
          {
            "text": "Influencer aus Melbourne bauen häufig loyale, aktive Communities rund um eine klare Haltung auf, ob es um Hautpflegeroutinen, unabhängige Mode oder die Laneway- und Café-Kultur der Stadt geht. Wir bringen Ihre Marke mit Creators zusammen, deren Follower in Melbourne und Umgebung leben und deren Geschmack zu Ihrem Produkt passt, und wir prüfen die Zielgruppendaten, bevor wir jemanden empfehlen."
          },
          {
            "text": "Wir sind keine Agentur mit Sitz in Melbourne. Unser Hauptsitz ist in Dubai, mit Divisionen in Amsterdam und Delaware, und wir steuern australische Kampagnen remote mit Creators vor Ort. Marken erhalten ein Team für Melbourne, Sydney und jeden weiteren Markt, in dem sie aktiv sind, überall mit demselben Reporting."
          },
          {
            "text": "Für Beauty- und Hautpflegemarken, darunter koreanische Beauty-Marken, die in Australien starten, übernehmen Creator-Kampagnen oft die Aufgabe, die früher die Beauty-PR in Melbourne hatte: Produkte in vertrauenswürdige Hände und vor das richtige Publikum zu bringen. Wir verankern die australischen Kennzeichnungsregeln in jedem Briefing, einschließlich der strengeren Regeln für therapeutische Güter wie viele Sonnenschutzmittel."
          }
        ]
      },
      "process": {
        "title": "So setzen wir eine Influencer-Kampagne in Melbourne um",
        "steps": [
          {
            "title": "Briefing und Ziele",
            "description": "Wir stimmen Ziel, Zielgruppe, Budget und Zeitplan ab und entscheiden, ob die Kampagne nur in Melbourne läuft oder Teil eines landesweiten Plans ist."
          },
          {
            "title": "Creator-Shortlist",
            "description": "Sie erhalten eine Shortlist von Creators aus Melbourne mit Angaben zu Standort der Zielgruppe, Engagement und bisherigen Markenkooperationen, geprüft, bevor wir jemanden empfehlen."
          },
          {
            "title": "Verträge und Briefing",
            "description": "Wir übernehmen Verträge, Nutzungsrechte und ein kreatives Briefing, das die Werbekennzeichnung enthält, die die australischen Regeln verlangen."
          },
          {
            "title": "Inhalte und Freigabe",
            "description": "Die Creators produzieren die Inhalte, wir prüfen sie anhand des Briefings, und Sie geben sie frei, bevor sie online gehen."
          },
          {
            "title": "Reporting",
            "description": "Sie erhalten Reichweite, Engagement, Klicks und Conversions je Creator und sehen klar, was sich zu wiederholen lohnt."
          }
        ]
      },
      "highlights": {
        "title": "Warum Marken uns für Influencer Marketing in Melbourne wählen",
        "items": [
          {
            "title": "Echtes Publikum in Melbourne",
            "description": "Wir prüfen, wo die Follower eines Creators leben, damit Ihr Budget Menschen in Melbourne erreicht."
          },
          {
            "title": "Creators mit Stil",
            "description": "Wir suchen Creators mit einer eigenen Handschrift, denn das Publikum in Melbourne honoriert Geschmack mehr als Masse."
          },
          {
            "title": "Fokus auf Beauty und Hautpflege",
            "description": "Unsere Kampagnen sind vor allem für Beauty-, Hautpflege- und Modemarken konzipiert, einschließlich K-Beauty-Launches."
          },
          {
            "title": "Ein Team, jeder Markt",
            "description": "Melbourne kann für sich stehen oder zusammen mit Sydney, landesweiten Aktivitäten in Australien und Kampagnen in anderen Ländern laufen."
          }
        ]
      },
      "talents": {
        "title": "Creators, mit denen wir arbeiten",
        "buttonLabel": "Alle Talente ansehen",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Die stärksten Branchen in Melbourne",
        "items": [
          {
            "icon": "👗",
            "title": "Mode",
            "description": "Unabhängige Labels und durchdachtes Styling passen zu den modebewussten Creators aus Melbourne."
          },
          {
            "icon": "💄",
            "title": "Beauty & Hautpflege",
            "description": "Ehrliche Hautpflege-Inhalte rund um Routinen schaffen Vertrauen bei einem gut informierten Publikum in Melbourne."
          },
          {
            "icon": "☕",
            "title": "Food & Lifestyle",
            "description": "Inhalte zu Cafés, Restaurants und Kultur passen ganz selbstverständlich zu den Creators der Stadt."
          }
        ]
      },
      "faq": {
        "title": "Influencer Marketing in Melbourne: häufige Fragen",
        "items": [
          {
            "question": "Ist CA Agency eine Influencer-Agentur in Melbourne?",
            "answer": "Wir setzen Influencer-Marketing-Kampagnen für Melbourne um, haben dort aber keinen Sitz. Unser Hauptsitz ist in Dubai, mit Divisionen in Amsterdam und Delaware. Die Kampagnen werden von einem Team remote gesteuert und von Creators umgesetzt, die in Melbourne leben."
          },
          {
            "question": "Wie unterscheidet sich Influencer Marketing in Melbourne von Sydney?",
            "answer": "Inhalte aus Melbourne sind in der Regel redaktioneller und stilbetonter, mit Stärken bei Mode, Essen und Kultur, während Sydney eher für Beauty, Fitness und einen Outdoor-Lifestyle steht. Viele landesweite Kampagnen setzen deshalb auf Creators aus beiden Städten."
          },
          {
            "question": "Bieten Sie Beauty-PR in Melbourne an?",
            "answer": "Wir sind eine Influencer-Marketing-Agentur, keine klassische PR-Agentur. Für Beauty-Marken decken wir die Creator-Seite dessen ab, was früher die PR geleistet hat: Product Seeding, Creator-Partnerschaften und gesponserte Inhalte mit Creators aus Melbourne, ausgewertet anhand klarer Ergebnisse."
          },
          {
            "question": "Was kostet Influencer Marketing in Melbourne?",
            "answer": "Das hängt von der Plattform, der Größe und Anzahl der Creators, den Inhalten und den Nutzungsrechten ab. Wir planen jede Kampagne in Melbourne nach Ihrem Budget und Ihren Zielen, statt einen Pauschalpreis zu nennen."
          },
          {
            "question": "Kümmern Sie sich um die Kennzeichnung gesponserter Inhalte in Australien?",
            "answer": "Ja. Bezahlte Creator-Inhalte müssen nach dem australischen Werbekodex und dem Verbraucherrecht klar als Werbung erkennbar sein. Die Kennzeichnung ist Teil jedes Briefings, und wir prüfen jeden Beitrag vor der Freigabe."
          },
          {
            "question": "Lässt sich eine Kampagne in Melbourne auf Sydney oder das übrige Australien ausweiten?",
            "answer": "Ja. Wir behalten einen Kampagnenrahmen bei und ergänzen Creators in Sydney, Brisbane, Perth und Adelaide, wenn der Plan wächst."
          }
        ]
      },
      "cta": {
        "title": "Starten Sie Ihre Kampagne in Melbourne",
        "description": "Erzählen Sie uns von Ihrer Marke, und wir bringen Sie mit den passenden Creators aus Melbourne zusammen.",
        "buttonLabel": "Kontakt aufnehmen",
        "buttonHref": "/contact"
      }
    }
  },
  "europe": {
    "path": "/influencer-marketing-europe",
    "title": "Influencer Marketing in Europa | CA Agency",
    "description": "Agentur für Europa: Creator-Kampagnen in Deutschland, Frankreich, der Schweiz, den nordischen Ländern und UK, gesteuert von unserer Division in Amsterdam.",
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
        "title": "Influencer Marketing Agentur\nfür Europa",
        "subtitle": "CA Agency ist eine Influencer-Marketing-Agentur für Europa. Von unserer Europa-Division in Amsterdam aus setzen wir Creator-Kampagnen für Beauty- und Hautpflegemarken in Deutschland, Frankreich, der Schweiz, den nordischen Ländern und Großbritannien um.",
        "primaryButtonLabel": "Jetzt starten",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Unsere Arbeit ansehen",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "Umgesetzte Kampagnen"
        },
        {
          "value": "18M+",
          "label": "Follower insgesamt"
        },
        {
          "value": "150+",
          "label": "Globale Marken"
        },
        {
          "value": "Europa",
          "label": "Marktfokus"
        }
      ],
      "intro": {
        "heading": "Eine Influencer-Marketing-Agentur für jeden europäischen Markt",
        "paragraphs": [
          {
            "text": "Europa ist nicht ein Markt. Eine Kampagne, die in Berlin funktioniert, braucht in Paris, Zürich oder Stockholm andere Creators, eine andere Sprache und eine andere Tonalität. Als Full-Service-Influencer-Marketing-Agentur für Europa plant CA Agency jedes Land nach seinen eigenen Regeln und steuert die gesamte Kampagne dennoch mit einem Team, einem Briefing und einem Report."
          },
          {
            "text": "Unsere Europa-Division arbeitet von Amsterdam aus, neben unserem Hauptsitz in Dubai und unserer Nordamerika-Division in Delaware. So können wir Creators über Zeitzonen und Sprachen hinweg koordinieren, Verträge und Nutzungsrechte je Land regeln und die Werbekennzeichnung in jedem Markt, den wir aktivieren, an den lokalen Verbraucherregeln ausrichten."
          },
          {
            "text": "Wir arbeiten vor allem mit Beauty-, Hautpflege- und Lifestyle-Marken, darunter koreanische Beauty-Marken, die zum ersten Mal nach Europa kommen. Ob Sie deutschsprachige TikTok-Inhalte, französische Instagram-Creators oder englischsprachige Reichweite in den nordischen Ländern brauchen: Wir stellen den Creator-Mix nach Ihren Zielen zusammen und werten jede Aktivierung anhand klarer KPIs aus."
          }
        ]
      },
      "highlights": {
        "title": "Warum Marken unsere Influencer-Agentur für Europa wählen",
        "items": [
          {
            "title": "Planung Land für Land",
            "description": "Jeder Markt bekommt Creators, die seine Sprache sprechen und sein Publikum kennen, keine übersetzte Kopie der Kampagne eines anderen Landes."
          },
          {
            "title": "Ein Team, viele Märkte",
            "description": "Briefing, Verträge, Freigaben und Reporting laufen über ein Team. Ein Launch in fünf Ländern bedeutet also nicht fünf Agenturen."
          },
          {
            "title": "Lokale Kennzeichnungsregeln",
            "description": "Werbehinweise unterscheiden sich je Land. Wir briefen die Creators auf die Formulierung, die der jeweilige Markt erwartet, bevor Inhalte online gehen."
          },
          {
            "title": "Messbare Ergebnisse",
            "description": "Reichweite, Engagement, Klicks und Conversions werden je Markt ausgewiesen, damit Sie sehen, welche Länder mehr Budget verdienen."
          }
        ]
      },
      "talents": {
        "title": "Creators für Kampagnen in Europa",
        "buttonLabel": "Alle Talente ansehen",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Die stärksten Branchen",
        "items": [
          {
            "icon": "💄",
            "title": "Beauty",
            "description": "Make-up-Launches und Tutorials lassen sich mit lokalen Creators gut auf europäische Märkte übertragen."
          },
          {
            "icon": "🧴",
            "title": "Hautpflege",
            "description": "Hautpflege-Inhalte, die Wissen vermitteln, schaffen Vertrauen bei europäischen Verbrauchern, die auf Inhaltsstoffe achten."
          },
          {
            "icon": "👗",
            "title": "Mode & Lifestyle",
            "description": "Styling-Inhalte und Alltagsroutinen zeigen Produkte mitten im echten Leben in Europa."
          }
        ]
      },
      "faq": {
        "title": "Influencer Marketing in Europa: häufige Fragen",
        "items": [
          {
            "question": "In welchen europäischen Ländern setzen Sie Influencer-Kampagnen um?",
            "answer": "Wir planen und steuern Creator-Kampagnen in ganz Europa, mit Schwerpunkt auf Deutschland, Frankreich, der Schweiz, den nordischen Ländern (Schweden, Norwegen, Finnland und Dänemark), den Niederlanden und Großbritannien. Kampagnen können in einem Land oder in mehreren Ländern gleichzeitig laufen."
          },
          {
            "question": "Arbeiten Sie mit Creators in den Landessprachen?",
            "answer": "Ja. Für Deutschland, Frankreich und die Schweiz briefen wir Creators, die in der Landessprache posten. In den nordischen Ländern erreichen viele Creators ihr Publikum sowohl auf Englisch als auch in ihrer eigenen Sprache, und wir wählen den Mix, der zu Ihrer Marke passt."
          },
          {
            "question": "Wie gehen Sie mit der Werbekennzeichnung in Europa um?",
            "answer": "Bezahlte Creator-Inhalte müssen überall in Europa als Werbung erkennbar sein, die erwartete Formulierung unterscheidet sich aber je Land, zum Beispiel „Werbung“ oder „Anzeige“ in Deutschland und „Publicité“ oder „Collaboration commerciale“ in Frankreich. Wir nehmen den richtigen Hinweis in jedes Briefing auf und prüfen ihn, bevor Inhalte freigegeben werden."
          },
          {
            "question": "Was kostet Influencer Marketing in Europa?",
            "answer": "Das hängt von den Ländern, der Plattform, der Größe und Anzahl der Creators, den Inhalten und den Nutzungsrechten ab. Wir planen jede Kampagne nach Ihren Zielen und Ihrem Budget, statt einen Pauschalpreis zu nennen. Nennen Sie uns Ihr Budget und Ihre Märkte, und wir entwickeln daraus einen Creator-Plan."
          },
          {
            "question": "Können Sie eine koreanische Beauty-Marke in Europa einführen?",
            "answer": "Ja. K-Beauty ist eine unserer Kernkategorien. Wir unterstützen koreanische Hautpflege- und Make-up-Marken bei der Wahl ihrer ersten europäischen Märkte, bringen sie mit Creators zusammen, deren Publikum sich bereits für Hautpflege interessiert, und passen die Botschaft je Land an."
          }
        ]
      },
      "cta": {
        "title": "Starten Sie Ihre Kampagne in Europa",
        "description": "Sagen Sie uns, welche europäischen Märkte für Sie wichtig sind, und wir bringen Sie mit den passenden Creators zusammen.",
        "buttonLabel": "Kontakt aufnehmen",
        "buttonHref": "/contact"
      }
    }
  },
  "france": {
    "path": "/influencer-marketing-france",
    "title": "Influencer Marketing in Frankreich | CA Agency",
    "description": "Influencer-Marketing-Agentur für Frankreich: französischsprachige Creators für Beauty- und Hautpflegemarken, regelkonforme und klar gekennzeichnete Kampagnen.",
    "ogImage": "/images/site/og/influencer-marketing-france-v1.jpg",
    "areaServed": [
      {
        "@type": "Country",
        "name": "France"
      }
    ],
    "content": {
      "hero": {
        "title": "Influencer Marketing Agentur\nfür Frankreich",
        "subtitle": "CA Agency ist eine Influencer-Marketing-Agentur für Frankreich. Wir verbinden Beauty- und Hautpflegemarken mit französischsprachigen Creators auf Instagram, TikTok und YouTube.",
        "primaryButtonLabel": "Jetzt starten",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Unsere Arbeit ansehen",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "Umgesetzte Kampagnen"
        },
        {
          "value": "18M+",
          "label": "Follower insgesamt"
        },
        {
          "value": "150+",
          "label": "Globale Marken"
        },
        {
          "value": "Frankreich",
          "label": "Marktfokus"
        }
      ],
      "intro": {
        "heading": "Eine Influencer-Marketing-Agentur für den französischen Markt",
        "paragraphs": [
          {
            "text": "Frankreich ist einer der anspruchsvollsten Beauty-Märkte der Welt. Französische Verbraucher kennen sich mit Hautpflege aus, haben starke heimische Marken zum Vergleich und erwarten Inhalte auf Französisch. CA Agency plant Influencer-Kampagnen für Frankreich mit französischsprachigen Creators, die Ihre Marke diesem Publikum glaubwürdig vorstellen können."
          },
          {
            "text": "Frankreich reguliert Creator-Marketing außerdem strenger als die meisten Länder. Seit dem Gesetz vom 9. Juni 2023 über kommerzielle Einflussnahme müssen bezahlte Inhalte einen klaren Hinweis „Publicité“ oder „Collaboration commerciale“ tragen, und einige Produktkategorien unterliegen Beschränkungen. Wir briefen die Creators zu diesen Regeln und prüfen jeden Beitrag, bevor er online geht."
          },
          {
            "text": "Von unserer Europa-Division in Amsterdam aus übernehmen wir Creator-Auswahl, Verträge, Content-Freigaben, Nutzungsrechte und Reporting. Ihr Team hat damit einen Ansprechpartner für Frankreich und für jeden Nachbarmarkt, den Sie später ergänzen."
          }
        ]
      },
      "highlights": {
        "title": "Warum Marken unsere Influencer-Agentur für Frankreich wählen",
        "items": [
          {
            "title": "Französischsprachige Creators",
            "description": "Die Inhalte entstehen auf Französisch, bei Creators, deren Follower in Frankreich leben, und werden nicht aus einem anderen Markt übersetzt."
          },
          {
            "title": "Regelkonform von Anfang an",
            "description": "Jedes Briefing enthält den Hinweis „Publicité“ oder „Collaboration commerciale“, der in Frankreich für bezahlte Inhalte vorgeschrieben ist."
          },
          {
            "title": "Beauty-Expertise",
            "description": "Wir arbeiten vor allem mit Beauty- und Hautpflegemarken und wissen, wie man einen neuen Namen neben etablierten französischen Marken positioniert."
          },
          {
            "title": "Transparentes Reporting",
            "description": "Reichweite, Engagement, Klicks und Conversions werden nach jeder Aktivierung klar ausgewiesen."
          }
        ]
      },
      "talents": {
        "title": "Creators für Kampagnen in Frankreich",
        "buttonLabel": "Alle Talente ansehen",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Die stärksten Branchen",
        "items": [
          {
            "icon": "💄",
            "title": "Beauty",
            "description": "Make-up-Inhalte kommen bei einem französischen Publikum, das Beauty aufmerksam verfolgt, sehr gut an."
          },
          {
            "icon": "🧴",
            "title": "Hautpflege",
            "description": "Inhalte zu Routinen und Inhaltsstoffen helfen neuen Hautpflegemarken, sich einen Platz neben den Apotheken-Lieblingen zu erarbeiten."
          },
          {
            "icon": "👗",
            "title": "Mode",
            "description": "Styling-Inhalte verbinden Marken mit einem der modebewusstesten Publika Europas."
          }
        ]
      },
      "faq": {
        "title": "Influencer Marketing in Frankreich: häufige Fragen",
        "items": [
          {
            "question": "Arbeiten Sie mit französischsprachigen Influencern?",
            "answer": "Ja. Für Kampagnen in Frankreich briefen wir Creators, die auf Französisch posten und deren Publikum überwiegend in Frankreich lebt. Derselbe Ansatz funktioniert für die französischsprachige Schweiz und für Belgien."
          },
          {
            "question": "Welche Regeln gelten für Influencer-Werbung in Frankreich?",
            "answer": "Das französische Gesetz vom 9. Juni 2023 über kommerzielle Einflussnahme verlangt, dass bezahlte Inhalte klar mit „Publicité“ oder „Collaboration commerciale“ gekennzeichnet werden, und beschränkt die Bewerbung bestimmter Produkte und Dienstleistungen. Wir verankern diese Anforderungen in jedem Briefing und prüfen jeden Beitrag vor der Freigabe."
          },
          {
            "question": "Welche Plattformen eignen sich für Influencer Marketing in Frankreich am besten?",
            "answer": "Instagram und TikTok sind bei Beauty, Hautpflege und Mode führend, YouTube ist stark bei längeren Reviews und Routinen. Wir empfehlen den Plattform-Mix passend zu Ihrer Zielgruppe und Ihren Zielen."
          },
          {
            "question": "Was kostet eine Influencer-Kampagne in Frankreich?",
            "answer": "Das hängt von der Plattform, der Größe und Anzahl der Creators, den Inhalten und den Nutzungsrechten ab. Wir planen jede Kampagne nach Ihrem Budget und Ihren Zielen, statt einen Pauschalpreis zu nennen."
          },
          {
            "question": "Können Sie eine internationale Beauty-Marke beim Markteintritt in Frankreich unterstützen?",
            "answer": "Ja. Wir unterstützen Marken von außerhalb Frankreichs, darunter koreanische Beauty-Marken, dabei, die richtigen Creators auszuwählen, die Botschaft für französische Verbraucher anzupassen und mit regelkonformen, vor Ort produzierten Inhalten zu starten."
          }
        ]
      },
      "cta": {
        "title": "Starten Sie Ihre Kampagne in Frankreich",
        "description": "Erreichen Sie das französische Publikum mit Creators, die zu Ihrer Marke und Ihren Zielen passen.",
        "buttonLabel": "Kontakt aufnehmen",
        "buttonHref": "/contact"
      }
    }
  },
  "nordics": {
    "path": "/influencer-marketing-nordics",
    "title": "Influencer Marketing für die nordischen Länder | CA Agency",
    "description": "Agentur für die nordischen Länder: Creator-Kampagnen für Beauty- und Hautpflegemarken in Schweden, Norwegen, Finnland und Dänemark, Markt für Markt geplant.",
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
        "title": "Influencer Marketing Agentur\nfür die nordischen Länder",
        "subtitle": "CA Agency ist eine Influencer-Marketing-Agentur für die nordischen Länder. Wir setzen Creator-Kampagnen für Beauty- und Hautpflegemarken in Schweden, Norwegen, Finnland und Dänemark um.",
        "primaryButtonLabel": "Jetzt starten",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Unsere Arbeit ansehen",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "Umgesetzte Kampagnen"
        },
        {
          "value": "18M+",
          "label": "Follower insgesamt"
        },
        {
          "value": "150+",
          "label": "Globale Marken"
        },
        {
          "value": "Nordische Länder",
          "label": "Marktfokus"
        }
      ],
      "intro": {
        "heading": "Eine Influencer-Marketing-Agentur für Schweden, Norwegen, Finnland und Dänemark",
        "paragraphs": [
          {
            "text": "Die nordischen Länder gehören zu den digitalsten Märkten Europas. Das Publikum in Schweden, Norwegen, Finnland und Dänemark verbringt viel Zeit auf Instagram, TikTok und YouTube, kauft selbstverständlich online ein und erwartet von Marken Ehrlichkeit und Zurückhaltung. CA Agency plant Influencer-Kampagnen für die nordischen Länder entlang dieser Erwartung."
          },
          {
            "text": "Jedes nordische Land hat seine eigene Sprache und seine eigenen Creators, und ein schwedischer Creator erreicht nicht automatisch Norwegen oder Finnland. Wir planen Stockholm, Oslo, Helsinki und Kopenhagen als getrennte Zielgruppen, entscheiden je Markt zwischen Inhalten in der Landessprache und auf Englisch und sorgen dafür, dass Werbung im Einklang mit den Verbraucherregeln des jeweiligen Landes klar gekennzeichnet ist."
          },
          {
            "text": "Nordische Verbraucher achten auf Inhaltsstoffe, Nachhaltigkeit und Transparenz. Das macht die Region zu einem guten Umfeld für Hautpflege und Clean Beauty. Von unserer Europa-Division in Amsterdam aus betreuen wir Creators, Verträge, Freigaben und Reporting für ein nordisches Land oder für alle vier."
          }
        ]
      },
      "highlights": {
        "title": "Warum Marken unsere Influencer-Agentur für die nordischen Länder wählen",
        "items": [
          {
            "title": "Vier Märkte, ein Plan",
            "description": "Schweden, Norwegen, Finnland und Dänemark werden getrennt geplant und von einem Team betreut."
          },
          {
            "title": "Ehrliche, zurückhaltende Inhalte",
            "description": "Wir briefen Creators auf den ruhigen, glaubwürdigen Ton, dem das nordische Publikum vertraut."
          },
          {
            "title": "Klar gekennzeichnete Werbung",
            "description": "Die nordischen Verbraucherbehörden erwarten, dass bezahlte Beiträge klar gekennzeichnet sind. Jedes Briefing enthält den richtigen Hinweis."
          },
          {
            "title": "Landessprache oder Englisch",
            "description": "Wir entscheiden je Markt zwischen Inhalten in der Landessprache und auf Englisch, passend zu Ihrer Zielgruppe."
          }
        ]
      },
      "talents": {
        "title": "Creators für Kampagnen in den nordischen Ländern",
        "buttonLabel": "Alle Talente ansehen",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Die stärksten Branchen",
        "items": [
          {
            "icon": "🧴",
            "title": "Hautpflege",
            "description": "Nordische Verbraucher, die auf Inhaltsstoffe achten, reagieren auf klare Hautpflege-Inhalte, die Wissen vermitteln."
          },
          {
            "icon": "🌿",
            "title": "Clean Beauty",
            "description": "Aussagen zu Transparenz und Nachhaltigkeit sind wichtig, und Creators helfen, sie glaubwürdig zu erklären."
          },
          {
            "icon": "🏃",
            "title": "Lifestyle & Wellness",
            "description": "Inhalte aus der Alltagsroutine passen zum aktiven, naturverbundenen Lebensstil im Norden."
          }
        ]
      },
      "faq": {
        "title": "Influencer Marketing in den nordischen Ländern: häufige Fragen",
        "items": [
          {
            "question": "In welchen nordischen Ländern setzen Sie Influencer-Kampagnen um?",
            "answer": "In Schweden, Norwegen, Finnland und Dänemark. Kampagnen können in einem Land oder in der gesamten Region laufen, mit Creators, die für jeden Markt ausgewählt werden."
          },
          {
            "question": "Sollten Kampagnen in den nordischen Ländern auf Englisch oder in der Landessprache laufen?",
            "answer": "Beides kann funktionieren. Englisch wird in den nordischen Ländern weithin verstanden, Inhalte in der Landessprache wirken aber meist näher und vertrauenswürdiger. Wir empfehlen den Mix je Markt, passend zu Ihrer Marke und Ihrer Zielgruppe."
          },
          {
            "question": "Wie werden gesponserte Inhalte in den nordischen Ländern gekennzeichnet?",
            "answer": "Die Verbraucherbehörde jedes Landes erwartet, dass bezahlte Inhalte am Anfang des Beitrags klar als Werbung gekennzeichnet sind, und zwar so, dass das Publikum es versteht. Wir nehmen die richtige Formulierung in jedes Briefing auf und prüfen sie vor der Freigabe."
          },
          {
            "question": "Reicht ein Creator, um die ganze Region zu erreichen?",
            "answer": "Selten. Die Follower konzentrieren sich auf das Heimatland eines Creators. Deshalb planen wir normalerweise mindestens eine Creator-Gruppe je Markt und werten jedes Land getrennt aus."
          },
          {
            "question": "Was kostet eine Influencer-Kampagne in den nordischen Ländern?",
            "answer": "Das hängt von der Anzahl der Länder, der Plattform, der Größe der Creators, den Inhalten und den Nutzungsrechten ab. Wir planen jede Kampagne nach Ihrem Budget und Ihren Zielen, statt einen Pauschalpreis zu nennen."
          }
        ]
      },
      "cta": {
        "title": "Starten Sie Ihre Kampagne in den nordischen Ländern",
        "description": "Erreichen Sie das Publikum in Schweden, Norwegen, Finnland und Dänemark mit Creators, die zu Ihrer Marke passen.",
        "buttonLabel": "Kontakt aufnehmen",
        "buttonHref": "/contact"
      }
    }
  }
}
