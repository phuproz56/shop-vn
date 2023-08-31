"use strict";

var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var port = process.env.PORT || 4201;

var user_route = require("./routes/users");
var admin_route = require("./routes/admin");

app.listen(port, (err)=>{
  if(err){
      console.err('Kết nối với server thất bại! ' + err);
  }
  else{
      console.log('Đã kết nối với Server ở port ' + port);
  }   
})
mongoose
  .connect("mongodb://127.0.0.1:27017/shop-vn", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB! ");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
  
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json({limit: '50mb', extended: true}));

app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*'); 
  res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
  res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
  next();
});

app.use("/api", user_route);
app.use("/api", admin_route);

module.exports = app;
