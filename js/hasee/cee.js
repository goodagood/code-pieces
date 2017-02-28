console.log(' -- cee.js callee things -- ');

function factorial (n) {
    return !(n > 1) ? 1 : factorial(n - 1) * n;
}

//[1,2,3,4,5].map(factorial);

//[1,2,3,4,5].map(function (n) {
//    return !(n > 1) ? 1 : /* what goes here? */ (n - 1) * n;
//});


//[1,2,3,4,5].map(function (n) {
//    console.log(n, arguments);
//    return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
//});


console.log(' -- cee.js -- end -- ');
