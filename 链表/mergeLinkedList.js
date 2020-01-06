
// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4
// 1<-1<-3<-4
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let l1 = {
  val: 1,
  next: null
}
let l2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: {
        val: 5,
        next: null
      }
    }
  }
}
// 合并两个长度不一的  并且倒序
var mergeTwoLists = (l1, l2) => {
  let temp = null
  if (!l1 || !l2) return l1 || l2;
  while (l1 && l2) {
    temp = {
      val: Math.max(l1.val, l2.val),
      next: {
        val: Math.min(l1.val, l2.val),
        next: temp
      }
    }
    l1 = l1.next;
    l2 = l2.next;
    if (!l1 && l2) { l1 = { val: l2.val, next: null }; l2 = l2.next }
    else if (!l2 && l1) { l2 = { val: l1.val, next: null }; l1 = l1.next };
  }
  if (l1) l1.next = temp;
  else if (l2) l2.next = temp;
  return l1 || l2 || temp
}
let res = mergeTwoLists(l1, l2)
console.log(res)