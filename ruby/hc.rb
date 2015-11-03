
require 'uri'
require 'net/http'

Net::HTTP.version_1_2

def fetch( uri_str, limit = 10 )
    raise ArgumentError, 'http redirect too deep' if limit == 0

    response = Net::HTTP.get_response(URI.parse(uri_str))
    case response
        when Net::HTTPSuccess     then response
        when Net::HTTPRedirection then fetch(response['location'], limit - 1)
    else
        p("got else")
        response.error!
    end
end

p 'oo'

print fetch('http://www.ruby-lang.org')
