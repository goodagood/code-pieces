
a = 2

case a
when 2
    puts "it is 2"
    puts "2+2 = #{2+2}"
when Fixnum
        puts "fixnum"
when String
        puts "string"
when (1..3)
        puts "between 1 and 3"

else
        puts "default"
end


class Greeter
  def initialize(name = "World")
    @name = name
  end
  def say_hi
    puts "Hi #{@name}!"
  end
  def say_bye
    puts "Bye #{@name}, come back soon."
  end
end

