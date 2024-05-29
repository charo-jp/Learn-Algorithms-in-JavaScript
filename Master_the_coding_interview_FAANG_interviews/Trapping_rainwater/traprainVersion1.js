// This version fails to pass the time limit restriction.

const WALLS = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
// const WALLS = [4, 2, 0, 3, 2, 5];

let total = 0;
let maxR = 0;
let maxL = 0;

// represent current height as ch
const addToTotal = (array, index) => {
  const RESULT = Math.min(maxL, maxR) - array[index];
  if (RESULT >= 0) {
    total += RESULT;
  }
};

const searchMax = (array, index) => {
  maxL = maxR = 0;
  // search for the left side
  for (let l = 0; l < index; l++) {
    maxL = Math.max(maxL, array[l]);
  }

  // search for the right side
  for (let r = index + 1; r < array.length; r++) {
    if (array[r] > maxR) {
      maxR = Math.max(maxR, array[r]);
    }
  }

  // Use this to confirm that the code is right.
  // console.log("Index: " + index + " MaxL: " + maxL + " MaxR: " + maxR);
};

const calcTrappedWater = (array) => {
  for (let i = 0; i < array.length; i++) {
    searchMax(array, i);
    addToTotal(array, i);
  }
  console.log("The amount of water trapped is: " + total);
};

calcTrappedWater(WALLS);
