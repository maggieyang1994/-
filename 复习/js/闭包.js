

var result = [], a = 3, total = 0
 
function f (a) {
    var i = 0;
 
    for (; i < 3; i = i + 1) {
        result[i] = function () {
            total += a * i
        }
    }
     
}
 
f(1)
console.log(result)
result[0]() // ?3
result[1]() // ?6
result[2]() // ?9

