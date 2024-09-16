class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let currentNode = this.root;
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    while (currentNode) {
      if (val < currentNode.val) {
        if (currentNode.left === null) {
          currentNode.left = new Node(val);
          return this;
        } else {
          currentNode = currentNode.left;
        }
      } else if (val > currentNode.val) {
        if (currentNode.right === null) {
          currentNode.right = new Node(val);
          return this;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val < currentNode.val) {
      if (currentNode.left === null) {
        currentNode.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, currentNode.left);
    } else {
      if (val > currentNode.val) {
        if (currentNode.right === null) {
          currentNode.right = new Node(val);
          return this;
        }
        return this.insertRecursively(val, currentNode.right);
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.val === val) return currentNode;
      currentNode =
        val < currentNode.val ? currentNode.left : currentNode.right;
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {
    if (this.root === null) return undefined;
    if (val < currentNode.val) {
      if (currentNode.left === null) return undefined;
      return this.findRecursively(val, currentNode.left);
    } else {
      if (val > currentNode.val) {
        if (currentNode.right === null) return undefined;
        return this.findRecursively(val, currentNode.right);
      }
    }
    return currentNode;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(currNode = this.root, arr = []) {
    arr.push(currNode.val);
    if (currNode.left) this.dfsPreOrder(currNode.left, arr);
    if (currNode.right) this.dfsPreOrder(currNode.right, arr);
    return arr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(currNode = this.root, arr = []) {
    if (currNode.left) this.dfsInOrder(currNode.left, arr);
    arr.push(currNode.val);
    if (currNode.right) this.dfsInOrder(currNode.right, arr);
    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(currNode = this.root, arr = []) {
    if (currNode.left) this.dfsPostOrder(currNode.left, arr);
    if (currNode.right) this.dfsPostOrder(currNode.right, arr);
    arr.push(currNode.val);
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let currentNode = this.root;
    let queue = [];
    let arr = [];

    queue.push(currentNode);

    while (queue.length) {
      let currentNode = queue.shift();
      arr.push(currentNode.val);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return arr;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
