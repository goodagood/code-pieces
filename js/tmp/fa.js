
var p = require('./print.js').p;

function make_person(name){
    var obj = {
        say_hi : function(){ console.log('hi'); },
        self_intro : function(){console.log('my name is :', name);},
        change_name: function(new_name){
            name = new_name;
        }
    };
    return obj;
}

function make_boss(title){
    var boss = make_person('Tom');
    boss.pay_money = function(amount){
        console.log('paid : ', amount);
    };
    return boss;

}

var b = make_boss('The Boss');
b.pay_money(33);
b.say_hi();
