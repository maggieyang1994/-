
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
// console.log(res)


// 删除链表中等于给定值 val 的所有节点。

// 示例:

// 输入: 1->2->6->3->4->5->6, val = 6
// 输出: 1->2->3->4->5

const l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 6,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: {
              val: 9,
              next: null
            }
          }
        }
      }
    }
  }
}

const num = 6;
const removeNode = (l1, num) => {
  if (!l1) return;
  let res = temp = {};
  while (l1) {
    if (l1.val !== num) {
      temp.val = l1.val;
      temp.next = {};
      temp = temp.next
    }

    l1 = l1.next
  }
  console.log(temp)
  temp = null
  console.log(JSON.stringify(res))
}

removeNode(l1, num);

const arrayToNode = (arr) => {
  var res = temp = {}
  arr.forEach((x, index) => {
    temp.val = x;
    temp.next = index === arr.length - 1 ? null: {}
    temp = temp.next
  })
  temp = null;
  console.log(res)
}
arrayToNode([1,2,3])