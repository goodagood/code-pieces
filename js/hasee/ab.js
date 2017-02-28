p   = console.log;

foo = "bar";

function testThis () {
  this.foo = "foo";
}

console.log(global.foo);
testThis();
console.log(global.foo);


p ('--');

p ('this === global', this === global);
p ('foo === global.foo', foo === global.foo);
