var arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const fn = () => {
  return fn1(arr, 0, arr.length - 1)
}
const fn1 = (arr, left, right) => {
   if(left === right) return arr[left];
   let mid = left + parseInt((right - left) / 2);
   let left_sum = fn1(arr, left, mid + 1);
   let right_sum = fn1(arr, mid, right);
   let cross_sum = cross()
} 