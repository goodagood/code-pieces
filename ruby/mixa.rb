_local = "I am local var"
ContA  = "constant a"

module A

    def a1
        puts _local
    end

    def a2
        _local = "changed"
    end
end

module B
    def b1
        puts "\n see _local in module B B1:\n"
        puts _local
    end
    def b2
        puts ContA
    end
end

class Sample
    include A
    include B
    def s1
    end
end

samp=Sample.new
#samp.a1
#samp.a2
#samp.b1
samp.b2
samp.s1