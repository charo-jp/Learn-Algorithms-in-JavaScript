const bmSearch = (text, key) => {
  if (key.length > text.length) {
    return "Key has more characters than text!";
  }
  const table = new Map();
  const others = key.length;
  for (let i = 0; i < key.length; i++) {
    table.set(key[i], key.length - 1 - i);
  }

  console.log(table);
  let i = key.length - 1;
  while (i < text.length) {
    j = key.length - 1;
    while (text[i] === key[j]) {
      if (j === 0) {
        return i;
      }
      j -= 1;
      i -= 1;
    }
    i +=  
  }
};

const TEXT = "ATCTGAATGCGTAAGC";
const KEY = "TGCG";

const INDEX = bmSearch(TEXT, KEY);
console.log(`Range of ${KEY} in a Text: ${INDEX} ~ ${INDEX + KEY.length - 1}`);
