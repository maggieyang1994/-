// 能组成三角形的个数
var arr = [2, 3, 5, 9, 4];
// 234 254 294 354 354
const fn = (arr) => {
  let res = [];
  let hash = {}
  for (let i = 0; i < arr.length - 2; i++) {
    let tempa = arr[i]
    for (let j = i + 1; j < arr.length - 1; j++) {
      let tempb = arr[j]
      for(let y = j + 1;y<arr.length;y++){
        tempc= arr[y];
        if(tempa + tempb > tempc) res.push([tempa, tempb, tempc])
      }
    }
  }
  console.log(res)
}
fn(arr)