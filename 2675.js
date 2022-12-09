let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// let fs = require("fs");
// let input = fs.readFileSync("./input.txt").toString().split("\n");

let [num, ...question] = input;

for (let i = 0; i < num; i++) {
  let [cnt, string] = question[i].split(" ");
  let answer = [];
  for (let j = 0; j < string.length; j++) {
    answer.push(string.split("")[j].repeat(+cnt));
  }
  console.log(answer.join(""));
}
