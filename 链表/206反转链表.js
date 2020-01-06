/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 // 迭代
var reverseList = function (head) {
  let temp = null
  while(head){
    temp = {
      val: head.val, 
      next: temp
    };
    head = head.next
  }
  return temp;
};
// 递归

var head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
}
let res = reverseList(head);
console.log(res)