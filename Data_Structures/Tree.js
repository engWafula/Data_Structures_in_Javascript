function Tree (value) {
  this.value = value;
  this.children = [];
}

// Adds child to tree or subtree bound to this keyword
// O(1)
Tree.prototype.addChild = function(value) {
  var child = new Tree(value);
  this.children.push(child);
  return child;
};

var tree = new Tree(1);
var branch1 = tree.addChild(2);
var branch2 = tree.addChild(3);
var branch3 = tree.addChild(4);
branch1.addChild(5);
branch1.addChild(6);
branch3.addChild(7).addChild(8);

// O(n)
Tree.prototype.contains = function(value) {
  if (this.value === value) return true;
  for (var i=0; i<this.children.length; i++) {
    if (this.children[i].contains(value)) return true;
  }
  return false;
};

// O(n)
Tree.prototype.traverseDepthFirst = function(fn) {
  this.children.forEach(function(child) {
    child.traverseDepthFirst(fn);
  });
  fn(this);
}

var depthFirstResult = [];
tree.traverseDepthFirst(function(node) {
  depthFirstResult.push(node.value);
});
console.log(depthFirstResult, 'should be [5,6,2,3,8,7,4,1]');

// O(n)
Tree.prototype.traverseBreadthFirst = function(fn) {
  var queue = [this];
  while (queue.length) {
    var node = queue.shift();
    fn(node.value);
    node.children.forEach(function(child) {
      queue.push(child);
    });
  }
};

var breadthFirstResult = [];
tree.traverseBreadthFirst(function(node) {
  breadthFirstResult.push(node);
});
console.log(breadthFirstResult, 'should be [1,2,3,4,5,6,7,8]');