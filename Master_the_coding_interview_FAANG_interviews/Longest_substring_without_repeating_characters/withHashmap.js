const lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) {
    return s.length;
  }
  const seenChars = {};
  let left = 0,
    longest = 0;
  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    const prevSeenChar = seenChars[currentChar];
    if (prevSeenChar >= left) {
      left = prevSeenChar + 1;
    }
    seenChars[currentChar] = right;
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
};

console.log(lengthOfLongestSubstring("bbtablud"));
