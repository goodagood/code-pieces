
var Promise  = require('bluebird');

function pa(){
  return new Promise(function(resolve, reject){
    var lap = Math.random() * 100;
    setTimeout(function(){
      resolve(lap);
    }, lap);
  });
}

pa().then(function(what){
  console.log(what);
}).then(function(what){
  console.log(what);
}).then(function(what){
  console.log(what);
});
