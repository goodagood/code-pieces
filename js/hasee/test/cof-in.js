// Generated by CoffeeScript 1.8.0
(function() {
  var Songs, song;

  Songs = (function() {
    Songs.prototype._titles = 0;

    Songs.prototype.get_count = function() {
      return this._titles;
    };

    function Songs(artist, title) {
      this.artist = artist;
      this.title = title;
      this._titles++;
    }

    return Songs;

  })();

  song = new Songs("Rick Astley", "Never Gonna Give You Up");

  song.get_count();

  Songs.get_count();

}).call(this);
