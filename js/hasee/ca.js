
var p = console.log;

function ta(){
    //var a,b;
    a();
    b();
    function a(){
        p('in a');
        b();
    }

    function b(){
        p('in b, ', Date.now());
    }
}

//ta();

function check_reduce(){
    var a = [1,2,3,4,5];
    var r = a.reduce(function(first, second){
        p('arguments', arguments);
        return first + second;
    }, 0);

    p ('r', r);
    p ('a:', a);
}
check_reduce();


