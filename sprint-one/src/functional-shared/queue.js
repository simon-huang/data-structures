var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.index = 0;

  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};


queueMethods['enqueue'] = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

queueMethods['dequeue'] = function() {

  if (this.index > 0) {
    this.index--;
    var result = this.storage[0];
    for (var i = 0; i < this.index; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    return result;
  } 

};

queueMethods['size'] = function() {
  return this.index;
};
