let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// let fs = require("fs");
// let input = fs.readFileSync("./input.txt").toString().split("\n");

let num = input[0];
let scoreArr = input[1].split(" ").sort();

let maxScore = Math.max(...scoreArr);

let remakeScore = scoreArr.map((data) => (data / maxScore) * 100);

let scoreSum = remakeScore.reduce((acc, cur, index) => {
  return (acc += cur);
});

console.log(scoreSum / num);
