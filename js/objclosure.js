
var a = 'out a';
var out = 33;

function outFun(b){
    // this self?

    var a = 'default a';

    return {
        geta: function(){
            return a;
        },
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

module.exports = outFun;
