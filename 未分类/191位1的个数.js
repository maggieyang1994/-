/**
 * @param {number} n - a positive integer
 * @return {number}
 */
//  n & n - 1  将n和n-1取与操作  一定 会把最后一个1变成0
var hammingWeight = function(n) {
    let count = 1
    while(n){
      count++;
      n = n & n - 1
    }
    return count
};
var res = hammingWeight(12);
console.log(res)