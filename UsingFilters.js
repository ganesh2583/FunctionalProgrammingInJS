let games = [
  { name: "Assasins Creed", genre: "Action/Adventure" },
  { name: "GTA V", genre: "Open World" },
  { name: "Max Payne", genre: "Shooting" },
  { name: "Tekken", genre: "Fighting" },
  { name: "Prince Of Persia", genre: "Action/Adventure" },
  { name: "Far Cry 3", genre: "Open World" }
];

console.log("All games", games);

var openWorldGames = [];

for (let index = 0; index < games.length; index++) {
  const element = games[index];
  if (element.genre === "Open World") {
    openWorldGames.push(element);
  }
}

console.log("Open world games(Using age old for loops): ", openWorldGames);

var actionAdventureGames = games.filter(game => {
  return game.genre === "Action/Adventure";
});

console.log("Action Adventure games(Using Filter): ", actionAdventureGames);
