// function
// merge, quick, bubble, insertion

//insertion sort
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[i]) {
        const temp = arr[j];
        arr[j] = arr[i];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
};

const conquer = (arr, s, m, e) => {
  const left = arr.slice(s, m + 1);
  const right = arr.slice(m + 1, e + 1);
  let i = 0;
  let j = 0;
  let k = s;
  for (k; k < e + 1; k++) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      if (i === left.length - 1) {
        left[i] = Number.MAX_SAFE_INTEGER;
        i--;
      }
      i++;
    } else {
      arr[k] = right[j];
      if (j === right.length - 1) {
        right[j] = Number.MAX_SAFE_INTEGER;
        j--;
      }
      j++;
    }
  }
};

const mergeSort = (arr, start, end) => {
  const m = Math.floor((start + end) / 2);
  if (start < end) {
    mergeSort(arr, start, m);
    mergeSort(arr, m + 1, end);
    conquer(arr, start, m, end);
  }
};

const quickSort = (arr, start, end) => {
  if (start < end) {
    const pivot = arr[end];
    let i = start;
    for (let j = start; j < end; j++) {
      if (arr[j] <= pivot) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
      }
    }
    const t = arr[i];
    arr[i] = pivot;
    arr[end] = t;
    quickSort(arr, start, i - 1);
    quickSort(arr, i + 1, end);
  }
};

const array1 = [9, 5, 2, 1, 7, 3, 4, 6, 8, 0];
const array2 = [100, 100, 101, 220, 2, 1, 22, 33, 3, 1000];
// const is = insertionSort(array);
// const is2 = insertionSort(array2);
// const bs = bubbleSort(array);
// const bs2 = bubbleSort(array2);
quickSort(array2, 0, 9);
console.log(array2);
