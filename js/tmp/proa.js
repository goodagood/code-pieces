
function Class(a,b,c){
    this.a = a;
    this.b = b;
}

Class.prototype.showa = function(){
    console.log(this.a);
    console.log('-- before return from showa --aaa--');
}

Class.prototype.showb = function(){
    console.log(this.b);
    console.log('-- before return from showb --bbb --');
}

var c = new Class(1,2,3);

exports.Class = Class;

function  crash(callback){
    c.showa();
    callback();
}
