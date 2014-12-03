
require 'redis'
#r = Redis.new
#redis = Redis.new(:host => "54.248.54.80", :port => 6379, :db => 15)
redis = Redis.new(:host => "54.248.54.80", :port => 6379)

p redis.hgetall('abc')

#r.del('foo')
#puts
#p'set foo to "bar"'
#r['foo'] = 'bar'
#puts
#p 'value of foo'
#p r['foo']

#redis = Redis.new(:host => "10.0.1.1", :port => 6380, :db => 15)
