var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
//may need to rename this database!!!
mongoose.connect("mongodb://localhost/users");
var app = express();
//hanlebars for view
app.set("view engine", "hbs");
// app.use(express.static(__dirname, "/public"));
app.use(bodyParser.json());

app.get("/", function(req,res) {
  res.send("Dope ass Project 3");
});

app.listen(3000, function() {
  console.log("Got this blicky up and running!");
});