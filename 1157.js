// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().toUpperCase().split("");

let fs = require("fs");
let input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .toUpperCase()
  .split("");

function findAnswer() {
  if (input.length === 1) return input[0];

  let charMap = new Map();

  for (let i = 0; i < input.length; i++) {
    if (charMap.has(input[i])) {
      let inputCharCnt = charMap.get(input[i]);
      charMap.set(input[i], ++inputCharCnt);
    }
    if (!charMap.has(input[i])) {
      charMap.set(input[i], 1);
    }
  }
  let sortCharMap = [...charMap].sort((a, b) => a[1] - b[1]).reverse();

  if (sortCharMap[0][1] === sortCharMap[1][1]) return "?";
  else if (sortCharMap[0][1] !== sortCharMap[1][1]) return sortCharMap[0][0];
}

console.log(findAnswer());
