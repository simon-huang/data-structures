var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {

    if (size > 0) {
      size--;
      var result = storage[0];
      for (var i = 0; i < size; i++) {
        storage[i] = storage[i + 1];
      }
      return result;
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