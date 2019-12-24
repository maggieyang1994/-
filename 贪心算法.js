// 0 1 1 2 3 5 8 13 
function fibo1 (n) {
  if (n <= 0)  return 0;
  if (n === 1) return 1;
  return fibo(n - 1) + fibo(n - 2);
}

function fibo (n) {
  if (n <= 0) return 0;
  if (n <= 1) return 1;
  var a = 0, b = 1;
  for (var i = 2; i <= n; i++) {
      b = a + b;
      a = b - a;
  }
  return b;
}

const fib2 = (n) => {
  if(n === 1) return 0;
  else if(n === 2) return 1;
  else {
    let arr = [0, 1]
    for(let i = 2; i<=n;i++){
      arr[i] = arr[i - 2] + arr[i - 1]
    }
    return arr[n]
  }
}
console.log(fib2(5))
// 求连续最大sum
// var arr = [1,0,-1,8,9];
// 背包
var bag = [{
  capacity: 2,
  price:3
},{
  capacity: 3,
  price:4
},{
  capacity: 5,
  price:5
}];
let capacity = 5;
const bag = (bag, capacity) => {
  
}

