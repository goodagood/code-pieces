var p = require('./print.js').p;

var a = {
  name: "FirstName", 
  age: "19", 
  load: function () {}, 
  uniq: 0.5233059714082628
};

var Person = function() {
    this.canTalk = true;
    this.greet = function() {
        if (this.canTalk) {
            console.log("Hi, I'm " + this.name);
        }
    };
};

var Employee = function(name, title) {
    this.name = name;
    this.title = title;
    this.greet = function() {
        if (this.canTalk) {
            console.log("Hi, I'm " + this.name + ", the " + this.title);
        }
    };
};
Employee.prototype = new Person();


//var bob = new Employee('Bob','Builder');
//var rg = new Employee('Red Green','Handyman');
//bob.greet();
//rg.greet();

//var passer = new Person();
p(Employee);


// vim:set ts=2 sw=2 tw=78 fdm=indent:
