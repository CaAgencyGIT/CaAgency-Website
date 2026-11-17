import type { TranslatedLocationPage } from '@/lib/site-content/location-pages-translated'

// French versions of the beauty, skincare and K-beauty category pages, served at
// /fr/<path>. Translated from the English defaults; not editable in the
// admin. Plain data: keys are the page keys from lib/data/locations.ts.

export const frenchCategoryPages: Record<string, TranslatedLocationPage> = {
  "beautyAgency": {
    "path": "/beauty-influencer-marketing-agency",
    "title": "Agence de marketing d'influence beauté | CA Agency",
    "description": "Agence de marketing d'influence beauté : maquillage, soin, cheveux et distribution, avec des créateurs qui montrent les produits sur de vraies peaux.",
    "ogImage": "/images/site/og-cover-v2.jpg",
    "content": {
      "hero": {
        "title": "Agence de marketing\nd'influence beauté",
        "subtitle": "CA Agency est une agence de marketing d'influence beauté. Nous mettons en relation les marques de maquillage, de soin de la peau, de soins capillaires et de distribution beauté avec des créateurs qui montrent les produits à l'œuvre sur de vraies peaux, en lumière réelle, aux États-Unis et sur les marchés internationaux.",
        "primaryButtonLabel": "Lancer votre campagne",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Voir les études de cas",
        "secondaryButtonHref": "/case-studies"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "Campagnes réalisées"
        },
        {
          "value": "150+",
          "label": "Marques internationales"
        },
        {
          "value": "18M+",
          "label": "Abonnés cumulés"
        },
        {
          "value": "IG · TikTok · YT",
          "label": "Plateformes"
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
        "title": "Nos campagnes beauté",
        "subtitle": "Prestige, maquillage, soins capillaires et distribution beauté : un aperçu des marques que nous avons associées aux bons créateurs.",
        "items": [
          {
            "src": "/videos/work/melly-fenty-web-v1.mp4",
            "brand": "Fenty Beauty",
            "name": "Le teint sur de vraies peaux",
            "href": "/case-studies/fenty-beauty-campaign"
          },
          {
            "src": "/videos/work/dariia-ysl-web-v1.mp4",
            "brand": "YSL Beauty",
            "name": "Beauté de luxe, façon créateur",
            "href": "/case-studies/ysl-beauty-campaign"
          },
          {
            "src": "/videos/work/fashionfreakk-nars.mp4",
            "brand": "NARS",
            "name": "Beauté prestige",
            "href": "/case-studies/nars-campaign"
          },
          {
            "src": "/videos/work/kylie-cosmetics-web-v1.mp4",
            "brand": "Kylie Cosmetics",
            "name": "Maquillage",
            "href": "/case-studies/kylie-cosmetics-campaign"
          },
          {
            "src": "/videos/work/albina-sephora-web-v1.mp4",
            "brand": "Sephora",
            "name": "Distribution beauté : hauls et favoris",
            "href": "/case-studies/sephora-campaign"
          },
          {
            "src": "/videos/work/beatrix-gisou-web-v1.mp4",
            "brand": "Gisou",
            "name": "Soins capillaires : texture et fini",
            "href": "/case-studies/gisou-campaign"
          }
        ]
      },
      "process": {
        "title": "Comment nous menons une campagne d'influence beauté",
        "subtitle": "Une seule équipe responsable, du premier brief au rapport final.",
        "steps": [
          {
            "title": "Brief et stratégie",
            "description": "Nous précisons le produit phare, les allégations que vous pouvez utiliser, les teintes ou les types de peau à montrer, vos marchés et le résultat qui compte : notoriété, essai ou ventes."
          },
          {
            "title": "Sélection des créateurs",
            "description": "Nous présélectionnons des créateurs beauté selon l'adéquation de leur audience, leur type de peau et l'éventail de carnations représenté, la qualité de l'engagement et le soin apporté aux contenus, et pas seulement selon le nombre d'abonnés."
          },
          {
            "title": "Contenus et validations",
            "description": "Application, tests de tenue, swatches et formats « get ready with me », avec la gestion du brief, des validations, des droits d'utilisation et de la mention de partenariat."
          },
          {
            "title": "Amplification et reporting",
            "description": "Les contenus les plus performants sont prolongés par des publicités de partenariat et des Spark Ads, et chaque campagne fait l'objet d'un reporting sur la portée, l'engagement, les clics et les conversions."
          }
        ]
      },
      "intro": {
        "heading": "L'agence de marketing d'influence beauté fondée sur de vraies campagnes",
        "paragraphs": [
          {
            "text": "La beauté est la catégorie où les créateurs comptent le plus. Avant d'acheter, les consommateurs veulent voir un fond de teint s'accorder à une vraie carnation, un rouge à lèvres tenir toute une journée et un sérum pénétrer la peau. CA Agency est une agence de marketing d'influence beauté qui construit précisément cette preuve, en associant les marques de maquillage, de soin de la peau, de soins capillaires et de distribution beauté à des créateurs capables de démontrer un produit face caméra et de le faire convertir sur Instagram, TikTok et YouTube."
          },
          {
            "text": "Notre travail couvre des noms du prestige et du luxe comme YSL Beauty et NARS, des marques de maquillage dont Fenty Beauty, Kylie Cosmetics, Kiko Milano et Juvia’s Place, des distributeurs beauté comme Sephora et Revolve Beauty, et les soins capillaires de Gisou. Chaque brief est différent : une maison de luxe a besoin d'une finition soignée qui reste naturelle dans le feed d'un créateur, tandis qu'une marque de maquillage a besoin que la pigmentation, les swatches et la gamme de teintes soient montrés honnêtement."
          },
          {
            "text": "Pour les marques qui visent les États-Unis, premier marché de la beauté au monde, nous associons une portée nationale à des mentions de partenariat conformes aux exigences de la FTC et à une discipline stricte sur les allégations. Pour les lancements mondiaux, nous coordonnons des créateurs en Amérique du Nord, en Europe, au Moyen-Orient et en Asie afin qu'une même histoire produit soit racontée de façon cohérente. Les marques centrées sur le soin peuvent aller plus loin avec nos programmes de marketing d'influence soin de la peau, et les marques coréennes avec notre équipe dédiée à la K-beauty."
          }
        ]
      },
      "highlights": {
        "title": "Pourquoi les marques de beauté choisissent CA Agency",
        "items": [
          {
            "title": "La beauté est notre cœur de métier",
            "description": "La beauté et le soin de la peau sont notre cœur de métier : les créateurs sont briefés par des personnes qui connaissent le fini, la tenue, la gamme de teintes et les allégations qui comptent."
          },
          {
            "title": "La preuve avant le vernis",
            "description": "Nos briefs privilégient la démonstration honnête (swatches, tests de tenue, avant-après sur de vraies peaux), car c'est elle qui gagne la confiance et déclenche l'essai."
          },
          {
            "title": "Un réseau centré sur les talents",
            "description": "Nous gérons notre propre roster de créateurs beauté et travaillons avec un réseau plus large : vous collaborez avec des créateurs qui utilisent et aiment réellement la catégorie."
          },
          {
            "title": "Mesuré comme un média",
            "description": "Chaque campagne rend compte de la portée, de l'engagement, des clics et des conversions, et les contenus peuvent être amplifiés par des publicités de partenariat payantes."
          }
        ]
      },
      "talents": {
        "title": "Les créateurs beauté de notre roster",
        "buttonLabel": "Voir tous les talents",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Nos catégories de spécialité en beauté",
        "items": [
          {
            "icon": "💄",
            "title": "Maquillage",
            "description": "Lancements teint, lèvres et yeux présentés à travers les swatches, l'application et la tenue réelle."
          },
          {
            "icon": "💧",
            "title": "Soin de la peau",
            "description": "Routines, actifs et plans de texture qui expliquent ce que fait un produit et à qui il s'adresse."
          },
          {
            "icon": "✨",
            "title": "Soins capillaires et distribution beauté",
            "description": "Des contenus capillaires centrés sur le fini et des campagnes de distribution au format haul qui génèrent du trafic en magasin et sur le site."
          }
        ]
      },
      "faq": {
        "title": "Marketing d'influence beauté : questions fréquentes",
        "items": [
          {
            "question": "Que fait une agence de marketing d'influence beauté ?",
            "answer": "Nous concevons et menons de bout en bout des campagnes avec des créateurs pour les marques de beauté : stratégie, sélection des créateurs, brief, contrats, validation des contenus, droits d'utilisation, mention de partenariat, amplification payante et reporting. Vous avez une seule équipe responsable au lieu de gérer vous-même des dizaines de créateurs."
          },
          {
            "question": "Combien coûte le marketing d'influence beauté ?",
            "answer": "Le coût dépend des plateformes, du niveau des créateurs, de leur nombre, des livrables et des droits d'utilisation. Plutôt que d'annoncer un tarif forfaitaire, nous cadrons chaque campagne selon vos objectifs et votre budget, et nous vous montrons quelle combinaison de créateurs offre le meilleur retour. Indiquez-nous votre budget et vos objectifs, nous construirons le plan autour d'eux."
          },
          {
            "question": "Quelles plateformes fonctionnent le mieux pour les marques de beauté ?",
            "answer": "TikTok porte la découverte et les tendances, les Reels et Stories Instagram accueillent les routines soignées et les lancements, et YouTube est le plus efficace pour les tutoriels et les avis approfondis. La plupart des campagnes beauté combinent ces plateformes, avec un poids ajusté selon votre audience et votre objectif."
          },
          {
            "question": "Travaillez-vous avec des marques de beauté aux États-Unis ?",
            "answer": "Oui. Les États-Unis sont notre premier marché : nous y menons des campagnes nationales avec des créateurs américains, avec des mentions de partenariat conformes aux exigences de la FTC, en parallèle de campagnes en Europe, au Moyen-Orient et en Asie."
          },
          {
            "question": "Travaillez-vous avec des marques de beauté émergentes aussi bien qu'avec de grands noms internationaux ?",
            "answer": "Oui. Nous travaillons aussi bien avec de jeunes marques indépendantes qui construisent leur premier programme créateurs qu'avec des maisons internationales qui lancent de nouveaux produits, et nous adaptons la combinaison de créateurs (micro, intermédiaires et macro) au stade de développement de la marque."
          }
        ]
      },
      "cta": {
        "title": "Lancez votre campagne beauté",
        "description": "Parlez-nous de votre produit, de votre marché et de vos objectifs : nous vous associerons à des créateurs beauté capables de le vendre.",
        "buttonLabel": "Contactez-nous",
        "buttonHref": "/contact"
      }
    }
  },
  "skincareAgency": {
    "path": "/skincare-influencer-marketing-agency",
    "title": "Marketing d'influence soin de la peau | CA Agency",
    "description": "Agence de marketing d'influence soin de la peau : ingrédients, textures et routines transformés en contenus de créateurs qui inspirent confiance.",
    "ogImage": "/images/site/og-cover-v2.jpg",
    "content": {
      "hero": {
        "title": "Agence de marketing d'influence\nsoin de la peau",
        "subtitle": "CA Agency est une agence de marketing d'influence spécialisée dans le soin de la peau. Nous aidons les marques de soin à transformer ingrédients, textures et routines en contenus de créateurs qui inspirent confiance et déclenchent l'essai, aux États-Unis et dans le monde entier.",
        "primaryButtonLabel": "Lancer votre campagne",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Voir les études de cas",
        "secondaryButtonHref": "/case-studies"
      },
      "stats": [
        {
          "value": "3000+",
          "label": "Campagnes réalisées"
        },
        {
          "value": "150+",
          "label": "Marques internationales"
        },
        {
          "value": "18M+",
          "label": "Abonnés cumulés"
        },
        {
          "value": "IG · TikTok · YT",
          "label": "Plateformes"
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
        "title": "Nos campagnes soin de la peau",
        "subtitle": "Des contenus de créateurs centrés sur la routine et les ingrédients, pour les marques de soin.",
        "items": [
          {
            "src": "/videos/work/saranda-delere-web-v1.mp4",
            "brand": "DELERE",
            "name": "Le soin par la routine",
            "href": "/case-studies/delere-campaign"
          },
          {
            "src": "/videos/work/aiym-purito-web-v1.mp4",
            "brand": "Purito",
            "name": "Soin clean pour peaux sensibles",
            "href": "/case-studies/purito-campaign"
          },
          {
            "src": "/videos/work/anton-anua-web-v1.mp4",
            "brand": "Anua",
            "name": "Routine de soin pour homme",
            "href": "/case-studies/anua-campaign"
          },
          {
            "src": "/videos/work/albina-mixsoon-web-v1.mp4",
            "brand": "Mixsoon",
            "name": "Le soin par les ingrédients",
            "href": "/case-studies/mixsoon-skincare"
          },
          {
            "src": "/videos/work/rebecca-haruharu-web-v1.mp4",
            "brand": "Haruharu Wonder",
            "name": "Soin fermenté et doux",
            "href": "/case-studies/haruharu-wonder-campaign"
          },
          {
            "src": "/videos/work/medicube.mp4",
            "brand": "Medicube",
            "name": "Soin clinique et appareils"
          }
        ]
      },
      "process": {
        "title": "Comment nous menons une campagne d'influence soin de la peau",
        "subtitle": "Fondée sur la pédagogie, des résultats honnêtes et des allégations conformes.",
        "steps": [
          {
            "title": "Allégations et brief",
            "description": "Nous partons de vos ingrédients phares, de vos allégations validées et des problématiques de peau ciblées, afin que chaque brief créateur soit exact et conforme dès le premier jour."
          },
          {
            "title": "Sélection des créateurs",
            "description": "Nous sélectionnons des créateurs qui connaissent le soin selon leur type de peau, leur problématique, l'adéquation de leur audience et leur crédibilité, pour que la personne qui explique le produit ressemble réellement à votre cliente ou client."
          },
          {
            "title": "Contenus routine",
            "description": "Démonstrations de routine, gros plans de texture, explications d'ingrédients et suivi honnête des progrès, avec les validations, les droits d'utilisation et la mention de partenariat pris en charge."
          },
          {
            "title": "Mesurer et déployer",
            "description": "Nous rendons compte de la portée, de l'engagement, des clics et des conversions, puis nous développons les créateurs et les formats qui déclenchent l'essai."
          }
        ]
      },
      "intro": {
        "heading": "Une agence de marketing d'influence soin de la peau qui parle ingrédients",
        "paragraphs": [
          {
            "text": "Le soin de la peau s'achète sur la confiance. Avant d'ajouter un sérum ou une protection solaire à sa routine, chacun veut comprendre ce qu'il contient, voir sa texture et entendre l'avis d'une personne dont la peau ressemble à la sienne. CA Agency est une agence de marketing d'influence soin de la peau qui construit cette confiance, en associant les marques de soin à des créateurs capables d'expliquer clairement les actifs, de démontrer une routine face caméra et de montrer des résultats honnêtes dans la durée sur Instagram, TikTok et YouTube."
          },
          {
            "text": "Nous avons mené des campagnes de soin pour des marques dont DELERE, Purito, Anua, Mixsoon, Haruharu Wonder et Medicube : lancements centrés sur la routine, positionnements peaux sensibles et clean, pédagogie par les ingrédients et soin pour homme. Cette expérience guide notre façon de briefer : ce qu'il faut démontrer, quelles allégations les créateurs peuvent ou non formuler, et comment montrer les progrès sans promettre trop."
          },
          {
            "text": "La discipline sur les allégations compte surtout aux États-Unis, où les allégations cosmétiques doivent rester à l'écart des promesses de type médicament et où chaque publication sponsorisée doit porter une mention claire conforme aux exigences de la FTC. Nous intégrons ces deux points dans chaque brief et chaque validation. Les marques coréennes et K-beauty peuvent travailler avec notre équipe dédiée à la K-beauty, et les marques dont la gamme beauté est plus large peuvent associer le soin au maquillage et aux soins capillaires grâce à nos programmes de marketing d'influence beauté."
          }
        ]
      },
      "highlights": {
        "title": "Pourquoi les marques de soin travaillent avec nous",
        "items": [
          {
            "title": "Des briefs qui maîtrisent les ingrédients",
            "description": "Les créateurs sont briefés sur les actifs, les concentrations et les routines par une équipe qui connaît le soin, pour que la pédagogie soit juste."
          },
          {
            "title": "Des allégations que vous pouvez assumer",
            "description": "Les validations vérifient chaque allégation et chaque mention de partenariat, pour des contenus convaincants qui ne glissent pas vers des promesses médicales ou exagérées."
          },
          {
            "title": "Une sélection par problématique de peau",
            "description": "Nous associons les produits à des créateurs dont le type de peau et les problématiques correspondent à votre clientèle : peau à tendance acnéique, sensible, mature ou grasse."
          },
          {
            "title": "Des résultats plutôt que du bruit",
            "description": "Les plans de texture, les démonstrations de routine et le suivi honnête des progrès convertissent mieux que les unboxings ponctuels, et nous les mesurons pour le prouver."
          }
        ]
      },
      "talents": {
        "title": "Des créateurs qui parlent soin",
        "buttonLabel": "Voir tous les talents",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Les campagnes de soin que nous menons",
        "items": [
          {
            "icon": "🧴",
            "title": "Routines et pédagogie des ingrédients",
            "description": "Des contenus centrés sur les ingrédients et la routine, qui expliquent ce que fait un produit et à qui il s'adresse, sans jargon."
          },
          {
            "icon": "🌿",
            "title": "Peaux sensibles et soin pour homme",
            "description": "Des routines douces, clean et masculines, confiées à des créateurs dont la peau et l'audience correspondent au produit."
          },
          {
            "icon": "🔬",
            "title": "Soin clinique et appareils",
            "description": "Des appareils à domicile et des gammes cliniques présentés dans des contenus crédibles, centrés sur les résultats."
          }
        ]
      },
      "faq": {
        "title": "Marketing d'influence soin de la peau : questions fréquentes",
        "items": [
          {
            "question": "Comment trouvez-vous les bons influenceurs pour le soin de la peau ?",
            "answer": "Nous évaluons les créateurs sur leur type de peau et leurs problématiques, le profil démographique de leur audience, la qualité de l'engagement, le style de contenu et la sécurité de marque. L'objectif : un créateur dont l'audience ressemble à votre clientèle et qui peut expliquer le produit de façon crédible."
          },
          {
            "question": "Comment gérez-vous les allégations et les mentions exigées par la FTC ?",
            "answer": "Nous informons les créateurs de vos allégations validées, nous relisons les contenus avant leur mise en ligne et nous veillons à ce que chaque publication sponsorisée porte une mention claire, par exemple #ad. Aux États-Unis, cela implique aussi de tenir les allégations cosmétiques à l'écart des promesses de type médicament, comme traiter ou guérir une affection."
          },
          {
            "question": "Quelles plateformes fonctionnent le mieux pour les marques de soin ?",
            "answer": "TikTok est le plus efficace pour la découverte et les tendances de routine, Instagram pour les routines soignées et les Reels, et YouTube pour les avis approfondis et les résultats dans la durée. Nous pondérons la combinaison selon votre audience et votre objectif."
          },
          {
            "question": "Travaillez-vous uniquement avec des marques de soin coréennes ?",
            "answer": "Non. Nous travaillons avec des marques de soin de tous les marchés. Les marques coréennes et K-beauty disposent d'une équipe dédiée, et l'approche pédagogique popularisée par la K-beauty fonctionne pour toute marque de soin."
          },
          {
            "question": "Combien coûte une campagne d'influence soin de la peau ?",
            "answer": "Cela dépend des plateformes, du niveau des créateurs, de leur nombre, des livrables et des droits d'utilisation. Nous cadrons chaque campagne selon vos objectifs et votre budget plutôt que d'annoncer un tarif forfaitaire, et nous montrons quelle combinaison de créateurs offre le meilleur retour."
          }
        ]
      },
      "cta": {
        "title": "Lancez votre campagne soin de la peau",
        "description": "Présentez-nous votre produit phare et vos objectifs : nous vous associerons à des créateurs spécialisés dans le soin, capables de l'expliquer, de le démontrer et de le vendre.",
        "buttonLabel": "Contactez-nous",
        "buttonHref": "/contact"
      }
    }
  },
  "kBeautySkincare": {
    "path": "/korean-skincare-influencer-marketing",
    "title": "Agence de marketing d'influence K-beauty | CA Agency",
    "description": "Agence de marketing d'influence K-beauty : des créateurs qui font vivre les routines de soins coréens sur Instagram, TikTok et YouTube.",
    "ogImage": "/images/site/og/korean-skincare-influencer-marketing-v2.jpg",
    "content": {
      "hero": {
        "title": "Agence de marketing d'influence\nsoins coréens",
        "subtitle": "CA Agency est une agence de marketing d'influence K-beauty. Nous mettons en relation les marques coréennes de soin et de beauté avec des créateurs qui transforment les routines en résultats sur Instagram, TikTok et YouTube.",
        "primaryButtonLabel": "Commencer",
        "primaryButtonHref": "/contact",
        "secondaryButtonLabel": "Voir nos réalisations",
        "secondaryButtonHref": "/work"
      },
      "stats": [
        {
          "value": "K-Beauty",
          "label": "Expertise de niche"
        },
        {
          "value": "18M+",
          "label": "Portée des créateurs"
        },
        {
          "value": "Global",
          "label": "Marchés d'audience"
        },
        {
          "value": "IG · TikTok · YT",
          "label": "Plateformes"
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
        "title": "Campagnes K-beauty récentes",
        "subtitle": "Un aperçu des marques coréennes de soin et de beauté que nous avons présentées aux bons créateurs.",
        "items": [
          {
            "src": "/videos/work/medicube.mp4",
            "brand": "Medicube",
            "name": "Soin clinique et appareils de beauté"
          },
          {
            "src": "/videos/work/albina-mixsoon-web-v1.mp4",
            "brand": "Mixsoon",
            "name": "Soin coréen centré sur les ingrédients"
          },
          {
            "src": "/videos/work/georgii-yesstyle-web-v1.mp4",
            "brand": "YesStyle",
            "name": "Distribution et découverte K-beauty"
          },
          {
            "image": "/images/work/work-laneige-package.webp",
            "brand": "Laneige",
            "name": "Soin coréen prestige"
          },
          {
            "image": "/images/work/work-sumwonmen-closet.webp",
            "brand": "Sumwon Men",
            "name": "Soin coréen pour homme"
          }
        ]
      },
      "process": {
        "title": "Comment nous menons une campagne K-beauty",
        "subtitle": "Une méthode claire et reproductible, du premier brief au rapport final.",
        "steps": [
          {
            "title": "Découverte",
            "description": "Nous prenons connaissance de votre produit, de vos allégations phares, de vos marchés cibles et de vos objectifs, puis nous construisons le brief de campagne autour d'eux."
          },
          {
            "title": "Sélection des créateurs",
            "description": "Nous choisissons un à un des créateurs qui maîtrisent le soin, selon l'adéquation de leur audience, leur engagement et la qualité de leurs contenus, et pas seulement selon le nombre d'abonnés."
          },
          {
            "title": "Contenus et validations",
            "description": "Démonstrations de routine, plans de texture et récits avant-après honnêtes, avec la gestion du brief, des validations et des droits d'utilisation."
          },
          {
            "title": "Reporting",
            "description": "Chaque campagne est mesurée en portée, en engagement et en conversion : vous savez précisément ce que votre investissement a rapporté."
          }
        ]
      },
      "intro": {
        "heading": "L'agence de marketing d'influence K-beauty à laquelle les marques font confiance",
        "paragraphs": [
          {
            "text": "Les soins coréens ont transformé la beauté mondiale avec des routines en plusieurs étapes, des actifs cliniques et un effet « glass skin » que le public veut voir démontré, et pas seulement décrit. CA Agency met en relation les marques de K-beauty et de soins coréens avec des créateurs capables d'enseigner une routine face caméra et de la faire convertir sur Instagram, TikTok et YouTube."
          },
          {
            "text": "Nous avons mené des campagnes pour des noms du soin coréen comme Medicube, Mixsoon et YesStyle, aux côtés d'un portefeuille plus large de marques de beauté internationales. Nous comprenons donc comment un récit pédagogique, des preuves avant-après honnêtes et le bon timing par rapport aux tendances déclenchent un essai réel dans cette catégorie."
          },
          {
            "text": "Du lancement d'un seul produit phare à un programme créateurs en continu, nous gérons de bout en bout la sélection des créateurs, le brief, la validation des contenus, les droits d'utilisation et la mention de partenariat, et nous mesurons chaque campagne en portée, en engagement et en conversion pour que vous sachiez ce que votre investissement a rapporté."
          }
        ]
      },
      "highlights": {
        "title": "Pourquoi les marques choisissent notre agence d'influence K-beauty",
        "items": [
          {
            "title": "Des spécialistes de la catégorie",
            "description": "Nous briefons des créateurs qui comprennent réellement les actifs, les routines et les allégations qui comptent, plutôt que des généralistes qui devinent les ingrédients."
          },
          {
            "title": "Une pédagogie qui convertit",
            "description": "Les démonstrations de routine, les plans de texture et les récits avant-après honnêtes transforment la curiosité en essai pour les produits de soin et de beauté."
          },
          {
            "title": "Des lancements calés sur les tendances",
            "description": "La K-beauty évolue vite : nous calons les contenus sur les formats et les tendances pendant qu'ils sont à leur pic, pas après."
          },
          {
            "title": "Une portée K-beauty mondiale",
            "description": "Notre réseau de créateurs aide les marques coréennes à s'exporter, et aide les marques internationales à s'appuyer sur l'esthétique K-beauty que le public aime déjà."
          }
        ]
      },
      "talents": {
        "title": "Des créateurs qui parlent soin",
        "buttonLabel": "Voir tous les talents",
        "buttonHref": "/talents"
      },
      "industries": {
        "title": "Nos catégories de spécialité",
        "items": [
          {
            "icon": "💧",
            "title": "Soin de la peau et routines",
            "description": "Essences, sérums et soins ciblés expliqués à travers de vraies routines face caméra."
          },
          {
            "icon": "💄",
            "title": "Maquillage",
            "description": "Teints « glass skin », tints et looks tendance qui mettent en valeur le fini et la tenue."
          },
          {
            "icon": "🔬",
            "title": "Beauty tech et appareils",
            "description": "Des appareils à domicile et des outils cliniques présentés dans des contenus crédibles, centrés sur les résultats."
          }
        ]
      },
      "faq": {
        "title": "Marketing d'influence K-beauty : questions fréquentes",
        "items": [
          {
            "question": "Travaillez-vous uniquement avec des marques coréennes ?",
            "answer": "Non. Nous sommes spécialisés dans la catégorie K-beauty et soin de la peau, qui comprend les marques coréennes en expansion à l'international et les marques internationales qui recherchent le style de contenu pédagogique, centré sur la routine, popularisé par la K-beauty."
          },
          {
            "question": "Quelles plateformes fonctionnent le mieux pour le soin de la peau ?",
            "answer": "Instagram, TikTok et YouTube ont chacun leur rôle : TikTok pour la découverte et les tendances, Instagram pour les routines soignées et les Reels, YouTube pour les avis approfondis et les tutoriels. Nous construisons la bonne combinaison selon vos objectifs."
          },
          {
            "question": "Pouvez-vous gérer des campagnes mondiales sur plusieurs marchés ?",
            "answer": "Oui. Notre réseau de créateurs couvre plusieurs marchés : nous pouvons adapter les campagnes K-beauty à différentes régions tout en gardant une histoire de marque cohérente."
          },
          {
            "question": "Que comprend une campagne K-beauty type ?",
            "answer": "La sélection des créateurs, le brief, le suivi de la production des contenus, les validations, les droits d'utilisation, la mention de partenariat et un reporting sur la portée, l'engagement et les conversions."
          }
        ]
      },
      "cta": {
        "title": "Lancez votre campagne K-beauty",
        "description": "Présentez votre marque coréenne de soin ou de beauté à des créateurs capables de vendre la routine. Partagez vos objectifs, nous construirons le plan.",
        "buttonLabel": "Contactez-nous",
        "buttonHref": "/contact"
      }
    }
  }
}
