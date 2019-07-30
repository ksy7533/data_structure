/*
  * list 테스트 하기
  */

function test() {
  const testList = new List();

  testList.appendItem('사나');
  testList.appendItem('모모');
  testList.appendItem('미나');
  console.log('expected ', '사나, 모모, 미나');
  console.log(testList.toString());
  console.log(testList.length());
  tourList();

  testList.insertItem('사나', '다현');
  testList.removeItem('사나');
  console.log('expected ', '다현, 모모, 미나');
  console.log(testList.toString());
  console.log(testList.length());
  tourList();

  testList.clear();
  console.log(testList.toString());
  console.log(testList.length());
  tourList();

  // list 순회하기
  function tourList(){
    for(testList.front(); testList.currentPos() < testList.length(); testList.next()) {
      console.log(testList.currentItem());
    }
  }
};