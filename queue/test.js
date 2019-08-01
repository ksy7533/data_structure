function test() {
  const queue = new Queue();
  queue.enqueue('사나');
  queue.enqueue('모모');
  queue.enqueue('미나');
  console.log(queue.toString());
  console.log(queue.dequeue());
  console.log(queue.toString());
  console.log(queue.front());
  console.log(queue.end());
  console.log(queue.empty());
}