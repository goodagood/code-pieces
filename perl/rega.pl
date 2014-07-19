
# All matches:
#print "It matches\n" if "hellow world" =~ /world/;
#print "It matches\n" if "hellow world" =~ /ll(?=ow)/;
#print "It matches\n" if "hellow world" =~ /ll(?!Ow)/;
#print "It matches\n" if "hellow world" =~ /(?<=ll)ow/;
#print "It matches\n" if "hellow world" =~ /(?<!Ll)ow/;


#print "It matches\n" if "hellow world" =~ /ll(?=.+wo)/;

#$o = 'I am string' ;
#$o =~ s/am/AM/g;
#print "$o";


#$str = 'foo is famous foo,';
##$str   =~ s/foo/bar/g;
#$str   =~ s/(?<=foo),/,/g;
#print "$str";


$str = 'foo is famous foo,';
$str   =~ s/(?:foo) /FOO /g;
print "$str";
