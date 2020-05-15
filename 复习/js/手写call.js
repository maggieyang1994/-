// 首先call的使用
var obj1 = {
  name: 'maggie',
  sayName: function (str) {
    console.log(this.name, str)
  }
}
var obj2 = {
  name: "gongwei"
};
obj1.sayName.call(obj2, 'stupid monkey')
// 更改this 指向

Object.prototype.call_self = function (_this, args) {
  console.log(this, _this);
  _this[this.name] = this;
  _this[this.name](args);
  delete _this[this.name]
}

// 让obj2 可以调用obj1.sayName
// 给obj2 添加一个 同名属性
// 调用这个方法
// 调用完了删除
obj1.sayName.call_self(obj2, 'stupid monkey', 'rinima')