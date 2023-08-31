var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    default: "profile.png",
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  birth: {
    type: String,
    required: false,
  },
  postal_code: {
    type: String,
    required: false,
  }
});

module.exports = mongoose.model('user', UserSchema);
