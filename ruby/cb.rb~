
class Mammal  
    def breathe  
        puts "inhale and exhale"  
    end  
end  

class Cat < Mammal  
    def speak  
        puts "Meow"  
    end  
end  


class Foo
    def foo
        "#{self.class}#foo"
    end
end

class Bar < Foo
    #def foo
    #    "Super says: #{super}, Bar instance say: #{self.class}#foo"
    #    #puts Bar.foo
    #end

    def bar
        puts foo
        puts "i am bar"
    end
end

#puts Foo.new.foo # => "Foo#foo"
puts Bar.new.bar #
#puts Bar.new.foo # => "Super says: Bar#foo, Bar inst..."

rani = Cat.new  
rani.breathe  
rani.speak 
