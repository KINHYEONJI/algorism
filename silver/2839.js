let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// let fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString().trim().split("");

let max3 = Math.floor(input / 3);
let max5 = Math.floor(input / 5);
let answer = [];

for (let i = 0; i <= max5; i++) {
  for (let j = 0; j <= max3; j++) {
    if (5 * i + 3 * j > +input) break;
    if (5 * i + 3 * j === +input) answer.push(j + i);
  }
}

if (answer.length === 0) console.log(-1);
else console.log(Math.min(...answer));
