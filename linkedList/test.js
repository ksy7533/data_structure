/*
  * list 테스트 하기
  */

function test() {
  const twice = new LList();
  twice.insert('쯔위', 'head');
  twice.insert('다현', '쯔위');
  twice.insert('사나', '다현');
  // debugger
  twice.remove('다현');
  twice.display();
};