/*
 * Try event interface on object literal.
 */


var e = require("events")
var u = require("underscore");

var util = require("util");


var p = console.log;

p(u.keys(e));

var ee = e.EventEmitter;
p(u.keys(ee));


//p(u.keys(ee));

var o = {
    oname : 'the name of object, 15:59pm',


    show: function(what){
        if(what) p('suppose to print out: ', what);
    }
}


util.inherits(o, ee);

o.addListener('first', function(event){
    p(event);
});

p('o keys: ', u.keys(o));
//p('o.: ', u.keys(o));

o.emit('first');

