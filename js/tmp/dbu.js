
console.log('variable use before defined: ', var_use_before_defined);

var var_use_before_defined = 99;

use_before_define();

function use_before_define(){
    console.log('use before defined');
}
