#!/usr/bin/ruby
#

puts ARGV

psreg = `ps aux | grep autossh`

# 88.149 is the node.js ec2 ip
#

lines = psreg.split("\n")
puts lines

s = ''
lines.each { |l|
    if l =~ /.+\s9999\s.+/
        s = l
    end
}

puts s

if s != ''
    parts = s.split(" ")
    #puts parts[0,3]
    if parts[1] =~ /\d+/
        puts "going to kill, it might be: #{parts[1]}"
        `kill #{parts[1]}`
    end
end

