

use HTTP::Daemon;
use HTTP::Status;
 
my $d = HTTP::Daemon->new(
    LocalAddr => 'localhost',
    LocalPort => 5050,
    Reuse     => 1,
) || die;
print "Please contact me at: <URL:", $d->url, ">\n";

while (my $c = $d->accept) {
    while (my $r = $c->get_request) {
        if ($r->method eq 'GET' and $r->uri->path eq "/xyz") {
            # remember, this is *not* recommended practice :-)
            $c->send_file_response("/tmp/man.perl.txt");
        }
        else {
            $c->send_error(RC_FORBIDDEN)
        }
    }
    $c->close;
    undef($c);
}
