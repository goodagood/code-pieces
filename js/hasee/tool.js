
function commafy( num ) {
  return num.toString().replace( /\B(?=(?:\d{3})+)$/g, "," );
}

function to3comma(num){
    var rgx = /(\d+)(\d{3})/;
    while ( rgx.test(num) ) {
        num = num.replace( rgx, "$1,$2");
    }
    return num;
}

//var res, text = "foo1 bar1 foo2 bar \n foo3 bar2",
//    regexp = /foo\d (bar\d?)/g;
//
//
//console.log("regexp.lastIndex:", regexp.lastIndex);
//while (res = regexp.exec(text)) {
//    console.log("regexp.lastIndex:", regexp.lastIndex, 
//                "index:", res.index,
//                "res[0]:", res[0],
//                "res[1]:", res[1]);
//}
//console.log("regexp.lastIndex:", regexp.lastIndex);
