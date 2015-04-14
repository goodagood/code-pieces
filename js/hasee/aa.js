
var _ = require('underscore');

function Thing(type) {
        this.type = type;
}

Thing.prototype.log = function (thing) {
        console.log(this.type, thing);
}

Thing.prototype.logThings = function (arr) {
      arr.forEach(this.log, this); // logs "fruit apples..."
      _.each(arr, this.log, this); //logs "fruit apples..."
}

var thing = new Thing("fruit");
thing.logThings(["apples", "oranges", "strawberries", "bananas"]);

