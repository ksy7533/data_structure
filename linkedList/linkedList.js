function Node(element) {
  this.element = element;
  this.next = null;
}

function LList() {
  this.head = new Node('head');
}

/* 노드 찾기 */
LList.prototype.find = function(item) {
  let currentNode = this.head;
  while(currentNode.element !== item) {
    currentNode = currentNode.next;
  }
  return currentNode;
}

/* node 끼워넣기 */
LList.prototype.insert = function(newElement, item) {
  const beforeInsertItem = this.find(item);
  const newNode = new Node(newElement);
  newNode.next = beforeInsertItem.next;
  beforeInsertItem.next = newNode;
}

/* linked list 순회 출력 */
LList.prototype.display = function() {
  let currentNode = this.head;
  while(currentNode.next !== null) {
    console.log(currentNode.next.element);
    currentNode = currentNode.next;
  }
}

/* 이전 엘리멘트 찾기 */
LList.prototype.findPrevious = function(item) {
  let currentNode = this.head;
  while(currentNode.element !== null && currentNode.next.element !== item) {
    currentNode = currentNode.next;
  }
  return currentNode;
}

/* 엘리멘트 삭제 */
LList.prototype.remove = function(item) {
  let findPrevNode = this.findPrevious(item);
  if(findPrevNode !== null) {
    findPrevNode.next = findPrevNode.next.next;
  }
}