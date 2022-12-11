let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((data) => +data);

// let fs = require("fs");
// let input = fs
//   .readFileSync("./input.txt")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((data) => +data);

let answer = [];

for (let i = 0; i < input.length; i++) {
  answer.push(input[i] % 42);
}

const answerSet = [...new Set(answer)];

console.log(answerSet.length);
