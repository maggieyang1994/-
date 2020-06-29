/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) return 1;
  else {
    let res = [];
    res[1] = 1;
    res[2] = 2;
    for (let i = 3; i <= n; i++) {
      res[i] = res[i - 2] + res[i - 1]
    }
    return res[n]
  }
};
console.log(climbStairs(2))

const again = (n) => {
  if(n === 1) return 1;
  else {
    let res = [];
    res[1] = 1;
    res[2] =2;
    for(var i = 3;i<=n; i++){
      // 如果最后一步是走一步 那么是res[n-1]
      // 如果最后一步是走两步 那么是res[n-2]
      res[n] = res[n-1] + res[n-2]
    }
  }
}