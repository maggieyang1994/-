/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {

};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {

};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {

};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {

};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {

};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {

};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

var link = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: {
        val: 3,
        next: null
      }
    }
  }
}
const getLink = (index) => {
  let temp = 0;
  var tempRe = link
  while (tempRe.val) {
    if (index === temp) return tempRe.val;
    else {
      temp += 1;
      tempRe = tempRe.next
    }
  }
  return -1

}
// console.log(getLink(2))
const addAtHead = (val) => {
  return { val, next: link }
}
// console.log(addAtHead(0))
const addAtTail = (val) => {
  let temp = link
  while (temp.next) {
    temp = temp.next
  }
  temp.next = {
    val,
    next: null
  }
  return temp
}
console.log(addAtTail(0))
// const addAtIndex = (index, val) => {
//   // 头
//   if (index === 0) return { val, next: tempRe };
//   let tempRe = link;
//   let tempRe2 = null;
//   let temp = 0;
//   while (tempRe.val) {
//     if (temp === index) {


//       if (!tempRe.next) {
//         // 尾
//         tempRe.next = {
//           val,
//           next: null
//         }
//         return tempRe
//       } else {
//         // 中间
//       }
//     } else {
//       temp += 1;
//       tempRe = tempRe.next;
//       // tempRe2 = 
//     }
//   }
// }
const deleteAtIndex = (index) => {

} 