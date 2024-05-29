class Element {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

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
    if (this.head.next) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      this.head = null;
      this.tail = null;
    }
    return result;
  }

  display() {
    if (this._isEmpty()) {
      return "There is no element!";
    }
    let result = "Exit [ ";
    let current = this.head;
    while (true) {
      if (current === null) {
        break;
      }
      result += current.val + " ";
      current = current.next;
    }
    result += "] Entrance";
    return result;
  }
}

const e1 = new Element(1);
const e2 = new Element(2);
const e3 = new Element(3);
const e4 = new Element(4);
const e5 = new Element(5);
const e6 = new Element(6);

const my_queue = new DLLQueue();
my_queue.enqueue(e1);
console.log(my_queue.display());
// Exit [ 1 ] Entrance
my_queue.dequeue();
console.log(my_queue.display());
// There is no element!
my_queue.enqueue(e2);
my_queue.enqueue(e3);
my_queue.enqueue(e4);
my_queue.enqueue(e5);
my_queue.enqueue(e6);
console.log(my_queue.display());
// Exit [ 2 3 4 5 6 ] Entrance
my_queue.dequeue();
console.log(my_queue.display());
// Exit [ 3 4 5 6 ] Entrance
