
// function is an object
function foo(){
    console.log('Hi, I am fun foo\n');
    console.log('Hi, foo.a = ', + foo.a +' \n');

}

// add properties to function object
foo.a = 3;
foo.b = 8;

foo.c = function(){
    console.log('Hi, I am function foo.c\n');
};
