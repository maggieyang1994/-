/**
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。

注意：你不能在买入股票前卖出股票。



输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。


输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。

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

const again = (arr) => {
  let max = 0
  for(var i = 0;i< arr.length; i++){
    for(var j = i+1;j>arr.length;j++){
      max =  Math.max(max, arr[j] - arr[i])
    }
  }
}