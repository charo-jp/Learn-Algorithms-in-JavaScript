const bmSearch = (text, key) => {
  if (key.length > text.length) {
    return "Key has more characters than text!";
  }
  const table = new Map();
  const others = key.length;
  for (let k = 0; k < key.length; k++) {
    table.set(key[k], key.length - 1 - k);
  }

  console.log(table);
  let i = key.length - 1;
  while (i < text.length) {
    let j = key.length - 1;
    while (text[i] === key[j]) {
      if (j === 0) {
        return i;
      }
      j -= 1;
      i -= 1;
    }
    if (table.get(text[i])) {
      i += table.get(text[i]);
    } else {
      i += others;
    }
  }
};

const TEXT = "Charo was happy after walking around the house.";
const KEY = "after";

const INDEX = bmSearch(TEXT, KEY);
console.log(`Range of ${KEY} in a Text: ${INDEX} ~ ${INDEX + KEY.length - 1}`);
console.log(TEXT[INDEX] + " " + TEXT[INDEX + KEY.length - 1]);
