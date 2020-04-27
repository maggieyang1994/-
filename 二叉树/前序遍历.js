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
// 根 -> 左 -> 右
// 10 3 2 4 9 8 9 18 13 21
// 递归  按照入栈顺序
const preOrder = (list, res = []) => {
  if (list) {
    res.push(list.node);
    if (list.left) preOrder(list.left, res)
    if (list.right) preOrder(list.right, res)
  }
  return res
}
// var res = preOrder(tree);
// console.log(res);
// 递归的入栈顺序
// [pre10 pre3 pre2 ]

const preOrderP = (list) => {
  if (!list) return []
  let res = [];
  let stack = [list]
  while (stack.length) {
    let temp = stack.pop();
    res.push(temp.node);
    if (temp.right) stack.push(temp.right);
    if (temp.left) stack.push(temp.left)
  }
  return res
}
// 10
// 18 3
// 18 4 2
// 18 4 

var res = preOrderP(tree);
console.log(res);

const digui = (n = 1) => {
  console.log('before', n)
  if (n < 5) digui(++n);
  console.log('after', n)
}

// digui();

const fib = (n) => {
  // 4 2 0 1 
  console.log(n)
  if (n === 0 || n === 1) return 1;
  return fib(n - 2) + fib(n - 1)
}
// fib(4);
// f4  f2 + f3
// f2  f0 f1
// f0 out f1 out  ---> f2 out  ---> 
// f3  f2 + f1

const f = (n) => {
  // 阶乘
  if (n === 1) return 1;
  return n * f(n - 1)
}
// 尾调用，是指函数内部的最后一个动作是函数调用。该调用的返回值，直接返回给函数
const f1 = (n, res = 1) => {
  if (n == 1) return res;
  return f(n - 1, n * res)
}

var resArr = []
const feidiguibefore = (tree) => {
  if (!tree) return
  else {
    let stack = [tree];
    while (stack.length) {
      let current = stack.pop();
      resArr.push(current.node);
      if (current.right) stack.push(current.right)
      if (current.left) stack.push(current.left)
    }
  }
}
feidiguibefore(tree);
console.log(resArr)

// 中 非递归
const feidiguimiddle = (tree) => {
  let res = []
  if (!tree) return
  else {
    let stack = [tree];
    let node = tree.left;
    while(stack.length || node){
      if(node){
        stack.push(node);
        node = node.left
      }else{
        // 开始出栈
        let temp = stack.pop();
        res.push(temp.node);
        node = temp.right
      }
    }
    return res
  }
}
console.log(feidiguimiddle(tree))

const feidiguiafter = (tree) => {
  let res = []
  if (!tree) return
  else {
    
  }
}


