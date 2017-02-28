
var filename = '/tmp/ja.json';
var Q = require('q');
var fs      = require('fs');

var fs_readFile = Q.denodeify(fs.readFile);
var promise = fs_readFile(filename);

//promise.then(console.log, console.error);


function fs_readFile (file, encoding) {
  var deferred = Q.defer()
  fs.readFile(file, encoding, function (err, data) {
    if (err) deferred.reject(err) // rejects the promise with `er` as the reason
    else deferred.resolve(data) // fulfills the promise with `data` as the value
  })
  return deferred.promise // the promise is returned
}

fs_readFile(filename, 'utf-8')
    .then(
        console.log, console.error
        )
    .then(
            function(what){
                what.a = 1;
                console.log(what.a);
            },
            function(what){
                console.log(what.a);
            }
         )
    .then(
            function(what){
                what.a += 1;
                console.log(what.a);
            },
            function(what){
            }
         );
