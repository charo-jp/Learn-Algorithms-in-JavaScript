// Hash Search with Hash Table.

// This is forward linked list. It is absolutely no point in making
// this with doubly linked list.

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
  }
}
class HashTable {
  constructor(size) {
    // The size of a HashTable varies depending on how much data you are going to store
    // and how likely you allow collisions.
    this.size = size;
    this.table = new Array(size);
  }

  _calculateHash = (key) => {
    return key % this.size;
  };

  insert = (key, value) => {
    const hash = this._calculateHash(key);
    const node = new Node(key, value);
    if (this.table[hash] === undefined) {
      this.table[hash] = node;
    } else {
      // when a collision occurs, do the following:
      let current = this.table[hash];
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
  };

  search = (key) => {
    const hash = this._calculateHash(key);
    let node = this.table[hash];
    if (node === undefined) {
      return "empty";
    }
    while (true) {
      if (node.key === key) {
        return node;
      } else {
        if (node.next === null) {
          return "do not exist";
        }
        node = node.next;
      }
    }
  };

  delete = (key) => {
    const hash = this._calculateHash(key);
    const targetNode = this.search(key);
    if (this.table[hash] === undefined) {
      return "Exception: Trying to delete non-existing node";
    }
    let current = this.table[hash];
    let prev;
    while (true) {
      if (this.table[hash] === targetNode) {
        this.table[hash] = this.table[hash].next;
        break;
      } else {
        prev = current;
        current = current.next;
        if (current === targetNode) {
          prev.next = targetNode.next;
          break;
        }
      }
    }
  };

  display = () => {
    console.log("--------------------------------------");
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] === undefined) {
        console.log(`${i}: undefined`);
      } else {
        let node = this.table[i];
        let row = i + ": ";
        while (true) {
          row += `{key: ${node.key},val: ${node.val}}`;
          if (node.next === null) {
            break;
          }
          row += " => ";
          node = node.next;
        }
        console.log(row);
      }
    }
    console.log("--------------------------------------");
  };
}

const hashTable = new HashTable(10);

hashTable.insert(3, "Alice");
hashTable.insert(12, "Bob");
hashTable.insert(233, "Chris");
hashTable.insert(95, "David");
hashTable.insert(183, "Eav");
hashTable.insert(25, "George");

hashTable.display();
const x = hashTable.search(3);
console.log(x);
hashTable.delete(3);
hashTable.display();
