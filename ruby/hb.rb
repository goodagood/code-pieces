
require 'net/http'

#Net::HTTP.version_1_2
#Net::HTTP.start('www.sohu.com', 80) {|http|
#    response = http.get('/index.html')
#    puts response.body
#}

Net::HTTP.get_print "www.baidu.com", "index.html"
