var util = require('util');

// Constructor
function MyClass() {
  this.a = 42;
}

// Method
MyClass.prototype.method = function method() {};

// Instantiate
this.instance = new MyClass();

console.log( util.inspect(this.instance, {showHidden:true, depth:3}));
