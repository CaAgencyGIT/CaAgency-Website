import type { ServiceDetail } from '@/lib/data/services'
import type { ServiceUi } from '@/lib/data/service-ui'

// German versions of the five service pages and their fixed labels, served at
// /de/services/<slug>. Translated from lib/data/services.ts. Plain data.

export const ui: ServiceUi = {
  "eyebrow": "Unsere Leistungen",
  "howWeWork": "So arbeiten wir",
  "included": "Das ist enthalten",
  "whoFor": "Für wen es gedacht ist",
  "howRuns": "So läuft die Zusammenarbeit ab",
  "specialismTitle": "Gemacht für Beauty & Hautpflege",
  "specialismText": "Wir sind auf Beauty-, Hautpflege- und Lifestyle-Marken spezialisiert, in den USA und weltweit.",
  "specialismBeauty": "Beauty-Influencer-Marketing",
  "specialismSkincare": "Skincare-Influencer-Marketing",
  "specialismKBeauty": "K-Beauty-Influencer-Marketing",
  "specialismUsa": "Influencer Marketing in den USA",
  "faqEyebrow": "FAQ",
  "faqTitle": "{service}: häufige Fragen",
  "relatedGuides": "Passende Ratgeber",
  "otherServices": "Entdecken Sie unsere weiteren Leistungen",
  "ctaTitle": "Planen wir Ihre nächste Kampagne",
  "ctaText": "Erzählen Sie uns von Ihren Zielen, und wir stellen den passenden Mix aus Creators, Content und Strategie dafür zusammen.",
  "ctaPrimary": "Partnerschaft anfragen",
  "ctaSecondary": "Unsere Arbeit ansehen"
}

