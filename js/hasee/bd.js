
var util = require('util');

function foo(){
    if(this.show_me)
        console.log('i got your show: ', this.show_me);
    else
        console.log('i am alone.');
}

var oo = {
    show_me : 'I am oo'
    , and   : 'some'
};

console.log(util.inspect(this, {depth:null, showHidden:true}));
//console.log(util);
//console.log(this.util);
