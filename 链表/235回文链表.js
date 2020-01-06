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
      val: 3,
      next: {
        val: 2,
        next: {
          val: 1,
          next: null
        }
      }
    }
  }
}
var isPalindrome = function (head) {
  if(!head) return false;
  let temp = null;
  let tempH = head
  while(head){
    temp = {
      val: head.val, 
      next: temp
    };
    head = head.next
  }
  
};
let res = isPalindrome([]);
console.log(res)