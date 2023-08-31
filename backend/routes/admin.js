var express = require("express");
var AdminController = require("../controllers/AdminController");

var api = express.Router();

api.post("/register_admin", AdminController.register_admin);

module.exports = api;
