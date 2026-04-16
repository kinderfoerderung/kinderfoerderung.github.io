const gameButton = document.getElementById("get-game-btn");
const nextButton = document.getElementById("next-game-btn");

const gameCard = document.getElementById("game-card");
const gameTitle = document.getElementById("game-title");
const gameAges = document.getElementById("game-ages");
const gameTimes = document.getElementById("game-times");
const gameMaterials = document.getElementById("game-materials");
const gameInstructions = document.getElementById("game-instructions");
const gameBenefits = document.getElementById("game-benefits");

const trigger = document.getElementById("material-trigger");
const dropdown = document.getElementById("material-dropdown");
const materialText = document.getElementById("material-text");

// =========================
// GENERATOR MEMORY
// =========================
const RECENT_LIMIT = 5;
const REPEAT_CHANCE = 0.25;

// память отдельно для каждого фильтра:
// age + time + materials
const gameMemory = {};

// =========================
// HELPERS
// =========================
function normalizeText(value) {
  return String(value || "").trim().toLowerCase();
}

function normalizeMaterialValue(value) {
  return normalizeText(value)
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/\s+/g, "_");
}

function getSelectedAge() {
  const btn = document.querySelector("[data-age].active");
  return btn ? btn.dataset.age : null;
}

function getSelectedTime() {
  const btn = document.querySelector("[data-time].active");
  return btn ? btn.dataset.time : null;
}

function getSelectedMaterials() {
  const checked = [...document.querySelectorAll("[data-material]:checked")].map(
    el => el.dataset.material
  );

  if (checked.includes("none")) {
    return "none";
  }

  if (checked.includes("all")) {
    return [...document.querySelectorAll("[data-material]")]
      .filter(el => el.dataset.material !== "none" && el.dataset.material !== "all")
      .map(el => el.dataset.material);
  }

  return checked.filter(value => value !== "all");
}

function getFilterKey({ age, time, materials }) {
  const materialKey =
    materials === "none"
      ? "none"
      : [...materials].sort().join("|");

  return `${age}__${time}__${materialKey}`;
}

function getMemoryBucket(key) {
  if (!gameMemory[key]) {
    gameMemory[key] = {
      shownGames: [],
      recentGames: [],
      lastGameId: null
    };
  }
  return gameMemory[key];
}

function ageRangeToGroups(ageMin, ageMax, ageText) {
  if (typeof ageMin !== "number" || typeof ageMax !== "number") {
    const text = normalizeText(ageText);

    if (text.includes("1–2") || text.includes("1-2")) return ["1-2"];
    if (text.includes("3–4") || text.includes("3-4")) return ["3-4"];
    if (text.includes("5–6") || text.includes("5-6")) return ["5-6"];
    if (text.includes("7+")) return ["7+"];

    return [];
  }

  const groups = [];

  if (ageMin <= 2 && ageMax >= 1) groups.push("1-2");
  if (ageMin <= 4 && ageMax >= 3) groups.push("3-4");
  if (ageMin <= 6 && ageMax >= 5) groups.push("5-6");
  if (ageMax >= 7) groups.push("7+");

  return groups;
}

function matchAge(game, selectedAge) {
  const groups = ageRangeToGroups(game.age_min, game.age_max, game.age_text);
  return groups.includes(selectedAge);
}

function timeTextToGroups(timeText) {
  const text = normalizeText(timeText);

  if (text.includes("3–5") || text.includes("3-5")) {
    return ["3-5"];
  }

  if (text.includes("3–10") || text.includes("3-10")) {
    return ["3-5", "10"];
  }

  if (text.includes("10–20") || text.includes("10-20")) {
    return ["10", "20+"];
  }

  if (text.includes("20+")) {
    return ["20+"];
  }

  if (text.includes("10")) {
    return ["10"];
  }

  return [];
}

function matchTime(game, selectedTime) {
  const groups = timeTextToGroups(game.time_text);
  return groups.includes(selectedTime);
}

function gameHasSelectedMaterial(game, selectedMaterials) {
  if (!Array.isArray(selectedMaterials) || selectedMaterials.length === 0) {
    return true;
  }

  const normalizedSelected = selectedMaterials.map(normalizeMaterialValue);

  const gameMaterialsList = Array.isArray(game.materials)
    ? game.materials.map(normalizeMaterialValue)
    : [];

  return gameMaterialsList.some(material => normalizedSelected.includes(material));
}

