
begin
  (1..10).each do |x|
    puts x
    if x > 6
      #input = STDIN.gets # press enter to do another iteration
      input = $stdin.readline
      raise ArgumentException  if input.start_with? 'q'
    end
  end
rescue
  retry # loop will restart from 1
end
