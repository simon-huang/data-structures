var Stack = {};
Stack.storage = {};
Stack.index = 0;

Stack.prototype['push'] = function(value) {
  Stack.storage[Stack.index] = value;
  Stack.index++;
};

Stack.prototype['pop'] = function() {
  if (Stack.index > 0) {
    Stack.index--;
    var result = Stack.storage[Stack.index];
    delete Stack.storage[Stack.index];
    return result;
  }
};

Stack.prototype['size'] = function() {
  return Stack.index;
};
