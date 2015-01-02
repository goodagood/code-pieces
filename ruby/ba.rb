=begin  
Ruby Code blocks are chunks of code between braces or  
between do-end that you can associate with method invocations  
=end  
def call_block (who)
    puts who
    puts 'Start of method'  
    # you can call the block using the yield keyword  
    yield(1,2)
    yield(3,4) 
    puts 'End of method'  
end  
# Code blocks may appear only in the source adjacent to a method call  
call_block('jim') {|a,b| puts 'In the block got: ' + a.to_s + ' ' + b.to_s}  
