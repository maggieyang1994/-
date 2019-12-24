const longStr = (a, b) => {
  var res = [];
  for (let i = 0; i < b.length; i++) {
    res[i] = [];
    for (let j = 0; j < a.length; j++) {
      if (i === 0) {
        res[i][j] = Math.max(a[j] === b[i], res[i][j-1] || 0)
      } else {
        if (j === 0) {
          res[i][j] = Math.max(a[j] === b[i], res[i - 1][j] || 0)
        } else {
          // 当前是否相等
          if (b[i] === a[j]) {
            res[i][j] = res[i - 1][j - 1] + 1
          } else {
            res[i][j] = Math.max(res[i - 1][j], res[i][j - 1])
          }
        }
      }
    }
  }
  console.log(res)
  findValue(a, b, res)
}
const findValue = (a, b, T) => {
  let res = []
  let i = T.length - 1;
  let j = T[1].length - 1;
  while (i >= 0 && j >= 0) {
    if (a[j] === b[i]) {
      // 不相等即为左上角 + 1;
      res.unshift(a[j]);
      i = i - 1;
      j = j - 1
    } else {
      // 相等即为 左边或者上面
      if (!!T[i - 1][j] >!!T[i][j - 1]) {
        i = i - 1
      } else {
        j = j - 1
      }
    }
  }
  console.log(res)
}
var a = 'abcadf';
var b = 'acbad';
var res = longStr(a, b)