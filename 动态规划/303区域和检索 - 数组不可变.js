/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    let sum = [0];
    for(var i = 1;i<nums.length;i++){
      sum[i] = sum[i-1] + nums[i]
    }
    console.log(sum[j+1] - sum[i])
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