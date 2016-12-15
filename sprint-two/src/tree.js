var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // if (!this.value) {
  //   this.value = value;
  // } else {
  this.children.push(Tree(value));
  // }

};

treeMethods.contains = function(target) {
  console.log(this);
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    } 
    //continue;
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
