/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next
};
var link = {
  val: 4,
  next: {
    val: 5,
    next: {
      val: 1,
      next: {
        val: 9,
        next: null
      }
    }

  }
}
console.log(deleteNode(link))