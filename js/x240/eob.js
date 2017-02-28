/*
 * Try event interface on object literal.
 */


var e = require("events")
var u = require("underscore");

var util = require("util");


var p = console.log;

//p(u.keys(e));

var ee = e.EventEmitter;
//p(u.keys(ee));


//p(u.keys(ee));

var o = {
    oname : 'the name of object, 15:59pm',


    show: function(what){
        if(what) p('suppose to print out: ', what);
    }
}


//util.inherits(o, ee);

var ee_instance = new ee();

u.extend(o, ee_instance);


o.addListener('first', function(event){
    p(event);
    p('i am listener for first');
});

//p('o keys: ', u.keys(o));
//p('o.: ', u.keys(o));

o.emit('first');

