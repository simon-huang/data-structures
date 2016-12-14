var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = [];
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {

    size++;
    storage.push(value);
  };

  someInstance.dequeue = function() {

    if (size > 0) {
      size--;
      return storage.shift();
    } 


  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
// AssertionError: expected 'a' to equal 'b'
// queue.enqueue('a');
// queue.enqueue('b');
// queue.dequeue();
// queue.enqueue('c');
// expect(queue.dequeue()).to.equal('b');