const height = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
let total = 0;
let maxL = 0;
let maxR = 0;
let pointerL = 0;
let pointerR = height.length - 1;

while (pointerR - pointerL != 0) {
  const VALL = height[pointerL];
  const VALR = height[pointerR];
  if (VALL <= VALR) {
    if (maxL > VALL) {
      total += maxL - VALL;
    } else {
      maxL = VALL;
    }
    pointerL++;
  } else {
    if (maxR > VALR) {
      total += maxR - VALR;
    } else {
      maxR = VALR;
    }
    pointerR--;
  }
}

console.log(total);
