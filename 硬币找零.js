const getCoins = (w, count) => {
  let len = w.length;
  let res = []
  for (var i = 0; i < len; i++) {
    res[i] = []
    for (var j = 0; j <= count; j++) {
      if (i === 0) {
        res[i][j] = j
      } else {
        if (j < w[i]) {
          // 小于就去上一个
          res[i][j] = res[i - 1][j]
        } else {
          res[i][j] = Math.min(parseInt(j / w[i]) + res[i - 1][j % w[i]], res[i - 1][j])
        }
      }
    }
  };
  console.log(res);
  findValue(res, w, count)
  // return res
}
const findValue = (T, w, count) => {
  let i = w.length - 1;
  let j = count;
  while (i > 0 && j > 0) {
    if (T[i][j] !== T[i - 1][j]) {
      // 如果不相等
      console.log(`select ${parseInt(j / w[i])} 个 coins ${w[i]}`);
    j = j - parseInt(j / w[i]) * w[i];
      i = i - 1;
    } else {
      i = i - 1
    }
    if (i === 0 && T[i][j] !== 0) {
      console.log(`select ${j} 个 coins ${w[0]}`);
    }
  }
}
var arr = [0, 2, 5];
var count = 12;
var res = getCoins(arr, count);
console.log(res)