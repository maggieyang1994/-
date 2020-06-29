// 1 1 2 3 5 8 13 21  34 55
// 动态规划
const fib = (n) => {
  let res = [0, 1, 1]

  for (let i = 3; i < n; i++) {

    // console.log(res[i - 1], res[i - 2])
    res.push(res[i - 1] + res[i - 2])
  }
  // console.log(res)
  // return sum
  return res[n - 1]
}
console.log(fib(9));

// 调用多次 缓存
const fib1 = (n, cache = [0, 1, 1]) => {
  if (typeof cache[n] === 'number') return cache[n];
  else {
    cache[n] = fib(n - 2, cache) + fib(n - 1, cache);
    return cache[n]
  }
}
console.log(fib1(10));
// hash表

