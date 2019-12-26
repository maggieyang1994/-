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
