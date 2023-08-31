var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AdminSchema = Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,

    required: true,
  },
  postal_code: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('admin', AdminSchema);
