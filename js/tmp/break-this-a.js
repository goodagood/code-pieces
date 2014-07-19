
function ClassA (){
    this.a = 'a';
    this.b = 'b';
    this.get_a = function (){return this.a;};
}

ClassA.prototype.finda = function(){
    return this.a;
};

var ca = new ClassA();

function ClassB(){
    this.finda = function(){
        return 'I am from ClassB - ' + this.get_a();
    }
}

ClassB.prototype = new ClassA();

var cb = new ClassB();
//var ba = cb.get_a();
var ba = cb.finda();
console.log(ba);

//var a = ca.get_a.call({});
//console.log(a);
//console.log('----');
//
//a = ca.finda();
//console.log(a);
//


