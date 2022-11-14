const fs = require("fs");
const data  = fs.readFileSync("./GDSS/AdventOfCode2021/day1.txt", {encoding:'utf8', flag:'r'});
const arr = data.split(/\r\n/);

for (let i = 0; i < arr.length; i++) {
  arr[i] = parseInt(arr[i]);
}

let result = 0;
let index =0;
for (let i = 0; i < arr.length - 3; i++) {
  let current = 0;
  let next = 0;
  for (let j = i; j < i + 3; j++) {
    current += arr[j];
  }
  for (let j = i + 1; j < i + 4; j++) {
    next += arr[j];
  }
  if (next > current) {
    result++;
  }
  index++;
}
console.log(result);
console.log(index);