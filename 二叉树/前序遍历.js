var tree = {
  node: 10,
  left: {
    node: 3,
    left: {
      node: 2,
      left: null,
      right: null
    },
    right: {
      node: 4,
      left: null,
      right: {
        node: 9,
        left: {
          node: 8,
          left: null,
          right: null
        },
        right: {
          node: 9,
          left: null,
          right: null
        }
      }
    }
  },
  right: {
    node: 18,
    left: {
      node: 13,
      left: null,
      right: null
    },
    right: {
      node: 21,
      left: null,
      right: null
    }
  }
}
// 根的位置
// 根 -> 左 -> 右
// 10 3 2 4 9 8 9 18 13 21
// 递归
const preOrder = (list, res = []) => {
  if (list) {
    res.push(list.node);
    if (list.left) preOrder(list.left, res)
    if (list.right) preOrder(list.right, res)
  }
  // console.log(res)
  return res
}
var res = preOrder(tree);
// console.log(res);
// 递归的入栈顺序
// [pre10 pre3 pre2 ]

const preOrderP = (list) => {
  let res = [];
  let stack = [list]
  while(stack.length){
    let temp = stack.pop();
    res.push(temp.node);
    if(temp.right) stack.push(temp.right);
    if(temp.left) stack.push(temp.left)
  }
  return res
}
var res = preOrderP(tree);
console.log(res)