var util = require('util');
var fs   = require('fs');

function  chthis(){
    console.log(typeof this);
    //var a = util.inspect(this, {depth:null, showHidden:true});
    //fs.writeFile('/tmp/this.json', a);
    console.log(a);
    console.log('chthis return');
}

function writeobj(obj, filename){
    var a = util.inspect(obj, {depth:null, showHidden:true});
    fs.writeFile(filename, a);
}

function logobj(obj, filename){
    var a = util.inspect(obj, {depth:null, showHidden:true});
    console.log(a);
}

//chthis();
