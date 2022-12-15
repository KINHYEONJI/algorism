let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// let fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString().trim().split("\n");

let wordCnt = input.shift();

let sortingInput = input.sort().sort((a, b) => a.length - b.length);

let set = [...new Set(sortingInput)];

console.log(Array.from(set).join("\n"));
