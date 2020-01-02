// var arr = [10, 40, 20, 30, -30];
var arr = [10,  20, -30];
// 找出三个数之和为零的数
const threeSum = (arr) => {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      // for (let z = j; z < arr.length; z++) {
      //   if (arr[i] + arr[j] + arr[z] === 0) {
      //     console.log(arr[i], arr[j], arr[z])
      //   }
      // }
      // 用二分法  减少复杂度
      let start = j + 1;
      let end = len - 1;
      let num = -(arr[i] + arr[j])
      while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (arr[mid] === num) {
          console.log(arr[i], arr[j], arr[mid]);
          break;
        } else if (arr[mid] > num) end = mid - 1;
        else start = mid + 1
      }
      console.log('not found')
    }
  }
}
threeSum(arr)