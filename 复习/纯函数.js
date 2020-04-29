// 缓存纯函数
const cacheFn = (fn) => {
  let cache = {}
  return function (str) {
    let res = cache[str];
    return res || (cache[str] = fn(str))
  }
};

const pureFn = (a) => a + 1;
let cachePure = cacheFn(pureFn);
cachePure(1);
cachePure(1);