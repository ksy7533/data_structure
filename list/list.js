function List() {
  this.data = []; // 데이터 저장 형식
  this.pos = 0; // 현재 데이터 포지션값
  this.listSize = 0; // listSize
}

/*
* list 뒤에 item 추가
*/
List.prototype.appendItem = function(item) {
  this.data.push(item);
  this.listSize++;
}

/*
* 인자로 받은 item의 위치값 반환
*/
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

/*
* 첫번째 인자로 받은 item 뒤에 item 추가
*/
List.prototype.insertItem = function(beforeItem, insertItem) {
  const beforeIndexIndex = this.findItemPos(beforeItem);
  if(!beforeIndexIndex === -1) return false;
  this.data.splice(beforeIndexIndex, 0, insertItem);
  this.listSize++;
  return true;
}

/*
* 해당하는 item을 찾아서 삭제
*/
List.prototype.removeItem = function(item) {
  const itemIndex = this.findItemPos(item);
  if(!itemIndex === -1) return false;
  this.data.splice(itemIndex, 1);
  this.listSize--;
  return true;
}

/*
* list에 해당하는 item이 있는지 확인
*/
List.prototype.contains = function(findItem) {
  const findIndexNum = this.data.findIndex(item => item === findItem)
  return findIndexNum > -1 ? true : false;
}

/*
* list사이즈를 반환
*/
List.prototype.length = function() {
  return this.listSize;
}


/*
* list 초기화
*/
List.prototype.clear = function() {
  delete this.data;
  this.listSize = 0;
  this.pos = 0;
  this.data = [];
}

// 탐색 메소드

/*
* 첫번째 위치로 이동
*/
List.prototype.front = function() {
  this.pos = 0;
}

/*
* 마지막 위치로 이동
*/
List.prototype.end = function() {
  this.pos = this.listSize - 1;
}

/*
* 현재 pos의 다음 위치로 이동
*/
List.prototype.next = function() {
  if(this.listSize === this.pos) return;
  this.pos++;
}

/*
* 현재 pos의 이전 위치로 이동
*/
List.prototype.prev = function() {
  if(this.pos === -1) return;
  this.pos--;
}

/*
* 현재 pos의 위치값 반환
*/
List.prototype.currentPos = function() {
  return this.pos;
}

/*
* 해당 position으로 이동
*/
List.prototype.moveToPos = function(position) {
  this.pos = position;
}

/*
* 현재 item 반환
*/
List.prototype.currentItem = function() {
  return this.data[this.pos];
}

/*
* list의 모든 요소 출력
*/
List.prototype.toString = function() {
  return this.data;
}