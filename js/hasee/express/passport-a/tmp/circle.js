////a.js:
//
//console.log('a starting');
//exports.done = false;
//var b = require('./b.js');
//console.log('in a, b.done = %j', b.done);
//exports.done = true;
//console.log('a done');
//
////b.js:
//
//console.log('b starting');
//exports.done = false;
//var a = require('./a.js');
//console.log('in b, a.done = %j', a.done);
//exports.done = true;
//console.log('b done');

//circle.js:

console.log('main starting');
var a = require('./a.js');
console.log('main going to require b');
var b = require('./b.js');
console.log('in main, a.done=%j, b.done=%j', a.done, b.done);
