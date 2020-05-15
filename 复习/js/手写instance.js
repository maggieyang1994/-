console.log([] instanceof Array);
// a instanceof b
// 在a的__proto__上层层查找 看是否有__proto__ = Array.prototype;
const instance = (a, b) => {
  let proto = a.__proto__
  while(proto){
    if(proto ===  b.prototype) return true;
    proto = proto.__proto__
  }
  return false
}