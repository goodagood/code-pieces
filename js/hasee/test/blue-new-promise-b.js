var Promise = require('bluebird');

function return_promise(number){
    number = number || Math.random() * 2;
    return new Promise(function(res, rej){
        setTimeout(function(){
            console.log('running here, number is going to be passed to res: ', number);
            if(number > 1) return res(number);
            rej(number);
        }, number * 100);
    });
}

//var a = return_promise(1.5);

return_promise(1.5).then
(
        function(what){
            console.log('1 ');
            console.log('what: ', what);
            return return_promise(1.1);
        }
).then
(
        function(what){
            console.log('2 ');
            console.log('what: ', what);
            return return_promise(5.1);
        }
).then
(
        function(what){
            console.log('3 ');
            console.log('what: ', what);
            return new Promise(function(res, rej){
                setTimeout(function(){console.log('set time out to ', 333); res(333);}, 333);
            });
            //return return_promise(3.1);
        }
).then
(
        function(what){
            console.log('3.1 ');
            console.log('what: ', what);
            return {a:1, b:2};
        }
)
.then
(
 function(what){
     console.log('4 what: ', what);
     foo(what);
 }
).catch
(
 function(e){
     console.log('e ', e);
 }
);

console.log('should i coma up?');

function foo(){
    console.log('as a callback', arguments);
}
