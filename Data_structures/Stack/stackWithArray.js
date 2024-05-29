// FILO (First In Last Out)

class StackWithArray {
  constructor(size) {
    this.size = size;
    this.array = new Array(size);
    for (let i = 0; i < size; i++) {
      this.array[i] = -1;
    }
    this.head = -1;
  }

  _isEmpty() {
    return !!(this.head === null);
  }

  pop() {
    if (this._isEmpty()) {
      return null;
    }
    const result = this.array[this.head];
    this.array[this.head] = -1;
    this.head--;
    return result;
  }

  push(num) {
    if (this.head === this.size - 1) {
      return null;
    }
    this.head++;
    this.array[this.head] = num;
  }

  display() {
    let result = "[ ";
    let i = 0;
    while (i < this.size) {
      if (this.array[i] === -1) break;
      result += `${this.array[i]} `;
      i++;
    }
    return result + "]";
  }
}

const stack = new StackWithArray(10);

stack.push(6);
stack.push(5);
stack.push(4);
stack.push(3);
stack.push(2);
stack.push(1);
console.log(stack.display());
stack.pop();
stack.pop();
console.log(stack.display());
