var str = "((1+2)*(6+7))";
const caculator = (str) => {
  const cacuStack = [];
  const numStack = [];
  for (let item of str) {
    if (item === '(') continue;
    else if (item === ")") {
      let a = numStack.pop();
      numStack.push(eval(`${a}${cacuStack.pop()}${numStack.pop()}`))
    } else if (isNaN(item * 1)) cacuStack.push(item)
    else numStack.push(item)
  }
  return numStack.pop()
}
console.log(caculator(str))