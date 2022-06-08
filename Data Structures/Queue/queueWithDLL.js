class MyElement {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
// There are in total two operations to which you can maniputate.
class DLLQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  _isEmpty() {
    return !!(this.head === null && this.tail === null);
  }

  enqueue(e) {
    if (this._isEmpty()) {
      this.head = e;
    } else {
      this.tail.next = e;
      e.prev = this.tail;
    }
    this.tail = e;
  }

  dequeue() {
    if (this._isEmpty()) {
      return null;
    }
    const result = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    return result;
  }
  display() {
    if (this._isEmpty()) {
      return "There is no list available!";
    }
    let result = "[ ";
    let current = this.head;
    while (true) {
      if (current === null) {
        break;
      }
      result += `${current.val.toString()} `;
      current = current.next;
    }
    result += "]";
    return result;
  }
}

let e1 = new MyElement(1);
let e2 = new MyElement(2);
let e3 = new MyElement(3);
let e4 = new MyElement(4);
let e5 = new MyElement(5);
let e6 = new MyElement(6);

const my_queue = new DLLQueue();
my_queue.enqueue(e1);
my_queue.enqueue(e2);
my_queue.enqueue(e3);
my_queue.enqueue(e4);
my_queue.enqueue(e5);
my_queue.enqueue(e6);
console.log(my_queue.display());
my_queue.dequeue();
console.log(my_queue.display());
