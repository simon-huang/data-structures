// var Stack = function() {
//   var someInstance = Object.create(Stack.stackMethods);

//   someInstance.storage = {};
//   someInstance.index = 0;

//   return someInstance;
// };

// Stack.stackMethods = {};

// Stack.stackMethods['push'] = function(value) {
//   this.storage[this.index] = value;
//   this.index++;
// };

// Stack.stackMethods['pop'] = function() {
//   if (this.index > 0) {
//     this.index--;
//     var result = this.storage[this.index];
//     delete this.storage[this.index];
//     return result;
//   }
// };

// Stack.stackMethods['size'] = function() {
//   return this.index;
// };


var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.index = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods['push'] = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

stackMethods['pop'] = function() {
  if (this.index > 0) {
    this.index--;
    var result = this.storage[this.index];
    delete this.storage[this.index];
    return result;
  }
};

stackMethods['size'] = function() {
  return this.index;
};