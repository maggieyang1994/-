// ids   1 1 1 8 3 0 5 1 8 8
// index 0 1 2 3 4 5 6 7 8 9
// 节点和组的关系以树的形式表现出来
// 如果不改变底层数据结构，即不改变使用数组的表示方法的话。可以采用parent-link的方式将节点组织起来
// ids[index] 的值 就是指向 index的父节点

class UniorFind {
  constructor(n) {
    this.ids = [1, 1, 1, 8, 3, 0, 5, 1, 8, 8];
  }
  root(q) {
    // 找到根结点
    while(q !== this.ids[q]){
      q = this.ids[q]
    }
    return q


  }
  connected(p, q) {
    // 判断是否connected root是否相同
    return this.root(p) === this.root(q)
  }
  union(p, q) {
    // union 即为将root联通
    let up = this.root(p)
    let uq = this.root(q)
    if (up === uq) return;
    this.ids[up] = this.ids[uq]
  }
}
let point = new UniorFind();
point.union(5, 9);
console.log(point);
// 时间复杂度
// union      树的深度 
// connected  树的深度