// var arr = [186,419,83,408];
var arr =  [1,83, 186, 408, 419]
var count = 6249;
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
let res = getCoins(arr, count);
console.log(res);
