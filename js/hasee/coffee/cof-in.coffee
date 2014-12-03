class Songs
  _titles: 0
  # Although it's directly accessible, the leading _ defines it by convention as private property.

  get_count: ->
    @_titles

  constructor: (@artist, @title) ->
    @_titles++

song = new Songs("Rick Astley", "Never Gonna Give You Up")
song.get_count()
# => 1

Songs.get_count()
# => TypeError: Object function Songs(artist, title) ... has no method 'get_count'
