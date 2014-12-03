
p = console.log

Promise = require "bluebird"

ep = Promise.resolve(true)

bool = false

if ep
    ep.then(
        (what)->
            p "what: #{what}"
            bool = what
    ).then(
        (b)->
            p "bool here: #{bool}"
    )


p "bool : #{bool}"


