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
// 左 ->  右 -> 根
// 2 8 9 9 4 3 13 21 18 10
// 递归
const middle = (list) => {
  if(list.left) middle(list.left);
  if(list.right) middle(list.right);
  console.log(list.node);
}
middle(tree)
// 迭代
