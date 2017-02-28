
var fs = require('fs');
var q  = require('q');

var P  = require('bluebird');

function do_something(what, callback) {
  setTimeout(function() {
    console.log('hello doing ' + what);
    var random = Math.random();
    callback(random);
  }, 500);
}

function b_do_something(what){
  //setTimeout(function() {
  //  console.log('hello doing ' + what);
  //  callback(what);
  //}, 500);

  var p = new P(function(resolve, reject){ 
    try{
      do_something(what, resolve);
    }
    catch(expt){
      reject(what);
    }
    finally{
    }
  });

  return p;
}


function q_doSomethingAsync() {
  var deferred = q.defer();
  setTimeout(function() {
    deferred.resolve('hello world');
  }, 500);

  return deferred.promise;
}


//doSomething(function(value) { console.log('Got a value:' + value); });


//do_something('first', function(value) { console.log('it is: ' + value); });

b_do_something('start').then(function(what){
  console.log(what);
});

// vim: et ts=2 sw=2:
