function test() {
  const stack = new Stack();
  stack.push('사나');
  stack.push('미나');
  stack.push('모모');
  console.log(stack.data)
  console.log(stack.pop());
  stack.push('다현');
  console.log(stack.data);
  console.log(stack.peek());
  console.log(stack.data);
  stack.clear();
  console.log(stack.peek());
  console.log(stack.data);
}

/* 회문 검사 */
function isPaindrome(word) {
  const result = word; //비교군
  const arrayWord = word.split('');
  const stack = new Stack();
  arrayWord.forEach(item => stack.push(item));
  let reversWord = '';
  arrayWord.forEach(item => {
    reversWord += stack.pop();
  });
  return result === reversWord;
}