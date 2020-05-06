function Parent(){
  this.name ="nibaba";
  this.obj = {
    age: 99
  }
  this.sayName = function(){
    console.log(this.name)
  }
}

function Child(){
  Parent.call(this)
}
// 不会出现原型链继承的问题
// 但是每次实例化的时候 父类中的方法都会被重复申明  新开辟一个内存空间
var child1 = new Child();
child1.obj.age = 18
console.log(child1);

var child2 = new Child();
console.log(child2);