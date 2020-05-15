// 首先JSON.parse(JSON.stringify(obj)) 的问题
// 循环引用报错  
// 不能复制function  regexp symbol 
// 属性指向一块内存空间 会重复申明
let copiedObj = new Map()
const deepCopy = (original) => {
  if (typeof original !== 'object' && typeof original !== 'symbol') return original;
  else {
    let target;
    switch (type(original)) {
      case 'Array': {
        target = [];
        original.forEach(x => {
          target.push(deepCopy(x))
        })
        break;
      }
      case 'Object': {
        target = {};
        // 解决循环引用
        
        for (let key in original) {
          let tempValue = original[key]
          if (copiedObj.get(tempValue)) {
            console.log('======deepCopy', tempValue)
            target[key] = target[copiedObj.get(tempValue)]
          } else {
            type(tempValue) === 'Object' && copiedObj.set(tempValue, key)
            target[key] = deepCopy(tempValue)
          }
          
        }
        break;
      }
      case 'RegExp': {
        let temp = original.toString()
        return new RegExp(temp.substring(1, temp.lastIndexOf('/')), temp.substring(temp.lastIndexOf('/') + 1, temp.length))

      }
      case 'Symbol': {
        return Symbol(original.toString().match(/Symbol\(([\s\S]*)\)/)[1])

      }
    }
    return target
  }
}

const type = (data) => {
  return Object.prototype.toString.call(data).split(" ")[1].replace(']', "")
}


// 循环引用
var a = {};
var b = {};
a.b = b;
b.a = a;
var cloneA = deepCopy(a);
console.log(cloneA)


// var obj1 = {};
// var b = {b:1};
// obj1.b = b;
// obj1.c = b;
// console.log(obj1.b === obj1.c)

// let obj2 = deepCopy(obj1);

// console.log(obj2.b === obj2.c)