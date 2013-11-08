var util = require('util');

//console.log( util.inspect(this) );
foo = 'outer foo';

var fooObj = {
    foo : 'this is var foo in fooObj',

    //this.foo = 'this.foo';

    showfoo : function(){
        console.log(this.foo);
    },

    showfoo_b : function(){
        console.log(foo);
    }

}

module.exports = fooObj;
