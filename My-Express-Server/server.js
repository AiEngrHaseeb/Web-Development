//jshint esversion:6
const express = require('express');
const app = express();
app.get("/",function(req,res){
  res.send("<h1>Hello World</h1><h1>Hello World</h1>");
});
app.get("/contact",function(req,res){
  res.send("<h1>Contact:</h1><h3>haseeb@email.com</h3>");
});
app.listen("3000", function(){
  console.log("Server 3000 is working...");
});
