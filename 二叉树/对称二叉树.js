// 如果一个树的左子树与右子树镜像对称，那么这个树是对称的
// 两个树在什么情况下互为镜像？

// 如果同时满足下面的条件，两个树互为镜像：

// 它们的两个根结点具有相同的值。
// 每个树的右子树都与另一个树的左子树镜像对称。
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
var isSymmetric = function (t1, t2) {
    if(!t1 && !t2) return true;
    if(!t1 || !t2) return false;
    return (t1.val === t2.val) && isSymmetric(t1.left, t2.right) && isSymmetric(t1.right, t2.left)

};
const fn = (root) => {
  if(!root) return true;
  if(!root.left || !root.right) return false;
  return isSymmetric(root.left, root.right)
}
var root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 2,
    left: {
      val: 5,
      left: null,
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  }
}
console.log(fn(root))
const isSame = (left, right) => {
  if(!left && !right) return true;
  else if(!left || !right) return false;
  else {
    return left.val === right.val && isSame(left.right, right.left) && isSame(left.left, right.right)
  }
}
console.log(isSame(root.left, root.right))




const again = (left, right) => {
  if(!left && !right) return true;
  else {
    if(left.val !== right.val) return false;
    else {
      return again(left.left, right.right) && again(left.right, right.left)
    }
  }
}