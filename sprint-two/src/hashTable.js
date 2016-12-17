

var HashTable = function() {
  this._limit = 4;
  this._storage = LimitedArray(this._limit);
  //indexes/buckets that have had douples inserted
  this._filled = [];
};

HashTable.prototype.resize = function() {
  // this._limit *= v;
  var allDouples = [];
  var bucket;
  var table = this;
  //get every filled bucket and add those douples to array of all douples
  _.each(this._filled, function(filledIndexInHash) {
    //console.log(this);
    bucket = table._storage.get(filledIndexInHash);
    _.each(bucket, function(doupleInBucket) {
      allDouples.push(doupleInBucket);
    });
    //console.log(bucket);
    // for (var i = 0; i < bucket.length; i++) {
    //   console.log(bucket);
    //   allDouples.push(bucket[i]);
    // }
  });
  this._filled = [];
  this._storage = LimitedArray(this._limit);
  //use this.insert on all elements in allDouples
  _.each(allDouples, function(douple) {
    //console.log(this);
    table.insert(douple[0], douple[1]);
  });
};


HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var isThere = false;
  var bucket;
  if ( this._storage.get(index) === undefined ) {
    bucket = [];
  } else {
    bucket = this._storage.get(index);
  }

  if (bucket.length === 0) {
    this._filled.push(index);
  }

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      isThere = true;
    }
  }
  if (!isThere) {
    bucket.push([k, v]);
  }

  this._storage.set(index, bucket);
  //console.log(this._filled);
  if (this._filled.length >= this._limit * .75) {
    //console.log('too much');
    this._limit *= 2;
    this.resize();
  }
  // if (this._filled.length <= this._limit * .25) {
  //   //console.log('too much');
  //   this.resize(.5);
  // }

};

HashTable.prototype.retrieve = function(k) {
  //use the original key and length of ht to get hash that corresponds to index in hash table
  //retrieve entire bucket at that index
  //traverse bucket, examining all keys 
    // if we find input key in bucket,
      // return the value
  // if we can't find it, return undef   
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    return;
  }
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
  // why is this unnecessary?
  //this._storage.set(index, bucket);

  if (bucket.length === 0) {
    var indexInArrayOfFilledBuckets = _.indexOf(this._filled, index);
    this._filled.splice(indexInArrayOfFilledBuckets, 1);
  }

  if (this._filled.length <= this._limit * .25) {
    this._limit = Math.max((this._limit * .5), 4);
    this.resize();
  }
  // if (this._filled.length <= this._limit * .25) {
  //   //console.log('too much');
  //   this.resize(.5);
  // }

  /*
  get index by calling hashing function using k and limit
  needs to access the storage at index
  set bucket to variable to work with it
  for each element in bucket
  if element's key is equal to k
  then remove this element 
  */
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
  insert, retrieve, remove = usually O(1) but worst case O(n)
 */


