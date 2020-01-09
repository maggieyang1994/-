/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var headA = {
  val: 0,
  next: {
    val: 9,
    next: {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 4,
          next: null
        }
      }
    }
  }
}
var headB = {
  val: 3,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null
    }
  }
}
// hash
var getIntersectionNode = function (headA, headB) {
  let map = new Map()
  while(headA){
    map.set(JSON.stringify(headA), 1)
    headA = headA.next;
  }
  while(headB){
    if(map.has(JSON.stringify(headB))) return headB;
    headB = headB.next
  }
};
let res =  getIntersectionNode(headA, headB)
console.log(res)