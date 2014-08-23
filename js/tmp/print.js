var util = require('util');
var fs   = require('fs');

function writeobj(obj, filename){
    var a = util.inspect(obj, {depth:null, showHidden:true});
    fs.writeFile(filename, a);
}

function logobj(obj, filename){
    var a = util.inspect(obj, {depth:null, showHidden:true});
    console.log(a);
}

function p(obj){
    var a = util.inspect(obj, {depth:null, showHidden:true});
    console.log(a);
}

function pf(obj, filename){
    var head = '\n--- --- ' + Date().toString() + '\n';
    var a = util.inspect(obj, {depth:null, showHidden:true});
    var out = head + a + '\n';

    fs.writeFile(filename, out, {flag:'a+'});
}

function simple_date(){
    //
    // Return a string as simple date: 
    // (dat_of_month)-(hours):(minutes):(seconds).(milli seconds)
    //
    var d = new Date();
    var day_of_month = d.getDate().toString(); 
    var hours = d.getHours().toString(); 
    var minutes = d.getMinutes().toString(); 
    var seconds = d.getSeconds().toString(); 
    var mili = d.getMilliseconds().toString(); 
    var result = day_of_month + '-' + hours + ':' + minutes + ':' + seconds +
        '.' + mili;
    return result;
}


function seconds_past_today(){
    //
    // Return a string of seconds past today
    //
    var d = new Date();
    d.setHours(0);
    d.setMinutes(0);
    d.setSeconds(0);
    d.setMilliseconds(0);

    var milli = Date.now() - d.getTime();

    var sec   = Math.floor(milli / 1000);
    return sec.toString();
}

//exports.p  = p;
//exports.pf = pf;
