const lengthOfLongestSubstring = function (s) {
  let longest = 0;
  let p1 = 0;
  let p2 = 1;
  // use hashmap instead of array.
  let current = {};

  if (s.length <= 1) {
    return s.length;
  }
  current[s[p1]] = p1;
  current.push(s[p1]);
  while (p2 < s.length) {
    if (!current.includes(s[p2])) {
      current.push(s[p2]);
      p2++;
      if (longest < current.length) {
        longest = current.length;
      }
    } else {
      p1 += current.indexOf(s[p2]) + 1;
      current = [s[p1]];
      p2 = p1 + 1;
    }
  }

  if (longest === 0) {
    return 1;
  }
  return longest;
};

const arr = ["abccabb", "cccccc", "", "abcbda", "abcbdaghsi"];
for (let s of arr) {
  console.log(lengthOfLongestSubstring(s));
}
// const s = "cccccc";
// console.log(lengthOfLongestSubstring(s));
