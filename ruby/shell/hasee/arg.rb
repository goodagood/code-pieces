#!/usr/bin/ruby
#

#puts ARGV

#ARGV.chomp!

#puts 'is array?'
#puts ARGV.kind_of?(Array)

a = ARGV[0]

if a == '9999'
    puts 'got 9999'
elsif a == 9999
    puts 'number: ', a
else
    puts 'it is?: ', a
end