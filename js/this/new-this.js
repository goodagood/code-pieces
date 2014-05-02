

var that = {};
function simple(){
    this.a = 'aa';
    this.b = 'bb';
    this.show = function(){
        console.log( this.a, this.b );
    };
    this.change_a = function(){ this.a = 'changed a';};
}

simple.apply(that);
that.change_a();
that.show();
console.log(that.a, that.b);

var newed = new simple();
newed.show();

function my_new( a_function, parameter_array ){
    var that = {};

    a_function.apply(that, parameter_array);
    return that;
}
