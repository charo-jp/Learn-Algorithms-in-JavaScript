// The way you write code greatly impact the efficiency of running code.
//
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
