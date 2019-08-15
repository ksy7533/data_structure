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
  console.log(twice.currentNode);
  twice.advance(2);
  console.log(twice.currentNode);
};


/*
  조세퍼스 문제는 다음과 같다.

  1번부터 N번까지 N명의 사람이 원을 이루면서 앉아있고, 양의 정수 K(≤ N)가 주어진다.
  이제 순서대로 K번째 사람을 제거한다. 한 사람이 제거되면 남은 사람들로 이루어진 원을 따라 이 과정을 계속해 나간다.
  이 과정은 N명의 사람이 모두 제거될 때까지 계속된다. 원에서 사람들이 제거되는 순서를 (N, K)-조세퍼스 순열이라고 한다.

  예를 들어 (7, 3)-조세퍼스 순열은 <3, 6, 2, 7, 5, 1, 4>이다.

  N과 K가 주어지면 (N, K)-조세퍼스 순열을 구하는 프로그램을 작성하시오.
*/


function josephusProblem(num, intervalNum) {
  let result = []; // 출력 결과물
  const circleList = new CLList();
  for(let i = 1; i <= num; i++) {
    circleList.insert(i, circleList.currentNode.element);
    circleList.advance(1);
  }
  while(circleList.head.next !== circleList.head) {
    circleList.advance(intervalNum);
    result.push(circleList.currentNode.element);
    circleList.remove(circleList.currentNode.element);
  }
  console.log(result)
}