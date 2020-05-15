// tree-shaking不会清楚自执行函数
function square(x) {
  console.log('square');
  return x * x;
}(2)

export function cube(x) {
  return x * x * x;
}