var bb = require('bluebird');
var Promise = bb;

// callback with error:
function async_a(time, err, callback){
    // 
  var random = Math.random() * 1000;
  time = time || random;
  if(typeof err === 'undefined')  err = random > 500;

  setTimeout(function(){
    console.log('timed to happen at: ', time);
    if(err) return callback('this is an error', time);
    callback(null, time);
  }, time);
}

var promised_async_a = Promise.promisify(async_a);

function test_a(){
  promised_async_a(888, null).then
    (
     function(resolve){ 
       console.log(1); 
       console.log(resolve); 
       return promised_async_a(55, false); 
       //return resolve;
     } 
    ).then
    (
     function(pro){ 
       console.log(1.1); 
       console.log(pro); 
       //return promised_async_a(56, false);
       return new Promise(function(res){
         promised_async_a(1.11, false).then
         (
          function(what){
            console.log('1.11 is running ');
            return 'continue 1.11';
          }
         ).then
         (
          function(what){
            console.log('1.1.2 is running ');
            return 'continue 1.1.2';
          }
         ).then
         (
          function(what){
            res('1.1.3 to do what');
          }
         ).catch
         (
          function(e){
            rej('err in 1.1...');
          }
         );
       });
     } 
    ).then
    (
     function(pro){ 
       console.log(1.2); 
       console.log(pro); 
       return promised_async_a(56, false);
     } 
    ).then
    (
     function(resolve){ 
       console.log(2); 
       console.log(resolve); 
       return resolve;
     } 
    ).catch(function(e){
      console.log('CAUGHT a e: ', e);
    });

}


if(require.main === module){
  //async_a(333, function(err, time){console.log(err, time);});

  test_a();

  //b();
}

// vim: et ts=2 sw=2:
