let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let cnt = input[0];

let answer = [];
for (let i = 0; i < cnt; i++) {
  let arr = input[i + 1];
  let vpsNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (vpsNum >= 0) {
      if (arr[i] === "(") {
        vpsNum++;
      } else vpsNum--;
    }
  }
  if (vpsNum === 0) {
    answer.push("YES");
  } else answer.push("NO");
}

console.log(answer.join("\n"));
