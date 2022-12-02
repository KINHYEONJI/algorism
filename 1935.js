let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// let fs = require("fs");
// let input = fs.readFileSync("./input.txt").toString().split("\n");

let cnt = input[0];
let sentence = input[1].split("");
let stack = [];
let temp = [];

for (let i = 0; i < sentence.length; i++) {
  if (/^[a-z|A-Z]+$/.test(sentence[i])) {
    stack.push(parseInt(input[sentence[i].charCodeAt(0) - 63]));
  } else {
    temp.push(stack.pop());
    temp.push(stack.pop());
    stack.push(eval(temp.pop() + sentence[i] + temp.pop()));
  }
}

console.log(parseFloat(stack.pop()).toFixed(2));
