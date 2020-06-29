/**
 * @param {number} x
 * @return {number}
 * 
 * 
 * 实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例 1:
输入: 4
输出: 2
输入: 8
输出: 2
说明: 8 的平方根是 2.82842..., 
     由于返回类型是整数，小数部分将被舍去。
 */
// 1 1
// 4 2
// 3 9  4 16   5 25  6 36 7 49 8 64
var x = 9;
// 0 1 2 3 4
var mySqrt = function (x) {
  if (x === 1) return x
  let start = 0;
  let end = Math.ceil(x / 2)
  while (end >= start) {
    let mid = start + Math.floor((end - start) / 2);
    let square = mid * mid;
    if (square === x) return mid
    else if (square > x) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return start
};
let res = mySqrt(x);
// console.log(res)

// 排好序的数组  找到某个数字
var arr = [1, 3, 4, 6, 7, 9];
var num = 6;
const fn = (arr, num) => {
  var start = 0;
  var end = arr.length - 1;
  while (end >= start) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] === num) return mid
    else if (arr[mid] > num) end = mid - 1;
    else start = mid + 1
  }
  return mid
}
console.log(fn(arr, num))