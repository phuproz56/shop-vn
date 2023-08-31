var express = require("express");
var UsersController = require("../controllers/UsersController");

var api = express.Router();

api.post("/register_user", UsersController.register_user);

module.exports = api;
