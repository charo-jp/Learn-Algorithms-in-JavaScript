// merge sort
const conquer = (arr, start, middle, end) => {
  const left = arr.slice(start, middle + 1);
  const right = arr.slice(middle + 1, end + 1);
  let i = 0;
  let j = 0;
  let k = start;
  for (k; k <= end; k++) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      if (left[i + 1] === undefined) {
        left[i] = Number.MAX_SAFE_INTEGER;
        i--;
      }
      i++;
    } else {
      arr[k] = right[j];
      if (right[j + 1] === undefined) {
        right[j] = Number.MAX_SAFE_INTEGER;
        j--;
      }
      j++;
    }
  }
};

const divide = (arr, start, end) => {
  const m = Math.floor((start + end) / 2);
  if (start < end) {
    divide(arr, start, m);
    divide(arr, m + 1, end);
    conquer(arr, start, m, end);
  }
};

const mergeSort = (arr) => {
  divide(arr, 0, arr.length - 1);
  return arr;
};
const a = [5, 1, 4, 3];
const array = [9, 5, 2, 1, 7, 3, 4, 6, 8, 0];

exports.sort = mergeSort;
