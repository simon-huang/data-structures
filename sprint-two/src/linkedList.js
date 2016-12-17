var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.count = 0;

  list.addToTail = function(value) {
    var newNode = Node(value); 
    if (list.head === null) {
      list.head = newNode;
    }
    if (list.count === 1) {
      newNode.previous = list.tail;
      list.head.next = newNode;
    
    } else if (list.count > 1) {
      newNode.previous = list.tail;
      list.tail.next = newNode;
    }

    list.tail = newNode;
    list.count++;
  };

  list.addToHead = function(value) {
    var newNode = Node(value);
    if (list.tail === null) {
      list.tail = newNode;
    }
    if (list.head !== null) {
      list.head.previous = newNode;
      newNode.next = list.head;
    }
    list.head = newNode;
    list.count++;
  };

  list.removeHead = function() {
    var currentHeadValue = list.head.value;
    list.head = list.head.next;
    list.count--;
    return currentHeadValue;
  };

  list.removeTail = function() {
    var currentTailValue = list.tail.value;
    list.tail = list.tail.previous;
    list.count--;
    return currentTailValue;
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
  node.previous = null;
  return node;
};

/*
Complexity: What is the time complexity of the above functions?
addToTail, addToHead, removeHead, remove Tail = O(1)
contains = O(n)
*/