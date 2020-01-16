// 快指针走两步  慢指针走一步 如果是环形链表 一定会相遇
// 先找到 相遇地点
const generateCircleLink = (arr, pos) => {
  let res = {
    val: arr[0],
    next: null
  }
  for (let i = 1; i < arr.length; i++) {
    let temp = res;
    while (temp.next) {
      temp = temp.next
    }
    temp.next = {
      val: arr[i],
      next: null
    }
  }
  let temp = res;
  let before = null
  while (temp.next) {
    if (pos === 0)  before = temp
    temp = temp.next;
    pos = pos - 1
  }
  temp.next = before
  return res
}
var link = generateCircleLink([3,2,0,-4], 1);
console.log(link)
const findCircle = (link) => {
  let fast = link;
  let slow = link;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (!fast) return false;
    if (slow.val === fast.val) return true
  }
  return false
}
let res = findCircle(link);
console.log(res)
// 找到相交节点之后  指针指向相交节点
// 另一个指针指向头节点 
// 两个指针同时走  相交位置就是环形链表的入口
const findEenter = (link) => {
  let circle = findCircle(link);
  while (circle.val !== link.val) {
    circle = circle.next;
    link = link.next;
  }
  return circle
}
// var res = findEenter({val: 1, next: null});
// console.log(res)