//Conver CSV file to JSON
const fs = require("fs");

let jsonOutput = {};
let index = 0;
let output = fs
  .readFileSync("sampleData.csv", "utf8")
  .split("\r\n")
  .map(element => {
    return element.split(",");
  })
  .reduce((jsonOutput, currentElementArray) => {
    console.log("currentElementArray", currentElementArray);
    jsonOutput[currentElementArray[0]] = [];
    jsonOutput[currentElementArray[0]].push({
      firstname: currentElementArray[1]
    });
    jsonOutput[currentElementArray[0]].push({
      latname: currentElementArray[2]
    });
    jsonOutput[currentElementArray[0]].push({ age: currentElementArray[3] });
    return jsonOutput;
  }, {});

console.log("output", output);
