#begin  
#    #raise Exception.new('aa')
#    #raise 'bb raise'
#    p 'not raise any'
#rescue ArgumentError
#    p 'ArgumentError'
#rescue IndexError
#    p 'IndexError'
#else  
#    p 'so else' # Other exceptions
#ensure
#    p 'i ensure' # Always will be executed
#end


#begin  
#  raise 'A test exception.'  
#rescue Exception #=> e  
#  puts e.message  
#  puts e.backtrace.inspect  
#end  
#
####
##
#   class MyException < Exception
#     end
#  #=> nil
#   def exception_miss
#     raise MyException.new
#     rescue
#     p "saved!"
#   end
#  #=> nil
#   begin
#     exception_miss
#     rescue Exception
#     p "not so much"
#     end
#  #"not so much"
#  #=> nil
#   def exception_hit
#     raise NewException
#     rescue
#     p "excellent!"
#     end
#  #=> nil
#  # exception_hit
#  #"excellent!"
#  #=> nil
#

#   def catcher
#     throw :testing
#     rescue
#     p "gotcha?"
#   end
#   catcher
#
#  #=> nil
#  # catcher
#  #"gotcha?"


   def throw_no_rescue
     throw :gotme
   end

   
   def fire
       got = catch(:"exce haha") do
           p "start"
           #throw :'exce haha'
           #throw_no_rescue
           p "after throw"
           "every thing ok"
       end
       p "got = #{got}"
       p "after catch"
       p "haha "
   end

#   throw_no_rescue
#  #NameError: uncaught throw `gotme'
#  #        from (irb):72:in `throw'
#  #        from (irb):72:in `throw_no_rescue'
#  #        from (irb):82
#  #        from ♥:0

   fire

#  #"start"
#  #"after catch"
#  #=> nil
#
#catch(:gotme) do
#    p 'basicly got it'
#end
#
#def dosome
#    catch(:gotme) do
#        p 'basicly got it'
#    end
#end
#
#dosome

