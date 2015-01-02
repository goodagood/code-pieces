# what wrong? hang
#
#AWS.config(
#  :access_key_id => 'YOUR_ACCESS_KEY_ID',
#  :secret_access_key => 'YOUR_SECRET_ACCESS_KEY')


require 'aws-sdk'

require 'json'

s3_old = AWS::S3.new
s3 = AWS::S3::Client.new(region: 'ap-northeast-1')

#puts s3.methods.sort

#puts s3.list_buckets

#puts s3.buckets.methods

#puts s3_old.buckets

s3_old.buckets.each do |bucket|
  puts bucket.name
end

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

