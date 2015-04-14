console.log(" -- start of pro-a.js --");

var This = this;

function Thing() {
    //console.log(this.what);
    this.add = add;
}

Thing.prototype.what = "any thing";
Thing.prototype.showWhat = function(){
    console.log (this.what);
};

function add(a,b){ return a+b; }

//var thing = new Thing();
//console.log(thing.what);

function ct(){
    console.log('this == This: ', this === This);
    var t = new Thing();
    sto(function(){
        console.log('this == This: ', this === This);
        t.showWhat();
    });
}

function ct2(){
    // try to make callback fail
    //var t = new Thing();
    sto(function(){
        var t = new Thing();
        console.log('adding: ', t.add(3,8));
        //t.showWhat();
    });
}

function sto(callback){
    setTimeout(callback, 500);
}

module.exports.Thing = Thing;
//module.exports.sto = sto;

//console.log(" -- end of pro-a.js --");
