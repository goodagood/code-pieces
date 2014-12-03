
var async = require('async');

var a = [1,2,3,4,5];

async.map(a,
        function(e, callback){
            setTimeout(function(){
                console.log(e, e*100);
                callback(null, e*e);
            }, e*100);
        },
        function(err, results){
            console.log(err, results);
        });
