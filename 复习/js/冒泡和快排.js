var arr = [5, 7, 2, 9, 3, 8, 4, 7, 1]
// 复杂度 n * n
// 冒泡排序 两层循环 
// 内层 取相邻两个数比较 如果第一个比第二个大就交换位置 
// 每次外层循环 都会找到一个最大的数放在最后 
// 内层循环的次数是数组的长度减去外层循环的次数
const maopao = (arr) => {
  let flag = true
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = false
      }
    }
    if (flag) return
  }
}
// maopao(arr);
// 复杂度 最坏的情况下n * n 当已经排好序 left 和 right划分不均匀的时候 
// 平均复杂度是nlogn （分为左半部分和右半部份）理解上是若第一层的话就是n/2 若是第二层就是n/4,n/4,n/4,n/4这四部分 n个元素理解上是一共有几层2^x=n，x=logn，然后每层都是n的复杂度，那么平均就是O(nlogn)的时间复杂度
//  快速排序 选择一个基准数 一般是中间值
// 所有小于基准数的全部移动到左边 大于基准数的全部移动到右边
// 递归左边和右边  直到数组的长度等于1
//  http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html
var arr1 = [2, 1, 3]
const kuaipai = (arr) => {
  if (arr.length < 2) return arr;
  let midFlag = Math.floor(arr.length / 2);
  // 比较的那位基准数 本身是不再进行比较的
  let midValue = arr.splice(midFlag, 1)[0];
  let left = [];
  let right = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > midValue) right.push(arr[i])
    else left.push(arr[i])
  }
  return kuaipai(left).concat([midValue], kuaipai(right))
}
// console.log(kuaipai(arr));
// console.log(arr)


const quickSort1 = (arr) => {
  const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]]
  let left = 0;
  let right = arr.length - 1;
  // 从后面找比第一位小的数right   从前面找比第一位大的数left  找到就交换位置
  // 直到 从 right 左边没有比第一位大的数  那么就跟 第一位交换位置
  if (arr.length <= 1) return arr;
  while (left < right) {
    while (arr[right] > arr[0] && left < right) {
      right--;
    };
    while (arr[left] <= arr[0] && left < right) {
      left++
    }
    if (left === right) {
      swap(arr, left, 0);
      break;
    } else {
      swap(arr, left, right)
    }
    console.log(arr)
  }

  return quickSort1(arr.slice(0, left)).concat(arr.slice(left, right + 1), quickSort1(arr.slice(right + 1)))
};
// quickSort1(
//   [5, 3, 4, 1, 2])

