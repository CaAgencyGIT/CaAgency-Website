import type { CaseStudyUi } from '@/lib/data/case-study-ui'
import type { CaseStudyCopy } from '@/lib/data/case-studies-translated'

// German copy for the case-study pages, served at /de/case-studies/<slug>.
// Translated from lib/data/case-studies.ts (and creator-cases, profile-cases).
// Plain data: `studies` is keyed by the English slug.

export const ui: CaseStudyUi = {
  "eyebrowSuffix": "Case Study",
  "brand": "Marke",
  "platforms": "Plattformen",
  "creator": "Creator",
  "services": "Leistungen",
  "theBrief": "Das Briefing",
  "ourApproach": "Unser Ansatz",
  "theOutcome": "Das Ergebnis",
  "overview": "Überblick",
  "inTheVideo": "Im Video",
  "inThePost": "Im Beitrag",
  "highlights": "Highlights",
  "moreCaseStudies": "Weitere Case Studies",
  "viewCaseStudy": "Case Study ansehen",
  "detailCtaTitle": "Ergebnisse auf diesem Niveau erzielen",
  "detailCtaText": "Erzählen Sie uns von Ihrer Marke, und wir bringen Sie mit den passenden Creators für Ihre nächste Kampagne zusammen.",
  "startCampaign": "Kampagne starten",
  "viewAllWork": "Alle Arbeiten ansehen",
  "watchTheWork": "Die Arbeit ansehen",
  "seoTitleBrand": "{brand} Influencer-Marketing Case Study",
  "seoTitleCreator": "{brand} × {creator} Creator Case Study",
  "indexEyebrow": "Case Studies",
  "indexHeading": "Die Arbeit und wie sie entstanden ist",
  "indexIntro": "Hinter jedem Kampagnenvideo stehen ein Briefing, die Auswahl der passenden Creators und ein Produktionsprozess. Diese Case Studies zeigen, wie wir Influencer-Kampagnen für Beauty-, Hautpflege- und Tech-Marken umsetzen, vom ersten Gespräch bis zur finalen Lieferung.",
  "indexTitle": "Influencer-Marketing Case Studies",
  "indexDescription": "Wie CA Agency Influencer-Kampagnen für Marken wie YSL Beauty, NARS, HONOR und Mixsoon umsetzt: das Briefing, der Ansatz und die Arbeit selbst.",
  "indexCtaTitle": "Ihre Marke könnte die nächste sein",
  "indexCtaText": "Erzählen Sie uns, was Sie launchen, und wir bringen Sie mit den passenden Creators zusammen.",
  "stillAlt": "Standbild aus dem Kampagnenvideo von {brand}",
  "logoAlt": "{brand} Logo",
  "views": "Aufrufe",
  "likes": "Likes",
  "comments": "Kommentare",
  "creatorBase": "Creator-Standort",
  "publicResultsNote": "Öffentliche Zahlen aus dem {platform}-Post, Stand {date}.",
  "viewOriginalPost": "Original-Post ansehen"
}

export const verticals: Record<string, string> = {
  "Beauty E-commerce": "Beauty-E-Commerce",
  "Beauty Retail": "Beauty-Handel",
  "Beauty Tech": "Beauty-Tech",
  "Clean Beauty": "Clean Beauty",
  "Color Cosmetics": "Dekorative Kosmetik",
  "Consumer Tech": "Consumer-Tech",
  "Haircare": "Haarpflege",
  "K-Beauty Retail": "K-Beauty-Handel",
  "K-Beauty Skincare": "K-Beauty-Hautpflege",
  "Luxury Beauty": "Luxus-Beauty",
  "Makeup": "Make-up",
  "Premium Skincare": "Premium-Hautpflege",
  "Prestige Beauty": "Prestige-Beauty",
  "Skincare": "Hautpflege"
}

export const services: Record<string, string> = {
  "Brand-safety review": "Brand-Safety-Prüfung",
  "Campaign management": "Kampagnenmanagement",
  "Concept development": "Konzeptentwicklung",
  "Content production": "Content-Produktion",
  "Creator matching": "Creator-Matching",
  "Talent management": "Talentmanagement",
  "Usage rights": "Nutzungsrechte"
}

