//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
  var no1=Number(req.body.num1);
  var no2=Number(req.body.num2);
  res.send("The Sum Of Number 1 and Number 2 : "+ (no1+no2));
});
app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});
app.post("/bmicalculator",function(req,res){
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  res.send("Your BMI Is"+(weight/(height*height)));
});

app.listen("3000", function(){
  console.log("Server 3000 is working...");
});
