var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    size++;
    storage[size] = value;
    console.log(storage);
  };

  someInstance.pop = function() {
    if (size > 0) {
      size--;
    }
    return storage[1];
    delete storage[0];
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};


        // stack.push('a');
        // expect(stack.pop()).to.equal('a');
        // stack.push('b');
        // expect(stack.pop()).to.equal('b');