export const studies: Record<string, CaseStudyCopy> = {
  "honor-smartphone-launch": {
    "title": "HONOR Creator-Kooperation",
    "summary": "Ein erzählerisch angelegtes Smartphone-Feature, das das HONOR Gerät in Alltagsmomenten zeigt, vom Chat mit Freunden bis zum Spiegel-Selfie.",
    "brief": "HONOR wollte sein neues Smartphone in echten Händen und im Alltag zeigen statt über ein Datenblatt, erzählt in einer nahbaren, regionalen Stimme. Der Launch richtete sich an ein junges, Social-first-Publikum in der Region, das am besten auf nahbare Geschichten in der eigenen Sprache reagiert. Das Briefing lautete, das Smartphone als Teil des Alltags erlebbar zu machen, Design und Kamera im Gebrauch zu zeigen und den Ton leicht und plattformtypisch zu halten.",
    "approach": "Die Creatorin baut eine kurze Geschichte rund um ihren Tag: Sie macht sich fertig, chattet mit Freunden in Sprechblasen im lokalen Dialekt, packt das neue Gerät aus und macht ein Spiegel-Selfie. Das Smartphone taucht in jeder Szene ganz natürlich auf, sodass Design und Kamera im Gebrauch gezeigt statt erklärt werden.",
    "outcome": "HONOR erhielt erzählerischen Creator-Content, der das Gerät als Teil des Alltags wirken lässt. Der nahbare Ton eignet sich für organische Kanäle und für bezahlte Platzierungen, die sich nativ anfühlen."
  },
  "ysl-beauty-campaign": {
    "title": "YSL Beauty Creator-Kampagne",
    "summary": "Luxus-Beauty-Content, der die Eleganz von YSL bewahrt und sich zugleich im Feed einer Creatorin zu Hause fühlt.",
    "brief": "Luxus-Beauty ist ein Balanceakt: Der Content muss die Premium-Codes der Marke schützen und sich trotzdem wie etwas anfühlen, das eine Creatorin wirklich posten würde. YSL Beauty brauchte Kurzvideos, die beides leisten.",
    "approach": "Wir wählten eine Beauty-Creatorin aus, deren Ästhetik der Marke bereits nahe war, in Licht, Tonalität und Finish, sodass der gesponserte Content den Feed nicht unterbrach. Sequenzen rund um das Auftragen hielten das Produkt im Bild und zeigten Textur und Ergebnis aus der Nähe.",
    "outcome": "YSL Beauty erhielt Creator-Content, der seinen Premium-Look auch im vertikalen Format mit Ton behält: ein Asset, das sowohl organisch auf dem Kanal der Creatorin als auch als Paid Social auf Markenseite funktioniert."
  },
  "kylie-cosmetics-campaign": {
    "title": "Kylie Cosmetics Creator-Kampagne",
    "summary": "Ein fokussiertes Lippen-Tutorial, das die Kombination aus Liner und Lippenfarbe von Kylie Cosmetics für einen definierten, glänzenden Nude-Look zeigt.",
    "brief": "Kylie Cosmetics ist auf den Lippen aufgebaut. Der Content musste diesen Signature-Look deshalb klar und schnell zeigen, und zwar so, dass man ihn nachmachen kann. Das Publikum von Kylie Cosmetics erwartet hochwertigen, trendorientierten Content und kennt die Marke gut. Die Herausforderung bestand also darin, einen Look zu liefern, der aktuell wirkt, und das Produkt dabei klar im Fokus zu halten. Das Video sollte kurz, leicht nachzumachen und visuell stimmig mit der glänzenden Ästhetik der Marke sein.",
    "approach": "Die Creatorin arbeitet in enger Nahaufnahme: Sie umrandet die Lippen mit einem Liner von Kylie Cosmetics und trägt dann Farbe und Glanz auf, wobei jeder Schritt klar zu sehen ist. Gleichmäßiges Licht, ein ruhiger Hintergrund und ein schlichtes schwarzes Top halten die Aufmerksamkeit auf Produkt und Finish. Am Ende wird das Ergebnis in die Kamera gehalten, damit der komplette Look zu sehen ist.",
    "outcome": "Kylie Cosmetics erhielt ein klares, wiederholbares Lippen-Tutorial, das das Produkt in der Anwendung und den fertigen Effekt zeigt. Durch das schlichte Styling ist es auf dem Kanal der Creatorin wirkungsvoll und lässt sich für bezahlte Platzierungen anpassen."
  },
  "yesstyle-collaboration": {
    "title": "YesStyle Creator-Kooperation",
    "summary": "Eine Schritt-für-Schritt-Routine zur Porenpflege, komplett aus K-Beauty-Bestsellern zusammengestellt, die bei YesStyle erhältlich sind.",
    "brief": "YesStyle ist eine Anlaufstelle für K-Beauty. Der Content sollte deshalb zeigen, wie breit das Angebot ist, aus dem Kundinnen und Kunden dort wählen können. Ziel war eine lehrreiche Routine, die ein verbreitetes Anliegen löst, sichtbare Poren, und dafür mehrere Produkte in einer leicht nachvollziehbaren Abfolge nutzt. Als Händler und nicht als einzelne Marke profitiert YesStyle am meisten, wenn Content die Zuschauer zu mehreren Produkten gleichzeitig führt. Das Briefing lautete, eine Routine mit klarer Vorher-Nachher-Logik aufzubauen, Produkte verschiedener Marken zu zeigen, die alle bei YesStyle erhältlich sind, und einen nachverfolgbaren Anreiz einzubauen, damit sich der Content sowohl an Verkäufen als auch an Reichweite messen lässt.",
    "approach": "Georgii Galaev beginnt mit der Frage „perfekte Poren?“ und nummeriert dann jeden Schritt im Bild. Er massiert das ma:nyo Herbgreen Cleansing Oil eine volle Minute lang in die Bereiche mit Mitessern ein, schäumt anschließend das Anua Rice Enzyme Brightening Cleansing Powder in den Händen auf, trägt dann die Medicube Zero Pore Blackhead Mud Mask auf und schließt mit der Medicube PDRN Pink Collagen Capsule Cream ab. Die Nahaufnahmen und sein eigener Rabattcode machen aus einer Routine eine fertige Einkaufsliste.",
    "outcome": "YesStyle erhielt ein Tutorial mit hohem Nutzwert, das mehrere Marken aus dem Sortiment in einem Video zeigt und den Zuschauern einen klaren Grund zum Einkaufen gibt. Durch die nummerierten Schritte und den Creator-Code eignet es sich sowohl für Saves als auch für nachverfolgbare Conversions."
  },
  "insta360-campaign": {
    "title": "Insta360 X Creator-Kampagne",
    "summary": "Actionbetonter Creator-Content, in dem die Kamera Insta360 X sich selbst vorführt.",
    "brief": "Eine 360°-Kamera ist ihr eigener bester Verkäufer, sofern das Material zeigt, was sie kann. Insta360 brauchte Creator-Content, in dem die Aufnahmen des Produkts die Hauptrolle spielen und nicht ein Review, bei dem jemand in die Kamera spricht.",
    "approach": "Das Konzept brachte die Kamera in Bewegung: vom Creator gedrehtes Material mit den scheinbar unmöglichen Perspektiven und dem Reframing, für die die X-Serie bekannt ist. Das Gerät ist im Einsatz zu sehen, und die Ergebnisse sprechen im Schnitt für sich.",
    "outcome": "Insta360 erhielt ein Creator-Video nach dem Prinzip Zeigen statt Erzählen, in dem der Content selbst der Beweis für das Produkt ist: das stärkste denkbare Format für Kamera-Hardware."
  },
  "mixsoon-skincare": {
    "title": "Mixsoon K-Beauty-Kampagne",
    "summary": "Ein Erklärvideo direkt in die Kamera zu den Inhaltsstoffen des Bean Copper Peptide Firming Serum von Mixsoon, ausgerichtet auf Hautpflege für Männer.",
    "brief": "Mixsoon wollte Männer erreichen, die sich für Anti-Aging-Hautpflege interessieren, und in klarer, direkter Sprache erklären, was das Bean Copper Peptide Firming Serum bewirkt. Männer sind eine schnell wachsende Zielgruppe für Hautpflege, brauchen aber oft klarere Erklärungen und einen geradlinigen Ton. Gefragt war direkter, glaubwürdiger Content, der erklärt, wie das Serum wirkt und warum seine wichtigsten Inhaltsstoffe zählen, ohne wie eine Beauty-Werbung zu wirken, die sich an jemand anderen richtet.",
    "approach": "Jay Sadiq spricht direkt in die Kamera und hält das Serum in der Hand, während er die wichtigsten Inhaltsstoffe erklärt. Texteinblendungen schlüsseln die Vorteile auf: Kupferpeptid (GHK-Cu) unterstützt straffer wirkende Haut und die Kollagenproduktion, fermentierte Bohnenessenz liefert Feuchtigkeit und Pflege. Zum Schluss trägt er das Serum auf und zeigt, wie leicht es sich in eine Pflegeroutine einfügt.",
    "outcome": "Mixsoon erhielt glaubwürdigen, erklärenden Content, der die Zielgruppe der Männer in der Hautpflege erschließt. Durch die klare Aufschlüsselung der Inhaltsstoffe funktioniert er organisch und als Performance-Creative."
  },
  "kiko-milano-campaign": {
    "title": "Kiko Milano × @_idareen_",
    "summary": "CA Agency Talent @_idareen_ als Gesicht einer Kiko Milano Kampagne mit Beauty-Content rund um das Auftragen.",
    "brief": "Kiko Milano wollte seine Produkte von einer Creatorin mit echter Beauty-Glaubwürdigkeit vor einer engagierten Community vorführen lassen: Content, der zuerst als Tutorial und erst danach als Werbung funktioniert.",
    "approach": "Wir brachten die Marke mit unserem Talent @_idareen_ zusammen, deren Beauty-Content zur Positionierung von Kiko als zugänglicher Glamour passt, und betreuten die Zusammenarbeit von Anfang bis Ende: Briefing, Produktion, Freigabe durch die Marke und Lieferung.",
    "outcome": "Aus der Partnerschaft entstand hochwertiger Kampagnen-Content rund um das Auftragen, von einer Creatorin aus unserem eigenen Roster: das Full-Service-Modell, bei dem CA Agency sowohl die Markenseite als auch die Talentseite übernimmt."
  },
  "juvias-place-campaign": {
    "title": "Juvia's Place × @beatrixramosaj",
    "summary": "Creator-Content mit Fokus auf Pigmente für Juvia's Place, mit CA Agency Talent @beatrixramosaj.",
    "brief": "Juvia's Place wird für satte, hochpigmentierte Farben geliebt. Das Briefing verlangte Content, der diese Farbabgabe vor die Kamera bringt, mit einer Creatorin, deren Community ihren Looks vertraut.",
    "approach": "Unser Talent @beatrixramosaj baute den Content um Momente aus Swatch und Auftrag auf, in denen das Pigment die Überzeugungsarbeit leistet. Wir übernahmen Terminplanung, Feedback der Marke und die finale Lieferung.",
    "outcome": "Juvia's Place erhielt Creator-Content, der die markanteste Stärke der Marke in den Vordergrund stellt, die Farbabgabe, geliefert über eine gemanagte Talentbeziehung mit einem einzigen Ansprechpartner."
  },
  "nars-campaign": {
    "title": "NARS × @thefashionfreakk",
    "summary": "Prestige-Beauty-Content für NARS mit CA Agency Talent @thefashionfreakk als Gesicht.",
    "brief": "NARS brauchte Creator-Content mit dem Anspruch von Prestige-Beauty, der ein Publikum über eine Persönlichkeit erreicht, der es wegen ihres Stils folgt und nicht nur wegen Produkten.",
    "approach": "Wir brachten NARS mit unserem Talent @thefashionfreakk zusammen, deren modegeprägte Ästhetik Beauty-Produkte in eine größere Stilgeschichte einbettet. Der Content integriert das Produkt in ihren Signature-Look, statt es isoliert zu zeigen.",
    "outcome": "Die Zusammenarbeit brachte NARS Creator-Content im Stilkontext, Beauty als Teil eines Looks und eines Lebens, und genau dort punkten Prestige-Marken im Kurzvideoformat."
  },
  "elemis-campaign": {
    "title": "ELEMIS Creator-Kampagne",
    "summary": "Premium-Hautpflege-Storytelling für ELEMIS rund um Ritual, Textur und Routine.",
    "brief": "ELEMIS ist in der Premium-Hautpflege zu Hause, wo Content Ritual und Textur vermitteln muss, also die sinnlichen Gründe, aus denen Menschen mehr bezahlen. Das Briefing verlangte Creator-Content mit diesem gehobenen Self-Care-Gefühl.",
    "approach": "Der Content wurde um das Ritual des Auftragens herum aufgebaut: Nahaufnahmen der Textur, ein ruhiges Tempo und ein Voiceover in der Ich-Form, das wie eine echte Routine klingt und nicht wie ein abgelesenes Skript.",
    "outcome": "ELEMIS erhielt sinnlichen, routinebasierten Creator-Content, abgestimmt auf die Premium-Positionierung der Marke und produziert im Rahmen einer vollständig gemanagten Creator-Kooperation."
  },
  "fenty-beauty-campaign": {
    "title": "Fenty Beauty Creator-Kampagne",
    "summary": "Ein Foundation-Test in Echtzeit mit der Pro Filt’r Fluid Flex Foundation von Fenty Beauty, bei dem es darum geht, wie schwerelos sie sich anfühlt.",
    "brief": "Fenty Beauty wollte seine neue Pro Filt’r Fluid Flex Foundation mit einem ehrlichen ersten Eindruck vorstellen. Ziel war es, Deckkraft und Finish zu zeigen und dabei die echte Reaktion der Creatorin auf die Formel einzufangen. Foundation-Launches stehen und fallen mit Vertrauen: Zuschauer wollen vor dem Kauf echte Deckkraft, ein echtes Finish und eine echte Reaktion sehen. Das Briefing lautete, einen ungeskripteten ersten Eindruck der neuen Pro Filt’r Fluid Flex Foundation festzuhalten, das komplette Auftragen ohne Schnitte zu zeigen, die das Ergebnis verbergen, und den Farbton zu nennen, damit Zuschauer mit ähnlicher Haut ihn kaufen können.",
    "approach": "Melly Sanchez trägt die Foundation im Farbton 396N vor der Kamera mit einem Pinsel auf, während die Texteinblendung „Moment … warum fühlt sich das auf meiner Haut nach NICHTS an?!“ ihre Reaktion in Echtzeit festhält. Das komplette Auftragen ist zu sehen, sodass sich Zuschauer selbst ein Bild von Deckkraft und dem natürlich matten Finish machen können. Das selbstbewusste Styling der Creatorin hält das Video klar in der mutigen, inklusiven Markenwelt von Fenty.",
    "outcome": "Fenty Beauty erhielt authentischen Content zum ersten Eindruck, der die wichtigsten Vorzüge der Formel hervorhebt, Deckkraft, mattes Finish und ein schwereloses Tragegefühl, in den eigenen Worten der Creatorin. Er funktioniert organisch als Launch-Asset und als glaubwürdiges Paid Creative."
  },
  "delere-campaign": {
    "title": "DELERE Creator-Kampagne",
    "summary": "Eine Einführung in Kaviar-Hautpflege, die die Geschichte des Luxus-Inhaltsstoffs von DELERE zu etwas macht, das man auf der Haut sehen kann.",
    "brief": "„Kaviar als Hautpflege?!“ ist eine Frage, die sich die meisten Zuschauer stellen werden, und DELERE brauchte Content, der sie beantwortet. Das Briefing lautete, die Formel zu erklären, 15 % Kaviar-Omega-3 und Kollagenpeptid, und zugleich den Glow zu zeigen, den Zuschauer erwarten dürfen, alles in einem kurzen vertikalen Format. Als neuerer Name in der Luxus-Hautpflege musste DELERE außerdem Glaubwürdigkeit bei Menschen aufbauen, die noch nie von der Marke gehört hatten. Das hieß: die Aussage zum Inhaltsstoff mit einem sichtbaren Beleg auf der Haut verbinden, den Ton hochwertig statt effekthascherisch halten und der Marke ein Asset geben, das sie in Awareness-Kampagnen wiederverwenden kann.",
    "approach": "Saranda Mavriqi beginnt mit dem Hook, der neugierig macht, und geht dann direkt zum Auftragen über: Die Creme wird mit einem Pinsel in einer langsamen Bewegung aufgetragen und anschließend mit der Hand eingedrückt, sodass sowohl Textur als auch Finish zu sehen sind. Texteinblendungen erzählen die Geschichte des Inhaltsstoffs, während die Kamera auf ihrer Haut bleibt. Das Video endet mit dem strahlenden Ergebnis in einem ruhigen Badezimmer, das zur Premium-Positionierung der Marke passt.",
    "outcome": "DELERE erhielt Creator-Content, der einen wenig bekannten Luxus-Inhaltsstoff in einfachen Worten vorstellt und mit sichtbarer Textur und Glow untermauert. Die Einblendungen zum Inhaltsstoff machen ihn zu einem starken Erklär-Asset für neue Zielgruppen, während der klare, hochwertige Look ihn für Paid Social markenkonform hält."
  },
  "sephora-campaign": {
    "title": "Sephora Creator-Kampagne",
    "summary": "Eine Hautpflege-Geschichte rund um die Hautbarriere, die Sephoras eigene Hydrate-Linie zu einer Routine für Tage mit trockener, gereizter Haut zusammenstellt.",
    "brief": "Sephora wollte seine hauseigene Hydrate-Kollektion als durchdachte Hautpflegelinie positionieren und nicht als günstige Alternative. Die Herausforderung bestand darin, drei Texturen mit drei unterschiedlichen Aufgaben zu zeigen, das Bouncy Water Jelly mit Hyaluron- und Polyglutaminsäure, die Balmy Rich Cream mit Lipiden und Ceramiden und die Satin Light Cream, und zwar so, dass Zuschauer sie sofort der eigenen Haut am jeweiligen Tag zuordnen können. Zielgruppe waren hautpflegeaffine Käuferinnen und Käufer, die Inhaltsstoffe bereits beim Namen kennen und erfahren wollen, was sie wann verwenden sollen, statt ein Wundermittel verkauft zu bekommen. Das Video sollte auf TikTok und Reels funktionieren, ohne wie Händlerwerbung zu wirken, den Namen Sephora durchgehend sichtbar halten und den Zuschauern eine einfache Regel mitgeben, die sie am Regal anwenden können.",
    "approach": "Albina Mavriqi beginnt mit einem echten Problem: einer Nahaufnahme von Rötungen und Trockenheit mit der Einblendung „An Tagen mit trockener oder gereizter Haut braucht meine Hautbarriere extra Unterstützung.“ Diese Ehrlichkeit bereitet den Boden für die Produktvorstellung. Jeder Tiegel wird lange genug in die Kamera gehalten, um die wichtigsten Inhaltsstoffe lesen zu können. Dann zeigt ein Schnitt auf die Textur der Creme, wie reichhaltig sie ist, damit sich Zuschauer selbst ein Urteil bilden können. Das Video endet mit dem Ergebnis, frischer und sichtbar ruhigerer Haut, und dem Gedanken, die Feuchtigkeitspflege „danach zu wählen, was meine Haut an dem Tag braucht“. So wird aus einer Produktreihe eine Entscheidungshilfe.",
    "outcome": "Sephora erhielt ein erklärendes, auf Inhaltsstoffe ausgerichtetes Creator-Video, das die Logik der gesamten Linie verkauft und nicht nur ein einzelnes Produkt. Durch den Vorher-Nachher-Rahmen und die eingeblendeten Inhaltsstoffe lässt es sich gleichermaßen als organischer Content auf Albinas Kanal und als Paid Asset für Hautpflege-Käufer nutzen, die Feuchtigkeitscremes vergleichen."
  },
  "revolve-beauty-campaign": {
    "title": "Revolve Beauty Creator-Kampagne",
    "summary": "Ein winterlicher Glam-Look mit dem Motto „frost-kissed“, komplett aus Produkten zusammengestellt, die bei Revolve Beauty erhältlich sind.",
    "brief": "Revolve Beauty wollte einen saisonalen Look, der die Breite seines Multi-Brand-Sortiments zeigt und direkt zu kaufbaren Produkten führt. Der Content musste redaktionell genug wirken für das Modepublikum von Revolve. Revolve Beauty führt eine kuratierte Auswahl an Marken. Das Briefing verlangte daher einen Look, der mehrere davon zeigt und sich trotzdem wie eine stimmige Vision anfühlt. Der Content brauchte einen saisonalen Aufhänger, ein redaktionelles Styling passend zur Modeidentität von Revolve und eine klare Produktliste, damit Zuschauer den Look direkt beim Händler nachkaufen können.",
    "approach": "Melani Seiffert kreiert einen weichen winterlichen Glam-Look in einem von Kronleuchtern erhellten Raum, eingehüllt in weißen Kunstpelz. Sie arbeitet sich durch eine Produktauswahl von Revolve Beauty, darunter der Tower 28 Swipe Serum Concealer, der Nudestix Tinted Blur Sculpt Stick und das Blush Kevyn Aucoin The Sensual Skin, und hält jedes Produkt vor dem Auftragen in die Kamera. Durch das kühle, glamouröse Styling wirkt das Video wie eine Modestrecke und bleibt trotzdem leicht nachvollziehbar.",
    "outcome": "Revolve Beauty erhielt ein Tutorial in redaktioneller Qualität, das mehrere Marken in einem kaufbaren Look zeigt. Die hochwertige Ästhetik passt zu den eigenen Kanälen von Revolve, und der Aufbau Produkt für Produkt unterstützt Klicks zum Händler."
  },
  "anua-campaign": {
    "title": "Anua Skincare Creator-Kampagne",
    "summary": "Ein Tutorial zur Gesichtsmassage in fünf Regeln mit der Gua-Sha-Creme von Anua, von der Lymphdrainage bis zum Konturieren.",
    "brief": "Anua wollte seine Gua-Sha-Creme als das Produkt zeigen, das die Gesichtsmassage einfach und wirksam macht. Der Content sollte die Technik vermitteln und nicht nur das Produkt zeigen. Face Sculpting und Lymphdrainage sind beliebt, doch viele Zuschauer sind unsicher, wie man sie richtig ausführt. Das Briefing lautete, die Anua Gua-Sha-Creme als das Produkt zu positionieren, das die Technik einfach macht, und ein lehrreiches Video zu schaffen, das sich sehr gut zum Speichern eignet und zu dem Zuschauer zurückkehren.",
    "approach": "Georgii Galaev macht aus dem Video eine kleine Masterclass, in der jeder Schritt im Bild benannt wird: die Lymphknoten öffnen, die Kieferlinie konturieren, die Wangenknochen anheben, die Nase abschwellen lassen und alles nach unten ableiten. Er verwendet durchgehend die Anua Gua-Sha-Creme und zeigt, wie das integrierte Tool und die Creme für jede Bewegung genug Gleitfähigkeit geben.",
    "outcome": "Anua erhielt ein techniklastiges Tutorial, das sich sehr gut zum Speichern eignet und das Produkt als festen Bestandteil der Routine positioniert. Es funktioniert als lehrreicher organischer Content und als Paid Creative für Zuschauer, die sich für Face Sculpting interessieren."
  },
  "purito-campaign": {
    "title": "Purito Creator-Kampagne",
    "summary": "Ein Vlog zur „Morgenroutine“ mit Zeitstempeln, der Purito Seoul in eine authentische Schritt-für-Schritt-Routine einbindet.",
    "brief": "Die Positionierung von Purito Seoul, clean und für empfindliche Haut, wirkt am besten, wenn sie sich wie ein Teil des echten Lebens anfühlt. Ziel war Content, der sich natürlich in das äußerst beliebte Format des Routine-Vlogs einfügt, statt wie eine Werbeunterbrechung darin zu wirken. Das Publikum von Purito ist skeptisch gegenüber überproduzierter Werbung und reagiert auf ehrliche, ungefilterte Routinen. Das Briefing verlangte ein Format mit hoher Watch-Time, in dem sich das Produkt seinen Platz in einem echten Morgen verdient, statt ihn zu unterbrechen, und Content, der noch lange nach der Veröffentlichung als Discovery-Traffic weiterarbeitet.",
    "approach": "Aiym Kablan dokumentiert ihren Morgen Minute für Minute, mit Zeitstempeln im Bild, während sie duscht, ihre Haare einwickelt, ihre Haut vorbereitet und in ihre Routine findet. Purito Seoul taucht im Fluss dieser Schritte auf, wird nebenbei in die Hand genommen und aufgetragen, sodass das Produkt im Kontext zu sehen ist und nicht präsentiert wird. Die gemütliche, ungefilterte Umgebung und nahbare Details halten das Video authentisch und sehr gut anschaubar.",
    "outcome": "Purito Seoul erhielt nativen Lifestyle-first-Content in einem der Kurzvideoformate mit dem stärksten Engagement. Weil das Produkt in einer Routine vorkommt, die Zuschauer ohnehin sehen wollen, funktioniert das Video als Discovery-Content für neue Zielgruppen und als glaubwürdiges Paid Asset ohne Verkaufsdruck."
  },
  "gisou-campaign": {
    "title": "Gisou Creator-Kampagne",
    "summary": "Content, der das Haar in den Mittelpunkt stellt und das typische glänzende Finish von Gisou auf langen, voluminösen Wellen für sich sprechen lässt.",
    "brief": "Die Marke Gisou steht für gesunden Glanz. Der Content musste diesen Glanz deshalb vor der Kamera sichtbar machen. Ziel war ein kurzer, inspirierender Haarmoment, der sich wie ein natürlicher Teil von Beatrix’ Feed anfühlt und nicht wie eine Produktvorführung. Die Community von Gisou kauft einen Look und einen Lebensstil ebenso wie ein Produkt, daher setzte das Briefing auf Stimmung statt Erklärung. Der Content sollte sich gut neben der hochwertigen Bildsprache der Marke einfügen, das Haar in jedem Bild zum Star machen und auch ohne Ton oder Untertitel funktionieren, wenn Zuschauer schnell scrollen.",
    "approach": "Beatrix Ramosaj filmt in weichem, gleichmäßigem Tageslicht, das den Glanz auf ihrem schwungvollen Blow-out einfängt. Statt eines Tutorials ist das Video um Bewegung herum aufgebaut: Sie fährt mit den Fingern durch die Längen, verteilt das Produkt zwischen den Handflächen und arbeitet es in die Spitzen ein, sodass Zuschauer in Echtzeit sehen, wie das Haar reagiert. Der enge Bildausschnitt hält die Aufmerksamkeit auf Textur und Glanz, und das ruhige Tempo spiegelt den zurückhaltenden, hochwertigen Ton von Gisou.",
    "outcome": "Gisou erhielt ein hochwertiges, lifestyleorientiertes Haarvideo, das das zentrale Versprechen der Marke, gesund aussehenden Glanz, in wenigen Sekunden und ohne viel Text vermittelt. Der klare visuelle Stil passt sowohl zu Beatrix’ Publikum als auch zu bezahlten Platzierungen neben dem eigenen Marken-Content von Gisou."
  },
  "samsung-campaign": {
    "title": "Samsung Creator-Kampagne",
    "summary": "Lifestyleorientierter Creator-Content, der Samsung Geräte in einen echten Tagesablauf einbettet.",
    "brief": "Samsung wollte das Gerät als Begleiter im Alltag zeigen und nicht als Datenblatt: Content, der sich wie der Tag einer Creatorin anfühlt und in dem sich das Produkt seine Bildschirmzeit ganz natürlich verdient.",
    "approach": "Wir bauten das Konzept um den alltagsnahen Content-Stil unseres Talents Khutjo Matsoma: Das Gerät erscheint dort, wo es wirklich vorkäme, bei Kameramomenten und in der Nutzung unterwegs, und am Ende steht ein Feature-Moment, der ohne Hard Sell auskommt.",
    "outcome": "Samsung erhielt ein authentisches Creator-Video, das sich nativ in den Feed einfügt und Zielgruppen erreicht, die an klassischer Tech-Werbung vorbeiscrollen."
  },
  "haruharu-wonder-campaign": {
    "title": "Haruharu Wonder Creator-Kampagne",
    "summary": "Eine aktive Outdoor-Glow-Geschichte für den Black Rice Glow Mist von Haruharu Wonder, der den ganzen Tag über zum Einsatz kommt.",
    "brief": "Haruharu Wonder wollte seinen Mist als nicht klebrige Möglichkeit zeigen, die Haut unterwegs mit Feuchtigkeit zu versorgen und strahlen zu lassen. Der Black Rice Mist von Haruharu Wonder wird in großem Umfang über Amazon verkauft, daher konzentrierte sich das Briefing darauf, die Anwendung im echten Leben zu zeigen. Der Content sollte zeigen, wie der Mist mehrmals am Tag verwendet wird, sein nicht klebriges Finish hervorheben und einen natürlichen Ton mit Outdoor-Charakter halten, der zur Marke passt.",
    "approach": "Rebecca Ghaderi filmt sich draußen und über ihren Tag hinweg, vom frühen Spaziergang in der Sonne bis zu entspannten Momenten später, und sprüht sich jedes Mal den Glow Mist von Haruharu Wonder ins Gesicht. Im hellen Tageslicht ist das frische, taufrische Finish gut zu erkennen, und die wechselnden Schauplätze zeigen, wie der Mist in einen vollen Alltag passt.",
    "outcome": "Haruharu Wonder erhielt Lifestyle-Content, der eine echte, wiederholte Anwendung und einen natürlichen Glow zeigt. Er eignet sich sowohl für organische Posts als auch für bezahlte Platzierungen für das Amazon-Angebot der Marke."
  },
  "armani-beauty-campaign": {
    "title": "Armani Beauty Creator-Kampagne",
    "summary": "Ein Tutorial für aufbaubare Wangenfarbe mit dem flüssigen Luminous Silk Cheek Tint von Armani Beauty.",
    "brief": "Armani Beauty wollte zeigen, wie sich sein flüssiger Cheek Tint zu einem natürlichen, leuchtenden Hauch Farbe verblenden lässt, und den Look dabei mühelos und hochwertig halten. Die Luxuspositionierung von Armani Beauty verlangt Content, der edel und ruhig wirkt. Das Briefing lautete, zu zeigen, wie sich der Cheek Tint von einem zarten Schimmer zu einer frischen Wangenröte aufbauen lässt, sein leuchtendes Finish hervorzuheben und das Produkt selbst klar sichtbar zu halten.",
    "approach": "Die Creatorin tupft den Armani Luminous Silk Cheek Tint auf die Wange und verblendet ihn dann mit einem Pinsel. Sie baut die Farbe nach und nach auf, sodass Zuschauer sehen, wie gut sie sich schichten lässt. Nahaufnahmen und weiches Licht zeigen das leuchtende Finish, und das Video endet mit dem Produkt, in die Kamera gehalten, neben dem fertigen Glow.",
    "outcome": "Armani Beauty erhielt eine klare, elegante Vorführung eines einzelnen Produkts, die Verblendbarkeit und Finish hervorhebt. Sie eignet sich sowohl für die organische Nutzung als auch für bezahlte Platzierungen."
  },
  "valentino-beauty-campaign": {
    "title": "Valentino Beauty Creator-Kampagne",
    "summary": "Ein Make-up-Tutorial zum Thema Farbabstimmung, das den Spike Lippenstift und das Eye2Cheek Blush von Valentino zu einem abgestimmten Look verbindet.",
    "brief": "Valentino Beauty wollte zeigen, dass seine Lippen- und Wangenprodukte als Set funktionieren. Die Idee sollte sich wie ein Styling-Tipp anfühlen, den man speichert, und nicht wie ein Produkt-Swatch. Das Make-up von Valentino Beauty ist als Couture positioniert, der Content musste also gestylt und durchdacht wirken und trotzdem praktisch bleiben. Die beiden Hauptprodukte sollten mit Namen und Farbton klar erkennbar sein, damit Zuschauer den Look nachschminken können, und das fertige Gesicht musste fotogen genug sein, damit die Marke es auch außerhalb des Feeds der Creatorin einsetzen kann.",
    "approach": "Dariia Bordun baut das Video um einen Vergleich aus der Mode auf: So wie man Schuhe auf die Tasche abstimmt, sollten auch Lippen und Wangen zueinander passen. Sie trägt den Spike Valentino Buttery Matte Lip in 134 Couture in the Streets auf, dann das Valentino Eye2Cheek in 01 Born in Roma, und baut einen weichen „Halo“ aus Farbe auf, der das Gesicht zusammenhält. Der goldene Lippenstift mit Nieten und die rote Couture-Puderdose werden mit eingeblendeten Farbnamen in die Kamera gehalten, sodass sich der Look leicht nachkaufen lässt.",
    "outcome": "Valentino Beauty erhielt ein Tutorial, das zwei Produkte als einen Look verkauft und den Zuschauern eine Technik mitgibt, die sie wiederverwenden können. Benannte Farbtöne, das Auftragen in Nahaufnahme und das abgestimmte Finish machen es organisch wirkungsvoll und zu einem auf Conversion ausgerichteten Paid Asset."
  },
  "chanel-beauty-campaign": {
    "title": "Chanel Beauty Creator-Kampagne",
    "summary": "Ein Teint-Tutorial mit nur einem Produkt, das zeigt, wie Les Beiges Pearly Glow von Chanel ein perlmuttartiges Hautfinish erzeugt.",
    "brief": "Chanel Beauty wollte ein einzelnes, leuchtendes Teintprodukt so präsentieren, dass es mühelos und luxuriös wirkt. Die Herausforderung bestand darin, einen subtilen Effekt, den perlmuttartigen Glow, vor der Kamera klar sichtbar zu machen. Das Publikum von Chanel erwartet Zurückhaltung und Eleganz. Der Content musste also auf Hard Selling verzichten und das Produkt trotzdem klar in den Mittelpunkt stellen. Das Briefing lautete, ein subtiles, lichtreflektierendes Finish überzeugend vor der Kamera zu zeigen, das Styling minimal und luxuriös zu halten und das Produkt als unkomplizierten Begleiter für jeden Tag zu rahmen.",
    "approach": "Dariia Bordun beginnt mit ungeschminkter Haut und stellt dann Chanel Les Beiges Pearly Glow vor. Sie trägt das Produkt mit den Fingerspitzen auf und verblendet es über den höchsten Punkten des Gesichts. Weiches, schmeichelndes Licht lässt den perlmuttartigen Schimmer sichtbar entstehen, und die Einblendung „WIRKLICH das einzige Produkt, das du für diesen perlmuttartigen Hauteffekt brauchst“ rahmt es als Hero-Produkt. Zum Schluss hält sie den Flakon neben den fertigen Glow.",
    "outcome": "Chanel Beauty erhielt ein elegantes Tutorial mit einem einzigen Produkt, das ein subtiles Finish gut sichtbar und begehrenswert macht. Das minimale Styling und das klare Vorher-Nachher halten es für die organische und die bezahlte Nutzung markenkonform."
  },
  "rare-beauty-campaign": {
    "title": "Rare Beauty Creator-Kampagne",
    "summary": "Ein frischer, strahlender Make-up-Look, der das Blush von Rare Beauty mit dem Lip Oil der Marke kombiniert.",
    "brief": "Rare Beauty wollte einen fröhlichen, tragbaren Look, der zwei seiner Kultkategorien, Blush und Lippen, im Zusammenspiel zeigt. Die Community von Rare Beauty reagiert auf fröhliches, zugängliches Make-up und weniger auf aufwendige Technik. Das Briefing lautete, Blush und Lip Oil gemeinsam als unkomplizierten Look mit Spaßfaktor zu zeigen, den Ton positiv und inklusiv zu halten und beide Produkte leicht erkennbar und kaufbar zu machen.",
    "approach": "Melly Sanchez kreiert einen rosigen Look ganz in Pink in einer verspielten Umgebung, inklusive pinker Haarclips und sanftem Neonlicht. Sie tupft das Rare Beauty Blush mit einem Pinsel auf die Wangen, zeigt das Produkt in die Kamera, umrandet ihre Lippen und schließt mit dem Lip Oil für einen glänzenden Hauch Farbe ab. Die Einblendung „Rare beauty blush + lip oil“ macht die Kombination leicht nachkaufbar.",
    "outcome": "Rare Beauty erhielt ein fröhliches, markenkonformes Tutorial, das zwei Produkte als einen Look verkauft. Das helle Styling und die klaren Schritte eignen sich sowohl für organische Posts als auch für Paid Social."
  },
  "saie-campaign": {
    "title": "Saie Creator-Kampagne",
    "summary": "Ein sonniger Glow-Look für unterwegs, komplett mit Saie geschminkt und direkt aus der Make-up-Tasche aufgetragen.",
    "brief": "Die cleanen Skin-first-Produkte von Saie sind für ein unkompliziertes, strahlendes Finish gemacht. Ziel war es, sie in einer entspannten Alltagssituation zu zeigen, die zum mühelosen Ton der Marke passt. Das Publikum von Saie legt Wert auf cleane Inhaltsstoffe und einen unkomplizierten, natürlichen Look. Das Briefing verlangte entspannten Content aus dem echten Leben, der zeigt, wie schnell sich die Produkte auftragen lassen, wie sie bei Tageslicht aussehen und wie sie zu einem Lebensstil unterwegs passen.",
    "approach": "Rebecca Ghaderi schminkt sich draußen im hellen Sommerlicht und holt die Produkte von Saie direkt aus ihrer Tasche. Sie tupft Wangen- und Teintprodukte auf, verblendet sie mit Pinseln von Saie und hält jedes einzelne in die Kamera, sodass Zuschauer die Farbtöne, die Tools und das sonnengeküsste Finish bei Tageslicht sehen.",
    "outcome": "Saie erhielt authentischen Lifestyle-first-Make-up-Content, der die Produkte unter realen Bedingungen zeigt. Er funktioniert gut organisch und als nahbares, vertrauenswürdiges Paid Creative."
  },
  "patrick-ta-campaign": {
    "title": "Patrick Ta Creator-Kampagne",
    "summary": "Ein Soft-Glam-Tutorial rund um die schimmernden Lidschatten und die Blush-Duos von Patrick Ta.",
    "brief": "Die Produkte von Patrick Ta sind für ihr leuchtendes, konturiertes Finish bekannt. Das Briefing lautete, diesen typischen Glow auf Augen und Wangen in einem Look zu zeigen, den Zuschauer nachschminken können. Die Produkte von Patrick Ta sind als Profiqualität positioniert, daher verlangte das Briefing Content, der Textur, Pigment und Finish aus der Nähe zeigt. Der Look sollte glamourös, aber machbar sein, und die Puderdosen sollten so klar zu sehen sein, dass Zuschauer sie im Geschäft wiedererkennen.",
    "approach": "Beatrix Ramosaj beginnt mit Nahaufnahmen des schimmernden Lidschattens und des Blush-Duos und baut den Look dann Schritt für Schritt auf: Schimmer auf das Lid gedrückt, definierte Wimpern und Eyeliner, dann das Blush auf den Wangen eingearbeitet. Der enge Bildausschnitt auf Puderdosen und Texturen zeigt die Qualität des Produkts, während der fertige Look seinen leuchtenden Effekt vorführt.",
    "outcome": "Patrick Ta erhielt ein hochwertiges, produktorientiertes Tutorial, das mehrere Produkte und einen stimmigen fertigen Look zeigt. Es funktioniert für das Publikum der Creatorin und als inspirierender Paid Content."
  },
  "medicube-campaign": {
    "title": "Medicube Creator-Kampagne",
    "summary": "Eine Glass-Skin-Abendroutine rund um die Collagen Night Wrapping Mask von Medicube, vom Auftragen bis zum Abziehen am Ende.",
    "brief": "Die Collagen Night Wrapping Mask von Medicube hat ein besonderes Peel-off-Format. Der Content sollte deshalb das ganze Erlebnis zeigen, Auftragen, Tragen über Nacht und Ergebnis, und zugleich erklären, was die Maske bewirkt. Die Kollagenmaske von Medicube ist ein virales Produkt, der Content musste sich also in einem vollen Feed abheben. Das Briefing verlangte eine vollständige, befriedigende Vorführung vom Auftragen bis zum Reveal, eine klare Erklärung, wann und warum man die Maske verwendet, und ein Glass-Skin-Ergebnis, das stark genug ist, um das Scrollen zu stoppen.",
    "approach": "Melani Seiffert beginnt mit ihrer „spiegelglatt strahlenden Haut“ und zeigt dann, wie die Maske als letzter Schritt ihrer Routine mit dem Pinsel aufgetragen wird. Texteinblendungen erklären, dass sie nach der Hautpflege aufgetragen wird, um über Nacht alles einzuschließen, und dass sie Kollagenextrakt und Hyaluronsäure enthält, die helfen, die Elastizität zu verbessern und die Haut intensiv mit Feuchtigkeit zu versorgen. Das Video endet mit dem befriedigenden Abziehen der Maske und Nahaufnahmen von frischer, glasartig wirkender Haut.",
    "outcome": "Medicube erhielt eine vollständige Vorführung eines Hero-Produkts, mit klarer Erklärung und einem Reveal, das sich sehr gut zum Teilen eignet. Sie funktioniert als organischer Discovery-Content und als Performance-Creative für Hautpflege-Käufer."
  },
  "celimax-campaign": {
    "title": "Celimax Creator-Kampagne",
    "summary": "Ein präzises Anwendungs-Tutorial für den Retinal Shot von Celimax, zugeordnet zu Augenringen, feinen Linien und ungleichmäßigem Hautton.",
    "brief": "Retinal kann einschüchternd wirken. Celimax brauchte deshalb Content, der genau zeigt, wo und wie man es anwendet. Ziel war eine klare, am Nutzen orientierte Vorführung für Zuschauer, die sich um dunkle Flecken, feine Linien und einen ungleichmäßigen Hautton sorgen. Viele Zuschauer sind neugierig auf Retinal, aber unsicher, wie und wo sie es verwenden sollen. Das Briefing verlangte eine präzise Vorführung, die Berührungsängste nimmt, genau zeigt, wo das Produkt aufgetragen wird, den Nutzen für jede Zone benennt und Celimax als einfachen Einstieg in die Hautpflege mit Retinal positioniert.",
    "approach": "Loresa Konushevci tupft den Celimax Retinal Shot auf die Bereiche, für die er gedacht ist, unter den Augen, entlang der Lachfalten und über die Stirn, während Texteinblendungen jeden Nutzen benennen: hellt Augenringe auf, reduziert feine Linien, für glattere und straffere Haut. Anschließend massiert sie das Produkt ein und zeigt, dass eine kleine Menge für das ganze Gesicht reicht. Die leuchtend gelben Punkte machen die Technik leicht nachzumachen.",
    "outcome": "Celimax erhielt ein Anleitungsvideo, das bei der Anwendung von Retinal das Rätselraten nimmt und jede Stelle mit einem Nutzen verknüpft. Es funktioniert als Aufklärung für neue Anwender und als klares, conversionfreundliches Paid Asset."
  },
  "abib-campaign": {
    "title": "Abib Creator-Kampagne",
    "summary": "Ein Tag, an dem der Sonnenschutz mit dem Airy Sunstick von Abib immer wieder aufgefrischt wird, vom Park bis ins Auto.",
    "brief": "Die meisten Menschen tragen Sonnenschutz einmal auf und vergessen das Nachcremen. Abib wollte zeigen, dass sein Airy Sunstick das Nachlegen schnell und einfach macht, egal wo man ist, und den Anhänger mit UV-Indikator vorstellen, der seine Farbe ändert, wenn die UV-Werte steigen. Der Content sollte sich wie ein echter Tag draußen anfühlen, zeigen, wie der Stick ohne weißen Film über das Gesicht gleitet, und den Farbwechsel des Anhängers auf einen Blick verständlich machen.",
    "approach": "Beatrix Ramosaj folgt dem UV-Index durch ihren Tag. Draußen bei stärkster Sonne färbt sich der Anhänger tiefrot, und sie legt in Sekunden nach: Mit dem C-förmigen Stick deckt sie größere Flächen und die Konturen ihres Gesichts schnell ab. Später im Auto trägt sie erneut auf, während der UV-Wert sinkt. Einblendungen im Bild verfolgen den Index, und das Finish bleibt klar und natürlich.",
    "outcome": "Abib erhielt ein praktisches, erzählerisches Creator-Video, das aus dem Nachcremen eine einfache Gewohnheit macht und den Anhänger mit UV-Indikator zum Hook erhebt. Es funktioniert als Discovery-Content für Käufer von Sonnenpflege und als klare Produktvorführung für Paid Social."
  },
  "axis-y-campaign": {
    "title": "AXIS-Y Creator-Kampagne",
    "summary": "Eine Lippenpflege-Routine, die die Lip Oils von AXIS-Y vorstellt, von den Swatches bis zum glänzenden, gepflegten Finish.",
    "brief": "AXIS-Y ist für seine Hautpflege bekannt, und die Lip Oils der Marke bringen denselben Ansatz, bei dem die Pflege an erster Stelle steht, auf die Lippen. Das Briefing lautete, die Öle zugleich als Pflege und als Finish zu zeigen: wie die Farbtöne aussehen, wie die Textur beim Auftragen gleitet und wie die Lippen danach aussehen. Der Content sollte sich wie ein natürlicher Teil einer Beauty-Routine anfühlen, die Fläschchen klar im Bild halten und zu einem anspruchsvollen Beauty-Publikum auf Instagram und TikTok passen.",
    "approach": "Sadaf Torabi hält zu Beginn die Lip Oils nebeneinander hoch, sodass jeder Farbton gut zu sehen ist, und trägt sie dann nacheinander in Nahaufnahme auf. Die Kamera bleibt dicht am abgeschrägten Applikator und an den Lippen, sodass Zuschauer die Textur und das glänzende, durchfeuchtete Finish verfolgen können, bevor sie mit dem fertigen Look abschließt.",
    "outcome": "AXIS-Y erhielt ein hochwertiges, produktorientiertes Beauty-Video, das Farbtöne, Textur und Finish der Lip Oils in weniger als zwanzig Sekunden zeigt. Es funktioniert als organischer Discovery-Content und als klares Asset für Paid Social rund um Lippenpflege."
  },
  "arencia-campaign": {
    "title": "Arencia Creator-Kampagne",
    "summary": "Ein Leitfaden nach Hautanliegen, der jeden Arencia Booster Shot dem Hautthema zuordnet, für das er gedacht ist.",
    "brief": "Arencia bietet mehrere Booster Shots mit unterschiedlichen Wirkstoffen an, Käufer brauchen also Hilfe bei der Auswahl. Das Briefing lautete, die Linie klar zu erklären und jedes Produkt wie die Antwort auf ein bestimmtes Anliegen wirken zu lassen. Die Booster-Linie von Arencia enthält verschiedene Wirkstoffe für verschiedene Bedürfnisse, was neue Kunden verwirren kann. Das Briefing lautete, die Linie leicht überschaubar zu machen, jedes Produkt mit einem sichtbaren Anliegen zu verknüpfen und ein zeitloses Asset zum Speichern zu schaffen, das die Aufgabe eines Produktfinders übernimmt.",
    "approach": "Aurela Elshani baut das Video wie eine visuelle Übersicht auf. Zu jedem Anliegen zeigt sie eine Nahaufnahme der Stelle und trägt dann den passenden Booster auf, während Einblendungen im Bild beides zuordnen: Halsfalten mit NAD+, geschlossene Komedonen mit Glykolsäure, erschlaffende Haut unter den Augen mit Retinal und Lachfalten mit PDRN. Eingeblendete Nahaufnahmen des Anliegens und das Auftragen Punkt für Punkt machen jeden Schritt sofort verständlich.",
    "outcome": "Arencia erhielt ein erklärendes Video, das sich sehr gut zum Speichern eignet und die gesamte Linie verkauft, indem es Zuschauern hilft, selbst das richtige Produkt auszuwählen. Es funktioniert sowohl als Discovery-Content als auch als Performance-Asset, das auf bestimmte Hautanliegen ausgerichtet ist."
  },
  "lilyeve-campaign": {
    "title": "Lilyeve Creator-Kampagne",
    "summary": "Content zur Kopfhautpflege, der zeigt, wie sich die GROW:TURN Pink Collagen Capsule Ampoule von Lilyeve in eine Haarroutine einfügt.",
    "brief": "Kollagen ist ein vertrauter Inhaltsstoff in der Hautpflege, für das Haar aber eine neue Idee. Lilyeve brauchte Content, der Kopfhautpflege einfach und begehrenswert wirken lässt und zeigt, was man davon hat: gesünder aussehendes, glänzenderes Haar. Das Publikum investiert bereits in Hautpflege, behandelt Haarpflege aber oft als Nebensache. Lilyeve wollte die GROW:TURN Pink Collagen Capsule Ampoule als einfaches, angenehmes Ritual vorstellen, zeigen, wie die Kapseltextur und der Pinselapplikator funktionieren, und die Routine mit einem sichtbaren Ergebnis verbinden, das sich Zuschauer für sich selbst wünschen.",
    "approach": "Albina Mavriqi beginnt mit einer Nahaufnahme des Applikatorpinsels, der die Ampulle direkt auf ihre Kopfhaut abgibt, und zeigt so, wie einfach das funktioniert. Dann schneidet das Video zum Reveal, langem, seidigem Haar „wie Glas“, und endet mit der GROW:TURN Pink Collagen Capsule Ampoule und ihrem Namen im Bild. Der Aufbau aus vor der Routine und nach der Routine verknüpft das Produkt in Sekunden mit dem Ergebnis.",
    "outcome": "Lilyeve erhielt Content, der eine neue Kategorie, Kollagen für das Haar, über eine klare Vorführung und ein inspirierendes Ergebnis einführt. Er funktioniert als Aufklärung für neue Zielgruppen und als starkes visuelles Asset für Paid Social."
  },
  "dr-althea-campaign": {
    "title": "Dr. Althea Creator-Kampagne",
    "summary": "Ein Glass-Skin-Moment mit Fokus auf Feuchtigkeit, mit dem Aqua Marine Jelly Mist von Dr. Althea.",
    "brief": "Dr. Althea wollte seinen Gesichtsnebel als schnellen Feuchtigkeitskick zeigen, der ein frisches, taufrisches Finish hinterlässt. Gesichtssprays können wie ein optionales Extra wirken. Das Briefing lautete daher, den Aqua Marine Jelly Mist wie einen unverzichtbaren Feuchtigkeitsschritt wirken zu lassen. Der Content brauchte einen starken visuellen Hook, ein klares Glow-Ergebnis und einen trendbewussten Ton, der sich natürlich in Kurzvideo-Plattformen einfügt.",
    "approach": "Khutjo Matsoma verwendet den Mist in einer Reihe langsamer Nahaufnahmen, die den feinen Sprühnebel und die strahlende Haut danach einfangen. Die Einblendung „facemistmaxxing“ sorgt für einen verspielten, trendbewussten Ton, während das Licht ihren frischen Glass-Skin-Glow betont.",
    "outcome": "Dr. Althea erhielt ein visuell auffälliges, trendorientiertes Video, das Feuchtigkeit und Glow in Sekunden vermittelt. Es funktioniert für organische Reichweite und als aufmerksamkeitsstarkes Paid Creative."
  },
  "torriden-campaign": {
    "title": "Torriden Creator-Kampagne",
    "summary": "Eine Geschichte über straffende Hautpflege für die Cellmazing Low Molecular Collagen Firming Cream von Torriden, von der Textur bis zum prallen Ergebnis.",
    "brief": "Kollagencremes gelten oft als schwer. Torriden wollte zeigen, dass sich seine Cellmazing Firming Cream leicht anfühlt und zugleich für ein strafferes, pralleres Aussehen sorgt. Torriden wollte seine straffende Linie bei Käufern bekannter machen, die bereits die feuchtigkeitsspendenden Bestseller der Marke kennen. Das Briefing verlangte Content, der einen verbreiteten Einwand gegen Kollagencremes aufgreift, die Formel in einfachen Worten erklärt und zu einem klaren, nachverfolgbaren Angebot führt.",
    "approach": "Albina Mavriqi beginnt mit „Wenn deine Haut ihre Spannkraft verliert …“ und drückt auf ihre Wange, um das Anliegen greifbar zu machen. Sie entnimmt die Creme, dazu die Einblendung „Kollagencremes sind meist schwer, aber diese zieht ein wie eine Feuchtigkeitscreme“, und listet die wichtigsten Inhaltsstoffe im Bild auf: niedermolekulares 5D-Kollagen, Peptide für Elastizität und Hyaluronsäure für Feuchtigkeit. Sie massiert die Creme ein und endet mit einem strahlenden, prallen Ergebnis, beschrieben als glatter wirkende Linien sowie Feuchtigkeit und Festigkeit in einem Schritt.",
    "outcome": "Torriden erhielt auf Inhaltsstoffe ausgerichteten Creator-Content, der einen verbreiteten Einwand entkräftet und ein klares Ergebnis zeigt. Zusammen mit ihrem Rabattcode funktioniert er sowohl als Aufklärung als auch als auf Conversion ausgerichtetes Asset."
  },
  "beauty-of-joseon-campaign": {
    "title": "Beauty of Joseon Creator-Kampagne",
    "summary": "Ein Sieben-Tage-Tagebuch für die Augenpartie mit dem Revive Eye Serum und dem Revive Under Eye Patch von Beauty of Joseon mit Ginseng und Retinal.",
    "brief": "Beauty of Joseon wollte sein Retinal-Duo für die Augenpartie über einen längeren Zeitraum zeigen und nicht nach einer einzigen Anwendung. Der Content sollte Vertrauen durch Konsequenz und ein sichtbares Vorher-Nachher aufbauen. Käufer von Augenpflege sind skeptisch gegenüber schnellen Lösungen. Das Briefing lautete daher, Glaubwürdigkeit durch Konsequenz statt durch Versprechen aufzubauen. Der Content sollte beide Produkte gemeinsam in der Anwendung zeigen, den Verlauf über mehrere Tage dokumentieren und den Vergleich so einfach machen, dass sich Zuschauer selbst ein Urteil bilden können.",
    "approach": "Saranda Mavriqi beginnt mit einem Vorher-Nachher im Splitscreen und dokumentiert dann ihre Routine Tag für Tag. Sie stellt den Revive Under Eye Patch (Ginseng + Retinal) und das Revive Eye Serum vor und trägt Patches und Serum unter dem Auge auf, mit den Einblendungen Tag 1, Tag 3, Tag 5 und Tag 7 im Bild. Enge, gut ausgeleuchtete Nahaufnahmen machen die Partie leicht vergleichbar, und das Video endet mit der Vorher-Aufnahme, damit Zuschauer die Veränderung selbst beurteilen können.",
    "outcome": "Beauty of Joseon erhielt Content im Tagebuchstil, der zwei Produkte in einer glaubwürdigen Routine verbindet und sie in der Anwendung über mehrere Tage zeigt. Er funktioniert als organischer Content, der Vertrauen aufbaut, und als überzeugendes Paid Asset für Käufer von Augenpflege."
  },
  "frankly-campaign": {
    "title": "Frankly Creator-Kampagne",
    "summary": "Eine Glass-Skin-Routine für ein porenloses Hautbild, im Mittelpunkt ein paar Tropfen des Closer Serum von Frankly.",
    "brief": "Frankly wollte zeigen, wie sein Closer Serum bei sichtbaren Poren und unebener Hautstruktur ansetzt, mit einem Ergebnis, das Zuschauer vor der Kamera klar sehen können. Frankly ist für viele Zuschauer ein neuerer Name, der Content musste also einen starken ersten Eindruck hinterlassen. Das Briefing lautete, das Closer Serum mit einem konkreten, nachvollziehbaren Anliegen zu verknüpfen, Poren und unebene Hautstruktur, und innerhalb eines kurzen Videos eine sichtbare Verbesserung des Finishs zu zeigen.",
    "approach": "Khutjo Matsoma beginnt mit dem Ziel, „porenlose Glass Skin“, und zeigt dann extreme Nahaufnahmen von Hautstruktur und Poren, um die Ausgangslage zu zeigen. Sie trägt ein paar Tropfen Frankly Closer Serum aus der Pipette auf, drückt es in die Haut ein und endet mit strahlenden, ebenmäßig wirkenden Nahaufnahmen. Warmes Licht und langsame, bewusste Bewegungen betonen das glatte, glasartige Finish.",
    "outcome": "Frankly erhielt eine klare, ergebnisorientierte Serum-Vorführung mit starker visueller Wirkung. Sie funktioniert als organischer Content für Khutjos Hautpflege-Publikum und als Paid Creative für Zuschauer, die Poren und Hautstruktur beschäftigen."
  },
  "biodance-campaign": {
    "title": "Biodance Creator-Kampagne",
    "summary": "Eine Day-in-the-Life-Geschichte, die zeigt, wie der Glow der Overnight-Maske von Biodance anhält, aufgefrischt mit dem Caviar PDRN Jelly Serum Mist.",
    "brief": "Biodance wollte die Idee eines lang anhaltenden „24-Stunden-Masken-Glows“ verkaufen. Der Content sollte beide Produkte im Kontext zeigen: die Overnight-Maske zu Hause und den Serum Mist als schnelle Auffrischung über den folgenden Tag hinweg. Biodance ist vor allem für seine Overnight-Tuchmasken bekannt, und das Briefing lautete, diese Bekanntheit auf den Caviar PDRN Jelly Serum Mist auszuweiten. Der Content sollte die beiden Produkte als System präsentieren, vermitteln, wie lange der Glow anhält, und das in einem inspirierenden Lifestyle-Format tun statt in einer statischen Produktdemo.",
    "approach": "Beatrix Ramosaj baut die Geschichte um eine Uhr herum auf. Zeitstempel laufen von 20 Uhr, wenn sie die Maske im Bett aufträgt, über ihren Abend zu Hause bis zum nächsten Nachmittag am Laptop, im Freien und unterwegs. Zu jedem Zeitpunkt greift sie zum Caviar PDRN Jelly Serum Mist, sodass Zuschauer sehen, wie der Glow im echten Leben erhalten bleibt. Warme Innenräume und sonnige Außenaufnahmen halten das Video inspirierend und zugleich nahbar.",
    "outcome": "Biodance erhielt lifestyleorientierten Content, der zwei Produkte und ein klares Anwendungsmuster zeigt, drei Stunden in der Nacht und drei Sekunden, um den Glow zu erhalten. Das erzählerische Format hält die Aufmerksamkeit und gibt der Marke ein vielseitiges Asset für die organische und die bezahlte Nutzung."
  },
  "skin1004-campaign": {
    "title": "SKIN1004 Creator-Kampagne",
    "summary": "Ein Video zur täglichen Routine mit dem Azelaic Acid 10% von SKIN1004, erzählt aus Antons eigener Erfahrung mit zu Akne neigender Haut.",
    "brief": "SKIN1004 wollte sein Azelaic Acid 10% Zuschauern vorstellen, die mit Unreinheiten, Rötungen und Aknemalen zu tun haben. Azelainsäure ist wirksam, vielen Menschen aber noch wenig vertraut. Das Briefing verlangte daher einen Creator, der aus eigener Erfahrung sprechen und in einfachen Worten erklären kann, was der Inhaltsstoff bewirkt und wie er in eine tägliche Routine passt. Der Content sollte ehrlich und beruhigend statt klinisch sein, jeden Nutzen im Bild benennen und die Flasche so klar zeigen, dass Zuschauer sie wiederfinden.",
    "approach": "Anton Drozhzhin, der offen über seine eigene Akne gesprochen hat, präsentiert das Serum als den Inhaltsstoff, den er gern früher gekannt hätte. Das Video führt in kurzen, klaren Einstellungen durch seine Routine: Tropfen auf Stirn und Wangen, die Textur auf dem Handrücken und das Serum, das in die Haut eingedrückt wird. Texteinblendungen verknüpfen jeden Schritt mit einem Nutzen (täglich 10 % Azelainsäure, überschüssigen Talg kontrollieren, Rötungen beruhigen), bevor eine Nahaufnahme der Flasche und ein letzter Blick auf seine ruhige, ebenmäßige Haut folgen.",
    "outcome": "SKIN1004 erhielt ein persönliches, erklärendes Creator-Video, das einen weniger bekannten Wirkstoff in wenigen Sekunden erklärt und das Produkt durchgehend im Bild hält. Es eignet sich für organische Discovery bei Zielgruppen mit zu Akne neigender Haut und lässt sich als Performance-Creative mit Fokus auf Rötungen und Aknemale wiederverwenden."
  },
  "rejuran-jay": {
    "title": "Rejuran × Jay Sadiq",
    "summary": "Jay Sadiq testet Pore Tightening Pad & Ampoule von Rejuran in einer Porenpflege-Routine für den Sommer.",
    "brief": "Porenpflege ist ein verbreitetes Anliegen, besonders im Sommer. Jay zeigt, wie Pore Tightening Pad & Ampoule von Rejuran funktionieren, und hebt ihre porenverfeinernden Vorzüge durch die Anwendung und durch Vorher-Nachher-Vergleiche hervor.",
    "approach": "Der Film beginnt mit der Produktvorstellung: Jay hält die Pads in der Hand, dazu die Einblendung „Das sind Pore Tightening Pad & Ampoule von Rejuran, entwickelt für die Porenpflege im Sommer“. Er wischt mit einem Pad über seine Haut, legt die Pads als kühlende Maske auf Nase und Wangen und verwendet anschließend die Ampulle. Texteinblendungen erklären jeden Schritt, bevor das Reel zu einem Vergleich aus „Vorher“ und „Nachher“ schneidet.",
    "outcome": "Eine Schritt-für-Schritt-Routine mit klaren Produktaufnahmen und einem Vorher-Nachher, das Zuschauer selbst beurteilen können."
  },
  "eclado-loresa": {
    "title": "ECLADO × Loresa Konushevci",
    "summary": "Loresa Konushevci zeigt das RF-Gerät CELVIX PRO von ECLADO für zu Hause, kombiniert mit der EXO FILAGEN CREAM, vom ersten Auftragen bis zum fertigen Glow.",
    "brief": "Ein Beauty-Gerät für zu Hause muss man im Einsatz sehen: wie es gehalten wird, wie es gleitet und wie die Haut danach aussieht. Dieses Reel stellt das CELVIX PRO von ECLADO vor, in der Caption als RF-Gerät für zu Hause für straffer und konturierter wirkende Haut beschrieben, zusammen mit der EXO FILAGEN CREAM, die für ein sanftes Gleiten sorgt.",
    "approach": "Loresa beginnt mit einer Nahaufnahme ihrer ungeschminkten Haut mit der Einblendung „Vorher“, trägt die EXO FILAGEN CREAM auf und führt das Gerät dann über Wange und Kieferpartie. Texteinblendungen begleiten jede Phase, Aufnahme fördern, Lifting und Konturierung, Pflege für mehr Glow, bevor das Reel mit einer „Nachher“-Aufnahme von durchfeuchtet und strahlend wirkender Haut endet.",
    "outcome": "Eine klare Gerätevorführung Schritt für Schritt in Loresas eigenem ruhigem Stil mit Nahaufnahmen, bei der Gerät und Creme durchgehend im Bild bleiben."
  },
  "too-faced-melly": {
    "title": "Too Faced × Melly Sanchez",
    "summary": "Melly Sanchez macht sich in einem Get-ready-with-me-Reel ganz in Pink für ein Event von Too Faced fertig.",
    "brief": "Event-Content funktioniert am besten, wenn die Zuschauer das Gefühl haben, bei den Vorbereitungen dabei zu sein. Mellys Caption gibt den Rahmen vor: „get dressed with me for a Too Faced event“.",
    "approach": "Melly hält zu Beginn das zartrosa Kleid hoch, für das sie sich entschieden hat, und stellt den Look dann Stück für Stück zusammen. Sie zeigt Schuhe, Schmuck und Details in die Kamera, bevor sie im fertigen Outfit den Flur entlanggeht.",
    "outcome": "Ein modeorientiertes Get-ready-with-me, das die Stimmung des Too Faced Events zu Mellys Community bringt."
  },
  "vt-cosmetics-anton": {
    "title": "VT Cosmetics × Anton Drozhzhin",
    "summary": "Anton Drozhzhin stellt die vibrierende Augencreme von VT Cosmetics als ein Stück koreanische Skincare-Technologie vor.",
    "brief": "Eine Augencreme mit integriertem vibrierendem Applikator lässt sich leichter zeigen als beschreiben. Dieses Reel präsentiert die vibrierende Augencreme von VT Cosmetics anhand von Antons eigener Routine.",
    "approach": "Anton beginnt mit dem Applikator in der Hand und zeigt dann die vibrierende Spitze in Nahaufnahme, dazu die Einblendung „Vibrating eye cream“. Er arbeitet die Creme unter beiden Augen und rund um die Augenpartie ein, kurze Einblendungen nennen die im Video gezeigten Vorteile. Zum Schluss ist der Applikator noch einmal im Einsatz zu sehen.",
    "outcome": "Eine Demonstration der Produkttechnologie, bei der Gerät, Textur und Anwendung aus nächster Nähe gezeigt werden."
  },
  "vichy-dariia": {
    "title": "Vichy × Dariia Bordun",
    "summary": "Dariia Bordun schminkt Schritt für Schritt einen alltagstauglichen No-Makeup-Makeup-Look und beginnt dabei mit Hautpflege von Vichy.",
    "brief": "Ein No-Makeup-Look beginnt bei der Haut. Dieses Reel trägt im Bild den Titel „everyday no makeup makeup step by step tutorial“ und startet mit Vichy, bevor überhaupt Make-up aufgetragen wird.",
    "approach": "Dariia beginnt mit den Augenbrauen, trägt dann ihre Hautpflege von Vichy auf und drückt sie mit den Händen sanft in die Haut. Es folgen eine leichte Grundierung, die sie mit einem Schwämmchen verblendet, Liner und Gloss. Jeder Schritt bleibt kurz und leicht nachzumachen, am Ende steht ein frischer, natürlicher Look.",
    "outcome": "Ein praktisches Tutorial für den Alltag, in dem Hautpflege als erster Schritt der Routine gezeigt wird."
  },
  "iunik-khutjo": {
    "title": "IUNIK × Khutjo Matsoma",
    "summary": "Khutjo Matsoma präsentiert das Beta-Glucan Power Moisture Serum von IUNIK als „skin drink“ für ein taufrisches Glass-Skin-Finish.",
    "brief": "Feuchtigkeit versteht man am leichtesten, wenn man sie sieht. Dieses Reel inszeniert das Beta-Glucan Power Moisture Serum von IUNIK als einen Schluck Wasser für die Haut, eine einfache Idee, die sich durch das ganze Video zieht.",
    "approach": "Khutjo hält zu Beginn ein Glas Wasser in der Hand und wechselt dann zum Serum, dazu die Einblendung „SKIN DRINK SERUM!“. Sie trägt es mit der Pipette auf, drückt es mit den Fingerspitzen ein und dreht sich ins Licht, um das taufrische Finish zu zeigen. Kurze Einblendungen nennen die Punkte, die sie an der Formel hervorhebt, und das Reel endet mit dem Fläschchen neben ihrer strahlenden Haut.",
    "outcome": "Ein einfaches, einprägsames Konzept, getragen von der Anwendung in Nahaufnahme und einem glänzenden Glass-Skin-Finish."
  },
  "patrick-ta-beatrix": {
    "title": "Patrick Ta × Beatrix Ramosaj",
    "summary": "Beatrix Ramosaj kreiert mit der neuen Blush-Kollektion von Patrick Ta einen sanften „transition blush“-Look und teilt ihn noch vor dem Launch.",
    "brief": "Der Launch von Patrick Ta, in der Caption als „The Evolution of Blush“ vorgestellt, dreht sich um Blush, der von der Partie unter den Augen in die Wangen übergeht. Beatrix teilt die Kollektion einen Tag vor dem Launch und zeigt, wie Platzierung und Texturen zusammenspielen.",
    "approach": "Beatrix setzt die Farbe direkt unter dem Auge, solange sie noch feucht ist, tupft, statt zu ziehen, und verblendet sie nach außen. Danach greift sie zum Blurring-Blush-Duo und schließt auf den Wangenäpfeln ab. Einblendungen erklären jeden Schritt, und das Reel endet mit dem fertigen, zarten Editorial-Blush und den Produkten in der Hand.",
    "outcome": "Ein Look im Tutorial-Format, dem die Zuschauer Schritt für Schritt folgen können, dazu Beatrix’ eigene Beschreibung der Kollektion als sanft, romantisch und jeden Tag tragbar."
  },
  "k-secret-aiym": {
    "title": "K-SECRET × Aiym Kablan",
    "summary": "Aiym Kablan baut die SEOUL 1988 Eye Cream von K-SECRET in ihre morgendliche Glow-Routine ein.",
    "brief": "Die Augencreme gerät in der Morgenroutine leicht in Vergessenheit. Dieses Reel begleitet Aiym durch ihre Routine und zeigt, an welcher Stelle die SEOUL 1988 Eye Cream von K-SECRET ihren Platz hat.",
    "approach": "Aiym geht durch ihren Morgen, mit Zahnseide, Zähneputzen und Reinigung, und Einblendungen benennen jeden Schritt. Ein Text im Bild erklärt, warum sie für die empfindliche Augenpartie eine eigene Augencreme wählt. Sie trägt kleine Punkte der SEOUL 1988 Eye Cream rund um die Augen auf, bevor das Reel mit „Enjoy the results“ endet.",
    "outcome": "Ein nahbares Morgenroutine-Format, das der Augencreme einen klaren Platz und Zweck gibt."
  },
  "lashify-dariia": {
    "title": "Lashify × Dariia Bordun",
    "summary": "Dariia Bordun testet die cremigen Nude-Lipliner von Lashify auf Verblendbarkeit und Wischfestigkeit, inklusive Wassertest vor der Kamera.",
    "brief": "Lipliner werden an zwei Dingen gemessen: wie sie sich verblenden lassen und wie lange sie halten. Dariias Reel mit der Caption „creamy nude lipliners that blend perfectly and won’t smudge“ stellt beides auf die Probe.",
    "approach": "Dariia beginnt mit „Waterproof lip liner???“ und einem Glas Wasser, swatcht die Farbtöne auf ihrer Hand und umrandet und füllt dann ihre Lippen mit jedem einzelnen. Die Farbtöne Nude Taupe, Nude Plum und Nude Rouge werden im Bild genannt. Zum Schluss gießt sie Wasser über ihre Lippen, um zu zeigen, dass der Liner an Ort und Stelle bleibt.",
    "outcome": "Eine Review im Demonstrationsformat, die die Farbpalette zeigt und das Produktversprechen einem sichtbaren Test unterzieht."
  },
  "first-aid-beauty-albulena": {
    "title": "First Aid Beauty × Albulena Mavriqi",
    "summary": "Albulena Mavriqi zeigt, wie Foundation auf mit First Aid Beauty vorbereiteter Haut sitzt, mit der Caption „Good skin = flawless makeup“.",
    "brief": "Make-up sitzt besser auf gut vorbereiteter Haut. Dieses Reel verbindet beides und zeigt Foundation auf Haut, die mit First Aid Beauty gepflegt wurde.",
    "approach": "In engen Nahaufnahmen rund um Mund und Kinn trägt Albulena Foundation mit einem Spatel auf, verblendet sie mit einem Schwämmchen und zeigt das Finish im direkten Vergleich nebeneinander. Das Reel endet mit dem Tiegel von First Aid Beauty in der Hand.",
    "outcome": "Ein texturbetontes Makro-Video, das ein Hautpflegeprodukt mit einem ebenmäßigen Make-up-Finish verknüpft."
  },
  "meditherapy-aurela": {
    "title": "Meditherapy × Aurela Elshani",
    "summary": "Aurela Elshani begleitet das Hyaluronic Skin Booster First Serum von Meditherapy vierzehn Tage lang in Nahaufnahme.",
    "brief": "Ein feuchtigkeitsspendendes Serum zeigt man am besten über einen längeren Zeitraum. In diesem Reel erweckt Aurela das Hyaluronic Skin Booster First Serum mit Nahaufnahmen der Anwendung und Hautvergleichen zum Leben und stellt dabei die feuchtigkeitsspendenden Eigenschaften und das Erscheinungsbild glatterer, prallerer Haut heraus.",
    "approach": "Das Video beginnt mit einer Nahaufnahme feiner Linien auf der Stirn und begleitet Aurela dann beim Auftragen des Serums, mit Tagesmarkierungen im Bild: Day 1, Day 3, Day 7, Day 10 und Day 14. Der Bildausschnitt bleibt durchgehend eng auf derselben Partie, sodass die Zuschauer die Textur selbst vergleichen können. Am Ende hält Aurela das Fläschchen in der Hand.",
    "outcome": "Ein Nahaufnahme-Format im Tagebuchstil, das Produkt und Haut in jeder Einstellung in den Mittelpunkt stellt."
  },
  "arencia-albina": {
    "title": "Arencia × Albina Mavriqi",
    "summary": "Albina Mavriqi zeigt den NAD+ Booster Shot von Arencia in einer Nahaufnahme-Routine für die Partie unter den Augen und die Wange.",
    "brief": "Die Pflege der Partie unter den Augen verlangt Präzision. Dieses Reel beginnt mit „POV: your skin needs NAD+“ und stellt den NAD+ Booster Shot von Arencia vor, wobei Einblendungen auf feine Linien und Falten als Schwerpunkt verweisen.",
    "approach": "Albina tupft die fliederfarbene Formel unter das Auge und auf die Wange und streicht sie dann mit einem Gesichtstool ein. Makroaufnahmen zeigen die Textur auf ihrer Haut, und die Tube ist deutlich zu sehen, bevor das Reel mit einer weiter gefassten Einstellung ihres strahlenden, gut durchfeuchtet wirkenden Teints endet.",
    "outcome": "Ein hochwertiges, detailgenaues Anwendungsvideo, in dem Produktname und Textur gleichermaßen leicht wiederzuerkennen sind."
  },
  "revcell-loresa": {
    "title": "REVCELL × Loresa Konushevci",
    "summary": "Loresa Konushevci macht aus ihrer REVCELL Routine einen Spa-Tag zu Hause, vom Vita Collagen Activfilm bis zum sofortigen Glow.",
    "brief": "Eine Routine mit mehreren Schritten braucht eine Geschichte, die sie zusammenhält. Loresa inszeniert ihre REVCELL Routine als Spa-Tag zu Hause, mit der Caption „Healthy, glowing skin starts with my REVCELL routine“.",
    "approach": "Das Reel beginnt mit den Produkten, die auf einem Tablett angerichtet sind, und folgt dann jedem Schritt: Das Vita Collagen Activfilm Sheet wird auf ihr Gesicht gelegt, eine cremige Schicht aufgestrichen und ein Serum aus einem spritzenähnlichen Applikator aufgetragen. Es endet mit einer Nahaufnahme und der Einblendung „Instant glow“.",
    "outcome": "Ein Routine-Video im Lifestyle-Stil, das mehrere Produkte der Reihe nach und im Kontext zeigt."
  },
  "nyx-albulena": {
    "title": "NYX Professional Makeup × Albulena Mavriqi",
    "summary": "Albulena Mavriqi begegnet einem bekannten Problem, Augenbrauen, die nicht in Form bleiben, mit einem Brow Gel von NYX Professional Makeup.",
    "brief": "Das Reel beginnt mit einem nachvollziehbaren „POV: eyebrows keep falling?“ und präsentiert ein Brow Gel von NYX Professional Makeup als Lösung.",
    "approach": "Albulena zeigt die knallpinke Tube aus der Nähe, bürstet das Gel nach oben durch ihre Augenbrauen und endet mit ihren fixierten, angehobenen Brauen bei natürlichem Licht. Das Video ist kurz und direkt, Produkt und Brauen sind in jeder Einstellung zu sehen.",
    "outcome": "Ein schnelles Problem-Lösung-Format, das sich für Kurzvideos eignet."
  },
  "prada-beauty-rebecca": {
    "title": "Prada Beauty × Rebecca Ghaderi",
    "summary": "Rebecca Ghaderi im Pop-up zum Prada Beauty Touch Blush, fotografiert im Polka-Dot-Look vor dem pink-roten Set der Marke.",
    "brief": "Rebecca besucht das Pop-up zum Prada Beauty Touch Blush, einen Raum in Pink und Rot, der rund um den Launch gestaltet ist. Ihr Foto-Post ist hier als Slideshow aller elf Bilder zu sehen, beginnend mit dem Titelbild.",
    "approach": "Das Karussell wechselt zwischen Porträts von Rebecca in weißem Hemd und Polka-Dot-Kleid vor den Schriftzügen von Prada und Touch Blush und Details der Blush-Kompakts und des Sets. Das Titelbild zeigt sie im Pop-up, hinter ihr das Touch Blush Display.",
    "outcome": "Ein redaktionell anmutender Foto-Post rund um ein Event, bei dem Kulisse und Styling den Look der Marke tragen."
  },
  "mixsoon-dora": {
    "title": "Mixsoon × Dora Nguyen",
    "summary": "Dora Nguyen arbeitet das Bean Copper Peptide Firming Serum von Mixsoon in Lachfalten und Stirn ein, kurze Einblendungen erklären jeden Schritt.",
    "brief": "Über feine Linien spricht es sich am leichtesten, wenn man auf sie zeigen kann. Dieses Video präsentiert das Bean Copper Peptide Firming Serum von Mixsoon, in der Caption vorgestellt als Doras Weg zu „fading smile lines and forehead wrinkles“ mit einem Kupferpeptid-Serum.",
    "approach": "Dora zeigt zu Beginn auf ihre Lachfalten und ihre Stirn, dazu die Einblendung „Treat These Aging Signals Before Getting Wrinkles“, und führt dann die dehnbare Textur des Serums zwischen ihren Fingern vor. Sie trägt es aus dem Pumpspender auf Wangen, Stirn und unter den Augen auf und streicht es mit einem schmalen Gesichtstool ein. Einblendungen nennen Kupferpeptid, glatter und straffer wirkende Haut sowie Bohnenessenz für Feuchtigkeit.",
    "outcome": "Eine leicht nachvollziehbare Routine in Nahaufnahme, die das Serum und seine Textur von Anfang bis Ende im Bild behält und mit dem Flakon selbst endet."
  },
  "arencia-dora": {
    "title": "Arencia × Dora Nguyen",
    "summary": "Dora Nguyen widmet ihrem Hals eine eigene Routine mit dem NAD+ Booster Shot von Arencia, aufgetragen in einer Abfolge von Nahaufnahmen, Tag für Tag.",
    "brief": "Die Pflege des Halses kommt in der Skincare-Routine oft zu kurz. Doras Caption „Neck care routine 💜 NAD+ Booster Shot“ stellt die lavendelfarbene Booster-Tube von Arencia in den Mittelpunkt einer Routine, die eigens für den Hals gedacht ist.",
    "approach": "Das Video beginnt mit den Linien an Doras Hals und der Frage „Filler cream exists?“, dann wird die lavendelfarbene Creme aus der Tube gedrückt. Sie wickelt ihren Hals über der Creme in Frischhaltefolie und geht dann eine Abfolge Tag für Tag durch: Sie zieht Wellenlinien des Boosters über den Hals und drückt ihn mit den Fingerspitzen ein. Am Ende rahmen ihre Hände einen glatten, sanft schimmernden Hals ein.",
    "outcome": "Eine fokussierte, visuelle Routine, in der Farbe und Textur des Produkts die Geschichte tragen, vollständig in Nahaufnahme gedreht."
  },
  "axis-y-dora": {
    "title": "AXIS-Y × Dora Nguyen",
    "summary": "Dora Nguyen begleitet das Dark Spot Correcting Glow Serum von AXIS-Y in einem kurzen Hauttagebuch, Tag für Tag, mit Fokus auf Post-Akne-Male.",
    "brief": "Post-Akne-Male und ein ungleichmäßiger Hautton sind ein langwieriges Alltagsthema. Dieses Video stellt das Dark Spot Correcting Glow Serum von AXIS-Y vor. Doras Caption beschreibt es als Hilfe, um Post-Akne-Male verblassen zu lassen, einen ungleichmäßigen Hautton auszugleichen und einen gesunden Glow zurückzubringen.",
    "approach": "Dora beginnt mit einer Nahaufnahme ihrer Wange und „Fade acne & redness with just ONE product..“, hält die Tube in die Kamera und drückt das Serum dann auf ihre Haut. Einblendungen markieren jede Etappe ihres Tagebuchs mit dem, was sie hervorhebt: Antioxidantien, Beruhigung und ein ebenmäßigeres Erscheinungsbild des Hauttons, ein ruhiger, natürlicher Glow und ein leichtes, schnell einziehendes Hautgefühl. Das Video endet mit beiden Tuben, die sie neben ihr Gesicht hält.",
    "outcome": "Ein einfaches Tagebuchformat, mit dem die Zuschauer das Serum über mehrere Tage verfolgen können. Am Ende wird das Produkt im Bild genannt."
  },
  "medicube-dora": {
    "title": "Medicube × Dora Nguyen",
    "summary": "Dora Nguyen zeigt, dass die Zero Pore Pads von Medicube nicht nur fürs Gesicht gedacht sind, und verwendet sie von der Nase bis zu den Fersen.",
    "brief": "Toner-Pads sind normalerweise dem Gesicht vorbehalten. Doras Caption „Your sign to add ‚zero pore‘ toner pads to your skincare routine for clear skin“ leitet ein Video ein, das auf einer einzigen Idee aufbaut: Die Pads lassen sich fast überall verwenden.",
    "approach": "Dora beginnt mit „Reminder that you can use Zero Pore Pads anywhere“ und hält den Tiegel der Medicube Zero Pore Pads in die Kamera. Sie streicht mit einem Pad über Nase und Gesicht, während die Einblendung „Clears pores & smooths skin texture“ lautet, und geht dann zu Beinen und Achseln („Get rid of strawberry skin“), Fersen („Smooths dry heels“) und Brustbereich („Reduces chest acne“) über.",
    "outcome": "Ein schnelles, praktisches Video, das ein Produkt in mehreren Alltagsanwendungen zeigt. Der Tiegel ist gleich zu Beginn deutlich zu sehen."
  },
  "axis-y-qendresa": {
    "title": "AXIS-Y × Qendresa Konushevci",
    "summary": "Qendresa Konushevci baut eine ruhige Dark-Spot-Routine rund um Dark Spot Correcting Glow Toner und Serum von AXIS-Y auf, über mehrere Tage geschichtet.",
    "brief": "Dunkle Flecken verblassen durch Beständigkeit, nicht durch einen einzelnen Schritt. Qendresas Caption „Fade the look of dark spots and reveal your natural glow“ stellt die Dark-Spot-Serie von AXIS-Y als Teil ihrer täglichen Routine dar.",
    "approach": "Das Video beginnt mit einer Nahaufnahme unreiner Haut und der Einblendung „My life saver“ und schneidet dann zu Qendresa, die den Dark Spot Correcting Glow Toner hält. Sie drückt den Toner in die Haut, pumpt das Serum auf Wangen und unter die Augen und klopft es ein. Jede Anwendung ist an einem anderen Haarband zu erkennen. Zum Schluss hält sie den Toner und die Tube des Dark Spot Correcting Glow Serum nebeneinander.",
    "outcome": "Eine entspannte, wiederholbare Routine mit weichen, strahlenden Nahaufnahmen, in der beide AXIS-Y Produkte auf ihrer Verpackung benannt sind."
  },
  "arencia-qendresa": {
    "title": "Arencia × Qendresa Konushevci",
    "summary": "Qendresa Konushevci ordnet in einem kurzen Guide vier Booster Shots von Arencia vier Hautthemen zu, von dunklen Lippen bis zu Lachfalten.",
    "brief": "Eine Serie gezielter Booster ist leichter zu verstehen, wenn jeder einem Hautthema zugeordnet wird. Qendresas Caption „Booster shots💜🤍🩷💛“ stellt vier Tuben von Arencia in ihren jeweiligen Farben vor.",
    "approach": "Qendresa hält zu Beginn die Booster-Tuben NAD+, Eraser Shot Glycolic Acid, PDRN und Vitamin C in der Hand, dazu „Always remember...“. Einblendungen ordnen dann jedem Hautthema einen Booster zu: dunkle Lippen mit Vitamin C, rund um die Lippen getupft, Halsfalten mit NAD+, geschlossene Komedonen mit Glycolic Acid auf der Stirn und Lachfalten mit PDRN.",
    "outcome": "Ein klarer Guide nach dem Prinzip „Welcher wofür“, der jedes Produktetikett im Bild behält und den Zuschauern eine praktische Übersicht zum Speichern bietet."
  },
  "purito-qendresa": {
    "title": "Purito × Qendresa Konushevci",
    "summary": "Qendresa Konushevci stellt das Retinol Retinal 2000 NAD+ Serum von Purito vor und zeigt, wie man es schüttelt und wie es sich auftragen lässt.",
    "brief": "Retinol oder Retinal: Diese Frage stellen sich viele, die gerade erst anfangen. Qendresas Caption nennt das Retinol Retinal 2000 NAD+ Serum von Purito, und das Video beantwortet die Frage mit einem Serum, das beides kombiniert.",
    "approach": "Qendresa beginnt mit „Your skin needs Retinol or Retinal...“ über Nahaufnahmen ihrer Stirn und der Partie unter den Augen und antwortet mit „My skin both“. Sie hält das Fläschchen hoch, dazu „Shake to activate retinol AND retinal“, und trägt dann das goldfarbene Serum mit der Pipette auf dem ganzen Gesicht auf. Einblendungen nennen „Retinal + Retinol = Fast + deep care“ und eine Textur, die sich fester anfühlt, bevor sie am Ende lächelnd mit dem Fläschchen in die Kamera blickt.",
    "outcome": "Ein kurzes, informatives Video, das die Zwei-in-eins-Idee des Serums in einfachen Worten erklärt und die Anwendung mit der Pipette in Nahaufnahme zeigt."
  },
  "dr-althea-qendresa": {
    "title": "Dr. Althea × Qendresa Konushevci",
    "summary": "Qendresa Konushevci erzählt ihre Hautgeschichte, von der Akne in der Jugend bis zu ihrer heutigen Routine, mit der 345 Relief Cream von Dr. Althea.",
    "brief": "Hautgeschichten wirken am ehrlichsten, wenn sie Schritt für Schritt erzählt werden. Qendresas Caption „My skin didn’t change overnight, but every step was worth it.“ stellt die 345 Relief Cream von Dr. Althea als Teil der Routine dar, der sie heute folgt.",
    "approach": "Das Video beginnt mit Nahaufnahmen früherer Unreinheiten und einer Einblendung über ihre Akne während der gesamten Teenagerjahre und wechselt dann zu „My skin now...“. Qendresa tupft die Creme auf Stirn und Wangen, klopft sie mit den Fingerspitzen ein und streicht sie über Hals und Dekolleté. Am Ende stehen „From acne to clear skin“ und die Tube der 345 Relief Cream, die sie in die Kamera hält.",
    "outcome": "Ein persönliches, ruhig erzähltes Video, das Qendresas eigene Geschichte mit einer einfachen Anwendung verbindet und mit dem gut sichtbaren Produkt endet."
  },
  "patrick-ta-anisa": {
    "title": "Patrick Ta × Anisa Hukmova",
    "summary": "Anisa Hukmova zeigt ein Augen-Make-up-Tutorial nach dem Prinzip „beginner versus pro“ und nutzt einen Stick von Patrick Ta, um das Auge zu liften und zu definieren.",
    "brief": "Kleine Änderungen in der Technik machen beim Augen-Make-up einen großen Unterschied. Anisas Caption „Eye makeup tutorial“ markiert Patrick Ta Beauty, und das Video ist um einen direkten Vergleich „beginner ✗ / pro ✓“ aufgebaut.",
    "approach": "Anisa beginnt mit einem Smokey Eye auf der einen Seite und einem schlichteren Auge im Anfängerstil auf der anderen. Mit einem Stick von Patrick Ta zieht sie vom äußeren Augenwinkel eine helle, liftende Linie nach außen, verblendet sie mit einem Pinsel und arbeitet Lidschatten in Lidfalte und Wimpernkranz ein. Am Ende steht ein definiertes, geliftet wirkendes Auge.",
    "outcome": "Ein schnelles, leicht nachzumachendes Tutorial in Anisas Nahaufnahme-Stil, mit dem Stick von Patrick Ta gut sichtbar in der Hand."
  },
  "yesstyle-anisa": {
    "title": "YesStyle × Anisa Hukmova",
    "summary": "Anisa Hukmova teilt einen schnellen Lip-Plumping-Hack mit Produkten, die laut ihrer Caption alle von YesStyle stammen.",
    "brief": "Lip Combos gehören zu Anisas Markenzeichen. Ihre Caption stellt einen „Lip Plumping Hack“ vor, markiert Holika Holika und Kaleidos Makeup und weist darauf hin, dass alle im Video verwendeten Produkte von YesStyle stammen.",
    "approach": "Anisa beginnt mit einem Lippenstift, überzeichnet ihre Lippen mit einem braunen Liner und füllt die Form aus, trägt dann Concealer rund um die Kontur auf und verblendet mit einem Lippenpinsel. Zum Abschluss folgt eine glänzende Schicht aus einer roten Tube. Das Video endet mit vollen, glasig glänzenden Lippen und dem Gloss, den sie in die Kamera hält.",
    "outcome": "Eine Lip Combo Schritt für Schritt, der die Zuschauer in Sekunden folgen können, wobei der fertige Look und das letzte Produkt gemeinsam gezeigt werden."
  },
  "tirtir-anisa": {
    "title": "TIRTIR × Anisa Hukmova",
    "summary": "Anisa Hukmova vergleicht zwei Blush-Platzierungen, „+5Y“ und „−5Y“, und nutzt Produkte von TIRTIR für einen gelifteten, weicheren Blush-Effekt.",
    "brief": "Die Platzierung des Blush kann das ganze Gesicht verändern. Anisas Caption „+5y VS -5y with @TIRTIR Inc. from @YesStyle“ leitet einen schnellen Vergleich zwischen einer schweren, tiefen und einer gelifteten Platzierung ein.",
    "approach": "Anisa streicht den tief sitzenden, schweren Blush durch und beginnt von vorn: Ein TIRTIR Mood Glider Lip & Blush wird auf seiner Verpackung gezeigt, dann werden ein heller Concealer und ein roter Blush-Stick in einer höheren Linie von der Wange in Richtung Schläfe aufgetragen. Sie arbeitet alles mit einem Pinsel ein und hält am Ende einen TIRTIR Stick neben den fertigen, weicheren Blush.",
    "outcome": "Ein schnelles Vorher-Nachher, das die Platzierung leicht einprägsam macht, mit durchgehend sichtbarer TIRTIR Verpackung."
  },
  "dr-althea-anhelina": {
    "title": "Dr. Althea × Anhelina Andrusik",
    "summary": "Anhelina Andrusik filmt eine „glass skincare routine“ mit mehreren Pflegeschritten, darunter ein Pumpschaum von Dr. Althea und die 345 Relief Cream der Marke.",
    "brief": "Eine Glass-Skin-Routine lässt sich am leichtesten nachvollziehen, wenn jeder Schritt der Reihe nach gezeigt wird. Die Caption lädt die Zuschauer ein, das Video zu speichern, damit sie nie mehr raten müssen, welche Schritte zu befolgen sind. Die Produkte von Dr. Althea stehen neben einigen weiteren Skincare-Favoriten im Mittelpunkt der Routine.",
    "approach": "Vor einem zartrosa Hintergrund beginnt Anhelina mit einer Nahaufnahme ihrer Haut unter der Einblendung „glass skincare routine“. Sie geht jeden Schritt vor der Kamera durch, von einem Toner-Pad und einer milchigen Formel, die sie in die Handfläche gießt, bis zu einem Pumpschaum von Dr. Althea, den sie direkt auf Stirn und Wangen gibt. Dann hält sie die 345 Relief Cream hoch und schließt mit einer Strobe Cream ab, die sie über die Wangenknochen streicht.",
    "outcome": "Eine schnelle Routine zum Speichern, die mit Nahaufnahmen frischer, feucht schimmernd wirkender Haut endet, wobei jedes Produkt von Dr. Althea deutlich in die Kamera gehalten wird."
  },
  "skin1004-anhelina": {
    "title": "SKIN1004 × Anhelina Andrusik",
    "summary": "Anhelina Andrusik macht sich in ihrer neuen Wohnung fertig, mit der Madagascar Centella Ampoule von SKIN1004 als wichtigem Schritt ihrer morgendlichen Hautpflege.",
    "brief": "Ein Get-ready-with-me-Video zeigt ein Produkt als Teil einer echten Routine statt für sich allein. Das Video mit der Caption „Grwm in my new apartment“ begleitet Anhelinas Herbstmorgen, und SKIN1004 ist eine der Marken, die sie neben ihrer koreanischen Hautpflege markiert.",
    "approach": "Unter dem Titel „get ready with me in my new apartment“ geht Anhelina vom Aufwachen über die Dusche und das Anziehen bis zu ihrem Schminktisch. Dort drückt sie einen Toner in die Haut, hält dann die Madagascar Centella Ampoule von SKIN1004 hoch, zieht sie mit der Pipette auf und klopft sie ein, bevor ein Serum, Augenpads und eine getönte Lippenfarbe folgen.",
    "outcome": "Eine sanfte, ästhetische Morgenroutine, in der die Ampoule von SKIN1004 ihren eigenen Moment in Nahaufnahme bekommt und in der Anwendung gezeigt wird."
  },
  "patrick-ta-anhelina": {
    "title": "Patrick Ta × Anhelina Andrusik",
    "summary": "Anhelina Andrusik schminkt einen vom Laufsteg inspirierten Glow-Look nach, aufgebaut um das Lidschatten-Duo von Patrick Ta im Farbton „in your dreams“.",
    "brief": "Das Video, im Bild mit „Victoria’s Secret makeup tutorial“ betitelt, will einen sanften, strahlenden Laufsteg-Look nachschminken. Die Caption nennt als Geheimnis des schimmernden Lidschattens Anhelinas neues Lieblings-Lidschatten-Duo von Patrick Ta im Farbton „in your dreams“.",
    "approach": "Anhelina beginnt mit ihrem fertigen Look neben einem Referenzbild vom Laufsteg und baut das Gesicht dann Schritt für Schritt auf: Grundierung, Concealer, Contour, Puder und Highlighter. Sie hält das Duo von Patrick Ta in die Kamera, streicht den Schimmer über ihre Lider und schließt mit Mascara, Blush, Lippen und Augenbrauen ab.",
    "outcome": "Ein Full-Face-Tutorial, dem die Zuschauer von der ungeschminkten Haut bis zum fertigen Look folgen können, mit dem Duo von Patrick Ta gut sichtbar mittendrin."
  },
  "purito-anhelina": {
    "title": "Purito × Anhelina Andrusik",
    "summary": "Anhelina Andrusik probiert Hautpflege von Purito zum ersten Mal aus und bespricht jedes Produkt aus Sicht empfindlicher, öliger bis Mischhaut, die zu Akne neigt.",
    "brief": "Zuschauer mit empfindlicher Haut möchten hören, wie sich ein Produkt anfühlt, bevor sie es ausprobieren. In der Caption beschreibt Anhelina, wie sie Purito Seoul zum ersten Mal ausprobiert, als Mädchen mit empfindlicher, öliger bis Mischhaut, die zu Akne neigt, und dankt YesStyle und Purito für die Zusendung der Produkte.",
    "approach": "Anhelina spricht direkt in die Kamera, packt die Serie aus und hält die Mighty Bamboo Panthenol Cream und die Oat-in Calming Gel Cream hoch. Sie swatcht eine Creme auf dem Handrücken, trägt die Produkte beim Sprechen auf ihr Gesicht auf und endet mit dem gesamten Line-up, einschließlich des Daily Soft Touch Sunscreen, das vor ihr aufgebaut ist.",
    "outcome": "Ein ehrlicher, erzählter erster Eindruck, der jedes Produkt von Purito im Bild behält und den Zuschauern einen Eindruck von Textur und Hautgefühl vermittelt."
  },
  "abib-vania": {
    "title": "Abib × Vania Fernandes",
    "summary": "Vania Fernandes testet das Collagen eye patch (Jericho rose jelly) von Abib an einer müden Augenpartie, von der Nahaufnahme um 8 Uhr bis zum direkten Vorher-Nachher-Vergleich.",
    "brief": "Eine müde wirkende Augenpartie ist ein bekanntes Morgenproblem. In der Caption nennt Vania sie ihren größten Feind am Morgen und nimmt sich vor, die Jelly-Collagen-Augenpads von Abib zu testen, mit der Frage, ob sie einen Platz in der Routine verdienen.",
    "approach": "Vania beginnt mit einer Nahaufnahme ihrer Augenpartie mit der Einblendung „8:00 am“ und hält dann den Tiegel des Abib Collagen eye patch in die Kamera. Sie trägt die Jelly-Pads auf, dazu „wait 20-30 min“ im Bild, zieht eines ab und wechselt zu einer Einstellung mit „final result“ und einem Splitscreen mit Vorher und Nachher.",
    "outcome": "Ein kurzes, klares Test-und-Ergebnis-Format, bei dem der Tiegel und die Jelly-Textur der Pads beide in Nahaufnahme bleiben."
  },
  "fenty-skin-vania": {
    "title": "Fenty Skin × Vania Fernandes",
    "summary": "Vania Fernandes packt das Quench Kit aus der Holiday-Kollektion von Fenty Skin aus und setzt die Minis in einer schnellen Routine mit drei Schritten ein.",
    "brief": "Ein Holiday-Kit versteht man am leichtesten, wenn sein Inhalt benutzt und nicht nur gezeigt wird. In der Caption schreibt Vania, die Holiday-Kollektion von Fenty habe „understood the assignment“ und sie sei ganz verrückt nach den Minis im Quench Kit.",
    "approach": "Vania hebt das Kit aus seiner illustrierten Geschenkbox und nennt jedes Teil im Bild: den Mini Backpack, die Few N Plump Intensive Hydration Mask, die Plush Puddin’ Intensive Recovery Lip Mask und den Fat Water Hydrating Milky Toner. Dann geht sie „step 1: toner“, „step 2: leave in mask“ und „step 3: lip treatment“ durch, bevor sie die Minis wieder in den Rucksack packt.",
    "outcome": "Ein festliches Unboxing, das zugleich eine einfache Routine ist, in der jedes Produkt des Kits genannt und in der Anwendung gezeigt wird."
  },
  "skin1004-vania": {
    "title": "SKIN1004 × Vania Fernandes",
    "summary": "Vania Fernandes trägt die Probio-Cica Bakuchiol Eye Cream von SKIN1004 auf Augenringe auf, mit einem kurzen Vorher-Nachher.",
    "brief": "Augenringe gehören zu den meistgesuchten Hautpflegethemen. In der Caption schreibt Vania, sie sei ganz verrückt nach der Probio-Cica Bakuchiol Eye Cream von SKIN1004, und fragt ihre Community, ob sie einen längeren Test machen soll.",
    "approach": "Das Video beginnt mit einer engen Nahaufnahme der Partie unter ihrem Auge und der Einblendung „dark circles???“. Vania tupft die Creme direkt aus der Tube mit der Aufschrift „CENTELLA Probio-Cica Eye Cream“ auf, klopft sie mit der Fingerspitze ein und endet mit einem Vergleich von „before“ und „after“, die Tube neben ihrem Gesicht.",
    "outcome": "Eine schnelle, fokussierte Nahaufnahme, die Textur, Anwendung und Tube in wenigen Sekunden zeigt."
  },
  "medicube-vania": {
    "title": "Medicube × Vania Fernandes",
    "summary": "Vania Fernandes probiert den Medicube Booster Pro zum ersten Mal aus, kombiniert ihn mit der Collagen Jelly Cream und zeigt das Finish direkt danach.",
    "brief": "Ein Beauty-Gerät muss man im Einsatz sehen: wie es gehalten wird, wie es sich bewegt und wie die Haut danach aussieht. In der Caption heißt es bei Vania: „finally trying the viral medicube booster pro“.",
    "approach": "Vania beginnt mit der Einblendung „trying the viral medicube booster pro“, hält die Collagen Jelly Cream hoch und trägt sie auf, dann zeigt sie das Gerät in der Einstellung „booster mode: level 1“. Sie lässt es über Wange und Augenpartie gleiten, dreht sich, um jede Seite zu zeigen, und schließt mit „the finish immediately after“.",
    "outcome": "Eine klare Gerätedemonstration in Nahaufnahme, die sowohl den Booster Pro als auch die Creme von Anfang bis Ende im Bild behält."
  },
  "purito-ardita": {
    "title": "Purito × Ardita Gashi",
    "summary": "Ardita Gashi zeigt die Oat-in Calming Pflege von Purito für empfindliche Haut, vom milchigen ersten Schritt bis zur beruhigenden Gel Cream.",
    "brief": "Empfindliche, zu Akne neigende Haut verlangt nach sanften Schritten. Die Caption beschreibt dieses Reel als behutsame Pflege für diesen Hauttyp, mit „gentle cleansing, soothing hydration and barrier care“ aus der Oat-in Calming Serie von Purito Seoul.",
    "approach": "Ardita gießt eine milchige Formel aus einer weißen Flasche von Purito über Wange, Hand und Schlüsselbein, hält dann die Oat-in Calming Gel Cream hoch, gibt sie auf ihren Handrücken und drückt sie sanft in die Haut. Das Reel endet mit offenem Haar und einem frischen, feucht schimmernden Finish.",
    "outcome": "Eine kurze, sinnliche Routine, die beide Produkte im Bild behält und die Texturen für sich sprechen lässt."
  },
  "abib-ardita": {
    "title": "Abib × Ardita Gashi",
    "summary": "Ardita Gashi schenkt ihrer Augenpartie mit dem Collagen eye patch von Abib besondere Aufmerksamkeit, bevor eine glatte Make-up-Basis folgt.",
    "brief": "Die Caption stellt dies als Schritt für Fältchen unter den Augen dar, „giving this step the attention it deserves“, und markiert Abib zusammen mit den Hashtags Iron Patch und Collagen.",
    "approach": "Ardita beginnt mit einer Nahaufnahme der Partie unter ihrem Auge und „My under-eye creases keep getting more noticeable“ und bereitet die Partie dann vor, während „This Iron Patch helps smooth the look of fine lines“ im Bild erscheint. Sie geht zu Concealer und Foundation über, zeigt eine Nahaufnahme mit „After“ und hält am Ende den Tiegel des Abib Collagen eye patch in die Kamera.",
    "outcome": "Eine kurze Geschichte von der Vorbereitung bis zum Make-up, die Hautpflege mit einer glatter wirkenden Basis verknüpft. Der Tiegel ist am Ende deutlich zu sehen."
  },
  "anua-ardita": {
    "title": "Anua × Ardita Gashi",
    "summary": "Ardita Gashi sprüht das Kapselspray von Anua mit PDRN und Hyaluron auf und versiegelt es mit einer Creme für ein taufrisches, prall wirkendes Finish.",
    "brief": "Die Caption stellt das Blue Dewy Spray von Anua als Weg zu „dewy, plump & glowing skin in a mist“ vor. Im Mittelpunkt des Videos steht, wie schnell sich das Spray in eine Routine einfügt.",
    "approach": "Ardita hält die Flasche hoch, dazu „All you need is this…“ im Bild, und sprüht dann Gesicht und Hals ein, während Einblendungen auf PDRN, Kollagen und „Deep Hydration & Plumpness“ verweisen. Sie tupft eine Creme von Anua auf Gesicht und Hals, „A cream to lock in hydration“, verteilt sie und schließt mit einer Nahaufnahme mit „After“.",
    "outcome": "Eine schnelle Routine in Nahaufnahme, die Spray und Creme in der Anwendung zeigt und mit einem frischen, feucht schimmernden Glow endet."
  },
  "axis-y-ardita": {
    "title": "AXIS-Y × Ardita Gashi",
    "summary": "Ardita Gashi gönnt ihrer Augenpartie eine Woche mit dem Vegan Collagen Eye Serum von AXIS-Y, aufgetragen mit der kühlenden Roller-Spitze.",
    "brief": "Die Caption stellt das Vegan Collagen Eye Serum von AXIS-Y als ihre Wahl für „fresh under-eyes, healthy glow“ vor. Das Video baut auf einer einfachen täglichen Gewohnheit auf: ein Augenserum, eine Woche lang jeden Tag angewendet.",
    "approach": "Ardita beginnt nah an der Kamera mit der Einblendung „My eyes were in need of this serum“ und hält dann die Tube mit grünem Verschluss und ihrer Roller-Spitze hoch. Sie arbeitet das Serum an Tag 1, Tag 4 und Tag 7 unter dem Auge ein und schließt bei weichem Tageslicht, die Tube neben ihrem Gesicht.",
    "outcome": "Eine klare Routine im Tagebuchstil, die genau zeigt, wie der Roller-Applikator verwendet wird, in Arditas eigenem Nahaufnahme-Stil."
  },
  "john-farmer-gvantsa": {
    "title": "John Farmer × Gvantsa Okinashvili",
    "summary": "Gvantsa Okinashvili macht aus dem Ginseng Caffeine Shampoo von JOHN FARMER eine ruhige Haarroutine bei Kerzenlicht, vom ersten Schaum bis zu glänzendem, gesund wirkendem Haar.",
    "brief": "Koreanische Haarpflege wird oft über ihre Inhaltsstoffe erklärt. Gvantsas Reel stellt JOHN FARMER Ginseng Caffeine vor, in ihrer Caption beschrieben als hergestellt mit „real whole ginseng“ und Koffein, um zur Unterstützung einer gesunden Kopfhaut und gesünder wirkenden Haars beizutragen.",
    "approach": "Das Reel beginnt mit der bernsteinfarbenen Flasche, in Szene gesetzt mit Kerzen, und wechselt dann unter die Dusche: Das Shampoo wird gepumpt, auf der Kopfhaut zu einem reichhaltigen Schaum aufgeschäumt und durch ihr Haar ausgespült, wobei das Produkt im Bild bleibt. Am Ende fährt sich Gvantsa im Bademantel mit den Händen durch weiches, glänzendes Haar.",
    "outcome": "Ein langsames, atmosphärisches Routine-Video, das das Produkt im Mittelpunkt hält und mit dem fertigen Haar endet."
  },
  "medicube-gvantsa": {
    "title": "Medicube × Gvantsa Okinashvili",
    "summary": "Gvantsa Okinashvili trägt zwei Gel-Masken von Medicube nebeneinander, eine für Glow und eine für Festigkeit, und vergleicht sie auf demselben Gesicht.",
    "brief": "„Same face, two different masks, so which one does your skin need?“ Die Caption stellt die PDRN Pink Collagen Gel Mask von Medicube für fahle, müde Tage vor und die EGF NAD Firming Gel Mask für Momente, in denen ihre Haut glatter und straffer aussehen soll.",
    "approach": "Gvantsa hält jede Packung hoch und trägt dann die rosa Maske auf die eine und die dunklere, roséfarbene Maske auf die andere Gesichtshälfte auf, während Einblendungen den Schwerpunkt der jeweiligen Maske erklären. Nach einigen Stunden werden beide Masken transparent, und sie zieht sie ab, um das frische, glatte Finish zu zeigen. Die Caption ergänzt, dass sie die übrig gebliebenen Stücke für ihre Lachfalten und den Hals verwendet.",
    "outcome": "Ein leicht verständlicher Halb-und-halb-Vergleich, der den Zuschauern bei der Wahl zwischen den beiden Masken hilft, ruhig gehalten und nah an der Kamera."
  },
  "estee-lauder-gvantsa": {
    "title": "Estée Lauder × Gvantsa Okinashvili",
    "summary": "Die „makeup with me“-Routine von Gvantsa Okinashvili, aufgebaut auf Advanced Night Repair und der Double Wear Foundation von Estée Lauder.",
    "brief": "Ein Makeup-with-me-Format, in der Caption mit #esteelauder markiert, das bei der Hautvorbereitung beginnt und mit Produkten von Estée Lauder zu einem sanften, fertigen Look führt.",
    "approach": "Gvantsa beginnt an ihrem Schminkspiegel und hält dann das Advanced Night Repair Serum, die Double Wear Foundation und eine Mascara in goldener Hülse hoch. Sie trägt das Serum auf, drückt die Grundierung ein, fixiert sie mit Puder und setzt mit einem Pinsel Farbe, bevor sie mit Mascara im Handspiegel und einem letzten Blick in die Kamera abschließt.",
    "outcome": "Eine entspannte Routine Schritt für Schritt, die die Produkte im Bild behält und mit einem natürlichen, gepflegten Finish endet."
  }
}
