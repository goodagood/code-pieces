 You can burn text subtitles (hardsubs) with one of two filters: subtitles or ass.
 subtitles filter

 Draw subtitles on top of input video using the libass library. This filter
 requires ffmpeg to be compiled with --enable-libass. See the ​subtitles
 video filter documentation for more details.

 If the subtitle is a separate file called subtitle.srt, you can use this command:

     ffmpeg -i video.avi -vf subtitles=subtitle.srt out.avi

 If the subtitle is embedded in the container video.mkv, you can do this:

     ffmpeg -i video.mkv -vf subtitles=video.mkv out.avi

 ## ass filter

 Same as the subtitles filter, except that it doesn’t require libavcodec and
 libavformat to work. This filter requires ffmpeg to be compiled with
 --enable-libass. On the other hand, it is limited to ​ASS (Advanced
 Substation Alpha) subtitles files. See the ​ass video filter
 documentation for more details.

 ffmpeg -i video.avi -vf "ass=subtitle.ass" out.avi

 If your subtitle is in SubRip, MicroDVD or any other supported text
 subtitles, you have to convert it to ASS before using this filter:

     ffmpeg -i subtitle.srt subtitle.ass


 ## Picture-based subtitles

 You can burn "picture-based" subtitles into a movie as well, by using the
 ​overlay video filter to overlay the images. For instance, dvdsub is a
 type of picture-based overlay subtitles. Example of an MKV with dvdsub
 subtitles in a separate stream:

 ffmpeg -i input.mkv -filter_complex "[0:v][0:s]overlay[v]" -map "[v]" -map 0:a <output options> output.mkv

 If you have multiple subtitle streams, you can select which one to use by
 replacing [0:s] with [0:s:0] to select the first subtitle stream or [0:s:1]
 to select the second subtitle stream, and so on. See also ​the official
 documentation; search for "hardcode".

 Sometimes adding this filter have a side effect of breaking encoding when input file has multiple audio streams and some of those may have problems; in this case selecting one (or more) of the audio streams should fix the problem:

 ffmpeg -i input.ts -filter_complex "[0:v][0:s]overlay[v]" -map "[v]" -map 0:a:0 <output options> output.mkv

 Windows

 Note that on windows you may have to take added measures to setup your fontconfig appropriately, etc: ​https://ffmpeg.zeranoe.com/forum/viewtopic.php?f=7&t=2554



# srt file


SRT is perhaps the most basic of all subtitle formats.

It consists of four parts, all in text..

1. A number indicating which subtitle it is in the sequence.
2. The time that the subtitle should appear on the screen, and then disappear.
3. The subtitle itself.
4. A blank line indicating the start of a new subtitle.

When placing SRT in Matroska, part 3 is converted to UTF-8 (S_TEXT/UTF8) and
placed in the data portion of the Block. Part 2 is used to set the timecode of
the Block, and BlockDuration element. Nothing else is used.

Here is an example SRT file:

    1
    00:02:17,440 --> 00:02:20,375
    Senator, we're making
    our final approach into Coruscant.

    2
    00:02:20,476 --> 00:02:22,501
    Very good, Lieutenant.


<!--
    vim: set ft=markdown tw=78:
-->
