var fs = require('fs');
var q  = require('q');

var filename = '/tmp/ja.json';

fs.stat(filename, function (error, value) {
    if (error) {
        console.log(' error');
    } else {
        console.log(' ok');
        console.log(value);
    }
});



function doSomethingAsync() {
  var deferred = q.defer();
  setTimeout(function() {
    deferred.resolve('hello world');
  }, 500);

  return deferred.promise;
}

doSomethingAsync().then(function(val) {
  console.log('Promise Resolved!', val);
});
