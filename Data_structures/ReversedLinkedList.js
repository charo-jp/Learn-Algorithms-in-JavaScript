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

const reverseLinkedList = (node, list) => {
  if (node.next === null) {
    list.push(new Node(node.val));
  }else {
    list.push(new Node(node.val));
    reverseLinkedList(node.next, list);
  }
}
const reversedList = new ForwardLinkedList();
reverseLinkedList(linkedList.head, reversedList);
reversedList.display();
  