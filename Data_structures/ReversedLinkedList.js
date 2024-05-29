// This code yields a reversed linkedList.
// enable Forward Linked List
import {Node, ForwardLinkedList} from "./ForwardLinkedList.js";

// set a linkedList
const linkedList = new ForwardLinkedList();
linkedList.push(new Node(1));
linkedList.push(new Node(2));
linkedList.push(new Node(3));
linkedList.push(new Node(4));
linkedList.push(new Node(5));

linkedList.display();

// solution 1: Recursion
const reverseLinkedListWithRecursion = (node, list) => {
  if (node.next === null) {
    list.push(new Node(node.val));
  }else {
    list.push(new Node(node.val));
    reverseLinkedListWithRecursion(node.next, list);
  }
}

const reversedList1 = new ForwardLinkedList();
reverseLinkedListWithRecursion(linkedList.head, reversedList1);
reversedList1.display();

// solution 2: while loop
const reverseLinkedListWithWhile = (head) => {
  let prev = null;
  let current = head;
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

const reversedList2 = new ForwardLinkedList();
reversedList2.push(new Node(1));
reversedList2.push(new Node(2));
reversedList2.push(new Node(3));
reversedList2.push(new Node(4));
reversedList2.push(new Node(5));
const newHead = reverseLinkedListWithWhile(reversedList2.head);
reversedList2.head = newHead;
reversedList2.display();