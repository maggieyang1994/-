const Sort = (arr, key, isDesc = true) => {
  arr.sort((c, d) => {
    let a = c[key];
    let b = d[key];
    let val1, val2
    if (!isNaN(parseFloat(a)) && !isNaN(parseFloat(b))) {
      // 处理巨型数字 比较
      if (String(Number(a)) !== String(a) && String(Number(b)) !== String(b)) {
        a = a.replace(/^0+/, "");
        b = b.replace(/^0+/, "");
        if (a.length === b.length) {
          val1 = a;
          val2 = b
        }
        else return isDesc ? (a.length > b.length ? 1 : -1) : (a.length < b.length ? -1 : 1)
      } else {
        val1 = parseFloat(a);
        val2 = parseFloat(b)
      }
    } else {
      val1 = a;
      val2 = b
    }
    if (val1 > val2) return isDesc ? 1 : -1;
    else if (val1 < val2) return isDesc ? -1 : 1;
    else return 0
  })
}
var arr = [{ waybill_no: -2, merchant: 'DELT' }, { waybill_no: -3, merchant: 'TEST' }]
Sort(arr, 'waybill_no', false);
console.log(arr)