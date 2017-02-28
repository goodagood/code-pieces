//
// expose an object of function and closure
//
function out(Pa){
    var cloObj = {};

    function log(){
        console.log(cloObj);
    }
    function set(obj){
        cloObj = obj;
    }
    function setin(name, value){
        cloObj[name] = value;
    }

    function get(){ return cloObj; }

    return {
        set : set,
        setin : setin,
        get : get,
        log : log,

        O : cloObj

    };

}

var a = out(33);

console.log(a.get());



