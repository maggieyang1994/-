/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var num = [1, 3, 5, 6];
var target = 0
var searchInsert = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === target || nums[i] > target) return i || 0
  }
  return nums.length
};
// console.log(searchInsert(num, target));

// 二分法 数组已经有序
// 每次取中间的值

// 二分查找 返回下
// 1  3 5 7 9 12   0 
var erfen = (arr, target) => {
  let start = 0;
  let end = arr.length
  while (end > start) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) {
      // 左边
      end = mid
    } else {
      start = mid + 1
    }
  }
  console.log('start', start)
  console.log('end', end)
  return end

}
var res = erfen([1, 3, 5, 7, 9, 10, 12], 13);
console.log(res)   
// 报数
// 1 1 
// 2 11
// 3 21
// 4 1211
// 5 111221
// 6 312211
const countAndSay = (n) => {
  if (n === 1) return '1';
  else {
    let lastRes = countAndSay(n - 1);
    let temp = String(lastRes).match(/(\d)\1*/g);
    return temp.reduce((o, item) => {
      o += item.length + item[0] + "";
      return o
    }, "")
  }
}

// let countRes = countAndSay(6);
// console.log(countRes)