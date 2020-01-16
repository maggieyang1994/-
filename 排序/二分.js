const searchRange = (arr, target) => {
  let left = 0
  let right = arr.length - 1;
  let i = 1
  while (left <= right) {
    let mid = Math.floor((right + left) / 2)
    console.log(`第${i++}次的left: ${arr[left]}`)
    console.log(`第${i++}min: ${arr[mid]}`)
    console.log(`第${i++}次的right: ${arr[right]}`)
    if (arr[mid] === target) {     //找到目标值
      return mid;
    } else if (arr[mid] > target) { //比目标值大，说明数在前半部分，缩小右边界
      right = mid - 1;
    } else {                       //比目标值小，说明数在后半部分，缩小左边界
      left = mid + 1;
    }
  }
  return -1
}