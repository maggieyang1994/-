// import a from './bundle/a.js';
import { cube } from './bundle/math.js';
import { Apple } from './bundle/component.js';
// import b from './bundle/b.ts';
// import _ from 'lodash';
// import './public/css/test.css';

function component() {
  var element = document.createElement('div');

  // lodash 是由当前 script 脚本 import 导入进来的
  // element.innerHTML = _.join(['Hello', 'webpack5'], ' ');
  element.innerHTML = "tree shaking" + '5 cubed is equal to ' + cube(5)
  // element.classList.add('hello');

  return element;
}

const appleModel = new Apple({
  model: 'IphoneX'
}).getModel()

console.log(appleModel)
document.body.appendChild(component());
// console.log(`data from a ${a()}, ${b("ts")}`)