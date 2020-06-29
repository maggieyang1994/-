function Parent(){
  this.name ="nibaba";
  this.obj = {
    age: 99
  }
}
Parent.prototype.sayname = function(){
  console.log(this.name)
}
function Child(){
  Parent.call(this)
}
Child.prototype = new Parent();
// 用原型链继承方法  构造函数继承 属性

let child1 = new Child();
console.log(child1)

// 缺点 由于调用了两次父类 第一次Child.prototype = new Parent() 父类的属性会被定义到child的prototype
// 第二次 Parent.call 父类的属性会被定义到child
// 所以组合继承的实例 对象上和原型对象上都有父类的属性





