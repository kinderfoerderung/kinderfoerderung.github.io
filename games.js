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

];
