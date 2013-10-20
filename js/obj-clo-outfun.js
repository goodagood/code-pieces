
module.exports = outFun;

var a = 'out a';
var out = 33;

function outFun(b){
    // this self?

    var a = 'default a';

    return {
        geta: returna,

        seta: function(value){
            a = value;
        },
        getout: function(){
            return out;
        },
        setout: function(value){
            out = value;
        },

    };
    // end of returning the obj.

}

function retura (){ return a;}
