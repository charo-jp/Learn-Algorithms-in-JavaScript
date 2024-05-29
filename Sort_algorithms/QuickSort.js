const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr, start, end) => {
  const pivot = arr[end];
  let i = start;
  for (let j = start; j < end; j++) {
    if (arr[j] <= pivot) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i, end);
  return i;
};

const quickSort = (arr, start, end) => {
  if (start < end) {
    const q = partition(arr, start, end);
    quickSort(arr, start, q - 1);
    quickSort(arr, q + 1, end);
    return arr;
  }
};

const array = [5, 8, 1, 3, 6, 7, 0, 9, 2, 4];

exports.sort = quickSort;
