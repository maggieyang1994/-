// ids   1 1 1 8 3 0 5 1 8 8
// index 0 1 2 3 4 5 6 7 8 9
// 极端情况下  如果树越瘦高  root 循环次越多  
// 考虑树的大小，然后再来决定到底是调用：id[pRoot] = qRoot 或者是 id[qRoot] = pRoot

class UniorFindWithWeight {
  constructor(n) {
    this.ids = Array.from({ length: n }, (v, i) => i);
    // 刚开始初始化的时候  size为1  因为每个元素的root都指向自己
    this.size = Array.from({ length: n }).fill(1)
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
    // this.ids[up] = this.ids[uq]；
    // 判断数的大小 小树的root 指向大树 同时改变大树的size
    // size 并不是代表树的深度 而是当前树 节点的个数
    // 如果节点的个数大  代表树一定大
    if (this.size[up] > this.size[uq]) {
      this.ids[uq] = this.ids[up];
      this.size[up] += this.size[uq]
    } else {
      this.ids[up] = this.ids[uq];
      this.size[uq] += this.size[up]
    }
    console.log(this.ids)
  }
}
let point = new UniorFindWithWeight(10);
point.union(0, 1);
point.union(0, 2);
point.union(0, 3);
console.log(point)
// 时间复杂度
// union      log2 N 
// connected  log2 N