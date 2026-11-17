import type { TranslatedLocationPage } from '@/lib/site-content/location-pages-translated'

// German versions of the beauty, skincare and K-beauty category pages, served at
// /de/<path>. Translated from the English defaults; not editable in the
// admin. Plain data: keys are the page keys from lib/data/locations.ts.

export const germanCategoryPages: Record<string, TranslatedLocationPage> = {
  "beautyAgency": {
    "path": "/beauty-influencer-marketing-agency",
    "title": "Beauty Influencer Marketing Agentur | CA Agency",
    "description": "Beauty-Influencer-Marketing-Agentur für Make-up, Hautpflege, Haarpflege und Beauty-Retail: Creators zeigen Produkte auf echter Haut, in den USA und weltweit.",
    "ogImage": "/images/site/og-cover-v2.jpg",
    "content": {
      "hero": {
        "title": "Beauty Influencer\nMarketing Agentur",
        "subtitle": "CA Agency ist eine Beauty-Influencer-Marketing-Agentur. Wir verbinden Make-up-, Hautpflege-, Haarpflege- und Beauty-Retail-Marken mit Creators, die Produkte auf echter Haut und in echtem Licht zeigen, in den USA und auf globalen Märkten.",
        "primaryButtonLabel": "Kampagne starten",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Case Studies ansehen",
        "secondaryButtonHref": "/case-studies"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "Umgesetzte Kampagnen"
        },
        {
          "value": "150+",
          "label": "Globale Marken"
        },
        {
          "value": "18M+",
          "label": "Follower insgesamt"
        },
        {
          "value": "IG · TikTok · YT",
          "label": "Plattformen"
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
        "title": "Beauty-Kampagnen, die wir umgesetzt haben",
        "subtitle": "Prestige, Farbkosmetik, Haarpflege und Beauty-Retail: eine Auswahl an Marken, die wir mit den passenden Creators zusammengebracht haben.",
        "items": [
          {
            "src": "/videos/work/melly-fenty-web-v1.mp4",
            "brand": "Fenty Beauty",
            "name": "Teint-Make-up auf echter Haut",
            "href": "/case-studies/fenty-beauty-campaign"
          },
          {
            "src": "/videos/work/dariia-ysl-web-v1.mp4",
            "brand": "YSL Beauty",
            "name": "Luxus-Beauty im Creator-Stil",
            "href": "/case-studies/ysl-beauty-campaign"
          },
          {
            "src": "/videos/work/fashionfreakk-nars.mp4",
            "brand": "NARS",
            "name": "Prestige-Beauty",
            "href": "/case-studies/nars-campaign"
          },
          {
            "src": "/videos/work/kylie-cosmetics-web-v1.mp4",
            "brand": "Kylie Cosmetics",
            "name": "Farbkosmetik",
            "href": "/case-studies/kylie-cosmetics-campaign"
          },
          {
            "src": "/videos/work/albina-sephora-web-v1.mp4",
            "brand": "Sephora",
            "name": "Beauty-Retail: Hauls & Favoriten",
            "href": "/case-studies/sephora-campaign"
          },
          {
            "src": "/videos/work/beatrix-gisou-web-v1.mp4",
            "brand": "Gisou",
            "name": "Haarpflege: Textur & Finish",
            "href": "/case-studies/gisou-campaign"
          }
        ]
      },
      "process": {
        "title": "So setzen wir eine Beauty-Influencer-Kampagne um",
        "subtitle": "Ein verantwortliches Team vom ersten Briefing bis zum Abschlussbericht.",
        "steps": [
          {
            "title": "Briefing & Strategie",
            "description": "Wir legen das Hero-Produkt fest, die zulässigen Werbeaussagen, die Nuancen oder Hauttypen, die gezeigt werden sollen, Ihre Märkte und das Ergebnis, auf das es ankommt: Bekanntheit, Erstkäufe oder Umsatz."
          },
          {
            "title": "Creator-Auswahl",
            "description": "Wir stellen eine Shortlist von Beauty-Creators zusammen, nach Zielgruppen-Fit, Hauttyp und Hauttonspektrum, Engagement-Qualität und handwerklicher Qualität der Inhalte, nicht allein nach Followerzahl."
          },
          {
            "title": "Content & Freigaben",
            "description": "Auftrag, Tragetests, Swatches und Get-ready-with-me-Formate, gesteuert über Briefing, Freigaben, Nutzungsrechte und Werbekennzeichnung."
          },
          {
            "title": "Verstärken & Auswerten",
            "description": "Die leistungsstärksten Inhalte werden mit Partnership Ads und Spark Ads verlängert, und jede Kampagne wird nach Reichweite, Engagement, Klicks und Conversions ausgewertet."
          }
        ]
      },
      "intro": {
        "heading": "Die Beauty-Influencer-Marketing-Agentur, die auf echten Kampagnen aufbaut",
        "paragraphs": [
          {
            "text": "In keiner Kategorie sind Creators so wichtig wie in Beauty. Käuferinnen und Käufer wollen sehen, wie eine Foundation zu einem echten Hautton passt, wie ein Lippenstift einen ganzen Tag übersteht und wie ein Serum einzieht, bevor sie kaufen. CA Agency ist eine Beauty-Influencer-Marketing-Agentur, die genau diesen Beweis liefert: Wir bringen Make-up-, Hautpflege-, Haarpflege- und Beauty-Retail-Marken mit Creators zusammen, die ein Produkt vor der Kamera vorführen können und damit auf Instagram, TikTok und YouTube Käufe auslösen."
          },
          {
            "text": "Unsere Arbeit umfasst Prestige- und Luxusmarken wie YSL Beauty und NARS, Farbkosmetikmarken wie Fenty Beauty, Kylie Cosmetics, Kiko Milano und Juvia’s Place, Beauty-Händler wie Sephora und Revolve Beauty sowie Haarpflege von Gisou. Jedes Briefing ist anders: Ein Luxushaus braucht eine hochwertige Anmutung, die sich im Feed eines Creators trotzdem natürlich anfühlt, während eine Farbkosmetikmarke Pigmentierung, Swatches und Nuancenvielfalt braucht, die ehrlich gezeigt werden."
          },
          {
            "text": "Für Marken, die die USA ansprechen, den größten Beauty-Markt der Welt, verbinden wir landesweite Reichweite mit FTC-konformer Kennzeichnung und Disziplin bei Werbeaussagen. Bei globalen Launches koordinieren wir Creators in Nordamerika, Europa, dem Nahen Osten und Asien, damit eine Produktgeschichte überall einheitlich erzählt wird. Marken mit Schwerpunkt Hautpflege können mit unseren Programmen für Skincare-Influencer-Marketing tiefer einsteigen, koreanische Marken mit unserem eigenen K-Beauty-Team."
          }
        ]
      },
      "highlights": {
        "title": "Warum Beauty-Marken CA Agency wählen",
        "items": [
          {
            "title": "Beauty ist unser Kern",
            "description": "Beauty und Hautpflege sind unser Schwerpunkt. Creators werden deshalb von Menschen gebrieft, die Finish, Haltbarkeit, Nuancenvielfalt und die entscheidenden Werbeaussagen kennen."
          },
          {
            "title": "Beweis vor Hochglanz",
            "description": "Wir briefen auf ehrliche Demonstration (Swatches, Tragetests, Vorher-nachher auf echter Haut), weil genau das Vertrauen schafft und zu Erstkäufen führt."
          },
          {
            "title": "Netzwerk mit Talent-Fokus",
            "description": "Wir managen unseren eigenen Roster an Beauty-Creators und arbeiten mit einem größeren Netzwerk. So erhalten Sie Creators, die die Kategorie wirklich nutzen und lieben."
          },
          {
            "title": "Gemessen wie Media",
            "description": "Jede Kampagne weist Reichweite, Engagement, Klicks und Conversions aus, und die Inhalte lassen sich mit bezahlten Partnership Ads verstärken."
          }
        ]
      },
      "talents": {
        "title": "Beauty-Creators in unserem Roster",
        "buttonLabel": "Alle Talente ansehen",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Beauty-Kategorien, auf die wir spezialisiert sind",
        "items": [
          {
            "icon": "💄",
            "title": "Make-up & Farbkosmetik",
            "description": "Launches für Teint, Lippen und Augen, gezeigt mit Swatches, Auftrag und echtem Tragen."
          },
          {
            "icon": "💧",
            "title": "Hautpflege",
            "description": "Routinen, Wirkstoffe und Texturaufnahmen, die erklären, was ein Produkt leistet und für wen es gedacht ist."
          },
          {
            "icon": "✨",
            "title": "Haarpflege & Beauty-Retail",
            "description": "Haarpflege-Content mit Fokus auf das Finish und Retail-Kampagnen im Haul-Stil, die Besuche im Geschäft und im Onlineshop fördern."
          }
        ]
      },
      "faq": {
        "title": "Beauty-Influencer-Marketing: häufige Fragen",
        "items": [
          {
            "question": "Was macht eine Beauty-Influencer-Marketing-Agentur?",
            "answer": "Wir planen und steuern Creator-Kampagnen für Beauty-Marken von Anfang bis Ende: Strategie, Creator-Auswahl, Briefing, Verträge, Content-Freigaben, Nutzungsrechte, Werbekennzeichnung, bezahlte Verstärkung und Reporting. Sie haben ein verantwortliches Team, statt selbst Dutzende Creators zu koordinieren."
          },
          {
            "question": "Was kostet Beauty-Influencer-Marketing?",
            "answer": "Die Kosten hängen von den Plattformen, den Creator-Größen, der Anzahl der Creators, den vereinbarten Leistungen und den Nutzungsrechten ab. Statt einen Pauschalpreis zu nennen, schneiden wir jede Kampagne auf Ihre Ziele und Ihr Budget zu und zeigen Ihnen, welcher Creator-Mix den besten Ertrag bringt. Nennen Sie uns Budget und Ziele, und wir bauen den Plan darum herum."
          },
          {
            "question": "Welche Plattformen eignen sich für Beauty-Marken am besten?",
            "answer": "TikTok sorgt für Entdeckung und Trends, Instagram Reels und Stories tragen hochwertig produzierte Routinen und Launches, und YouTube ist am stärksten bei ausführlichen Tutorials und Reviews. Die meisten Beauty-Kampagnen nutzen einen Mix, gewichtet nach Ihrer Zielgruppe und Ihrem Ziel."
          },
          {
            "question": "Arbeiten Sie mit Beauty-Marken in den USA?",
            "answer": "Ja. Die USA sind unser wichtigster Markt. Wir setzen dort landesweite Kampagnen mit amerikanischen Creators um, einschließlich FTC-konformer Kennzeichnung, und dazu Kampagnen in Europa, im Nahen Osten und in Asien."
          },
          {
            "question": "Arbeiten Sie sowohl mit jungen Beauty-Marken als auch mit globalen Namen?",
            "answer": "Ja. Wir arbeiten mit neuen Indie-Labels, die ihr erstes Creator-Programm aufbauen, ebenso wie mit globalen Häusern, die neue Produkte einführen, und passen den Creator-Mix (Micro, Mid-Tier und Macro) an die Phase der Marke an."
          }
        ]
      },
      "cta": {
        "title": "Starten Sie Ihre Beauty-Kampagne",
        "description": "Erzählen Sie uns von Ihrem Produkt, Ihrem Markt und Ihren Zielen, und wir bringen Sie mit Beauty-Creators zusammen, die es verkaufen können.",
        "buttonLabel": "Kontakt aufnehmen",
        "buttonHref": "/contact"
      }
    }
  },
  "skincareAgency": {
    "path": "/skincare-influencer-marketing-agency",
    "title": "Skincare Influencer Marketing Agentur | CA Agency",
    "description": "Skincare-Influencer-Marketing-Agentur: Creator-Content zu Inhaltsstoffen, Texturen und Routinen, der Vertrauen schafft, in den USA und weltweit.",
    "ogImage": "/images/site/og-cover-v2.jpg",
    "content": {
      "hero": {
        "title": "Skincare Influencer\nMarketing Agentur",
        "subtitle": "CA Agency ist eine Skincare-Influencer-Marketing-Agentur. Wir helfen Hautpflegemarken, Inhaltsstoffe, Texturen und Routinen in Creator-Content zu übersetzen, der Vertrauen aufbaut und Erstkäufe fördert, in den USA und weltweit.",
        "primaryButtonLabel": "Kampagne starten",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Case Studies ansehen",
        "secondaryButtonHref": "/case-studies"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "Umgesetzte Kampagnen"
        },
        {
          "value": "150+",
          "label": "Globale Marken"
        },
        {
          "value": "18M+",
          "label": "Follower insgesamt"
        },
        {
          "value": "IG · TikTok · YT",
          "label": "Plattformen"
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
        "title": "Hautpflege-Kampagnen, die wir umgesetzt haben",
        "subtitle": "Creator-Content für Hautpflegemarken, der von Routinen ausgeht und Inhaltsstoffe in den Mittelpunkt stellt.",
        "items": [
          {
            "src": "/videos/work/saranda-delere-web-v1.mp4",
            "brand": "DELERE",
            "name": "Hautpflege in der Routine",
            "href": "/case-studies/delere-campaign"
          },
          {
            "src": "/videos/work/aiym-purito-web-v1.mp4",
            "brand": "Purito",
            "name": "Clean-Pflege für empfindliche Haut",
            "href": "/case-studies/purito-campaign"
          },
          {
            "src": "/videos/work/anton-anua-web-v1.mp4",
            "brand": "Anua",
            "name": "Hautpflege-Routine für Männer",
            "href": "/case-studies/anua-campaign"
          },
          {
            "src": "/videos/work/albina-mixsoon-web-v1.mp4",
            "brand": "Mixsoon",
            "name": "Hautpflege mit Fokus auf Inhaltsstoffe",
            "href": "/case-studies/mixsoon-skincare"
          },
          {
            "src": "/videos/work/rebecca-haruharu-web-v1.mp4",
            "brand": "Haruharu Wonder",
            "name": "Fermentierte, sanfte Hautpflege",
            "href": "/case-studies/haruharu-wonder-campaign"
          },
          {
            "src": "/videos/work/medicube.mp4",
            "brand": "Medicube",
            "name": "Klinische Hautpflege & Geräte"
          }
        ]
      },
      "process": {
        "title": "So setzen wir eine Skincare-Influencer-Kampagne um",
        "subtitle": "Aufgebaut auf Aufklärung, ehrlichen Ergebnissen und zulässigen Werbeaussagen.",
        "steps": [
          {
            "title": "Werbeaussagen & Briefing",
            "description": "Wir gehen von Ihren Hero-Inhaltsstoffen, den freigegebenen Werbeaussagen und den adressierten Hautbedürfnissen aus, damit jedes Creator-Briefing vom ersten Tag an korrekt und regelkonform ist."
          },
          {
            "title": "Creator-Auswahl",
            "description": "Wir wählen Creators mit Hautpflege-Wissen nach Hauttyp, Hautbedürfnis, Zielgruppen-Fit und Glaubwürdigkeit aus, damit die Person, die das Produkt erklärt, tatsächlich zur Kundschaft passt."
          },
          {
            "title": "Routine-Content",
            "description": "Routine-Demos, Textur-Nahaufnahmen, Erklärungen zu Inhaltsstoffen und ehrliche Fortschrittsinhalte. Freigaben, Nutzungsrechte und Werbekennzeichnung übernehmen wir."
          },
          {
            "title": "Messen & Skalieren",
            "description": "Wir berichten über Reichweite, Engagement, Klicks und Conversions und skalieren dann die Creators und Formate, die zu Erstkäufen führen."
          }
        ]
      },
      "intro": {
        "heading": "Eine Skincare-Influencer-Marketing-Agentur, die Inhaltsstoffe versteht",
        "paragraphs": [
          {
            "text": "Hautpflege wird aus Vertrauen gekauft. Bevor jemand ein Serum oder einen Sonnenschutz in die eigene Routine aufnimmt, möchte er verstehen, was darin steckt, die Textur sehen und von jemandem hören, dessen Haut der eigenen ähnelt. CA Agency ist eine Skincare-Influencer-Marketing-Agentur, die dieses Vertrauen aufbaut: Wir bringen Hautpflegemarken mit Creators zusammen, die Wirkstoffe verständlich erklären, eine Routine vor der Kamera zeigen und ehrliche Ergebnisse über die Zeit dokumentieren, auf Instagram, TikTok und YouTube."
          },
          {
            "text": "Wir haben Hautpflege-Kampagnen für Marken wie DELERE, Purito, Anua, Mixsoon, Haruharu Wonder und Medicube umgesetzt, von Launches rund um die Routine über die Positionierung für empfindliche Haut und Clean Beauty und die Aufklärung über Inhaltsstoffe bis zur Hautpflege für Männer. Diese Erfahrung prägt unsere Briefings: was gezeigt wird, welche Aussagen Creators treffen dürfen und welche nicht, und wie sich Fortschritt zeigen lässt, ohne zu viel zu versprechen."
          },
          {
            "text": "Disziplin bei Werbeaussagen ist in den USA am wichtigsten. Dort dürfen kosmetische Aussagen nicht in die Nähe arzneimittelähnlicher Versprechen geraten, und jeder gesponserte Beitrag braucht eine klare Kennzeichnung nach den Vorgaben der FTC. Beides ist Teil jedes Briefings und jeder Freigabe. Koreanische und K-Beauty-Marken können mit unserem eigenen K-Beauty-Team arbeiten, und Marken mit einem breiteren Beauty-Sortiment können Hautpflege über unsere Programme für Beauty-Influencer-Marketing mit Make-up und Haarpflege verbinden."
          }
        ]
      },
      "highlights": {
        "title": "Warum Hautpflegemarken mit uns arbeiten",
        "items": [
          {
            "title": "Briefings mit Wirkstoffwissen",
            "description": "Creators werden von einem Team, das Hautpflege kennt, zu Wirkstoffen, Konzentrationen und Routinen gebrieft, damit die Aufklärung richtig ankommt."
          },
          {
            "title": "Aussagen, hinter denen Sie stehen können",
            "description": "Bei der Freigabe wird jede Werbeaussage und jede Kennzeichnung geprüft. So bleibt der Content überzeugend, ohne in medizinische oder übertriebene Versprechen abzugleiten."
          },
          {
            "title": "Passend zum Hautbedürfnis",
            "description": "Wir bringen Produkte mit Creators zusammen, deren Hauttyp und Hautbedürfnisse zu Ihrer Kundschaft passen: zu Akne neigende, empfindliche, reife oder ölige Haut."
          },
          {
            "title": "Ergebnisse statt Hype",
            "description": "Texturaufnahmen, Routine-Demos und ehrliche Fortschrittsinhalte konvertieren besser als einmalige Unboxings, und wir messen sie, um das zu belegen."
          }
        ]
      },
      "talents": {
        "title": "Creators, die Hautpflege verstehen",
        "buttonLabel": "Alle Talente ansehen",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Hautpflege-Kampagnen, die wir umsetzen",
        "items": [
          {
            "icon": "🧴",
            "title": "Routinen & Wissen über Inhaltsstoffe",
            "description": "Content rund um Inhaltsstoffe und Routinen, der erklärt, was ein Produkt leistet und für wen es gedacht ist, ohne Fachjargon."
          },
          {
            "icon": "🌿",
            "title": "Empfindliche Haut & Hautpflege für Männer",
            "description": "Sanfte Routinen, Clean-Routinen und Routinen für Männer, umgesetzt mit Creators, deren Haut und Publikum zum Produkt passen."
          },
          {
            "icon": "🔬",
            "title": "Klinische Hautpflege & Geräte",
            "description": "Geräte für zu Hause und klinische Linien, gezeigt in glaubwürdigem, ergebnisorientiertem Content."
          }
        ]
      },
      "faq": {
        "title": "Skincare-Influencer-Marketing: häufige Fragen",
        "items": [
          {
            "question": "Wie finden Sie die richtigen Skincare-Influencer?",
            "answer": "Wir prüfen Creators nach Hauttyp und Hautbedürfnissen, Demografie der Zielgruppe, Engagement-Qualität, Content-Stil und Brand Safety. Das Ziel ist ein Creator, dessen Publikum Ihrer Kundschaft entspricht und der das Produkt glaubwürdig erklären kann."
          },
          {
            "question": "Wie gehen Sie mit Werbeaussagen zu Hautpflege und der FTC-Kennzeichnung um?",
            "answer": "Wir briefen Creators zu Ihren freigegebenen Werbeaussagen, prüfen Inhalte vor der Veröffentlichung und stellen sicher, dass jeder gesponserte Beitrag klar gekennzeichnet ist, zum Beispiel mit #ad. In den USA heißt das außerdem, kosmetische Aussagen von arzneimittelähnlichen Versprechen fernzuhalten, etwa dem Behandeln oder Heilen von Beschwerden."
          },
          {
            "question": "Welche Plattformen eignen sich für Hautpflegemarken am besten?",
            "answer": "TikTok ist am stärksten bei Entdeckung und Routine-Trends, Instagram bei hochwertig produzierten Routinen und Reels und YouTube bei ausführlichen Reviews und Langzeitergebnissen. Wir gewichten den Mix nach Ihrer Zielgruppe und Ihrem Ziel."
          },
          {
            "question": "Arbeiten Sie nur mit koreanischen Hautpflegemarken?",
            "answer": "Nein. Wir arbeiten mit Hautpflegemarken aus allen Märkten. Für koreanische und K-Beauty-Marken gibt es ein eigenes Team, und der aufklärende Ansatz, den K-Beauty populär gemacht hat, funktioniert für jede Hautpflegemarke."
          },
          {
            "question": "Was kostet eine Skincare-Influencer-Kampagne?",
            "answer": "Das hängt von den Plattformen, den Creator-Größen, der Anzahl der Creators, den vereinbarten Leistungen und den Nutzungsrechten ab. Wir schneiden jede Kampagne auf Ihre Ziele und Ihr Budget zu, statt einen Pauschalpreis zu nennen, und zeigen, welcher Creator-Mix den besten Ertrag bringt."
          }
        ]
      },
      "cta": {
        "title": "Starten Sie Ihre Hautpflege-Kampagne",
        "description": "Nennen Sie uns Ihr Hero-Produkt und Ihre Ziele, und wir bringen Sie mit Skincare-Creators zusammen, die es erklären, vorführen und verkaufen können.",
        "buttonLabel": "Kontakt aufnehmen",
        "buttonHref": "/contact"
      }
    }
  },
  "kBeautySkincare": {
    "path": "/korean-skincare-influencer-marketing",
    "title": "K-Beauty Influencer Marketing Agentur | CA Agency",
    "description": "K-Beauty-Influencer-Marketing-Agentur: Wir verbinden koreanische Hautpflege- und Beauty-Marken mit Creators auf Instagram, TikTok und YouTube.",
    "ogImage": "/images/site/og/korean-skincare-influencer-marketing-v2.jpg",
    "content": {
      "hero": {
        "title": "Agentur für Korean Skincare\nInfluencer Marketing",
        "subtitle": "CA Agency ist eine K-Beauty-Influencer-Marketing-Agentur. Wir verbinden koreanische Hautpflege- und Beauty-Marken mit Creators, die aus Routinen Ergebnisse machen, auf Instagram, TikTok und YouTube.",
        "primaryButtonLabel": "Jetzt starten",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Unsere Arbeit ansehen",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "K-Beauty",
          "label": "Nischenexpertise"
        },
        {
          "value": "18M+",
          "label": "Creator-Reichweite"
        },
        {
          "value": "Global",
          "label": "Zielmärkte"
        },
        {
          "value": "IG · TikTok · YT",
          "label": "Plattformen"
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
        "title": "Aktuelle K-Beauty-Kampagnen",
        "subtitle": "Eine Auswahl koreanischer Hautpflege- und Beauty-Marken, die wir mit den passenden Creators zusammengebracht haben.",
        "items": [
          {
            "src": "/videos/work/medicube.mp4",
            "brand": "Medicube",
            "name": "Klinische Hautpflege & Beauty-Geräte"
          },
          {
            "src": "/videos/work/albina-mixsoon-web-v1.mp4",
            "brand": "Mixsoon",
            "name": "Koreanische Hautpflege mit Fokus auf Inhaltsstoffe"
          },
          {
            "src": "/videos/work/georgii-yesstyle-web-v1.mp4",
            "brand": "YesStyle",
            "name": "K-Beauty-Retail & Entdeckung"
          },
          {
            "image": "/images/work/work-laneige-package.webp",
            "brand": "Laneige",
            "name": "Koreanische Prestige-Hautpflege"
          },
          {
            "image": "/images/work/work-sumwonmen-closet.webp",
            "brand": "Sumwon Men",
            "name": "Koreanische Männerpflege"
          }
        ]
      },
      "process": {
        "title": "So setzen wir eine K-Beauty-Kampagne um",
        "subtitle": "Ein klarer, wiederholbarer Prozess vom ersten Briefing bis zum Abschlussbericht.",
        "steps": [
          {
            "title": "Discovery",
            "description": "Wir lernen Ihr Produkt, Ihre zentralen Werbeaussagen, Ihre Zielmärkte und Ihre Ziele kennen und richten das Kampagnenbriefing danach aus."
          },
          {
            "title": "Creator-Auswahl",
            "description": "Wir wählen Creators mit Hautpflege-Wissen gezielt nach Zielgruppen-Fit, Engagement und Content-Qualität aus, nicht nur nach Followerzahl."
          },
          {
            "title": "Content & Freigaben",
            "description": "Routine-Demos, Texturaufnahmen und ehrliches Vorher-nachher-Storytelling, gesteuert über Briefing, Freigaben und Nutzungsrechte."
          },
          {
            "title": "Reporting",
            "description": "Jede Kampagne wird an Reichweite, Engagement und Conversion gemessen, damit Sie genau wissen, was Ihr Budget gebracht hat."
          }
        ]
      },
      "intro": {
        "heading": "Die K-Beauty-Influencer-Marketing-Agentur, der Marken vertrauen",
        "paragraphs": [
          {
            "text": "Koreanische Hautpflege hat die globale Beauty-Welt verändert: mit mehrstufigen Routinen, klinischen Wirkstoffen und Glass-Skin-Ergebnissen, die das Publikum vorgeführt und nicht nur beschrieben sehen möchte. CA Agency verbindet K-Beauty- und koreanische Hautpflegemarken mit Creators, die eine Routine vor der Kamera erklären können und damit auf Instagram, TikTok und YouTube Käufe auslösen."
          },
          {
            "text": "Wir haben Kampagnen für koreanische Hautpflegenamen wie Medicube, Mixsoon und YesStyle umgesetzt, neben einem größeren Kreis globaler Beauty-Marken. Deshalb wissen wir, wie aufklärendes Storytelling, ehrliche Vorher-nachher-Belege und das richtige Trend-Timing in dieser Kategorie zu echten Erstkäufen führen."
          },
          {
            "text": "Vom einzelnen Hero-Launch bis zum Always-on-Creator-Programm steuern wir Creator-Auswahl, Briefing, Content-Freigaben, Nutzungsrechte und Werbekennzeichnung von Anfang bis Ende. Jede Kampagne werten wir nach Reichweite, Engagement und Conversion aus, damit Sie wissen, was Ihr Budget gebracht hat."
          }
        ]
      },
      "highlights": {
        "title": "Warum Marken unsere K-Beauty-Influencer-Agentur wählen",
        "items": [
          {
            "title": "Spezialisten für die Kategorie",
            "description": "Wir briefen Creators, die Wirkstoffe, Routinen und die entscheidenden Werbeaussagen der Hautpflege wirklich verstehen, statt Generalisten, die bei Inhaltsstoffen raten."
          },
          {
            "title": "Aufklärung, die konvertiert",
            "description": "Routine-Demos, Texturaufnahmen und ehrliches Vorher-nachher-Storytelling machen bei Hautpflege- und Beauty-Produkten aus Neugier Erstkäufe."
          },
          {
            "title": "Launches im Trend-Timing",
            "description": "K-Beauty ist schnell. Deshalb stimmen wir Content auf Formate und Trends ab, solange sie noch auf dem Höhepunkt sind, nicht erst danach."
          },
          {
            "title": "Globale K-Beauty-Reichweite",
            "description": "Unser Creator-Netzwerk hilft koreanischen Marken, international anzukommen, und hilft internationalen Marken, die K-Beauty-Ästhetik zu nutzen, die das Publikum bereits liebt."
          }
        ]
      },
      "talents": {
        "title": "Creators, die Hautpflege verstehen",
        "buttonLabel": "Alle Talente ansehen",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Kategorien, auf die wir spezialisiert sind",
        "items": [
          {
            "icon": "💧",
            "title": "Hautpflege & Routinen",
            "description": "Essenzen, Seren und Treatments, erklärt in echten Routinen vor der Kamera."
          },
          {
            "icon": "💄",
            "title": "Make-up & Farbe",
            "description": "Glass-Skin-Teints, Tints und trendorientierte Looks, die Finish und Haltbarkeit zeigen."
          },
          {
            "icon": "🔬",
            "title": "Beauty-Tech & Geräte",
            "description": "Geräte für zu Hause und klinische Tools, gezeigt in glaubwürdigem, ergebnisorientiertem Content."
          }
        ]
      },
      "faq": {
        "title": "K-Beauty-Influencer-Marketing: häufige Fragen",
        "items": [
          {
            "question": "Arbeiten Sie nur mit koreanischen Marken?",
            "answer": "Nein. Wir sind auf die Kategorie K-Beauty und Hautpflege spezialisiert. Dazu gehören koreanische Marken, die global expandieren, und internationale Marken, die den aufklärenden, routineorientierten Content-Stil nutzen möchten, den K-Beauty populär gemacht hat."
          },
          {
            "question": "Welche Plattformen eignen sich für Hautpflege am besten?",
            "answer": "Instagram, TikTok und YouTube haben jeweils ihre Rolle: TikTok für Entdeckung und Trends, Instagram für hochwertig produzierte Routinen und Reels und YouTube für ausführliche Reviews und Tutorials. Wir stellen den passenden Mix für Ihre Ziele zusammen."
          },
          {
            "question": "Können Sie globale Kampagnen in mehreren Märkten umsetzen?",
            "answer": "Ja. Unser Creator-Netzwerk erstreckt sich über mehrere Märkte. So können wir K-Beauty-Kampagnen für verschiedene Regionen lokalisieren und die Markengeschichte dabei einheitlich halten."
          },
          {
            "question": "Was gehört zu einer typischen K-Beauty-Kampagne?",
            "answer": "Creator-Auswahl, Briefing, Begleitung der Content-Produktion, Freigaben, Nutzungsrechte, Werbekennzeichnung und Reporting nach Reichweite, Engagement und Conversions."
          }
        ]
      },
      "cta": {
        "title": "Starten Sie Ihre K-Beauty-Kampagne",
        "description": "Bringen Sie Ihre koreanische Hautpflege- oder Beauty-Marke zu Creators, die die Routine verkaufen können. Nennen Sie uns Ihre Ziele, und wir erstellen den Plan.",
        "buttonLabel": "Kontakt aufnehmen",
        "buttonHref": "/contact"
      }
    }
  }
}
