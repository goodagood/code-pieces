
var u  = require('underscore');

var oa = {
        a : { 
            s  : 3,
            d1 : Date.now() + Math.random()*1000,
            d2 : Date.now() + Math.random()*1000,
        }

        ,b : {
            s  : 1,
            d1 : Date.now() + Math.random()*1000,
            d2 : Date.now() + Math.random()*1000,
        }

        ,c : {
            s  : -3,
            d1 : Date.now() + Math.random()*1000,
            d2 : Date.now() + Math.random()*1000,
        }
};

//console.log(oa);

var ob = u.sortBy(oa, function(e){
    return e.s;
});

console.log(ob);


var oc = u.sortBy(u.values(oa), function(e){
    return e.s;
});

console.log(oc);
