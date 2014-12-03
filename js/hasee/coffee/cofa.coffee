class What
    # Although it's directly accessible, 
    # the leading _ defines it by convention as private property.
    @_class_var : 8
    aa : 'i am aa'

    @class_met : ->
      console.log 'in class met'
      'class method'

    @get_count: ->
      @_titles

    call_other : () ->
        console.log "call ok:"
        @ok()

    ok : ->
      #console.log 'this is ok'
      console.log @constructor._class_var

    constructor: (@artist, @title) ->
      @constructor._titles++     # Refers to <Classname>._titles, in this case What.titles
      @bb = 99

#console.log What.get_count()
# => 0

#console.log What.class_met()
#console.log What._class_var

w = new What('this is who', 'the title is unknown')
console.log w.aa, w.bb
#w.call_other()
#console.log w._class_var
#console.log w.ok()
#w.ok()

#song = new What("Rick Astley", "Never Gonna Give You Up")
#console.log What.get_count()
# => 1

#song.ok()
#console.log song.artist, song.title
#console.log song._titles
#console.log What._titles
#song.get_count()
# => TypeError: Object <What> has no method 'get_count'
