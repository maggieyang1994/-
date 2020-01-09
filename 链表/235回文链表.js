/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 1212 ([)]
var head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 2,
      next: {
        val: 1,
        // next: null
        next: {
          val: 1,
          next: null
        }
      }
    }
  }
}
var isPalindrome = function (head) {
  // 找到中间元素 依次入栈 再比较
  let fast = head;
  let slow = head;
  let stack = [];
  while (fast) {
    stack.push(slow.val);
    if(!fast.next) stack.pop()
    fast = fast.next && fast.next.next;
    slow = slow.next
  }
  while(stack.length){
    if(stack.pop()!== slow.val) return false;
    slow = slow.next
  }
  return true

};
let res = isPalindrome([]);
console.log(res)