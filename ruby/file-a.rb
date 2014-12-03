    # p027readwrite.rb  
    # Open and read from a text file  
    # Note that since a block is given, file will  
    # automatically be closed when the block terminates  

    file_name = './man-ruby'

    File.open('man-ruby', 'r') do |f1|  
      while line = f1.gets  
        puts line  
      end  
    end  
      
    # Create a new file and write to it  
    File.open('test.txt', 'w') do |f2|  
      # use "\n" for two lines of text  
      f2.puts "Created by Satish\nThank God!"  
    end  
