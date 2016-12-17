var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = []; 
  newTree.parent = null; 
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newT = Tree(value);
  newT.parent = this;
  this.children.push(newT);

};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    } 
  }
  return false;
};

treeMethods.removeFromParent = function() {
  var parent = this.parent;
  for (var i = 0; i < parent.children.length; i++) {
    if (parent.children[i].value === this.value) {
      parent.children.splice(i, 1);
    }
  }
  this.parent = null;
  // access tree's parent
  // loop through parent's children array
  // if the value of the tree at the current index is equal to our child tree's value
  // then we splice it from the children array
};
treeMethods.traverse = function(callback) {
// take a callback and start on tree
// execute callback on value of the tree
// if the tree has children, we want to run the callback on the children
// loop through tree's children
  if (this.value !== undefined) {
    callback(this.value);
  }
  if (this.children.length === 0) {
    return;
  }
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverse(callback);
  }
  //forloop
    //call traverse on each el
};
//
/*
 * Complexity: What is the time complexity of the above functions?
 addChild = O(1)
 contains = O(n)
 */

// Implement a .traverse() method on your tree. 
// Your .traverse() should accept a callback and 
// execute it on every value contained in the tree
