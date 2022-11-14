// A solution with while loop
// T: O(n)
// S: O(1)
const reverseLinkedList = (head) => {
  let current = head;
  let prev = null;
  while (current) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
};

// A solution with recursion
const reverseLinkedListRecursion = (head) => {
  if (head == null || head.next == null) return head;
  var res = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return res; 
};
