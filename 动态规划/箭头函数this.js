var obj1 = {
  name: 'obj1_name',
  print: function () {
    console.log('outer', this)
    // return () => console.log(this.name)
    return function () {
      console.log("inner", this == global)
      console.log(this.name)
    }
  }
}
let obj2 = { name: 'obj2_name' };
obj1.print()();
// 箭头函数内部没有this 且无法用call apply改变this
obj1.print().call(obj2);
obj1.print.call(obj2)()