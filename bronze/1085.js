let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((data) => +data);

// let fs = require("fs");
// let input = fs
//   .readFileSync("./input.txt")
//   .toString()
//   .trim()
//   .split(" ")
//   .map((data) => +data);

let distance = [];

distance.push(input[0], input[1], input[2] - input[0], input[3] - input[1]);

console.log(distance.sort((a, b) => a - b)[0]);
