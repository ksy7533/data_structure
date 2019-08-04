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

function Patient(name, priority) {
  this.name = name;
  this.priority = priority;
}

function testPriorityQueue() {
  console.log('================')
  const queue = new PriorityQueue();
  queue.enqueue(new Patient('정현', 3));
  queue.enqueue(new Patient('사나', 2));
  queue.enqueue(new Patient('모모', 2));
  queue.enqueue(new Patient('미나', 1));
  queue.enqueue(new Patient('청하', 3));
  console.log(queue.toString());
  console.log(queue.dequeue());
  console.log(queue.toString());
  console.log(queue.front());
  console.log(queue.end());
  console.log(queue.empty());
  console.log('================')
}