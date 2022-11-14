/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// Bruteforce solution
// Time Complexity: O(a)
// Space Complexity O(a + b)
const metgeTwoListBF = function(l1,l2) {
  let val = 0;
  if (!l1 || !l2) {
    if (!l1) return l2;
    if (!l2) return l1;
  }else {
    let value = l1.val <= l2.val ? l1.val : l2.val;
    if (l1.val <= l2.val) {
        l1 = l1.next
    }else {
        l2 = l2.next
    }
    val = value;
  }
  let l3 = new ListNode(val);
  let result = l3;
  if (!l1 || !l2){
      if (!l1) {
          l3.next = l2;
          return l3;
      }else {
          l3.next = l1;
          return l3;
      }
  }
  while(true) {
    // check if both of them has actual values
    if (l1.val !== null && l2.val !== null) {
      if (l1.val <= l2.val) {
        l3.next = new ListNode(l1.val);
        l1 = l1.next;
      }else {
        l3.next = new ListNode(l2.val);
        l2 = l2.next;
      }
      l3 = l3.next;
      
    }
    if (!l1 || !l2) {
      if (!l1) {
        l3.next = l2;
        break;
      } else {
        l3.next = l1;
        break;
      }
    }
  }
  return result;
}

// Optimized solution

const mergeTwoLists = function(list1, list2) {
  if (!l1) return l2;
  else if (!l2) return l1;
  else if (l1.val <= l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
  } else {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2
  }
};