# what wrong? hang
#

#region = 'ap-northeast-1'

require 'aws-sdk'

require 'json'

AWS.config(
    :access_key_id => 'AKIAJMFE4ZJAB7ILB45A',
    :secret_access_key => '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'
)
s3 = AWS::S3.new


## this:
AWS::S3::Base.establish_connection!(
        :server            => 'objects.dreamhost.com',
        :use_ssl           => true,
        :access_key_id     => 'my-access-key',
        :secret_access_key => 'my-secret-key'
)




#s3 = AWS::S3::Client.new(region: 'ap-northeast-1')

#puts s3.methods.sort

#puts s3.list_buckets

    
AWS::S3::Service.buckets.each do |bucket|
        puts "#{bucket.name}\t#{bucket.creation_date}"
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

