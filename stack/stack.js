function Stack() {
  this.data = [];
  this.top = 0;
}

/* 맨 위 아이템 추가 */
Stack.prototype.push = function(item) {
  this.data[this.top] = item;
  this.top++;
}

/* 맨 위 아이템 반환하고 top-- */
Stack.prototype.pop = function() {
  this.top--;
  return this.data[this.top];
}

/* 맨 위 아이템 반환만 */
Stack.prototype.peek = function() {
  return this.data[this.top - 1];
}

/* 데이터 길이 */
Stack.prototype.length = function() {
  return this.top;
}

/* 데이터 전체 삭제 */
Stack.prototype.clear = function() {
  this.top = 0;
}

