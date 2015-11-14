var mikhail = {
    first_name: 'Mikhail'
    , last_name:  'Weiß'
    , age:        19
    , gender:     'Male'

    // () → String
    // Returns the full name of object.
    , get name() {
        return this.first_name + ' ' + this.last_name 
    }

    // (new_name:String) → undefined
    // Sets the name components of the object,
    // from a full name.
    , set name(new_name) {
        var names;
        names = new_name.trim().split(/\s+/);
        this.first_name = names['0'] || '';
        this.last_name  = names['1'] || '';
    }
}


var p = console.log;

//p(mikhail);
//
//p(mikhail.name);
//p(mikhail.first_name);
//
//p(mikhail.name = "Tom Simth");
//p(mikhail.name);
//
//p(mikhail.whatever = 'what ever! hi');

mikhail.greet = function(person) {
        return this.name + ': Why, hello there, ' + person + '.'
}

p(mikhail.greet('you'));
// => 'Michael White: Why, hello there, you.'

p(mikhail.greet('Kristin'));
// => 'Michael White: Why, hello there, Kristin.'

