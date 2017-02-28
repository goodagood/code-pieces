
# Cut part from video file from start position to end position with FFmpeg


## How to cut a video, without re-encoding — fast method

Use this to cut video from [start] for [duration]:

    ffmpeg -ss [start] -i in.mp4 -t [duration] -c:v copy -c:a copy out.mp4

Here, the options mean the following:

 > -ss specifies the start time, e.g. 00:01:23.000 or 83 (in seconds)
 > -t specifies the duration of the clip (same format).
 > Recent ffmpeg also has a flag to supply the end time with -to.
 > -c:v copy and -c:a copy copy the video and audio bitstreams
 without re-encoding them. This won't harm the quality and make the
 command run within seconds. You can replace the two options with
 -c copy if you want to copy one video, audio and subtitle stream
 to the output.

Note that this command may not be frame-accurate when copying the bitstreams.

How to cut a video, without re-encoding — accurate method

If you want frame accuracy, use this instead:

    ffmpeg -i in.mp4 -ss [start] -t [duration] -c:v copy -c:a copy out.mp4

However, there's one drawback. The video will have to be decoded until it reaches the position implied by -ss, and
only then it starts copying the bitstream. This can take a long time, especially for really long videos.


## How to cut a video, with re-encoding

If you leave out the -c copy option, ffmpeg will automatically
re-encode the output video and audio according to the
format you chose. For high quality video and audio, read the x264
Encoding Guide and the AAC Encoding Guide,
respectively.

For example:

    ffmpeg -ss [start] -i in.mp4 -t [duration] -c:v libx264 -c:a aac -strict experimental -b:a 128k out.mp4

As explained by Seeking with FFmpeg): When using -ss before -i on
FFmpeg 2.1 and newer, seeking is frame-accurate when re-encoding the
video (i.e., not using -c copy). So you don't have to worry about
putting -ss after -i for speed.



Converting end points to duration

If you need to use an old version of ffmpeg and can't use the -to option, you can create an edit list of in and out
points, and convert these into in points with duration. For this you can use this Ruby script I wrote, which
calculates the difference:

    require "Time"
    def time_diff(time1_str, time2_str)
     t = Time.at( Time.parse(time2_str) - Time.parse(time1_str) )
     (t - t.gmt_offset).strftime("%H:%M:%S.%L")
    end

For example:

    time_diff("00:09:23.000", "00:25:33.000")
    => "00:16:10.000"





1     On ubuntu 12:10, -c:v and -c:a didn't work. I had to use
"-acodec copy and -vcodec copy" instead. –  Samuel Lampa

     Apr 2 '13 at 14:21

1     @Samuel Then you're using an outdated version, which isn't
even real FFmpeg, but the Libav fork. See:
stackoverflow.com/a/9477756/1109017 –  slhck Apr 2 '13 at 14:45

     Thanks for this! if you don't specify a duration, will it go to the end? –  Jeff Mar 31 '14 at 17:03

     @Jeff Yes! (character minimum) –  slhck Apr 1 '14 at 5:34


##          You can use these two methods which work for Windows and Linux.

  There are two ways how to split video files by ffmpeg. The first one is good in itself, more than that - it is
  faster, but sometimes creates output files with certain flaws. So for those cases there is the second way of
  splitting video files: it is considerably slower, the output files are bigger, but it seems they are always of the
  same quality level as input files used.

  Way 1:

  ffmpeg -ss <start> -i in1.avi -t <duration> -c copy out1.avi

  Way 2:

  ffmpeg -ss <start> -i in1.avi -t <duration> out1.avi

    □ <start> – the beginning of the part of a video ffmpeg is to cut out. Format: 00:00:00.0000, meaning
      hours:minutes:seconds:milliseconds.

    □ <duration> – the duration of the part of a video ffmpeg is to cut out. Same format as above.

  Examples:

  ffmpeg -ss 01:19:00 -i in1.avi -t 00:05:00 -c copy out1.avi
  ffmpeg -ss 01:19:00 -i in1.avi -t 00:05:00 out1.avi

  ffmpeg cuts out a part of the video file starting from 1 hour 19 minutes 0 seconds. The duration of the video
  sequence cut out is 5 minutes 0 seconds.







    Ok, thnx. Will check out the docs and give it a try tomorrow. –  juGGaKNot Oct 3 '13 at 19:18

2     -sameq does not mean "same quality" and has been removed from ffmpeg. Use -codec copy instead. Also, don't forget
    about the -to option. –  LordNeckbeard Oct 3 '13 at 20:47
    I corrected the commands in your quote, as they were quite outdated. Please don't copy-paste information without
    properly quoting it. –  slhck Oct 4 '13 at 10:08


   This is odd that no-one suggested the trim filter.

   Drop everything except the second minute of input:

   ffmpeg -i INPUT -vf trim=60:120

   Keep only the first second:

   ffmpeg -i INPUT -vf trim=duration=1

   Drop everything except from second 13 to second 58:

   ffmpeg -i INPUT -vf trim=13:58 OUTPUT


   
        Yes, good to mention trim and atrim. I usually use these when filtering, but users should note that filtering
        requires re-encoding. –  LordNeckbeard Apr 7 at 17:28




         I think you can use the following command now.

         ffmpeg -i inputFile -vcodec copy -acodec copy -ss 00:09:23 -to 00:25:33 outputFile

         Have a look also ffmpeg Doc





         



      I use the following syntax to cut video with ffmpef:

      ffmpeg -sameq -ss [start_seconds] -t [duration_seconds] -i [input_file] [outputfile]

      -t is used to set the duration in seconds - you can't specify the end time but this should work for you.


                                                             




      
       Why are you setting FFmpeg to re-encode the file? Note that -sameq does not mean "same quality" at all. – 
           slhck Jan 11 '12 at 21:18





# end

vim: set ft=markdown:
