
var filename = '/tmp/ja.json';
var q        = require('q');
var fs       = require('fs');

var deferred = q.defer();

function a(){
    setTimeout(function(){
        deferred.resolve(33);
    }, 100);
}

//pa = deferred.promise;

var pa = q.Promise(function(resolve, reject, notify){
    var r = 10.0 * Math.random();
    if(r>5) setTimeout(function(){resolve(r);}, 200);
    if(r<5) setTimeout(function(){reject(r);}, 200);
    //if(r<5) reject(r);
});


pa
.then(
        function(a){
            console.log(a);
            return pa;
        },
        function(a){
            console.log('reject ', a);
            return pa;
        }

       )
.then(
        function(a){
            console.log(a);
        },
        function(a){
            console.log('reject ', a);
        }

       );
