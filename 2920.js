let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// let fs = require("fs");
// let input = fs
//   .readFileSync("./input.txt")
//   .toString()
//   .trim()
//   .split(" ")
//   .join("");

if (input === "12345678") {
  console.log("ascending");
} else if ([...input].reverse().join("") === "12345678") {
  console.log("descending");
} else {
  console.log("mixed");
}
