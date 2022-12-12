// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let cardCnt = input[0].toString().split(" ")[0];
let givenMaxSum = input[0].toString().split(" ")[1];

let cardArr = input[1].split(" ").map((element) => Number(element));

let sum = 0;
let maxSum = 0;

for (let i = 0; i < cardCnt; i++) {
  for (let j = i + 1; j < cardCnt; j++) {
    for (let k = j + 1; k < cardCnt; k++) {
      sum = cardArr[i] + cardArr[j] + cardArr[k];
      if (sum > maxSum && sum <= givenMaxSum) maxSum = sum;
    }
  }
}

console.log(maxSum);
