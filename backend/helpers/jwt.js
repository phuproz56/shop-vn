var jwt = require("jwt-simple");
var moment = require("moment");
var secret = "asdaksdj1o23123";

exports.createToken = function (user) {
  var payload = {
    sub: user._id,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    iat: moment().unix(),
    exp: moment().add(7, "days").unix(),
  };
  return jwt.encode(payload, secret)
};
