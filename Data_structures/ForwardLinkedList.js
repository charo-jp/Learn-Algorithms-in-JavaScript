// when pushing, a node will be at the first of the list. Head should be changed.
// Forward Linked List with singly Linked List

class Node  {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class ForwardLinkedList {
  constructor() {
    this.head = null;
  }

  _isNotEmpty = () => {
    if (this.head === null) {
      return true;
    }
    return false;
  }

  display = () => {
    let result = "[ ";

    let nextValue = this.head;
    if (!nextValue) return "No value";
    result += nextValue.val + ", ";
    while (true) {
      nextValue = nextValue.next;
      if (nextValue) {
        result += nextValue.val + ", "
      } else {
        result += "]";
        break;
      }
    }
    return result;

  }
  
  push = (node) => {
    if (this.head === null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  pop = () => {
    if (this.head === null) return null;
    const target = this.head;
    this.head = this.head.next;
    target.next = null;
    return target;
  }

  insert = (node, index) => {
    let i = 0;
    if(this._isNotEmpty() && index === 0) {
      this.pop(node);
    }
    let nextValue = this.head;
    while (true) {
      if (i === index - 1) {
        node.next = nextValue.next;
        nextValue.next = node;
        break;
      }
      nextValue = nextValue.next;
      i++;
    }
  } 
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
const node1000 = new Node(1000);

let linkedList = new ForwardLinkedList();
linkedList.push(node1);
linkedList.push(node2);
linkedList.push(node3);
linkedList.push(node4);
linkedList.push(node5);
console.log(linkedList.display());
linkedList.insert(node1000, 3);
console.log(linkedList.display());
