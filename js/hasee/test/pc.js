
var fs = require('fs');
var q  = require('q');


function doSomethingAsync(something) {
  var deferred = q.defer();

  setTimeout(function() {
    deferred.resolve('hello ' + something);
  }, 500);

  return deferred.promise;
}

doSomethingAsync('first').then(
        function(what){
            console.log(what, Date.now());
            return new doSomethingAsync('2nd');
        }
    ).then(
        function(what){
            console.log(what, Date.now());
            return new doSomethingAsync('3rd');
        }
    ).done(
        function(what){
            console.log(what, Date.now());
        }

    );
