
p = console.log

Promise = require "bluebird"

a = new Promise(
    (resolve)->
        resolve()
)

#a = new Promise(->)

#a.then(
#    (what)->
#        p 'what a 1, ', what
#        11
#).then(
#    (what)->
#        p 'what a 2, ', what
#        22
#        p 'END a'
#)

b = Promise.resolve('b')
b.then(
    (what)->
        p 'in b'
        p what
)
