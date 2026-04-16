const GAMES = [

  {
    id: "game-001",
    source: "gold",
    locked: true,
    title: "Tuch-Spiel „Winken & Werfen“",
    age_text: "1–2 Jahre",
    age_min: 1,
    age_max: 2,
    time_text: "3–10 Minuten",
    time_bucket: "3-5",
    material_mode: "with_material",
    materials_text: "Tuch / Schal",
    materials: ["tuch"],
    instructions: [
      "Schalte rhythmische Musik ein.",
      "Gib deinem Kind ein leichtes Tuch oder einen Schal.",
      "Zeige, wie man damit in der Luft schwingt, sich dreht, es hochwirft und wieder auffängt."
    ],
    benefits_text: "Rhythmusgefühl und räumliche Wahrnehmung",
    benefits_tags: ["rhythmus", "wahrnehmung"],
    notes: "",
    active: true
  },

  {
    id: "game-002",
    source: "gold",
    locked: true,
    title: "Sensorisches Papier-Feuerwerk",
    age_text: "1–2 Jahre",
    age_min: 1,
    age_max: 2,
    time_text: "3–5 Minuten",
    time_bucket: "3-5",
    material_mode: "with_material",
    materials_text: "Papier",
    materials: ["papier"],
    instructions: [
      "Gib deinem Kind verschiedene Arten von Papier (Servietten, Zeitung, buntes Papier).",
      "Lass es das Papier in kleine Stücke reißen.",
      "Sammelt die Stücke und werft sie gemeinsam wie ein Feuerwerk in die Luft."
    ],
    benefits_text: "Sensorik und Feinmotorik",
    benefits_tags: ["sensorik", "feinmotorik"],
    notes: "",
    active: true
  },

  {
    id: "game-003",
    source: "gold",
    locked: true,
    title: "Bälle in den Korb werfen",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "3–5 Minuten",
    time_bucket: "3-5",
    material_mode: "with_material",
    materials_text: "Bälle",
    materials: ["baelle"],
    instructions: [
      "Stelle einen Korb oder einen Topf auf den Boden.",
      "Gehe etwa 1 Meter zurück und werft die Bälle hinein.",
      "Zählt gemeinsam die Treffer laut mit.",
      "Vergrößert nach und nach die Entfernung."
    ],
    benefits_text: "Zielgenauigkeit, Koordination und Konzentration",
    benefits_tags: ["koordination", "konzentration"],
    notes: "",
    active: true
  },

  {
    id: "game-004",
    source: "gold",
    locked: true,
    title: "Papier-Basketball",
    age_text: "1–6 Jahre",
    age_min: 1,
    age_max: 6,
    time_text: "3–10 Minuten",
    time_bucket: "3-5",
    material_mode: "with_material",
    materials_text: "Papier, Kiste",
    materials: ["papier", "kiste"],
    instructions: [
      "Zerknüllt gemeinsam Papier zu kleinen Bällen.",
      "Stelle eine Kiste oder einen Karton als Ziel auf.",
      "Werft die „Bälle“ hinein.",
      "Macht ein kleines Spiel daraus: Wer trifft öfter?"
    ],
    benefits_text: "Motorik und Zielgenauigkeit",
    benefits_tags: ["motorik", "koordination"],
    notes: "",
    active: true
  },

  {
    id: "game-005",
    source: "gold",
    locked: true,
    title: "Sturm im Glas",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "3–5 Minuten",
    time_bucket: "3-5",
    material_mode: "with_material",
    materials_text: "Glas mit Wasser, Trinkhalm",
    materials: ["glas", "wasser", "trinkhalm"],
    instructions: [
      "Fülle ein Glas halb mit Wasser.",
      "Zeige deinem Kind, wie man durch den Strohhalm pustet.",
      "Es entstehen viele Blasen – wie ein Sturm im Wasser.",
      "Achte darauf, dass das Kind nicht am Strohhalm saugt."
    ],
    benefits_text: "Sprachentwicklung und Atemkontrolle",
    benefits_tags: ["sprache", "atmung"],
    notes: "",
    active: true
  },

  {
    id: "game-006",
    source: "gold",
    locked: true,
    title: "Der Wind pustet",
    age_text: "1–2 Jahre",
    age_min: 1,
    age_max: 2,
    time_text: "3–5 Minuten",
    time_bucket: "3-5",
    material_mode: "with_material",
    materials_text: "Plastikbecher",
    materials: ["becher"],
    instructions: [
      "Stelle einen leichten Becher an den Tischrand.",
      "Pustet gemeinsam darauf – der Becher bewegt sich.",
      "Macht ein kleines Spiel daraus: Wer pustet stärker?",
      "Probiert auch andere leichte Gegenstände (Feder, Papier)."
    ],
    benefits_text: "Atemkontrolle und Mundmotorik",
    benefits_tags: ["atmung", "motorik"],
    notes: "",
    active: true
  },

  {
    id: "game-007",
    source: "gold",
    locked: true,
    title: "Knisterspaß mit Papier",
    age_text: "1–2 Jahre",
    age_min: 1,
    age_max: 2,
    time_text: "3–5 Minuten",
    time_bucket: "3-5",
    material_mode: "with_material",
    materials_text: "Zeitung",
    materials: ["papier"],
    instructions: [
      "Gib deinem Kind ein Blatt Zeitung oder Verpackungspapier.",
      "Zeige, wie man es knüllt, reißt und knistern lässt.",
      "Ermutige dein Kind, verschiedene Geräusche zu machen.",
      "Formt kleine Papierbälle und werft sie gemeinsam in eine Schüssel."
    ],
    benefits_text: "Sensorik und Feinmotorik",
    benefits_tags: ["sensorik", "feinmotorik"],
    notes: "",
    active: true
  },

  {
    id: "game-008",
    source: "gold",
    locked: true,
    title: "Fallende Tücher",
    age_text: "1–2 Jahre",
    age_min: 1,
    age_max: 2,
    time_text: "3–5 Minuten",
    time_bucket: "3-5",
    material_mode: "with_material",
    materials_text: "Tuch / Schal",
    materials: ["tuch"],
    instructions: [
      "Nimm ein leichtes Tuch oder einen Schal.",
      "Wirf es hoch in die Luft und lass es langsam herunterfallen.",
      "Dein Kind versucht, es zu fangen oder danach zu greifen.",
      "Wiederholt das Spiel und benennt gemeinsam: „fliegt… fällt… gefangen!“"
    ],
    benefits_text: "Hand-Auge-Koordination und Aufmerksamkeit",
    benefits_tags: ["koordination", "aufmerksamkeit"],
    notes: "",
    active: true
  },

  {
    id: "game-009",
    source: "gold",
    locked: true,
    title: "Ball hin und her rollen",
    age_text: "1–2 Jahre",
    age_min: 1,
    age_max: 2,
    time_text: "3–10 Minuten",
    time_bucket: "3-5",
    material_mode: "with_material",
    materials_text: "Bälle",
    materials: ["baelle"],
    instructions: [
      "Setzt euch gegenüber auf den Boden.",
      "Rolle den Ball langsam zu deinem Kind.",
      "Warte, bis es den Ball zurückrollt.",
      "Wenn es sicherer wird, zählt gemeinsam: eins, zwei, drei…"
    ],
    benefits_text: "Koordination und erstes Zahlenverständnis",
    benefits_tags: ["koordination", "zahlen"],
    notes: "",
    active: true
  },

  {
    id: "game-010",
    source: "gold",
    locked: true,
    title: "Finde das Spielzeug",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "3–10 Minuten",
    time_bucket: "3-5",
    material_mode: "with_material",
    materials_text: "Kleine Spielzeuge, Becher",
    materials: ["spielzeuge", "becher"],
    instructions: [
      "Stelle drei Becher umgedreht auf den Tisch.",
      "Dein Kind sieht, wie du ein Spielzeug unter einem Becher versteckst.",
      "Schiebe die Becher langsam hin und her.",
      "Frage: „Wo ist das Spielzeug?“",
      "Für ältere Kinder kannst du das Tempo erhöhen."
    ],
    benefits_text: "Gedächtnis und Aufmerksamkeit",
    benefits_tags: ["gedaechtnis", "aufmerksamkeit"],
    notes: "",
    active: true
  }

,
  {
    id: "game-011",
    source: "gold",
    locked: true,
    title: "Ball verstecken",
    age_text: "1–2 Jahre",
    age_min: 1,
    age_max: 2,
    time_text: "3–5 Minuten",
    time_bucket: "3-5",
    material_mode: "with_material",
    materials_text: "Ball, Tuch",
    materials: ["baelle", "tuch"],
    instructions: [
      "Verstecke den Ball unter einem Tuch und frage: „Wo ist der Ball?“",
      "Dein Kind hebt das Tuch an und findet ihn.",
      "Wiederhole mit verschiedenen Orten (unter dem Tisch, hinter dem Rücken).",
      "Variante: zwei Tücher – unter welchem ist der Ball?",
      "Steigere langsam die Schwierigkeit."
    ],
    benefits_text: "Objektverständnis und Aufmerksamkeit",
    benefits_tags: ["aufmerksamkeit"],
    notes: "",
    active: true
  },

  {
    id: "game-012",
    source: "gold",
    locked: true,
    title: "Klopf-Spiel",
    age_text: "1–2 Jahre",
    age_min: 1,
    age_max: 2,
    time_text: "3–5 Minuten",
    time_bucket: "3-5",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Klopfe langsam auf den Tisch – dein Kind macht nach.",
      "Ändere Tempo: langsam, schnell, Pause.",
      "Spiele laut und leise.",
      "Klopfe einfache Rhythmen.",
      "Lass dein Kind den Rhythmus vorgeben."
    ],
    benefits_text: "Rhythmusgefühl und Aufmerksamkeit",
    benefits_tags: ["rhythmus", "aufmerksamkeit"],
    notes: "",
    active: true
  },

  {
    id: "game-013",
    source: "gold",
    locked: true,
    title: "Becher stapeln",
    age_text: "1–2 Jahre",
    age_min: 1,
    age_max: 2,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Plastikbecher",
    materials: ["becher"],
    instructions: [
      "Stapelt Becher zu einem Turm.",
      "Dein Kind darf ihn umwerfen.",
      "Baut ihn gemeinsam wieder auf.",
      "Variante: nach Farben oder Größen stapeln.",
      "Wettbewerb: Wer baut höher?"
    ],
    benefits_text: "Motorik und Ursache-Wirkung-Verständnis",
    benefits_tags: ["motorik"],
    notes: "",
    active: true
  },

  {
    id: "game-014",
    source: "gold",
    locked: true,
    title: "Wasser spritzen",
    age_text: "1–2 Jahre",
    age_min: 1,
    age_max: 2,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Schüssel, Wasser",
    materials: ["schuessel", "wasser"],
    instructions: [
      "Gib deinem Kind Wasser in eine Schüssel.",
      "Es darf mit Händen klatschen und spritzen.",
      "Variante: mit Bechern Wasser umfüllen.",
      "Spielzeug hinzufügen."
    ],
    benefits_text: "Sensorik und Entspannung",
    benefits_tags: ["sensorik"],
    notes: "",
    active: true
  },

  {
    id: "game-015",
    source: "gold",
    locked: true,
    title: "Schnell zeigen",
    age_text: "3–4 Jahre",
    age_min: 3,
    age_max: 4,
    time_text: "3–5 Minuten",
    time_bucket: "3-5",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Sage: „Zeig mir etwas Rotes / Großes / Rundes!“",
      "Dein Kind reagiert sofort.",
      "Tempo steigern.",
      "Mehrere Aufgaben kombinieren."
    ],
    benefits_text: "Aufmerksamkeit und Denken",
    benefits_tags: ["aufmerksamkeit", "denken"],
    notes: "",
    active: true
  },

  {
    id: "game-016",
    source: "gold",
    locked: true,
    title: "Mini-Bauprojekt",
    age_text: "5–7 Jahre",
    age_min: 5,
    age_max: 7,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Papier, Kleber",
    materials: ["papier", "kleber"],
    instructions: [
      "Baue ein kleines Objekt (Haus, Auto).",
      "Dein Kind erklärt, was es gebaut hat.",
      "Variante: nach Thema bauen."
    ],
    benefits_text: "Kreativität und Planung",
    benefits_tags: ["kreativitaet", "planung"],
    notes: "",
    active: true
  },

  {
    id: "game-017",
    source: "gold",
    locked: true,
    title: "Finger-Farben",
    age_text: "1–3 Jahre",
    age_min: 1,
    age_max: 3,
    time_text: "3–5 Minuten",
    time_bucket: "3-5",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Male mit dem Finger langsame Linien auf den Tisch (gerade, Kreis, Wellen).",
      "Das Kind verfolgt deine Bewegung mit seinem Finger.",
      "Sage dabei: „hoch“, „runter“, „Kreis“…",
      "Danach tauscht ihr die Rollen."
    ],
    benefits_text: "Aufmerksamkeit, Feinmotorik und erstes Verständnis von Formen",
    benefits_tags: ["aufmerksamkeit", "feinmotorik"],
    notes: "",
    active: true
  },

  {
    id: "game-018",
    source: "gold",
    locked: true,
    title: "Schnell finden",
    age_text: "3–5 Jahre",
    age_min: 3,
    age_max: 5,
    time_text: "3–5 Minuten",
    time_bucket: "3-5",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Sage: „Finde etwas Rundes / Weiches / Rotes!“",
      "Dein Kind sucht so schnell wie möglich im Raum.",
      "Steigere das Tempo.",
      "Kombiniere Aufgaben: „Etwas Kleines UND Blaues!“"
    ],
    benefits_text: "Denken, Reaktion und Wahrnehmung",
    benefits_tags: ["denken", "reaktion"],
    notes: "",
    active: true
  },

  {
    id: "game-019",
    source: "gold",
    locked: true,
    title: "Mini-Verstecken",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "3–5 Minuten",
    time_bucket: "3-5",
    material_mode: "with_material",
    materials_text: "Spielzeug",
    materials: ["spielzeug"],
    instructions: [
      "Verstecke ein Spielzeug im Raum (sichtbar → später schwerer).",
      "Dein Kind sucht es.",
      "Gib Hinweise: „warm… kalt… heiß!“",
      "Danach darf dein Kind verstecken."
    ],
    benefits_text: "Aufmerksamkeit und Gedächtnis",
    benefits_tags: ["aufmerksamkeit", "gedaechtnis"],
    notes: "",
    active: true
  },

  {
    id: "game-020",
    source: "gold",
    locked: true,
    title: "Form zeigen",
    age_text: "3–5 Jahre",
    age_min: 3,
    age_max: 5,
    time_text: "3–5 Minuten",
    time_bucket: "3-5",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Sage eine Form: Kreis, Quadrat, Dreieck.",
      "Dein Kind sucht im Raum etwas mit dieser Form.",
      "Danach zeigt es oder beschreibt es.",
      "Schwieriger: mehrere Formen gleichzeitig."
    ],
    benefits_text: "Wahrnehmung und Denken",
    benefits_tags: ["wahrnehmung", "denken"],
    notes: "",
    active: true
  }

,
  {
    id: "game-021",
    source: "gold",
    locked: true,
    title: "Besteck sortieren",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Löffel, Gabeln, Besteck-Organizer",
    materials: ["loeffel", "gabeln"],
    instructions: [
      "Lege sichere Besteckteile bereit (z. B. Teelöffel, Gabeln).",
      "Zeige deinem Kind den Besteck-Organizer.",
      "Bitte es, das Besteck richtig zu sortieren (Löffel zu Löffeln usw.).",
      "Macht daraus ein kleines Aufräumspiel."
    ],
    benefits_text: "Logisches Denken und Alltagskompetenz",
    benefits_tags: ["logik", "alltag"],
    notes: "",
    active: true
  },

  {
    id: "game-022",
    source: "gold",
    locked: true,
    title: "Turm aus Deckeln",
    age_text: "1–6 Jahre",
    age_min: 1,
    age_max: 6,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Deckel",
    materials: ["deckel"],
    instructions: [
      "Sammelt viele Plastikdeckel.",
      "Stapelt sie zu einem möglichst hohen Turm.",
      "Für ältere Kinder: nur mit einer Hand bauen.",
      "Achtet darauf, ruhig und genau zu arbeiten."
    ],
    benefits_text: "Konzentration und Feinmotorik",
    benefits_tags: ["konzentration", "feinmotorik"],
    notes: "",
    active: true
  },

  {
    id: "game-023",
    source: "gold",
    locked: true,
    title: "Spardose-Spiel",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Dose mit Plastikdeckel, Münzen",
    materials: ["dose", "deckel", "muenzen"],
    instructions: [
      "Schneide einen schmalen Schlitz in den Deckel.",
      "Zeige deinem Kind, wie man Münzen hineinsteckt.",
      "Wenn die Dose voll ist, leert ihr sie gemeinsam und beginnt von vorn."
    ],
    benefits_text: "Hand-Auge-Koordination und Geduld",
    benefits_tags: ["koordination", "geduld"],
    notes: "",
    active: true
  },

  {
    id: "game-024",
    source: "gold",
    locked: true,
    title: "Farben sortieren",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Deckel",
    materials: ["deckel"],
    instructions: [
      "Sammelt alle Deckel und legt sie in eine große Schale.",
      "Bitte dein Kind, sie nach Farben zu sortieren.",
      "Für Fortgeschrittene: nach Größe sortieren oder Muster legen."
    ],
    benefits_text: "Logik und Farberkennung",
    benefits_tags: ["logik", "farben"],
    notes: "",
    active: true
  },

  {
    id: "game-025",
    source: "gold",
    locked: true,
    title: "Weich oder hart?",
    age_text: "1–2 Jahre",
    age_min: 1,
    age_max: 2,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Spielzeug",
    materials: ["spielzeug"],
    instructions: [
      "Sammelt 6–8 Gegenstände – weiche und harte.",
      "Gib deinem Kind jeweils einen Gegenstand und sage: „weich“ oder „hart“.",
      "Legt zwei Haufen: weich hier, hart dort.",
      "Danach versucht dein Kind selbst zu unterscheiden und zu sortieren."
    ],
    benefits_text: "Tastwahrnehmung und erstes logisches Denken",
    benefits_tags: ["sensorik", "logik"],
    notes: "",
    active: true
  },

  {
    id: "game-026",
    source: "gold",
    locked: true,
    title: "Muster nachlegen",
    age_text: "1–6 Jahre",
    age_min: 1,
    age_max: 6,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Deckel, Papier, Stifte",
    materials: ["deckel", "papier", "stifte"],
    instructions: [
      "Male einfache Farbfolgen auf Papier (z. B. rot–blau–rot–blau).",
      "Gib deinem Kind passende Deckel.",
      "Es legt die Deckel in derselben Reihenfolge auf die Kreise.",
      "Für Fortgeschrittene: eigene Muster erfinden."
    ],
    benefits_text: "Logisches Denken und Mustererkennung",
    benefits_tags: ["logik", "muster"],
    notes: "",
    active: true
  },

  {
    id: "game-027",
    source: "gold",
    locked: true,
    title: "Nudel-Kette",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Penne, Schnur",
    materials: ["nudeln", "schnur"],
    instructions: [
      "Nimm Nudeln mit großem Loch und eine feste Schnur.",
      "Zeige deinem Kind, wie man die Nudeln auffädelt.",
      "Es entsteht eine kleine „Kette“.",
      "Mache am Ende einen Knoten, damit nichts herunterfällt."
    ],
    benefits_text: "Feinmotorik und Koordination",
    benefits_tags: ["feinmotorik", "koordination"],
    notes: "",
    active: true
  },

  {
    id: "game-028",
    source: "gold",
    locked: true,
    title: "Fühlkiste",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Reis, kleine Spielzeuge",
    materials: ["reis", "spielzeuge"],
    instructions: [
      "Verstecke kleine Figuren im Reis oder einer anderen Körnermasse.",
      "Dein Kind sucht sie mit den Händen.",
      "Wenn es etwas findet, benennt ihr gemeinsam das Tier oder den Gegenstand."
    ],
    benefits_text: "Tastsinn und Sprachentwicklung",
    benefits_tags: ["sensorik", "sprache"],
    notes: "",
    active: true
  },

  {
    id: "game-029",
    source: "gold",
    locked: true,
    title: "Rettungsmission",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Karton, Klebeband, Spielzeug",
    materials: ["karton", "klebeband", "spielzeug"],
    instructions: [
      "Klebe kleine Spielzeuge mit Klebeband auf Karton.",
      "Aufgabe des Kindes: alle „befreien“.",
      "Es zieht das Klebeband vorsichtig ab.",
      "Macht daraus ein kleines Rettungsspiel."
    ],
    benefits_text: "Handkraft und Koordination",
    benefits_tags: ["kraft", "koordination"],
    notes: "",
    active: true
  },

  {
    id: "game-030",
    source: "gold",
    locked: true,
    title: "Socken sortieren",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Kindersocken",
    materials: ["socken"],
    instructions: [
      "Lege viele verschiedene Socken in die Mitte.",
      "Dein Kind sucht passende Paare.",
      "Gemeinsam rollt ihr sie zusammen.",
      "Macht daraus ein kleines Aufräumspiel."
    ],
    benefits_text: "Logik und visuelle Wahrnehmung",
    benefits_tags: ["logik", "wahrnehmung"],
    notes: "",
    active: true
  }

,
  {
    id: "game-031",
    source: "gold",
    locked: true,
    title: "Alufolien-Bälle",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Alufolie, Kiste",
    materials: ["alufolie", "kiste"],
    instructions: [
      "Gib deinem Kind Alufolie.",
      "Es zerreißt sie und formt kleine glänzende Bälle.",
      "Werft sie in eine Kiste.",
      "Macht ein kleines Wettbewerbsspiel daraus."
    ],
    benefits_text: "Feinmotorik und Sensorik",
    benefits_tags: ["feinmotorik", "sensorik"],
    notes: "",
    active: true
  },

  {
    id: "game-032",
    source: "gold",
    locked: true,
    title: "Knister-Socken",
    age_text: "1–2 Jahre",
    age_min: 1,
    age_max: 2,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Kindersocken, Papier",
    materials: ["socken", "papier"],
    instructions: [
      "Nimm ein Paar saubere Socken.",
      "Fülle sie mit zerknülltem Papier oder Alufolie.",
      "Mache einen Knoten hinein.",
      "Dein Kind kann sie drücken, werfen und neue Geräusche entdecken."
    ],
    benefits_text: "Sensorik und Wahrnehmung",
    benefits_tags: ["sensorik", "wahrnehmung"],
    notes: "",
    active: true
  },

  {
    id: "game-033",
    source: "gold",
    locked: true,
    title: "Sensorischer Shaker",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Plastikflasche, Reis, Glitzer, Wasser",
    materials: ["flasche", "reis", "glitzer", "wasser"],
    instructions: [
      "Fülle etwas Reis und Glitzer in eine Plastikflasche und gib Wasser dazu.",
      "Verschließe die Flasche gut.",
      "Dein Kind kann die Flasche schütteln und beobachten, wie sich alles bewegt."
    ],
    benefits_text: "Visuelle Wahrnehmung und Beruhigung",
    benefits_tags: ["wahrnehmung", "ruhe"],
    notes: "",
    active: true
  },

  {
    id: "game-034",
    source: "gold",
    locked: true,
    title: "Autobahn-Rampe",
    age_text: "1–2 Jahre",
    age_min: 1,
    age_max: 2,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Karton, Spielzeugautos",
    materials: ["karton", "autos"],
    instructions: [
      "Lehne ein Stück Karton an ein Sofa oder einen Bücherstapel – es entsteht eine Rampe.",
      "Lass ein Auto von oben herunterrollen.",
      "Dein Kind fängt es unten auf und gibt es zurück.",
      "Erhöhe nach und nach den Winkel für mehr Geschwindigkeit."
    ],
    benefits_text: "Koordination und Ursache-Wirkung-Verständnis",
    benefits_tags: ["koordination", "logik"],
    notes: "",
    active: true
  },

  {
    id: "game-035",
    source: "gold",
    locked: true,
    title: "Klebeschritte",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Malerband",
    materials: ["klebeband"],
    instructions: [
      "Klebe Streifen aus Malerband auf den Boden (wie kleine Wege).",
      "Dein Kind läuft darüber und versucht, genau darauf zu treten.",
      "Variiere die Abstände und Breiten.",
      "Wer daneben tritt, beginnt von vorne."
    ],
    benefits_text: "Gleichgewicht und Koordination",
    benefits_tags: ["gleichgewicht", "koordination"],
    notes: "",
    active: true
  },

  {
    id: "game-036",
    source: "gold",
    locked: true,
    title: "Wasser umfüllen",
    age_text: "1–2 Jahre",
    age_min: 1,
    age_max: 2,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Schüssel, Wasser, Löffel",
    materials: ["schuessel", "wasser", "loeffel"],
    instructions: [
      "Stelle zwei Gefäße bereit – eines mit Wasser, eines leer.",
      "Gib deinem Kind einen Löffel.",
      "Es füllt das Wasser nach und nach um.",
      "Lass ihm Zeit – der Prozess macht Spaß."
    ],
    benefits_text: "Feinmotorik und Konzentration",
    benefits_tags: ["feinmotorik", "konzentration"],
    notes: "",
    active: true
  },

  {
    id: "game-037",
    source: "gold",
    locked: true,
    title: "Hindernis-Parcours zuhause",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Kissen",
    materials: ["kissen"],
    instructions: [
      "Lege Kissen auf den Boden (in einer Linie, im Kreis oder im Zickzack).",
      "Dein Kind läuft, krabbelt oder springt von Kissen zu Kissen.",
      "Du kannst Regeln hinzufügen: „Der Boden ist Lava!“"
    ],
    benefits_text: "Grobmotorik und Bewegung",
    benefits_tags: ["bewegung", "motorik"],
    notes: "",
    active: true
  },

  {
    id: "game-038",
    source: "gold",
    locked: true,
    title: "Malen mit dem Finger",
    age_text: "1–2 Jahre",
    age_min: 1,
    age_max: 2,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Papier, Wasser, Pinsel",
    materials: ["papier", "wasser", "pinsel"],
    instructions: [
      "Befeuchte den Finger deines Kindes mit Wasser.",
      "Drücke ihn auf dunkles Papier – es entsteht ein Abdruck.",
      "Malt gemeinsam Linien, Kreise oder Spiralen.",
      "Wenn es trocknet, beginnt ihr einfach von vorne."
    ],
    benefits_text: "Sensorik und erste Malbewegungen",
    benefits_tags: ["sensorik", "motorik"],
    notes: "",
    active: true
  },

  {
    id: "game-039",
    source: "gold",
    locked: true,
    title: "Klammer-Zaun",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Schüssel oder Karton, Wäscheklammern",
    materials: ["schuessel", "karton", "klammern"],
    instructions: [
      "Nimm den Rand einer Schüssel oder ein Stück Karton.",
      "Zeige deinem Kind, wie man Klammern daran befestigt.",
      "Baut gemeinsam einen langen „Zaun“."
    ],
    benefits_text: "Feinmotorik und Fingerkraft",
    benefits_tags: ["feinmotorik", "kraft"],
    notes: "",
    active: true
  },

  {
    id: "game-040",
    source: "gold",
    locked: true,
    title: "Igel-Spiel",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Karton, Wäscheklammern",
    materials: ["karton", "klammern"],
    instructions: [
      "Nimm den Rand eines Kartons.",
      "Befestige viele Klammern daran – das sind die „Stacheln“.",
      "Dein Kind nimmt die Klammern ab und setzt sie wieder an."
    ],
    benefits_text: "Fingerkraft und Koordination",
    benefits_tags: ["kraft", "koordination"],
    notes: "",
    active: true
  }

