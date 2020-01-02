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

var reverseList = function (head) {
  let pre = null
  while(head){
    let temp = head.val;
    temp.next = pre;
    head = head.next;
    pre = temp
  }
  return pre
};


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