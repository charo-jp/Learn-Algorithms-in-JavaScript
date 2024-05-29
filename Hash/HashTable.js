class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
  }
}

class HashTable {
  constructor(size) {
    this.table = new Array(size);
  }

  _yieldHash = (key) => {
    return key % this.table.length;
  };

  insert = (key, val) => {
    const node = new Node(key, val);
    const hash = this._yieldHash(key);
    if (this.table[hash] == undefined) {
      this.table[hash] = node; //if there is already an element, you should use forward linked list to manage it -> chain method.
    } else {
      let current = this.table[hash];
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
  };

  delete = (key) => {
    const hash = this._yieldHash(key);
    let node = this.search(key);
    if (node === null) {
      console.log(`key ${key} not found`);
      return null;
    }
    console.log(`Deleting node => key:${node.key} val:${node.val}`);
    if (node === this.table[hash]) {
      this.table[hash] = node.next;
      node.next = null;
    } else {
      let prevNode = this.table[hash];
      node = prevNode.next;
      while (true) {
        if (node.key === key) {
          prevNode.next = node.next;
          node.next = null;
          break;
        }
        prevNode = prevNode.next;
        node = node.next;
      }
    }
    console.log("Deletion Complete");
  };

  search = (key) => {
    const hash = this._yieldHash(key);
    let node = this.table[hash];
    if (node === undefined) return null;
    while (node.key !== key) {
      if (node.next !== null) {
        node = node.next;
      } else if (node.next === null) {
        return null;
      } else {
        break;
      }
    }
    console.log(
      `Search Result for ${key}: Key: ${node.key} Value: ${node.val}`
    );
    return node;
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
const x = hashTable.search(0);
hashTable.delete(95);
hashTable.display();
