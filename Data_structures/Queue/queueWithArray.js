class MyQueue {
  constructor(size) {
    this.size = size;
    this.arr = new Array(size);
    for (let i = 0; i < this.size; i++) {
      this.arr[i] = -1;
    }
    this.head = 0;
    this.tail = 0;
  }

  _isEmpty() {
    return !!(this.head === null && this.tail === null);
  }

  enqueue(num) {
    if ((this.tail + 1) % this.size === this.head) {
      return null;
    }
    this.arr[this.tail] = num;
    this.tail = (this.tail + 1) % this.size;
  }

  dequeue() {
    if (this._isEmpty()) {
      return null;
    }
    const result = this.arr[this.head];
    this.arr[this.head] = -1; // whatever the number that is not likely to be in a queue is fine.
    this.head = (this.head + 1) % this.size;
    return result;
  }

  display() {
    let result = "This side first [ ";
    let i = this.head;
    while (i !== this.tail) {
      result += `${this.arr[i]} `;
      i = (i + 1) % this.size;
    }
    result += "]";
    return result;
  }
}

const myqueue = new MyQueue(6);
myqueue.enqueue(6);
myqueue.enqueue(2);
myqueue.enqueue(3);
myqueue.enqueue(7);
myqueue.enqueue(9);
console.log(myqueue.display());
myqueue.dequeue();
console.log(myqueue.display());
