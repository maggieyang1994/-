// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

// 有效的括号 
var str = "[({)}]"
const isValid = (str) => {
  var map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  let temp = [];
  // 入栈
  for (var cur of str) {
    if (temp.length && cur === map[temp[temp.length - 1]]) {
      temp.pop()
    } else {
      temp.push(cur)
    }
  }
  return !temp.length
}
console.log(isValid(str))

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4
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
 *
 */

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
var mergeTwoLists = function(l1, l2) {
  console.log(l1, l2)
  if(l1 === null){
      return l2;
  }
  if(l2 === null){
      return l1;
  }
  if(l1.val < l2.val){
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
  }else{
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
  }f
}
let res = mergeTwoLists(l1, l2)
console.dir(res)