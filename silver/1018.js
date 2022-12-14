let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// let fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString().trim().split("\n");

let [h, w] = input.shift().split(" ");
let answer = [];
const whiteFirstBoard = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const blackFirstBoard = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

for (let i = 0; i < h - 7; i++) {
  for (let j = 0; j < w - 7; j++) {
    let count1 = 0;
    let count2 = 0;
    for (let k = i; k < i + 8; k++) {
      for (let l = j; l < j + 8; l++) {
        if (input[k][l] !== whiteFirstBoard[k - i][l - j]) count1++;
        if (input[k][l] !== blackFirstBoard[k - i][l - j]) count2++;
      }
    }
    answer.push(count1, count2);
  }
}

console.log(Math.min(...answer));
