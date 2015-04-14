
var u  = require('underscore');
var p  = console.log;


var ja = {
    'e' : { a: 8, b : 2, n : Math.random() },
    'a' : { a: 6, b : 2, n : Math.random() },
    'd' : { a: 9, b : 2, n : Math.random() },
    'm' : { a: 0, b : 2, n : Math.random() },
};


var jb = {
    e: { a: 8, b: 2, n: 0.6633213683962822 },
    a: { a: 6, b: 2, n: 0.5993335568346083 },
    d: { a: 9, b: 2, n: 0.07355754286982119 },
    m: { a: 0, b: 2, n: 0.261636845767498 }
};

//console.log (ja);

//var keys = Object.keys(jb);
//
//var skeys = u.sortBy(keys, function(key){
//    //p ("-- arguments: \n", arguments);
//    return jb[key].n;
//});
//
//p('skeys: ', skeys);
//var o = {};
//skeys.forEach(function(e){
//    o[e] = jb[e];
//});
//p ('o: ', o);

//p( skeys.map(function(e){return { e : jb[e]}; }) );

var sed = u.sortBy(jb, function(value){
    p ("-- arguments: \n", arguments);
    p ("");
    return value.n;
});

p ('sorted:\n', sed);



