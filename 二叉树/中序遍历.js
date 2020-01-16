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
// 根的位置
// 左 ->  根 -> 右
// 2 3 4 8 9 9 10 13 18 21
// 递归
const middle = (list, res = []) => {
  if (list.left) middle(list.left);
  res.push(list.node)
  if (list.right) middle(list.right);
  return res
}
var res = middle(tree);
console.log(res)
// 迭代

const middleP = (node) => {
  let stack = [];
  let res = []
  while (stack.length || node) {
    if (node) {
      stack.push(node);
      node = node.left
    } else {
      let temp = stack.pop();
      res.push(temp.node);
      node = temp.right
    }
  }
  return res
}
// var res = middleP(tree);
// console.log(res)

// 栈 和 指针 
const noDigui = (node, res = []) =>{
  let stack = [];
  while(node || stack.length){
    if(node){
      stack.push(node)
      node = node.left
    }else{
      // 直到没有left　才开始出栈
      let temp = stack.pop();
      res.push(temp.node);
      node = temp.right
    }
  }
  return res
}
var res = noDigui(tree);
console.log(res)