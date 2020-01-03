// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 示例:

// 输入: [-2,1,-3,4,-1,2,1,-5,4],
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
var arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// res = [4,-1,2,1] 6
const findArr = (arr) => {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) res.push(arr[i])
    else {
      res.push(Math.max(arr[i], arr[i] + res[i - 1]))
    }
  }
  console.log(res);
  return Math.max(...res)
}
findArr(arr);
