const isSubsequence = (s,t) => {
  if (t.length < s.length) return false;
  if (s.length === 0) return true;
  const SLENGTH = s.length - 1;
  let pointerS = 0;

  for (let char of t) {
    if (char === s[pointerS]) {
      if (pointerS === SLENGTH) {
        return true;
      }
      pointerS++;
    }
  }
  return false;
}

const tests = [["abc", "ahbgdc"], ["acd", "ahbgdc"], ["abc", "charo"],["", ""]];
// Expected Output
// true
// false
// false
// true

for (const test of tests) { // Tests for Brute Force
  console.log(isSubsequence(test[0], test[1]));
}