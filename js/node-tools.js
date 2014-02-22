
if(typeof util === 'undefined'){
  var util = require('util');
  console.log("Oh, util required again\n");
}

if(typeof clog === 'undefined'){
  var clog = console.log;
  var see  = util.inspect;
}
