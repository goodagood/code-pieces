
p = console.log

Promise = require "bluebird"

a = (seconds, callback)->
    mili = seconds * 1000
    p 'in function a'
    setTimeout callback, mili

promise_to_a = Promise.promisify a

a(3, ()->
    p 'I am in the function of callbacked'
)

p 'here ---'

promise_to_a(2)
#    .then(
#
#    (haha)->
#        p 'haha? ---'
#).catch(
#    (what)->
#        p 'what catched: ', what
#)

p 'finished? ---'
