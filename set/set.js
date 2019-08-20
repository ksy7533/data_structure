/*
* 집합
* 정의
* - 고유한 요소의 모임을 집합이라 한다.
* - 집합의 요소를 멤버라한다.
*- 집합의 멤버는 고유하다  
* - 멤버가 하나도 없는 집합을 빈집합이라 한다.
* - 집합에 포함될수 있는 모든 멤버를 포함하는 집합을 유니버스라 한다
* - 두 집합의 멤버가 정확하게 같을 때만 집합으로 간주한다
* - 한 집합의 모든 멤버가 다른 집합에 포함되어 있을때 서브집합이라 한다.
*/

function Set() {
  this.dataStore = [];
}

/*
* 집합에 멤버를 추가한다. 
*/
Set.prototype.add = function(item) {
  if(this.dataStore.indexOf(item) < 0) {
    this.dataStore.push(item);
    return true;
  } else {
    return false;
  }
}

/*
* 집합에 멤버를 삭제한다.
*/
Set.prototype.remove = function(item) {
  const pos = this.dataStore.indexOf(item);
  if(pos > -1) {
    this.dataStore.splice(pos, 1);
    return true;
  } else {
    return false;
  }
}

/*
* 집합에 멤버를 보여준다.
*/
Set.prototype.show = function() {
  return this.dataStore;
}

/*
* 집합에 해당 멤버 요소가 있는지 확인
*/
Set.prototype.contains = function(item) {
  const pos = this.dataStore.indexOf(item);
  if(pos > -1) {
    return true;
  } else {
    return false;
  }
}

/*
* 합집합
*/
Set.prototype.union = function(set) {
  const tempSet = new Set();
  this.dataStore.forEach(item => {
    tempSet.add(item);
  });
  const members = set.show();
  members.forEach(item => {
    if(!tempSet.contains(item)) tempSet.add(item);
  });
  return tempSet;
}

/*
* 교집합
*/
Set.prototype.intersect = function(set) {
  const tempSet = new Set();
  this.dataStore.forEach(item => {
    if(set.contains(item)) tempSet.add(item);
  });
  return tempSet;
}
