# what wrong? hang
#
#AWS.config(
#  :access_key_id => 'YOUR_ACCESS_KEY_ID',
#  :secret_access_key => 'YOUR_SECRET_ACCESS_KEY')


require 'aws-sdk'

require 'json'

s3 = AWS::S3.new

#s3 = AWS::S3::Client.new(region: 'ap-northeast-1')

#puts s3.methods.sort


#puts s3.buckets
#

ggfsb = s3.buckets['ggfsb']
aa    = ggfsb.objects['.meta/aa']
puts aa.read

#puts ggfsa.methods.sort
#puts ggfsa.with_prefix('.gg')
#puts ggfsa.objects.each do |o|
#    puts o.name
#end


#puts ggfsa.objects.with_prefix('.gg.folder')
    


#s3.buckets.each do |bucket|
#  puts bucket.name
#end

#puts 'the bucket name:'
#puts s3.buckets['ggfsb'].name
#
#ggfsb = s3.buckets['ggfsb']

#abc_meta = ggfsb.objects['.gg.folder.meta/abc']
#
#str = abc_meta.read
#
#j   = JSON.parse(str)
#puts 'what i read:'
#puts "#{j['name']}, j['name']."
#
#puts str[0..300]

## streaming download from S3 to a file on disk
#File.open('/tmp/rbgetabc.json', 'wb') do |file|
#  abc_meta.read do |chunk|
#     file.write(chunk)
#  end
#end

