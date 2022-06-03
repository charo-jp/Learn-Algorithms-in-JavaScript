// the javascript object map uses hash table.
// it has methods for inserting new pair of key and value, deleting and modifying.

const collection = new Map();

collection.set("Nathan", "555-0182");
collection.set("Jane", "315-0322");

// for (let [key, value] of collection) {
//   console.log(`${key} = ${value}`);
// }


// ----------------------------------------------------------------------------
// Let's write your own hash table!
// ----------------------------------------------------------------------------

class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % this.table.length;
  }

  set(key, value) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
      }
      this.table[index].push([key, value]);
    }else {
      this.table[index] = [];
      this.table[index].push([key,value]);
    }
    this.size++;
  }

  get(key) {
    const index = this._hash(key);
    if (this.table[index] && this.table[index].length > 1) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i];
        }
      }
      return;
    }
    return this.table[index][0];
  }

  getSize() {
    return this.size;
  }

  display() {
    this.table.map(element => {
      if (!element) return;
      console.log(element);
    })
  }

  remove(key) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i,1);
          this.size--;
          return true;
        }
      }
    }else {
      return false;
    }
  }
}

// Test the hashtable
const ht = new HashTable();

ht.set("France", 111);
ht.set("Spain", 150);
ht.set("ǻ", 192);

ht.display();
// 83: [ France: 111 ]
// 126: [ Spain: 150 ],[ ǻ: 192 ]

console.log(ht.size); // 3
ht.remove("Spain");
ht.display();
// 83: [ France: 111 ]
// 126: [ ǻ: 192 ]