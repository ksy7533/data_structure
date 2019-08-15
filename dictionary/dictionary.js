/**
 * datastore를 배열로 만든후 원소를 추가하는 것이 아니라 속성값을 추가한다.
 */

function Dictionary() {
  this.datastore = new Array();
}

Dictionary.prototype.add = function(key, value) {
  this.datastore[key] = value;
}

Dictionary.prototype.find = function(key) {
  return this.datastore[key];
}

Dictionary.prototype.remove = function(key) {
  delete this.datastore[key];
}

Dictionary.prototype.showAll = function() {
  Object.keys(this.datastore).sort().forEach(key => console.log(key + ' = ' + this.datastore[key]));
}

/* 항목의 갯수 출력 */
Dictionary.prototype.count = function() {
  let num = 0;
  Object.keys(this.datastore).forEach(key => num++);
  return num;
}

Dictionary.prototype.clear = function() {
  Object.keys(this.datastore).forEach(key => delete this.datastore[key]);
}


