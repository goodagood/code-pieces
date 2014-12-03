require 'net/http'

url = 'http://www.goodagood.com'
url = 'http://www.cliki.com'
url = 'http://www.wikipedia.org/'
res = Net::HTTP.get_response(URI.parse(url))

#p res
text = res.body


# testing hash:
a = {
    "a" => 1,
    "b" => 2
}

p a
