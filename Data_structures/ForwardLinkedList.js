// when pushing, a node will be at the first of the list. Head should be changed.
// Forward Linked List with singly Linked List

export class Node  {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export class ForwardLinkedList {
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
    let result = "[ Head => ";
    let nextValue = this.head;
    if (!nextValue) return "No value";
    result += nextValue.val + ", ";
    while (true) {
      nextValue = nextValue.next;
      if (nextValue) {
        if (nextValue.next){
          result += nextValue.val + ", ";
        }else {
          result += nextValue.val + " => null";
        }
      } else {
        result += "]";
        break;
      }
    }
    console.log(result);
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

// let linkedList = new ForwardLinkedList();
// linkedList.push(new Node(1));
// linkedList.push(new Node(2));
// linkedList.push(new Node(3));
// linkedList.push(new Node(4));
// linkedList.push(new Node(5));
// console.log(linkedList.display());
// console.log(linkedList.display());
