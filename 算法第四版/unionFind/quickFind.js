// ids   0 1 2 3 4 5 6 7 8 9
// index 0 1 2 3 4 5 6 7 8 9
class QuickFind {
  constructor(n) {
    this.ids = Array.from({ length: n }, (v, i) => i)
  }
  connected(p, q) {
    return this.ids[p] === this.ids[q]
  }
  union(p, q) {
    let up = this.ids[p];
    let uq = this.ids[q];
    if (up === uq) return;
    for (let i = 0; i < this.ids.length; i++) {
      if (this.ids[i] === up) this.ids[i] = uq
    }
  }
}
let point = new QuickFind(10);
point.union(3, 4);
point.union(5, 6);
point.union(5, 8);
console.log(point)
// 时间复杂度
// union      n 
// connected  1