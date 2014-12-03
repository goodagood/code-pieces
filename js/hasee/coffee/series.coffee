
async = require 'async'
p = console.log

a = [1,2,3,4,5]

square = (n)->
    n*n



square_fun = (n)->
    the_fun = (callback)->
        p 'to square ', n
        square(n)
        callback(null, square(n))
    return the_fun

square_things = a.map(square_fun)

p square_things

async.series(square_things)
