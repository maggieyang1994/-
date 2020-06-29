var arr = [1, 2, 3, 3, 3, 4, 5];
// 快慢指针
const fn = (arr) => {
  let slow = 0;
  let fast = 0;
  let len = 0
  for (var i = 0; i < arr.length; i++) {
    fast += 1;
    if(arr[slow] !== arr[fast]){
      len+=1
      arr[len] = arr[fast]
      slow = fast
    }
  }
  arr.length = len
  console.log(arr)
}
fn(arr)