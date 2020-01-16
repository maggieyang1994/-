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

const digui = (tree, res = []) => {
  if (tree) {
    res.push(tree.node);
    if (tree.left) digui(tree.left, res)
    if (tree.right) digui(tree.right, res)
  }
  return res
}
// console.log(digui(tree))

const noDigui = (tree, res = []) => {
  let stack = [tree];
  while(stack.length){
    let temp = stack.pop();
    res.push(temp.node);
    if(temp.right) stack.push(temp.right)
    if(temp.left) stack.push(temp.left)
  }
  return res
}
console.log(noDigui(tree))

