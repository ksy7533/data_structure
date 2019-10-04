function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
}

Node.prototype.show = function() {
  return this.data;
}

function BinaryTree() {
  this.root = null;
}

BinaryTree.prototype.insert = function(data) {
  const newNode = new Node(data, null, null);
  if(this.root === null) {
    this.root = newNode;
  }else {
    let currentNode = this.root;
    let parentNode;
    while(true) {
      parentNode = currentNode;
      if(data < currentNode.data) {
        currentNode = currentNode.left;
        if(currentNode === null) {
          parentNode.left = newNode;
          break;
        }
      } else {
        currentNode = currentNode.right;
        if(currentNode === null) {
          parentNode.right = newNode;
          break;
        }
      }
    }
  }
}