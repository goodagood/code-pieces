trap("INT") do
  puts "Whoa there big dogg. I'll exit in a second!"
  sleep 1
  exit
end

while true
    p "haha, again."
    sleep 2
    # infinite loop to simulate "long running process"
end
