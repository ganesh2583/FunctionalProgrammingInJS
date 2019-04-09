let games = [
  { name: "Assasins Creed", genre: "Action/Adventure" },
  { name: "GTA V", genre: "Open World" },
  { name: "Max Payne", genre: "Shooting" },
  { name: "Tekken", genre: "Fighting" },
  { name: "Prince Of Persia", genre: "Action/Adventure" },
  { name: "Far Cry 3", genre: "Open World" }
];

console.log("All games", games);

let allGamesNames = [];

for (let index = 0; index < games.length; index++) {
  const element = games[index];
  allGamesNames.push(element.name);
}

console.log("All games names (Using age old for loop)", allGamesNames);

let allGamesNamesUsingMap = games.map(game => {
  return game.name + " is an " + game.genre + " game";
});

console.log("All games names (Using maps)", allGamesNamesUsingMap);
