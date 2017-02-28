
# FFmpeg MP3 Encoding Guide =

This page describes how to use the external libmp3lame encoding library within `ffmpeg` to create MP3 audio files (`ffmpeg` has no native MP3 encoder).  See also [[GuidelinesHighQualityAudio|other codecs]] you could use, and [[Encode/AAC|FFmpeg AAC Encoding Guide]] if you want AAC instead, and the [https://www.ffmpeg.org/ffmpeg-codecs.html#libmp3lame-1 official documentation].

## VBR Encoding ==

Example to encode VBR MP3 audio with `ffmpeg` using the libmp3lame library:
{{{
ffmpeg -i input.wav -codec:a libmp3lame -qscale:a 2 output.mp3
}}}

Control quality with `-qscale:a` (or the alias `-q:a`). Values are encoder specific, so for libmp3lame the range is 0-9 where a lower value is a higher quality. 0-3 will normally produce transparent results, 4 (default) should be close to perceptual transparency, and 6 produces an "acceptable" quality. The option `-qscale:a` is mapped to the `-V` option in the standalone `lame` command-line interface tool.

||||||||= '''LAME Bitrate Overview''' =||
|| `lame` option || Average kbit/s || Bitrate range kbit/s || `ffmpeg` option
|| `-b 320` || 320 || 320 CBR (non VBR) example || `-b:a 320k` (NB this is 32KB/s, or its max)
|| `-V 0` || 245 || 220-260 || `-q:a 0` (NB this is VBR from 22 to 26 KB/s)
|| `-V 1` || 225 || 190-250 || `-q:a 1`
|| `-V 2` || 190 || 170-210 || `-q:a 2`
|| `-V 3` || 175 || 150-195 || `-q:a 3`
|| `-V 4` || 165 || 140-185 || `-q:a 4`
|| `-V 5` || 130 || 120-150 || `-q:a 5`
|| `-V 6` || 115 || 100-130 || `-q:a 6`
|| `-V 7` || 100 || 80-120  || `-q:a 7`
|| `-V 8` || 85  || 70-105  || `-q:a 8`
|| `-V 9` || 65  || 45-85   || `-q:a 9`

In our example above, we selected `-qscale:a 2`, meaning we used LAME's option `-V 2`, which gives us a VBR MP3 audio stream with an average stereo bitrate of 170-210 kBit/s.

## CBR Encoding ==

If you need constant bitrate (CBR) MP3 audio, you need to use the `-b:a` option instead of `-qscale:a`. Here you can specify the number of bits per second, for example `-b:a 256k` if you want 256 Kbit/s (25.6 KB/s) audio.  Available options are: 8, 16, 24, 32, 40, 48, 64, 80, 96, 112, 128, 160, 192, 224, 256, or 320 (add a `k` after each to get that rate).  So to get the highest quality setting use `-b:a 320k` (but see note below).

{{{
#!div style="border: 1pt dotted; margin: 1em; background-color: #fffff9;"

'''Note:''' Using `-b:a 320k` is generally considered wasteful because:

* `-q:a 0` – `-q:a 3` will normally produce transparent results.
* MP3 is lossy anyway, so if you really want the highest quality use a lossless format such as FLAC.

See [http://wiki.hydrogenaudio.org/index.php?title=LAME#Recommended_encoder_settings Hydrogen Audio: Recommended LAME Encoder Settings] for more info.
}}}

== ABR Encoding ==

ABR is something of a mixture between VBR and CBR, see the [https://www.ffmpeg.org/ffmpeg-codecs.html#libmp3lame-1 official documentation] for details on use.

== Troubleshooting ==

Sometimes the output will consist of fewer bits per second than requested:

* With CBR it could be due to the chosen value being in-between allowable settings (it defaults down to the next lower acceptable bitrate).
* With VBR it could be due to the input already in being a lower bitrate than requested, in which case, it basically just re-encodes it at the bitrate of the input.
* Or possibly that the input was CBR, and the VBR aspect is able to reduce bitrate by a considerable amount.

{{{#!comment
Is anything in this section confirmed or just anecdotal evidence?
}}}

== Also see ==
* [http://ffmpeg.org/ffmpeg-codecs.html#libmp3lame-1 FFmpeg Codecs Documentation for libmp3lame]
* [http://wiki.hydrogenaudio.org/index.php?title=LAME#Recommended_encoder_settings Hydrogen Audio: Recommended LAME Encoder Settings]