,
  {
    id: "game-041",
    source: "gold",
    locked: true,
    title: "Löffel-Transport",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Löffel, kleine Gegenstände",
    materials: ["loeffel", "gegenstaende"],
    instructions: [
      "Lege kleine Gegenstände bereit.",
      "Das Kind transportiert sie mit einem Löffel von A nach B.",
      "Fällt etwas runter, beginnt es neu.",
      "Steigere die Schwierigkeit durch schnelleres Tempo."
    ],
    benefits_text: "Konzentration und Koordination",
    benefits_tags: ["konzentration", "koordination"],
    notes: "",
    active: true
  },

  {
    id: "game-042",
    source: "gold",
    locked: true,
    title: "Ball balancieren",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Ball",
    materials: ["baelle"],
    instructions: [
      "Lege einen Ball auf einen Löffel oder ein Buch.",
      "Das Kind versucht, ihn zu balancieren.",
      "Geht langsam durch den Raum.",
      "Wer ihn fallen lässt, beginnt neu."
    ],
    benefits_text: "Gleichgewicht und Kontrolle",
    benefits_tags: ["gleichgewicht", "kontrolle"],
    notes: "",
    active: true
  },

  {
    id: "game-043",
    source: "gold",
    locked: true,
    title: "Schatten suchen",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "3–5 Minuten",
    time_bucket: "3-5",
    material_mode: "with_material",
    materials_text: "Lampe, Spielzeug",
    materials: ["licht", "spielzeug"],
    instructions: [
      "Leuchte mit einer Lampe auf ein Spielzeug.",
      "Das Kind beobachtet den Schatten.",
      "Verändert die Position der Lampe.",
      "Frage: „Warum verändert sich der Schatten?“"
    ],
    benefits_text: "Denken und Wahrnehmung",
    benefits_tags: ["denken", "wahrnehmung"],
    notes: "",
    active: true
  },

  {
    id: "game-044",
    source: "gold",
    locked: true,
    title: "Geräusche-Memory",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "3–5 Minuten",
    time_bucket: "3-5",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Mache zwei gleiche Geräusche hintereinander.",
      "Das Kind merkt sich das Geräusch.",
      "Mache danach ein anderes.",
      "Das Kind soll sagen, ob es gleich oder anders ist."
    ],
    benefits_text: "Gedächtnis und Aufmerksamkeit",
    benefits_tags: ["gedaechtnis", "aufmerksamkeit"],
    notes: "",
    active: true
  },

  {
    id: "game-045",
    source: "gold",
    locked: true,
    title: "Mini-Tanzstopp",
    age_text: "1–6 Jahre",
    age_min: 1,
    age_max: 6,
    time_text: "3–10 Minuten",
    time_bucket: "3-5",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Spiele Musik ab.",
      "Alle tanzen frei.",
      "Stoppe die Musik plötzlich.",
      "Alle müssen sofort stillstehen."
    ],
    benefits_text: "Reaktion und Kontrolle",
    benefits_tags: ["reaktion", "kontrolle"],
    notes: "",
    active: true
  },

  {
    id: "game-046",
    source: "gold",
    locked: true,
    title: "Wörter nachsprechen",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "3–5 Minuten",
    time_bucket: "3-5",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Sage ein einfaches Wort.",
      "Das Kind wiederholt es.",
      "Steigere die Schwierigkeit mit längeren Wörtern.",
      "Später kleine Sätze sprechen lassen."
    ],
    benefits_text: "Sprache und Gedächtnis",
    benefits_tags: ["sprache", "gedaechtnis"],
    notes: "",
    active: true
  },

  {
    id: "game-047",
    source: "gold",
    locked: true,
    title: "Gegenstände merken",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "3–5 Minuten",
    time_bucket: "3-5",
    material_mode: "with_material",
    materials_text: "Gegenstände",
    materials: ["gegenstaende"],
    instructions: [
      "Lege 3–5 Gegenstände vor das Kind.",
      "Es schaut sie sich gut an.",
      "Dann deckst du sie ab.",
      "Das Kind nennt, was es gesehen hat."
    ],
    benefits_text: "Gedächtnis und Aufmerksamkeit",
    benefits_tags: ["gedaechtnis", "aufmerksamkeit"],
    notes: "",
    active: true
  },

  {
    id: "game-048",
    source: "gold",
    locked: true,
    title: "Formen laufen",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Klebeband",
    materials: ["klebeband"],
    instructions: [
      "Klebe Formen auf den Boden (Kreis, Quadrat).",
      "Das Kind läuft oder springt von Form zu Form.",
      "Du nennst die Form, zu der es gehen soll."
    ],
    benefits_text: "Bewegung und Formenverständnis",
    benefits_tags: ["bewegung", "formen"],
    notes: "",
    active: true
  },

  {
    id: "game-049",
    source: "gold",
    locked: true,
    title: "Zahlen klatschen",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "3–5 Minuten",
    time_bucket: "3-5",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Sage eine Zahl.",
      "Das Kind klatscht entsprechend oft.",
      "Wechselt euch ab.",
      "Steigere die Zahlen langsam."
    ],
    benefits_text: "Zahlenverständnis und Rhythmus",
    benefits_tags: ["zahlen", "rhythmus"],
    notes: "",
    active: true
  },

  {
    id: "game-050",
    source: "gold",
    locked: true,
    title: "Schnelle Entscheidungen",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "3–5 Minuten",
    time_bucket: "3-5",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Sage schnell hintereinander Aufgaben (z. B. „Spring! Dreh dich! Setz dich!“).",
      "Das Kind reagiert sofort.",
      "Tempo steigern.",
      "Fehler sind erlaubt – Spaß steht im Vordergrund."
    ],
    benefits_text: "Reaktion und Aufmerksamkeit",
    benefits_tags: ["reaktion", "aufmerksamkeit"],
    notes: "",
    active: true
  }

,
  {
    id: "game-051",
    source: "gold",
    locked: true,
    title: "Malen mit Wasser",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Buntes Papier, Pinsel, Wasser",
    materials: ["papier", "pinsel", "wasser"],
    instructions: [
      "Gib deinem Kind einen Pinsel und Wasser.",
      "Es „malt“ auf farbigem Papier – die Spuren werden sichtbar.",
      "Wenn es trocknet, kann man wieder neu malen."
    ],
    benefits_text: "Feinmotorik und Vorbereitung aufs Schreiben",
    benefits_tags: ["feinmotorik", "schreiben"],
    notes: "",
    active: true
  },

  {
    id: "game-052",
    source: "gold",
    locked: true,
    title: "Spaghetti-Spiel",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Gewürzglas, Spaghetti",
    materials: ["glas", "nudeln"],
    instructions: [
      "Nimm ein leeres Glas mit kleinen Öffnungen im Deckel.",
      "Dein Kind steckt die Spaghetti vorsichtig hinein.",
      "Achtet darauf, dass sie nicht brechen."
    ],
    benefits_text: "Feinmotorik und Präzision",
    benefits_tags: ["feinmotorik", "praezision"],
    notes: "",
    active: true
  },

  {
    id: "game-053",
    source: "gold",
    locked: true,
    title: "Wer wohnt im Häuschen?",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Karton, Spielzeuge",
    materials: ["karton", "spielzeuge"],
    instructions: [
      "Nimm eine umgedrehte Kiste mit einem Loch – das ist das „Haus“.",
      "Verstecke ein Spielzeug darin.",
      "Klopfe und frage: „Wer wohnt hier?“",
      "Öffne das Haus und zeige das Tier."
    ],
    benefits_text: "Sprache und Fantasie",
    benefits_tags: ["sprache", "fantasie"],
    notes: "",
    active: true
  },

  {
    id: "game-054",
    source: "gold",
    locked: true,
    title: "Tier-Rettung",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Gummibänder, Spielzeuge",
    materials: ["gummibaender", "spielzeuge"],
    instructions: [
      "Wickle Spielzeuge mit Gummibändern ein.",
      "Dein Kind entfernt die Gummibänder, um sie zu „retten“."
    ],
    benefits_text: "Fingerkraft und Ausdauer",
    benefits_tags: ["kraft", "ausdauer"],
    notes: "",
    active: true
  },

  {
    id: "game-055",
    source: "gold",
    locked: true,
    title: "Zug aus Stühlen",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Stühle",
    materials: ["stuehle"],
    instructions: [
      "Stelle mehrere Stühle in einer Reihe auf.",
      "Setzt euch darauf und spielt „Zug fahren“.",
      "Kündige Haltestellen an: „Nächster Halt – Küche!“",
      "Tauscht die Rollen – dein Kind wird Lokführer."
    ],
    benefits_text: "Fantasie und Sprachentwicklung",
    benefits_tags: ["fantasie", "sprache"],
    notes: "",
    active: true
  },

  {
    id: "game-056",
    source: "gold",
    locked: true,
    title: "Flaschen-Rassel",
    age_text: "1–2 Jahre",
    age_min: 1,
    age_max: 2,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Plastikflasche, Nudeln, Bohnen",
    materials: ["flasche", "nudeln", "bohnen"],
    instructions: [
      "Gib deinem Kind eine leere Flasche und trockene Nudeln oder Bohnen.",
      "Es steckt sie einzeln hinein.",
      "Verschließe die Flasche und schüttelt sie gemeinsam."
    ],
    benefits_text: "Feinmotorik und Geräuschwahrnehmung",
    benefits_tags: ["feinmotorik", "hoeren"],
    notes: "",
    active: true
  },

  {
    id: "game-057",
    source: "gold",
    locked: true,
    title: "Wattestäbchen-Spiel",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Plastikflasche, Wattestäbchen",
    materials: ["flasche", "wattestaebchen"],
    instructions: [
      "Nimm eine Flasche mit schmaler Öffnung.",
      "Dein Kind steckt die Wattestäbchen einzeln hinein.",
      "Zählt die Stäbchen gemeinsam."
    ],
    benefits_text: "Pinzettengriff und Konzentration",
    benefits_tags: ["feinmotorik", "konzentration"],
    notes: "",
    active: true
  },

  {
    id: "game-058",
    source: "gold",
    locked: true,
    title: "Karton-Tunnel",
    age_text: "1–2 Jahre",
    age_min: 1,
    age_max: 2,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Karton",
    materials: ["karton"],
    instructions: [
      "Nimm eine große Kartonkiste.",
      "Öffne beide Seiten – es entsteht ein Tunnel.",
      "Rufe dein Kind: „Kuckuck, komm zu mir!“",
      "Es krabbelt hindurch."
    ],
    benefits_text: "Bewegung und Sicherheit",
    benefits_tags: ["bewegung", "sicherheit"],
    notes: "",
    active: true
  },

  {
    id: "game-059",
    source: "gold",
    locked: true,
    title: "Archäologe im Reis",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Schüssel, Reis, kleine Spielzeuge, Pinsel",
    materials: ["schuessel", "reis", "spielzeuge", "pinsel"],
    instructions: [
      "Verstecke kleine Gegenstände im Reis.",
      "Dein Kind sucht sie mit den Fingern oder einem Pinsel.",
      "Gefundene Dinge werden benannt."
    ],
    benefits_text: "Tastsinn und Konzentration",
    benefits_tags: ["sensorik", "konzentration"],
    notes: "",
    active: true
  },

  {
    id: "game-060",
    source: "gold",
    locked: true,
    title: "Sortierbox",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Eierkarton, Filzstifte, kleine Gegenstände",
    materials: ["eierkarton", "stifte", "gegenstaende"],
    instructions: [
      "Male die Fächer des Eierkartons in verschiedenen Farben an.",
      "Gib deinem Kind passende kleine Gegenstände.",
      "Es sortiert sie nach Farben in die Fächer."
    ],
    benefits_text: "Logik und Farberkennung",
    benefits_tags: ["logik", "farben"],
    notes: "",
    active: true
  }

,
  {
    id: "game-061",
    source: "gold",
    locked: true,
    title: "Buntes Wasser",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Gläser mit Wasser, Lebensmittelfarbe, Löffel",
    materials: ["wasser", "farbe", "loeffel"],
    instructions: [
      "Fülle mehrere Gläser mit Wasser.",
      "Färbe sie in verschiedenen Farben.",
      "Dein Kind mischt die Farben mit einem Löffel.",
      "Zeige einfache Kombinationen (rot + gelb = orange)."
    ],
    benefits_text: "Farbenverständnis und Experimentieren",
    benefits_tags: ["farben", "experiment"],
    notes: "",
    active: true
  },

  {
    id: "game-062",
    source: "gold",
    locked: true,
    title: "Schwimmt oder sinkt?",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Schüssel mit Wasser, verschiedene Gegenstände",
    materials: ["schuessel", "wasser", "gegenstaende"],
    instructions: [
      "Sammelt verschiedene Dinge.",
      "Frage: „Schwimmt das oder geht es unter?“",
      "Legt die Gegenstände ins Wasser und überprüft es."
    ],
    benefits_text: "Erstes naturwissenschaftliches Verständnis",
    benefits_tags: ["natur", "denken"],
    notes: "",
    active: true
  },

  {
    id: "game-063",
    source: "gold",
    locked: true,
    title: "Wattewolken sammeln",
    age_text: "1–2 Jahre",
    age_min: 1,
    age_max: 2,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Wattepads, Schüssel",
    materials: ["watte", "schuessel"],
    instructions: [
      "Verteile Wattepads auf dem Boden.",
      "Gib deinem Kind eine leere Schüssel.",
      "Es sammelt alle „Wolken“ ein und legt sie hinein."
    ],
    benefits_text: "Aufmerksamkeit und Verständnis von Anweisungen",
    benefits_tags: ["aufmerksamkeit", "verstehen"],
    notes: "",
    active: true
  },

  {
    id: "game-064",
    source: "gold",
    locked: true,
    title: "Zauberbeutel",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Stoffbeutel oder Kissenbezug, Spielzeuge",
    materials: ["beutel", "spielzeuge"],
    instructions: [
      "Lege 4–5 bekannte Gegenstände in einen Beutel.",
      "Dein Kind steckt die Hand hinein und zieht einen Gegenstand heraus.",
      "Es versucht vorher zu erraten, was es fühlt."
    ],
    benefits_text: "Tastsinn und Vorstellungskraft",
    benefits_tags: ["sensorik", "fantasie"],
    notes: "",
    active: true
  },

  {
    id: "game-065",
    source: "gold",
    locked: true,
    title: "Trommel-Set",
    age_text: "1–2 Jahre",
    age_min: 1,
    age_max: 2,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Töpfe, Löffel",
    materials: ["toepfe", "loeffel"],
    instructions: [
      "Stelle mehrere Töpfe oder Behälter umgedreht hin.",
      "Gib deinem Kind Löffel.",
      "Zeige, wie man darauf trommelt und verschiedene Geräusche macht."
    ],
    benefits_text: "Rhythmusgefühl und Motorik",
    benefits_tags: ["rhythmus", "motorik"],
    notes: "",
    active: true
  },

  {
    id: "game-066",
    source: "gold",
    locked: true,
    title: "Insel-Hüpfen",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Decke (oder Kissen, Papier)",
    materials: ["tuch", "kissen", "papier"],
    instructions: [
      "Lege „Inseln“ auf den Boden (Decken, Kissen oder Papier).",
      "Dein Kind springt von Insel zu Insel, ohne den Boden zu berühren.",
      "Entferne nach und nach Inseln.",
      "Wer fällt ins „Wasser“?"
    ],
    benefits_text: "Gleichgewicht und Bewegung",
    benefits_tags: ["gleichgewicht", "bewegung"],
    notes: "",
    active: true
  },

  {
    id: "game-067",
    source: "gold",
    locked: true,
    title: "Schatzsuche im Reis",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Reis, kleine Spielzeuge",
    materials: ["reis", "spielzeuge"],
    instructions: [
      "Fülle eine Schüssel mit Reis.",
      "Verstecke kleine Gegenstände darin.",
      "Dein Kind sucht sie mit den Händen.",
      "Tauscht danach die Rollen."
    ],
    benefits_text: "Sensorik und Konzentration",
    benefits_tags: ["sensorik", "konzentration"],
    notes: "",
    active: true
  },

  {
    id: "game-068",
    source: "gold",
    locked: true,
    title: "Familien-Orchester",
    age_text: "1–6 Jahre",
    age_min: 1,
    age_max: 6,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Töpfe",
    materials: ["toepfe"],
    instructions: [
      "Jeder bekommt ein „Instrument“ (Topf, Löffel, Becher mit Reis).",
      "Eine Person dirigiert, die anderen spielen.",
      "Der Dirigent zeigt: leise, laut oder stopp.",
      "Tauscht die Rollen."
    ],
    benefits_text: "Rhythmusgefühl und Zusammenarbeit",
    benefits_tags: ["rhythmus", "team"],
    notes: "",
    active: true
  },

  {
    id: "game-069",
    source: "gold",
    locked: true,
    title: "Knetwürste rollen",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Knete oder Teig",
    materials: ["knete"],
    instructions: [
      "Gib deinem Kind ein Stück Knete.",
      "Zeige, wie man es mit der Hand auf dem Tisch rollt.",
      "Es entstehen lange „Würste“.",
      "Formt daraus Kreise oder einfache Formen."
    ],
    benefits_text: "Feinmotorik und Kreativität",
    benefits_tags: ["feinmotorik", "kreativitaet"],
    notes: "",
    active: true
  },

  {
    id: "game-070",
    source: "gold",
    locked: true,
    title: "Sticker-Wand",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Sticker",
    materials: ["sticker"],
    instructions: [
      "Klebe Sticker in verschiedenen Höhen an Wand oder Tür.",
      "Dein Kind sammelt sie wieder ein.",
      "Klebe einige höher, damit es sich strecken muss."
    ],
    benefits_text: "Bewegung und Zielgenauigkeit",
    benefits_tags: ["bewegung", "ziel"],
    notes: "",
    active: true
  }

,
  {
    id: "game-071",
    source: "gold",
    locked: true,
    title: "Seiltänzer",
    age_text: "3–7 Jahre",
    age_min: 3,
    age_max: 7,
    time_text: "3–10 Minuten",
    time_bucket: "3-5",
    material_mode: "with_material",
    materials_text: "Seil",
    materials: ["schnur"],
    instructions: [
      "Lege ein Seil gerade auf den Boden.",
      "Dein Kind läuft darüber, Ferse an Spitze.",
      "Versucht, das Gleichgewicht zu halten.",
      "Für Fortgeschrittene: Arme ausstrecken oder etwas auf dem Kopf balancieren."
    ],
    benefits_text: "Gleichgewicht und Körperkontrolle",
    benefits_tags: ["gleichgewicht", "koerper"],
    notes: "",
    active: true
  },

  {
    id: "game-072",
    source: "gold",
    locked: true,
    title: "Geheimes Alphabet",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Zahnstocher",
    materials: ["zahnstocher"],
    instructions: [
      "Schütte Zahnstocher vor dein Kind aus.",
      "Nenne einen Buchstaben.",
      "Dein Kind legt ihn mit den Stäbchen nach.",
      "Auch Zahlen oder einfache Formen sind möglich."
    ],
    benefits_text: "Denken und Vorbereitung aufs Schreiben",
    benefits_tags: ["denken", "schreiben"],
    notes: "",
    active: true
  },

  {
    id: "game-073",
    source: "gold",
    locked: true,
    title: "Becher umpusten",
    age_text: "3–7 Jahre",
    age_min: 3,
    age_max: 7,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Plastikbecher, Luftballon",
    materials: ["becher", "luftballon"],
    instructions: [
      "Stelle mehrere leere Becher an den Tischrand.",
      "Dein Kind pustet Luft aus dem Ballon in Richtung Becher.",
      "Ziel: die Becher umstoßen."
    ],
    benefits_text: "Atemkontrolle und Koordination",
    benefits_tags: ["atmung", "koordination"],
    notes: "",
    active: true
  },

  {
    id: "game-074",
    source: "gold",
    locked: true,
    title: "Luft-Fußball",
    age_text: "3–7 Jahre",
    age_min: 3,
    age_max: 7,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Trinkhalm, Papier",
    materials: ["trinkhalm", "papier"],
    instructions: [
      "Forme aus Papier einen kleinen Ball.",
      "Markiere Tore auf dem Tisch.",
      "Spiele mit Trinkhalmen und puste den Ball ins Tor.",
      "Hände sind tabu!"
    ],
    benefits_text: "Atmung und Konzentration",
    benefits_tags: ["atmung", "konzentration"],
    notes: "",
    active: true
  },

  {
    id: "game-075",
    source: "gold",
    locked: true,
    title: "Pompon sortieren",
    age_text: "3–4 Jahre",
    age_min: 3,
    age_max: 4,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Eiswürfelform, Pinzette, Pompons",
    materials: ["eiswuerfelform", "pinzette", "pompons"],
    instructions: [
      "Stelle eine Eiswürfelform bereit.",
      "Dein Kind nimmt Pompons mit einer Pinzette auf.",
      "Legt sie einzeln in die Fächer."
    ],
    benefits_text: "Feinmotorik und Konzentration",
    benefits_tags: ["feinmotorik", "konzentration"],
    notes: "",
    active: true
  },

  {
    id: "game-076",
    source: "gold",
    locked: true,
    title: "Klammer-Konstruktor",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Wäscheklammern",
    materials: ["klammern"],
    instructions: [
      "Gib deinem Kind viele Wäscheklammern.",
      "Baut gemeinsam Formen: Kette, Igel, Krone.",
      "Versucht größere Konstruktionen zu bauen.",
      "Optional: Macht einen kleinen Wettbewerb daraus."
    ],
    benefits_text: "Kreativität und Handkraft",
    benefits_tags: ["kreativitaet", "kraft"],
    notes: "",
    active: true
  },

  {
    id: "game-077",
    source: "gold",
    locked: true,
    title: "Boote pusten",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Wasser, Schüssel, Deckel",
    materials: ["wasser", "schuessel", "deckel"],
    instructions: [
      "Fülle Wasser in eine große Schüssel.",
      "Lege Plastikdeckel hinein – das sind die „Boote“.",
      "Dein Kind pustet sie über das Wasser ans andere Ufer."
    ],
    benefits_text: "Atmung und Konzentration",
    benefits_tags: ["atmung", "konzentration"],
    notes: "",
    active: true
  },

  {
    id: "game-078",
    source: "gold",
    locked: true,
    title: "Punkte verbinden",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Papier, Stifte",
    materials: ["papier", "stifte"],
    instructions: [
      "Zeichne eine einfache Figur aus Punkten.",
      "Nummeriere die Punkte.",
      "Dein Kind verbindet sie der Reihe nach.",
      "Die Figur entsteht sichtbar."
    ],
    benefits_text: "Logik und Feinmotorik",
    benefits_tags: ["logik", "feinmotorik"],
    notes: "",
    active: true
  },

  {
    id: "game-079",
    source: "gold",
    locked: true,
    title: "Zahlen springen",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Papier, Stifte, Klebeband",
    materials: ["papier", "stifte", "klebeband"],
    instructions: [
      "Schreibe Zahlen von 1 bis 10 auf Blätter.",
      "Lege sie auf dem Boden aus.",
      "Nenne eine Zahl – dein Kind springt darauf.",
      "Für Fortgeschrittene: einfache Rechenaufgaben."
    ],
    benefits_text: "Matheverständnis und Bewegung",
    benefits_tags: ["mathe", "bewegung"],
    notes: "",
    active: true
  },

  {
    id: "game-080",
    source: "gold",
    locked: true,
    title: "Monster füttern",
    age_text: "3–4 Jahre",
    age_min: 3,
    age_max: 4,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Karton, Deckel",
    materials: ["karton", "deckel"],
    instructions: [
      "Nimm eine Kartonbox und schneide ein „Maul“ hinein.",
      "Male Augen und Zähne dazu.",
      "Dein Kind wirft Deckel ins „Maul“."
    ],
    benefits_text: "Zielgenauigkeit und Bewegung",
    benefits_tags: ["ziel", "bewegung"],
    notes: "",
    active: true
  }

,
  {
    id: "game-081",
    source: "gold",
    locked: true,
    title: "Spiegel-Zeichnen",
    age_text: "3–7 Jahre",
    age_min: 3,
    age_max: 7,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Papier, Stifte",
    materials: ["papier", "stifte"],
    instructions: [
      "Befestige ein Blatt Papier auf dem Tisch.",
      "Dein Kind hält in jeder Hand einen Stift.",
      "Es zeichnet gleichzeitig mit beiden Händen Formen."
    ],
    benefits_text: "Beidseitige Koordination",
    benefits_tags: ["koordination"],
    notes: "",
    active: true
  },

  {
    id: "game-082",
    source: "gold",
    locked: true,
    title: "Papier-Golf",
    age_text: "3–7 Jahre",
    age_min: 3,
    age_max: 7,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Papier, Karton, Stift",
    materials: ["papier", "karton", "stifte"],
    instructions: [
      "Schneide Löcher in einen Karton.",
      "Forme Papierbälle.",
      "Nutze einen Stift als Schläger.",
      "Ziel: die Bälle in die Löcher schlagen."
    ],
    benefits_text: "Koordination und Zielgenauigkeit",
    benefits_tags: ["koordination", "ziel"],
    notes: "",
    active: true
  },

  {
    id: "game-083",
    source: "gold",
    locked: true,
    title: "Laser-Parcours",
    age_text: "3–7 Jahre",
    age_min: 3,
    age_max: 7,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Seil",
    materials: ["schnur"],
    instructions: [
      "Spanne ein Seil kreuz und quer zwischen Möbeln.",
      "Dein Kind muss hindurch, ohne es zu berühren.",
      "Spielt „Geheimagent“."
    ],
    benefits_text: "Beweglichkeit und Körpergefühl",
    benefits_tags: ["bewegung", "koerper"],
    notes: "",
    active: true
  },

  {
    id: "game-084",
    source: "gold",
    locked: true,
    title: "Hüpfspiel im Flur",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Klebeband",
    materials: ["klebeband"],
    instructions: [
      "Klebe Kästchen (1–9) auf den Boden.",
      "Zeige, wie man darauf hüpft.",
      "Auf bestimmten Feldern mit beiden Füßen landen.",
      "Für Fortgeschrittene: eigene Regeln erfinden."
    ],
    benefits_text: "Koordination und Gleichgewicht",
    benefits_tags: ["koordination", "gleichgewicht"],
    notes: "",
    active: true
  },

  {
    id: "game-085",
    source: "gold",
    locked: true,
    title: "Wolken-Rennen",
    age_text: "3–7 Jahre",
    age_min: 3,
    age_max: 7,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Kissen",
    materials: ["kissen"],
    instructions: [
      "Jeder bekommt zwei kleine Kissen.",
      "Ziel: durch den Raum gehen, nur auf den Kissen.",
      "Das freie Kissen wird immer nach vorne gelegt.",
      "Wer den Boden berührt, beginnt von vorn."
    ],
    benefits_text: "Gleichgewicht und Planung",
    benefits_tags: ["gleichgewicht", "planung"],
    notes: "",
    active: true
  },

  {
    id: "game-086",
    source: "gold",
    locked: true,
    title: "Klammer-Jagd",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Wäscheklammern",
    materials: ["klammern"],
    instructions: [
      "Verstecke 10–15 Klammern im Raum.",
      "Starte eine Stoppuhr.",
      "Dein Kind sammelt sie so schnell wie möglich ein."
    ],
    benefits_text: "Aufmerksamkeit und Bewegung",
    benefits_tags: ["aufmerksamkeit", "bewegung"],
    notes: "",
    active: true
  },

  {
    id: "game-087",
    source: "gold",
    locked: true,
    title: "Klebrige Retter",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Klebeband, kleine Spielzeuge",
    materials: ["klebeband", "spielzeuge"],
    instructions: [
      "Klebe kleine Spielzeuge mit Klebeband am Boden oder Tisch fest.",
      "Dein Kind versucht, sie mit den Fingern zu lösen."
    ],
    benefits_text: "Pinzettengriff und Ausdauer",
    benefits_tags: ["feinmotorik", "ausdauer"],
    notes: "",
    active: true
  },

  {
    id: "game-088",
    source: "gold",
    locked: true,
    title: "Geräusche raten",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Alltagsgegenstände",
    materials: ["gegenstaende"],
    instructions: [
      "Wähle Gegenstände, die Geräusche machen.",
      "Dein Kind schließt die Augen.",
      "Erzeuge ein Geräusch – es rät, was es war.",
      "Für Fortgeschrittene: mehrere Geräusche hintereinander."
    ],
    benefits_text: "Hören und Gedächtnis",
    benefits_tags: ["hoeren", "gedaechtnis"],
    notes: "",
    active: true
  },

  {
    id: "game-089",
    source: "gold",
    locked: true,
    title: "Rückwärts-Basketball",
    age_text: "3–7 Jahre",
    age_min: 3,
    age_max: 7,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Schüssel, Papier",
    materials: ["schuessel", "papier"],
    instructions: [
      "Dein Kind legt sich auf den Rücken.",
      "Stelle eine Schüssel hinter den Kopf.",
      "Es wirft Papierbälle über den Kopf hinein."
    ],
    benefits_text: "Koordination und Spaß",
    benefits_tags: ["koordination"],
    notes: "",
    active: true
  },

  {
    id: "game-090",
    source: "gold",
    locked: true,
    title: "Geschichten erfinden",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Buch",
    materials: ["buch"],
    instructions: [
      "Öffne ein Bilderbuch auf einer zufälligen Seite.",
      "Verdecke den Text.",
      "Dein Kind erfindet eine Geschichte zum Bild.",
      "Stelle Fragen und entwickle die Geschichte weiter."
    ],
    benefits_text: "Sprache und Fantasie",
    benefits_tags: ["sprache", "fantasie"],
    notes: "",
    active: true
  }

,
  {
    id: "game-091",
    source: "gold",
    locked: true,
    title: "Buntes Eis",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Gefärbte Eiswürfel, Schüssel",
    materials: ["eis", "schuessel"],
    instructions: [
      "Friere Wasser mit Lebensmittelfarbe ein.",
      "Gib die bunten Eiswürfel in eine Schüssel mit Wasser.",
      "Beobachtet gemeinsam, wie sie schmelzen und die Farben sich vermischen."
    ],
    benefits_text: "Farbenverständnis und Beobachtung",
    benefits_tags: ["farben", "beobachtung"],
    notes: "",
    active: true
  },

  {
    id: "game-092",
    source: "gold",
    locked: true,
    title: "Geheimbox",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Karton, kleine Gegenstände",
    materials: ["karton", "gegenstaende"],
    instructions: [
      "Schneide ein Loch in einen Karton.",
      "Lege bekannte Gegenstände hinein.",
      "Dein Kind steckt die Hand hinein und errät, was es fühlt."
    ],
    benefits_text: "Tastsinn und Denken",
    benefits_tags: ["sensorik", "denken"],
    notes: "",
    active: true
  },

  {
    id: "game-093",
    source: "gold",
    locked: true,
    title: "Buchstaben-Jagd",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Papier, Stifte",
    materials: ["papier", "stifte"],
    instructions: [
      "Schreibe einen großen Buchstaben auf ein Blatt.",
      "Dein Kind sucht im Raum Dinge, die mit diesem Buchstaben beginnen.",
      "Gefundene Dinge werden benannt oder gezeichnet."
    ],
    benefits_text: "Sprache und Wortschatz",
    benefits_tags: ["sprache", "wortschatz"],
    notes: "",
    active: true
  },

  {
    id: "game-094",
    source: "gold",
    locked: true,
    title: "Tic-Tac-Toe auf dem Boden",
    age_text: "3–7 Jahre",
    age_min: 3,
    age_max: 7,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Klebeband, Deckel",
    materials: ["klebeband", "deckel"],
    instructions: [
      "Klebe ein großes Spielfeld auf den Boden (3×3).",
      "Nutze Deckel als Spielsteine in zwei Farben.",
      "Spielt Tic-Tac-Toe in groß."
    ],
    benefits_text: "Strategisches Denken",
    benefits_tags: ["strategie"],
    notes: "",
    active: true
  },

  {
    id: "game-095",
    source: "gold",
    locked: true,
    title: "Handabdruck-Monster",
    age_text: "3–7 Jahre",
    age_min: 3,
    age_max: 7,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Papier, Stifte",
    materials: ["papier", "stifte"],
    instructions: [
      "Lege die Hand deines Kindes auf Papier und umrande sie.",
      "Malt daraus lustige Monster mit Augen, Zähnen und Armen.",
      "Dein Kind kann sie anschließend ausmalen."
    ],
    benefits_text: "Kreativität und Feinmotorik",
    benefits_tags: ["kreativitaet", "feinmotorik"],
    notes: "",
    active: true
  },

  {
    id: "game-096",
    source: "gold",
    locked: true,
    title: "Papier-Staubsauger",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Trinkhalm, Papier, Schüssel",
    materials: ["trinkhalm", "papier", "schuessel"],
    instructions: [
      "Schneide Papier in kleine Stücke.",
      "Dein Kind saugt sie mit einem Strohhalm an.",
      "Trägt sie zur Schüssel und lässt sie fallen."
    ],
    benefits_text: "Atemkontrolle und Konzentration",
    benefits_tags: ["atmung", "konzentration"],
    notes: "",
    active: true
  },

  {
    id: "game-097",
    source: "gold",
    locked: true,
    title: "Lustige Gesichter",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Verschiedene Gegenstände",
    materials: ["gegenstaende"],
    instructions: [
      "Lege verschiedene Dinge auf den Tisch.",
      "Nutzt sie als Augen, Haare oder Ohren.",
      "Baut gemeinsam lustige Gesichter.",
      "Verändert sie immer wieder neu."
    ],
    benefits_text: "Fantasie und Kreativität",
    benefits_tags: ["fantasie", "kreativitaet"],
    notes: "",
    active: true
  },

  {
    id: "game-098",
    source: "gold",
    locked: true,
    title: "Igel aus Nudeln",
    age_text: "3–4 Jahre",
    age_min: 3,
    age_max: 4,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Knete oder Teig, Spaghetti",
    materials: ["knete", "nudeln"],
    instructions: [
      "Forme eine Kugel aus Knete oder Teig.",
      "Gib deinem Kind trockene Spaghetti.",
      "Es steckt sie hinein – so entsteht ein „Igel“."
    ],
    benefits_text: "Konzentration und Feinmotorik",
    benefits_tags: ["konzentration", "feinmotorik"],
    notes: "",
    active: true
  },

  {
    id: "game-099",
    source: "gold",
    locked: true,
    title: "Waage aus Kleiderbügel",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Kleiderbügel, Schnur, kleine Gegenstände",
    materials: ["kleiderbuegel", "schnur", "gegenstaende"],
    instructions: [
      "Hänge einen Kleiderbügel auf.",
      "Befestige an beiden Seiten kleine Becher oder Tüten.",
      "Lege Gegenstände hinein und vergleiche das Gewicht.",
      "Rate vorher: Was ist schwerer?"
    ],
    benefits_text: "Logisches Denken und erstes Verständnis von Gewicht",
    benefits_tags: ["logik", "denken"],
    notes: "",
    active: true
  },

  {
    id: "game-100",
    source: "gold",
    locked: true,
    title: "Karton-Labyrinth",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Papprollen, Klebeband, Bälle",
    materials: ["papprolle", "klebeband", "baelle"],
    instructions: [
      "Klebe Papprollen schräg an Wand oder Tür.",
      "Zeige, wie ein Ball oben hineingeworfen wird.",
      "Er rollt nach unten durch die Bahnen.",
      "Verändere den Aufbau für neue Wege."
    ],
    benefits_text: "Räumliches Denken und Verständnis von Bewegung",
    benefits_tags: ["raum", "logik"],
    notes: "",
    active: true
  }

,
  {
    id: "game-101",
    source: "gold",
    locked: true,
    title: "Nudel-Konstruktor",
    age_text: "1–6 Jahre",
    age_min: 1,
    age_max: 6,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Knete oder Teig, Nudeln",
    materials: ["knete", "nudeln"],
    instructions: [
      "Forme kleine Kugeln aus Knete.",
      "Nutze Nudeln als Verbindungsstücke.",
      "Baue Häuser, Zäune oder Figuren."
    ],
    benefits_text: "Kreativität und räumliches Denken",
    benefits_tags: ["kreativitaet", "raum"],
    notes: "",
    active: true
  },

  {
    id: "game-102",
    source: "gold",
    locked: true,
    title: "Brückenbauer",
    age_text: "3–7 Jahre",
    age_min: 3,
    age_max: 7,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Plastikbecher, Karton",
    materials: ["becher", "karton"],
    instructions: [
      "Stelle Becher als Stützen auf.",
      "Lege Karton darüber als Brücke.",
      "Versucht, eine möglichst lange Brücke zu bauen."
    ],
    benefits_text: "Logik und Problemlösung",
    benefits_tags: ["logik", "problemloesung"],
    notes: "",
    active: true
  },

  {
    id: "game-103",
    source: "gold",
    locked: true,
    title: "Zielwurf-Spiel",
    age_text: "3–7 Jahre",
    age_min: 3,
    age_max: 7,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Socken, Klebeband",
    materials: ["socken", "klebeband"],
    instructions: [
      "Klebe Linien auf den Boden.",
      "Jede Linie hat unterschiedliche Punkte.",
      "Wirf Socken und versuche, weit zu treffen."
    ],
    benefits_text: "Zielgenauigkeit und Zählen",
    benefits_tags: ["koordination", "zaehlen"],
    notes: "",
    active: true
  },

  {
    id: "game-104",
    source: "gold",
    locked: true,
    title: "Klebeband-Straße",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Klebeband, Spielzeugautos",
    materials: ["klebeband", "autos"],
    instructions: [
      "Klebe Straßen auf den Boden.",
      "Baue Kreuzungen und Parkplätze.",
      "Dein Kind fährt mit Autos entlang der Linien."
    ],
    benefits_text: "Fantasie und Spielstruktur",
    benefits_tags: ["fantasie", "struktur"],
    notes: "",
    active: true
  },

  {
    id: "game-105",
    source: "gold",
    locked: true,
    title: "Papier-Mosaik",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Papier, Karton, Kleber",
    materials: ["papier", "karton", "kleber"],
    instructions: [
      "Reiße Papier in kleine Stücke.",
      "Zeichne eine einfache Form auf Karton.",
      "Klebe die Stücke dicht nebeneinander darauf.",
      "Lass alles trocknen – fertig ist das Bild."
    ],
    benefits_text: "Kreativität und Feinmotorik",
    benefits_tags: ["kreativitaet", "feinmotorik"],
    notes: "",
    active: true
  },

  {
    id: "game-106",
    source: "gold",
    locked: true,
    title: "Knete-Zoo",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Knete oder Teig",
    materials: ["knete"],
    instructions: [
      "Formt gemeinsam Tiere aus Knete.",
      "Beginnt mit einfachen Formen (z. B. Kugel → Schildkröte).",
      "Baut einen „Zoo“ auf einem Blatt Papier.",
      "Gebt den Tieren Namen und Geschichten."
    ],
    benefits_text: "Fantasie und Kreativität",
    benefits_tags: ["fantasie", "kreativitaet"],
    notes: "",
    active: true
  },

  {
    id: "game-107",
    source: "gold",
    locked: true,
    title: "Papiermasken",
    age_text: "3–7 Jahre",
    age_min: 3,
    age_max: 7,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Papier, Stifte, Schnur",
    materials: ["papier", "stifte", "schnur"],
    instructions: [
      "Falte ein Blatt Papier und halte es ans Gesicht.",
      "Markiere die Position der Augen.",
      "Schneide die Augen aus und male ein Gesicht dazu.",
      "Befestige eine Schnur – fertig ist die Maske."
    ],
    benefits_text: "Kreativität und Feinmotorik",
    benefits_tags: ["kreativitaet", "feinmotorik"],
    notes: "",
    active: true
  },

  {
    id: "game-108",
    source: "gold",
    locked: true,
    title: "Minenfeld-Spiel",
    age_text: "3–7 Jahre",
    age_min: 3,
    age_max: 7,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Becher oder Gegenstände, Tuch",
    materials: ["becher", "gegenstaende", "tuch"],
    instructions: [
      "Verteile Gegenstände im Raum.",
      "Verbinde deinem Kind die Augen.",
      "Gib Anweisungen: „Zwei Schritte vor, eins nach links.“",
      "Ziel: den Raum ohne Berührung durchqueren."
    ],
    benefits_text: "Vertrauen und Orientierung",
    benefits_tags: ["vertrauen", "orientierung"],
    notes: "",
    active: true
  },

  {
    id: "game-109",
    source: "gold",
    locked: true,
    title: "Luft-Zielspiel",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Papier, Trinkhalm, Schüssel",
    materials: ["papier", "trinkhalm", "schuessel"],
    instructions: [
      "Forme kleine Papierbälle.",
      "Stelle eine Schüssel als Ziel auf.",
      "Dein Kind pustet die Bälle mit einem Trinkhalm hinein."
    ],
    benefits_text: "Atmung und Zielgenauigkeit",
    benefits_tags: ["atmung", "koordination"],
    notes: "",
    active: true
  },

  {
    id: "game-110",
    source: "gold",
    locked: true,
    title: "Balance-Spiel",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Papprolle, Buch, kleine Gegenstände",
    materials: ["papprolle", "buch", "gegenstaende"],
    instructions: [
      "Lege eine Rolle auf den Boden.",
      "Lege ein Buch darauf (wie eine Wippe).",
      "Dein Kind legt Gegenstände darauf, ohne dass es kippt."
    ],
    benefits_text: "Gleichgewicht und Verständnis von Gewicht",
    benefits_tags: ["gleichgewicht", "logik"],
    notes: "",
    active: true
  }

,
  {
    id: "game-111",
    source: "gold",
    locked: true,
    title: "Raupe aus Deckeln",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Deckel, Klebeband, Stifte",
    materials: ["deckel", "klebeband", "stifte"],
    instructions: [
      "Lege mehrere Deckel in einer Reihe aus.",
      "Verbinde sie unten mit Klebeband.",
      "Male ein Gesicht auf den ersten Deckel.",
      "Dein Kind gestaltet die Raupe bunt."
    ],
    benefits_text: "Kreativität und Feinmotorik",
    benefits_tags: ["kreativitaet", "feinmotorik"],
    notes: "",
    active: true
  },

  {
    id: "game-112",
    source: "gold",
    locked: true,
    title: "Kissen-Turm",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Kissen",
    materials: ["kissen"],
    instructions: [
      "Sammelt alle Kissen im Haus.",
      "Baut gemeinsam einen möglichst hohen Turm.",
      "Lasst euer Kind den Turm umwerfen."
    ],
    benefits_text: "Bewegung und Freude",
    benefits_tags: ["bewegung"],
    notes: "",
    active: true
  },

  {
    id: "game-113",
    source: "gold",
    locked: true,
    title: "Memory mit Deckeln",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Deckel von Feuchttüchern, Karton, Sticker",
    materials: ["deckel", "karton", "sticker"],
    instructions: [
      "Klebe die Deckel auf Karton.",
      "Verstecke darunter passende Sticker-Paare.",
      "Das Kind öffnet die Deckel und sucht gleiche Bilder.",
      "Schließt die Deckel wieder, wenn es nicht passt."
    ],
    benefits_text: "Gedächtnis und Feinmotorik",
    benefits_tags: ["gedaechtnis", "feinmotorik"],
    notes: "",
    active: true
  },

  {
    id: "game-114",
    source: "gold",
    locked: true,
    title: "Regenbogen im Glas",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Lebensmittelfarbe, Wasser, Zucker",
    materials: ["farbe", "wasser", "zucker"],
    instructions: [
      "Bereite mehrere Gläser mit unterschiedlich viel Zucker vor.",
      "Färbe jedes Glas in einer anderen Farbe.",
      "Gieße die Flüssigkeiten langsam übereinander.",
      "Es entsteht ein Regenbogen im Glas."
    ],
    benefits_text: "Verständnis für Farben und Experimente",
    benefits_tags: ["farben", "experiment"],
    notes: "",
    active: true
  },

  {
    id: "game-115",
    source: "gold",
    locked: true,
    title: "Rennstrecke aus Rollen",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Pappröhren, Klebeband, Spielautos",
    materials: ["papprolle", "klebeband", "autos"],
    instructions: [
      "Verbinde mehrere Rollen zu einer langen Bahn.",
      "Befestige sie schräg an einem Stuhl.",
      "Lass Autos hindurchrollen und unten auffangen."
    ],
    benefits_text: "Logik und Bewegung",
    benefits_tags: ["logik", "bewegung"],
    notes: "",
    active: true
  },

  {
    id: "game-116",
    source: "gold",
    locked: true,
    title: "Schattentheater",
    age_text: "3–7 Jahre",
    age_min: 3,
    age_max: 7,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Decke oder Tuch, Lichtquelle",
    materials: ["tuch", "licht"],
    instructions: [
      "Spanne ein Tuch zwischen zwei Stühlen.",
      "Stelle eine Lampe dahinter.",
      "Forme Figuren mit den Händen.",
      "Spielt ein kleines Theaterstück."
    ],
    benefits_text: "Fantasie und Sprache",
    benefits_tags: ["fantasie", "sprache"],
    notes: "",
    active: true
  },

  {
    id: "game-117",
    source: "gold",
    locked: true,
    title: "Rollenspiel „Laden“",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Lebensmittel oder Gegenstände",
    materials: ["lebensmittel", "gegenstaende"],
    instructions: [
      "Lege verschiedene Dinge als „Waren“ aus.",
      "Einer ist Verkäufer, der andere Käufer.",
      "Nennt Preise und spielt Einkaufen.",
      "Tauscht die Rollen."
    ],
    benefits_text: "Sprache und soziale Fähigkeiten",
    benefits_tags: ["sprache", "sozial"],
    notes: "",
    active: true
  },

  {
    id: "game-118",
    source: "gold",
    locked: true,
    title: "Fischen mit der Kelle",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Wasser, Schüssel, Deckel, Kelle",
    materials: ["wasser", "schuessel", "deckel", "loeffel"],
    instructions: [
      "Fülle eine Schüssel mit Wasser.",
      "Gib Deckel oder kleine Gegenstände hinein.",
      "Das Kind fischt sie mit einer Kelle heraus.",
      "Lege sie in eine zweite Schüssel."
    ],
    benefits_text: "Konzentration und Koordination",
    benefits_tags: ["konzentration", "koordination"],
    notes: "",
    active: true
  },

  {
    id: "game-119",
    source: "gold",
    locked: true,
    title: "Eis-Ausgrabung",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Eis, kleine Spielzeuge, Wasser, Salz",
    materials: ["eis", "spielzeuge", "wasser", "salz"],
    instructions: [
      "Friere kleine Spielzeuge in Eis ein.",
      "Lege den Eisblock in eine Schüssel.",
      "Gib warmes Wasser oder etwas Salz dazu.",
      "Das Kind befreit die Spielzeuge."
    ],
    benefits_text: "Geduld und Entdecken",
    benefits_tags: ["geduld", "entdecken"],
    notes: "",
    active: true
  },

  {
    id: "game-120",
    source: "gold",
    locked: true,
    title: "Reim-Spiel",
    age_text: "3–7 Jahre",
    age_min: 3,
    age_max: 7,
    time_text: "3–10 Minuten",
    time_bucket: "3-5",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Du sagst ein Wort, z. B. „Katze“.",
      "Das Kind findet Reime: „Tatze, Mütze…“.",
      "Wechselt euch ab, bis euch nichts mehr einfällt.",
      "Am Ende erfindet ihr einen lustigen Reim-Satz."
    ],
    benefits_text: "Sprache und Kreativität",
    benefits_tags: ["sprache", "kreativitaet"],
    notes: "",
    active: true
  }

