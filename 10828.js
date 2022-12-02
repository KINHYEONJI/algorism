let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let arr = [];
let answer = [];

for (let i = 1; i <= input[0]; i++) {
  switch (input[i].split(" ")[0]) {
    case "push":
      arr.push(input[i].split(" ")[1]);
      break;

    case "pop":
      if (arr.length < 1) {
        answer.push(-1);
      } else {
        answer.push(arr[arr.length - 1]);
        arr.pop();
      }
      break;

    case "top":
      if (arr.length < 1) {
        answer.push(-1);
      } else answer.push(arr[arr.length - 1]);
      break;

    case "size":
      answer.push(arr.length);
      break;

    case "empty":
      if (arr.length < 1) {
        answer.push(1);
      } else answer.push(0);
      break;
  }
}

console.log(answer.join("\n"));
