
var oc = require('./objclosure')();

console.log( oc.geta());
oc.seta('new a');
console.log( oc.geta());

console.log( oc.getout());
oc.setout(999);
console.log( oc.getout());
