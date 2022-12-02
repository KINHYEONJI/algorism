// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let num = Number(input[0]);
let length = Number(input[1]);
let arr = [];

function btr(cnt) {
  for (let i = 0; i < length; i++) {
    if (cnt === length) {
      arr.join("");
    }
  }
}
