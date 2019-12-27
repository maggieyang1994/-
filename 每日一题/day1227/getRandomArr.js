var arr = []
const insertArr = (arr, i = 0) => {
   if(i === 5) return arr;
   else {
      let num = parseInt(Math.random() * 31) + 2;
      if(arr.indexOf(num) === -1) {
        arr.push(num);
        i = i + 1
      }
      return insertArr(arr, i)
   }
   
    
}
let res = insertArr(arr);
// console.log(res);

var str = 'abcd';
// [a, b ,c ,d]
// a  ----> [a, bcd] [a, bc, d] [a,b,cd] [a, b, c, d] 0    1 2 3 4
// ab ---> [ab, c, d] [ab,cd] 1   2 3
// abc ----> [abc, d] 2  3
// abcd ----> [abcd] 3 4
const split = (str) => {
  let res = []
  for(let i = 0; i< str.length;i++){
    // 首先固定第一位 
    console.log('outter', i);
    for(let j = i + 1; j< str.length;j++){
      // 分割剩下的
      console.log("inner", j);
      // temp.push(str.subs)
    }
  }
}
split(str)