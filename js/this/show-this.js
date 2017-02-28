var util = require('util');

//console.log( util.inspect(this) );

var fooObj = {
    var foo = 'this is var foo in fooObj';

    this.foo = 'this.foo';

    showfoo = function(){
        console.log(this.foo);
    }

}

module.exports = fooObj;
