var BinarySearchTree = function(value) {
  var newBinarySearchTree = {};
  newBinarySearchTree.value = value;
  newBinarySearchTree.left;
  newBinarySearchTree.right;
  _.extend(newBinarySearchTree, bsTreeMethods);
  return newBinarySearchTree;
};

var bsTreeMethods = {};
bsTreeMethods.insert = function(v) {
//probably recursive
  var direction;
  //check whether v is g/l than the value of the current tree
  this.value > v ? direction = 'left' : direction = 'right';
  //check if g/l is undefined
  if (!this[direction]) {
    //  call BinarySearchTree with v and set to this.g/l
    this[direction] = BinarySearchTree(v);
  } else {
    //if g/l is defined:
    //  call the insert method with v on the this.g/l tree
    this[direction].insert(v);
  }

};

bsTreeMethods.contains = function(v) {
  // check if current tree's value is equal to v
  var direction;
  if (this.value === v) {
    return true;
  } 
  // check whether v is g/l than the value of the current tree
  this.value > v ? direction = 'left' : direction = 'right';
  // if the tree at the direction is defined then 
  //  call contains on that tree
  if (this[direction] && this[direction].contains(v)) {
    return true;
  } 
  return false;
};

bsTreeMethods.depthFirstLog = function(f) {
  // execute the callback on our current tree
  f(this.value);
  // if this.left is defined
  // call depthFirstLog on this.left
  if (this.left) {
    this.left.depthFirstLog(f);
  }
  // same for right
  if (this.right) {
    this.right.depthFirstLog(f);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
  insert = O(log n)
  contains = O(log n)
  depthFirstLog = O(n)
 */
