let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n")[0];

// let fs = require("fs");
// let input = fs.readFileSync("./input.txt").toString().split("\n")[0];

let stack = [];
let smallOpen = 0;
let largeOpen = 0;
let elseOpen = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "(") {
    stack.push("(");
    smallOpen += 1;
  } else if (input[i] === ")" && stack[stack.length - 1] === "(") {
    stack.pop();
    stack.push(2);
    smallOpen -= 1;
  } else if (input[i] === ")" && typeof stack[stack.length - 1] === "number") {
    let temp = stack.pop() * 2;
    stack.pop();
    stack.push(temp);
    smallOpen -= 1;
  } else if (input[i] === "[") {
    stack.push("[");
    largeOpen += 1;
  } else if (input[i] === "]" && stack[stack.length - 1] === "[") {
    stack.pop();
    stack.push(3);
    largeOpen -= 1;
  } else if (input[i] === "]" && typeof stack[stack.length - 1] === "number") {
    let temp = stack.pop() * 3;
    stack.pop();
    stack.push(temp);
    largeOpen -= 1;
  } else {
    stack.push(input[i]);
    elseOpen += 1;
  }
  if (
    typeof stack[stack.length - 1] === "number" &&
    typeof stack[stack.length - 2] === "number"
  ) {
    stack.push(stack.pop() + stack.pop());
  }
}

if (stack.length !== 1 || typeof stack[stack.length - 1] !== "number") {
  console.log(0);
} else if (smallOpen !== 0 || largeOpen !== 0 || elseOpen !== 0) console.log(0);
else console.log(stack.pop());
