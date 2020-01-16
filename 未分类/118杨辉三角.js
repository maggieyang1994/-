/**
 * @param {number} numRows
 * @return {number[][]}
 */
// 动态规划 解杨辉三角
var generate = function (numRows) {
  let arr = Array.from({ length: numRows }, (v, i) => Array.from({ length: i + 1 }));
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j === 0 || j === arr[i].length - 1) arr[i][j] = 1;
      else {
        arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
      }
    }
  }
  return arr
};
var res = generate(5);
console.log(res)