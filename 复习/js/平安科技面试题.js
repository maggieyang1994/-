
var arr = [{ val: 1 }, { val: 2 }];
var arr2 = [...arr];
arr2[0] = { val: 3 };
arr2[1].val = 4;
console.log(arr, arr2)


var a = {
  a: "a.a",
  sayName1: function () {
    console.log(this.a)
  },
  sayName2: () => {
    console.log(this.a)
  }
}

var b = { a: 'b.a' };
a.sayName1()
a.sayName2()
a.sayName1.bind(b)();
a.sayName2.bind(b)();
a.sayName1.call(b);
a.sayName2.call(b);



var promise1 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(5)
    })
  })

}
const fn = async () => {
  var num = 1
  num = await promise1(num).then();
  setTimeout(() => {
    num = 3
  })
  console.log(num)
}
fn()

// 求字符串出现最多的字母 以及次数
const findCount = () => {
  var str = "abcbaa";
  let arr = str.split("").sort().join("").match(/([a-z])\1+/g);
  var obj = arr.reduce((o, item) => { o[item.length] = item[0];return o}, {});
  let key = Math.max(...Object.keys(obj));
  return [obj[key], key]
}
console.log(findCount())


const findCount2 = () => {
  var str = "abcbaa";
  var obj = {};
  for(var item of str){
    if(obj[item]) obj[item]++;
    else obj[item] = 1
  }
  console.log("findCount2", obj)
}
console.log(findCount2())
