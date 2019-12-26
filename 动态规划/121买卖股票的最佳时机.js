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
console.log(maxProfit(arr));


