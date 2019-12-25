/**
 * @param {number} x
 * @return {number}
 */
// 1 1
// 4 2
// 3 9  4 16   5 25  6 36 7 49 8 64
var x = 9;
// 0 1 2 3 4
var mySqrt = function (x) {
  if(x === 1) return x
  let start = 0;
  let end = Math.ceil( x / 2)
  while(end >= start){
    let mid = start + Math.floor((end- start)/2);
    let square = mid * mid;
    if(square === x) return mid
    else if(square > x){
      end = mid - 1
    }else{
      start = mid + 1
    }
  }
  return start
};
let res = mySqrt(x);
console.log(res)