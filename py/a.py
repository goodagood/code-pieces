import urllib2
import urllib
import json

def cget(url):
    res  = urllib2.urlopen(url)
    html = res.read()
    j    = json.loads(html)
    return j



