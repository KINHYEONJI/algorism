let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString());

// let fs = require("fs");
// let input = Number(fs.readFileSync("./input.txt"));

let answer = 0;

for (let i = 0; i < input; i++) {
  let numArr = String(i)
    .split("")
    .map((data) => Number(data));
  let sum = numArr.reduce((acc, cur, index) => {
    return (acc += cur);
  }, i);

  if (sum === input) {
    answer = i;
    break;
  }
}

console.log(answer);
