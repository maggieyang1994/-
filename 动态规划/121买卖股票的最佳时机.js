/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!prices.length) return 0
  let res = [];
  for (let i = 0; i < prices.length; i++) {
    if (i === 0) res.push(0);
    else {
      res.push(Math.max(res[i - 1] + prices[i] - prices[i - 1], 0))
    }
  }
  // console.log(res);
  return Math.max(...res)
};
var arr = [7, 1, 5, 3, 6, 4];
// console.log(maxProfit(arr));

// 暴力法
const maxProfit1 = (arr) => {
  let maxPro = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      maxPro = Math.max(maxPro, arr[j] - arr[i])
    }
  }
  return maxPro
}
var res1 = maxProfit1(arr);
console.log(res1)
// 动态规划
// 7,1,5,3,6,4
const maxProfit2 = (arr) => {
  let minPrice = arr[0];
  let maxProfit = 0;
  let tempArr = []
  for (let i = 1; i < arr.length; i++) {
    minPrice = Math.min(minPrice, arr[i]);
    maxProfit = Math.max(maxProfit, arr[i] - minPrice);
    tempArr.push(maxProfit)
  }
  console.log(tempArr)
  return maxProfit
}
var res2 = maxProfit2(arr);
console.log(res2)
