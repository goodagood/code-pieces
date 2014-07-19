var util = require('util');

function Animal(name) {
  var private = 0;

  function get2return(){
  }

  get2return.prototype.run = function(){
    console.log(name + ' is running.');
  }
  get2return.prototype.show_private = function(){
    console.log('private value is: ', private);
  }

  //return {
  //  run: function() {
  //    console.log(name + " is running!")
  //  },
  //  show_private : function(){
  //    console.log('private value is: ', private);
  //  },
  //}

  return new get2return();
}

var ani = Animal('cat');
console.log(util.inspect(ani, {showHidden:true, depth:null}));
ani.run();
//ani.show_private();


// vim:set ts=2 sw=2 tw=78 fdm=indent:
