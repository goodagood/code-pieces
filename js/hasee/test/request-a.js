
var request = require("request");
var url     = require("url");
var u       = require("underscore");

var p = console.log;

function test_bing(o){
    if(!o){
        this.o4test_bing = {};
        var o = this.o4test_bing;
    }

    var href_ = 'http://bing.com';
    request(href_, function(err, response, body){
        if(err) console.log(err);
        o.err = err;
        o.response = response;
        o.body = body;

        var reg = /<\/.*head.*>/i;
        p('find? ', reg.test(body));
        o.nbody = o.body.replace(reg, '<base href="http://www.google.com/" target="_blank" > \n </head>\n');
    });
}

function test_url(o){
    var href_ = "http://bing.com";
    var href_ = "http://image.baidu.com/i?ct=503316480&z=0&tn=baiduimagedetail&ipn=d&word=cat&step_word=&pn=12&spn=0&di=160637557630&pi=&rn=1&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=26207&cl=2&lm=-1&st=-1&cs=656359123%2C3237739296&os=2065814093%2C1649824113&adpicid=0&ln=1000&fr=%2C&fmq=1432804503691_R&ic=0&s=undefined&se=1&sme=0&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&objurl=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201307%2F20%2F20130720213108_YW8iU.jpeg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3B17tpwg2_z%26e3Bv54AzdH3Frj5rsjAzdH3F4ks52AzdH3Fbm0cbcamAzdH3F1jpwtsAzdH3F%3Fr6j%3Dbm0cb9n9"
    var burl  = url.parse(href_);
    o.url = burl;
}

// to drop into repl:
var o = {};
//test_bing(o);
test_url(o);

console.log("ok start interact");
