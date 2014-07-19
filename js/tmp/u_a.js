
var u = require('underscore');

var template_txt = '<h1> The title is : <% tvalue %> </h1>';

var ua = u.template(template_txt);

console.log(ua({tvalue: 33}));