export const services: ServiceDetail[] = [
  {
    "slug": "influencer-campaigns",
    "title": "Influencer-Kampagnen",
    "icon": "spark",
    "tagline": "Creator-Partnerschaften, die den Scroll stoppen.",
    "summary": "Influencer-Kampagnen aus einer Hand auf Instagram, TikTok und YouTube: von Creator-Auswahl und Briefing bis zu Rechten, Freigaben und Reporting.",
    "seoTitle": "Influencer-Kampagnen für Beauty-Marken",
    "seoDescription": "Influencer-Kampagnen aus einer Hand für Beauty-, Hautpflege- und Lifestyle-Marken: Creator-Auswahl, Briefings, Rechte, Freigaben und Reporting.",
    "breakdown": [
      "Jede Kampagne beginnt mit dem Fit. Wir gleichen Ihre Zielgruppe, Ihre Kategorie und Ihre Ziele mit unserem Creator-Netzwerk ab und stellen eine Shortlist der Stimmen zusammen, deren Communitys sich wirklich mit Ihrer Kundschaft überschneiden. Reichweite zählt, aber Resonanz konvertiert.",
      "Danach steuern wir die Kampagne inhouse: kreative Briefings, die Raum für die eigene Stimme des Creators lassen, Zeit- und Lieferpläne, Content-Freigaben, Nutzungsrechte und die Einhaltung der Plattformregeln, alles aus einem Team.",
      "Sobald der Content live ist, verfolgen wir Auslieferung, Engagement, Traffic und Stimmung und berichten in klarer Sprache, mit Erkenntnissen, die die nächste Kampagnenphase schärfen."
    ],
    "deliverables": [
      "Kampagnenstrategie & kreative Leitlinie",
      "Shortlist, Prüfung & Ansprache der Creators",
      "Verträge & Nutzungsrechte",
      "Briefing, Freigaben & Qualitätskontrolle",
      "Performance-Reporting & Insights"
    ],
    "idealFor": [
      "Produktlaunches, die in den ersten Wochen glaubwürdige Creator-Stimmen brauchen, nicht nur bezahlte Reichweite.",
      "Marken, die in einen neuen Markt eintreten, etwa die USA, die Golfregion oder Asien, und lokale Creators brauchen, die dieses Publikum bereits erreichen.",
      "Teams, denen die Kapazität fehlt, Dutzende Creators gleichzeitig zu briefen, unter Vertrag zu nehmen, nachzufassen und auszuwerten."
    ],
    "process": [
      {
        "title": "Briefing & Ziele",
        "description": "Wir vereinbaren Produkt, Zielgruppe, Märkte, Budget und das eine Ergebnis, an dem die Kampagne gemessen wird: Bekanntheit, Erstkäufe oder Umsatz."
      },
      {
        "title": "Creator-Shortlist",
        "description": "Sie erhalten eine geprüfte Shortlist mit Zielgruppen-Fit, Engagement-Qualität und Content-Stil für jeden Creator und geben die finale Auswahl frei."
      },
      {
        "title": "Content & Go-live",
        "description": "Wir briefen, prüfen Entwürfe anhand Ihrer Werbeaussagen und Richtlinien, sichern Nutzungsrechte und Werbekennzeichnung und planen die Beiträge über alle Plattformen."
      },
      {
        "title": "Auswerten & Lernen",
        "description": "Ein Bericht in klarer Sprache zeigt Reichweite, Engagement, Klicks und Conversions und was in der nächsten Kampagnenphase wiederholt, gestrichen oder skaliert werden sollte."
      }
    ],
    "faqs": [
      {
        "question": "Wie wählen Sie Influencer für eine Kampagne aus?",
        "answer": "Wir gehen von Ihrer Kundschaft aus, nicht von Followerzahlen. Jeder Creator wird nach Demografie und Standort der Zielgruppe, Engagement-Qualität, Content-Stil, Brand Safety und bisherigen Partnerschaften geprüft, und Sie geben die finale Auswahl frei, bevor jemand unter Vertrag genommen wird."
      },
      {
        "question": "Auf welchen Plattformen setzen Sie Influencer-Kampagnen um?",
        "answer": "Auf Instagram, TikTok und YouTube. TikTok liegt meist bei Entdeckung und Trends vorn, Instagram bei hochwertig produzierten Launches, Reels und Stories und YouTube bei ausführlichen Reviews und Tutorials. Die meisten Kampagnen kombinieren zwei oder drei Plattformen, gewichtet danach, wo Ihre Zielgruppe Zeit verbringt und was die Kampagne erreichen soll."
      },
      {
        "question": "Was kostet eine Influencer-Kampagne?",
        "answer": "Das hängt von den Plattformen, den Creator-Größen, der Anzahl der Creators, den vereinbarten Leistungen und den Nutzungsrechten ab. Statt einen Pauschalpreis zu nennen, schneiden wir die Kampagne auf Ihr Ziel und Ihr Budget zu und zeigen die Abwägungen, zum Beispiel mehr Micro-Creators für Erstkäufe gegenüber weniger, größeren Creators für Bekanntheit."
      },
      {
        "question": "Übernehmen Sie Verträge, Nutzungsrechte und Werbekennzeichnung?",
        "answer": "Ja. Wir verhandeln und betreuen Creator-Verträge, Nutzungs- und Whitelisting-Rechte, Content-Freigaben und die plattformkonforme Kennzeichnung, etwa mit #ad und dem Label für bezahlte Partnerschaften, damit die Kampagne in jedem Markt, in dem sie läuft, regelkonform bleibt."
      },
      {
        "question": "Wie messen Sie die Ergebnisse einer Influencer-Kampagne?",
        "answer": "Wir vereinbaren die KPIs vor dem Start und verfolgen sie durchgehend: Reichweite, Engagement-Rate, Link-Klicks, eingelöste Codes und Conversions, soweit das Tracking es zulässt. Der Abschlussbericht erklärt, was jeder Creator und jedes Format geliefert hat, damit die nächste Kampagne auf Belegen aufbaut und nicht auf Vermutungen."
      }
    ],
    "image": "/images/services/final/01-albina.jpg",
    "imageAlt": "Albina in einem nahen Selfie-Porträt mit langem Haar mit Highlights und weich ausbalanciertem Licht."
  },
  {
    "slug": "talent-management",
    "title": "Full-Service-Talent-Management",
    "icon": "person",
    "tagline": "Karrieren, die auf Dauer angelegt sind.",
    "summary": "Rundum-Vertretung für Creators: bezahlte Kooperationen, exklusive Partnerschaften, Verhandlung und langfristige Karriereentwicklung, alles aus einem Team.",
    "seoTitle": "Agentur für Influencer-Talent-Management",
    "seoDescription": "Full-Service-Talent-Management für Creators: Markendeals, Verhandlung, Verträge, Rechnungsstellung und langfristige Karriereplanung aus einem Team.",
    "breakdown": [
      "Wir vertreten einen fokussierten Roster, kein Verzeichnis. Das heißt: Jedes Talent erhält echtes Management, also Positionierung, Honorarstrategie und eine Partnerschafts-Pipeline, die dazu passt, wohin sich Content und Publikum entwickeln.",
      "Im Tagesgeschäft kümmern wir uns um eingehende und ausgehende Anfragen, verhandeln Konditionen und Nutzung, betreuen Verträge und Rechnungsstellung und schützen die Zeit des Creators, damit er sich auf starken Content konzentrieren kann.",
      "Langfristig planen wir Karrieren: neue Plattformen, neue Formate und Markenbeziehungen, die Jahr für Jahr verlängert werden, statt nach einem Beitrag zu enden."
    ],
    "deliverables": [
      "Markenansprache & eingehende Anfragen",
      "Verhandlung, Verträge & Rechnungsstellung",
      "Content- & Posting-Strategie",
      "Publikumswachstum & Honorarentwicklung",
      "Langfristige Karriereplanung"
    ],
    "idealFor": [
      "Creators, denen das Postfach über den Kopf gewachsen ist und die möchten, dass jede Markenanfrage sauber bearbeitet, verhandelt und nachverfolgt wird.",
      "Creators aus Beauty, Hautpflege, Fashion, Lifestyle und Gaming, die den Schritt von einzelnen Beiträgen zu langfristigen Markenpartnerschaften gehen möchten.",
      "Marken, die direkt mit unserem Roster arbeiten möchten, mit einem Ansprechpartner für Briefings, Verträge und Freigaben."
    ],
    "process": [
      {
        "title": "Kennenlernen",
        "description": "Wir sprechen über Ihren Content, Ihr Publikum, Ihre Ziele und die Marken, mit denen Sie arbeiten möchten, und klären gemeinsam, ob wir zueinander passen."
      },
      {
        "title": "Positionierung & Honorare",
        "description": "Wir legen Ihre Positionierung, Ihr Media Kit und Ihre Honorarstrategie fest, damit jeder Pitch und jede Verhandlung von einem klaren Wert ausgeht."
      },
      {
        "title": "Deal-Flow",
        "description": "Wir pitchen bei Marken, bearbeiten eingehende Anfragen, verhandeln Konditionen und Nutzung und betreuen Verträge, Rechnungsstellung und Fristen."
      },
      {
        "title": "Karriereplanung",
        "description": "In regelmäßigen Reviews schauen wir, was funktioniert hat, welche Partnerschaften verlängert werden sollten und in welche Plattformen oder Formate Sie als Nächstes hineinwachsen."
      }
    ],
    "faqs": [
      {
        "question": "Was macht ein Talent-Manager für Influencer?",
        "answer": "Ein Talent-Manager führt die geschäftliche Seite der Karriere eines Creators: Er findet und pitcht Markenpartnerschaften, verhandelt Honorare und Nutzungsrechte, betreut Verträge und Rechnungen, schützt den Creator vor ungünstigen Konditionen und plant das langfristige Wachstum, damit sich der Creator auf seinen Content konzentrieren kann."
      },
      {
        "question": "Welche Creators vertritt CA Agency?",
        "answer": "Wir vertreten einen fokussierten Roster von Creators aus Beauty, Hautpflege, Fashion, Lifestyle, Gaming und Entertainment auf Instagram, TikTok, YouTube und Twitch. Den aktuellen Roster finden Sie auf unserer Talentseite, und jedes Profil verlinkt auf die eigenen Kanäle des Creators."
      },
      {
        "question": "Wie buchen Marken einen Creator aus Ihrem Roster?",
        "answer": "Senden Sie uns Briefing, Budget und Zeitplan über das Kontaktformular. Wir bestätigen Verfügbarkeit und Fit, schlagen Leistungen und Nutzung vor und betreuen Vertrag, Content-Freigaben und Rechnungsstellung, sodass die Marke einen einzigen Ansprechpartner hat."
      },
      {
        "question": "Verhandeln Sie Nutzungsrechte und Exklusivität?",
        "answer": "Ja. Nutzungsdauer, bezahlte Verstärkung und Whitelisting, Exklusivitätszeiträume und Kategorieausschlüsse wirken sich alle auf das Honorar eines Creators und auf künftige Deals aus. Deshalb verhandeln wir jeden Punkt ausdrücklich und achten darauf, dass er im Vertrag steht."
      },
      {
        "question": "Kann ein Creator in den Roster von CA Agency aufgenommen werden?",
        "answer": "Wir halten unseren Roster bewusst fokussiert, damit jeder Creator echtes Management erhält. Wenn Sie Content zu Beauty, Hautpflege, Fashion, Lifestyle oder Gaming erstellen und eine Vertretung suchen, stellen Sie sich über das Kontaktformular mit Links zu Ihren Kanälen vor."
      }
    ],
    "image": "/images/services/final/02-anton.jpg",
    "imageAlt": "Anton im weißen Bademantel mit Augenpads und frischer, strahlender Haut."
  },
  {
    "slug": "content-production",
    "title": "Content-Kreation & Produktion",
    "icon": "video",
    "tagline": "Content, der den Scroll stoppt, von A bis Z.",
    "summary": "Branded Short-Form-Videos und Fotos, inhouse konzipiert, gedreht und geschnitten, um Zielgruppen zu erreichen und die Sichtbarkeit der Marke auf jeder Plattform zu stärken.",
    "seoTitle": "Creator-Content-Produktion für Beauty-Marken",
    "seoDescription": "Short-Form-Videos und Fotos für Beauty- und Hautpflegemarken: Hooks, Skripte, Produktion mit Creators und plattformfertige Schnitte für jeden Kanal.",
    "breakdown": [
      "Guter Short-Form-Content wirkt mühelos, weil die Denkarbeit vor dem Dreh stattgefunden hat. Wir entwickeln Hooks, Skripte und Shotlists danach, wie Menschen tatsächlich zuschauen: Die erste Sekunde verdient sich die nächsten zehn.",
      "Die Produktion läuft über unsere Creators und Produktionspartner, on location oder im Studio. So fühlt sich der Content im Feed nativ an und nicht wie eine Anzeige, die hineingesetzt wurde.",
      "Jeder Master wird fertig geschnitten und plattformfertig geliefert: Cutdowns, Formatversionen, Untertitel und Cover, freigegeben für die Nutzung, die Sie gebucht haben."
    ],
    "deliverables": [
      "Kreativkonzepte, Hooks & Skripte",
      "Produktion on location oder im Studio",
      "Schnitte, Cutdowns & Formatversionen",
      "Untertitel, Cover & CTAs",
      "Nutzungsfertige Master-Dateien"
    ],
    "idealFor": [
      "Marken, die laufend Short-Form-Videos für organisches Social Media, bezahlte Anzeigen und Produktseiten brauchen.",
      "Launches, die Texturaufnahmen, Anwendungsdemos und Routine-Content brauchen, die das Produkt auf echter Haut in Aktion zeigen.",
      "Teams, deren bisheriger Content nach Werbung aussieht und in Feeds, die für Creators gemacht sind, hinter den Erwartungen bleibt."
    ],
    "process": [
      {
        "title": "Konzept",
        "description": "Wir legen Hooks, Kernbotschaften, Formate und Shotlist für jede Plattform fest, ausgehend vom Produkt und davon, wie Ihre Zielgruppe zuschaut."
      },
      {
        "title": "Casting",
        "description": "Wir wählen Creators oder Talente passend zum Konzept und zur Kundschaft aus, damit die Person vor der Kamera aussieht und klingt wie die Zielgruppe."
      },
      {
        "title": "Produktion",
        "description": "Gedreht wird on location oder im Studio mit unseren Creators und Produktionspartnern. Ihr Team prüft unterwegs die wichtigsten Einstellungen."
      },
      {
        "title": "Schnitt & Lieferung",
        "description": "Sie erhalten fertig geschnittene Master, Cutdowns und Formatversionen mit Untertiteln und Covern, freigegeben für die Nutzung, die Sie gebucht haben."
      }
    ],
    "faqs": [
      {
        "question": "Welche Art von Content produzieren Sie?",
        "answer": "Vor allem vertikale Short-Form-Videos für TikTok, Instagram Reels und YouTube Shorts, dazu Fotos und längere Schnitte, wo sie gebraucht werden. Bei Beauty und Hautpflege sind das meist Auftrags- und Tragetests, Routinen Schritt für Schritt, Textur-Nahaufnahmen, Get-ready-with-me-Formate und Produkterklärungen."
      },
      {
        "question": "Ist Creator-Content für Anzeigen besser als Studio-Content?",
        "answer": "Für Social Ads ist er es oft, weil Videos im Creator-Stil im Feed nativ wirken und die Aufmerksamkeit länger halten. Studioarbeit bleibt für Hero-Assets wichtig. Meist kombinieren wir beides: einen kontrollierten Dreh für die Key Visuals und Content mit Creators für Menge und Tests."
      },
      {
        "question": "Wem gehört der Content und wie dürfen wir ihn nutzen?",
        "answer": "Die Nutzung wird vor der Produktion vereinbart: welche Kanäle, welche Märkte, wie lange und ob der Content als bezahlte Anzeige laufen darf. Die Master werden für genau diese Nutzung freigegeben geliefert. Verlängerungen lassen sich später verhandeln, wenn ein Inhalt gut läuft."
      },
      {
        "question": "Wie viele Versionen erhalten wir?",
        "answer": "Jedes Konzept wird als Master geliefert, dazu die Cutdowns und Seitenverhältnisse, die der Mediaplan braucht: in der Regel 9:16 für Reels, TikTok und Shorts sowie quadratisch oder 4:5 für Feed und Anzeigen, mit Untertiteln und Covern. Das genaue Paket wird im Leistungsumfang festgelegt, damit es keine Überraschungen gibt."
      },
      {
        "question": "Wie lange dauert die Content-Produktion?",
        "answer": "Das hängt von der Zahl der Konzepte ab, vom Umfang des Castings und davon, ob mit bestehenden Creators oder in einer eigenen Produktion gedreht wird. Wir vereinbaren den Zeitplan im Leistungsumfang und planen von Ihrem Launch- oder Mediatermin rückwärts, sodass Konzeptfreigabe, Dreh, Schnitt und Lieferung jeweils ein festes Zeitfenster haben."
      }
    ],
    "image": "/images/services/final/03a-dariia.jpg",
    "imageAlt": "Dariia mit einem fertigen Herbst-Make-up-Look in einem nahen Dreiviertelporträt."
  },
  {
    "slug": "performance-marketing",
    "title": "Performance-Marketing",
    "icon": "chart",
    "tagline": "Creator-Content, gemessen wie Media.",
    "summary": "Datenbasierte Verstärkung von Creator-Content: Paid Social, Creative-Tests und Conversion-Tracking mit messbarem ROI, von der Bekanntheit bis zum Verkauf.",
    "seoTitle": "Influencer-Performance-Marketing & Paid Social",
    "seoDescription": "Aus Creator-Content wird Paid Social, das verkauft: Partnership Ads und Spark Ads, Creative-Tests, Conversion-Tracking und wöchentliche Optimierung.",
    "breakdown": [
      "Organische Reichweite beginnt die Geschichte, bezahlte Distribution erzählt sie zu Ende. Wir verstärken den Creator-Content, der sich bereits bewährt hat, und schalten ihn als Branded-Content-Anzeigen und Anzeigen im Spark-Format, mit dem Targeting, das der organische Beitrag nie hatte.",
      "Creatives werden getestet wie Media: Hooks, Einstiege und Formate treten direkt gegeneinander an, und das Budget wandert zu den Varianten, die Aufmerksamkeit halten und konvertieren.",
      "Das Tracking steht, bevor der erste Dirham ausgegeben wird: Pixel, Events und UTMs. So spricht das Reporting in Ergebnissen: Traffic, Warenkörbe und Return on Spend, nicht nur Impressionen."
    ],
    "deliverables": [
      "Bezahlte Verstärkung von Creator-Content",
      "Testmatrizen für Creatives",
      "Zielgruppen- & Funnel-Architektur",
      "Conversion-Tracking & Attribution",
      "Wöchentliche Optimierung & Reporting"
    ],
    "idealFor": [
      "Marken, die bereits Influencer-Kampagnen umsetzen und möchten, dass die leistungsstärksten Beiträge weit über die Follower des Creators hinaus Reichweite erzielen.",
      "E-Commerce- und DTC-Marken, bei denen Creator-Content messbar Traffic, Warenkörbe und Verkäufe bringen soll.",
      "Teams, die Creative-Tests und wöchentliche Optimierung möchten statt eines einzelnen beworbenen Beitrags."
    ],
    "process": [
      {
        "title": "Tracking-Setup",
        "description": "Pixel, Conversion-Events und UTMs werden vor dem Start geprüft und korrigiert, damit sich jedes Ergebnis zuordnen lässt."
      },
      {
        "title": "Auswahl der Creatives",
        "description": "Wir wählen die Creator-Beiträge mit den stärksten organischen Signalen aus und sichern die Rechte, sie als Anzeigen zu schalten."
      },
      {
        "title": "Testen & Starten",
        "description": "Hooks, Einstiege und Formate treten in definierten Zielgruppen direkt gegeneinander an, mit klaren Regeln dafür, wann eine Variante gewinnt."
      },
      {
        "title": "Optimieren & Auswerten",
        "description": "Das Budget wandert wöchentlich zu den Gewinnern, und das Reporting umfasst Traffic, Warenkörbe, Verkäufe und Return on Ad Spend."
      }
    ],
    "faqs": [
      {
        "question": "Was sind Partnership Ads und Spark Ads?",
        "answer": "Damit kann eine Marke den Beitrag eines Creators als bezahlte Anzeige über dessen eigenes Profil schalten: Partnership Ads auf Instagram und Facebook, Spark Ads auf TikTok. Weil die Anzeige wie der Content des Creators aussieht, erhält sie in der Regel mehr Vertrauen und Aufmerksamkeit als eine klassische Markenanzeige."
      },
      {
        "question": "Warum sollte man Influencer-Content mit Paid Media verstärken?",
        "answer": "Organische Beiträge erreichen einige Tage lang einen Teil der Follower eines Creators. Bezahlte Verstärkung bringt die leistungsstärksten Inhalte vor neue, gezielt ausgewählte Zielgruppen, solange sie funktionieren, und macht Ergebnisse bis hin zu Klicks, Warenkörben und Verkäufen messbar."
      },
      {
        "question": "Wie erfassen Sie Verkäufe aus Influencer-Content?",
        "answer": "Über Plattform-Pixel und Conversion-Events, Links mit UTM-Parametern, Rabattcodes und das eigene Reporting der Werbeplattformen. Das richten wir vor dem Start ein, denn Ergebnisse, die nicht vom ersten Tag an erfasst werden, lassen sich nachträglich nicht mehr zuordnen."
      },
      {
        "question": "Wie schnell sehen wir Ergebnisse?",
        "answer": "Frühe Signale wie Hook-Rate, Klickrate und Kosten pro Klick zeigen sich innerhalb weniger Tage. Entscheidungen auf Basis von Conversions brauchen genug Daten, um belastbar zu sein. Deshalb bewerten wir Creatives in der Regel nach ihrem ersten vollständigen Testzyklus und optimieren von da an wöchentlich."
      },
      {
        "question": "Welches Budget brauchen wir für bezahlte Verstärkung?",
        "answer": "Genug, damit jedes Creative und jede Zielgruppe belastbare Daten sammeln kann, bevor Entscheidungen fallen. Statt eines festen Mindestbetrags richten wir das Budget an der Zahl der Creatives und Zielgruppen im Test aus und verlagern die Ausgaben auf die Gewinner, sobald sie feststehen. So wird das Geld nicht so dünn verteilt, dass sich nichts daraus lernen lässt."
      }
    ],
    "image": "/images/services/final/04-melly.jpg",
    "imageAlt": "Melly blickt mit einem fertigen Smoky-Eyes-Make-up in die Kamera."
  },
  {
    "slug": "brand-consultancy",
    "title": "Markenberatung & Marketing-Management",
    "icon": "compass",
    "tagline": "Strategische Begleitung, von der Positionierung bis zum Launch.",
    "summary": "Strategische Marketingberatung für Beauty-, Hautpflege- und Lifestyle-Marken: Positionierung, Launch-Planung, Markteintritt und Always-on-Markenmanagement.",
    "seoTitle": "Marketingberatung für Beauty-Marken",
    "seoDescription": "Marketingberatung für Beauty-, Hautpflege- und Lifestyle-Marken: Audits, Positionierung, Launch- und Markteintrittspläne, Influencer-Programme.",
    "breakdown": [
      "Manche Marken brauchen eine Kampagne, andere einen Kompass. Unsere Beratung beginnt mit einem ehrlichen Audit: Wo steht die Marke bei Positionierung, Kanälen, Content und Community, und wohin entwickelt sich die Kategorie?",
      "Auf dieser Grundlage erstellen wir den Plan: Messaging und kreative Leitlinie, Launch- und Go-to-Market-Roadmaps, die Markteintrittsstrategie für neue Regionen und die Konzeption des Influencer-Programms, das all das trägt.",
      "Für Marken, die einen Partner statt eines Projekts suchen, übernehmen wir das Always-on-Management: ein festes Team, das Quartal für Quartal plant, umsetzt und nachschärft."
    ],
    "deliverables": [
      "Marken-, Kanal- & Content-Audits",
      "Positionierung & Messaging",
      "Launch- & Go-to-Market-Planung",
      "Konzeption von Influencer-Programmen",
      "Always-on-Beratung & Management"
    ],
    "idealFor": [
      "Beauty- und Hautpflegemarken, die einen Launch, einen Relaunch oder eine neue Produktlinie vorbereiten und eine klare Geschichte brauchen, bevor Budget fließt.",
      "Marken, die in eine neue Region eintreten, etwa die USA, die Golfregion oder Korea, und für dieses Publikum einen Markteintritts- und Creator-Plan brauchen.",
      "Marketingteams, die erfahrene strategische Unterstützung und einen Always-on-Partner suchen, ohne ein komplettes Inhouse-Team aufzubauen."
    ],
    "process": [
      {
        "title": "Audit",
        "description": "Wir prüfen Positionierung, Kanäle, Content, Community und Wettbewerb, um zu sehen, wo die Marke steht und wohin sich die Kategorie entwickelt."
      },
      {
        "title": "Strategie",
        "description": "Wir definieren Positionierung, Messaging, vorrangige Zielgruppen und Märkte sowie die Rolle, die Creators und Content dabei spielen, sie zu erreichen."
      },
      {
        "title": "Roadmap",
        "description": "Sie erhalten einen Launch- oder Go-to-Market-Plan mit Zeitplan, Kanälen, Budgets und den KPIs, an denen jede Phase gemessen wird."
      },
      {
        "title": "Umsetzung & Review",
        "description": "Wir setzen den Plan mit Ihnen oder an der Seite Ihres Teams um, prüfen die Ergebnisse jedes Quartal und passen die Roadmap an."
      }
    ],
    "faqs": [
      {
        "question": "Was umfasst eine Zusammenarbeit in der Markenberatung?",
        "answer": "In der Regel beginnt sie mit einem Audit von Positionierung, Kanälen, Content und Wettbewerb. Darauf folgen Strategie und Roadmap zu Messaging, vorrangigen Märkten, Launch-Timing, Budgets und KPIs. Marken können beim Plan aufhören oder uns mit der Steuerung der Umsetzung beauftragen."
      },
      {
        "question": "Unterstützen Sie Marken beim Eintritt in den US-Markt oder die Golfregion?",
        "answer": "Ja. Der Markteintritt ist ein Kernbestandteil unserer Beratung. Wir analysieren, wie sich Kategorie, Plattformen und Creator-Landschaft im Zielmarkt unterscheiden, und erstellen einen Launch-Plan mit lokalen Creators, zulässigen Werbeaussagen und Werbekennzeichnung sowie dem richtigen Kanalmix für dieses Publikum."
      },
      {
        "question": "Können Sie unser Influencer-Programm konzipieren?",
        "answer": "Ja. Wir konzipieren Always-on- und Launch-Programme: welche Creator-Größen, wie viele Creators, welche Plattformen, Gifting oder bezahlte Kooperationen, Content-Rechte und wie die Performance gemessen wird. So passt das Programm zu Ihrem Budget und lässt sich skalieren."
      },
      {
        "question": "Ist das ein einmaliges Projekt oder eine laufende Partnerschaft?",
        "answer": "Beides ist möglich. Manche Marken brauchen eine Strategie und einen Launch-Plan, andere wünschen sich ein festes Team, das jedes Quartal plant, umsetzt und nachschärft. Modell und Umfang vereinbaren wir vorab."
      },
      {
        "question": "Mit wem arbeiten wir im Tagesgeschäft zusammen?",
        "answer": "Mit einem Team, das Strategie, Creator-Partnerschaften und Content abdeckt, damit Plan und Umsetzung zusammenbleiben. Sie erhalten regelmäßige Abstimmungen und ein Reporting zu den KPIs, die in der Roadmap vereinbart wurden."
      }
    ],
    "image": "/images/services/final/05-rebecca.jpg",
    "imageAlt": "Rebecca beim Event von LolaVie und Charlotte Tilbury."
  }
]
