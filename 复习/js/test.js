function test(a,b){
  console.log(b); 
  return {
      test: function(c,a){
          return test(c,a)
      }
  }
}
var a = test(100,200); // 200
a.test(300); // undefined
a.test(400); // undefined

function test(a,b){
  console.log(b); 
  return {
      test: function(c,a){
          return test(c,a)
      }
  }
}
var b = test(101).test(201).test(401); // undefined  undefined  undefined


function test(a,b){
  console.log(b); 
  return {
      test: function(c,a){
          return test(c,a)
      }
  }
}
var c = test(102).test(202,302);
c.test(); // undefined  302  undefined
