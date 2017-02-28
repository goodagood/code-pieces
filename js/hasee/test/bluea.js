var bb = require('bluebird');
var Promise = bb;

function async_a(time, callback){
  var random = Math.random() * 1000;
  time = time || random;

  setTimeout(function(){
    console.log('time to happen at: ', time);
    callback(null, time);
  }, time);
}

var promised_async_a = bb.promisify(async_a);

function a(){
  promised_async_a(888).then(
      function(resolve){ 
        console.log(resolve); 
        return resolve;
      },
      function(reject ){ console.log(reject ); }
  );

}


function async_b(time, callback){
  // return a promise

  var random = Math.random() * 1000;
  time = time || random;

  return new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log('time to happen at: ', time);
      if(time < 500) return reject(time);
      resolve(time);
    }, time);

  });

}

function b(){
  async_b().then(
      function(resolve){console.log('resolved at ', resolve); return resolve; },
      function(reject){ console.log('rejected at ', reject ); }
  ).then(
      function(resolve){console.log('resolved at ', resolve); },
      function(reject){ console.log('rejected at ', reject ); }
  );
}


if(require.main === module){
  //async_a(333, function(err, time){console.log(err, time);});

  a();

  //b();
}
