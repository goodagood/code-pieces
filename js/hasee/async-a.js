
var assert = require('assert');
var async = require("async");


assert(typeof async !== 'undefined');

p = console.log;

p(typeof async);


var delayed_run = function(seconds, fun){
    // fun is the function want to be delayed, it has not parameter.
    seconds = seconds || 1;
    milli   = seconds * 1000;
    setTimeout(fun, milli);
}

var funa = function(callback){
    p('i am funa - ' + Date.now() );
    p('i am funa - ' + new Date() );
    delayed_run(3, function(){
        callback();
    });
}

var funb = function(callback){
    p('i am funb - ' + Date.now());
    p('i am funb - ' + new Date() );
    delayed_run(3, function(){
        callback();
    });
}

async.series([funa, funb], function(){
    p('why this come?');
});

p('Can you see this first?');



