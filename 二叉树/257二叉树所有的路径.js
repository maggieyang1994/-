/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
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
// var res = []
var fn = function (list, temp = [], res = []) {
  if (list) {
    temp.push(list.node);
    if (list.left) fn(list.left, temp, res)
    if (list.right) fn(list.right, temp, res)
    // no left and no right
    if (!list.left && !list.right) {
      res.push(JSON.parse(JSON.stringify(temp)))
    }
  }
  // every time 出栈的时候需要 pop
  temp.pop()
  return res
};
// var tempRes = fn(tree);
// console.log(tempRes)
var binaryTreePaths = function (list) {
  let res = fn(list);
  // console.log(res)
  return res.map(x => {
    return x.join("->")
  })
};
var res = binaryTreePaths(tree);
// console.log(res)
// 前序遍历的过程  当left right 为null时  弹出最后一个  并push进去res
// 前序遍历的应用
const again = (tree, res = [], temp = []) => {
  if (!tree) return null;
  else {
    temp.push(tree.node)
    if (tree.left) again(tree.left, res, temp);
    if (tree.right) again(tree.right, res, temp)
    if (!tree.left && !tree.right) {
      res.push(JSON.parse(JSON.stringify(temp)));
     
    }
    temp.pop();
    return res

  }

}
console.log(again(tree))
