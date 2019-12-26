
function ksack(values, weights, capacity) {
  var load = 0;
  var i = 0;
  var w = 0;
  while (load < capacity && i < 4) {
    if (weights[i] <= (capacity - load)) {
      w += values[i];
      load += weights[i];
    } else {

      var r = (capacity - load) / weights[i];
      w += r * values[i];
      load += weights[i];
    }
    ++i;
  }
  return w;
}




const bag = (values, weights,items, capacity) => {
  var arr = values.map((x, index) => ({ value: x, weight: weights[index], radio: x / weights[index], item: items[index] })).sort((a, b) => a.radio - b.radio);
  let tempCap = capacity;
  let res = 0
  let i = arr.length - 1;
  while (i >= 0 && tempCap) {
    if (tempCap >= arr[i].weight) {
      let count = parseInt(tempCap / arr[i].weight)
      res += count * arr[i].value;
      tempCap = tempCap - count * arr[i].weight;
      console.log(`${count} 个物品${arr[i].item}： val ${arr[i].value} weight: ${arr[i].weight}`);
    }
    i = i - 1

  }
  console.log(res);
  return res
}
var items = ["A", "B", "C", "D"];
var values = [50, 220, 60, 60];
var weights = [5, 20, 10, 12];
var capacity = 30;
var res = bag(values, weights, items, capacity);
console.log(res)
