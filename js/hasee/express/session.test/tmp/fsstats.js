
var fs = require('fs');
var u  = require('underscore');


var p  = console.log;

var full_path = '/tmp/vca';
var full_path = '/home/za/tmp/sess';
var full_path = '/tmp/aakdls';
var full_path = '/tmp/kloo';

var what = fs.stat(full_path, function(err,fs_stats,c){
    p(err,fs_stats,c);

    //p(u.isFunction(fs_stats.isDirectory));

    //p(u.keys(fs_stats));
    //p(u.keys(what));

});
    p(u.isFunction(what.isDirectory));

//p('what');
//p(u.keys(what));
