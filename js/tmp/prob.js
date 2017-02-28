var proa = require('./proa.js');

var c = proa.Class('a', 'b', 'c');

function  crash(callback){
    c.showa();
    callback();
}

crash(function(){
    // how to change this of c?
});
