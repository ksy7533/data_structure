function test() {
  var bts = new BinaryTree();
  
  bts.insert(20);
  bts.insert(19);
  bts.insert(1);
  bts.insert(6);
  bts.insert(66);
  bts.insert(33);
  bts.insert(90);

  /*
  *         20
  *        /  \
  *      19    66
  *     /     /  \
  *    1     33   90
  *     \
  *      6
  */

  bts.inOrder(bts.root);
}