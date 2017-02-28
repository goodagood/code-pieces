
def gen_times(factor)
  return Proc.new {|n| n*factor }
end

times3 = gen_times(3)
times5 = gen_times(5)

times3.call(12)               #=> 36
times5.call(5)                #=> 25
times3.call(times5.call(4))   #=> 60

a_proc = Proc.new {|a, *b| b.collect {|i| i*a }}
a_proc.call(9, 1, 2, 3)   #=> [9, 18, 27]
a_proc[9, 1, 2, 3]        #=> [9, 18, 27]
#a_proc = lambda {|a,b| a}
a_proc.call(1,2,3)
