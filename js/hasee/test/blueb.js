var bb = require('bluebird');
var Promise = bb;

// callback with error:
function async_a(time, callback){
  var random = Math.random() * 1000;
  time = time || random;

  setTimeout(function(){
    console.log('time to happen at: ', time);
    callback('this is an error', time);
  }, time);
}

var promised_async_a = bb.promisify(async_a);

function test_a(){
  promised_async_a(888).then(
      function(resolve){ 
        console.log(resolve); 
        return resolve;
      }, function(reject ){ console.log('GOT reject: ', reject ); }
  ).catch(function(e){
    console.log('CAUGHT a e: ', e);
  });

}


if(require.main === module){
  //async_a(333, function(err, time){console.log(err, time);});

  test_a();

  //b();
}
