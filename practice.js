const func = (string) => {
  for (let i = 0; i < string.length - 1; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return "not unique";
      }
    }
  }
  return "unique";
};

const s = "beautiful";
const c = "charoo";
console.log(func(s));
console.log(func(c));
