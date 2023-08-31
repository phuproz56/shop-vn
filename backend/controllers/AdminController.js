var Admin = require("../models/admin");
var bcrypt = require("bcrypt-nodejs");
var jwt = require("../helpers/jwt");

const register_admin = async function (req, res) {
  var data = req.body;
  var admin_arr = [];

  admin_arr = await Admin.find({ email: data.email });

  if (admin_arr.length == 0) {
    if (data.password) {
      bcrypt.hash(data.password, null, null, async function (err, hash) {
        if (hash) {
          data.password = hash;
          var reg = await Admin.create(data);
          res.status(200).send({ data: reg });
        } else {
          res.status(400).send({ message: "ErrorServer", data: undefined });
        }
      });
    } else {
      res.status(200).send({ message: "there is no password" });
    }
    //
    // res.status(200).send({ message: reg });
  } else {
    res.status(400).send({ message: "email đã tồn tại!", data: undefined });
  }
};

const login_admin = async function (req, res) {
  var data = req.body;
  var admin_arr = [];

  admin_arr = await Admin.find({ email: data.email });

  if (admin_arr.length == 0) {
    res.status(200).send({ message: "Email không tồn tại!", data: undefined });
  } else {
    //LOGIN
    let user = admin_arr[0];
    bcrypt.compare(data.password, user.password, async function (error, check) {
      if (check) {
        res.status(200).send({
          data: user,
          token: jwt.createToken(user),
        });
      } else {
        res.status(200).send({ message: "sai mật khẩu!", data: undefined });
      }
    });
  }
};

module.exports = {
  register_admin,
  login_admin,
};
