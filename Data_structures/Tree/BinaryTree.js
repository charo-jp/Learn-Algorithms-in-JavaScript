class Node {
  constructor(val) {
    this.val = val;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(node) {
    if (this.root === null) {
      this.root = node;
    } else {
      let parent = this.root;
      while (true) {
        if (node.val < parent.val) {
          if (parent.left === null) {
            parent.left = node;
            break;
          }
          parent = parent.left;
        } else {
          if (parent.right === null) {
            parent.right = node;
            break;
          }
          parent = parent.right;
        }
      }
      node.parent = parent;
    }
  }

  transplant(node1, node2) {
    if (node1.parent === null) {
      this.root = node2;
    } else if (node1.parent.left === node1) {
      node1.parent.left = node2;
    } else {
      node1.parent.right = node2;
    }
    if (node2 !== null) {
      node2.parent = node1.parent;
    }
  }

  _findMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  delete(node) {
    if (node.left === null) {
      this.transplant(node, node.right);
    } else if (node.right === null) {
      this.transplant(node, node.left);
    } else {
      const y = this._findMin(node.right);
      if (y.parent != node) {
        this.transplant(y, y.right); // make y's parent left null;
        y.right = node.right;
        y.right.parent = y;
      }
      this.transplant(node, y);
      y.left = node.left;
      y.left.parent = y;
    }
  }

  traverse(node) {
    if (node !== null) {
      console.log(node.val);
      this.traverse(node.left);
      this.traverse(node.right);
    }
  }

  search(node, val) {
    let current = node;
    while (current !== null) {
      if (val > current.val) {
        current = current.right;
      } else if (val < current.val) {
        current = current.left;
      } else if (val === current.val) {
        return current;
      }
    }
    return null;
  }
}

const binarytree = new BinaryTree();

binarytree.insert(new Node(13));
binarytree.insert(new Node(7));
binarytree.insert(new Node(10));
binarytree.insert(new Node(22));
binarytree.insert(new Node(16));
binarytree.insert(new Node(3));
binarytree.insert(new Node(15));
binarytree.insert(new Node(19));
binarytree.insert(new Node(23));

binarytree.traverse(binarytree.root);

const x = binarytree.search(binarytree.root, 100);
const y = binarytree.search(binarytree.root, 13);
console.log(x);
// console.log(y);

binarytree.delete(y);
console.log("----------------------------------------");

binarytree.traverse(binarytree.root);
// fdakfd
