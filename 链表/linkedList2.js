class MyLinkedList {
  constructor(head) {
    this.head = {
      val: head,
      next: null
    }
  }
  findPrevItem(item) {
    let temp = this.head;
    let res;
    while (temp.val) {
      if (temp.val == item) return res;
      else res.val = temp.val, res.next
    }
  }
  find(item) {
    // 通过value 得到对象
    var temp = this.head
    while (temp) {
      if (temp.val == item) return temp;
      else temp = temp.next
    }
    return -1
  }
  insert(a, b) {
    // 在val为a的前面插入value为b的
    let temp = {}
    let curNode = this.find(a);
    temp.val = b;
    temp.next = curNode.next;
    curNode.next = temp

  }
}
var list1 = new MyLinkedList('1');
// list1.insert(1,2);
// list1.insert(2,3);
// console.log(list.head)
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



// 1 3 之间插入2
const node = (val) => {
  return {
    val,
    next: null
  }
}
var insert2 = (a, b) => {
  var list2 = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 4,
        next: null
      }
    }
  }
  let temp = list2;
  while (temp) {
    if (temp.val === a) {
      let tempNode = node(b);
      tempNode.next = temp.next;
      temp.next = tempNode;
      return temp
    } else {
      temp = temp.next
    }
  }

}
var rinima = insert2(2,3);
console.log(rinima)
// 寻找上一个
var findPre = (list, item) => {
  while (list.next !== null && list.next.val !== item) return list = list.next;
  return list
}
var deleteLink = (item) => {
  var list = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: null
      }
    }
  };
  // 删除2 上一个的next 指向当前的next
  // head
  if (list.val === item) return list.next;
  else {
    while (list) {
      if (list.val === item) {
        // 上一个节点
        let prev = findPre(list, item);
        prev.next = list.next.next;
        return prev
      }
      list = list.next
    }
    return list
  }

}
var res = deleteLink(2)
console.log(res)