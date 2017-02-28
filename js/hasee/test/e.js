
var filename = '/tmp/ja.json';
var q        = require('q');
var fs       = require('fs');

var deferred = q.defer();

var pa = q.fcall(
        function(){
            setTimeout(function(){
                //return 33;
                deferred.resolve(33);
            }, 100);
        }
        );


var pb = q.fcall(
        function(){
                return 33;
        }
        );

pb
.then(
        function(a){
            console.log(a);
        },
        function(a){
            console.log('reject ', a);
        }

       )
.then(
        function(a){
            console.log(a);
        },
        function(a){
            console.log('reject ', a);
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
