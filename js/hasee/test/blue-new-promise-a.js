
var Promise = require('bluebird');
var async   = require('async');


function make_time_cost_promise(number) {
  return new Promise(
      function (resolve, reject){
        // @resolve and @reject are function to call when it resolve or reject.

        if(number > 1) return setTimeout(function(){ resolve(number); }, number * 10);
        return reject(number);
      }
    );
}
var make_promise = make_time_cost_promise;


function test_chain(number){
  var a = make_promise(number);
  //var thened;

  for(var i=0; i < 10; i++){
    a = a.then(
        function get_resolve(num){
          console.log('get resolve: ', num);
          if(number > 10) number = -2;
          else number ++;
          return make_promise(number);
        }
    ).catch(function(e){
      console.log('CAUGHT: ', e);
      //console.log('ok?');
      return number++;
    });

  }

}
test_chain(8);
