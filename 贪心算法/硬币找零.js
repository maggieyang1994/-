var arr = [1, 2, 5, 6];
var count = 13;
const getCoins = (arr, count) => {

  let i = arr.length - 1;
  var res = 0;
  let tempCount = count
  while (i >= 0) {
    // 会选择当下的最优解
    if (arr[i] <= tempCount && tempCount) {
      let coins = parseInt(tempCount / arr[i]);
      tempCount = tempCount % arr[i];
      console.log(`${coins}个 面额为 ${arr[i]}的硬币`)
      res += coins;

    }
    i = i - 1
  }
  return res
}
getCoins(arr, count);