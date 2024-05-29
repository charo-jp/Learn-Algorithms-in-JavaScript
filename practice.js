var strStr = function (haystack, needle) {
  // check haystack <= needle
  if (haystack.length < needle.length) return -1;
  if (haystack === needle) return 0;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let subString = "";
    for (let j = 0; j < needle.length; j++) {
      subString += haystack[i + j];
    }
    console.log(subString);
    if (subString === needle) return i;
  }
  return -1;
};

console.log(strStr("leetcode", "leeto"));
