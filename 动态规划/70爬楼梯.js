/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n === 1)  return 1;
    else {
      let res =[];
      res[1] = 1;
      res[2] = 2;
      for(let i = 3; i<=n;i++){
        res[i] = res[i - 2] + res[i - 1]
      }
      return res[n]
    }
};
console.log(climbStairs(2))