// DRY: Don't repeat yourself.
// In my fisrt solution, I wrote two for loops that
// does exact the same thing. It violates the convention
// of DRY. It is always a good practice to follow the conventions.
const s = "AabB#";
const t = "aAbB#";
let sResult;
let tResult;
let result = true;
// remove shraps from the string s.
const removeSharps = (str) => {
  let countSharp = 0;
  let result = [];
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === "#") {
      countSharp++;
    } else {
      if (countSharp == 0) {
        result.push(str[i]);
      } else {
        countSharp--;
      }
    }
  }
  return result;
};

sResult = removeSharps(s);
tResult = removeSharps(t);

// compare the two results
if (sResult.length != tResult.length) {
  result = false;
} else {
  for (let i = 0; i < sResult.length; i++) {
    if (sResult[i] !== tResult[i]) {
      result = false;
    }
  }
}

console.log(result);
