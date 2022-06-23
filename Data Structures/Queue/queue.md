Each element in a queue is an instance of a class called Element. Element holds three values val, next and prev. Next and Prev are pointers that retains next and previous element.

A class DLLQueue is short for Doubly Linked List Queue. it has head and tail which indicates the head and the tail of a queue. DLLQueue has four methods: isEmpty, enqueue, dequeue and display. \_isEmpty method is a function that is used within a class, which in this case, inside DLLQueue.

Enqueue
In enqueue method, firstly it checks whether a queue is empty. If that is the case, set an argument as a head. When a queue is not empty, simply add an element at the end of a queue and set an argument as a tail.

Dequeue
First of all, it needs to make sure that a queue is not empty. After confirming that it is not an empty, it stores the head of a queue and remove it from a queue.

Display
It simply displays what is in a queue.

You can implement queue with DLL but it would be better if you implement it with Forward Linked List (FLL) due to its less memory consumption.

---

Queue with Forward Linked List
