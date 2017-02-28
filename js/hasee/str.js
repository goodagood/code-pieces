
var u = require('underscore');

var p = console.log;

//p ('12 34'.match(/\d+/g));

var r = '12 34'.match(/\d+/g);

p (typeof r);
p (u.isArray(r), r[1]);
