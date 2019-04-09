let myArray = ["a", "b", "c", "d"];

console.log({myArray});
myArray.push("e"); // Add an element an the end of an array
console.log({myArray});
myArray.unshift("x");// Add an element an the begning of an array
console.log({myArray});

let myArrayDuplicate = ["z", ...myArray]; // Copy contents of array onto another array. Its also another way to add an element an the begning of an array. This is IMMUTABLE way.

console.log({myArrayDuplicate});