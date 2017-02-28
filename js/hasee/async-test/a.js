
var async = require('async');

var hello = function(name, callback){
    setTimeout(function(){
        callback(null, {hello: name});
    }, 1000);
};

async.dir(hello, 'ok');

//node> async.dir(hello, 'world');
//{hello: 'world'}
