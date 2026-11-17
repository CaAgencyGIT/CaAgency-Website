import type { ServiceDetail } from '@/lib/data/services'
import type { ServiceUi } from '@/lib/data/service-ui'

// French versions of the five service pages and their fixed labels, served at
// /fr/services/<slug>. Translated from lib/data/services.ts. Plain data.

export const ui: ServiceUi = {
  "eyebrow": "Nos services",
  "howWeWork": "Notre façon de travailler",
  "included": "Ce qui est inclus",
  "whoFor": "À qui s'adresse ce service",
  "howRuns": "Comment se déroule une collaboration",
  "specialismTitle": "Pensé pour la beauté et le soin de la peau",
  "specialismText": "Nous sommes spécialisés dans les marques de beauté, de soin de la peau et de lifestyle, aux États-Unis et dans le monde entier.",
  "specialismBeauty": "Marketing d'influence beauté",
  "specialismSkincare": "Marketing d'influence soin de la peau",
  "specialismKBeauty": "Marketing d'influence K-beauty",
  "specialismUsa": "Marketing d'influence aux États-Unis",
  "faqEyebrow": "FAQ",
  "faqTitle": "FAQ : {service}",
  "relatedGuides": "Guides associés",
  "otherServices": "Découvrir nos autres services",
  "ctaTitle": "Construisons votre prochaine campagne",
  "ctaText": "Parlez-nous de vos objectifs : nous composerons autour d'eux la bonne combinaison de créateurs, de contenus et de stratégie.",
  "ctaPrimary": "Demande de partenariat",
  "ctaSecondary": "Voir nos réalisations"
}

