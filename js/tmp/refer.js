
function foo(){
    var a = 2;

    var obj = {
        a : a,
        b : function(){ return a;},
    }

    a = a + 3;
    return obj;
}

var some = foo();
