
var Promise = require('bluebird');
var async   = require('async');


function make_promise(number) {
  return new Promise(
      function (resolve, reject){
        // @resolve and @reject are function to call when it resolve or reject.

        if(number > 1) return resolve(number);
        return reject(number);
      }
    );
}

function test_a(number){
  var a = make_promise(number);
  a.then(
      function get_resolve(number){
        console.log('get resolve: ', number);
      }
  ).catch(function(e){
    console.log('CAUGHT: ', e);
    console.log('ok?');
  });
}

function test_3_number(na, nb, nc){

  [na, nb, nc].forEach(function(num){
    var a = make_promise(num);
    a.then(
        function get_resolve(number){
          console.log('get resolve: ', number);
        }
    ).catch(function(e){
      console.log('CAUGHT: ', e);
      console.log('ok?');
    });
  });

}
//test_3_number(0.5, 1, 2);


function test_2_number(na, nb){
  async.map([na, nb], test_a, function(){});
}
//test_2_number(1.1, 0.5);


function test_chain(number){
  var a = make_promise(number);
  var thened = a.then(
      function get_resolve(number){
        console.log('get resolve: ', number);
        return make_promise(Math.random()*2);
      }
  );

  var i = 0;
  while( i < 10){
    thened = thened.then(
        function get_resolve(number){
          console.log('get resolve: ', number);
          return make_promise(Math.random()*2);
        }
    ).catch(function(e){
      console.log('CAUGHT: ', e);
      //console.log('ok?');
      return 9.9;
    });

    i ++;
  }

}
test_chain(3);
