// 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

// 示例：

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
 */
let l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null
    }
  }
}
let l2 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null
    }
  }
}
var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) return l1 || l2
  if (l1.val > l2.val) {
    return {
      val: l2.val,
      next: mergeTwoLists(l1, l2.next)
    }
  } else {
    return {
      val: l1.val,
      next: mergeTwoLists(l1.next, l2)
    }
  }
};

// console.log(res)

const mergeTwoListsAgain = (l1, l2) => {
  let res = temp = {}
  while (l1 && l2) {
    if (l1.val < l2.val) {
      temp.val = l1.val;
      l1 = l1.next
    } else {
      temp.val = l2.val;
      l2 = l2.next
    }
    temp.next = {};
    temp = temp.next
  }
  
  let temp2 = l1 || l2;
  if(temp2) {
    temp.val = temp2.val;
    temp.next = temp2.next
  } else temp.next = null
  console.log(JSON.stringify(res));
}
let res = mergeTwoListsAgain(l1, l2);

// const again = (l1, l2) => {
//   if(!l1 || !l2) return l1 || l2;
//   else {
//     let temp = {}
//     while(l1 || l2){
//       if(l1.val > l2.val)
//     }
//   }
// }