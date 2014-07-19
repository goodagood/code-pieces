function tree(data, prefix) {    
    var txt = '';
    if (typeof(data) === 'object' && Object.keys(data).length > 0) {
        txt += '\n<ul>';
        for (var i in data) {
            txt += '\n<li>' + i;
            txt += tree(data[i]);  // recursively
            txt += '</li>';
        }
        txt += '\n</ul>\n';
    } else {
        txt +=  data;
    }
    return txt;
}

var data =
{
    "goodagood": {
        "etc": {
            "home-structure.json": "json file"
        },
        "public": {},
        "friends": {}
    }
};

console.log(tree(data, ''));
