// 快慢指针
// 0 9 1 3 2 4
var list = {
  val: 0,
  next: {
    val: 9,
    next: {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 4,
          // next: null
          next: {
            val: 5,
            next: null
          }
        }
      }
    }
  }
}
// 快慢指针 快指针 走两步  慢指针走一步
// 奇数  快走完的时候 慢 就是中间节点
// 偶数  快走不了的时候  慢.next 是中间节点
const getMid = (list) => {
  if(!list) return null
  let slow = list;
  let fast = list;
  while(fast){
    // 偶数
    if(!fast.next) {
      return slow
    }
    else if(fast.next && !fast.next.next) {
      return slow.next
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  // return slow
}
let res = getMid(list);
console.log(res) 