export const services: ServiceDetail[] = [
  {
    "slug": "influencer-campaigns",
    "title": "Campagnes d'influence",
    "icon": "spark",
    "tagline": "Des partenariats créateurs qui arrêtent le scroll.",
    "summary": "Des campagnes d'influence de bout en bout sur Instagram, TikTok et YouTube : de la sélection des créateurs et du brief aux droits, aux validations et au reporting.",
    "seoTitle": "Gestion de campagnes d'influence beauté",
    "seoDescription": "Gestion de campagnes d'influence de bout en bout pour les marques de beauté, de soin et de lifestyle : sélection des créateurs, briefs, droits et reporting.",
    "breakdown": [
      "Chaque campagne commence par l'adéquation. Nous croisons votre audience, votre catégorie et vos objectifs avec notre réseau de créateurs et présélectionnons les voix dont la communauté recoupe réellement votre clientèle : la portée compte, mais c'est la résonance qui convertit.",
      "Nous menons ensuite la campagne en interne : des briefs créatifs qui laissent de la place à la voix du créateur, les plannings et calendriers de livrables, la validation des contenus, les droits d'utilisation et la conformité aux règles des plateformes, le tout géré par une seule équipe.",
      "Une fois les contenus en ligne, nous les suivons (diffusion, engagement, trafic et tonalité des réactions) et nous en rendons compte dans un langage clair, avec des enseignements qui affinent la vague suivante."
    ],
    "deliverables": [
      "Stratégie de campagne et direction créative",
      "Présélection, vérification et prise de contact avec les créateurs",
      "Contrats et droits d'utilisation",
      "Brief, validations et contrôle qualité",
      "Reporting de performance et enseignements"
    ],
    "idealFor": [
      "Les lancements de produits qui ont besoin de voix de créateurs crédibles dès les premières semaines, et pas seulement de portée payante.",
      "Les marques qui entrent sur un nouveau marché, comme les États-Unis, le Golfe ou l'Asie, et qui ont besoin de créateurs locaux déjà écoutés par ce public.",
      "Les équipes qui n'ont pas la disponibilité nécessaire pour briefer, contractualiser, relancer et suivre des dizaines de créateurs à la fois."
    ],
    "process": [
      {
        "title": "Brief et objectifs",
        "description": "Nous convenons du produit, de l'audience, des marchés, du budget et du seul résultat sur lequel la campagne sera jugée : notoriété, essai ou ventes."
      },
      {
        "title": "Présélection des créateurs",
        "description": "Vous recevez une présélection vérifiée indiquant, pour chaque créateur, l'adéquation de l'audience, la qualité de l'engagement et le style de contenu, et vous validez la sélection finale."
      },
      {
        "title": "Contenus et mise en ligne",
        "description": "Nous briefons les créateurs, relisons les projets de contenus au regard de vos allégations et de vos consignes, sécurisons les droits d'utilisation et la mention de partenariat, et planifions les publications sur les plateformes."
      },
      {
        "title": "Reporting et enseignements",
        "description": "Un rapport rédigé dans un langage clair couvre la portée, l'engagement, les clics et les conversions, et indique ce qu'il faut répéter, arrêter ou amplifier lors de la vague suivante."
      }
    ],
    "faqs": [
      {
        "question": "Comment choisissez-vous les influenceurs d'une campagne ?",
        "answer": "Nous partons de votre clientèle, pas du nombre d'abonnés. Chaque créateur est évalué sur le profil démographique et la localisation de son audience, la qualité de l'engagement, le style de contenu, la sécurité de marque et ses partenariats passés, et vous validez la sélection finale avant toute signature de contrat."
      },
      {
        "question": "Sur quelles plateformes menez-vous des campagnes d'influence ?",
        "answer": "Instagram, TikTok et YouTube. TikTok a tendance à dominer pour la découverte et les tendances, Instagram pour les lancements soignés, les Reels et les Stories, et YouTube pour les avis approfondis et les tutoriels. La plupart des campagnes combinent deux ou trois plateformes, pondérées selon l'endroit où votre audience passe du temps et selon l'objectif de la campagne."
      },
      {
        "question": "Combien coûte une campagne d'influence ?",
        "answer": "Cela dépend des plateformes, du niveau des créateurs, de leur nombre, des livrables et des droits d'utilisation. Plutôt que d'annoncer un tarif forfaitaire, nous cadrons la campagne selon votre objectif et votre budget et nous montrons les arbitrages possibles, par exemple davantage de micro-créateurs pour l'essai ou moins de créateurs, mais plus importants, pour la notoriété."
      },
      {
        "question": "Gérez-vous les contrats, les droits d'utilisation et la mention de partenariat ?",
        "answer": "Oui. Nous négocions et gérons les contrats des créateurs, les droits d'utilisation et de whitelisting, la validation des contenus et les mentions conformes aux règles des plateformes, comme #ad et les libellés de partenariat rémunéré, afin que la campagne reste conforme sur chaque marché où elle est diffusée."
      },
      {
        "question": "Comment mesurez-vous les résultats d'une campagne d'influence ?",
        "answer": "Nous convenons des KPI avant le lancement et nous les suivons tout au long de la campagne : portée, taux d'engagement, clics sur les liens, utilisations de codes et conversions lorsque le suivi le permet. Le rapport final explique ce que chaque créateur et chaque format a apporté, pour que la campagne suivante parte de faits et non de suppositions."
      }
    ],
    "image": "/images/services/final/01-albina.jpg",
    "imageAlt": "Albina en portrait selfie rapproché, avec de longs cheveux méchés et une lumière douce et équilibrée."
  },
  {
    "slug": "talent-management",
    "title": "Management de talents full-service",
    "icon": "person",
    "tagline": "Des carrières construites pour durer.",
    "summary": "Une représentation complète des créateurs : collaborations rémunérées, partenariats exclusifs, négociation et croissance de carrière sur le long terme, gérées par une seule équipe.",
    "seoTitle": "Agence de management de talents et créateurs",
    "seoDescription": "Management de talents full-service pour les créateurs : partenariats de marque, négociation, contrats, facturation et plan de carrière, par une seule équipe.",
    "breakdown": [
      "Nous représentons un roster resserré plutôt qu'un annuaire. Chaque talent bénéficie ainsi d'un vrai management : positionnement, stratégie tarifaire et portefeuille de partenariats adapté à l'évolution de ses contenus et de son audience.",
      "Au quotidien, nous gérons les demandes entrantes et la prospection, négocions les conditions et les droits d'utilisation, gérons les contrats et la facturation, et protégeons le temps du créateur pour qu'il reste concentré sur la création de bons contenus.",
      "Sur le long terme, nous planifions les carrières : nouvelles plateformes, nouveaux formats et le type de relations avec les marques qui se renouvellent d'année en année au lieu de s'arrêter à une seule publication."
    ],
    "deliverables": [
      "Prospection des marques et demandes entrantes",
      "Négociation, contrats et facturation",
      "Stratégie de contenu et de publication",
      "Croissance de l'audience et évolution des tarifs",
      "Plan de carrière à long terme"
    ],
    "idealFor": [
      "Les créateurs dont la boîte de réception déborde et qui veulent que chaque demande de marque soit traitée, négociée et suivie correctement.",
      "Les créateurs beauté, soin de la peau, mode, lifestyle et gaming prêts à passer des publications ponctuelles à des partenariats de marque sur le long terme.",
      "Les marques qui souhaitent travailler directement avec notre roster, avec un seul interlocuteur pour les briefs, les contrats et les validations."
    ],
    "process": [
      {
        "title": "Prise de contact",
        "description": "Nous échangeons sur vos contenus, votre audience, vos objectifs et les marques avec lesquelles vous souhaitez travailler, et nous déterminons ensemble si nous sommes le bon partenaire."
      },
      {
        "title": "Positionnement et tarifs",
        "description": "Nous définissons votre positionnement, votre media kit et votre stratégie tarifaire, pour que chaque proposition et chaque négociation partent d'une valeur claire."
      },
      {
        "title": "Gestion des partenariats",
        "description": "Nous démarchons les marques, traitons les demandes entrantes, négocions les conditions et les droits d'utilisation, et gérons les contrats, la facturation et les échéances."
      },
      {
        "title": "Plan de carrière",
        "description": "Des points réguliers examinent ce qui a fonctionné, les partenariats à renouveler et les plateformes ou formats vers lesquels se développer ensuite."
      }
    ],
    "faqs": [
      {
        "question": "Que fait un manager de talents pour un influenceur ?",
        "answer": "Un manager de talents gère le volet commercial de la carrière d'un créateur : trouver et démarcher des partenariats de marque, négocier les rémunérations et les droits d'utilisation, gérer les contrats et les factures, protéger le créateur contre des conditions défavorables et planifier sa croissance à long terme, afin que le créateur puisse se concentrer sur la création de contenus."
      },
      {
        "question": "Quels créateurs CA Agency représente-t-elle ?",
        "answer": "Nous représentons un roster resserré de créateurs en beauté, soin de la peau, mode, lifestyle, gaming et divertissement sur Instagram, TikTok, YouTube et Twitch. Le roster actuel est présenté sur notre page talents, et chaque profil renvoie vers les chaînes et comptes du créateur."
      },
      {
        "question": "Comment une marque peut-elle réserver un créateur de votre roster ?",
        "answer": "Envoyez-nous votre brief, votre budget et votre calendrier via le formulaire de contact. Nous confirmons la disponibilité et l'adéquation, proposons les livrables et les droits d'utilisation, et gérons le contrat, la validation des contenus et la facturation, de sorte que la marque n'a qu'un seul interlocuteur."
      },
      {
        "question": "Négociez-vous les droits d'utilisation et l'exclusivité ?",
        "answer": "Oui. La durée d'utilisation, l'amplification payante et le whitelisting, les périodes d'exclusivité et les restrictions par catégorie ont tous une incidence sur la rémunération d'un créateur et sur ses futurs partenariats. Nous négocions donc chacun de ces points explicitement et veillons à ce qu'ils figurent dans le contrat."
      },
      {
        "question": "Un créateur peut-il rejoindre le roster de CA Agency ?",
        "answer": "Nous gardons un roster resserré pour que chaque créateur bénéficie d'un vrai management. Si vous créez des contenus beauté, soin de la peau, mode, lifestyle ou gaming et souhaitez être représenté, présentez-vous via le formulaire de contact en joignant les liens vers vos comptes."
      }
    ],
    "image": "/images/services/final/02-anton.jpg",
    "imageAlt": "Anton en peignoir blanc, avec des patchs sous les yeux et une peau éclatante."
  },
  {
    "slug": "content-production",
    "title": "Création & production de contenus",
    "icon": "video",
    "tagline": "Des contenus qui arrêtent le scroll, de A à Z.",
    "summary": "Vidéos courtes et photos de marque, conçues, tournées et montées en interne pour engager les audiences et renforcer la visibilité de la marque sur chaque plateforme.",
    "seoTitle": "Production de contenus créateurs beauté",
    "seoDescription": "Vidéos courtes et photos pour les marques de beauté et de soin : accroches, scripts, production avec des créateurs et montages prêts pour chaque plateforme.",
    "breakdown": [
      "Un bon format court paraît simple parce que la réflexion a eu lieu avant que la caméra ne tourne. Nous concevons des accroches, des scripts et des listes de plans pensés pour la façon dont les gens regardent vraiment : la première seconde mérite les dix suivantes.",
      "La production est assurée par nos créateurs et nos partenaires de production, en extérieur ou en studio, pour que le contenu s'intègre naturellement au feed au lieu de ressembler à une publicité qu'on y aurait glissée.",
      "Chaque master est livré monté et prêt pour les plateformes : versions courtes, déclinaisons de formats, sous-titres et couvertures, avec les droits correspondant à l'utilisation que vous avez réservée."
    ],
    "deliverables": [
      "Concepts créatifs, accroches et scripts",
      "Production en extérieur ou en studio",
      "Montages, versions courtes et déclinaisons de formats",
      "Sous-titres, couvertures et appels à l'action",
      "Fichiers master prêts à l'utilisation"
    ],
    "idealFor": [
      "Les marques qui ont besoin d'un flux régulier de vidéos courtes pour leurs réseaux sociaux en organique, leurs publicités et leurs pages produits.",
      "Les lancements qui ont besoin de plans de texture, de démonstrations d'application et de contenus routine montrant le produit à l'œuvre sur de vraies peaux.",
      "Les équipes dont les contenus actuels ressemblent à de la publicité et sont peu performants dans des feeds conçus pour les créateurs."
    ],
    "process": [
      {
        "title": "Concept",
        "description": "Nous définissons les accroches, les messages clés, les formats et la liste de plans pour chaque plateforme, en fonction du produit et de la façon dont votre audience regarde les contenus."
      },
      {
        "title": "Casting",
        "description": "Nous associons des créateurs ou des talents au concept et à la clientèle visée, pour que la personne à l'écran ressemble à l'audience et parle comme elle."
      },
      {
        "title": "Production",
        "description": "Les tournages ont lieu en extérieur ou en studio avec nos créateurs et nos partenaires de production, et votre équipe valide les images clés au fil de l'avancement."
      },
      {
        "title": "Montage et livraison",
        "description": "Vous recevez des masters montés, des versions courtes et des déclinaisons de formats avec sous-titres et couvertures, avec les droits correspondant à l'utilisation que vous avez réservée."
      }
    ],
    "faqs": [
      {
        "question": "Quels types de contenus produisez-vous ?",
        "answer": "Principalement des vidéos verticales courtes pour TikTok, Instagram Reels et YouTube Shorts, ainsi que des photos et des montages plus longs si nécessaire. Pour la beauté et le soin de la peau, il s'agit le plus souvent de tests d'application et de tenue, de routines pas à pas, de gros plans de texture, de formats « get ready with me » et de vidéos explicatives sur les produits."
      },
      {
        "question": "Le contenu de créateurs est-il plus efficace que le contenu de studio pour la publicité ?",
        "answer": "Pour les publicités sur les réseaux sociaux, c'est souvent le cas, car une vidéo au style créateur s'intègre naturellement au feed et retient l'attention plus longtemps. Le travail en studio reste important pour les visuels phares. Nous combinons généralement les deux : un tournage maîtrisé pour les visuels clés et des contenus de créateurs pour le volume et les tests."
      },
      {
        "question": "À qui appartient le contenu et comment pouvons-nous l'utiliser ?",
        "answer": "L'utilisation est convenue avant la production : quels canaux, quels marchés, pour quelle durée et si le contenu peut être diffusé en publicité payante. Les masters sont livrés avec les droits correspondant exactement à cette utilisation, et des extensions peuvent être négociées plus tard si un contenu fonctionne bien."
      },
      {
        "question": "Combien de versions recevons-nous ?",
        "answer": "Chaque concept est livré sous forme de master, accompagné des versions courtes et des formats dont le plan média a besoin : en général le 9:16 pour les Reels, TikTok et les Shorts, ainsi que le carré ou le 4:5 pour le feed et les publicités, avec sous-titres et couvertures. Le contenu exact de la livraison est fixé dans le périmètre de la mission, pour éviter toute surprise."
      },
      {
        "question": "Combien de temps prend la production de contenus ?",
        "answer": "Cela dépend du nombre de concepts, de l'ampleur du casting et du type de tournage, avec des créateurs existants ou en production dédiée. Nous convenons du calendrier dans le périmètre de la mission et planifions à rebours à partir de votre date de lancement ou de diffusion, de sorte que la validation du concept, le tournage, les montages et la livraison aient chacun un créneau fixe."
      }
    ],
    "image": "/images/services/final/03a-dariia.jpg",
    "imageAlt": "Dariia avec un maquillage d'automne terminé, en portrait rapproché de trois quarts."
  },
  {
    "slug": "performance-marketing",
    "title": "Marketing à la performance",
    "icon": "chart",
    "tagline": "Le contenu créateur, mesuré comme un média.",
    "summary": "Une amplification pilotée par la donnée des contenus de créateurs : paid social, tests créatifs et suivi des conversions, avec un ROI mesurable de la notoriété à la vente.",
    "seoTitle": "Marketing à la performance et paid social",
    "seoDescription": "Transformez les contenus de créateurs en paid social qui vend : publicités de partenariat et Spark Ads, tests créatifs, suivi des conversions, optimisation.",
    "breakdown": [
      "La portée organique commence l'histoire, la diffusion payante la termine. Nous amplifions les contenus de créateurs qui ont déjà fait leurs preuves, en les diffusant sous forme de publicités de contenu de marque et de type Spark, avec le ciblage que la publication organique n'a jamais eu.",
      "La création est testée comme un média : accroches, premières secondes et formats sont comparés directement, et les budgets sont réorientés vers les variantes qui retiennent l'attention et convertissent.",
      "Le suivi est mis en place avant que le premier dirham ne soit dépensé (pixels, événements et UTM), pour que le reporting parle en résultats : trafic, paniers et retour sur les dépenses, et pas seulement en impressions."
    ],
    "deliverables": [
      "Amplification payante des contenus de créateurs",
      "Matrices de tests créatifs",
      "Architecture des audiences et du tunnel de conversion",
      "Suivi des conversions et attribution",
      "Optimisation et reporting hebdomadaires"
    ],
    "idealFor": [
      "Les marques qui mènent déjà des campagnes d'influence et veulent que leurs publications les plus performantes touchent un public bien plus large que les abonnés du créateur.",
      "Les marques e-commerce et DTC qui ont besoin que les contenus de créateurs génèrent un trafic, des paniers et des ventes mesurables.",
      "Les équipes qui veulent des tests créatifs et une optimisation hebdomadaire plutôt qu'une seule publication sponsorisée."
    ],
    "process": [
      {
        "title": "Mise en place du suivi",
        "description": "Les pixels, les événements de conversion et les UTM sont vérifiés et corrigés avant le lancement, pour que chaque résultat puisse être attribué."
      },
      {
        "title": "Sélection des contenus",
        "description": "Nous choisissons les publications de créateurs qui présentent les meilleurs signaux organiques et nous sécurisons les droits pour les diffuser en publicité."
      },
      {
        "title": "Test et lancement",
        "description": "Accroches, premières secondes et formats sont comparés directement auprès d'audiences définies, avec des règles claires pour désigner la variante gagnante."
      },
      {
        "title": "Optimisation et reporting",
        "description": "Le budget est réorienté chaque semaine vers les variantes gagnantes, et le reporting couvre le trafic, les paniers, les ventes et le retour sur les dépenses publicitaires."
      }
    ],
    "faqs": [
      {
        "question": "Que sont les publicités de partenariat et les Spark Ads ?",
        "answer": "Elles permettent à une marque de diffuser la publication d'un créateur en publicité payante depuis le compte du créateur : les publicités de partenariat sur Instagram et Facebook, les Spark Ads sur TikTok. Comme la publicité ressemble au contenu du créateur, elle suscite généralement plus de confiance et d'attention qu'une publicité de marque classique."
      },
      {
        "question": "Pourquoi amplifier les contenus d'influence avec du média payant ?",
        "answer": "Les publications organiques touchent une partie des abonnés d'un créateur pendant quelques jours. L'amplification payante présente les contenus les plus performants à de nouvelles audiences ciblées aussi longtemps qu'ils continuent de fonctionner, et rend les résultats mesurables jusqu'aux clics, aux paniers et aux ventes."
      },
      {
        "question": "Comment suivez-vous les ventes issues des contenus d'influence ?",
        "answer": "Grâce aux pixels des plateformes et aux événements de conversion, aux liens balisés avec des UTM, aux codes de réduction et au reporting propre aux plateformes publicitaires. Nous mettons tout cela en place avant le lancement, car des résultats qui ne sont pas suivis dès le premier jour ne peuvent pas être attribués après coup."
      },
      {
        "question": "En combien de temps peut-on voir des résultats ?",
        "answer": "Les premiers signaux, comme le taux d'accroche, le taux de clics et le coût par clic, apparaissent en quelques jours. Les décisions fondées sur les conversions exigent assez de données pour être fiables : nous jugeons donc généralement une création après son premier cycle de test complet, puis nous optimisons chaque semaine."
      },
      {
        "question": "Quel budget faut-il prévoir pour l'amplification payante ?",
        "answer": "Assez pour que chaque création et chaque audience recueillent des données fiables avant toute décision. Plutôt que de fixer un minimum, nous dimensionnons le budget selon le nombre de créations et d'audiences testées, puis nous réorientons les dépenses vers les variantes gagnantes une fois qu'elles se dégagent clairement, afin que le budget ne soit pas trop dispersé pour en tirer des enseignements."
      }
    ],
    "image": "/images/services/final/04-melly.jpg",
    "imageAlt": "Melly regardant l'objectif, avec un maquillage smoky eye terminé."
  },
  {
    "slug": "brand-consultancy",
    "title": "Gestion & conseil en marketing de marque",
    "icon": "compass",
    "tagline": "Un accompagnement stratégique, du positionnement au lancement.",
    "summary": "Un accompagnement marketing stratégique pour les marques de beauté, de soin et de lifestyle : positionnement, plan de lancement, entrée sur un marché et gestion de marque en continu.",
    "seoTitle": "Conseil en marketing pour marques de beauté",
    "seoDescription": "Conseil marketing pour les marques de beauté, de soin et de lifestyle : audits, positionnement, lancement, entrée sur un marché et programmes d'influence.",
    "breakdown": [
      "Certaines marques ont besoin d'une campagne, d'autres d'une boussole. Notre mission de conseil commence par un audit honnête de la situation de la marque (positionnement, canaux, contenus et communauté) et de l'évolution de la catégorie.",
      "Sur cette base, nous construisons le plan : messages et direction créative, feuilles de route de lancement et de go-to-market, stratégie d'entrée sur de nouvelles régions et conception du programme d'influence qui portera l'ensemble.",
      "Pour les marques qui cherchent un partenaire plutôt qu'un projet, nous assurons une gestion en continu : une équipe attitrée qui planifie, exécute et ajuste, trimestre après trimestre."
    ],
    "deliverables": [
      "Audits de marque, de canaux et de contenus",
      "Positionnement et messages",
      "Plan de lancement et de go-to-market",
      "Conception de programmes d'influence",
      "Conseil et gestion en continu"
    ],
    "idealFor": [
      "Les marques de beauté et de soin qui préparent un lancement, un relancement ou une nouvelle gamme et ont besoin d'un récit clair avant d'engager les dépenses.",
      "Les marques qui entrent sur une nouvelle région, comme les États-Unis, le Golfe ou la Corée, et ont besoin d'un plan d'entrée sur le marché et d'un plan créateurs pour ce public.",
      "Les équipes marketing qui souhaitent un appui stratégique senior et un partenaire en continu sans constituer une équipe interne complète."
    ],
    "process": [
      {
        "title": "Audit",
        "description": "Nous passons en revue votre positionnement, vos canaux, vos contenus, votre communauté et vos concurrents pour voir où se situe la marque et où va la catégorie."
      },
      {
        "title": "Stratégie",
        "description": "Nous définissons le positionnement, les messages, les audiences et les marchés prioritaires, ainsi que le rôle des créateurs et des contenus pour les atteindre."
      },
      {
        "title": "Feuille de route",
        "description": "Vous recevez un plan de lancement ou de go-to-market avec le calendrier, les canaux, les budgets et les KPI sur lesquels chaque phase est mesurée."
      },
      {
        "title": "Exécution et bilan",
        "description": "Nous déployons le plan avec vous ou aux côtés de votre équipe, faisons le bilan des résultats chaque trimestre et ajustons la feuille de route."
      }
    ],
    "faqs": [
      {
        "question": "Que comprend une mission de conseil en marketing de marque ?",
        "answer": "Elle commence généralement par un audit du positionnement, des canaux, des contenus et des concurrents, suivi d'une stratégie et d'une feuille de route couvrant les messages, les marchés prioritaires, le calendrier de lancement, les budgets et les KPI. Les marques peuvent s'arrêter au plan ou nous confier la gestion de son exécution."
      },
      {
        "question": "Aidez-vous les marques à entrer sur les marchés des États-Unis ou du Golfe ?",
        "answer": "Oui. L'entrée sur un marché est un volet central de notre activité de conseil. Nous étudions en quoi la catégorie, les plateformes et le paysage des créateurs diffèrent sur le marché visé et nous construisons un plan de lancement avec des créateurs locaux, des allégations et des mentions de partenariat conformes, et la bonne combinaison de canaux pour ce public."
      },
      {
        "question": "Pouvez-vous concevoir notre programme d'influence ?",
        "answer": "Oui. Nous concevons des programmes en continu et des programmes de lancement : quels niveaux de créateurs utiliser, combien de créateurs, quelles plateformes, envoi de produits ou collaboration rémunérée, droits sur les contenus et mesure de la performance, pour que le programme corresponde à votre budget et puisse monter en puissance."
      },
      {
        "question": "S'agit-il d'un projet ponctuel ou d'un partenariat dans la durée ?",
        "answer": "Les deux sont possibles. Certaines marques ont besoin d'une stratégie et d'un plan de lancement, d'autres veulent une équipe attitrée qui planifie, exécute et ajuste chaque trimestre. Nous convenons du modèle et du périmètre dès le départ."
      },
      {
        "question": "Avec qui travaillerons-nous au quotidien ?",
        "answer": "Avec une seule équipe qui couvre la stratégie, les partenariats créateurs et les contenus, pour que le plan et son exécution restent liés. Vous bénéficiez de points réguliers et d'un reporting sur les KPI convenus dans la feuille de route."
      }
    ],
    "image": "/images/services/final/05-rebecca.jpg",
    "imageAlt": "Rebecca lors de l'événement LolaVie et Charlotte Tilbury."
  }
]
