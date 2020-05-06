function Parent(){
  this.name ="nibaba";
  this.obj = {
    age: 99
  }
}

function Child(){
  
}
// b继承a  将b的prototype = a的实例
Child.prototype = new Parent();
let temp = new Child();

// 所有的子类的实例都会共享父类的实例属性(引用类型)
temp.obj.age = '18';
console.log(temp.obj.age)
const temp2 = new Child();
console.log(temp2.obj.age)

const temp3 = new Parent();
console.log(temp3.obj.age)