,
  {
    id: "game-121",
    source: "gold",
    locked: true,
    title: "Stopp!",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "3–10 Minuten",
    time_bucket: "3-5",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Das Kind bewegt sich frei oder tanzt.",
      "Bei „Stopp!“ bleibt es sofort stehen.",
      "Wechselt die Rollen."
    ],
    benefits_text: "Selbstkontrolle und Reaktionsfähigkeit",
    benefits_tags: ["selbstkontrolle", "reaktion"],
    notes: "",
    active: true
  },

  {
    id: "game-122",
    source: "gold",
    locked: true,
    title: "Was male ich?",
    age_text: "3–7 Jahre",
    age_min: 3,
    age_max: 7,
    time_text: "3–10 Minuten",
    time_bucket: "3-5",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Das Kind dreht sich mit dem Rücken zu dir.",
      "Du zeichnest mit dem Finger eine Form auf seinen Rücken.",
      "Das Kind errät, was es ist.",
      "Tauscht die Rollen."
    ],
    benefits_text: "Wahrnehmung und Entspannung",
    benefits_tags: ["wahrnehmung", "entspannung"],
    notes: "",
    active: true
  },

  {
    id: "game-123",
    source: "gold",
    locked: true,
    title: "Geheimagent",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "3–10 Minuten",
    time_bucket: "3-5",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Lege 5–7 kleine Gegenstände hin.",
      "Das Kind merkt sie sich.",
      "Es dreht sich um, du entfernst einen Gegenstand.",
      "Das Kind errät, was fehlt."
    ],
    benefits_text: "Gedächtnis und Aufmerksamkeit",
    benefits_tags: ["gedaechtnis", "aufmerksamkeit"],
    notes: "",
    active: true
  },

  {
    id: "game-124",
    source: "gold",
    locked: true,
    title: "Schritte zählen",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "3–5 Minuten",
    time_bucket: "3-5",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Wählt zwei Punkte im Raum.",
      "Geht zusammen und zählt die Schritte laut.",
      "Wiederholt mit kleinen Schritten."
    ],
    benefits_text: "Zahlenverständnis und Bewegung",
    benefits_tags: ["zahlen", "bewegung"],
    notes: "",
    active: true
  },

  {
    id: "game-125",
    source: "gold",
    locked: true,
    title: "Buchstabe auf dem Rücken",
    age_text: "5–7 Jahre",
    age_min: 5,
    age_max: 7,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Das Kind dreht sich mit dem Rücken zu dir.",
      "Zeichne mit dem Finger einen Buchstaben auf seinen Rücken.",
      "Das Kind errät, welcher Buchstabe es ist.",
      "Danach könnt ihr das ganze Wort buchstabieren.",
      "Tauscht die Rollen."
    ],
    benefits_text: "Sprachgefühl und Wahrnehmung",
    benefits_tags: ["sprache", "wahrnehmung"],
    notes: "",
    active: true
  },

  {
    id: "game-126",
    source: "gold",
    locked: true,
    title: "Zahlenketten",
    age_text: "5–7 Jahre",
    age_min: 5,
    age_max: 7,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Nennt Zahlen in einer bestimmten Regel, z. B. immer +2.",
      "Beispiel: 2, 4, 6… – das Kind macht weiter.",
      "Ändert die Regel (z. B. ×2 oder +1 / +3 im Wechsel).",
      "Wer sich vertut, denkt sich eine neue Regel aus."
    ],
    benefits_text: "Logik und Zahlenverständnis",
    benefits_tags: ["logik", "zahlen"],
    notes: "",
    active: true
  },

  {
    id: "game-127",
    source: "gold",
    locked: true,
    title: "Wörter-Duell",
    age_text: "3–7 Jahre",
    age_min: 3,
    age_max: 7,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Wählt eine Kategorie (z. B. Tiere oder Essen).",
      "Nennt abwechselnd passende Wörter.",
      "Wer kein neues Wort mehr findet, scheidet aus.",
      "Schwieriger: nur Wörter mit bestimmtem Anfangsbuchstaben."
    ],
    benefits_text: "Wortschatz und Denken",
    benefits_tags: ["sprache", "denken"],
    notes: "",
    active: true
  },

  {
    id: "game-128",
    source: "gold",
    locked: true,
    title: "Alphabet-Markt",
    age_text: "5–7 Jahre",
    age_min: 5,
    age_max: 7,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Erfindet einen „Markt“.",
      "Das Kind darf nur Dinge „kaufen“, die mit einem bestimmten Buchstaben beginnen.",
      "Beispiel: „B“ – Brot, Banane…",
      "Macht daraus ein kleines Spiel oder einen Wettbewerb."
    ],
    benefits_text: "Sprache und Kreativität",
    benefits_tags: ["sprache", "kreativitaet"],
    notes: "",
    active: true
  },

  {
    id: "game-129",
    source: "gold",
    locked: true,
    title: "Lippenlesen",
    age_text: "5–7 Jahre",
    age_min: 5,
    age_max: 7,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Stellt euch mit etwas Abstand gegenüber.",
      "Sprich ein Wort nur mit den Lippen (ohne Ton).",
      "Das Kind versucht es zu erraten.",
      "Beginnt mit einfachen Wörtern."
    ],
    benefits_text: "Aufmerksamkeit und Sprachverständnis",
    benefits_tags: ["aufmerksamkeit", "sprache"],
    notes: "",
    active: true
  },

  {
    id: "game-130",
    source: "gold",
    locked: true,
    title: "Zahlenjagd",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Denke dir eine Zahl (z. B. 5).",
      "Das Kind sucht passende Mengen im Raum (z. B. 5 Bücher).",
      "Wechselt Zahlen und Gegenstände.",
      "Macht ein kleines Wettrennen daraus."
    ],
    benefits_text: "Zahlenverständnis und Bewegung",
    benefits_tags: ["zahlen", "bewegung"],
    notes: "",
    active: true
  }

,
  {
    id: "game-131",
    source: "gold",
    locked: true,
    title: "Rhythmus nachmachen",
    age_text: "5–7 Jahre",
    age_min: 5,
    age_max: 7,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Klopfe einen Rhythmus (z. B. klopf–klopf–Pause–klopf).",
      "Das Kind wiederholt ihn genau.",
      "Steigere langsam die Schwierigkeit.",
      "Tauscht die Rollen."
    ],
    benefits_text: "Konzentration und Hörwahrnehmung",
    benefits_tags: ["konzentration", "hoeren"],
    notes: "",
    active: true
  },

  {
    id: "game-132",
    source: "gold",
    locked: true,
    title: "Zahlen auf dem Rücken",
    age_text: "3–7 Jahre",
    age_min: 3,
    age_max: 7,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Das Kind dreht sich mit dem Rücken zu dir.",
      "Zeichne eine Zahl (0–9) auf seinen Rücken.",
      "Das Kind nennt die Zahl.",
      "Schwieriger: zweistellige Zahlen oder Formen."
    ],
    benefits_text: "Wahrnehmung und Zahlenverständnis",
    benefits_tags: ["wahrnehmung", "zahlen"],
    notes: "",
    active: true
  },

  {
    id: "game-133",
    source: "gold",
    locked: true,
    title: "Wort-Assoziationen",
    age_text: "5–7 Jahre",
    age_min: 5,
    age_max: 7,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Sage ein Wort, z. B. „Sommer“.",
      "Das Kind nennt eine passende Assoziation.",
      "Daraus entsteht eine Kette.",
      "Ziel: wieder zum Anfangswort zurückfinden."
    ],
    benefits_text: "Denken und Sprache",
    benefits_tags: ["denken", "sprache"],
    notes: "",
    active: true
  },

  {
    id: "game-134",
    source: "gold",
    locked: true,
    title: "Der Bildhauer",
    age_text: "3–7 Jahre",
    age_min: 3,
    age_max: 7,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Du bist „Ton“, das Kind ist „Bildhauer“.",
      "Es stellt deinen Körper in eine Pose.",
      "Du bleibst kurz so stehen.",
      "Tauscht die Rollen."
    ],
    benefits_text: "Körpergefühl und Kreativität",
    benefits_tags: ["koerper", "kreativitaet"],
    notes: "",
    active: true
  },

  {
    id: "game-135",
    source: "gold",
    locked: true,
    title: "Berufe raten",
    age_text: "5–7 Jahre",
    age_min: 5,
    age_max: 7,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Denke dir einen Beruf aus.",
      "Stelle ihn pantomimisch dar.",
      "Das Kind stellt Ja-/Nein-Fragen.",
      "Danach tauscht ihr die Rollen."
    ],
    benefits_text: "Logik und Kommunikation",
    benefits_tags: ["logik", "kommunikation"],
    notes: "",
    active: true
  },

  {
    id: "game-136",
    source: "gold",
    locked: true,
    title: "Endlose Geschichte",
    age_text: "5–7 Jahre",
    age_min: 5,
    age_max: 7,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Du beginnst mit einer Geschichte, z. B.: „Es war einmal ein lila Nilpferd…“",
      "Das Kind fügt einen Satz hinzu.",
      "Ihr erzählt abwechselnd weiter.",
      "Die Geschichte endet lustig oder überraschend."
    ],
    benefits_text: "Fantasie und Sprache",
    benefits_tags: ["fantasie", "sprache"],
    notes: "",
    active: true
  },

  {
    id: "game-137",
    source: "gold",
    locked: true,
    title: "Melodie raten",
    age_text: "3–7 Jahre",
    age_min: 3,
    age_max: 7,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Summe oder singe eine bekannte Melodie.",
      "Das Kind errät das Lied oder die Figur.",
      "Tauscht die Rollen.",
      "Schwieriger: nur den Rhythmus klopfen."
    ],
    benefits_text: "Hörwahrnehmung und Gedächtnis",
    benefits_tags: ["hoeren", "gedaechtnis"],
    notes: "",
    active: true
  },

  {
    id: "game-138",
    source: "gold",
    locked: true,
    title: "Schnelle Assoziationen",
    age_text: "5–7 Jahre",
    age_min: 5,
    age_max: 7,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Du sagst ein Wort (z. B. „Sommer“).",
      "Das Kind nennt sofort eine Assoziation.",
      "Ihr bildet eine Kette von Wörtern.",
      "Spielt, bis keine Ideen mehr kommen oder es lustig wird."
    ],
    benefits_text: "Reaktionsfähigkeit und Denken",
    benefits_tags: ["reaktion", "denken"],
    notes: "",
    active: true
  },

  {
    id: "game-139",
    source: "gold",
    locked: true,
    title: "Rätsel aus dem Alltag",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Denke dir einen Gegenstand im Raum.",
      "Gib Hinweise: „Es ist groß“, „darauf sitzt man“…",
      "Das Kind stellt Ja-/Nein-Fragen.",
      "Tauscht die Rollen."
    ],
    benefits_text: "Logik und Sprache",
    benefits_tags: ["logik", "sprache"],
    notes: "",
    active: true
  },

  {
    id: "game-140",
    source: "gold",
    locked: true,
    title: "Wort rückwärts",
    age_text: "5–7 Jahre",
    age_min: 5,
    age_max: 7,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Sage ein kurzes Wort (z. B. „Katze“).",
      "Das Kind spricht es rückwärts.",
      "Beginnt mit einfachen Wörtern.",
      "Steigert langsam die Schwierigkeit."
    ],
    benefits_text: "Sprachgefühl und Konzentration",
    benefits_tags: ["sprache", "konzentration"],
    notes: "",
    active: true
  }

,
  {
    id: "game-141",
    source: "gold",
    locked: true,
    title: "Wer bin ich?",
    age_text: "5–7 Jahre",
    age_min: 5,
    age_max: 7,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Denke dir ein Tier oder eine Person.",
      "Das Kind stellt Fragen (Ja/Nein).",
      "Ziel: erraten, wer es ist.",
      "Tauscht die Rollen."
    ],
    benefits_text: "Logik und Kommunikation",
    benefits_tags: ["logik", "kommunikation"],
    notes: "",
    active: true
  },

  {
    id: "game-142",
    source: "gold",
    locked: true,
    title: "Berufe pantomimisch",
    age_text: "5–7 Jahre",
    age_min: 5,
    age_max: 7,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Zettel, Stift",
    materials: ["papier", "stifte"],
    instructions: [
      "Schreibe verschiedene Berufe auf Zettel.",
      "Ziehe einen und stelle ihn dar.",
      "Die anderen raten.",
      "Wer richtig rät, ist dran."
    ],
    benefits_text: "Kreativität und Ausdruck",
    benefits_tags: ["kreativitaet", "ausdruck"],
    notes: "",
    active: true
  },

  {
    id: "game-143",
    source: "gold",
    locked: true,
    title: "Tiere pantomimisch",
    age_text: "3–7 Jahre",
    age_min: 3,
    age_max: 7,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Denke dir ein Tier aus.",
      "Stelle es mit Bewegungen dar.",
      "Das Kind errät es.",
      "Tauscht die Rollen."
    ],
    benefits_text: "Fantasie und Bewegung",
    benefits_tags: ["fantasie", "bewegung"],
    notes: "",
    active: true
  },

  {
    id: "game-144",
    source: "gold",
    locked: true,
    title: "Logikrätsel",
    age_text: "7+ Jahre",
    age_min: 7,
    age_max: 7,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Stelle ein klassisches Logikrätsel, z. B.: „Was wird größer, wenn man es auf den Kopf stellt?“",
      "Gib dem Kind Zeit zum Nachdenken.",
      "Danach besprecht gemeinsam die Lösung und den Denkweg.",
      "Ihr könnt weitere Rätsel dieser Art erfinden."
    ],
    benefits_text: "Logisches Denken und Sprachverständnis",
    benefits_tags: ["logik", "sprache"],
    notes: "",
    active: true
  },

  {
    id: "game-145",
    source: "gold",
    locked: true,
    title: "Reporter vor Ort",
    age_text: "7+ Jahre",
    age_min: 7,
    age_max: 7,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Einer ist Reporter, der andere Augenzeuge eines erfundenen Ereignisses.",
      "Das Ereignis kann lustig oder verrückt sein.",
      "Der Reporter stellt Fragen: „Was ist passiert? Wie hast du dich gefühlt? Was passiert als Nächstes?“",
      "Danach tauscht ihr die Rollen."
    ],
    benefits_text: "Sprache, Fantasie und Ausdruck",
    benefits_tags: ["sprache", "fantasie"],
    notes: "",
    active: true
  },

  {
    id: "game-146",
    source: "gold",
    locked: true,
    title: "Debatte: Dafür oder dagegen?",
    age_text: "7+ Jahre",
    age_min: 7,
    age_max: 7,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Nennt ein Thema, z. B. „Hausaufgaben sollen abgeschafft werden“.",
      "Einer spricht dafür, der andere dagegen.",
      "Gebt euch kurz Zeit für Argumente und Antworten.",
      "Am Ende nennt jeder das stärkste Argument des anderen."
    ],
    benefits_text: "Argumentieren und kritisches Denken",
    benefits_tags: ["argumentation", "denken"],
    notes: "",
    active: true
  },

  {
    id: "game-147",
    source: "gold",
    locked: true,
    title: "Was wäre, wenn …?",
    age_text: "7+ Jahre",
    age_min: 7,
    age_max: 7,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Stelle eine ungewöhnliche Frage, z. B.: „Was wäre, wenn Menschen drei Arme hätten?“",
      "Das Kind überlegt, was sich im Alltag verändern würde.",
      "Entwickelt gemeinsam weitere verrückte Ideen.",
      "Je fantasievoller die Antworten, desto besser."
    ],
    benefits_text: "Kreativität und freies Denken",
    benefits_tags: ["kreativitaet", "denken"],
    notes: "",
    active: true
  },

  {
    id: "game-148",
    source: "gold",
    locked: true,
    title: "Wort auf dem Rücken",
    age_text: "7+ Jahre",
    age_min: 7,
    age_max: 7,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Das Kind dreht sich mit dem Rücken zu dir.",
      "Schreibe langsam Buchstabe für Buchstabe ein kurzes Wort auf den Rücken.",
      "Das Kind setzt die Buchstaben im Kopf zusammen und errät das Wort."
    ],
    benefits_text: "Arbeitsgedächtnis und Wahrnehmung",
    benefits_tags: ["gedaechtnis", "wahrnehmung"],
    notes: "",
    active: true
  },

  {
    id: "game-149",
    source: "gold",
    locked: true,
    title: "Mathe-Turnier",
    age_text: "7+ Jahre",
    age_min: 7,
    age_max: 7,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Nennt euch abwechselnd Rechenaufgaben.",
      "Der andere muss innerhalb weniger Sekunden antworten.",
      "Für jede richtige Antwort gibt es einen Punkt.",
      "Wer zuerst 10 Punkte hat, gewinnt."
    ],
    benefits_text: "Rechengeschwindigkeit und Konzentration",
    benefits_tags: ["mathe", "konzentration"],
    notes: "",
    active: true
  },

  {
    id: "game-150",
    source: "gold",
    locked: true,
    title: "Mathe-Zaubertrick",
    age_text: "7+ Jahre",
    age_min: 7,
    age_max: 7,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Das Kind denkt sich eine Zahl von 1 bis 10 aus.",
      "Es rechnet die vorgegebenen Schritte im Kopf.",
      "Am Ende „errät“ ihr gemeinsam das Ergebnis.",
      "Danach besprecht, warum der Trick funktioniert."
    ],
    benefits_text: "Mathematisches Denken und Neugier",
    benefits_tags: ["mathe", "denken"],
    notes: "",
    active: true
  }

