
function what(){
    return 1,2,3;
}

function container (){
    var obj = {};
    var time = 1.1;

    obj.time = time;
    obj.hi   = 'Hi, you.';

    function tmp(){
        obj.time = Date.now();
        return obj;
    }

    tmp();
}



