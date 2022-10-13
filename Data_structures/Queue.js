// First In First Out (FIFO)
// Queue that uses Singly Linked List 
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue = (node) => {
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }


  dequeue = () => {
    if (this.head === null) return "Queue is empty";
    const target = this.head;
    if (target.next === null) {
      this.tail = null;
    }
    this.head = target.next;
    target.next = null;
    console.log(target.val);
  }

  display = () => {
    let result = "Tail [ ";
    let current = this.head;
    while (true) {
      if (current) {
        result += current.val + ", ";
      }else {
        break;
      }
      current = current.next;
    }
    result += "] Head";
    console.log(result);
  }
}
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

const Queue1 = new Queue();

Queue1.enqueue(node1);
Queue1.enqueue(node2);
Queue1.enqueue(node3);
Queue1.enqueue(node4);
Queue1.enqueue(node5);

Queue1.display();
Queue1.dequeue();
Queue1.display();
