
## concat with fade effect?

    ffmpeg -i first.ogg -i second.ogg \
    -filter_complex \
    "color=black:WxH:d=Video1Length+Video2Length-FadeDuration[base]; \
     [0:v]setpts=PTS-STARTPTS[v0]; \
      [1:v]format=yuva420p,fade=in:st=0:d=FadeDuration:alpha=1, \
            setpts=PTS-STARTPTS+((Video1Length-FadeDuration)/TB)[v1]; \
             [base][v0]overlay[tmp]; \
              [tmp][v1]overlay,format=yuv420p[fv]; \
               [0:a][1:a]acrossfade=d=FadeDuration[fa]" \
               -map [fv] -map [fa]
               output.ogg


## cross fade ?

suggest to do that way:

    Create black background with the same duration and resolution as output video should be
    Add alpha channel to each video
    Add fade to alpha effect to each video
    Use overlay on each video with black background

                So the command for adding crossfade to 2 video (5 sec) each should be:

                ffmpeg -i 1.mp4 -i 2.mp4 -f lavfi -i color=black -filter_complex \
                "[0:v]format=pix_fmts=yuva420p,fade=t=out:st=4:d=1:alpha=1,setpts=PTS-STARTPTS[va0];\
                [1:v]format=pix_fmts=yuva420p,fade=t=in:st=0:d=1:alpha=1,setpts=PTS-STARTPTS+4/TB[va1];\
                [2:v]scale=960x720,trim=duration=9[over];\
                [over][va0]overlay[over1];\
                [over1][va1]overlay=format=yuv420[outv]" \
                -vcodec libx264 -map [outv] out.mp4

This will fade out first video to alpha at 4th second (st=4) during 1 second
(d=1), fade in the second one at 0 second (st=0) during 1 second (d=1) and
moves it's display time forward to 4 sec (+4/TB). Then we just cut 9 second of
black color, scale it to output video size and overlay the stuff.



# volume adjust

 To turn the audio volume up or down, you may use FFmpeg's Audio Filter named ​volume, like in the following example. If we want our volume to be half of the input volume:

 ffmpeg -i input.wav -af "volume=0.5" output.wav

 150% of current volume:

 ffmpeg -i input.wav -af "volume=1.5" output.wav

 If you are familiar with decibels you can also use dB:

 ffmpeg -i input.wav -af "volume=10dB" output.wav

 In older versions of FFmpeg, the option "-af" wasn't implemented, so we had to use this:

 ffmpeg -f lavfi -i "amovie=input.wav,volume=0.5" output.wav


keep video:

    ffmpeg -i inputfile -vcodec copy -af "volume=10dB" outputfile

    To decrease the volume of the first audio track for 5dB use:

    ffmpeg -i inputfile -vcodec copy -af "volume=-5dB" outputfile


# hflip vflip

    ffmpeg -i input.mp4 -vf "hflip,vflip,format=yuv420p" -metadata:s:v rotate=0 \
    -codec:v libx264 -codec:a copy output.mkv