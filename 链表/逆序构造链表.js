var arr = [1, 2, 3, 4, 5];

var list = {
  val: 6,
  next: {
    val: 5,
    next: {
      val: 4,
      next: {
        val: 3,
        next: {
          val: 2,
          next: {
            val: 1,
            next: null
          }
        }
      }
    }
  }

}
// 逆序构造链表
const reverse = (arr) => {
  return arr.reduce((o, item) => {
    o = {
      val: item,
      next: o
    };
    return o
  }, null)
}

// 顺序构造
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
console.log(unReverse(arr))

const addAtTail = (list, val) => {
  if (!list) return { val, next: null };
  // 定义一个指针  指向链表中的最后一个元素
  // 共享内存
  let temp = list
  while (temp.next) {
    temp = temp.next
  };
  temp.next = {
    val,
    next: null
  };
  // console.log(list)
}
const deleteAtTail = (list) => {
  let temp = list
  while (temp.next.next) {
    temp = temp.next;
  }
  temp.next = null
}
// deleteAtTail(list)
// console.log(addAtTail(list, 0))
// 给定单向链表的头指针和一个节点指针，定义一个函数在 O(1) 内删除这个节点
// 如果想把3删掉  将4 指向 2  不好指 把3 变成2  将2 指向1  非尾节点 情况
const deleteNode = (list, val) => {
  let temp = list
  while (temp.next) {
    if (temp.val === val) {
      if (temp.next) {
        temp.val = temp.next.val;
        temp.next = temp.next.next;
      } else if (!temp.next.next && temp.next.val === val) {
        temp.next = null
      }
      return list
    };
    temp = temp.next
  }
  return list
}
// var res = deleteNode(list, 4)
// console.log(res);

// 返回链表的倒数第几个节点
// 倒数第三个节点 3
// 6 5 4 3 2 1 K 快指针先走k步 走到k之后 快慢各走一步 快指针走完的时候 慢指针就是倒数第几个
const findKthToTail = (list, k) => {
  let fast = list;
  let slow = list;
  while (fast) {
    if (k > 0) {
      fast = fast.next;
      k = k - 1
    } else {
      slow = slow.next;
      fast = fast.next
    }
  }
  return slow
}
findKthToTail(list, 9);

//  给定一个单链表，设计一个算法实现链表向右旋转 K 个位置。
// 举例：给定 head->1->2->3->4->5->NULL, K=3,右旋后即为 head->3->4->5-->1->2->NULL
// •  先找到倒数第 K+1 个结点, 此结点的后继结点即为倒数第 K 个结点
// •  将倒数第 K+1 结点的的后继结点设置为 null
// •  将 head 的后继结点设置为以上所得的倒数第 K 个结点，将原尾结点的后继结点设置为原 head 的后继结点
const reversedKthToTail = (list, k) => {
  let kPreNode = findKthToTail(list, k + 1);
  // 1
  let after = kPreNode.next;
  // 2
  kPreNode.next = null;
  let tmp = after;
  // 3
  while (tmp.next) {
    tmp = tmp.next
  }
  tmp.next = list;
}
reversedKthToTail(list, 4);


// 顺序构造链表
var arr = [1, 2, 3, 4, 5]
var zhengxu = (arr) => {
  let res = temp = {};
  for (var i = 0; i < arr.length; i++) {
     temp.val = arr[i];
     temp.next = {};
     temp = temp .next
  }
  console.log(res)
}


var lixu = (arr) => {
  // 逆序构造链表
  var temp = { val: arr[0], next: null };
  for (let i = 1; i < arr.length; i++) {
    temp = {
      val: arr[i],
      next: temp
    }
  }
  console.log(temp)

}
