// Utilize the orignal strings.
// Use the two pointer technique.
// Start from the end of the strings

const s = "a###baaaa";
const t = "baaaa";

const backSpaceCompare = (s, t) => {
  let p1 = s.length - 1;
  let p2 = t.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (s[p1] === "#" || t[p2] === "#") {
      if (s[p1] === "#") {
        let backCount = 2;
        while (backCount > 0) {
          p1--;
          backCount--;
          if (s[p1] === "#") {
            backCount += 2;
          }
        }
      }
      if (t[p2] === "#") {
        let backCount = 2;
        while (backCount > 0) {
          p2--;
          backCount--;
          if (t[p2] === "#") {
            backCount += 2;
          }
        }
      }
    } else {
      if (s[p1] !== t[p2]) {
        return false;
      } else {
        p1--;
        p2--;
      }
    }
  }
  return true;
};

console.log(backSpaceCompare(s, t));
