mixOf = (base, mixins...) ->
  class Mixed extends base
  for mixin in mixins by -1 #earlier mixins override later ones
    for name, method of mixin::
      Mixed::[name] = method
  Mixed

#...

class DeepThought
  answer: ->
    42
    
class PhilosopherMixin
  pontificate: ->
    console.log "hmm..."
    @wise = yes

class DeeperThought extends mixOf DeepThought, PhilosopherMixin
  answer: ->
    @pontificate()
    super()
    
earth = new DeeperThought
earth.answer()
# hmm...
# => 42
