
// 如果把一个对象放入到数组中，那么只要这个数组存在，那么这个对象也就存在，即使没有其他对该对象的引用


let sem = { name: "Semlinker" };
let array = [ sem ];
sem = null; // 覆盖引用
console.log(array[0]) // { name: "Semlinker" }


// 如果将一个引用类型 作为map的key, 即使将引用类型的值置为null, 该值依然不会被回收
// 除非手动将map clear

function usageSize() {
  const used = process.memoryUsage().heapUsed;
  return Math.round((used / 1024 / 1024) * 100) / 100 + "M";
}

global.gc();
console.log(usageSize()); // ≈ 3.19M

let arr = new Array(10 * 1024 * 1024);
const map = new Map();

map.set(arr, 1);
global.gc();
console.log(usageSize()); // ≈ 83.19M

arr = null;
// map.clear()
global.gc();
console.log(usageSize()); // ≈ 83.2M




// 如果将一个引用类型 作为weakMap的key, 即使将引用类型的值置为null, 该值会被回收(弱引用) 导致了weakMap不可枚举
// weakmap 的key必须是引用类型  map没有这个限制


// function usageSize() {
//   const used = process.memoryUsage().heapUsed;
//   return Math.round((used / 1024 / 1024) * 100) / 100 + "M";
// }

// global.gc();
// console.log(usageSize()); // ≈ 3.19M

// let arr = new Array(10 * 1024 * 1024);
// const map = new WeakMap();

// map.set(arr, 1);
// global.gc();
// console.log(usageSize()); // ≈ 83.2M

// arr = null;
// console.log(map.get(arr))
// global.gc();
// console.log(usageSize()); // ≈ 3.2M


// node --expose-gc map.js