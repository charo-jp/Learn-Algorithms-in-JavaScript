const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return null;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(linearSearch(array, 9));
