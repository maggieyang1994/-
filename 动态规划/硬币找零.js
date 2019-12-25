const coinChange = (w, count) => {
  if(count <= 0) return 0
  let len = w.length;
  let res = []
  for (var i = 0; i < len; i++) {
    res[i] = []
    for (var j = 0; j <= count; j++) {
      if (i === 0) {
        if (j >= w[i])  res[i][j] = parseInt(j / w[i])
        else res[i][j] = res[i][j] = 0
      } else {
        if (j < w[i]) {
          // 小于就去上一个
          res[i][j] = res[i - 1][j]
        } else {
          res[i][j] = Math.min(parseInt(j / w[i]) + res[i - 1][j % w[i]], res[i - 1][j])
        }

      }
    };

    // return res
  }
  // console.log(res)
  return findValue(res, w, count)
}
const findValue = (T, w, count) => {
  let i = w.length - 1;
  let j = count;
  let res = 0
  while (i > 0 && j > 0) {
    if (T[i][j] !== T[i - 1][j]) {
      // 如果不相等
      // console.log(`select ${parseInt(j / w[i])} 个 coins ${w[i]}`);
      res += parseInt(j / w[i])
      j = j - parseInt(j / w[i]) * w[i];
      i = i - 1;
    } else {
      i = i - 1
    }

  }
  if (i === 0 && T[i][j] * w[i] === j && T[i][j] !== 0) {
    res += T[i][j]
    // console.log(`select ${T[i][j]} 个 coins ${w[0]}`);
  }
  return res ? res : -1
}
// var arr = [186,419,83,408];
var arr = [1, 2, 5, 6];
var count = 13;
console.time('动态规划')
var res = coinChange(arr, count);
console.log(res)
console.timeEnd('动态规划')