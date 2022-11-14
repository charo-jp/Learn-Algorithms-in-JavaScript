const fs = require("fs");
const data  = fs.readFileSync("./GDSS/AdventOfCode2021/day3.txt", {encoding:'utf8', flag:'r'});
const arr = data.split(/\r\n/);
const LENGTH = arr.length;
for (let binary of arr) {
    // console.log(binary);
}

// create JavaScript object
const obj = {};
for (let i = 0; i < arr[0].length; i++) {
    obj[i] = 0;
}

for (let binary of arr) {
    for (let i = 0; i < LENGTH; i++){
        if (binary[i] === "1") {
            obj[i] += 1;
        }
    }
}

// calculate gamma rate
let gamma = "";
for (const [key, value] of Object.entries(obj)) {
    if (value > 500) {
        gamma += "1";
    }else{
        gamma += "0";
    }
}
console.log(gamma);
let gammaResult = parseInt(gamma, 2);

let epsilon = "";

for (let char of gamma) {
    if (char === "1"){
        epsilon += "0";
    }else {
        epsilon += "1";
    }
}
let eplisonResult =  parseInt(epsilon, 2);

console.log(gammaResult * eplisonResult);