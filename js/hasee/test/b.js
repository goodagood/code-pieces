
var filename = '/tmp/ja.json';

var fs      = require('fs');
var Promise = require('promise');

function readFile(filename, enc){
    return new Promise(function (fulfill, reject){
        fs.readFile(filename, enc, function (err, res){
            if (err) reject(err);
            else fulfill(res);
        });
    });
}


function readJSON(filename){
    return new Promise(function (fulfill, reject){
        //readFile(filename, 'utf8').done(function (res)
        readFile(filename, 'utf8').then(function (res){
            try {
                fulfill(JSON.parse(res));
            } catch (ex) {
                reject(ex);
            }
        }, reject);
    });
}


//function readJSON(filename){
//    return readFile(filename, 'utf8').then(function (res){
//        return JSON.parse(res);
//    });
//}

readJSON(filename)
.then(function(result){
    //console.log(result);
    console.log(typeof result);
}
)
.then(
        function(result){
            result.added = 9;
            console.log(result.added);
        },
        function(what){
            console.log('what ever: ', what);
        }
     )
.then(function(result){
    result.added += 9;
    console.log(result.added);
});
