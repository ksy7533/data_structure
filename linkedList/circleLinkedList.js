function Node(element) {
  this.element = element;
  this.next = null;
}

function CLList() {
  this.head = new Node('head');
  this.head.next = this.head;
  this.currentNode = this.head;
}

/* 노드 찾기 */
CLList.prototype.find = function(item) {
  let currentNode = this.head;
  while(currentNode.element !== item) {
    currentNode = currentNode.next;
  }
  return currentNode;
}

/* node 끼워넣기 */
CLList.prototype.insert = function(newElement, item) {
  const beforeInsertItem = this.find(item);
  const newNode = new Node(newElement);
  newNode.next = beforeInsertItem.next;
  beforeInsertItem.next = newNode;
}

/* linked list 순회 출력 */
CLList.prototype.display = function() {
  let currentNode = this.head;
  while(currentNode.next !== null && currentNode.next.element !== 'head') {
    console.log(currentNode.next.element);
    currentNode = currentNode.next;
  }
}

/* 이전 엘리멘트 찾기 */
CLList.prototype.findPrevious = function(item) {
  let currentNode = this.head;
  while(currentNode.element !== null && currentNode.next.element !== item) {
    currentNode = currentNode.next;
  }
  return currentNode;
}

/* 엘리멘트 삭제 */
CLList.prototype.remove = function(item) {
  let findPrevNode = this.findPrevious(item);
  if(findPrevNode !== null) {
    findPrevNode.next = findPrevNode.next.next;
  }
}

/* n노드만큼 전진 */
CLList.prototype.advance = function(n) {
  for(let i = 0; i < n; i++) {
    this.currentNode = this.currentNode.next;
    if(this.currentNode === this.head) {
      this.currentNode = this.currentNode.next;
    }
  }
}

