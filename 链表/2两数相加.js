// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

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
    val: 5,
    next: {
      val: 2,
      next: {
        val: 4,
        next: null
      }
    }
  }


}
let l2 = {
  val: 2,
  next: {
    val: 6,
    next: {
      val: 1,
      next: null
    }
  }
}
var addTwoNumbers = function (l1, l2) {
  let res = null;
  let flag = 0
  while (l1 || l2) {
    let temp = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + flag
    if (temp >= 10) {
      flag = 1;
      temp = temp % 10
    } else flag = 0
    console.log(temp)
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
    if (!res) res = { val: temp, next: (!l1 && !l2 && flag) ? ({ val: 1, next: null }) : null }
    else {
      let temp1 = res
      while (temp1.next) {
        temp1 = temp1.next
      }
      temp1.next = {
        val: temp,
        next: (!l1 && !l2 && flag) ? ({ val: 1, next: null }) : null
      }
    }

  }
  console.log(res)
  return res
};

var addTwoNumbers2 = function (l1, l2) {
  let temp = res = {};
  let flag = 0
  while (l1 || l2) {
    let num = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + flag
    if (num >= 10) {
      flag = 1;
      num = num % 10
    } else flag = 0
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
    temp.val = num
    if(!l1 && !l2){
      temp.next = flag ? {val: 1, next: null}: null
    }else{
      temp.next = {}
    }
    temp = temp.next


    // if (l1 || l2 || flag) {
    //   temp.next = { val: flag }
    // }
    // temp = temp.next

  }
  console.log(res)
  return res
};
addTwoNumbers2(l1, l2);

// 如何将数组 变成链表
const fn = (arr) => {
  let res = null;
  arr.forEach(x => {
    if (!res) res = { val: x, next: null }
    else {
      let temp = res;
      while (temp.next) {
        temp = temp.next
      }
      temp.next = {
        val: x,
        next: null
      }
    }
  })
  console.log(res)
}
// 指针
const fn2 = (arr) => {
  let res = temp = {}
  arr.forEach((x, index) => {
    temp.val = x;
    temp.next = index === arr.length - 1 ? null : {}
    temp = temp.next
  })
  console.log(res)
}
// fn2([3, 1, 4, 4])

