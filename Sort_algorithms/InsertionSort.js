const insertionSort = (arr, order = "asc") => {
  for (let i = 1; i < arr.length; i++) {
    const val = arr[i];
    let j = i - 1;
    if (order === "asc") {
      while (j >= 0 && arr[j] > val) {
        arr[j + 1] = arr[j];
        j--;
      }
    } else if (order === "desc") {
      while (j >= 0 && arr[j] < val) {
        arr[j + 1] = arr[j];
        j--;
      }
    }
    arr[j + 1] = val;
  }
  return arr;
};

let array = [10, 4, 1, 6, 2, 3, 7, 9, 5, 8];

exports.sort = insertionSort;
