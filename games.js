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

];
