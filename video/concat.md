
Concatenating media files

Contents


If you have media files with exactly the same codec and codec parameters you
can concatenate them as described in "Concatenation of files with same codecs".
If you have media with different codecs you can concatenate them as described
in "Concatenation of files with different codecs" below.

Concatenation of files with same codecs

There are two methods within ffmpeg that can be used to concatenate files of
the same type: the concat ''demuxer'' and the concat ''protocol''. The demuxer
is more flexible - it requires the same codecs, but different container formats
can be used; and it can be used with any container formats, while the protocol
only works with a select few containers. However, the concat protocol is
available in older versions of ffmpeg, where the demuxer isn't.

Concat demuxer

The concat demuxer was added to FFmpeg 1.1. You can read about it in the documentation.
Instructions

Create a file mylist.txt with all the files you want to have concatenated in
the following form (lines starting with a # are ignored):

    # this is a comment
    file '/path/to/file1'
    file '/path/to/file2'
    file '/path/to/file3'

Note that these can be either relative or absolute paths. Then you can stream copy or re-encode your files:

    ffmpeg -f concat -i mylist.txt -c copy output

It is possible to generate this list file with a bash for loop, or using printf. Either of the following would generate a list file containing every *.wav in the working directory:

    # with a bash for loop
    for f in ./*.wav; do echo "file '$f'" >> mylist.txt; done
    # or with printf
    printf "file '%s'\n" ./*.wav > mylist.txt

If your shell supports process substitution (like Bash and Zsh), you can avoid explicitly creating a list file and do the whole thing in a single line. This would be impossible with the concat protocol (see below). Make sure to generate absolute paths here, since ffmpeg will resolve paths relative to the list file your shell may create in a directory such as "/proc/self/fd/".

    ffmpeg -f concat -i <(for f in ./*.wav; do echo "file '$PWD/$f'"; done) -c copy output.wav
    ffmpeg -f concat -i <(printf "file '$PWD/%s'\n" ./*.wav) -c copy output.wav
    ffmpeg -f concat -i <(find . -name '*.wav' -printf "file '$PWD/%p'\n") -c copy output.wav

You can also loop a video. This example will loop input.mkv 10 times:

for i in {1..10}; do printf "file '%s'\n" input.mkv >> mylist.txt; done
ffmpeg -f concat -i mylist.txt -c copy output.mkv

Concat protocol

While the demuxer works at the stream level, the concat protocol works at the
file level. Certain files (mpg and mpeg transport streams, possibly others) can
be concatenated. This is analogous to using cat on UNIX-like systems or copy on
Windows.

Instructions

    ffmpeg -i "concat:input1.mpg|input2.mpg|input3.mpg" -c copy output.mpg

If you have MP4 files, these could be losslessly concatenated by first
transcoding them to mpeg transport streams. With h.264 video and AAC audio, the
following can be used:

    ffmpeg -i input1.mp4 -c copy -bsf:v h264_mp4toannexb -f mpegts intermediate1.ts
    ffmpeg -i input2.mp4 -c copy -bsf:v h264_mp4toannexb -f mpegts intermediate2.ts
    ffmpeg -i "concat:intermediate1.ts|intermediate2.ts" -c copy -bsf:a aac_adtstoasc output.mp4

If you're using a system that supports named pipes, you can use those to avoid
creating intermediate files - this sends stderr (which ffmpeg sends all the
written data to) to /dev/null, to avoid cluttering up the command-line:

    mkfifo temp1 temp2
    ffmpeg -i input1.mp4 -c copy -bsf:v h264_mp4toannexb -f mpegts temp1 2> /dev/null & \
    ffmpeg -i input2.mp4 -c copy -bsf:v h264_mp4toannexb -f mpegts temp2 2> /dev/null & \
    ffmpeg -f mpegts -i "concat:temp1|temp2" -c copy -bsf:a aac_adtstoasc output.mp4

All MPEG codecs (H.264, MPEG4/divx/xvid, MPEG2; MP2, MP3, AAC) are supported in
the mpegts container format, though the commands above would require some
alteration (the -bsf bitstream filters will have to be changed).
Concatenation of files with different codecs
Concat filter

The concat filter is available in recent versions of ffmpeg. See the concat filter documentation for more info.
Instructions

This is easiest to explain using an example:

    ffmpeg -i input1.mp4 -i input2.webm \
    -filter_complex "[0:0] [0:1] [1:0] [1:1] concat=n=2:v=1:a=1 [v] [a]" \
    -map "[v]" -map "[a]" <encoding options> output.mkv

    On the -filter_complex line, the following:

    [0:0] [0:1] [1:0] [1:1]

tells ffmpeg what streams to send to the concat filter; in this case, streams 0 and 1 from input 0 (input1.mp4 in this example), and streams 0 and 1 from input 1 (input2.webm).

    concat=n=2:v=1:a=1 [v] [a]'

This is the concat filter itself. n=2 is telling the filter that there are two input files; v=1 is telling it that there will be one video stream; a=1 is telling it that there will be one audio stream. [v] and [a] are names for the output streams to allow the rest of the ffmpeg line to use the output of the concat filter.

Note that the single quotes around the whole filter section are required.

-map '[v]' -map '[a]'

This tells ffmpeg to use the results of the concat filter rather than the streams directly from the input files.

Note that filters are incompatible with stream copying; you can't use -c copy with this method. Also, I'm not sure whether softsubs are supported.

As you can infer from this example, multiple types of input are supported, and anything readable by ffmpeg should work. The inputs have to be of the same frame size, and a handful of other attributes have to match.
Using an external script

The following script can be used to concatenate multiple input media files (containing audio/video streams) into one output file (just like as if all the inputs were played in a playlist, one after another). It is based on this FAQ item: How can I join video files, which also contains other useful information.

If you find any bugs, feel free to correct the script, add yourself to the list of contributors and change the version string to reflect your change(s) or email the author with your patch, whatever you find more convenient.
Instructions

Save the script in a file named mmcat (or some other name), make it executable (chmod +x mmcat) and run it, using the syntax:

./mmcat <input1> <input2> <input3> ... <output>

If you get an error like this:

    #/tmp/mcs_v_all: Operation not permitted

that could mean that you don't have correct permissions set on /tmp directory (or whatever you set in TMP variable) or that decoding of your input media has failed for some reason. In this case it would be the best to turn on the logging (as described in the script's comments)
Script

    #!/bin/bash

    ################################################################################
    #
    # Script name: MultiMedia Concat Script (mmcat)
    # Author: burek (burek021@gmail.com)
    # License: GNU/GPL, see http://www.gnu.org/copyleft/gpl.html
    # Date: 2012-07-14
    #
    # This script concatenates (joins, merges) several audio/video inputs into one
    # final output (just like as if all the inputs were played in a playlist, one
    # after another).
    #
    # All input files must have at least one audio and at least one video stream.
    # If not, you can easily add audio silence, using FFmpeg. Just search the
    # internet for "ffmpeg add silence".
    #
    # The script makes use of FFmpeg tool (www.ffmpeg.org) and is free for use under
    # the GPL license. The inspiration for this script came from this FAQ item:
    # http://ffmpeg.org/faq.html#How-can-I-join-video-files_003f
    #
    # If you find any bugs, please send me an e-mail so I can fix it.
    #
    ################################################################################
    #
    # General syntax: mmcat <input1> <input2> <input3> ... <output>
    #
    # For example: mmcat file1.flv file2.flv output.flv
    # would create "output.flv" out of "file1.flv" and "file2.flv".
    #
    ################################################################################

    # change this to what you need !!!
    EXTRA_OPTIONS='-vcodec libx264 -crf 23 -preset medium -acodec aac -strict experimental -ac 2 -ar 44100 -ab 128k'

    ################################################################################
    #
    # NO NEED TO TOUCH ANYTHING AFTER THIS LINE!
    #
    ################################################################################

    # the version of the script
    VERSION=1.3

    # location of temp folder
    TMP=/tmp

    ################################################################################

    echo "MultiMedia Concat Script v$VERSION (mmcat) - A script to concatenate multiple multimedia files."
    echo "Based on FFmpeg - www.ffmpeg.org"
    echo "Don't forget to edit this script and change EXTRA_OPTIONS"
    echo ""

    ################################################################################
    # syntax check (has to have at least 3 params: infile1, infile2, outfile
    ################################################################################
    if [ -z $3 ]; then
    echo "Syntax: $0 <input1> <input2> <input3> ... <output>"
    exit 1
    fi

    ################################################################################
    # get all the command line parameters, except for the last one, which is output
    ################################################################################
    # $first  - first parameter
    # $last   - last parameter (output file)
    # $inputs - all the inputs, except the first input, because 1st input is
    #           handled separately
    ################################################################################
    first=${@:1:1}
    last=${@:$#:1}
    len=$(($#-2))
    inputs=${@:2:$len}

    # remove all previous tmp fifos (if exist)
    rm -f $TMP/mcs_*

    ################################################################################
    # decode first input differently, because the video header does not have to be
    # kept for each video input, only the header from the first video is needed
    ################################################################################
    mkfifo $TMP/mcs_a1 $TMP/mcs_v1

    ffmpeg -y -i $first -vn -f u16le -acodec pcm_s16le -ac 2 -ar 44100 $TMP/mcs_a1 2>/dev/null </dev/null &
    ffmpeg -y -i $first -an -f yuv4mpegpipe -vcodec rawvideo $TMP/mcs_v1 2>/dev/null </dev/null &

    # if you need to log the output of decoding processes (usually not necessary)
    # then replace the "2>/dev/null" in 2 lines above with your log file names, like this:
    #ffmpeg -y -i $first -vn -f u16le -acodec pcm_s16le -ac 2 -ar 44100 $TMP/mcs_a1 2>$TMP/log.a.1 </dev/null &
    #ffmpeg -y -i $first -an -f yuv4mpegpipe -vcodec rawvideo $TMP/mcs_v1 2>$TMP/log.v.1 </dev/null &

    ################################################################################
    # decode all the other inputs, remove first line of video (header) with tail
    # $all_a and $all_v are lists of all a/v fifos, to be used by "cat" later on
    ################################################################################
    all_a=$TMP/mcs_a1
    all_v=$TMP/mcs_v1
    i=2
    for f in $inputs
    do
    mkfifo $TMP/mcs_a$i $TMP/mcs_v$i

    ffmpeg -y -i $f -vn -f u16le -acodec pcm_s16le -ac 2 -ar 44100 $TMP/mcs_a$i 2>/dev/null </dev/null &
    { ffmpeg -y -i $f -an -f yuv4mpegpipe -vcodec rawvideo - 2>/dev/null </dev/null | tail -n +2 > $TMP/mcs_v$i ; } &

    # if you need to log the output of decoding processes (usually not necessary)
    # then replace the "2>/dev/null" in 2 lines above with your log file names, like this:
    #ffmpeg -y -i $f -vn -f u16le -acodec pcm_s16le -ac 2 -ar 44100 $TMP/mcs_a$i 2>$TMP/log.a.$i </dev/null &
    #{ ffmpeg -y -i $f -an -f yuv4mpegpipe -vcodec rawvideo - 2>$TMP/log.v.$i </dev/null | tail -n +2 > $TMP/mcs_v$i ; } &

    all_a="$all_a $TMP/mcs_a$i"
    all_v="$all_v $TMP/mcs_v$i"
    let i++
    done

    ################################################################################
    # concatenate all raw audio/video inputs into one audio/video
    ################################################################################
    mkfifo $TMP/mcs_a_all
    mkfifo $TMP/mcs_v_all
    cat $all_a > $TMP/mcs_a_all &
    cat $all_v > $TMP/mcs_v_all &

    ################################################################################
    # finally, encode the raw concatenated audio/video into something useful
    ################################################################################
    ffmpeg -f u16le -acodec pcm_s16le -ac 2 -ar 44100 -i $TMP/mcs_a_all \
    -f yuv4mpegpipe -vcodec rawvideo -i $TMP/mcs_v_all \
    $EXTRA_OPTIONS \
    $last

    ################################################################################
    # remove all fifos
    ################################################################################
    rm -f $TMP/mcs_*


# end
  vim: set ft=markdown: