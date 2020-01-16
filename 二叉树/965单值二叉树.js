/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var tree = {
  node: 1,
  left: {
    node: 1,
    left: {
      node: 1,
      left: null,
      right: null
    },
    right: {
      node: 1,
      left: null,
      right: {
        node: 1,
        left: {
          node: 1,
          left: null,
          right: null
        },
        right: {
          node: 1,
          left: null,
          right: null
        }
      }
    }
  },
  right: {
    node: 1,
    left: {
      node: 1,
      left: null,
      right: null
    },
    right: {
      node: 1,
      left: null,
      right: null
    }
  }
}
var isUnivalTree = function (root) {
  let val = root.node
  let stack = [root];
  while (stack.length) {
    let temp = stack.pop();
    if (temp.node !== val) return false;
    else {
      if (temp.right) stack.push(temp.right);
      if (temp.left) stack.push(temp.left)
    }
  }
};