,
  {
    id: "game-151",
    source: "gold",
    locked: true,
    title: "Erfinde ein Fantasietier",
    age_text: "5–7 Jahre",
    age_min: 5,
    age_max: 7,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Papier, Stifte",
    materials: ["papier", "stifte"],
    instructions: [
      "Das Kind denkt sich ein Tier aus, das es in der Natur nicht gibt.",
      "Es kombiniert Teile verschiedener Tiere.",
      "Danach bekommt das Tier einen Namen, einen Lebensraum und Lieblingsfutter.",
      "Zum Schluss könnt ihr eine kleine Ausstellung machen."
    ],
    benefits_text: "Fantasie, Sprache und Kreativität",
    benefits_tags: ["fantasie", "sprache", "kreativitaet"],
    notes: "",
    active: true
  },

  {
    id: "game-152",
    source: "gold",
    locked: true,
    title: "Geheimcode erstellen",
    age_text: "7+ Jahre",
    age_min: 7,
    age_max: 7,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Papier, Stifte",
    materials: ["papier", "stifte"],
    instructions: [
      "Erfindet gemeinsam einen eigenen Geheimcode: Jeder Buchstabe bekommt ein Symbol oder Bild.",
      "Erstellt eine „Schlüssel-Tabelle“.",
      "Schreibt eine geheime Nachricht für Mama, Papa oder Freunde.",
      "Gebt die Nachricht und den Schlüssel getrennt weiter.",
      "Versucht den Caesar-Code (Buchstaben um 3 verschieben)."
    ],
    benefits_text: "Logik, Kreativität und Sprachverständnis",
    benefits_tags: ["logik", "kreativitaet", "sprache"],
    notes: "",
    active: true
  },

  {
    id: "game-153",
    source: "gold",
    locked: true,
    title: "Papierschneeflocke",
    age_text: "5–7 Jahre",
    age_min: 5,
    age_max: 7,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Papier",
    materials: ["papier"],
    instructions: [
      "Faltet ein quadratisches Blatt mehrmals (auch diagonal).",
      "Schneidet kleine Formen an den Rändern heraus.",
      "Öffnet vorsichtig – eine einzigartige Schneeflocke entsteht!",
      "Hängt sie ans Fenster."
    ],
    benefits_text: "Feinmotorik und Kreativität",
    benefits_tags: ["feinmotorik", "kreativitaet"],
    notes: "",
    active: true
  },

  {
    id: "game-154",
    source: "gold",
    locked: true,
    title: "Geometrie mit Zahnstochern",
    age_text: "7+ Jahre",
    age_min: 7,
    age_max: 7,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Zahnstocher, weicher Plastilin oder Teig",
    materials: ["zahnstocher", "knete"],
    instructions: [
      "Gebt dem Kind Zahnstocher und kleine Kugeln aus Knete.",
      "Baut gemeinsam 3D-Formen (Würfel, Pyramide).",
      "Macht daraus eine Challenge: Wer baut den höchsten stabilen Turm?"
    ],
    benefits_text: "Räumliches Denken und Verständnis für Formen",
    benefits_tags: ["raum", "formen"],
    notes: "",
    active: true
  },

  {
    id: "game-155",
    source: "gold",
    locked: true,
    title: "Architekt & Designer",
    age_text: "5–7 Jahre",
    age_min: 5,
    age_max: 7,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Papier, Stifte",
    materials: ["papier", "stifte"],
    instructions: [
      "Das Kind malt sein Traumhaus – außen und innen.",
      "Startet mit dem Aussehen: Wie viele Etagen? Dach? Garage?",
      "Dann der Plan: Wo ist welches Zimmer?",
      "Sprecht über Details – das Kind erklärt seine Ideen."
    ],
    benefits_text: "Fantasie, Planung und Sprache",
    benefits_tags: ["fantasie", "planung", "sprache"],
    notes: "",
    active: true
  },

  {
    id: "game-156",
    source: "gold",
    locked: true,
    title: "Schatzsuche",
    age_text: "5–7 Jahre",
    age_min: 5,
    age_max: 7,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Papier, Stifte",
    materials: ["papier", "stifte"],
    instructions: [
      "Versteckt einen „Schatz“ (kleines Spielzeug oder Süßigkeit).",
      "Schreibt 4–5 Hinweise auf kleine Zettel.",
      "Jeder Hinweis führt zum nächsten Ort.",
      "Der letzte Hinweis führt zum Schatz."
    ],
    benefits_text: "Logisches Denken und Motivation",
    benefits_tags: ["logik", "motivation"],
    notes: "",
    active: true
  },

  {
    id: "game-157",
    source: "gold",
    locked: true,
    title: "Kartenhaus",
    age_text: "7+ Jahre",
    age_min: 7,
    age_max: 7,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Spielkarten",
    materials: ["karten"],
    instructions: [
      "Gebt dem Kind ein Kartenspiel.",
      "Baut gemeinsam ein stabiles Kartenhaus.",
      "Beginnt mit einfachen „Dächern“.",
      "Erweitert die Konstruktion Schritt für Schritt."
    ],
    benefits_text: "Geduld und Konzentration",
    benefits_tags: ["geduld", "konzentration"],
    notes: "",
    active: true
  },

  {
    id: "game-158",
    source: "gold",
    locked: true,
    title: "Brückenbau",
    age_text: "7+ Jahre",
    age_min: 7,
    age_max: 7,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Papier, Malerkrepp, Münzen",
    materials: ["papier", "klebeband", "muenzen"],
    instructions: [
      "Baut zwei „Ufer“ (z. B. mit Büchern, Abstand 20–30 cm).",
      "Gebt Papier und Klebeband.",
      "Aufgabe: Eine Brücke bauen, die möglichst viele Münzen trägt.",
      "Testet und vergleicht die Stabilität."
    ],
    benefits_text: "Technisches Denken und Problemlösung",
    benefits_tags: ["technik", "problemloesung"],
    notes: "",
    active: true
  },

  {
    id: "game-159",
    source: "gold",
    locked: true,
    title: "Alien-Alphabet",
    age_text: "7+ Jahre",
    age_min: 7,
    age_max: 7,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Papier, Stifte",
    materials: ["papier", "stifte"],
    instructions: [
      "Erfindet ein Alphabet für Außerirdische.",
      "Jeder Buchstabe bekommt ein eigenes Zeichen.",
      "Schreibt damit euren Namen oder eine geheime Botschaft.",
      "Versucht später, den Text wieder zu „entziffern“."
    ],
    benefits_text: "Gedächtnis, Kreativität und Sprache",
    benefits_tags: ["gedaechtnis", "kreativitaet", "sprache"],
    notes: "",
    active: true
  },

  {
    id: "game-160",
    source: "gold",
    locked: true,
    title: "Pendel-Experiment",
    age_text: "5–7 Jahre",
    age_min: 5,
    age_max: 7,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Schnur, kleine Spielzeuge",
    materials: ["schnur", "spielzeuge"],
    instructions: [
      "Befestigt einen kleinen Gegenstand an einer Schnur.",
      "Fixiert das andere Ende (z. B. an einem Stuhl oder Tisch).",
      "Baut darunter ein Ziel aus Bausteinen oder Deckeln.",
      "Lasst das Pendel schwingen und beobachtet, wie es „Ziele trifft“.",
      "Verändert die Länge der Schnur – was passiert mit Tempo und Bewegung?"
    ],
    benefits_text: "Verständnis für Ursache und Wirkung und Konzentration",
    benefits_tags: ["logik", "konzentration"],
    notes: "",
    active: true
  }

,
  {
    id: "game-161",
    source: "gold",
    locked: true,
    title: "Wasser-Transport",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Wasser, Becher, Löffel",
    materials: ["wasser", "becher", "loeffel"],
    instructions: [
      "Stelle zwei Becher auf – einen mit Wasser, einen leer.",
      "Das Kind transportiert Wasser mit einem Löffel.",
      "Ziel: den zweiten Becher füllen.",
      "Wer schafft es schneller?"
    ],
    benefits_text: "Konzentration und Feinmotorik",
    benefits_tags: ["konzentration", "feinmotorik"],
    notes: "",
    active: true
  },

  {
    id: "game-162",
    source: "gold",
    locked: true,
    title: "Gummiband-Bilder",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Gummibänder, Brett oder Box",
    materials: ["gummibaender"],
    instructions: [
      "Spanne Gummibänder um eine Box oder ein Brett.",
      "Das Kind formt damit Muster oder Bilder.",
      "Erfindet gemeinsam Formen (Haus, Stern…)."
    ],
    benefits_text: "Kreativität und Feinmotorik",
    benefits_tags: ["kreativitaet", "feinmotorik"],
    notes: "",
    active: true
  },

  {
    id: "game-163",
    source: "gold",
    locked: true,
    title: "Turm-Challenge",
    age_text: "3–7 Jahre",
    age_min: 3,
    age_max: 7,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Verschiedene Gegenstände",
    materials: ["gegenstaende"],
    instructions: [
      "Sammelt verschiedene Dinge im Raum.",
      "Ziel: einen möglichst hohen Turm bauen.",
      "Er darf nicht umfallen.",
      "Wer baut den stabilsten Turm?"
    ],
    benefits_text: "Logik und Gleichgewicht",
    benefits_tags: ["logik", "gleichgewicht"],
    notes: "",
    active: true
  },

  {
    id: "game-164",
    source: "gold",
    locked: true,
    title: "Luftballon-Volleyball",
    age_text: "3–7 Jahre",
    age_min: 3,
    age_max: 7,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Luftballon",
    materials: ["luftballon"],
    instructions: [
      "Spannt eine Linie im Raum (z. B. mit Schnur).",
      "Spielt mit einem Luftballon darüber.",
      "Ziel: den Ball nicht auf den Boden fallen lassen."
    ],
    benefits_text: "Bewegung und Koordination",
    benefits_tags: ["bewegung", "koordination"],
    notes: "",
    active: true
  },

  {
    id: "game-165",
    source: "gold",
    locked: true,
    title: "Blinde Zeichnung",
    age_text: "5–7 Jahre",
    age_min: 5,
    age_max: 7,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Papier, Stift, Tuch",
    materials: ["papier", "stifte", "tuch"],
    instructions: [
      "Verbinde dem Kind die Augen.",
      "Es soll ein einfaches Bild zeichnen.",
      "Danach schaut ihr euch das Ergebnis an.",
      "Vergleicht mit der Vorstellung."
    ],
    benefits_text: "Vorstellungskraft und Spaß",
    benefits_tags: ["fantasie"],
    notes: "",
    active: true
  },

  {
    id: "game-166",
    source: "gold",
    locked: true,
    title: "Klopf-Code",
    age_text: "5–7 Jahre",
    age_min: 5,
    age_max: 7,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Erfindet einfache Klopf-Signale (z. B. 1 = Ja, 2 = Nein).",
      "Stellt Fragen und antwortet nur mit Klopfen.",
      "Erweitert den Code mit neuen Bedeutungen."
    ],
    benefits_text: "Logik und Kommunikation",
    benefits_tags: ["logik", "kommunikation"],
    notes: "",
    active: true
  },

  {
    id: "game-167",
    source: "gold",
    locked: true,
    title: "Mini-Theater",
    age_text: "3–7 Jahre",
    age_min: 3,
    age_max: 7,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Erfindet gemeinsam eine kleine Geschichte.",
      "Spielt sie mit Bewegungen und Stimmen nach.",
      "Gebt jedem eine Rolle.",
      "Am Ende gibt es Applaus."
    ],
    benefits_text: "Fantasie und Ausdruck",
    benefits_tags: ["fantasie", "ausdruck"],
    notes: "",
    active: true
  },

  {
    id: "game-168",
    source: "gold",
    locked: true,
    title: "Stuhl-Parcours",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Stühle",
    materials: ["stuehle"],
    instructions: [
      "Stellt mehrere Stühle im Raum auf.",
      "Das Kind klettert darüber oder darunter durch.",
      "Erfindet verschiedene Wege.",
      "Stoppt die Zeit."
    ],
    benefits_text: "Bewegung und Koordination",
    benefits_tags: ["bewegung", "koordination"],
    notes: "",
    active: true
  },

  {
    id: "game-169",
    source: "gold",
    locked: true,
    title: "Gegenstände sortieren",
    age_text: "1–4 Jahre",
    age_min: 1,
    age_max: 4,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Verschiedene Gegenstände",
    materials: ["gegenstaende"],
    instructions: [
      "Lege verschiedene Dinge auf den Tisch.",
      "Das Kind sortiert nach Farbe, Größe oder Form.",
      "Erklärt gemeinsam die Unterschiede."
    ],
    benefits_text: "Denken und Wahrnehmung",
    benefits_tags: ["denken", "wahrnehmung"],
    notes: "",
    active: true
  },

  {
    id: "game-170",
    source: "gold",
    locked: true,
    title: "Tempo-Spiel",
    age_text: "3–6 Jahre",
    age_min: 3,
    age_max: 6,
    time_text: "10 Minuten",
    time_bucket: "10",
    material_mode: "none",
    materials_text: "–",
    materials: [],
    instructions: [
      "Gib Bewegungsbefehle: schnell, langsam, stoppen.",
      "Das Kind passt sich dem Tempo an.",
      "Wechselt die Rollen."
    ],
    benefits_text: "Reaktion und Körpergefühl",
    benefits_tags: ["reaktion", "koerper"],
    notes: "",
    active: true
  }

