

require 'redis'

module RA
    Pi = 3.14

    #redis = Redis.new
    #redis = Redis.new(:host => "54.248.54.80", :port => 6379, :db => 15)
    R = Redis.new(:host => "54.248.54.80", :port => 6379)

    keys = R.keys('*')
    p keys.sort
end