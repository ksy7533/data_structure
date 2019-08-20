function test() {
  const twice = new Set();
  twice.add('사나');
  twice.add('모모');
  twice.add('지효');
  console.log(twice.show());
  if(twice.add('모모')) {
    console.log('추가했습니다')
  } else {
    console.log('집합에 이미 존재합니다');
  }
  twice.remove('사나');
  console.log(twice.show());
}