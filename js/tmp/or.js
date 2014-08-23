
function foo(a){
    console.log(typeof a);
    var a = a || 'i am default';
    console.log(a);
}

function father(a,b,c){
    var data = {time:Date(),};

    function _m1(){
        console.log('arguments number: ', arguments.length);
    }

    function _get_data(){
        return data;
    }

    return {
        m1 : _m1,
        get_data : _get_data,
    };
}

function son(sa, sb){
    var obj = father(1,2,3);
    //var data = obj.get_data();
    var data = {};

    obj.tell = function(){
        console.log("i am : ", sa);
    };

    obj.add_mark = function(){
        data['son marked'] = 'I inherated';
    };

    return obj;

}

var s = son(1,8);
s.add_mark();

