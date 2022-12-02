let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// let fs = require("fs");
// let input = fs.readFileSync("./input.txt").toString().split("\n");

let buildingNum = input[0];
let building = [];
let maxAddress = 0;
let leftMaxFloor = 0;
let rightMaxFloor = 0;
let moreLessFloor = 0;
let area = 0;

for (let i = 0; i < buildingNum; i++) {
  if (parseInt(input[i + 1].split(" ")[0]) > maxAddress)
    maxAddress = parseInt(input[i + 1].split(" ")[0]);
}

for (let i = 0; i <= maxAddress; i++) {
  building[i] = 0;
}
for (let i = 0; i < buildingNum; i++) {
  building[input[i + 1].split(" ")[0]] = parseInt(input[i + 1].split(" ")[1]);
}
for (let i = 0; i <= maxAddress; i++) {
  let leftMaxFloor = 0;
  let rightMaxFloor = 0;
  let moreLessFloor = 0;
  for (let j = 0; j < i; j++) {
    if (building[j] > leftMaxFloor) leftMaxFloor = building[j];
  }
  for (let j = i + 1; j <= maxAddress; j++) {
    if (building[j] > rightMaxFloor) rightMaxFloor = building[j];
  }

  if (rightMaxFloor < leftMaxFloor) {
    moreLessFloor = rightMaxFloor;
  } else moreLessFloor = leftMaxFloor;

  if (moreLessFloor < building[i]) area += building[i];
  else area += moreLessFloor;
}

console.log(area);
