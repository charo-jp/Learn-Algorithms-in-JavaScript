// Forward Linked List Queue
class Element {
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

  enqueue(e) {
    if (this._isEmpty()) {
      this.head = e;
    } else {
      this.tail.next = e;
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
    } else {
      this.tail = null;
      this.head = null;
    }
    return result;
  }

  display = () => {
    if (this._isEmpty()) {
      return "There is no element!";
    }
    let result = "Exit[ ";
    let current = this.head;
    while (true) {
      if (current === null) {
        result += "] Entrance";
        break;
      }
      result += current.val + " ";
      current = current.next;
    }
    return result;
  };
}
// ----------------------------------------------
const e1 = new Element(1);
const e2 = new Element(2);
const e3 = new Element(3);
const e4 = new Element(4);
const e5 = new Element(5);

const queue = new FLLqueue();
queue.enqueue(e1);
console.log(queue.display());
// Exit[ 1 ] Entrance
queue.dequeue();
console.log(queue.display());
// There is no element!
queue.enqueue(e2);
queue.enqueue(e3);
queue.enqueue(e4);
queue.enqueue(e5);
console.log(queue.display());
// Exit[ 2 3 4 5 ] Entrance
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
// making sure that is works properly when there is no element in a queue.
queue.dequeue();
console.log(queue.display());
// There is no element!
