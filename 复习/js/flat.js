var obj = { a: { b: { c: { d: 1 } }, d: { f: 3 } }, aa: 2, c: [1, 2] };
var obj2 = { c: { d: 1 } }
// { 'a.b.c.d': 1, 'a.d.f': 3, aa: 2, 'c[0]': 1, 'c[1]': 2 }
const type = (data) => Object.prototype.toString.call(data).split(" ")[1].replace("]", "")
let res = {}
const fn = (obj) => {
 
}
fn(obj2)
console.log(res)
 // { 'a.b.c.d': 1, aa: 2, 'c[0]': 1, 'c[1]': 2 }