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