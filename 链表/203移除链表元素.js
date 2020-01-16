
const unReverse = (arr) => {
  let res = {
    val: arr[0],
    next: null
  };
  arr.slice(1).forEach(x => {
    let temp = res
    while (temp.next) {
      temp = temp.next
    }
    temp.next = {
      val: x,
      next: null
    }
  });
  return res
};

var link = unReverse([0, 6, 6, 6, 6]);
const deleteNode = (list, val) => {
  // 哨兵节点
  list = {
    val: 0,
    next: list
  };
  let temp = list
  while (temp.next) {
    if (temp.next.val === val) {
      temp.next = temp.next.next
    } else {
      temp = temp.next
    }

  }
  return list.next
}
var res = deleteNode(link, 6)
console.log(res)