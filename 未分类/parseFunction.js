// const parseFunction = (str, args) => {
//   args.push(`return async function() { ` + str + ` }`)
//   return new Function(...args)
//   // function Fn() {
//   //   return Function.apply(this, args)
//   // }
//   // Fn.prototype = Function.prototype
//   // console.log(JSON.stringify('.......................',new Fn()))
//   // return new Fn()
// };
// var a = 9
// const main = async() => {
//   let fn = parseFunction(`console.log(a)`, ['a']);
//   let func = fn(2);
//   var result = await func();
// }
// main();

var d = 8
const fade = (a) => {
  var d = '8888888888888'
  return function(){
    // 这里的d 指向函数作用域内的 d 
    console.log('fade.............', d)  //8888888888888
  }
}

fade()(3);


var d = 8
const fn = (a) => {
  // new Function  在 node 和浏览器中的差异
  // 在node 中  只能传什么用什么 拿不到函数内部以及全局变量
  // 浏览器中   可以拿到全局变量  拿不到函数内部的变量
  var b = 'bbbbb';
  // 这里的d 指向 全局作用域（浏览器）  模块作用域（node）
  return new Function('a', 'console.log(d)') // referrence error
}
fn()(3)