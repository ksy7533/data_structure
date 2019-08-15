function test() {
  const dic = new Dictionary();
  dic.add('사나', '24')
  dic.add('모모', '20')
  dic.add('미나', '18')
  dic.showAll();
  console.log(dic.count());
  dic.count();
  dic.remove('모모');
  dic.showAll();
  dic.clear();
  console.log(dic.count());
}

/*
인자로 받은 문자열의 포함된 단어의 갯수가 각각 몇개인지를 출력하라
*/
function countWord(str) {
  let tempArr = null;
  const dic = new Dictionary();
  tempArr = str.split(' ');
  tempArr.forEach(word => {
    if(!dic.find(word)) {
      dic.add(word, 1);
    } else {
      dic.datastore[word] = dic.find(word) + 1
    }
  });
  dic.showAll()
}