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
// 根的位置
// 左 ->  右 -> 根
// 2 8 9 9 4 3 13 21 18 10
// 递归
const middle = (list) => {
  if (list.left) middle(list.left);
  if (list.right) middle(list.right);
  console.log(list.node);
}
middle(tree)
// 迭代
var postListUnRec = []; //定义保存后序遍历结果的数组
var postOrderUnRec = function (node) {
  if (node) { //判断二叉树是否为空
    var stack = [node]; //将二叉树压入栈
    var tmp = null; //定义缓存变量
    while (stack.length !== 0) { //如果栈不为空，则循环遍历
      tmp = stack[stack.length - 1]; //将栈顶的值保存在tmp中
      // 同一个根节点会被tmp两次
      if (tmp.left && node !== tmp.left && node !== tmp.right) { //如果存在左子树
        stack.push(tmp.left); //将左子树结点压入栈
      } else if (tmp.right && node !== tmp.right) { //如果结点存在右子树
        stack.push(tmp.right); //将右子树压入栈中
      } else {
        postListUnRec.push(stack.pop().node);
        node = tmp;
      }
      console.log(stack)
    }
  }
}
var posOrderUnRecur = function (node) {
  if (node) {
    var s1 = []
    var s2 = []
    s1.push(node)
    while (s1.length !== 0) {
      node = s1.pop()
      s2.push(node)
      if (node.left) {
        s1.push(node.left)
      }
      if (node.right) {
        s1.push(node.right)
      }
    }
    while (s2.length !== 0) {
      console.log(s2.pop().value);
    }
  }
}
posOrderUnRecur(tree)
postOrderUnRec(tree)