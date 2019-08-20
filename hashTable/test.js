function test() {
  let someName = ['David', 'Jennifer', 'Donnie', 'Raymond', 'Cynthia', 'Mike', 'Clayton'];
  const hTable = new HashTable();
  someName.forEach(item => {
    hTable.put(item);
  })
  hTable.showDistro();
}


function separateChaningTest() {
  let someName = ['David', 'Jennifer', 'Donnie', 'Raymond', 'Cynthia', 'Mike', 'Clayton'];
  const hTable = new HashTable();
  someName.forEach(item => {
    hTable.put(item);
  })
  hTable.showDistro();
}