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
let root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: {
        val: 4
      }
    }
  },
  right: {
    val: 3
  }
}
let stack = [];
console.log(maxDepth(root, stack));
console.log(stack)