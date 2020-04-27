// const sum = new Function('a', 'b', 'alert(a + b)');
// ---->async function(a,b){alert(a+b)}；
var geFn = (fnStr, ...arg) => {
  return new Function(...arg, `return async function(){${fnStr}}`)
}
  ;

var fn = geFn(`
var timeout = (time) => {
  return new Promise((resolve, reject) => setTimeout(resolve, time))
}
await timeout(3000);
console.log(a+b)
`, 'a', 'b');
// fn(1, 2)()

var fn = () => {
  let count = 1;
  return function () {
    count++;
    console.log(count)
  }
}
let add = fn();
// add();
// add();


var fn1 = (a, b, c, d) => a - b * c + d;
var bindLeft = (fn, ...a1) => {
  return function (...a2) {
    return fn(...[...a1, ...a2])
  }
}
var fn2 = bindLeft(fn1, 1, 2);
// console.log(fn2(3, 4));

var arr = [11, -1, 6, 5, -4, -7, 9, 8];
const maopao = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    let start;
    for (var j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) [arr[j + 1], [arr[j]]] = [arr[j], [arr[j + 1]]]
    }
  }
  return arr
}
console.log(maopao(arr))
