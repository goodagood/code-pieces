

var fs    = require('fs');
var async = require('async');


//async.map([file1, file2, 'file1','file2','file3'], fs.stat, function(err, results){
//    // results is now an array of stats for each file
//    console.log(results);
//});

async.map(
    [1,2,3,4,5,6,7,8],

    function(number,  callback){
      var time = Math.random()*100;
      setTimeout(function(){
        console.log(number, time);
        //if(number == 2) callback(2, number);
        callback(null, number);
      }, time);
    },

    function(err, results){
      console.log(err, results);
    }
);

