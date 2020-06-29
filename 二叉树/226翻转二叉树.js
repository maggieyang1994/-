/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var tree = {
  node: 10,
  left: {
    node: 3,
    left: {
      node: 2,
      left: null,
      right: {
        node: 33,
        left: null,
        right: null
      }
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
var invertTree = function (root) {
  if (!root) return null
  if (root) {
    return {
      val: root.node,
      left: invertTree(root.right),
      right: invertTree(root.left)
    }
  }
};
var res = invertTree(tree);
console.log(res)


const again = (tree) => {
  if (!tree) return null
  else {
    return {
      val: tree.node,
      left: again(tree.right),
      right: again(tree.left)
    }
  }
}