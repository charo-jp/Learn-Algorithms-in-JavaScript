import {Node, ForwardLinkedList} from "../../Data_structures/ForwardLinkedList.js";

//---------------------Test------------------------------
// 
// Create patterns
const pattern1 = new ForwardLinkedList();
pattern1.push(new Node(5));
pattern1.push(new Node(4));
pattern1.push(new Node(3));
pattern1.push(new Node(2));
pattern1.push(new Node(1));

const pattern2 = new ForwardLinkedList();
pattern2.push(new Node(5));
pattern2.push(new Node(4));
pattern2.push(new Node(3));
pattern2.push(new Node(2));
pattern2.push(new Node(1));

const pattern3 = new ForwardLinkedList();
pattern3.push(new Node(5));

const pattern4 = new ForwardLinkedList();
//--------------------------------------------------------

const reverseMN = function(pattern, m, n) {
  // corret index starting from 0
  if (!pattern.head) {
    return null;
  }else if (pattern.head.next === null) {
    return pattern;
  }else if (m === n) {
    return pattern;
  }

  let prev = null;
  let current = pattern.head;
  let index = 1;
  let start = null;
  let tail = null;


}
// reverseMN(pattern1,1,5);
reverseMN(pattern2, 2, 4);
// Test cases
// const testCases = [[pattern1, 2, 4], [pattern1, 1, 5], [pattern2, 1, 1],
//     [pattern3, null, null]
// ];

// for (let test of testCases) {
//   reverseMN(test[0], test[1], test[2]);
// }

// const copyLinkedList = (node, list) => {
//   if (node.next !== null) {
//     copyLinkedList(node.next, list);
//     list.push(new Node(node.val));
//   }else {
//     list.push(new Node(node.val));
//   }
// }

// const copyedList = new ForwardLinkedList();
// copyLinkedList(linkedList.head, copyedList);
// copyedList.display();
