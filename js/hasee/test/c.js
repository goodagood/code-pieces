var Q = require('q');

var x = 10;
var part1 = Q($.ajax(...))
.then(function () {
    x = 20;
});

var part2 = Q($.ajax(...))
.then(function () {
    x = 30;
});

expect(x).toBe(10); // still, no matter what
