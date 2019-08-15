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
  Object.keys(this.datastore).forEach(key => console.log(key + ' = ' + this.datastore[key]));
}