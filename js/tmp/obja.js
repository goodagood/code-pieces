var u = require('underscore');

function new_animal(){
    var secret = 3;

    var data = {secret:secret,};

    function _move(){
        console.log('Animal moved');
    }

    return {
        move : _move,
        get_data : function(){return data;},
    };
}

// inherite animal
function new_fish(){
    var obj = new_animal();
    var data = obj.get_data();

    function _move(){
        // the parent 'method':
        obj.move();
        // and more:
        console.log('Fish swimming');
    }

    var new_obj = {
        move : _move,
    };


    return u.defaults(new_obj, obj);
}

var fish = new_fish();
fish.move();
