/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root, stack) {
  console.log('in');
  stack.push(root)
  if (!root) {
    console.log('out');
    stack.pop()
    return 0;
  }
  return Math.max(maxDepth(root.left, stack), maxDepth(root.right, stack)) + 1
};

// 只计算左子树
var maxDep = (root, count = 0) => {
  if(!root) return count;
  count = count + 1
  return Math.max(maxDep(root.left, count), maxDep(root.right, count))
}
let root = {
  val: 1,
  left: {
    val: 2,
    left: null
  },
  right: {
    val: 3
  }
}
console.log(maxDep(root))
let stack = [];
// console.log(maxDepth(root, stack));
// console.log(stack)