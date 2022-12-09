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

let multipleNum = input.reduce((acc, cur, index) => {
  return (acc *= cur);
});

let multipleNumArr = multipleNum.toString().split("");
let cntArr = new Array(10).fill(0);

for (let i = 0; i < multipleNumArr.length; i++) {
  cntArr[multipleNumArr[i]] += 1;
}

for (let i = 0; i < cntArr.length; i++) {
  console.log(cntArr[i]);
}
