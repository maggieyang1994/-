// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (var i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 0) {
      console.log(nums[i])
      [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
    }
  }
  return nums
};
var arr = [3, 3, 34, 0, 8, 5, 4];
var res = moveZeroes(arr);
console.log(res)