// The way you write code greatly impact the efficiency of running code.
// Without recursion
const search = function (nums, target) {
  let r = nums.length - 1;
  let l = 0;
  while (r >= l) {
    const middle = Math.floor((r + l) / 2);
    if (nums[middle] == target) {
      return middle;
    } else if (nums[middle] > target) {
      r = middle - 1;
    } else {
      l = middle + 1;
    }
  }
  return -1;
};
console.log(search([-1, 0, 3, 5, 9, 12], 6));
// ------------------------------------------------
// Binary Search and Hash Search.
// Binary Search with recursion
const binarySearchWithRecursion = (arr, start, end, target) => {
  const middle = Math.floor((start + end) / 2);
  if (start <= end) {
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] > target) {
      return binarySearch(arr, start, middle - 1, target); // stating return is really important!!
    } else {
      return binarySearch(arr, middle + 1, end, target);
    }
  } else {
    return -1;
  }
};

console.log(binarySearchWithRecursion([-1, 0, 3, 5, 9, 12], 0, 5, 6));
console.log(
  binarySearchWithRecursion([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 9, 9)
);
console.log(
  binarySearchWithRecursion([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 9, 0)
);
console.log(
  binarySearchWithRecursion([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 9, 4)
);
console.log(
  binarySearchWithRecursion([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 9, 7)
);
