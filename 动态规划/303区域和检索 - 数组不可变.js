/**
 * 
给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。

示例：

给定 nums = [-2, 0, 3, -5, 2, -1]，求和函数为 sumRange()

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3

 * @param {number[]} nums
 */
var NumArray = function (nums) {
  let sum = [0];
  for (var i = 1; i < nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i]
  }
  console.log(sum)
};


var nums = [-2, 0, 3, -5, 2, -1]
// 0  -2, 0, 3, -5, 2, -1
// 0  -2 -2  1   4  -2 -1  -1
NumArray(nums)
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
const fn = (arr) => {
  let hash = {'-1':0};
  for(var i = 0;i<arr.length;i++){
    hash[i] = hash[i - 1] + arr[i]
  }
  return (i, j) => {
    return hash[j] - hash[i-1]
  }
   
}
let hash = fn(nums);
console.log(hash(2,5))