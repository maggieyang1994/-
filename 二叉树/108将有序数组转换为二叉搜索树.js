// 二叉搜索树（Binary Search Tree）是指一棵空树或具有如下性质的二叉树：

// 若任意节点的左子树不空，则左子树上所有节点的值均小于它的根节点的值
// 若任意节点的右子树不空，则右子树上所有节点的值均大于它的根节点的值
// 任意节点的左、右子树也分别为二叉搜索树
// 没有键值相等的节点
// 基于以上性质，我们可以得出一个二叉搜索树的特性：二叉搜索树的中序遍历结果为递增序列。

// 那么现在题目给了我们一个递增序列，要求我们构造一棵二叉搜索树，就是要我们实现这一特性的逆过程。

// 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
// 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  // 取中间
  if (!nums.length) return null;
  let num = Math.floor(nums.length / 2);
  return {
    val: nums[num],
    left: sortedArrayToBST(nums.slice(0, num)),
    right: sortedArrayToBST(nums.slice(num + 1))
  }
};
var num = [-10, -3, 0, 5, 9];
var res = {
  val: 0,
  left: {
    val: -3,
    left: {
      val: -10,
      left: null,
      right: null
    },
    right: null
  },
  right: {
    val: 9,
    left: {
      val: 5,
      left: null,
      right: null
    },
    right: null
  }

}
var result = sortedArrayToBST(num);



// 二叉搜索树   中序遍历为升序数组
var arr = [-10, -3, 0, 5, 9]
const again = (arr) => {
  if (!arr.length) return null;
  else {
    // 中间值不能取
    let mid = Math.floor(arr.length / 2)
    return {
      val: arr[mid],
      left: again(arr.slice(0, mid)),
      right: again(arr.slice(mid + 1, arr.length))
    }
  }
}
console.log(again(arr))

// 动态规划  菲波那也
// 1 1 2 3 5 8 13 21
const fib = (n) => {
  let start = performance.now()
  var res = [1, 1, 2];
  for (var i = 3; i <= n; i++) {
    res[i] = res[i - 1] + res[i - 2]
  }
  let end = performance.now();
  console.log(end - start)
  return res[n]
}
console.log(fib(7))

// 缓存fib
const cache = (n, cacheObj = {}) => {
  let start = performance.now()
  if (n === 1 || n === 2) return 1;
  else {
    if(cacheObj[n]) return cache[n];
    else {
      cacheObj[n] =  cache(n - 1) + cache(n - 2);
      let end = performance.now();
      console.log(end - start)
      return cacheObj[n]
    }
    
  }
}
console.log(cache(7))