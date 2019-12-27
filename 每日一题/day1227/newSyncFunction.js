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
fn(1,2)()