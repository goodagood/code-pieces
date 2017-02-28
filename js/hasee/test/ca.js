function Tree(name) {
  this.name = name;
}

Tree.prototype.grow = function(height){
    if (height) this.height = height;
};

var theTree = new Tree('Redwood');
console.log('theTree.constructor is ' + theTree.constructor);


function SmallTree(name){
    Tree.call(this);
}

SmallTree.prototype = Object.create(Tree.prototype);
SmallTree.prototype.constructor = SmallTree;

SmallTree.prototype.grow = function(height){
    //if (height) this.height = height;
    Tree.prototype.grow.call(this, height);
};
