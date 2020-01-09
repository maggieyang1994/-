// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AZ -> 26 + 25 
// BZ -> 26 * 2 + 25 = 77
// ZZ -> 26 * 26 + 25 = 701

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  let ArrayMap = new Array(10)
  ArrayMap = ArrayMap.reduce((o, item, index) => {
    o[String.fromCharCode(64 + index + 1)] = item;
    return o
  }, {});
  console.log(ArrayMap);
  let num = 0;
  let j = 0;
  for (let i = s.length - 1; i > 0; i--) {
    num += (s[i].charCodeAt - 64) * 26 * j + (s[i].charCodeAt - 64)
  }
};
titleToNumber()