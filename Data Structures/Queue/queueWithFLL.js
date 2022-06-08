// Forward Linked List Queue

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class FLLqueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  _isEmpty() {
    return !!(this.head === null && this.tail === null);
  }

  dequeue() {
    if (this._isEmpty()) {
      return null;
    }
    const result = this.head;
    if (this.head.next === null) {
      this.tail = null;
    }
    this.head = this.head.next;
    return result;
  }

  enqueue(e) {
    if (this._isEmpty()) {
      this.head = e;
    } else {
      this.tail.next = e;
    }
    this.tail = e;
  }

  display = () => {
    let result = "[ ";

    let nextValue = this.head;
    if (!nextValue) return "[ ]";
    result += nextValue.val + " ";
    while (true) {
      nextValue = nextValue.next;
      if (nextValue) {
        result += nextValue.val + " ";
      } else {
        result += "]";
        break;
      }
    }
    return result;
  };
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
const node1000 = new Node(1000);

const queue = new FLLqueue();
queue.enqueue(node1);
queue.enqueue(node2);
queue.enqueue(node3);
queue.enqueue(node4);
queue.enqueue(node5);
console.log(queue.display());
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue.display());
