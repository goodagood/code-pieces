
var fs    = require('fs');
var async = require('async');

var file1 = 'aa.js';
var file2 = 'pa.js';

//async.map([file1, file2, 'file1','file2','file3'], fs.stat, function(err, results){
//    // results is now an array of stats for each file
//    console.log(results);
//});
//
//async.filter([file1, file2, 'file1','file2','file3'], fs.exists, function(results){
//    // results is now an array of stats for each file
//    console.log(results);
//});

async.parallel(
    [function (cb){
      var what = 'the first fun';
      console.log('the first fun');
      cb(null, what);
    },
    function(callback){
      setTimeout(function(){
        console.log('set time outed in the 2nd fun');
        callback(null, 2);
      }, 1000);
    },
    function(callback){
      setTimeout(function(){
        console.log('set time outed in the 3nd fun');
        callback(null, 3);
      }, 200);
    }], 

    function (err, results){
      console.log(' -- the callback fun got(err, results): ', err, results);
    });

function cba(){
  console.log(' -- the callback fun');
};

//
//async.parallel([
//    function(){ ... },
//    function(){ ... }
//], callback);
//
//async.series([
//    function(){ ... },
//    function(){ ... }
//]);
