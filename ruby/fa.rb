# Open and read from a text file  
# Note that since a block is given, file will  
# automatically be closed when the block terminates  
file_name = '/tmp/rvm'
File.open(file_name, 'r') do |f1|  
    puts(f1.methods.sort)
  while line = f1.gets  
    #puts line  
  end  
end  
  
# Create a new file and write to it  
file_name = '/tmp/tt2'
File.open(file_name, 'w') do |f2|  
  f2.puts (f2.methods.sort)  #"Created by Satish\nThank God!"  

end  
