let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n")[0];

// let fs = require("fs");
// let input = fs.readFileSync("./input.txt").toString().split("\n")[0];
let beforeWood = 0;
let afterWood = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "(" && input[i + 1] !== ")") {
    beforeWood = beforeWood + 1;
  } else if (input[i] === "(" && input[i + 1] === ")") {
    afterWood = afterWood + beforeWood;
  } else if (input[i - 1] !== "(" && input[i] === ")") {
    beforeWood = beforeWood - 1;
    afterWood = afterWood + 1;
  }
}
console.log(afterWood);
