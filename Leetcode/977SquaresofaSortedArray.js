var sortedSquares = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  let newArray = new Array(nums.length);
  for (let i = nums.length - 1; i >= 0; i--) {
    const numRight = nums[r] ** 2;
    const numLeft = nums[l] ** 2;
    if (numRight < numLeft) {
      newArray[i] = numLeft;
      l += 1;
    } else if (numLeft <= numRight) {
      newArray[i] = numRight;
      r -= 1;
    } else if (l === r) {
      newArray[i] = numLeft;
    }
  }
  return newArray;
};

console.log(sortedSquares([-7, -3, 2, 3, 11]));
console.log(sortedSquares([1, 4, 5, 8, 10]));
console.log(sortedSquares([-10, -8, -5, -4, -1]));
