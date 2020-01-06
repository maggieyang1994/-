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
// 左 ->  根 -> 右
// 2 3 4 8 9 9 10 13 18 21
// 递归
const middle = (list) => {
  if (list.left) middle(list.left);
  console.log(list.node);
  if (list.right) middle(list.right)
}
middle(tree)
// 迭代

const middleP = (list) => {
  let res = [];
  let stack = [list]
  while (stack.length) {
    
  }
  return res
}
var res = middleP(tree);
console.log(res)
