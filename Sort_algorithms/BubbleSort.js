const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = arr.length - 1; j >= i; j--) {
      if (arr[j] <= arr[j - 1]) {
        const temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

const array = [5, 9, 2, 1, 7, 3, 4, 6, 8, 0];

exports.sort = bubbleSort;
