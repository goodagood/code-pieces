
var res, text = "foo1 bar1 foo2 bar \n foo3 bar2";

var regexp = /foo\d (bar\d?)/g;


console.log("regexp.lastIndex:", regexp.lastIndex);

while (res = regexp.exec(text)) {
    console.log("regexp.lastIndex:", regexp.lastIndex, 
                "index:", res.index,
                "res[0]:", res[0],
                "res[1]:", res[1]);
}
console.log("regexp.lastIndex:", regexp.lastIndex);

