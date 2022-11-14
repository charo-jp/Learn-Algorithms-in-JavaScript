const fs = require("fs");
const data  = fs.readFileSync("./GDSS/AdventOfCode2021/day2.txt", {encoding:'utf8', flag:'r'});
let arr = data.split(/\r\n/);

let depth = 0;
let horizontalPosition = 0;
let aim = 0;

for (let a of arr) {
  let command = a.split(" ");
  switch (command[0]) {
    case "forward":
      horizontalPosition += parseInt(command[1]); // 
      depth += aim * parseInt(command[1]);
      break;
    case "down":
      aim += parseInt(command[1]);
      break;
    case "up":
      aim -= parseInt(command[1]);
      break;
  }
}

console.log(horizontalPosition * depth);
