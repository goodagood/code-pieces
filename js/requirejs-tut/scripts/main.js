//main.js
//var result = purchaseProduct();

require.config({
  paths: {
    "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min",
    //"underscore": "scripts/underscore",
    "underscore": "underscore",
  }
});

//require(['scripts/tempa'], function(template) {
require(['tempa'], function(template) {
  template.showName("Jack");
});
