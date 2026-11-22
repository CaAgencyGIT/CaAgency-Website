import type { CaseStudyUi } from '@/lib/data/case-study-ui'
import type { CaseStudyCopy } from '@/lib/data/case-studies-translated'

// French copy for the case-study pages, served at /fr/case-studies/<slug>.
// Translated from lib/data/case-studies.ts (and creator-cases, profile-cases).
// Plain data: `studies` is keyed by the English slug.

export const ui: CaseStudyUi = {
  "eyebrowSuffix": "Étude de cas",
  "brand": "Marque",
  "platforms": "Plateformes",
  "creator": "Créateur",
  "services": "Services",
  "theBrief": "Le brief",
  "ourApproach": "Notre approche",
  "theOutcome": "Le résultat",
  "overview": "Aperçu",
  "inTheVideo": "Dans la vidéo",
  "inThePost": "Dans la publication",
  "highlights": "Points forts",
  "moreCaseStudies": "Autres études de cas",
  "viewCaseStudy": "Voir l'étude de cas",
  "detailCtaTitle": "Visez des résultats de ce niveau",
  "detailCtaText": "Parlez-nous de votre marque et nous vous proposerons les bons créateurs pour votre prochaine campagne.",
  "startCampaign": "Lancez votre campagne",
  "viewAllWork": "Voir tous les projets",
  "watchTheWork": "Regarder les réalisations",
  "seoTitleBrand": "Étude de cas marketing d'influence {brand}",
  "seoTitleCreator": "{brand} × {creator} : étude de cas",
  "indexEyebrow": "Études de cas",
  "indexHeading": "Les réalisations, et leurs coulisses",
  "indexIntro": "Derrière chaque vidéo de campagne, il y a un brief, le choix d'un créateur et un processus de production. Ces études de cas montrent comment nous menons des campagnes d'influence pour des marques de beauté, de soin de la peau et de tech, du premier appel à la livraison finale.",
  "indexTitle": "Études de cas en marketing d'influence",
  "indexDescription": "Comment CA Agency mène des campagnes d'influence pour des marques comme YSL Beauty, NARS, HONOR et Mixsoon : le brief, l'approche et les contenus eux-mêmes.",
  "indexCtaTitle": "Votre marque pourrait être la prochaine",
  "indexCtaText": "Dites-nous ce que vous lancez et nous vous proposerons les bons créateurs.",
  "stillAlt": "Image extraite de la vidéo de campagne {brand}",
  "logoAlt": "Logo {brand}",
  "views": "Vues",
  "likes": "J’aime",
  "comments": "Commentaires",
  "creatorBase": "Pays du créateur",
  "publicResultsNote": "Chiffres publics de la publication {platform} du créateur, au {date}.",
  "viewOriginalPost": "Voir la publication d’origine"
}

export const verticals: Record<string, string> = {
  "Beauty E-commerce": "E-commerce beauté",
  "Beauty Retail": "Distribution beauté",
  "Beauty Tech": "Beauty tech",
  "Clean Beauty": "Clean beauty",
  "Color Cosmetics": "Cosmétiques couleur",
  "Consumer Tech": "Tech grand public",
  "Haircare": "Soins capillaires",
  "K-Beauty Retail": "Distribution K-beauty",
  "K-Beauty Skincare": "Soins K-beauty",
  "Luxury Beauty": "Beauté de luxe",
  "Makeup": "Maquillage",
  "Premium Skincare": "Soin premium",
  "Prestige Beauty": "Beauté prestige",
  "Skincare": "Soin de la peau"
}

export const services: Record<string, string> = {
  "Brand-safety review": "Contrôle de sécurité de marque",
  "Campaign management": "Gestion de campagne",
  "Concept development": "Développement de concept",
  "Content production": "Production de contenus",
  "Creator matching": "Sélection des créateurs",
  "Talent management": "Gestion des talents",
  "Usage rights": "Droits d'utilisation"
}

export const studies: Record<string, CaseStudyCopy> = {
  "honor-smartphone-launch": {
    "title": "Collaboration créateur HONOR",
    "summary": "Un contenu porté par le storytelling, qui montre le smartphone HONOR dans des moments du quotidien, des messages entre amis au selfie miroir.",
    "brief": "HONOR voulait que son nouveau smartphone soit montré entre de vraies mains, au quotidien, plutôt qu'à travers une fiche technique, avec un récit porté par une voix régionale dans laquelle on se reconnaît. Le lancement visait un public jeune de la région, tourné avant tout vers les réseaux sociaux, qui réagit le mieux aux histoires proches de son quotidien, racontées dans sa propre langue. Le brief : faire du téléphone un élément de la vie de tous les jours, montrer son design et son appareil photo par l'usage, et garder un ton léger, natif de la plateforme.",
    "approach": "La créatrice construit un court récit autour de sa journée : elle se prépare, discute avec ses amis dans des bulles de messages en dialecte local, déballe le nouvel appareil et prend un selfie miroir. Le téléphone apparaît naturellement dans chaque scène, si bien que son design et son appareil photo sont montrés par l'usage plutôt qu'expliqués.",
    "outcome": "HONOR a reçu un contenu de créatrice construit comme un récit, qui inscrit l'appareil dans la vie quotidienne. Son ton proche du quotidien convient aux canaux organiques et aux placements payants d'aspect natif."
  },
  "ysl-beauty-campaign": {
    "title": "Campagne créateur YSL Beauty",
    "summary": "Des contenus beauté de luxe qui conservent l'élégance de YSL tout en trouvant naturellement leur place dans le feed d'un créateur.",
    "brief": "La beauté de luxe est un exercice d'équilibre : le contenu doit préserver les codes premium de la marque tout en ressemblant à ce qu'un créateur publierait vraiment. YSL Beauty avait besoin de vidéos courtes qui fassent les deux.",
    "approach": "Nous avons sélectionné un créateur beauté dont l'esthétique existante était déjà proche de la marque, par la lumière, le ton et le rendu, afin que le contenu sponsorisé ne rompe pas l'harmonie du feed. Des séquences centrées sur l'application ont gardé le produit à l'image et montré de près la texture et le résultat.",
    "outcome": "YSL Beauty a reçu des contenus de créateur qui conservent son allure premium dans un format vertical, pensé pour être regardé avec le son : le type de contenu qui fonctionne à la fois en organique sur le compte du créateur et en social payant côté marque."
  },
  "kylie-cosmetics-campaign": {
    "title": "Campagne créateur Kylie Cosmetics",
    "summary": "Un tutoriel lèvres ciblé, qui montre l'association crayon et couleur lèvres de Kylie Cosmetics pour un nude défini et brillant.",
    "brief": "Kylie Cosmetics s'est construite autour des lèvres : le contenu devait donc montrer ce look signature clairement et rapidement, d'une manière que le public puisse reproduire. L'audience de Kylie Cosmetics attend des contenus soignés, dans l'air du temps, et connaît bien la marque. Le défi consistait donc à proposer un look actuel tout en gardant le produit au centre de l'image. La vidéo devait être courte, facile à reproduire et visuellement cohérente avec l'esthétique glossy de la marque.",
    "approach": "La vidéo est tournée en très gros plan : le contour des lèvres est dessiné avec un crayon Kylie Cosmetics, avant que la couleur et la brillance ne soient superposées, chaque étape restant bien visible. Un éclairage uniforme, un fond épuré et un simple haut noir maintiennent l'attention sur le produit et le fini, et le résultat est présenté face caméra à la fin pour que le public voie le look complet.",
    "outcome": "Kylie Cosmetics a reçu un tutoriel lèvres net et reproductible, qui met en valeur le produit en cours d'utilisation et l'effet final. Sa mise en scène simple le rend efficace sur le compte du créateur et adaptable à des placements payants."
  },
  "yesstyle-collaboration": {
    "title": "Collaboration créateur YesStyle",
    "summary": "Une routine de soin des pores, étape par étape, composée uniquement de best-sellers K-beauty disponibles sur YesStyle.",
    "brief": "YesStyle est une destination K-beauty : le contenu devait donc montrer l'étendue de ce que l'on peut y composer. L'objectif : une routine pédagogique qui répond à une préoccupation courante, les pores visibles, avec plusieurs produits réunis dans une séquence facile à suivre. En tant que distributeur et non marque unique, YesStyle tire le meilleur parti des contenus qui orientent le public vers plusieurs produits à la fois. Le brief : construire une routine suivant une logique avant/après claire, présenter des produits de marques différentes, toutes disponibles sur YesStyle, et intégrer une incitation traçable afin que le contenu puisse être mesuré sur les ventes autant que sur la portée.",
    "approach": "Georgii Galaev ouvre sur la question « perfect pores? », puis numérote chaque étape à l'écran. Il masse la ma:nyo Herbgreen Cleansing Oil sur les zones à points noirs pendant une minute entière, enchaîne avec l'Anua Rice Enzyme Brightening Cleansing Powder, qu'il fait mousser dans ses mains, puis applique le Medicube Zero Pore Blackhead Mud Mask et termine avec la Medicube PDRN Pink Collagen Capsule Cream. Le cadrage en gros plan et son propre code de réduction transforment une routine en liste d'achats prête à l'emploi.",
    "outcome": "YesStyle a reçu un tutoriel très utile, qui présente plusieurs marques de son catalogue en une seule vidéo et donne au public une raison claire d'acheter. Les étapes numérotées et le code du créateur le rendent efficace à la fois pour les enregistrements et pour des conversions traçables."
  },
  "insta360-campaign": {
    "title": "Campagne créateur Insta360 X",
    "summary": "Des contenus de créateur tournés vers l'action, qui laissent la caméra Insta360 X faire sa propre démonstration.",
    "brief": "Une caméra 360° est sa propre meilleure vendeuse, à condition que les images montrent ce dont elle est capable. Insta360 avait besoin de contenus de créateur dont la vedette soit le rendu du produit, et non un test face caméra.",
    "approach": "Le concept a mis la caméra en mouvement : des images tournées par le créateur, montrant les angles en apparence impossibles et le recadrage qui font la réputation de la série X. L'appareil apparaît en cours d'utilisation, et les résultats parlent d'eux-mêmes au montage.",
    "outcome": "Insta360 a reçu une vidéo de créateur qui montre au lieu d'expliquer, où la preuve du produit est le contenu lui-même : le format le plus fort possible pour du matériel de prise de vue."
  },
  "mixsoon-skincare": {
    "title": "Campagne K-beauty Mixsoon",
    "summary": "Une vidéo face caméra qui explique les ingrédients du Bean Copper Peptide Firming Serum de Mixsoon, pensée pour le soin de la peau au masculin.",
    "brief": "Mixsoon voulait toucher les hommes qui s'intéressent aux soins anti-âge en expliquant, dans un langage clair et direct, ce que fait son Bean Copper Peptide Firming Serum. Les hommes forment une audience du soin de la peau en forte croissance, mais ils ont souvent besoin d'explications plus claires et d'un ton sans détour. Le brief demandait un contenu direct et crédible, qui explique comment le sérum agit et pourquoi ses ingrédients clés comptent, sans donner l'impression d'une publicité beauté destinée à quelqu'un d'autre.",
    "approach": "Jay Sadiq s'adresse directement à la caméra, le sérum en main, pendant qu'il en explique les principaux ingrédients. Des citations à l'écran détaillent les bénéfices : le peptide de cuivre (GHK-Cu) favorise une peau d'apparence plus ferme et la production de collagène, tandis que l'essence de fèves fermentées apporte hydratation et nutrition. Il termine en appliquant le sérum, pour montrer la facilité avec laquelle il s'intègre à une routine de soin masculine.",
    "outcome": "Mixsoon a reçu un contenu crédible et pédagogique, qui ouvre l'accès à l'audience masculine du soin de la peau. Le détail clair des ingrédients le rend efficace en organique comme en création publicitaire à la performance."
  },
  "kiko-milano-campaign": {
    "title": "Kiko Milano × @_idareen_",
    "summary": "@_idareen_, talent de CA Agency, incarne une campagne Kiko Milano avec des contenus beauté centrés sur l'application.",
    "brief": "Kiko Milano souhaitait que ses produits soient présentés par un talent doté d'une vraie crédibilité beauté, devant une audience engagée : un contenu qui soit d'abord un tutoriel, ensuite une publicité.",
    "approach": "Nous avons associé la marque à notre talent @_idareen_, dont le style de contenus beauté correspond au positionnement glamour et accessible de Kiko, et géré la collaboration de bout en bout : brief, production, validation par la marque et livraison.",
    "outcome": "Le partenariat a donné lieu à des contenus de campagne soignés, centrés sur l'application, réalisés par un talent de notre propre roster : le modèle full-service, dans lequel CA Agency prend en charge à la fois le côté marque et le côté talent."
  },
  "juvias-place-campaign": {
    "title": "Juvia's Place × @beatrixramosaj",
    "summary": "Des contenus de créatrice qui mettent le pigment en avant pour Juvia's Place, avec @beatrixramosaj, talent de CA Agency.",
    "brief": "Juvia's Place est appréciée pour ses couleurs riches et très pigmentées. Le brief demandait un contenu qui montre cette intensité pigmentaire à l'image, à travers une créatrice dont l'audience fait confiance aux looks.",
    "approach": "Notre talent @beatrixramosaj a construit le contenu autour de moments de swatch et d'application, où c'est le pigment qui convainc. Nous avons géré le planning, les retours de la marque et la livraison finale.",
    "outcome": "Juvia's Place a reçu un contenu de créatrice qui met en avant son atout le plus distinctif, l'intensité de la couleur, dans le cadre d'une relation talent gérée par nos soins, avec un interlocuteur unique."
  },
  "nars-campaign": {
    "title": "NARS × @thefashionfreakk",
    "summary": "Des contenus beauté prestige pour NARS, incarnés par @thefashionfreakk, talent de CA Agency.",
    "brief": "NARS avait besoin de contenus de créateur à la hauteur des codes de la beauté prestige, tout en touchant une audience à travers une personnalité qu'elle suit pour son style, et pas seulement pour des produits.",
    "approach": "Nous avons associé NARS à notre talent @thefashionfreakk, dont l'esthétique tournée vers la mode inscrit les produits de beauté dans un récit de style plus large. Le contenu intègre le produit à son look signature au lieu de l'isoler.",
    "outcome": "La collaboration a apporté à NARS des contenus de créatrice ancrés dans un univers de style, où la beauté fait partie d'un look et d'une vie : c'est sur ce terrain que les marques prestige gagnent en format court."
  },
  "elemis-campaign": {
    "title": "Campagne créateur ELEMIS",
    "summary": "Un storytelling soin premium pour ELEMIS, construit autour du rituel, de la texture et de la routine.",
    "brief": "ELEMIS évolue dans le soin premium, où le contenu doit transmettre le rituel et la texture, ces raisons sensorielles pour lesquelles on accepte de payer plus. Le brief demandait des contenus de créateur porteurs de cette dimension haut de gamme, tournée vers le soin de soi.",
    "approach": "Le contenu a été construit autour du rituel d'application : gros plans sur la texture, rythme posé et voix off à la première personne, qui s'entend comme une vraie routine plutôt que comme un texte récité.",
    "outcome": "ELEMIS a reçu des contenus de créateur sensoriels, centrés sur la routine et accordés à son positionnement premium, produits dans le cadre d'une collaboration créateur entièrement gérée."
  },
  "fenty-beauty-campaign": {
    "title": "Campagne créateur Fenty Beauty",
    "summary": "Un essai en temps réel du Pro Filt’r Fluid Flex Foundation de Fenty Beauty, construit autour de sa sensation de légèreté sur la peau.",
    "brief": "Fenty Beauty voulait présenter son nouveau Pro Filt’r Fluid Flex Foundation sous l'angle d'une première impression honnête. L'objectif : montrer la couvrance et le fini tout en captant la réaction sincère de la créatrice face à la formule. Le lancement d'un fond de teint se joue sur la confiance : avant d'acheter, le public veut voir une vraie couvrance, un vrai fini et une vraie réaction. Le brief : saisir une première impression non scénarisée du nouveau Pro Filt’r Fluid Flex Foundation, montrer l'application complète, sans coupes qui masqueraient le résultat, et nommer la teinte pour que les personnes à la carnation proche puissent l'acheter.",
    "approach": "Melly Sanchez applique le fond de teint, en teinte 396N, face caméra et au pinceau, tandis que le texte à l'écran, « wait… why does this feel like NOTHING on my skin?! » (« attendez… pourquoi ai-je l'impression de ne RIEN avoir sur la peau ?! »), traduit sa réaction en temps réel. L'application est montrée en entier pour que chacun puisse juger par lui-même de la couvrance et du fini mat naturel, et le style affirmé de la créatrice ancre la vidéo dans l'univers audacieux et inclusif de Fenty.",
    "outcome": "Fenty Beauty a reçu un contenu de première impression authentique, qui met en avant les principaux atouts de la formule, couvrance, fini mat et sensation de légèreté, avec les mots de la créatrice. Il fonctionne comme contenu de lancement en organique et comme création payante crédible."
  },
  "delere-campaign": {
    "title": "Campagne créateur DELERE",
    "summary": "Une introduction au soin au caviar, qui rend visible sur la peau l'histoire de l'ingrédient de luxe de DELERE.",
    "brief": "« Caviar as skincare?! » (le caviar comme soin de la peau ?!) : c'est une question que se posera la majorité du public, et DELERE avait besoin d'un contenu qui y réponde. Le brief : expliquer la formule, 15 % d'oméga-3 de caviar et peptide de collagène, tout en montrant l'éclat auquel le public peut s'attendre, le tout dans un format vertical court. Nom encore récent dans le soin de luxe, DELERE devait aussi gagner en crédibilité auprès de personnes qui n'en avaient jamais entendu parler. Il fallait donc associer l'allégation liée à l'ingrédient à une preuve visible sur la peau, garder un ton premium plutôt que gadget, et fournir à la marque un contenu réutilisable dans ses campagnes de notoriété.",
    "approach": "Saranda Mavriqi commence par l'accroche qui éveille la curiosité, puis passe directement à l'application : la crème est déposée au pinceau d'un geste lent avant d'être pressée à la main, de sorte que l'on voit à la fois la texture et le fini. Le texte à l'écran porte l'histoire de l'ingrédient pendant que la caméra reste sur sa peau, et la vidéo se termine sur le résultat lumineux, dans une salle de bain à l'ambiance calme, en accord avec le positionnement premium de la marque.",
    "outcome": "DELERE a reçu un contenu de créatrice qui présente en termes simples un ingrédient de luxe peu connu et l'appuie par une texture et un éclat visibles. Les textes sur l'ingrédient en font un solide contenu pédagogique pour de nouvelles audiences, tandis que son esthétique épurée et haut de gamme reste fidèle à la marque pour le social payant."
  },
  "sephora-campaign": {
    "title": "Campagne créateur Sephora",
    "summary": "Un récit soin centré sur la barrière cutanée, qui fait de la gamme Hydrate de Sephora une routine pour les jours de peau sèche et irritée.",
    "brief": "Sephora voulait positionner sa collection maison Hydrate comme une gamme de soins réfléchie plutôt que comme une alternative à petit prix. Le défi : montrer trois textures aux trois rôles distincts, la Bouncy Water Jelly aux acides hyaluronique et polyglutamique, la Balmy Rich Cream aux lipides et céramides, et la Satin Light Cream, de façon que chacun puisse les rapporter immédiatement à l'état de sa propre peau, quel que soit le jour. L'audience : des acheteurs avertis en matière de soin, qui connaissent déjà le nom des ingrédients et veulent savoir quoi utiliser et quand, sans qu'on leur vende un miracle. La vidéo devait trouver sa place sur TikTok et Reels sans ressembler à une publicité d'enseigne, garder le nom Sephora visible tout du long, et laisser au public une règle simple à appliquer devant le rayon.",
    "approach": "Albina Mavriqi ouvre sur un vrai problème : un gros plan sur des rougeurs et une sécheresse, légendé « on dry or irritated skin days, my barrier needs extra support » (les jours de peau sèche ou irritée, ma barrière cutanée a besoin d'un soutien supplémentaire). Cette franchise légitime la présentation des produits. Chaque pot est tenu face caméra assez longtemps pour lire les ingrédients phares, puis un plan sur la texture de la crème permet d'en apprécier soi-même la richesse. La vidéo se clôt sur le résultat, une peau fraîche et lumineuse, visiblement plus apaisée, autour de l'idée de choisir son hydratation « based on what my skin needs that day » (selon ce dont ma peau a besoin ce jour-là), ce qui transforme une gamme de produits en guide de décision.",
    "outcome": "Sephora a reçu une vidéo de créatrice pédagogique, centrée sur les ingrédients, qui vend la logique de toute la gamme et pas seulement d'une référence. Le cadrage avant/après et les mentions d'ingrédients à l'écran la rendent aussi exploitable en contenu organique sur le compte d'Albina qu'en contenu payant destiné aux acheteurs de soins qui comparent des crèmes hydratantes."
  },
  "revolve-beauty-campaign": {
    "title": "Campagne créateur Revolve Beauty",
    "summary": "Un look glamour d'hiver « frost-kissed », composé uniquement de produits disponibles chez Revolve Beauty.",
    "brief": "Revolve Beauty voulait un look de saison qui montre l'étendue de son assortiment multimarque et renvoie directement vers des produits achetables. Le contenu devait être assez éditorial pour l'audience mode de Revolve. Revolve Beauty propose une sélection choisie de marques : le brief demandait donc un look qui en mette plusieurs en valeur tout en restant une vision cohérente. Le contenu avait besoin d'une accroche saisonnière, d'un stylisme éditorial en accord avec l'identité mode de Revolve, et d'une liste de produits claire pour que le public puisse acheter le look directement chez le distributeur.",
    "approach": "Melani Seiffert crée un look glamour d'hiver tout en douceur, dans un décor éclairé par un lustre, enveloppée de fausse fourrure blanche. Elle passe en revue une sélection de produits Revolve Beauty, dont le Tower 28 Swipe Serum Concealer, le Nudestix Tinted Blur Sculpt Stick et le blush Kevyn Aucoin The Sensual Skin, qu'elle présente chacun face caméra avant de l'appliquer. Le stylisme froid et très glamour donne à la vidéo l'allure d'un éditorial de mode, tout en restant facile à suivre.",
    "outcome": "Revolve Beauty a reçu un tutoriel de qualité éditoriale, qui met en valeur plusieurs marques dans un seul look achetable. Son esthétique premium convient aux canaux propres de Revolve, et sa structure produit par produit favorise le clic vers le distributeur."
  },
  "anua-campaign": {
    "title": "Campagne créateur soin de la peau Anua",
    "summary": "Un tutoriel de massage du visage en cinq règles avec la crème gua sha d'Anua, du drainage lymphatique au sculptage.",
    "brief": "Anua voulait présenter sa crème gua sha comme le produit qui rend le massage du visage simple et efficace. Le contenu devait enseigner la technique, et pas seulement montrer le produit. Le sculptage du visage et le drainage lymphatique sont populaires, mais beaucoup ne savent pas vraiment comment s'y prendre. Le brief : positionner la crème gua sha Anua comme le produit qui rend la technique facile, et créer une vidéo pédagogique, à fort potentiel d'enregistrement, à laquelle le public reviendrait.",
    "approach": "Georgii Galaev fait de la vidéo une mini masterclass, chaque étape étant indiquée à l'écran : ouvrir les ganglions lymphatiques, sculpter la ligne de la mâchoire, rehausser les pommettes, dégonfler le nez et tout drainer vers le bas. Il utilise la crème gua sha Anua tout du long et montre comment l'outil intégré et la crème offrent assez de glisse pour chaque mouvement.",
    "outcome": "Anua a reçu un tutoriel centré sur la technique, à fort potentiel d'enregistrement, qui positionne son produit comme essentiel à la routine. Il fonctionne comme contenu organique pédagogique et comme création payante pour les personnes intéressées par le sculptage du visage."
  },
  "purito-campaign": {
    "title": "Campagne créateur Purito",
    "summary": "Un vlog « morning routine » horodaté, qui intègre Purito Seoul à une routine authentique, étape par étape.",
    "brief": "Le positionnement clean et peaux sensibles de Purito Seoul fonctionne le mieux lorsqu'il s'inscrit dans la vraie vie. L'objectif : un contenu qui s'insère naturellement dans le format très populaire du vlog de routine, plutôt qu'une coupure publicitaire en son sein. L'audience de Purito se méfie des publicités trop produites et réagit aux routines honnêtes, sans filtre. Le brief demandait un format à forte durée de visionnage, où le produit mérite sa place dans une vraie matinée au lieu de l'interrompre, et un contenu qui continue de générer du trafic de découverte longtemps après sa publication.",
    "approach": "Aiym Kablan documente sa matinée minute par minute, l'heure s'affichant à l'écran pendant qu'elle prend sa douche, enveloppe ses cheveux, prépare sa peau et s'installe dans sa routine. Purito Seoul apparaît au fil de ces étapes, pris en main et appliqué au passage, si bien que le produit est vu en contexte plutôt que présenté. Le cadre cosy et sans filtre, ainsi que des détails dans lesquels on se reconnaît, gardent la vidéo authentique et très agréable à regarder.",
    "outcome": "Purito Seoul a reçu un contenu natif, lifestyle avant tout, dans l'un des formats courts les plus engageants. Parce que le produit vit à l'intérieur d'une routine que le public a déjà envie de regarder, la vidéo fonctionne comme contenu de découverte pour de nouvelles audiences et comme contenu payant crédible, sans pression commerciale."
  },
  "gisou-campaign": {
    "title": "Campagne créateur Gisou",
    "summary": "Un contenu centré sur les cheveux, qui laisse le fini brillant signature de Gisou parler de lui-même sur de longues ondulations volumineuses.",
    "brief": "La marque Gisou s'est construite sur une brillance saine : le contenu devait donc rendre cette brillance visible à l'image. L'objectif : un court moment capillaire aspirationnel, qui s'intègre naturellement au feed de Beatrix, et non une démonstration produit. La communauté de Gisou adhère à un look et à un art de vivre autant qu'à un produit, et le brief privilégiait donc l'ambiance à l'explication. Le contenu devait s'accorder avec l'imagerie soignée de la marque, faire des cheveux la vedette de chaque plan, et fonctionner sans son ni sous-titres pour un public qui fait défiler rapidement.",
    "approach": "Beatrix Ramosaj filme dans une lumière du jour douce et uniforme, qui accroche la brillance de son brushing plein de ressort. Plutôt qu'un tutoriel, la vidéo est construite autour du mouvement : elle passe les doigts dans ses longueurs, travaille le produit entre ses paumes et termine par les pointes, de sorte que l'on voit les cheveux réagir en temps réel. Le cadrage serré maintient l'attention sur la texture et la brillance, et le rythme posé reflète le ton discret et premium de Gisou.",
    "outcome": "Gisou a reçu une vidéo capillaire soignée, d'esprit lifestyle, qui transmet la promesse centrale de la marque, une brillance d'aspect sain, en quelques secondes et sans texte appuyé. Son style visuel épuré convient à la fois à l'audience de Beatrix et à des placements payants aux côtés des contenus de marque de Gisou."
  },
  "samsung-campaign": {
    "title": "Campagne créateur Samsung",
    "summary": "Des contenus de créatrice d'esprit lifestyle, qui placent les appareils Samsung au cœur d'une vraie routine quotidienne.",
    "brief": "Samsung voulait que l'appareil soit montré comme un compagnon du quotidien plutôt que comme une fiche technique : un contenu qui ressemble à la journée d'un créateur, où le produit gagne naturellement son temps d'écran.",
    "approach": "Nous avons construit le concept autour du style de contenus quotidiens de notre talent Khutjo Matsoma : l'appareil apparaît là où il aurait réellement sa place, moments photo, usage en déplacement, avant de conclure sur une séquence consacrée à une fonctionnalité, qui porte sans discours commercial appuyé.",
    "outcome": "Samsung a reçu une vidéo de créatrice authentique, native du feed, qui touche des audiences qui passent sans s'arrêter devant la publicité tech traditionnelle."
  },
  "haruharu-wonder-campaign": {
    "title": "Campagne créateur Haruharu Wonder",
    "summary": "Un récit actif et en plein air autour de la brume éclat au riz noir de Haruharu Wonder, utilisée tout au long de la journée.",
    "brief": "Haruharu Wonder voulait présenter sa brume comme une façon non collante de garder une peau hydratée et éclatante en déplacement. La brume au riz noir de Haruharu Wonder est largement vendue sur Amazon, et le brief portait donc sur la démonstration d'un usage réel. Le contenu devait montrer la brume utilisée plusieurs fois dans la journée, souligner son fini non collant et garder un ton naturel, tourné vers le plein air, en accord avec la marque.",
    "approach": "Rebecca Ghaderi se filme en extérieur et tout au long de sa journée, d'une promenade matinale au soleil à des moments de détente plus tard, en vaporisant à chaque fois la brume éclat Haruharu Wonder sur son visage. La lumière naturelle vive rend bien visible le fini frais et lumineux, et la variété des décors montre comment la brume s'intègre à un quotidien chargé.",
    "outcome": "Haruharu Wonder a reçu un contenu lifestyle qui montre un usage réel et répété, ainsi qu'un éclat naturel. Il convient aussi bien à une publication organique qu'à des placements payants pour sa fiche produit Amazon."
  },
  "armani-beauty-campaign": {
    "title": "Campagne créateur Armani Beauty",
    "summary": "Un tutoriel de couleur modulable pour les joues, avec la teinte liquide pour les joues Luminous Silk d'Armani Beauty.",
    "brief": "Armani Beauty voulait montrer comment sa teinte liquide pour les joues se fond en un effet bonne mine naturel et lumineux, pour un look sans effort et premium. Le positionnement luxe d'Armani Beauty appelle un contenu raffiné, qui prend son temps. Le brief : montrer comment la teinte se module, d'un voile transparent à un effet bonne mine, souligner son fini lumineux et garder le produit lui-même bien visible.",
    "approach": "La teinte pour les joues Armani Luminous Silk est déposée par petites touches sur la joue, puis estompée au pinceau, la couleur étant construite progressivement pour que l'on voie à quel point elle est modulable. Le cadrage en gros plan et une lumière douce révèlent le fini lumineux, et la vidéo se clôt sur le produit, tenu face caméra, à côté du résultat éclatant.",
    "outcome": "Armani Beauty a reçu une démonstration nette et élégante d'un produit unique, qui met en avant sa facilité à s'estomper et son fini. Elle convient aussi bien à un usage organique qu'à des placements payants."
  },
  "valentino-beauty-campaign": {
    "title": "Campagne créateur Valentino Beauty",
    "summary": "Un tutoriel maquillage ton sur ton, qui associe le rouge à lèvres Spike et le blush Eye2Cheek de Valentino en un seul look coordonné.",
    "brief": "Valentino Beauty voulait montrer que ses produits lèvres et joues fonctionnent en duo. L'idée devait s'apparenter à un conseil de style, de ceux que l'on enregistre, plutôt qu'à un simple swatch produit. Le maquillage Valentino Beauty est positionné comme couture : le contenu devait donc paraître stylisé et réfléchi tout en restant pratique. Les deux produits phares devaient être clairement identifiables par leur nom et leur teinte, pour que le public puisse recréer le look, et le visage final devait être assez photogénique pour que la marque puisse l'utiliser au-delà du feed de la créatrice.",
    "approach": "Dariia Bordun construit la vidéo autour d'une analogie mode : de même que l'on assortit ses chaussures à son sac, les lèvres et les joues doivent s'accorder. Elle applique le Spike Valentino Buttery Matte Lip en 134 Couture in the Streets, puis le Valentino Eye2Cheek en 01 Born in Roma, en créant un doux « halo » de couleur qui unifie le visage. Le rouge à lèvres doré clouté et le boîtier couture rouge sont tenus face caméra, le nom des teintes à l'écran, ce qui rend le look facile à acheter.",
    "outcome": "Valentino Beauty a reçu un tutoriel qui vend deux produits comme un seul look et offre au public une technique réutilisable. Les teintes nommées, l'application en gros plan et le fini coordonné le rendent efficace en organique et comme contenu payant orienté conversion."
  },
  "chanel-beauty-campaign": {
    "title": "Campagne créateur Chanel Beauty",
    "summary": "Un tutoriel teint à un seul produit, qui montre comment Les Beiges Pearly Glow de Chanel crée un fini de peau nacré.",
    "brief": "Chanel Beauty voulait mettre en valeur un unique produit teint lumineux, d'une manière qui paraisse simple et luxueuse. Le défi : montrer clairement à l'image un effet subtil, l'éclat nacré. L'audience de Chanel attend retenue et élégance : le contenu devait donc éviter la vente appuyée tout en faisant clairement du produit la vedette. Le brief : montrer de façon convaincante à l'image un fini subtil, qui reflète la lumière, garder un stylisme minimal et luxueux, et présenter le produit comme un essentiel facile du quotidien.",
    "approach": "Dariia Bordun commence sur peau nue, puis présente Les Beiges Pearly Glow de Chanel, qu'elle applique du bout des doigts et estompe sur les points hauts du visage. Une lumière douce et flatteuse laisse le reflet nacré se construire visiblement, et le texte à l'écran, « ACTUALLY the only product you need for that pearlescent skin effect » (VRAIMENT le seul produit qu'il vous faut pour cet effet de peau nacré), le présente comme un produit phare. Elle termine en tenant le flacon à côté du résultat lumineux.",
    "outcome": "Chanel Beauty a reçu un tutoriel élégant, consacré à un seul produit, qui rend un fini subtil facile à voir et facile à désirer. Son stylisme minimal et son avant/après clair le gardent fidèle à la marque, en organique comme en payant."
  },
  "rare-beauty-campaign": {
    "title": "Campagne créateur Rare Beauty",
    "summary": "Un look maquillage rosé et lumineux, qui associe le blush de Rare Beauty à son huile à lèvres.",
    "brief": "Rare Beauty voulait un look joyeux et facile à porter, qui montre deux de ses catégories cultes, le blush et les lèvres, fonctionnant ensemble. La communauté de Rare Beauty est sensible à un maquillage joyeux et accessible plutôt qu'à une technique poussée. Le brief : montrer le blush et l'huile à lèvres réunis dans un look ludique et facile, garder un ton enjoué et inclusif, et rendre les deux produits faciles à identifier et à acheter.",
    "approach": "Melly Sanchez compose un look rosé, tout en rose, dans un décor ludique, avec barrettes roses et néon doux. Elle tapote le blush Rare Beauty sur ses joues au pinceau, montre le produit face caméra, dessine le contour de ses lèvres et termine avec l'huile à lèvres pour un effet rosé et brillant. Le texte à l'écran, « Rare beauty blush + lip oil », rend l'association facile à acheter.",
    "outcome": "Rare Beauty a reçu un tutoriel enjoué, fidèle à la marque, qui vend deux produits comme un seul look. Son stylisme lumineux et ses étapes claires conviennent aussi bien à une publication organique qu'au social payant."
  },
  "saie-campaign": {
    "title": "Campagne créateur Saie",
    "summary": "Un look éclat ensoleillé, à réaliser en déplacement, créé uniquement avec Saie et appliqué directement depuis la trousse de maquillage.",
    "brief": "Les produits clean de Saie, qui font passer la peau en premier, sont conçus pour un fini lumineux et facile. L'objectif : les montrer dans un cadre détendu, tiré de la vraie vie, en accord avec le ton naturel et sans effort de la marque. L'audience de Saie attache de l'importance aux ingrédients clean et à un look naturel et facile. Le brief demandait un contenu détendu, ancré dans le réel, qui montre la rapidité d'application des produits, leur rendu en lumière naturelle et leur place dans un mode de vie nomade.",
    "approach": "Rebecca Ghaderi se maquille en extérieur, dans la lumière vive de l'été, en sortant les produits Saie directement de son sac. Elle dépose par touches puis estompe les produits joues et teint avec les pinceaux Saie, et tient chacun face caméra, de sorte que l'on voit les teintes, les outils et le fini effet soleil en lumière naturelle.",
    "outcome": "Saie a reçu un contenu maquillage authentique, lifestyle avant tout, qui montre ses produits en conditions réelles. Il fonctionne bien en organique et comme création payante accessible, qui inspire confiance."
  },
  "patrick-ta-campaign": {
    "title": "Campagne créateur Patrick Ta",
    "summary": "Un tutoriel soft glam construit autour du fard à paupières irisé et des duos de blush de Patrick Ta.",
    "brief": "Les produits Patrick Ta sont connus pour leur fini lumineux et sculpté. Le brief : montrer cet éclat signature sur les yeux et les joues, dans un look que le public puisse recréer. Les produits Patrick Ta sont positionnés comme étant de qualité professionnelle, et le brief demandait donc un contenu qui montre de près la texture, le pigment et le fini. Le look devait être glamour mais réalisable, et les boîtiers montrés assez clairement pour que le public puisse les reconnaître en magasin.",
    "approach": "Beatrix Ramosaj ouvre sur des gros plans du godet de fard à paupières irisé et du duo de blush, puis construit le look étape par étape : le fard irisé pressé sur la paupière, des cils et un trait de liner définis, puis le blush travaillé sur les joues. Le cadrage serré sur les boîtiers et les textures montre la qualité du produit, tandis que le look final en démontre l'effet lumineux.",
    "outcome": "Patrick Ta a reçu un tutoriel premium, centré sur le produit, qui montre plusieurs produits et un look final cohérent. Il fonctionne auprès de l'audience de la créatrice et comme contenu payant aspirationnel."
  },
  "medicube-campaign": {
    "title": "Campagne créateur Medicube",
    "summary": "Une routine de nuit glass skin construite autour du Collagen Night Wrapping Mask de Medicube, de l'application au retrait du masque.",
    "brief": "Le Collagen Night Wrapping Mask de Medicube se distingue par son format peel-off : le contenu devait donc montrer toute l'expérience, l'application, la nuit de pose et le résultat, tout en expliquant ce qu'il fait. Le masque au collagène de Medicube est un produit viral, et le contenu devait donc se démarquer dans un feed saturé. Le brief demandait une démonstration complète et satisfaisante, de l'application à la révélation, une explication claire du moment et des raisons de l'utiliser, et un résultat glass skin assez fort pour arrêter le scroll.",
    "approach": "Melani Seiffert ouvre sur sa « mirror-like glowy skin » (peau éclatante, effet miroir), puis montre le masque appliqué au pinceau en dernière étape de sa routine. Les textes à l'écran expliquent qu'il s'applique après les soins pour tout sceller pendant la nuit, et qu'il contient de l'extrait de collagène et de l'acide hyaluronique pour aider à améliorer l'élasticité et apporter une hydratation profonde. La vidéo se termine sur le retrait du masque, satisfaisant à regarder, et sur des gros plans d'une peau fraîche, à l'effet miroir.",
    "outcome": "Medicube a reçu une démonstration complète d'un produit phare, avec une pédagogie claire et une révélation très partageable. Elle fonctionne comme contenu organique de découverte et comme création à la performance destinée aux acheteurs de soins."
  },
  "celimax-campaign": {
    "title": "Campagne créateur Celimax",
    "summary": "Un tutoriel d'application précis pour le retinal shot de Celimax, zone par zone : cernes, ridules et teint irrégulier.",
    "brief": "Le rétinal peut intimider, et Celimax avait donc besoin d'un contenu qui montre exactement où et comment l'utiliser. L'objectif : une démonstration claire, axée sur les bénéfices, pour les personnes préoccupées par les taches sombres, les ridules et un teint irrégulier. Beaucoup sont curieux du rétinal sans savoir comment ni où l'utiliser. Le brief demandait une démonstration précise et rassurante, qui montre exactement où appliquer le produit, nomme le bénéfice pour chaque zone, et positionne Celimax comme une porte d'entrée facile vers les soins au rétinal.",
    "approach": "Loresa Konushevci dépose le retinal shot Celimax par points le long des zones qu'il cible, sous les yeux, le long des sillons du sourire et sur le front, tandis que des textes à l'écran nomment chaque bénéfice : éclaircit les cernes, réduit les ridules, pour une peau plus lisse et plus ferme. Elle le fait ensuite pénétrer en massant, montrant qu'une petite quantité couvre le visage. Les points jaune vif rendent la technique facile à reproduire.",
    "outcome": "Celimax a reçu une vidéo didactique qui lève les incertitudes liées à l'usage du rétinal et relie chaque point d'application à un bénéfice. Elle fonctionne comme contenu pédagogique pour les nouveaux utilisateurs et comme contenu payant clair, propice à la conversion."
  },
  "abib-campaign": {
    "title": "Campagne créateur Abib",
    "summary": "Une journée de réapplication de protection solaire avec l'Airy Sunstick d'Abib, du parc à la voiture.",
    "brief": "La plupart des gens appliquent leur protection solaire une fois et oublient d'en remettre. Abib voulait montrer que son Airy Sunstick rend la réapplication rapide et facile, où que l'on soit, et présenter le charm indicateur d'UV, qui change de couleur à mesure que le niveau d'UV augmente. Le contenu devait ressembler à une vraie journée dehors, montrer le stick glissant sur le visage sans traces blanches, et rendre le changement de couleur du charm compréhensible en un coup d'œil.",
    "approach": "Beatrix Ramosaj suit l'indice UV au fil de sa journée. En extérieur, au plus fort du soleil, le charm vire au rouge profond et elle réapplique en quelques secondes, utilisant le stick en forme de C pour couvrir rapidement les zones plus larges et les contours du visage. Plus tard, dans la voiture, elle réapplique de nouveau alors que le niveau d'UV baisse, des indications à l'écran suivant l'indice et le fini restant transparent et naturel.",
    "outcome": "Abib a reçu une vidéo de créatrice pratique, portée par un récit, qui fait de la réapplication une habitude simple et du charm indicateur d'UV son accroche. Elle fonctionne comme contenu de découverte pour les acheteurs de soins solaires et comme démonstration produit claire pour le social payant."
  },
  "axis-y-campaign": {
    "title": "Campagne créateur AXIS-Y",
    "summary": "Une routine de soin des lèvres qui présente les huiles à lèvres d'AXIS-Y, des swatches à un fini brillant et soigné.",
    "brief": "AXIS-Y est connue pour ses soins de la peau, et ses huiles à lèvres appliquent aux lèvres la même approche, qui place le soin en premier. Le brief : montrer les huiles à la fois comme un soin et comme un fini, c'est-à-dire le rendu des teintes, la glisse de la texture et l'aspect des lèvres une fois le produit appliqué. Le contenu devait s'intégrer naturellement à une routine beauté, garder les flacons bien visibles à l'image et convenir à une audience beauté attachée aux contenus soignés, sur Instagram et TikTok.",
    "approach": "Sadaf Torabi commence par présenter les huiles à lèvres côte à côte pour que chaque teinte soit bien visible, puis les applique une à une en gros plan. La caméra reste serrée sur l'applicateur mousse et sur les lèvres, pour que l'on puisse suivre la texture et le fini brillant et hydraté, avant de conclure sur le look final.",
    "outcome": "AXIS-Y a reçu une vidéo beauté soignée, centrée sur le produit, qui montre les teintes, la texture et le fini des huiles à lèvres en moins de vingt secondes. Elle fonctionne comme contenu organique de découverte et comme contenu net pour le social payant autour du soin des lèvres."
  },
  "arencia-campaign": {
    "title": "Campagne créateur Arencia",
    "summary": "Un guide, préoccupation par préoccupation, qui associe chaque Arencia Booster Shot au problème de peau qu'il cible.",
    "brief": "Arencia propose plusieurs booster shots aux actifs différents, et les acheteurs ont donc besoin d'aide pour choisir. Le brief : expliquer clairement la gamme et faire de chaque produit la réponse à une préoccupation précise. La gamme de boosters Arencia contient différents actifs pour différents besoins, ce qui peut dérouter les nouveaux clients. Le brief : rendre la gamme facile à parcourir, relier chaque produit à une préoccupation visible, et créer un contenu durable, que l'on enregistre, qui joue le rôle d'un outil d'aide au choix.",
    "approach": "Aurela Elshani construit la vidéo comme un tableau visuel. Pour chaque préoccupation, elle montre un gros plan de la zone, puis applique le booster correspondant, des textes à l'écran les associant : rides du cou et NAD+, comédons fermés et acide glycolique, relâchement sous les yeux et rétinal, sillons du sourire et PDRN. Les gros plans en incrustation sur la préoccupation, ajoutés à l'application point par point, rendent chaque étape immédiatement compréhensible.",
    "outcome": "Arencia a reçu une vidéo pédagogique, à fort potentiel d'enregistrement, qui vend toute la gamme en aidant le public à choisir lui-même le bon produit. Elle fonctionne à la fois comme contenu de découverte et comme contenu à la performance ciblant des préoccupations de peau précises."
  },
  "lilyeve-campaign": {
    "title": "Campagne créateur Lilyeve",
    "summary": "Un contenu soin du cuir chevelu, qui montre comment la GROW:TURN Pink Collagen Capsule Ampoule de Lilyeve s'intègre à une routine capillaire.",
    "brief": "Le collagène est un ingrédient familier en soin de la peau, mais une idée nouvelle pour les cheveux. Lilyeve avait besoin d'un contenu qui rende le soin du cuir chevelu simple et désirable, et qui en montre le bénéfice : des cheveux d'aspect plus sain et plus brillants. L'audience investit déjà dans le soin de la peau, mais relègue souvent le soin des cheveux au second plan. Lilyeve devait présenter la GROW:TURN Pink Collagen Capsule Ampoule comme un rituel simple et agréable, montrer comment fonctionnent sa texture à capsules et son applicateur pinceau, et relier la routine à un résultat visuel que le public voudrait pour lui-même.",
    "approach": "Albina Mavriqi commence par un gros plan sur le pinceau applicateur, qui dépose l'ampoule directement sur son cuir chevelu, montrant la simplicité du geste. La vidéo passe ensuite à la révélation, de longs cheveux soyeux, « glass-like » (effet miroir), avant de se clore sur la GROW:TURN Pink Collagen Capsule Ampoule, son nom à l'écran. La structure avant la routine, après la routine relie le produit au résultat en quelques secondes.",
    "outcome": "Lilyeve a reçu un contenu qui introduit une nouvelle catégorie, le collagène pour les cheveux, par une démonstration claire et un résultat aspirationnel. Il fonctionne comme contenu pédagogique pour de nouvelles audiences et comme contenu visuel fort pour le social payant."
  },
  "dr-althea-campaign": {
    "title": "Campagne créateur Dr. Althea",
    "summary": "Un moment glass skin axé sur l'hydratation, avec l'Aqua Marine Jelly Mist de Dr. Althea.",
    "brief": "Dr. Althea voulait présenter sa brume pour le visage comme un coup de pouce hydratation rapide, qui laisse un fini frais et lumineux. Les brumes pour le visage peuvent passer pour un extra facultatif : le brief consistait donc à faire de l'Aqua Marine Jelly Mist une étape d'hydratation essentielle. Le contenu avait besoin d'une accroche visuelle forte, d'un résultat éclat clair et d'un ton en phase avec les tendances, qui trouve naturellement sa place sur les plateformes de formats courts.",
    "approach": "Khutjo Matsoma utilise la brume dans une série de plans lents, en gros plan, qui saisissent la finesse de la vaporisation et la peau lumineuse qu'elle laisse. Le texte à l'écran, « facemistmaxxing », apporte un ton ludique, en phase avec les tendances, tandis que la lumière souligne l'éclat frais, effet glass skin, de sa peau.",
    "outcome": "Dr. Althea a reçu une vidéo visuellement marquante, portée par une tendance, qui exprime hydratation et éclat en quelques secondes. Elle fonctionne pour la portée organique et comme création payante qui accroche le regard."
  },
  "torriden-campaign": {
    "title": "Campagne créateur Torriden",
    "summary": "Un récit soin fermeté autour de la Cellmazing Low Molecular Collagen Firming Cream de Torriden, de la texture au résultat rebondi.",
    "brief": "Les crèmes au collagène sont souvent perçues comme lourdes. Torriden voulait montrer que sa Cellmazing Firming Cream est légère au toucher tout en donnant à la peau un aspect plus ferme et plus rebondi. Torriden souhaitait développer la notoriété de sa gamme fermeté auprès d'acheteurs qui connaissent déjà ses best-sellers hydratants. Le brief demandait un contenu qui réponde à une objection courante envers les crèmes au collagène, explique la formule en termes simples et renvoie vers une offre claire et traçable.",
    "approach": "Albina Mavriqi ouvre sur « when your skin loses its bounce… » (quand votre peau perd son rebond…), en appuyant sur sa joue pour rendre la préoccupation tangible. Elle prélève la crème, avec le texte « collagen creams are usually heavy, but this melts in like a moisturiser » (les crèmes au collagène sont généralement lourdes, mais celle-ci fond comme une crème hydratante), et énumère ses ingrédients clés à l'écran : collagène 5D de bas poids moléculaire, peptides pour l'élasticité et acide hyaluronique pour l'hydratation. Elle la fait pénétrer en massant et termine sur un résultat éclatant et repulpé, décrit comme des rides d'aspect plus lisse, avec l'hydratation et la fermeté en un seul geste.",
    "outcome": "Torriden a reçu un contenu de créatrice centré sur les ingrédients, qui renverse une objection courante et montre un résultat clair. Associé à son code de réduction, il fonctionne à la fois comme contenu pédagogique et comme contenu orienté conversion."
  },
  "beauty-of-joseon-campaign": {
    "title": "Campagne créateur Beauty of Joseon",
    "summary": "Un journal de sept jours du contour de l'œil avec le Revive Eye Serum et le Revive Under Eye Patch de Beauty of Joseon, au ginseng et au rétinal.",
    "brief": "Beauty of Joseon voulait montrer son duo yeux au rétinal à l'œuvre dans la durée, et non après une seule utilisation. Le contenu devait créer la confiance par la régularité et un avant/après visible. Les acheteurs de soins pour les yeux se méfient des solutions miracles : le brief consistait donc à bâtir la crédibilité par la régularité plutôt que par des allégations. Le contenu devait montrer les deux produits utilisés ensemble, documenter l'évolution sur plusieurs jours, et permettre au public de juger facilement la comparaison par lui-même.",
    "approach": "Saranda Mavriqi ouvre sur un avant/après en écran partagé, puis documente sa routine jour après jour. Elle présente le Revive Under Eye Patch (Ginseng + Retinal) et le Revive Eye Serum, et applique les patchs et le sérum sous l'œil, avec les mentions Day 1, Day 3, Day 5 et Day 7 à l'écran. Des gros plans serrés et bien éclairés rendent la zone facile à comparer, et la vidéo se clôt sur l'image « avant », pour que chacun puisse juger du changement par lui-même.",
    "outcome": "Beauty of Joseon a reçu un contenu en forme de journal, qui associe deux produits dans une routine crédible et les montre utilisés dans la durée. Il fonctionne comme contenu organique qui construit la confiance et comme contenu payant convaincant pour les acheteurs de soins pour les yeux."
  },
  "frankly-campaign": {
    "title": "Campagne créateur Frankly",
    "summary": "Une routine glass skin sans pores apparents, centrée sur quelques gouttes du Closer Serum de Frankly.",
    "brief": "Frankly voulait montrer comment son Closer Serum cible les pores visibles et le grain de peau, avec un résultat que le public puisse voir clairement à l'image. Frankly est un nom encore récent pour beaucoup, et le contenu devait donc faire une forte première impression. Le brief : rattacher le Closer Serum à une préoccupation précise, dans laquelle on se reconnaît, les pores et le grain de peau irrégulier, et montrer une amélioration visible du fini dans une vidéo courte.",
    "approach": "Khutjo Matsoma ouvre sur l'objectif, « poreless glass skin », puis montre de très gros plans du grain de peau et des pores pour poser le décor. Elle applique quelques gouttes de Frankly Closer Serum à la pipette, les presse sur sa peau et termine par des gros plans d'une peau éclatante, d'aspect uniforme. Une lumière chaude et des gestes lents et précis soulignent le fini lisse, effet miroir.",
    "outcome": "Frankly a reçu une démonstration de sérum claire, axée sur le résultat, avec un fort impact visuel. Elle fonctionne comme contenu organique auprès de l'audience soin de la peau de Khutjo et comme création payante pour les personnes préoccupées par les pores et le grain de peau."
  },
  "biodance-campaign": {
    "title": "Campagne créateur Biodance",
    "summary": "Un récit sur une journée entière, qui montre comment l'éclat du masque de nuit Biodance dure, entretenu par le Caviar PDRN Jelly Serum Mist.",
    "brief": "Biodance voulait vendre l'idée d'un « 24-hour mask glow » durable, un éclat de masque qui tient 24 heures. Le contenu devait montrer les deux produits en contexte : le masque de nuit à la maison, et la brume sérum comme geste fraîcheur rapide tout au long du lendemain. Biodance est surtout connue pour ses masques en tissu de nuit, et le brief consistait à étendre cette reconnaissance à son Caviar PDRN Jelly Serum Mist. Le contenu devait présenter les deux produits comme un système, exprimer la durée de l'éclat, et le faire dans un format lifestyle aspirationnel plutôt que dans une démonstration produit statique.",
    "approach": "Beatrix Ramosaj construit le récit autour d'une horloge. Les horaires à l'écran vont de 8PM, quand elle applique le masque au lit, à sa soirée à la maison, jusqu'au lendemain après-midi, devant son ordinateur portable, en extérieur et en sortie pour la journée. À chaque moment, elle prend le Caviar PDRN Jelly Serum Mist, de sorte que l'on voit comment l'éclat est entretenu dans la vraie vie. Des intérieurs chaleureux et des extérieurs ensoleillés gardent la vidéo aspirationnelle tout en restant proche du quotidien.",
    "outcome": "Biodance a reçu un contenu d'esprit lifestyle, qui présente deux produits et un mode d'utilisation clair : trois heures la nuit et trois secondes pour entretenir l'éclat. Le format narratif retient l'attention et offre à la marque un contenu polyvalent, pour l'organique comme pour le payant."
  },
  "skin1004-campaign": {
    "title": "Campagne créateur SKIN1004",
    "summary": "Une vidéo de routine quotidienne pour l'Azelaic Acid 10% de SKIN1004, racontée à partir de l'expérience d'Anton avec une peau à tendance acnéique.",
    "brief": "SKIN1004 voulait présenter son Azelaic Acid 10% aux personnes confrontées aux poussées de boutons, aux rougeurs et aux marques post-acné. L'acide azélaïque est efficace mais encore peu connu de beaucoup : le brief appelait donc un créateur capable de parler de son expérience personnelle et d'expliquer, en termes simples, ce que fait l'ingrédient et comment il s'intègre à une routine quotidienne. Le contenu devait être honnête et rassurant plutôt que clinique, nommer chaque bénéfice à l'écran, et montrer le flacon assez clairement pour que le public puisse le retrouver.",
    "approach": "Anton Drozhzhin, qui a parlé ouvertement de sa propre acné, présente le sérum comme l'ingrédient qu'il aurait aimé connaître plus tôt. La vidéo parcourt sa routine en plans courts et nets : des gouttes appliquées sur le front et les joues, la texture montrée sur le dos de la main, puis le sérum pressé sur la peau. Les textes à l'écran relient chaque étape à un bénéfice (acide azélaïque à 10 % au quotidien, contrôler l'excès de sébum, apaiser les rougeurs), avant un gros plan sur le flacon et un dernier regard sur sa peau apaisée et uniforme.",
    "outcome": "SKIN1004 a reçu une vidéo de créateur personnelle et pédagogique, qui explique en quelques secondes un actif moins connu et garde le produit visible tout du long. Elle convient à la découverte organique auprès des audiences à peau à tendance acnéique et peut être réutilisée comme création à la performance axée sur les rougeurs et les marques post-acné."
  },
  "rejuran-jay": {
    "title": "Rejuran × Jay Sadiq",
    "summary": "Jay Sadiq met à l'épreuve le Pore Tightening Pad & Ampoule de Rejuran dans une routine d'été pour le soin des pores.",
    "brief": "Le soin des pores est une préoccupation courante, tout particulièrement en été. Jay montre comment fonctionnent le Pore Tightening Pad & Ampoule de Rejuran et met en avant leurs bénéfices affinants pour les pores, par l'application et des comparaisons avant/après.",
    "approach": "Le film s'ouvre sur la présentation du produit : Jay tient les pads, avec à l'écran « This is the Rejuran Pore Tightening Pad & Ampoule, designed for summer pore care » (voici le Rejuran Pore Tightening Pad & Ampoule, conçu pour le soin des pores en été). Il passe un pad sur sa peau, pose les pads sur son nez et ses joues à la manière d'un masque rafraîchissant, puis poursuit avec l'ampoule. Les textes à l'écran expliquent chaque étape, avant que le reel ne passe à une comparaison « Before » et « After ».",
    "outcome": "Une routine étape par étape, avec des plans produit clairs et un avant/après dont chacun peut juger par lui-même."
  },
  "eclado-loresa": {
    "title": "ECLADO × Loresa Konushevci",
    "summary": "Loresa Konushevci présente le CELVIX PRO d'ECLADO, appareil RF à domicile, associé à l'EXO FILAGEN CREAM, de la première application à l'éclat final.",
    "brief": "Un appareil de beauté à domicile doit être vu en cours d'utilisation : comment on le tient, comment il glisse et quel aspect a la peau ensuite. Ce reel présente le CELVIX PRO d'ECLADO, décrit dans la légende comme un appareil RF à domicile pour une peau d'apparence plus ferme et aux contours mieux dessinés, accompagné de l'EXO FILAGEN CREAM, qui lui assure une glisse fluide.",
    "approach": "Loresa ouvre sur un gros plan de sa peau nue, légendé « Before », applique l'EXO FILAGEN CREAM, puis passe l'appareil sur sa joue et sa mâchoire. Les textes à l'écran accompagnent chaque phase, favoriser l'absorption, lifter et sculpter, soin révélateur d'éclat, avant que le reel ne se termine sur un plan « After » d'une peau hydratée, d'aspect éclatant.",
    "outcome": "Une démonstration d'appareil claire, étape par étape, dans le style posé et en gros plan propre à Loresa, où l'appareil et la crème restent tous deux visibles."
  },
  "too-faced-melly": {
    "title": "Too Faced × Melly Sanchez",
    "summary": "Melly Sanchez s'habille pour un événement Too Faced dans un Reel « get ready with me » tout en rose.",
    "brief": "Un contenu événementiel fonctionne mieux lorsque le public a le sentiment de participer aux préparatifs. La légende de Melly plante le décor : « habillez-vous avec moi pour un événement Too Faced ».",
    "approach": "Melly commence par présenter la robe rose pâle qu'elle a choisie, puis compose sa tenue pièce par pièce, en montrant à la caméra les chaussures, les bijoux et les détails, avant de traverser le couloir dans sa tenue terminée.",
    "outcome": "Un « get ready with me » orienté mode qui fait partager à la communauté de Melly l'ambiance de l'événement Too Faced."
  },
  "vt-cosmetics-anton": {
    "title": "VT Cosmetics × Anton Drozhzhin",
    "summary": "Anton Drozhzhin présente la crème contour des yeux vibrante de VT Cosmetics comme un produit de la tech coréenne du soin.",
    "brief": "Une crème contour des yeux dotée d'un applicateur vibrant intégré se montre plus facilement qu'elle ne se décrit. Ce Reel présente la crème contour des yeux vibrante de VT Cosmetics à travers la routine d'Anton.",
    "approach": "Anton ouvre la vidéo applicateur en main, puis montre l'embout vibrant en gros plan avec la mention « Crème contour des yeux vibrante » à l'écran. Il fait pénétrer la crème sous chaque œil et sur le contour de l'œil, tandis que de courts textes nomment les bénéfices montrés dans la vidéo, et termine sur un dernier plan de l'applicateur en action.",
    "outcome": "Une démonstration de technologie produit où l'appareil, la texture et l'application sont tous montrés de près."
  },
  "vichy-dariia": {
    "title": "Vichy × Dariia Bordun",
    "summary": "Dariia Bordun réalise pas à pas un maquillage « no makeup » du quotidien, en commençant par les soins Vichy.",
    "brief": "Un look « no makeup » commence par la peau. Ce Reel, intitulé à l'écran « tutoriel pas à pas du maquillage no makeup du quotidien », débute avec Vichy avant toute application de maquillage.",
    "approach": "Dariia commence par les sourcils, puis applique son soin Vichy et le fait pénétrer en pressant avec les mains. Elle poursuit avec un teint léger estompé à l'éponge, un liner et un gloss, en gardant chaque étape courte et facile à reproduire, et termine sur un look frais et naturel.",
    "outcome": "Un tutoriel pratique pour tous les jours, où le soin est présenté comme la première étape de la routine."
  },
  "iunik-khutjo": {
    "title": "IUNIK × Khutjo Matsoma",
    "summary": "Khutjo Matsoma présente le Beta-Glucan Power Moisture Serum d'IUNIK comme une « boisson pour la peau », pour un fini frais, effet glass skin.",
    "brief": "L'hydratation se comprend mieux lorsqu'elle se voit. Ce Reel présente le Beta-Glucan Power Moisture Serum d'IUNIK comme un verre d'eau pour la peau, une idée simple qui traverse toute la vidéo.",
    "approach": "Khutjo ouvre la vidéo un verre d'eau à la main, puis passe au sérum avec « LE SÉRUM BOISSON POUR LA PEAU ! » à l'écran. Elle l'applique à la pipette, le fait pénétrer du bout des doigts et se tourne vers la lumière pour montrer la fraîcheur du fini. De courts textes nomment les points qu'elle met en avant sur la formule, et le Reel se termine sur le flacon à côté de sa peau éclatante.",
    "outcome": "Un concept simple et mémorable, porté par une application en gros plan et un fini brillant, effet glass skin."
  },
  "patrick-ta-beatrix": {
    "title": "Patrick Ta × Beatrix Ramosaj",
    "summary": "Beatrix Ramosaj réalise un look doux de « blush en transition » avec la nouvelle collection de blushs Patrick Ta, partagée avant son lancement.",
    "brief": "Le lancement de Patrick Ta, présenté dans la légende comme « L'évolution du blush », s'articule autour d'un blush qui se fond du dessous de l'œil vers les joues. Beatrix partage la collection la veille de son lancement et montre comment le placement et les textures fonctionnent ensemble.",
    "approach": "Beatrix pose la couleur juste sous l'œil tant qu'elle est encore humide, tapote au lieu d'étirer, puis estompe. Elle enchaîne avec le duo de blushs floutant et termine sur le bombé des joues. Des textes à l'écran expliquent chaque étape, et le Reel se termine sur le résultat, un rosé doux d'inspiration éditoriale, et sur les produits en main.",
    "outcome": "Un look en forme de tutoriel que le public peut suivre pas à pas, accompagné de la description que Beatrix donne elle-même de la collection : douce, romantique et facile à porter au quotidien."
  },
  "k-secret-aiym": {
    "title": "K-SECRET × Aiym Kablan",
    "summary": "Aiym Kablan intègre la SEOUL 1988 Eye Cream de K-SECRET à sa routine éclat du matin.",
    "brief": "La crème contour des yeux s'oublie facilement dans une routine du matin. Ce Reel suit Aiym dans la sienne et montre où la SEOUL 1988 Eye Cream de K-SECRET trouve sa place.",
    "approach": "Aiym déroule sa matinée, fil dentaire, brossage et nettoyage, avec des textes qui nomment chaque étape. Un texte à l'écran explique pourquoi elle choisit une crème dédiée à la zone délicate du contour des yeux, puis elle applique de petites touches de SEOUL 1988 Eye Cream autour des yeux avant que le Reel ne se termine sur « Profitez du résultat ».",
    "outcome": "Un format routine du matin dans lequel on se reconnaît, qui donne à la crème contour des yeux une place et un rôle clairs."
  },
  "lashify-dariia": {
    "title": "Lashify × Dariia Bordun",
    "summary": "Dariia Bordun teste le fondu et la tenue sans bavure des crayons à lèvres nude crémeux de Lashify, avec un test à l'eau face caméra.",
    "brief": "Un crayon à lèvres se juge sur deux critères : la façon dont il s'estompe et le temps pendant lequel il reste en place. Le Reel de Dariia, légendé « des crayons à lèvres nude crémeux qui s'estompent parfaitement et ne bavent pas », met les deux à l'épreuve.",
    "approach": "Dariia ouvre sur « Crayon à lèvres waterproof ??? » et un verre d'eau, essaie les teintes sur sa main, puis dessine le contour et remplit ses lèvres avec chacune d'elles. Les teintes Nude Taupe, Nude Plum et Nude Rouge sont nommées à l'écran. Elle termine en versant de l'eau sur ses lèvres pour montrer que le crayon reste en place.",
    "outcome": "Un test en forme de démonstration qui présente la gamme de teintes et soumet la promesse du produit à une épreuve visible."
  },
  "first-aid-beauty-albulena": {
    "title": "First Aid Beauty × Albulena Mavriqi",
    "summary": "Albulena Mavriqi montre comment la préparation de peau First Aid Beauty se comporte sous le fond de teint, avec la légende « Belle peau = maquillage impeccable ».",
    "brief": "Le maquillage se pose mieux sur une peau bien préparée. Ce Reel fait le lien entre les deux, en montrant un fond de teint appliqué sur une peau soignée avec First Aid Beauty.",
    "approach": "En gros plans serrés autour de la bouche et du menton, Albulena applique le fond de teint à la spatule, l'estompe à l'éponge et montre le fini dans une comparaison côte à côte. Le Reel se termine sur le pot First Aid Beauty en main.",
    "outcome": "Une vidéo macro, centrée sur la texture, qui relie un produit de soin à un fini maquillage lisse."
  },
  "meditherapy-aurela": {
    "title": "Meditherapy × Aurela Elshani",
    "summary": "Aurela Elshani suit en gros plan le Hyaluronic Skin Booster First Serum de Meditherapy pendant quatorze jours.",
    "brief": "Un sérum hydratant se montre mieux dans la durée. Dans ce Reel, Aurela donne vie au Hyaluronic Skin Booster First Serum à travers des plans d'application rapprochés et des comparaisons de peau, en mettant en avant ses bénéfices hydratants et l'apparence d'une peau plus lisse et plus rebondie.",
    "approach": "La vidéo s'ouvre sur un gros plan de ridules sur le front, puis suit Aurela qui applique le sérum, avec des repères de jours à l'écran : Jour 1, Jour 3, Jour 7, Jour 10 et Jour 14. Le cadrage reste serré sur la même zone du début à la fin, pour que le public puisse comparer lui-même la texture, et le Reel se termine sur Aurela tenant le flacon.",
    "outcome": "Un format journal en gros plan qui garde le produit et la peau au centre de chaque plan."
  },
  "arencia-albina": {
    "title": "Arencia × Albina Mavriqi",
    "summary": "Albina Mavriqi présente le NAD+ Booster Shot d'Arencia dans une routine en gros plan pour le dessous des yeux et les joues.",
    "brief": "Le soin du dessous des yeux demande de la précision. Ce Reel s'ouvre sur « POV : votre peau a besoin de NAD+ » et présente le NAD+ Booster Shot d'Arencia, avec des textes à l'écran qui désignent les ridules et les rides comme zone ciblée.",
    "approach": "Albina dépose la formule lilas par petites touches sous l'œil et sur la joue, puis la lisse avec un outil pour le visage. Des plans macro montrent la texture sur sa peau, et le tube est montré clairement avant que le Reel ne se termine sur un plan plus large de son teint éclatant, à l'aspect hydraté.",
    "outcome": "Une vidéo d'application soignée et attentive aux détails, où le nom et la texture du produit sont tous deux faciles à reconnaître."
  },
  "revcell-loresa": {
    "title": "REVCELL × Loresa Konushevci",
    "summary": "Loresa Konushevci transforme sa routine REVCELL en journée spa à la maison, du Vita Collagen Activfilm à un éclat immédiat.",
    "brief": "Une routine en plusieurs étapes a besoin d'une histoire pour tenir ensemble. Loresa présente sa routine REVCELL comme une journée spa à la maison, avec la légende « Une peau saine et éclatante commence par ma routine REVCELL ».",
    "approach": "Le Reel s'ouvre sur les produits disposés sur un plateau, puis suit chaque étape : la feuille Vita Collagen Activfilm appliquée sur son visage, une couche crémeuse lissée sur la peau, puis un sérum appliqué à l'aide d'un applicateur de type seringue. Il se termine sur un gros plan légendé « Éclat immédiat ».",
    "outcome": "Une vidéo de routine orientée lifestyle qui montre plusieurs produits dans l'ordre et en contexte."
  },
  "nyx-albulena": {
    "title": "NYX Professional Makeup × Albulena Mavriqi",
    "summary": "Albulena Mavriqi répond à un problème bien connu, des sourcils qui retombent sans cesse, avec un gel sourcils NYX Professional Makeup.",
    "brief": "Le Reel s'ouvre sur un « POV : vos sourcils retombent sans cesse ? » dans lequel on se reconnaît, et présente un gel sourcils NYX Professional Makeup comme la solution.",
    "approach": "Albulena montre de près le tube rose vif, brosse le gel vers le haut dans ses sourcils et termine sur ses sourcils fixés et relevés, en lumière naturelle. La vidéo est courte et directe, et garde le produit et les sourcils dans chaque plan.",
    "outcome": "Un format problème-solution rapide, adapté aux vidéos courtes."
  },
  "prada-beauty-rebecca": {
    "title": "Prada Beauty × Rebecca Ghaderi",
    "summary": "Rebecca Ghaderi au pop-up Prada Beauty Touch Blush, photographiée dans un look à pois devant le décor rose et rouge de la marque.",
    "brief": "Rebecca visite le pop-up Prada Beauty Touch Blush, un espace rose et rouge mis en scène autour du lancement. Sa publication photo est présentée ici sous forme de diaporama des onze images, en commençant par la couverture.",
    "approach": "Le carrousel alterne entre des portraits de Rebecca en chemise blanche et robe à pois devant la signalétique Prada et Touch Blush, et des détails des boîtiers de blush et du décor. L'image de couverture la montre dans le pop-up, avec le présentoir Touch Blush derrière elle.",
    "outcome": "Une publication photo éditoriale, liée à l'événement, où le décor et le stylisme portent l'esthétique de la marque."
  },
  "mixsoon-dora": {
    "title": "Mixsoon × Dora Nguyen",
    "summary": "Dora Nguyen applique le Bean Copper Peptide Firming Serum de Mixsoon sur ses rides du sourire et son front, avec de courts textes qui expliquent chaque étape.",
    "brief": "Il est plus simple de parler des ridules quand on peut les montrer du doigt. Cette vidéo présente le Bean Copper Peptide Firming Serum de Mixsoon, décrit dans la légende comme la façon dont Dora s'emploie à « estomper les rides du sourire et les rides du front » avec un sérum au copper peptide.",
    "approach": "Dora commence par montrer du doigt ses rides du sourire et son front sous le texte « Traitez ces signes de l'âge avant l'apparition des rides », puis montre la texture élastique du sérum entre ses doigts. Elle l'applique à la pompe sur ses joues, son front et le dessous de ses yeux, le lisse avec un fin outil pour le visage, tandis que des textes à l'écran mentionnent le copper peptide, une peau d'aspect plus lisse et plus ferme, et la bean essence pour l'hydratation.",
    "outcome": "Une routine en gros plan, facile à suivre, qui garde le sérum et sa texture à l'image du début à la fin et se termine sur le flacon lui-même."
  },
  "arencia-dora": {
    "title": "Arencia × Dora Nguyen",
    "summary": "Dora Nguyen offre à son cou une routine à part entière avec le NAD+ Booster Shot d'Arencia, appliqué jour après jour dans une suite de gros plans.",
    "brief": "Le soin du cou passe souvent au second plan dans une routine de soin. La légende de Dora, « Routine soin du cou 💜 NAD+ Booster Shot », place le tube booster lavande d'Arencia au centre d'une routine pensée uniquement pour le cou.",
    "approach": "La vidéo s'ouvre sur les lignes du cou de Dora et sur la question « Une crème filler, ça existe ? », avant que la crème lavande ne soit pressée hors du tube. Elle enveloppe son cou de film alimentaire par-dessus la crème, puis déroule une séquence jour après jour : elle trace des lignes ondulées de booster sur son cou et les fait pénétrer du bout des doigts. La vidéo se termine sur ses mains qui encadrent un cou lisse, à l'éclat doux.",
    "outcome": "Une routine ciblée et visuelle, où la couleur et la texture du produit portent le récit, filmée entièrement en gros plan."
  },
  "axis-y-dora": {
    "title": "AXIS-Y × Dora Nguyen",
    "summary": "Dora Nguyen suit le Dark Spot Correcting Glow Serum d'AXIS-Y dans un court journal de peau, jour après jour, centré sur les marques post-acné.",
    "brief": "Les marques post-acné et le teint irrégulier sont une préoccupation quotidienne, qui évolue lentement. Cette vidéo présente le Dark Spot Correcting Glow Serum d'AXIS-Y, que la légende de Dora décrit comme aidant à estomper les marques post-acné, à atténuer les irrégularités du teint et à redonner un éclat sain.",
    "approach": "Dora ouvre sur un gros plan de sa joue avec « Estompez acné et rougeurs avec UN SEUL produit.. », présente le tube à la caméra, puis presse le sérum sur sa peau. Des textes marquent chaque étape de son journal avec ce qu'elle met en avant : les antioxydants, l'apaisement et l'uniformisation de l'aspect du teint, un éclat naturel et apaisé, et une sensation légère, vite absorbée. La vidéo se termine sur les deux tubes tenus à côté de son visage.",
    "outcome": "Un format journal simple qui permet au public de suivre le sérum sur plusieurs jours, avec le produit nommé à l'écran en clôture."
  },
  "medicube-dora": {
    "title": "Medicube × Dora Nguyen",
    "summary": "Dora Nguyen montre que les Zero Pore Pads de Medicube ne sont pas réservés au visage, en les utilisant du nez jusqu'aux talons.",
    "brief": "Les pads toniques sont d'ordinaire réservés au visage. La légende de Dora, « Le signe qu'il vous fallait pour ajouter les pads toniques “zero pore” à votre routine de soin pour une peau nette », installe une vidéo construite autour d'une seule idée : les pads peuvent s'utiliser presque partout.",
    "approach": "Dora ouvre avec « Rappel : les Zero Pore Pads s'utilisent partout » et présente le pot de Medicube Zero Pore Pad à la caméra. Elle passe un pad sur son nez et son visage pendant que le texte indique « Nettoie les pores et lisse le grain de peau », puis passe à ses jambes et ses aisselles (« Débarrassez-vous de la peau de fraise »), ses talons (« Lisse les talons secs ») et sa poitrine (« Réduit l'acné sur la poitrine »).",
    "outcome": "Une vidéo rapide et pratique qui montre un seul produit dans plusieurs usages du quotidien, avec le pot clairement montré au début."
  },
  "axis-y-qendresa": {
    "title": "AXIS-Y × Qendresa Konushevci",
    "summary": "Qendresa Konushevci construit une routine paisible dédiée aux taches autour du Dark Spot Correcting Glow Toner et du sérum d'AXIS-Y, appliqués sur plusieurs jours.",
    "brief": "Les taches s'estompent avec de la régularité plutôt qu'en un seul geste. La légende de Qendresa, « Estompez l'apparence des taches et révélez votre éclat naturel », présente la gamme AXIS-Y dédiée aux taches comme une partie de sa routine quotidienne.",
    "approach": "La vidéo s'ouvre sur un gros plan d'une peau marquée d'imperfections avec le texte « Mon sauveur », puis passe à Qendresa tenant le Dark Spot Correcting Glow Toner. Elle fait pénétrer le toner en pressant, dépose le sérum à la pompe sur ses joues et sous ses yeux et le tapote, chaque séance étant signalée par un bandeau différent. Elle termine en tenant côte à côte le toner et le tube de Dark Spot Correcting Glow Serum.",
    "outcome": "Une routine détendue et facile à répéter, avec des gros plans doux et lumineux et les deux produits AXIS-Y nommés sur leur emballage."
  },
  "arencia-qendresa": {
    "title": "Arencia × Qendresa Konushevci",
    "summary": "Qendresa Konushevci associe quatre booster shots Arencia à quatre préoccupations de peau, des lèvres foncées aux rides du sourire, dans un guide rapide.",
    "brief": "Une gamme de boosters ciblés se comprend mieux quand chacun est associé à une préoccupation. La légende de Qendresa, « Booster shots💜🤍🩷💛 », présente quatre tubes Arencia, chacun dans sa couleur.",
    "approach": "Qendresa ouvre en tenant les tubes booster NAD+, Eraser Shot Glycolic Acid, PDRN et Vitamin C avec « N'oubliez jamais... ». Des textes à l'écran associent ensuite chaque préoccupation à un booster : les lèvres foncées avec le Vitamin C déposé par touches autour des lèvres, les rides du cou avec le NAD+, les comédons fermés avec le Glycolic Acid sur le front et les rides du sourire avec le PDRN.",
    "outcome": "Un guide clair du type « lequel pour quoi », qui garde chaque étiquette de produit à l'image et offre au public un repère facile à enregistrer."
  },
  "purito-qendresa": {
    "title": "Purito × Qendresa Konushevci",
    "summary": "Qendresa Konushevci présente le Retinol Retinal 2000 NAD+ Serum de Purito, en montrant comment l'agiter et comment il s'applique.",
    "brief": "Rétinol ou rétinal : la question revient souvent chez celles et ceux qui débutent. La légende de Qendresa nomme le Retinol Retinal 2000 NAD+ Serum de Purito, et la vidéo répond à la question avec un sérum qui réunit les deux.",
    "approach": "Qendresa ouvre avec « Votre peau a besoin de rétinol ou de rétinal... » sur des gros plans de son front et du dessous de ses yeux, et répond « La mienne, des deux ». Elle présente le flacon avec « Agitez pour activer le rétinol ET le rétinal », puis applique le sérum doré à la pipette sur son visage. Des textes indiquent « Rétinal + Rétinol = soin rapide + en profondeur » et une texture qui paraît plus ferme au toucher, avant qu'elle ne termine en souriant à la caméra, le flacon en main.",
    "outcome": "Une vidéo courte et informative qui explique en mots simples l'idée deux-en-un du sérum et garde l'application à la pipette en gros plan."
  },
  "dr-althea-qendresa": {
    "title": "Dr. Althea × Qendresa Konushevci",
    "summary": "Qendresa Konushevci raconte l'histoire de sa peau, de l'acné de l'adolescence à sa routine actuelle, avec la 345 Relief Cream de Dr. Althea.",
    "brief": "Les histoires de peau paraissent les plus sincères lorsqu'elles sont racontées étape par étape. La légende de Qendresa, « Ma peau n'a pas changé du jour au lendemain, mais chaque étape en valait la peine. », présente la 345 Relief Cream de Dr. Althea comme une partie de la routine qu'elle suit aujourd'hui.",
    "approach": "La vidéo s'ouvre sur des gros plans d'anciennes poussées d'imperfections et un texte à l'écran sur l'acné qu'elle a connue tout au long de son adolescence, puis bascule sur « Ma peau aujourd'hui... ». Qendresa dépose la crème par touches sur son front et ses joues, la tapote du bout des doigts et la lisse sur son cou et son décolleté, avant de terminer sur « De l'acné à une peau nette » et le tube de 345 Relief Cream présenté à la caméra.",
    "outcome": "Une vidéo personnelle, au rythme doux, qui associe l'histoire de Qendresa à une application simple et se termine sur le produit bien visible."
  },
  "patrick-ta-anisa": {
    "title": "Patrick Ta × Anisa Hukmova",
    "summary": "Anisa Hukmova propose un tutoriel maquillage des yeux « débutante versus pro », avec un stick Patrick Ta pour lifter et définir le regard.",
    "brief": "De petits changements de technique font une grande différence dans le maquillage des yeux. La légende d'Anisa, « Tutoriel maquillage des yeux », identifie Patrick Ta Beauty, et la vidéo repose sur une comparaison côte à côte « débutante ✗ / pro ✓ ».",
    "approach": "Anisa part d'un smoky eye d'un côté et, de l'autre, d'un œil plus simple, façon débutante. Elle trace avec un stick Patrick Ta un trait léger et liftant depuis le coin externe, l'estompe au pinceau et travaille le fard dans le creux de la paupière et au ras des cils, pour finir sur un œil défini et lifté.",
    "outcome": "Un tutoriel rapide et facile à reproduire, dans le style en gros plan d'Anisa, avec le stick Patrick Ta bien en main."
  },
  "yesstyle-anisa": {
    "title": "YesStyle × Anisa Hukmova",
    "summary": "Anisa Hukmova partage une astuce rapide pour repulper les lèvres, réalisée avec des produits qui, selon sa légende, viennent tous de YesStyle.",
    "brief": "Les combos lèvres sont l'une des signatures d'Anisa. Sa légende présente une « astuce pour repulper les lèvres », identifie Holika Holika et Kaleidos Makeup et précise que tous les produits utilisés dans la vidéo viennent de YesStyle.",
    "approach": "Anisa commence par un rouge à lèvres, redessine ses lèvres au-delà de leur contour avec un crayon brun et remplit la forme, puis ajoute de l'anticernes sur le pourtour et estompe au pinceau à lèvres. Elle termine par une couche brillante sortie d'un tube rouge, sur des lèvres pleines à l'effet miroir et le gloss présenté à la caméra.",
    "outcome": "Un combo lèvres étape par étape que le public peut suivre en quelques secondes, avec le résultat final et le dernier produit montrés ensemble."
  },
  "tirtir-anisa": {
    "title": "TIRTIR × Anisa Hukmova",
    "summary": "Anisa Hukmova compare deux placements de blush, « +5Y » et « −5Y », avec des produits TIRTIR pour un rosé liftant et plus doux.",
    "brief": "Le placement du blush peut changer tout le visage. La légende d'Anisa, « +5y VS -5y avec @TIRTIR Inc. de chez @YesStyle », installe une comparaison rapide entre un placement bas et chargé et un placement liftant.",
    "approach": "Anisa barre le blush bas et chargé et recommence : un TIRTIR Mood Glider Lip & Blush est montré sur sa boîte, puis un anticernes clair et un blush stick rouge sont tracés selon une ligne plus haute, de la joue vers la tempe. Elle estompe au pinceau et termine en tenant un stick TIRTIR à côté du résultat, un rosé plus doux.",
    "outcome": "Un avant-après rapide qui rend le placement facile à retenir, avec les emballages TIRTIR visibles tout au long de la vidéo."
  },
  "dr-althea-anhelina": {
    "title": "Dr. Althea × Anhelina Andrusik",
    "summary": "Anhelina Andrusik filme une « routine de soin glass skin », en superposant des étapes de soin dont une mousse à pompe Dr. Althea et la 345 Relief Cream de la marque.",
    "brief": "Une routine glass skin se suit plus facilement quand chaque étape est montrée dans l'ordre. La légende invite le public à enregistrer la vidéo pour ne plus jamais avoir à deviner quelles étapes suivre, et les produits Dr. Althea occupent le centre de la routine, aux côtés de quelques autres soins favoris.",
    "approach": "Sur un fond rose pâle, Anhelina ouvre sur un gros plan de sa peau sous le texte « routine de soin glass skin ». Elle déroule chaque étape face caméra, d'un pad tonique et d'une formule laiteuse versée dans sa paume à une mousse à pompe Dr. Althea, qu'elle dépose directement sur son front et ses joues, puis présente la 345 Relief Cream avant de terminer par une strobe cream lissée sur ses pommettes.",
    "outcome": "Une routine rapide et facile à enregistrer, qui se termine sur des gros plans d'une peau à l'aspect frais et lumineux, chaque produit Dr. Althea étant présenté clairement à la caméra."
  },
  "skin1004-anhelina": {
    "title": "SKIN1004 × Anhelina Andrusik",
    "summary": "Anhelina Andrusik se prépare dans son nouvel appartement, avec la Madagascar Centella Ampoule de SKIN1004 comme étape clé de son soin du matin.",
    "brief": "Une vidéo « get ready with me » montre un produit au sein d'une vraie routine plutôt qu'isolément. Légendée « Grwm dans mon nouvel appartement », la vidéo suit la matinée d'automne d'Anhelina, et SKIN1004 fait partie des marques qu'elle identifie aux côtés de ses soins coréens.",
    "approach": "Sous le titre « préparez-vous avec moi dans mon nouvel appartement », Anhelina passe du réveil à la douche et à l'habillage, jusqu'à sa coiffeuse. Là, elle fait pénétrer une lotion tonique en pressant sur sa peau, puis présente la Madagascar Centella Ampoule de SKIN1004, la prélève à la pipette et la tapote, avant de superposer un sérum, des patchs pour les yeux et une teinte sur les lèvres.",
    "outcome": "Une routine du matin douce et esthétique, dans laquelle l'ampoule SKIN1004 a droit à son propre gros plan et est montrée en cours d'utilisation."
  },
  "patrick-ta-anhelina": {
    "title": "Patrick Ta × Anhelina Andrusik",
    "summary": "Anhelina Andrusik recrée un look lumineux inspiré des défilés, construit autour du duo de fards à paupières Patrick Ta dans la teinte « in your dreams ».",
    "brief": "La vidéo, intitulée à l'écran « Tutoriel maquillage Victoria's Secret », entend recréer un look de défilé doux et lumineux. La légende indique que le secret du fard à paupières lumineux est le nouveau duo de fards préféré d'Anhelina, signé Patrick Ta, dans la teinte « in your dreams ».",
    "approach": "Anhelina ouvre sur son look terminé à côté d'une image de défilé de référence, puis construit le visage étape par étape : teint, anticernes, contouring, poudre et enlumineur. Elle présente le duo Patrick Ta à la caméra, balaie le fard irisé sur ses paupières et termine par le mascara, le blush, les lèvres et les sourcils.",
    "outcome": "Un tutoriel visage complet que le public peut suivre de la peau nue au look terminé, avec le duo Patrick Ta clairement montré à mi-parcours."
  },
  "purito-anhelina": {
    "title": "Purito × Anhelina Andrusik",
    "summary": "Anhelina Andrusik essaie les soins Purito pour la première fois et commente chaque produit du point de vue d'une peau sensible, grasse à mixte et à tendance acnéique.",
    "brief": "Les personnes à la peau sensible veulent savoir quelle sensation laisse un produit avant de l'essayer. Dans la légende, Anhelina raconte qu'elle essaie Purito Seoul pour la première fois en tant que fille à la peau sensible, grasse à mixte et à tendance acnéique, et remercie YesStyle et Purito pour l'envoi des produits.",
    "approach": "Anhelina s'adresse directement à la caméra, déballe la gamme et présente la Mighty Bamboo Panthenol Cream et la Oat-in Calming Gel Cream. Elle essaie une crème sur le dos de sa main, applique les produits sur son visage tout en parlant et termine avec toute la gamme, dont le Daily Soft Touch Sunscreen, disposée devant elle.",
    "outcome": "Une première impression sincère et commentée, qui garde chaque produit Purito à l'image et donne au public une idée de la texture et de la sensation."
  },
  "abib-vania": {
    "title": "Abib × Vania Fernandes",
    "summary": "Vania Fernandes teste le Collagen eye patch (Jericho rose jelly) d'Abib sur un dessous des yeux fatigué, d'un gros plan à 8 h à un avant-après côte à côte.",
    "brief": "Un dessous des yeux à l'air fatigué est un problème matinal bien connu. Dans la légende, Vania en fait son pire ennemi du matin et entreprend de tester les patchs yeux jelly au collagène d'Abib, en se demandant s'ils méritent d'être ajoutés à la routine.",
    "approach": "Vania ouvre sur un gros plan du dessous de ses yeux portant la mention « 8 h 00 », puis présente le pot d'Abib Collagen eye patch à la caméra. Elle pose les patchs jelly, avec « attendre 20-30 min » à l'écran, en retire un, puis passe à un plan « résultat final » et à un écran partagé avant-après.",
    "outcome": "Un format test et révélation court et clair, qui garde en gros plan le pot comme la texture jelly des patchs."
  },
  "fenty-skin-vania": {
    "title": "Fenty Skin × Vania Fernandes",
    "summary": "Vania Fernandes déballe le Quench Kit des fêtes de Fenty Skin et met les miniatures à l'œuvre dans une routine rapide en trois étapes.",
    "brief": "Un coffret de fêtes se comprend mieux quand son contenu est utilisé, et pas seulement montré. Dans la légende, Vania écrit que la collection des fêtes Fenty « a compris la mission » et qu'elle est obsédée par les miniatures du Quench Kit.",
    "approach": "Vania sort le kit de son coffret cadeau illustré et nomme chaque article à l'écran : le Mini Backpack, le Few N Plump Intensive Hydration Mask, le Plush Puddin' Intensive Recovery Lip Mask et le Fat Water Hydrating Milky Toner. Elle enchaîne ensuite « étape 1 : lotion tonique », « étape 2 : masque sans rinçage » et « étape 3 : soin des lèvres », avant de ranger les miniatures dans le sac à dos.",
    "outcome": "Un unboxing festif qui fait aussi office de routine simple, où chaque produit du kit est nommé et montré en cours d'utilisation."
  },
  "skin1004-vania": {
    "title": "SKIN1004 × Vania Fernandes",
    "summary": "Vania Fernandes applique la Probio-Cica Bakuchiol Eye Cream de SKIN1004 sur ses cernes, avec un avant-après rapide.",
    "brief": "Les cernes figurent parmi les préoccupations de peau les plus recherchées. Dans la légende, Vania dit être obsédée par la Probio-Cica Bakuchiol Eye Cream de SKIN1004 et demande à sa communauté si elle doit faire un test plus long.",
    "approach": "La vidéo s'ouvre sur un gros plan serré du dessous de son œil avec « des cernes ??? » à l'écran. Vania dépose la crème par touches directement depuis le tube, qui porte la mention « CENTELLA Probio-Cica Eye Cream », la tapote du bout du doigt et termine sur une comparaison « avant » et « après », le tube tenu à côté de son visage.",
    "outcome": "Un gros plan rapide et ciblé qui montre la texture, l'application et le tube en quelques secondes."
  },
  "medicube-vania": {
    "title": "Medicube × Vania Fernandes",
    "summary": "Vania Fernandes essaie le Medicube Booster Pro pour la première fois, en l'associant à la Collagen Jelly Cream et en montrant le fini juste après.",
    "brief": "Un appareil de beauté doit être vu en action : comment on le tient, comment il se déplace et à quoi ressemble la peau ensuite. Dans la légende, Vania « essaie enfin le medicube booster pro viral ».",
    "approach": "Vania ouvre avec « j'essaie le medicube booster pro viral » à l'écran, présente la Collagen Jelly Cream et l'applique, puis montre l'appareil réglé sur « mode booster : niveau 1 ». Elle le fait glisser sur sa joue et sous son œil, en se tournant pour montrer chaque côté, et termine sur « le fini juste après ».",
    "outcome": "Une démonstration d'appareil nette, en gros plan, qui garde le Booster Pro et la crème à l'image du début à la fin."
  },
  "purito-ardita": {
    "title": "Purito × Ardita Gashi",
    "summary": "Ardita Gashi présente les soins Oat-in Calming de Purito pour peaux sensibles, d'une première étape laiteuse à un gel-crème apaisant.",
    "brief": "Une peau sensible à tendance acnéique demande des gestes doux. La légende décrit ce Reel comme un soin attentif pour ce type de peau, avec « un nettoyage doux, une hydratation apaisante et le soin de la barrière cutanée » de la gamme Oat-in Calming de Purito Seoul.",
    "approach": "Ardita verse une formule laiteuse d'un flacon Purito blanc sur sa joue, sa main et sa clavicule, puis présente la Oat-in Calming Gel Cream, en dépose sur le dos de sa main et la fait pénétrer en pressant sur sa peau. Le Reel se termine cheveux détachés, sur un fini frais et lumineux.",
    "outcome": "Une routine courte et sensorielle qui garde les deux produits à l'image et laisse parler les textures."
  },
  "abib-ardita": {
    "title": "Abib × Ardita Gashi",
    "summary": "Ardita Gashi accorde une attention particulière au dessous de ses yeux avec le Collagen eye patch d'Abib, avant un teint lisse.",
    "brief": "La légende présente ce geste comme une étape pour les plis sous les yeux, « accorder à cette étape l'attention qu'elle mérite », et identifie Abib avec les hashtags Iron Patch et Collagen.",
    "approach": "Ardita ouvre sur un gros plan du dessous de son œil avec « Mes plis sous les yeux se voient de plus en plus », puis prépare la zone tandis que « Cet Iron Patch aide à lisser l'apparence des ridules » s'affiche à l'écran. Elle passe à l'anticernes et au fond de teint, montre un gros plan « Après » et termine en présentant le pot d'Abib Collagen eye patch à la caméra.",
    "outcome": "Un récit rapide, de la préparation au maquillage, qui relie le soin à un teint d'aspect plus lisse, avec le pot clairement montré à la fin."
  },
  "anua-ardita": {
    "title": "Anua × Ardita Gashi",
    "summary": "Ardita Gashi vaporise le spray à capsules PDRN et hyaluronique d'Anua, puis le scelle avec une crème pour un fini frais, à l'aspect rebondi.",
    "brief": "La légende présente le Blue Dewy Spray d'Anua comme un moyen d'obtenir « une peau fraîche, rebondie et éclatante en une brume ». La vidéo se concentre sur la rapidité avec laquelle la brume s'intègre à une routine.",
    "approach": "Ardita présente le flacon avec « Il ne vous faut que ça… » à l'écran, puis vaporise la brume sur son visage et son cou tandis que des textes mentionnent le PDRN, le collagène et « Hydratation profonde et effet rebondi ». Elle dépose une crème Anua par touches sur son visage et son cou, « Une crème pour sceller l'hydratation », l'estompe et termine sur un gros plan « Après ».",
    "outcome": "Une routine rapide en gros plan qui montre le spray et la crème en action et se termine sur un éclat frais."
  },
  "axis-y-ardita": {
    "title": "AXIS-Y × Ardita Gashi",
    "summary": "Ardita Gashi consacre une semaine au dessous de ses yeux avec le Vegan Collagen Eye Serum d'AXIS-Y, appliqué avec son embout roller rafraîchissant.",
    "brief": "La légende présente le Vegan Collagen Eye Serum d'AXIS-Y comme son choix pour « un dessous des yeux frais, un éclat sain ». La vidéo repose sur une habitude quotidienne simple : un seul sérum pour les yeux, utilisé chaque jour pendant une semaine.",
    "approach": "Ardita ouvre tout près de la caméra avec « Mes yeux avaient besoin de ce sérum » à l'écran, puis présente le tube au bouchon vert et son embout roller. Elle l'applique sous l'œil au jour 1, au jour 4 et au jour 7, et termine dans une douce lumière du jour, le tube tenu à côté de son visage.",
    "outcome": "Une routine claire, façon journal, qui montre précisément comment s'utilise l'applicateur roller, dans le style en gros plan propre à Ardita."
  },
  "john-farmer-gvantsa": {
    "title": "John Farmer × Gvantsa Okinashvili",
    "summary": "Gvantsa Okinashvili fait du shampooing Ginseng Caffeine de JOHN FARMER une routine capillaire paisible, aux bougies, de la première mousse à des cheveux brillants, d'aspect sain.",
    "brief": "Les soins capillaires coréens s'expliquent souvent par leurs ingrédients. Le Reel de Gvantsa présente JOHN FARMER Ginseng Caffeine, décrit dans sa légende comme formulé avec du « vrai ginseng entier » et de la caféine pour aider à soutenir la santé du cuir chevelu et des cheveux d'aspect plus sain.",
    "approach": "Le Reel s'ouvre sur le flacon ambré mis en scène avec des bougies, puis passe sous la douche : le shampooing est prélevé à la pompe, travaillé en une mousse riche sur le cuir chevelu, puis rincé dans ses cheveux, le produit restant dans le champ. Il se termine sur Gvantsa en peignoir, passant les mains dans des cheveux doux et brillants.",
    "outcome": "Une vidéo de routine lente et pleine d'atmosphère, qui garde le produit au centre et se termine sur la chevelure finale."
  },
  "medicube-gvantsa": {
    "title": "Medicube × Gvantsa Okinashvili",
    "summary": "Gvantsa Okinashvili porte côte à côte deux masques gel Medicube, l'un pour l'éclat, l'autre pour la fermeté, et les compare sur le même visage.",
    "brief": "« Même visage, deux masques différents : alors, lequel faut-il à votre peau ? » La légende présente le PDRN Pink Collagen Gel Mask de Medicube pour les jours de teint terne et fatigué et le EGF NAD Firming Gel Mask pour les moments où elle veut une peau d'aspect plus lisse et plus ferme.",
    "approach": "Gvantsa présente chaque sachet, puis applique le masque rose sur une moitié de son visage et le masque d'un rose plus soutenu sur l'autre, avec des textes qui expliquent ce que vise chacun. Après quelques heures, les deux masques deviennent transparents, et elle les retire pour montrer le fini frais et lisse. La légende ajoute qu'elle utilise les morceaux restants sur ses rides du sourire et son cou.",
    "outcome": "Une comparaison moitié-moitié facile à lire, qui aide le public à choisir entre les deux masques, dans un ton calme et au plus près de la caméra."
  },
  "estee-lauder-gvantsa": {
    "title": "Estée Lauder × Gvantsa Okinashvili",
    "summary": "La routine « makeup with me » de Gvantsa Okinashvili, construite sur l'Advanced Night Repair et le fond de teint Double Wear d'Estée Lauder.",
    "brief": "Un format « makeup with me », accompagné du hashtag #esteelauder dans la légende, qui part de la préparation de la peau et aboutit à un look doux et abouti avec des produits Estée Lauder.",
    "approach": "Gvantsa ouvre devant le miroir de sa coiffeuse, puis présente le sérum Advanced Night Repair, le fond de teint Double Wear et un mascara à l'étui doré. Elle applique le sérum, fait pénétrer le teint en pressant, le fixe à la poudre et ajoute de la couleur au pinceau, avant de terminer par le mascara dans son miroir de poche et un dernier regard à la caméra.",
    "outcome": "Une routine détendue, étape par étape, qui garde les produits dans le champ et se termine sur un fini naturel et soigné."
  }
}
