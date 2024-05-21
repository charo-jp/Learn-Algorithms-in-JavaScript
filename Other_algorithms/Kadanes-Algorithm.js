/**
 * Kadane's Algorithm
 * This is used to find the maximum sum of a contigious subarray in an array.
 *
 * For example,
 * arr = [-2, -3, 4, -1, -2, 1, 5, -3];
 *
 * The maximum sum of a contigous subarray is 7 [4, -1, -2, 1, 5]
 */

const kadaneAlgo = (arr) => {
  const length = arr.length;

  // max_ending_here stores the sum of current subarray
  let max_ending_here = 0;
  // max_so_far stores the max sum of contagious subarray found so far
  let max_so_far = Number.MIN_VALUE;

  // store the start and the end of the subarray
  let start = 0,
    end = 0,
    s = 0;

  for (let i = 0; i < length; i++) {
    max_ending_here += arr[i];

    if (max_so_far < max_ending_here) {
      max_so_far = max_ending_here;
      start = s;
      end = i;
    }
    if (max_ending_here < 0) {
      max_ending_here = 0;
      s = i + 1;
    }
  }

  const resturnObject = {
    sum: max_so_far,
    start: start,
    end: end,
  };
  return resturnObject;
};

const array = [-2, -3, 4, -1, -2, 1, 5, -3];
const result = kadaneAlgo(array);
console.log("SUM    : " + result.sum);
console.log("Start  : " + result.start + " Val      : " + array[result.start]);
console.log("End    : " + result.end + " Val      : " + array[result.end]);
