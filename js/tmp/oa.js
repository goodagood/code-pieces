
function Animal(name) {
  var private = 0;

  return {
    run: function() {
      console.log(name + " is running!")
    },

    show_private : function(){
      console.log('private value is: ', private);
    },

  }

}

var ani = Animal('cat');
ani.run();
ani.show_private();


// vim:set ts=2 sw=2 tw=78 fdm=indent:
