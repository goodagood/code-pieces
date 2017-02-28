var fs = require('fs');
var q  = require('q');

var filename = '/tmp/ja.json';


function promisify(nodeAsyncFn, context) {
  return function() {
    var defer = q.defer()
      , args = Array.prototype.slice.call(arguments);

    console.log('args 1 ', args);

    args.push(function(err, val) {
      if (err !== null) {
        return defer.reject(err);
      }

      return defer.resolve(val);
    });

    console.log('args 2 ', args);

    nodeAsyncFn.apply(context || {}, args);

    return defer.promise;
  };
};

var pstat = promisify(fs.stat);

pstat(filename);
process.exit();

pstat(filename).then(
        function(what){
            console.log(what);
        }
        );




