var erfen1 = (arr, target) => {
  let start = 0;
  let end = arr.length
  while (end > start) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) {
      // 左边
      end = mid
    } else {
      start = mid + 1
    }
  }
  return end

}

// 时间复杂度 1 -> (log2 n)+1
var erfen2 = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let count = 0
  while (end >= start) {
    count += 1
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) {
      // 左边
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  console.log(count)
  return start

}

var arr = [0, 1, 3, 7, 9, 11, 12, 13];
var target = 14
// var res1 = erfen1(arr, target);
var res2 = erfen2(arr, target);
console.log(res2)