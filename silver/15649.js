let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

// let fs = require("fs");
// let input = fs.readFileSync("../input.txt").toString().split(" ");

let num = Number(input[0]);
let length = Number(input[1]);
let visited = new Array(num).fill(false);
let output = [];
let answer = "";

function btr(cnt) {
  if (cnt === length) {
    answer += `${output.join(" ")}\n`;
    return;
  }

  for (let i = 0; i < num; i++) {
    if (visited[i] === true) continue;
    visited[i] = true;
    output.push(i + 1);
    btr(cnt + 1);
    output.pop();
    visited[i] = false;
  }
}
btr(0);

console.log(answer.trim());
