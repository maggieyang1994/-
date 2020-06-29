

/**
 * 160. 相交链表
  编写一个程序，找到两个单链表相交的起始节点。
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
      val: 3,
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
  val: 1,
  next: {
    val: 3,
    next: {
      val: 2,
      next: {
        val: 4,
        next: null
      }
    }
  }
}

// b 比 a先走完
//  
// hash
var getIntersectionNode = function (headA, headB) {
  let map = new Map()
  while (headA) {
    map.set(JSON.stringify(headA), 1)
    headA = headA.next;
  }
  while (headB) {
    if (map.has(JSON.stringify(headB))) return headB;
    headB = headB.next
  }
};
// let res = getIntersectionNode(headA, headB)
// console.log(res)

// 先拿到headA headB 的长度  L1 L2 长度长的先走l2 - l1 步  
// 然后同时走  再对比val是否相等   否则为相交链表
const getIntersectionNode1 = (headA, headB) => {
  let l1 = 0;
  let l2 = 0;
  let p1 = headA;
  let p2 = headB
  while (headA) {
    l1++;
    headA = headA.next
  }
  while (headB) {
    l2++;
    headB = headB.next
  }
  if (l1 > l2) {
    let temp = l1 - l2;
    while (temp > 0) {
      p1 = p1.next;
      temp--
    }
  } else if (l1 < l2) {
    let temp = l2 - l1;
    while (temp > 0) {
      p2 = p2.next;
      temp--
    }
  }
  // p1 p2 长度相同
  while (p1) {
    if (p1.val === p2.val) return p1;
    else {
      p1 = p1.next;
      p2 = p2.next;
    }
  }
  return null
}


// 创建两个指针 pA, pB, 分别初始化为链表 A 和 B 的头结点。然后让它们向后逐结点遍历。
// 当pA 到达链表的尾部时，将它重定位到链表 B 的头结点 (你没看错，就是链表 B); 类似的，当 
// pB 到达链表的尾部时，将它重定位到链表 A 的头结点
// 若在某一时刻pA 和pB 相遇，则 为相交结点
const getIntersectionNodeAgain = (headA, headB) => {
  if(!headA && !headB) return
  let nodeA = headA
  let nodeB = headB;
  while(nodeA !== nodeB){
    if(nodeA) nodeA = nodeA.next;
    else nodeA = headB

    if(nodeB) nodeB = nodeB.next;
    else nodeB = headA
  }
  return nodeA
}
let res = getIntersectionNodeAgain(headA, headB);
console.log(res)
