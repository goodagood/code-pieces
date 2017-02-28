class CoffeeCup
    constructor:  ->
        @properties=
            strength: 'medium'
            cream: false
            sugar: false

    hash : 
        a : 1
        b : 2

    show_hash : () ->
        console.log "method show hash: #{@hash}", @hash

    strength: (newStrength) ->
        @properties.strength = newStrength
        @
    cream: (newCream) ->
        @properties.cream = newCream
        @
    sugar: (newSugar) ->
        @properties.sugar = newSugar
        @

morningCup = new CoffeeCup()

console.log morningCup.properties # => { strength: 'medium', cream: false, sugar: false }

eveningCup = new CoffeeCup().strength('dark').cream(true).sugar(false)
console.log eveningCup.properties # => { strength: 'dark', cream: true, sugar: true }

eveningCup.show_hash()
console.log 'hash: ', eveningCup.hash

