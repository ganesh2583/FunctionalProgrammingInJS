//Currying

// Array of objects representing charecters in Got
let killersList = [
  {
    name: "Ned Stark",
    killedBy: "Joffrey"
  },
  {
    name: "Joffrey",
    killedBy: "Olenna Tyrell"
  },
  {
    name: "Robb Stark",
    killedBy: "Lanisters"
  },
  {
    name: "Walder Frey",
    killedBy: "Arya Stark"
  },
  {
    name: "Night King",
    killedBy: "Arya Stark"
  },
  {
    name: "Ramsey Snow",
    killedBy: "Jon Snow"
  }
];

const getKilledBy = name => e => e.killedBy === name;

// Get only the entries killed by Arya
let filteredList = killersList.filter(getKilledBy("Arya Stark"));
console.log(filteredList);
