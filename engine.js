const CONFIG = {
  GOLD_WEIGHT: 0.8,
  NEW_WEIGHT: 0.2,
  MEMORY_SIZE: 5
};

let lastGames = [];

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getGame() {
  if (!GAMES || GAMES.length === 0) return null;
  return randomChoice(GAMES);
}
