class MyElement {
  constructor(val) {
    this.prev = null;
    this.next = null;
    this.val = val;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  _isEmpty() {
    if (this.head === null) {
      return true;
    } else {
      return false;
    }
  }

  get(index) {
    if (this._isEmpty()) {
      console.log("Could not find a list");
      return null;
    }
    let current = this.head;
    let i = 0;
    while (index > i) {
      if (current.next === null) {
        console.log("The specified index surpasses the length of a list.");
        return null;
      }
      current = current.next;
      i++;
    }
    return current;
  }

  insert(e, index) {
    const target = this.get(index);
    console.log(target);
    if (target === null) {
      this.append(e);
    } else if (target === this.head) {
      target.prev = e;
      e.next = target;
      this.head = e;
    } else {
      e.prev = target.prev;
      e.next = target;
      target.prev.next = e;
      target.prev = e;
    }
  }

  delete(index) {
    const e = this.get(index);
    if (this.head === e) {
      this.head = e.next;
      e.next.prev = null;
    } else if (this.tail === e) {
      this.tail = e.prev;
      e.prev.next = null;
    } else {
      e.prev.next = e.next;
      e.next.prev = e.prev;
    }
  }

  append(e) {
    if (this._isEmpty()) {
      this.head = e;
    } else {
      e.prev = this.tail;
      this.tail.next = e;
    }
    this.tail = e;
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

const e1 = new MyElement(3);
const e2 = new MyElement(4);
const e3 = new MyElement(5);
const e4 = new MyElement(6);
const e5 = new MyElement(100);
const list = new DoublyLinkedList();
list.append(e1);
list.append(e2);
list.append(e3);
list.append(e4);
console.log(list.display());
console.log(list.get(0).val);
list.delete(3);
console.log(list.display());
list.insert(e5, 2);
console.log(list.display());
