// 如果二叉树每个节点都具有相同的值，那么该二叉树就是单值二叉树。

// 只有给定的树是单值二叉树时，才返回 true；否则返回 false
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
  val: 1,
  left: {
    val: 1,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 1,
      left: null,
      right: {
        val: 1,
        left: {
          val: 1,
          left: null,
          right: null
        },
        right: {
          val: 1,
          left: null,
          right: null
        }
      }
    }
  },
  right: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 1,
      left: null,
      right: null
    }
  }
}
var root = {
  val: 3,
  left: {
    val: 3,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: {
      val: 2,
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
const isUnivalTree1 = (root, val) => {
  if (!root) return;
  else {
    console.log(root.val, val)
    if(root.val !== val) return false
    if (root.left) return isUnivalTree1(root.left, val)
    
    if (root.right) return isUnivalTree1(root.right, val)

  }
}
const isUnivalTree2 = (root) => {
  if (!root) return;
  else {
    let stack = [root];
    let val = root.val
    while(stack.length){
      let temp = stack.pop();
      if(temp.val !== val) return false
      if(temp.right) stack.push(temp.right)
      if(temp.left) stack.push(temp.left)
    }
    return true

  }
}
console.log(isUnivalTree2(root))