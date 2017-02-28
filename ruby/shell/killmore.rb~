#!/usr/bin/ruby
#
# 54.178.88.149 is the node.js ec2 ip
# 54.250.18.75  is ssh tunnel target i am using, usually to port 9999


#puts 'ARGV: ', ARGV
#what = ARGV[0]

def find_and_kill(what)
    puts "find and kill: #{what}"

    psreg = `ps aux | grep autossh`

    lines = psreg.split("\n")
    #puts lines

    s = ''
    lines.each { |l|
        #if l =~ /.+\s9999\s.+/
        if l.include? what and not l.include? "ruby"
            s = l
        end
    }

    puts s

    if s != ''
        parts = s.split(" ")
        #puts parts[0,3]
        if parts[1] =~ /\d+/
            puts "going to kill, it might be: #{parts[1]}"
            puts "command: kill #{parts[1]}"
            `kill #{parts[1]}`
        end
    end



end


ARGV.each { |what|
    #puts 'what: ', what
    find_and_kill(what)
}

#Kernel.exit(0)






