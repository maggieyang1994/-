const kuaipai = (arr) => {
  if (arr.length < 2) return arr
  let flag = Math.floor(arr.length / 2);
  let flagValue = arr.splice(flag, 1)[0]
  let left = [];
  let right = []
  for (let i = 0; len = arr.length, i < len; i++) {
    if (arr[i] < flagValue) left.push(arr[i])
    else right.push(arr[i])
  }
  return kuaiPai(left).concat(flagValue, kuaiPai(right))
};