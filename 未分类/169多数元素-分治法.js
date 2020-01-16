// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素
/**
 * @param {number[]} nums
 * @return {number}
 */
// 分治算法
// 把要求解的问题，一分为二，在每个分支上再求解
// 以中间为界限。 先计算环绕中间这个数字的众数情况。然后左右分开递归计算结果，取最值就可以

// begin 和 end 分别是指针
var majorityElement = function (nums, begin, end) {
  if (end - begin <= 1) return nums[begin];
  else {
    let mid = begin + parseInt((end - begin) / 2);
    // console.log(mid)
    let left = majorityElement(nums, begin, mid);
    let right = majorityElement(nums, mid + 1, end);
    if (left === right) return left;
    else {
      let leftCount = 0;
      let rightCount = 0;
      // 左边出现left的数字
      for (let i = left; i < mid; i++) {
        if (nums[i] === left) leftCount++
      }
      // 右边出现right的数字
      for (let i = mid; i < right; i++) {
        if (nums[i] === right) rightCount++
      }
      return leftCount > rightCount ? left : right
    }
  }
};
var res = majorityElement([3, 2, 1, 1, 1, 3, 2], 0, 6);
console.log(res)