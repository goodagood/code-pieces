

require 'aws-sdk'

ec2 = AWS::EC2.new

puts ec2.methods.sort

insts = nil

#ec2.instances.inject({}) { |m, i|
#    m[i.id] = i.status;
#    m
#}

ins_a = ec2.instances['i-022bd406']