function getGame({ age, time, materials }) {
  if (!Array.isArray(GAMES)) {
    console.error("GAMES is not defined");
    return null;
  }

  // 1. базовый пул: возраст + время + active
  const basePool = GAMES.filter(game => {
    return game.active !== false && matchAge(game, age) && matchTime(game, time);
  });

  // 2. фильтр по материалам
  const filteredPool = basePool.filter(game => {
    if (materials === "none") {
      return game.material_mode === "none";
    }

    // если выбраны материалы:
    // - подходят игры без материалов
    // - подходят игры, где есть хотя бы 1 выбранный материал
    if (game.material_mode === "none") {
      return true;
    }

    return gameHasSelectedMaterial(game, materials);
  });

  if (filteredPool.length === 0) {
    return null;
  }

  // 3. память отдельно по текущим фильтрам
  const memoryKey = getFilterKey({ age, time, materials });
  const memory = getMemoryBucket(memoryKey);

  const shownSet = new Set(memory.shownGames);
  const recentSet = new Set(memory.recentGames);

  // 4. новые / повторы
  const newGames = filteredPool.filter(game => !shownSet.has(game.id));
  const repeatGames = filteredPool.filter(game => shownSet.has(game.id));

  // 5. шанс повтора 25%
  const shouldUseRepeat = Math.random() < REPEAT_CHANCE;

  let pool;
  if (shouldUseRepeat && repeatGames.length > 0) {
    pool = repeatGames;
  } else if (newGames.length > 0) {
    pool = newGames;
  } else {
    pool = repeatGames.length > 0 ? repeatGames : filteredPool;
  }

  // 6. защита от повтора подряд и слишком близких повторов
  let safePool = pool.filter(game => {
    if (memory.lastGameId && game.id === memory.lastGameId) return false;
    if (recentSet.has(game.id)) return false;
    return true;
  });

  // если после защиты ничего не осталось — ослабляем правило recent
  if (safePool.length === 0) {
    safePool = pool.filter(game => game.id !== memory.lastGameId);
  }

  // если всё ещё ничего не осталось — берём из исходного пула
  if (safePool.length === 0) {
    safePool = pool;
  }

  const game = safePool[Math.floor(Math.random() * safePool.length)];

  // 7. обновляем память
  if (!shownSet.has(game.id)) {
    memory.shownGames.push(game.id);
  }

  memory.recentGames.push(game.id);
  if (memory.recentGames.length > RECENT_LIMIT) {
    memory.recentGames.shift();
  }

  memory.lastGameId = game.id;

  return game;
}

// =========================
// UI
// =========================
function showGame(game) {
  if (!game) {
    gameTitle.textContent = "Keine Spiele gefunden";
    gameAges.textContent = "";
    gameTimes.textContent = "";
    gameMaterials.textContent = "";
    gameInstructions.innerHTML = "";
    gameBenefits.textContent = "";
    return;
  }

  gameTitle.textContent = game.title;
  gameAges.textContent = "Alter: " + game.age_text;
  gameTimes.textContent = "Zeit: " + game.time_text;
  gameMaterials.textContent =
    "Material: " + (game.material_mode === "none" ? "Ohne Material" : game.materials_text);
  gameBenefits.textContent = "Das fördert: " + game.benefits_text;

  gameInstructions.innerHTML = "";
  game.instructions.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    gameInstructions.appendChild(li);
  });
}

function requestGame() {
  const age = getSelectedAge();
  const time = getSelectedTime();
  const materials = getSelectedMaterials();

  if (!age || !time) {
    gameTitle.textContent = "Bitte Alter und Zeit auswählen";
    gameAges.textContent = "";
    gameTimes.textContent = "";
    gameMaterials.textContent = "";
    gameInstructions.innerHTML = "";
    gameBenefits.textContent = "";
    return;
  }

  const game = getGame({
    age,
    time,
    materials
  });

  showGame(game);
}

// =========================
// EVENTS
// =========================
gameButton.addEventListener("click", requestGame);
nextButton.addEventListener("click", requestGame);

// кнопки возраста
document.querySelectorAll("[data-age]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-age]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// кнопки времени
document.querySelectorAll("[data-time]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-time]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// логика материалов
document.querySelectorAll("[data-material]").forEach(box => {
  box.addEventListener("change", () => {
    const noneBox = document.querySelector('[data-material="none"]');
    const allBox = document.querySelector('[data-material="all"]');

    const materialBoxes = [...document.querySelectorAll("[data-material]")]
      .filter(x => x.dataset.material !== "none" && x.dataset.material !== "all");

    // Нажали Nichts
    if (box.dataset.material === "none") {
      if (noneBox.checked) {
        allBox.checked = false;
        materialBoxes.forEach(cb => {
          cb.checked = false;
        });
      } else {
        const anyMaterialChecked = materialBoxes.some(cb => cb.checked);
        const allChecked = materialBoxes.every(cb => cb.checked);

        if (!anyMaterialChecked) {
          noneBox.checked = true;
        } else {
          allBox.checked = allChecked;
        }
      }

      updateMaterialTriggerText();
      return;
    }

    // Нажали Alles auswählen
    if (box.dataset.material === "all") {
      if (allBox.checked) {
        noneBox.checked = false;
        materialBoxes.forEach(cb => {
          cb.checked = true;
        });
      } else {
        materialBoxes.forEach(cb => {
          cb.checked = false;
        });
        noneBox.checked = true;
      }

      updateMaterialTriggerText();
      return;
    }

    // Нажали обычный материал
    const checkedMaterials = materialBoxes.filter(cb => cb.checked);
    const checkedCount = checkedMaterials.length;

    if (checkedCount > 0) {
      noneBox.checked = false;
      allBox.checked = checkedCount === materialBoxes.length;
    } else {
      noneBox.checked = true;
      allBox.checked = false;
    }

    updateMaterialTriggerText();
  });
});

function updateMaterialTriggerText() {
  const checked = [...document.querySelectorAll("[data-material]:checked")].map(
    el => el.dataset.material
  );

  if (checked.includes("none")) {
    materialText.textContent = "Nichts";
    return;
  }

  if (checked.includes("all")) {
    materialText.textContent = "Alles auswählen";
    return;
  }

  if (checked.length === 0) {
    materialText.textContent = "Auswählen";
    return;
  }

  const labels = checked.map(value => {
    const input = document.querySelector(`[data-material="${value}"]`);
    return input.parentElement.textContent.trim();
  });

  materialText.textContent = labels.join(", ");
}

trigger.addEventListener("click", () => {
  dropdown.classList.toggle("open");
  trigger.classList.toggle("open");
});

document.addEventListener("click", e => {
  if (!e.target.closest(".material-select")) {
    dropdown.classList.remove("open");
    trigger.classList.remove("open");
  }
});

updateMaterialTriggerText();
