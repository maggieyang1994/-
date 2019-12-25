function LinkedList() {
  var Node = function (element) {
    this.element = element;
    this.next = null;
  }
  var length = 0;
  var head = null;

  this.append = function (element) {
    var node = new Node(element), current;
    if (head === null) {
      head = node;
    } else {
      current = head;
      //循环列表，直到最后一项
      while (current.next) {
        current = current.next;
      }
      //找到最后一项，将其next赋值为node
      current.next = node;
    }
    length++;
  };

  this.removeAt = function (position) {
    if (position > -1 && position < length) {
      var current = head,
        previous,
        index = 0;

      if (position === 0) {
        head = current.next;
      } else {
        while (index++ < pisition) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      length--;

      return current.element;
    } else {
      return null;
    }
  };

  this.insert = function (position, element) {
    if (position >= 0 && position <= length) {
      var node = new Node(element),
        current = head,
        previous,
        index = 0;

      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = node;
        node.next = current;
      }

      length++;

      return true;
    } else {
      return false;
    }
  };

  this.indexOf = function (element) {
    var current = head, index = 0;
    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  };

  this.remove = function (element) {
    var index = this.indexOf(element);
    return this.removeAt(index);
  }

  this.isEmpty = function () {
    return length === 0;
  }

  this.size = function () {
    return length;
  }

  this.getHead = function () {
    return head;
  }

}

// array to linkednode
var arr = [1, 2, 3];
var node = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null
    }
  }
}
const arrayToNode = (arr) => {
  return {
    val: arr.shift(),
    next: arr.length ? arrayToNode(arr) : null
  }
}
let nodelink = arrayToNode(arr);

const nodeToArray = (node) => {
  let res = []
  while (node) {
    res.push(node.val)
    node = node.next
  }
  return res
}
let arr1 = nodeToArray(nodelink);
console.log(arr1);
var mergeTwoLists = function (l1, l2) {
  const nodeToArray = (node) => {
    let res = []
    while (node && node.val) {
      res.push(node.val)
      node = node.next
    }
    return res
  }
  const arrayToNode = (arr) => {
    if(!arr.length) return arr
    return {
      val: arr.shift(),
      next: arr.length ? arrayToNode(arr) : null
    }
  }
  let temp1 = nodeToArray(l1);
  let temp2 = nodeToArray(l2);
  let temp3 = [...nodeToArray(l1), ...nodeToArray(l2)].sort();
  console.log(temp1, temp2, temp3)
  return arrayToNode(temp3);
  
};
var l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null
    }
  }
}
var l2 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null
    }
  }
}
let res = mergeTwoLists([], []);
console.log(res)
// nodelink append
// const append = (nodelink, node) => {
//   let temp = JSON.parse(JSON.stringify(nodelink))
//   while(temp.next){
//     temp = temp.next
//   }

// }