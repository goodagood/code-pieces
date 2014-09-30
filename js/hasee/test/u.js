var _ = require('underscore');

    var a = {}, b = {},
        c = { k1 : 1,
              kobj : { k2 : 2 }
            };
    _.extend(a, c);
    _.extend(b, c);
    a.kobj.k2 = 10;
    console.log("a.kobj.k2:", a.kobj.k2);
    console.log("b.kobj.k2:", b.kobj.k2);
    console.log("c.kobj.k2:", c.kobj.k2);
