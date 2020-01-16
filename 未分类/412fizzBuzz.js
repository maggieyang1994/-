// 写一个程序，输出从 1 到 n 数字的字符串表示。

// 1. 如果 n 是3的倍数，输出“Fizz”；

// 2. 如果 n 是5的倍数，输出“Buzz”；

// 3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。
/**
 * @param {number} n
 * @return {string[]}
 */

var fizzBuzz = function (n) {
  let res = []
  while (n) {
    if (n % 3 === 0 && n % 5 === 0) res.unshift('FizzBuzz');
    else if (n % 3 === 0) res.unshift('Fizz');
    else if (n % 5 === 0) res.unshift('Buzz');
    else res.unshift(n)
    n--;
  }
  return res
};
// var res = fizzBuzz(15);
// console.log(res);
// 但是当 条件多起来的时候  判断过于多
// 3 ---> "Fizz" , 5 ---> "Buzz", 7 ---> "Jazz"
var fizzBuzz1 = function (n) {
  var obj = {
    'Fizz': (n) => n % 3 === 0,
    'Buzz': (n) => n % 5 === 0,
    'Jazz': (n) => n % 7 === 0,
  }
  let res = []
  while (n) {
    let flag = true;
    let str = ""
    for (var key in obj) {
      let fn = obj[key];
      if (fn(n)) {
        str += key;
        flag = false
      }
    }
    if(flag) res.unshift(n)
    else res.unshift(str)
    n--
  }
  return res
};
var res = fizzBuzz1(15);
console.log(res)