,
  {
    id: "game-171",
    source: "gold",
    locked: true,
    title: "Schatzkarte",
    age_text: "7+ Jahre",
    age_min: 7,
    age_max: 7,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Papier, Stifte",
    materials: ["papier", "stifte"],
    instructions: [
      "Zeichnet eine Karte der Wohnung mit einem Koordinatensystem (A–B–C / 1–2–3).",
      "Markiert mehrere „Schätze“.",
      "Schreibt die Koordinaten auf (z. B. A2, B3).",
      "Eine andere Person muss die Schätze nur anhand der Koordinaten finden."
    ],
    benefits_text: "Logik, Orientierung und Denken in Systemen",
    benefits_tags: ["logik", "orientierung"],
    notes: "",
    active: true
  },

  {
    id: "game-172",
    source: "gold",
    locked: true,
    title: "Kettenreaktion",
    age_text: "7+ Jahre",
    age_min: 7,
    age_max: 7,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Bücher, Domino, Autos",
    materials: ["buch", "domino", "autos"],
    instructions: [
      "Baut eine Strecke wie beim Domino-Effekt.",
      "Nutzt Bücher, Kartons, Bälle oder Spielzeugautos.",
      "Ziel: Ein Objekt stößt das nächste an – bis zum Finale.",
      "Testet und verbessert eure Konstruktion."
    ],
    benefits_text: "Technisches Denken und Planung",
    benefits_tags: ["technik", "planung"],
    notes: "",
    active: true
  },

  {
    id: "game-173",
    source: "gold",
    locked: true,
    title: "Kartenkampf ohne Karten",
    age_text: "5–7 Jahre",
    age_min: 5,
    age_max: 7,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Papier, Stifte",
    materials: ["papier", "stifte"],
    instructions: [
      "Jeder malt 10 „Karten“ mit zwei Zahlen (Angriff & Verteidigung).",
      "Legt die Karten verdeckt ab.",
      "Dreht gleichzeitig um – die höhere Summe gewinnt.",
      "Der Gewinner bekommt beide Karten.",
      "Am Ende gewinnt, wer mehr Karten hat."
    ],
    benefits_text: "Mathematisches Denken und Strategie",
    benefits_tags: ["mathe", "strategie"],
    notes: "",
    active: true
  },

  {
    id: "game-174",
    source: "gold",
    locked: true,
    title: "Buchstabensuppe",
    age_text: "5–7 Jahre",
    age_min: 5,
    age_max: 7,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Papier, Stifte",
    materials: ["papier", "stifte"],
    instructions: [
      "Schreibt 6–8 Buchstaben auf.",
      "Aufgabe: In 3 Minuten möglichst viele Wörter bilden.",
      "Jeder Buchstabe darf nur einmal verwendet werden.",
      "Vergleicht die Ergebnisse."
    ],
    benefits_text: "Sprache und Wortschatz",
    benefits_tags: ["sprache", "wortschatz"],
    notes: "",
    active: true
  },

  {
    id: "game-175",
    source: "gold",
    locked: true,
    title: "Wörter aus einem Wort",
    age_text: "7+ Jahre",
    age_min: 7,
    age_max: 7,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Papier, Stifte",
    materials: ["papier", "stifte"],
    instructions: [
      "Wählt ein langes Wort (z. B. „FAHRRAD“).",
      "Bildet daraus so viele neue Wörter wie möglich.",
      "Jeder Buchstabe darf nur so oft genutzt werden, wie er vorkommt.",
      "Für lange Wörter gibt es Bonuspunkte."
    ],
    benefits_text: "Sprachgefühl und Konzentration",
    benefits_tags: ["sprache", "konzentration"],
    notes: "",
    active: true
  },

  {
    id: "game-176",
    source: "gold",
    locked: true,
    title: "Mini-Katapult",
    age_text: "7+ Jahre",
    age_min: 7,
    age_max: 7,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Stifte, Gummibänder, Papier",
    materials: ["stifte", "gummibaender", "papier"],
    instructions: [
      "Bindet mehrere Stifte zu einem Bündel.",
      "Befestigt einen weiteren Stift als Hebel.",
      "Nutzt Gummibänder zum Spannen.",
      "Bastelt kleine Papierkugeln und startet einen Wettbewerb."
    ],
    benefits_text: "Kreativität und technisches Verständnis",
    benefits_tags: ["kreativitaet", "technik"],
    notes: "",
    active: true
  },

  {
    id: "game-177",
    source: "gold",
    locked: true,
    title: "Geheime Nachricht",
    age_text: "5–7 Jahre",
    age_min: 5,
    age_max: 7,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Papier, Stifte",
    materials: ["papier", "stifte"],
    instructions: [
      "Erstellt einen einfachen Code (A→B, B→C…).",
      "Schreibt eine geheime Nachricht.",
      "Gebt dem Kind den Schlüssel.",
      "Es entschlüsselt und liest die Botschaft.",
      "Danach darf es selbst eine Nachricht schreiben."
    ],
    benefits_text: "Logik und Sprachverständnis",
    benefits_tags: ["logik", "sprache"],
    notes: "",
    active: true
  },

  {
    id: "game-178",
    source: "gold",
    locked: true,
    title: "Zahnstocher-Rätsel",
    age_text: "7+ Jahre",
    age_min: 7,
    age_max: 7,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Zahnstocher",
    materials: ["zahnstocher"],
    instructions: [
      "Legt mit Zahnstochern eine Figur (z. B. Haus oder Quadrat).",
      "Aufgabe: Verschiebe 2 Zahnstocher, damit eine neue Form entsteht.",
      "Probiert verschiedene Varianten aus."
    ],
    benefits_text: "Logisches Denken und Problemlösung",
    benefits_tags: ["logik", "problemloesung"],
    notes: "",
    active: true
  },

  {
    id: "game-179",
    source: "gold",
    locked: true,
    title: "Damm bauen",
    age_text: "5–7 Jahre",
    age_min: 5,
    age_max: 7,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Tiefe Schüssel, Wasser, Plastilin oder Teig",
    materials: ["schuessel", "wasser", "knete"],
    instructions: [
      "Füllt eine große Schüssel mit Wasser.",
      "Gebt dem Kind Plastilin.",
      "Aufgabe: Einen Damm bauen, der das Wasser aufhält.",
      "Testet: Hält der Damm stand?",
      "Erschwert es: Erzeugt kleine „Wellen“."
    ],
    benefits_text: "Experimentieren und Verständnis für Physik",
    benefits_tags: ["experiment", "physik"],
    notes: "",
    active: true
  },

  {
    id: "game-180",
    source: "gold",
    locked: true,
    title: "Geheimsprache",
    age_text: "7+ Jahre",
    age_min: 7,
    age_max: 7,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Papier, Stifte",
    materials: ["papier", "stifte"],
    instructions: [
      "Erfindet eine eigene Sprache (z. B. nach jedem Wort „-ma“).",
      "Übt gemeinsam: „Hallo-ma, wie-ma geht-ma’s?“",
      "Sprecht ein paar Minuten nur in dieser Sprache.",
      "Denkt euch schwierigere Regeln aus."
    ],
    benefits_text: "Sprachgefühl und Kreativität",
    benefits_tags: ["sprache", "kreativitaet"],
    notes: "",
    active: true
  }

,
  {
    id: "game-181",
    source: "gold",
    locked: true,
    title: "Detektiv-Spuren",
    age_text: "7+ Jahre",
    age_min: 7,
    age_max: 7,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Papier, Stifte, Klebeband",
    materials: ["papier", "stifte", "klebeband"],
    instructions: [
      "Reibt den Finger auf einem Bleistift (Graphit).",
      "Drückt ihn auf Klebeband und dann auf Papier.",
      "Betrachtet den Fingerabdruck.",
      "Vergleicht die Abdrücke der Familie."
    ],
    benefits_text: "Beobachtung und Interesse an Wissenschaft",
    benefits_tags: ["beobachtung", "wissenschaft"],
    notes: "",
    active: true
  },

  {
    id: "game-182",
    source: "gold",
    locked: true,
    title: "Löffel-Katapult",
    age_text: "5–7 Jahre",
    age_min: 5,
    age_max: 7,
    time_text: "10–20 Minuten",
    time_bucket: "10",
    material_mode: "with_material",
    materials_text: "Löffel, Papier",
    materials: ["loeffel", "papier"],
    instructions: [
      "Formt kleine Papierkugeln.",
      "Legt einen Löffel so auf den Tisch, dass er federt.",
      "Drückt und lasst los – der Ball fliegt!",
      "Stellt ein Ziel auf und trefft es."
    ],
    benefits_text: "Koordination und Zielgenauigkeit",
    benefits_tags: ["koordination", "ziel"],
    notes: "",
    active: true
  },

  {
    id: "game-183",
    source: "gold",
    locked: true,
    title: "Küchen-Experimente",
    age_text: "5–7 Jahre",
    age_min: 5,
    age_max: 7,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Lebensmittel aus dem Kühlschrank, Schüssel",
    materials: ["lebensmittel", "schuessel"],
    instructions: [
      "Nehmt 5–6 verschiedene Zutaten.",
      "Mischt sie und beobachtet, was passiert.",
      "Probiert Kombinationen aus.",
      "Bewertet: lecker oder komisch?"
    ],
    benefits_text: "Neugier und Experimentierfreude",
    benefits_tags: ["neugier", "experiment"],
    notes: "",
    active: true
  },

  {
    id: "game-184",
    source: "gold",
    locked: true,
    title: "Home-Bowling",
    age_text: "7+ Jahre",
    age_min: 7,
    age_max: 7,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Plastikflaschen, Socken",
    materials: ["flasche", "socken"],
    instructions: [
      "Rollt Socken zu Bällen.",
      "Füllt Flaschen leicht mit Wasser (Kegel).",
      "Stellt sie im Flur auf.",
      "Spielt Bowling und zählt Punkte."
    ],
    benefits_text: "Koordination und Bewegung",
    benefits_tags: ["koordination", "bewegung"],
    notes: "",
    active: true
  },

  {
    id: "game-185",
    source: "gold",
    locked: true,
    title: "Spionen-Laser",
    age_text: "7+ Jahre",
    age_min: 7,
    age_max: 7,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Schnur, Stühle",
    materials: ["schnur", "stuehle"],
    instructions: [
      "Spannt eine Schnur wie ein Netz zwischen Möbeln oder im Flur.",
      "Das Kind muss hindurchgehen wie ein Geheimagent – ohne die Schnur zu berühren.",
      "Berührt es die Schnur, ist die Mission „fehlgeschlagen“."
    ],
    benefits_text: "Koordination, Körpergefühl und Konzentration",
    benefits_tags: ["koordination", "koerper", "konzentration"],
    notes: "",
    active: true
  },

  {
    id: "game-186",
    source: "gold",
    locked: true,
    title: "Wolkenkratzer bauen",
    age_text: "5–7 Jahre",
    age_min: 5,
    age_max: 7,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Papier, Malerkrepp",
    materials: ["papier", "klebeband"],
    instructions: [
      "Jeder bekommt 10 Blatt Papier und etwas Klebeband.",
      "Aufgabe: Baut den höchsten stabilen Turm.",
      "Es darf nichts am Boden befestigt werden.",
      "Der stabilste Turm gewinnt."
    ],
    benefits_text: "Kreativität und technisches Denken",
    benefits_tags: ["kreativitaet", "technik"],
    notes: "",
    active: true
  },

  {
    id: "game-187",
    source: "gold",
    locked: true,
    title: "Schiffe versenken (Papier-Version)",
    age_text: "7+ Jahre",
    age_min: 7,
    age_max: 7,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Papier, Stifte",
    materials: ["papier", "stifte"],
    instructions: [
      "Jeder malt ein 10×10-Feld.",
      "Platziert Schiffe in verschiedenen Größen.",
      "Abwechselnd werden Koordinaten genannt.",
      "„Treffer“ oder „Wasser!“ sagen.",
      "Wer zuerst alle Schiffe findet, gewinnt."
    ],
    benefits_text: "Logik und strategisches Denken",
    benefits_tags: ["logik", "strategie"],
    notes: "",
    active: true
  },

  {
    id: "game-188",
    source: "gold",
    locked: true,
    title: "Zimmer-Plan zeichnen",
    age_text: "5–7 Jahre",
    age_min: 5,
    age_max: 7,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Papier, Stifte",
    materials: ["papier", "stifte"],
    instructions: [
      "Zeichnet die Wohnung von oben („Vogelperspektive“).",
      "Markiert Wände, Türen und Möbel.",
      "Alles wird als einfache Formen dargestellt.",
      "Das Kind findet Wege (z. B. vom Bett zur Tür)."
    ],
    benefits_text: "Räumliches Denken",
    benefits_tags: ["raum"],
    notes: "",
    active: true
  },

  {
    id: "game-189",
    source: "gold",
    locked: true,
    title: "Familien-Quiz",
    age_text: "5–7 Jahre",
    age_min: 5,
    age_max: 7,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Papier, Stifte",
    materials: ["papier", "stifte"],
    instructions: [
      "Jeder schreibt 5 Fragen (Natur, Tiere, Familie).",
      "Stellt euch gegenseitig Fragen.",
      "Für jede richtige Antwort gibt es einen Punkt.",
      "Am Ende wird ausgewertet."
    ],
    benefits_text: "Wissen und Kommunikation",
    benefits_tags: ["wissen", "kommunikation"],
    notes: "",
    active: true
  },

  {
    id: "game-190",
    source: "gold",
    locked: true,
    title: "Eigenes Brettspiel",
    age_text: "7+ Jahre",
    age_min: 7,
    age_max: 7,
    time_text: "20+ Minuten",
    time_bucket: "20+",
    material_mode: "with_material",
    materials_text: "Papier, Stifte, Münzen",
    materials: ["papier", "stifte", "muenzen"],
    instructions: [
      "Erfindet ein eigenes Spiel.",
      "Malt ein Spielfeld.",
      "Nutzt Münzen als Figuren.",
      "Schreibt Regeln auf.",
      "Spielt und verbessert das Spiel."
    ],
    benefits_text: "Kreativität und logisches Denken",
    benefits_tags: ["kreativitaet", "logik"],
    notes: "",
    active: true
  }

];
