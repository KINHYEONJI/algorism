let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((data) => +data);

// let fs = require("fs");
// let input = fs
//   .readFileSync("./input.txt")
//   .toString()
//   .trim()
//   .split(" ")
//   .map((data) => +data);

let hour = input[0];
let minute = input[1];

if (minute > 45) {
  console.log(`${hour} ${minute - 45}`);
}
if (minute < 45) {
  if (hour === 0) {
    console.log(`${23} ${minute + 15}`);
  } else console.log(`${hour - 1} ${minute + 15}`);
}
if (minute === 45) {
  console.log(`${hour} ${0}`);
}
