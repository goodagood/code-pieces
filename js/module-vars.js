
// It's bad to modify/expose module variables

var xx = 5;

function foo(num){
    var foo_local = 10;

    // closour
    return function(){
        return xx + foo_local;
    };
}

// we can not use xx in simple way, EVEN if it's exposed:
module.exports.xx = xx;
module.exports.foo = foo;
