function Queue() {
  this.data = [];
}

/* 큐 맨 뒤에 추가 */
Queue.prototype.enqueue = function(item) {
  this.data.push(item);
}

/* 큐 맨 앞에 원소 반환  */
Queue.prototype.dequeue = function() {
  return this.data.shift();
}

/* 큐 맨 앞에 원소 확인  */
Queue.prototype.front = function() {
  return this.data[0];
}

/* 큐 맨 뒤에 원소 확인  */
Queue.prototype.end = function() {
  return this.data[this.data.length - 1];
}

/* 큐 출력 */
Queue.prototype.toString = function() {
  let str = '';
  this.data.forEach(item => str += ` ${item}`);
  return str;
}

/* 큐가 비었는지 확인 */
Queue.prototype.empty = function() {
  return this.data.length === 0;
}

