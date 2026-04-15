const gameButton = document.getElementById("get-game-btn");
const nextButton = document.getElementById("next-game-btn");

const gameCard = document.getElementById("game-card");
const gameTitle = document.getElementById("game-title");
const gameAges = document.getElementById("game-ages");
const gameTimes = document.getElementById("game-times");
const gameMaterials = document.getElementById("game-materials");
const gameInstructions = document.getElementById("game-instructions");
const gameBenefits = document.getElementById("game-benefits");

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
    "Material: " + (game.material_mode === "none" ? "Ohne Material" : game.materials.join(", "));
  gameBenefits.textContent = "Das fördert: " + game.benefits_text;

  gameInstructions.innerHTML = "";
  game.instructions.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    gameInstructions.appendChild(li);
  });
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
  const checked = [...document.querySelectorAll("[data-material]:checked")].map(el => el.dataset.material);

  if (checked.includes("none")) {
    return "none";
  }

  return checked;
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
    const otherBoxes = [...document.querySelectorAll("[data-material]")].filter(x => x.dataset.material !== "none");

    if (box.dataset.material === "none" && noneBox.checked) {
      otherBoxes.forEach(cb => {
        cb.checked = false;
        cb.disabled = true;
      });
    } else {
      const anyOtherChecked = otherBoxes.some(cb => cb.checked);

      if (anyOtherChecked) {
        noneBox.checked = false;
        noneBox.disabled = true;
      } else {
        noneBox.disabled = false;
        otherBoxes.forEach(cb => cb.disabled = false);
        noneBox.checked = true;
      }
    }
  });
});

const trigger = document.getElementById("material-trigger");
const dropdown = document.getElementById("material-dropdown");

trigger.addEventListener("click", () => {
  dropdown.classList.toggle("open");
});
