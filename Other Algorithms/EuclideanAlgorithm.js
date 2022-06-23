const gcd = (a, b) => {
  const r = a % b;
  if (r === 0) {
    return b;
  }
  return gcd(b, r);
};

const valueA = 19;
const valueB = 7;

const result = gcd(valueA, valueB); // A must be bigger than B.
console.log(result);
