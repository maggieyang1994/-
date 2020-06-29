
const regions = [
  { id: 1, name: "Jiangsu" },
  { id: 2, name: "Zhejiang" },
  { id: 3, name: "Yunnan" },
  { id: 11, name: "Nanjing", parent: 1 },
  { id: 12, name: "Suzhou", parent: 1 },
  { id: 21, name: "Hangzhou", parent: 2 },
  { id: 22, name: "Ningbo", parent: 2 },
  { id: 31, name: "Kunming", parent: 3 },
  { id: 32, name: "Lijiang", parent: 3 },
  { id: 111, name: "Jiangning", parent: 11 },
  { id: 112, name: "Gaochun", parent: 11 },
  { id: 321, name: "Ninglang", parent: 32 },
  { id: 322, name: "Huaping", parent: 32 },
  { id: 3221, name: "Huaping1", parent: 322 },
  { id: 3222, name: "Huaping2", parent: 322 },
];


const getTree = (arr) => {

  // 先把数组中的每一项展开  且对象 内存空间是同一个
  const map = arr.reduce((acc, val) => {
    acc[val.id] = val;
    return acc;
  }, {});

  const tree = [];
  arr.forEach((region) => {
    if (region.parent) {
      const parent = map[region.parent];
      if (!parent.children) {
        parent.children = [region];
      } else {
        parent.children.push(region);
      }
    } else {
      tree.push(region);
    }
  });

  return { map, tree };
};
var res = getTree(regions);
console.log(res)


const again = (regions) => {
  let tree = []
  const map = regions.reduce((o, item) => {
    o[item.id] =  item;
    return o
  })
  console.log(map);
  arr.forEach(x => {
    if(!x.parent){
      tree.push(x)
    }else {
      let parent = map[x.parent]

    }
  })
}
again(regions)
