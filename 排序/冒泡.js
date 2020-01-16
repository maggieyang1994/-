var arr1 = [0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9]
const maopao = (arr) => {
  let flag = false
  for (let i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        // 如果一个循环之后  位置没有发生变化  代表是有序数组
        flag = true
      }
    }
    if (!flag) continue
  }
  return arr
}