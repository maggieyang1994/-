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
const breadthTraversal = (node) => {
  let res = [];
  let stack = [node]
  if (node) {
    while (stack.length) {
      let temp = stack.shift()
      res.push(temp.node);
      if (temp.left) stack.push(temp.left)
      if (temp.right) stack.push(temp.right)
    }
    return res
  }
}
var res = breadthTraversal(tree);
console.log(res)


// 10 
// 3  18
// 18 2 4
// 2 4 13 21
// 4 13 21 
// 13 21 9
// 21 9
// 9
// 8 9
// 9

