

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {
    value: node,
    edges: []
  };
  this.nodes.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      this.nodes.splice(i, 1);
    }
  }
};
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var fromNodeBool = false;
  var toNodeBool = false;
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      if (this.nodes[i].edges.indexOf(toNode) > -1) {
        fromNodeBool = true;
      }
    }
    if (this.nodes[i].value === toNode) {
      if (_.contains(this.nodes[i].edges, fromNode)) {
        toNodeBool = true;
      }
    }
  }
  return fromNodeBool && toNodeBool;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      this.nodes[i].edges.push(toNode);
    }
    if (this.nodes[i].value === toNode) {
      this.nodes[i].edges.push(fromNode);
    }
  }

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      this.nodes[i].edges.splice(0, i);
    }
    if (this.nodes[i].value === toNode) {
      this.nodes[i].edges.splice(i, 1);
    }
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(function(el) {
    cb(el.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode = O(1) 
 contains, removeNode, hasEdge, addEdge, removeEdge, forEachNode = O(n) 
 */


