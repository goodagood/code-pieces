
var filename = '/tmp/ja.json';
var q        = require('q');
var fs       = require('fs');

// `promise` is some operation that may succeed (fulfill) or fail (reject)
var newPromise = promise.then(
        function () {
            return delay(1000);
        },
        writeError
        );

// If `promise` fulfills, `newPromise` will fulfill in 1000 ms.
// If `promise` rejects and writing to the error log succeeds,
// `newPromise` will fulfill: you transformed the rejection into fulfillment by handling it,
// similar to `try`/`catch`.
// If `promise` rejects and writing to the error log fails,
// `newPromise` will reject with the filesystem-related error: just as if
// code inside your `catch` block had thrown.


// Writes to errors.log, returning a promise that will be fulfilled if the write succeeds
// or rejected if the write fails.
function writeError(errMessage) {
    var deferred = Q.defer();
    fs.writeFile("errors.log", errMessage, function (err) {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve();
        }
    });
    return deferred.promise;
}

// (or, using Q.nfcall:)

function writeError(errMessage) {
    return Q.nfcall(fs.writeFile, "errors.log", errMessage);
}

// returns a promise that will be fulfilled in `ms` milliseconds
function delay(ms) {
    var deferred = Q.defer();
    setTimeout(deferred.resolve, ms);
    return deferred.promise;
}
