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
  while (head) {
    temp = {
      val: head.val,
      next: temp
    };
    head = head.next
  }
  return temp;
};
// 递归
const reverseList1 = (head) => {
  if (!head || !head.next) return head;
  let res = reverseList1(head.next);
  // 出栈的顺序 与入栈的顺序相反
  console.log(head, res);
  // res.va
  let n1 = head.next;
  n1.next = head;
  head.next = null;
  console.log(res);
  return res;
}

var head = {
  val: 4,
  next: {
    val: 3,
    next: {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: null
        }
      }

    }
  }

}
