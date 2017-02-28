
var pa = require('./pro-a.js');
//var path = require('path');

console.log(pa);
//pa.Thing();

function ctb(){
    // try to make callback fail
    //var t = new Thing();
    setTimeout(function(){
        var t = new pa.Thing();
        console.log('adding: ', t.add(3,8));
        //t.showWhat();
    }
    ,500);
}



ctb();
