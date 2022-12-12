let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

// let fs = require("fs");
// let input = fs.readFileSync("./input.txt").toString().split(" ");

let input1 = input[0].split("").reverse();
let input2 = input[1].split("").reverse();

let answer = input1 > input2 ? input1 : input2;

console.log(answer.join(""));
