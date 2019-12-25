function knapSack(w, val, capacity, n) {
  var T = []

  for (let i = 0; i < n; i++) {
    // 物品总量
    T[i] = [];
    for (let j = 0; j <= capacity; j++) {
      if (i === 0) {
        T[i][j] = w[i] > j ? 0 : val[i]

      } else {
        T[i][j] = w[i] > j ? T[i - 1][j] : Math.max(T[i - 1][j], val[i] + T[i - 1][j - w[i]])
      }
    }

  }
  console.log(T)
  findValue(w, val, capacity, n, T);

}

//找到需要的物品
function findValue(w, val, capacity, n, T) {
  // 从最后开始找
  let i = T.length - 1;
  let j = T[0].length - 1;
  while (i > 0 && j > 0) {
    if (T[i][j] !== T[i - 1][j]) {
      // 如果不等于就 不是取上面的
      console.log(`第${i} 个物品： val ${val[i]} weight: ${w[i]}`);
      j = j - w[i];
      i = i - 1
    } else {
      i = i - 1
    }
  }
  if( i === 0 && T[i][j] !== 0){
    // 第一个也可以取
    console.log(`第${i} 个物品： val ${val[i]} weight: ${w[i]}`);
  }
}

// w = [2,3,4].  val = [3,4,5] , n = 3 , capacity = 5
//function knapSack([2,3,4],[3,4,5],5,3);
// 
var values = [4, 5, 13, 12],
  weights = [1, 2, 4, 5],
  capacity = 6,
  n = values.length;

console.log(knapSack(weights, values, capacity, n));





