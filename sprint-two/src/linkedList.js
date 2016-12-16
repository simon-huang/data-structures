var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.count = 0;

  list.addToTail = function(value) {
    var newTail = Node(value); 
    if (list.head === null) {
      list.head = newTail;
    }
    if (list.count === 1) {
      list.head.next = newTail;
    } else if (list.count > 1) {
      list.tail.next = newTail;
    }
    list.tail = newTail;
    list.count++;

  };

  list.removeHead = function() {
    var currentHeadValue = list.head.value;
    list.head = list.head.next;
    list.count--;
    return currentHeadValue;

  };

  list.contains = function(target) {
    var currentNode = list.head;
    for (var i = 0; i < list.count; i++) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = list.head.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
Complexity: What is the time complexity of the above functions?
addToTail = O(1)
removeHead = O(1)
contains = O(n)
*/