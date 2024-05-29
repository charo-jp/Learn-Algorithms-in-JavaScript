// Implemented as a stack
//First in Last out
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class ForwardLinkedList {
  constructor() {
    this.head = null;
  }

  _isEmpty() {
    if (this.head === null) {
      return true;
    }
    return false;
  }

  pop() {
    if (this._isEmpty()) return null;
    const result = this.head;
    this.head = this.head.next;
    return this.head;
  }

  push(e) {
    e.next = this.head;
    this.head = e;
  }

  display() {
    let result = `This side open => [ `;
    let current = this.head;
    while (true) {
      if (current === null) {
        break;
      }
      result += `${current.val} `;
      current = current.next;
    }
    return result + `]`;
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
console.log(linkedList.display());
linkedList.push(node2);
console.log(linkedList.display());
linkedList.push(node3);
console.log(linkedList.display());
linkedList.push(node4);
console.log(linkedList.display());
linkedList.push(node5);
console.log(linkedList.display());
console.log("Pop out value => " + linkedList.pop().val);
console.log(linkedList.display());
