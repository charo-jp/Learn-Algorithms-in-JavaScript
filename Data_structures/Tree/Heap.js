const INFTY = 2 ** 31 - 1;

class Heap {
  constructor(a) {
    this.arr = a;
    this.size = a.length;
    this._createMaxHeap();
  }

  _swap = (i, j) => {
    const temp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = temp;
  };

  _getParent = (index) => {
    return Math.floor((index + 1) / 2 - 1);
  };

  _getLeft = (index) => {
    return 2 * (index + 1) - 1;
  };

  _getRight = (index) => {
    return 2 * (index + 1);
  };

  _increaseVal = (index, val) => {
    if (this.arr[index] > val) {
      console.log("Value is not increasing");
      return null;
    }
    this.arr[index] = val;
    while (index > 0 && this.arr[this._getParent(index)] < this.arr[index]) {
      this._swap(index, this._getParent(index));
      index = this._getParent(index);
    }
  };

  _maxHeapify = (index) => {
    const left = this._getLeft(index);
    const right = this._getRight(index);
    let largest;
    if (left < this.size && this.arr[left] > this.arr[index]) {
      largest = left;
    } else {
      largest = index;
    }
    if (right < this.size && this.arr[right] > this.arr[largest]) {
      largest = right;
    }
    if (largest !== index) {
      this._swap(largest, index);
      this._maxHeapify(largest);
    }
  };

  _createMaxHeap = () => {
    this.size = this.arr.length;
    for (let i = Math.floor(this.size / 2 - 1); i > -1; i--) {
      // for all nodes that has children including root.
      this._maxHeapify(i);
    }
  };

  extractMax = () => {
    if (this.size < 1) {
      console.log("The heap is empty");
      return null;
    }
    const result = this.arr[0];
    this.arr[0] = this.arr[this.size - 1];
    this.arr.pop(this.size - 1);
    this.size--;
    this._maxHeapify(0);
    return result;
  };

  insert = (val) => {
    this.size++;
    this.arr.push(-INFTY);
    this._increaseVal(this.size - 1, val);
  };

  heapSort = () => {
    let index = this.size - 1;
    while (index > -1) {
      this._swap(0, index);
      this.size--;
      this._maxHeapify(0);
      index--;
    }
  };
}

const arr = [6, 3, 18, 8, 1, 13];
const heap = new Heap(arr);
console.log(heap.arr);

const x = heap.extractMax();
console.log(x);
console.log(heap.arr);

heap.insert(10);
console.log(heap.arr);

heap.heapSort();
console.log(heap.arr);
