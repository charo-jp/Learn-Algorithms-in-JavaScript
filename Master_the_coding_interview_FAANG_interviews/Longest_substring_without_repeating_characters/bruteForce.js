const lengthOfLongestSubstring = function (s) {
  let longest = 0;
  for (let i = 0; i < s.length; i++) {
    let currentString = "";
    let index = i;
    while (currentString.indexOf(s[index]) === -1 && index < s.length) {
      currentString += s[index];
      if (longest < currentString.length) {
        longest = currentString.length;
      }
      index++;
    }
  }
  return longest;
};

const s = "abcbda";
console.log(lengthOfLongestSubstring(s));
