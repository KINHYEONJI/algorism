let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((data) => +data);

// let fs = require("fs");
// let input = fs
//   .readFileSync("./input.txt")
//   .toString()
//   .split("\n")
//   .map((data) => +data);

let maxNum = Math.max(...input);

console.log(maxNum);
console.log(input.indexOf(maxNum) + 1);
