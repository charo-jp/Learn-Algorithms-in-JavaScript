const S = "AabB#";
const T = "aAbB#";

const SHARP = /\#/;
const sResult = [];
const tResult = [];
let sSharp = 0;
let tSharp = 0;
let result = true;
// remove shraps from the string s.
for (let i = S.length - 1; i >= 0; i--) {
  if (S[i].match(SHARP)) {
    sSharp++;
  } else {
    if (sSharp == 0) {
      sResult.push(S[i]);
    } else {
      sSharp--;
    }
  }
}

// remove shraps from the string t.
for (let i = T.length - 1; i >= 0; i--) {
  if (T[i].match(SHARP)) {
    tSharp++;
  } else {
    if (tSharp == 0) {
      tResult.push(T[i]);
    } else {
      tSharp--;
    }
  }
}
console.log(sResult);
console.log(tResult);

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
