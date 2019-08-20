/**
 * 해싱은 데이터를 빠르게 삽입하거나 저장된 데이터를 가져올 때 주로 사용한다
 * 빠르게 데이터를 삽입, 삭제, 가져올 수는 있지만 최솟값이나 최대값찾는 검색동작은 효율이 떨어진다.
 * 해시충돌을 피하기 위해서는 해시 테이블에서 사용하는 배열의 크기가 소수여야 한다.
 * 테이블에서 키가 균등하게 분포하려면 배열의 크기가 100이상이어야 한다
 */

function HashTable() {
  this.table = new Array(137);
};

/**
 * 중복된 해시값을 가진 요소들을 처리하기 위해 2차원 배열 설정
 */
// HashTable.prototype.buildChains = function() {
//   this.table.forEach(item => item = new Array());
//   console.log(this.table)
// }

HashTable.prototype.simpleHash = function(data) {
  let total = 0;
  for (let i = 0; i< data.length; i++) {
    total += data.charCodeAt(i);
  }
  return total  % this.table.length;
}

/**
 * 호너의 메서드 알고리즘 적용
 * 
 */
HashTable.prototype.betterHash = function(data) {
  let total = 0;
  const H = 37;
  for (let i = 0; i< data.length; i++) {
    total += total * H + data.charCodeAt(i);
  }
  return total  % this.table.length;
}

HashTable.prototype.put = function(data) {
  // const pos = this.simpleHash(data);
  // const pos = this.betterHash(data);
  // this.table[pos] = data;

  const pos = this.simpleHash(data);
  if(this.table[pos] === undefined) {
    this.table[pos] = new Array();
  }
  this.table[pos].push(data);
}

/**
 * 데이터 가져오기
 */
HashTable.prototype.get = function(key) {
  return this.table[this.betterHash(key)];
}

HashTable.prototype.showDistro = function() {
  for(let i = 0; i < this.table.length; i++) {
    if(this.table[i] !== undefined) {
      console.log(i + " : " + this.table[i]);
    }
  }
}