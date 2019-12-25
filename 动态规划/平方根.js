// 1 1
// 4 2
// 9 3
// 16 4
const sqrt = (n) => {
  // 找到第一个平方根比目标大的数
  if(!n) return 0
  let start = 1
  let end = parseInt(n/2);
  while(end > start){
    let mid = start + Math.floor((end-start)/2);
    let squrt = mid * mid;
    if(squrt === n) return mid;
    else if(squrt > n) {
      end = mid -1
    }else{
      start = mid
    }
  }
  return start
}
const res = sqrt(3);
console.log(res) 