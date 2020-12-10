var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';


router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/API",function(req,res){
  res.sendFile(path + "API.html");
});

router.get("/Blog",function(req,res){
  res.sendFile(path + "Blog.html");
});

router.get("/form",function(req,res){
  res.sendFile(path + "form.html");
});

router.get("/Game",function(req,res){
  res.sendFile(path + "Game.html");
});

router.get("/Photos",function(req,res){
  res.sendFile(path + "Photos.html");
});

app.use("/",router);

app.use(express.static(__dirname + '/lib/css/main.css'));

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
