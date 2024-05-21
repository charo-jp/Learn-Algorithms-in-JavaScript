const bfSearch = (text, word) => {
  let i = 0;
  while (i < text.length - word.length) {
    if (text[i] == word[0]) {
      let j = 0;
      for (j; j < word.length; j++) {
        if (text[i + j] !== word[j]) {
          break;
        }
      }
      if (j === word.length) {
        return i;
      }
    }
    i++;
  }
  return null;
};

const TEXT = "this is a terrible algorithm to implement";
const KEY = "algorithm";

console.log(bfSearch(TEXT, KEY) + KEY.length - 1);
console.log(TEXT[27]);
