var data = [];

function List() {
  this.data = []; // 데이터 저장 형식
  this.pos = 0; // 현재 데이터 포지션값
  this.listSize = 0; // listSize
}

List.prototype.appendItem = function(item) {
  data.push(item);
  this.listSize++;
}

List.prototype.findItemPos = function(findItem) {
  let findIndex = -1;
  this.data.some((item, index) => {
    if(findItem === item) {
      findIndex = index;
      return true;
    }
  });
  return findIndex;
}

List.prototype.insertItem = function(beforeItem, insertItem) {
  const beforeIndexIndex = this.findItemPos(beforeItem);
  this.data.splice(beforeIndexIndex, 1, insertItem);
  this.listSize++;
}

List.prototype.removeItem = function(item) {
  const itemIndex = this.findItemPos(beforeItem);
  this.data.splice(itemIndex, 1);
  this.listSize--;
}

List.prototype.nextItem = function() {
  if(this.listSize === pos) {
    this.pos = 0;
  } else {
    this.pos++;
  }
  return this.data[this.pos];
}

List.prototype.prevItem = function() {
  if(this.listSize === 0) {
    this.pos = this.listSize - 1;
  } else {
    this.pos--;
  }
  return this.data[this.pos];
}

List.prototype.getFirstItem = function() {
  return this.data[0];
}

List.prototype.getLastItem = function() {
  return this.data[listSize - 1];
}

