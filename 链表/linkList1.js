/**
  * 一个简单的单向链表
  * @constructor
  */
// 节点
function Node(element) {
  this.element = element;   //当前节点的元素
  this.next = null;         //下一个节点链接
}
//链表类
function LList() {
  this.head = new Node('head'); //头节点
  this.find = find;               //查找节点
  this.insert = insert;           //插入节点
  this.remove = remove;           //删除节点
  this.findPrev = findPrev;       //查找前一个节点
  this.display = display;         //显示链表
}
//查找节点
function find(item) {
  var currNode = this.head
  while (currNode.element !== item) {
    currNode = currNode.next
  }
  return currNode
}
//插入节点
function insert(newElement, item) {
  var newNode = new Node(newElement)
  var currNode = this.find(item)
  newNode.next = currNode.next
  currNode.next = newNode;
  console.log(this.head)
}
//删除节点
function remove(item) {
  var prevNode = this.findPrev(item)
  var currNode = this.find(item)
  if (prevNode.next !== null) {
    prevNode.next = prevNode.next.next
    currNode.next = null
  }

}
//查找前一个节点
function findPrev(item) {
  var currNode = this.head
  while (currNode.next !== null && currNode.next.element !== item) {
    currNode = currNode.next
  }
  return currNode
}
//显示链表
function display() {
  var currNode = this.head
  while (currNode.next !== null) {
    currNode = currNode.next
    console.log(currNode.element)
  }
}
var llist = new LList()
llist.insert('小黑', 'head')
llist.insert('小白', '小黑')
llist.insert('小紫', '小黑')
llist.insert('小蓝', '小紫')
llist.display()
llist.remove('小白')
llist.display()