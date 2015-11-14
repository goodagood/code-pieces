
var p = console.log;


module.exports = function(req, res, next) {
    p(' you are watching through express.js middle-ware like function ');
    if(next) return next(req, res, next);
}
