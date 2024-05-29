/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 const reverseBetween = function(head, m, n) {
    let position = 1;
    let currentNode = head;

    while(position < m - 1) {
        currentNode = currentNode.next;
        position++;
    }

    let start = currentNode;
    currentNode = currentNode.next;
    position++;
    let tail = currentNode;
    let prev = null;
    // position is always m;
    while (position <= n) {
        let next = currentNode.next;
        if (position === n) {
            start.next = currentNode;
        }
        currentNode.next = prev;
        prev = currentNode;
        currentNode = next;
        position++;
    }
    // after while loop
    // currentNode = 6;
    tail.next = currentNode;
    return head;
};

