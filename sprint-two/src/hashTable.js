

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  /*
  if (retrieve(index))
  create a holder variable and set the retrieve(index)
  create an array to put in the bucket
  put an object for the original contents of the buket into the 
  new bucket array
  create an object for the key value pair we are newly inserting
  put that object into the bucket array

  else
  */
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
    /*
  if (retrieve(index) is in array)
  still retrieve what's there and set it ot a holder variable
  loop through the holder variable
  look for the variable with the same key as the input
  if one is there, that is the value
  if you can't find one, then it's the object with the 
  create a holder variable and set the retrieve(index)
  create an array to put in the bucket
  put an object for the original contents of the buket into the 
  new bucket array
  create an object for the key value pair we are newly inserting
  put that object into the bucket array

  else
  */
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};


var getIndexBelowMaxForKey1 = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return '*' + (hash % max);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


