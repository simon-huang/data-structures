var Queue = function() {
  
  this.storage = {};
  this.index = 0;

};



Queue.prototype['enqueue'] = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

Queue.prototype['dequeue'] = function() {

  if (this.index > 0) {
    this.index--;
    var result = this.storage[0];
    for (var i = 0; i < this.index; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    return result;
  } 
};

Queue.prototype['size'] = function() {
  return this.index;
};

