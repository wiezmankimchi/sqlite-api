//required packages
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//configure app to use body-parser()
// this will let us get the data from a POST
app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  app.use(bodyParser.json());

var port = process.env.PORT || 8080; //set the serer port


//get the db configuration
var db = require("./db_connect");


//import the routes
var router = require("./routes");

//START THE SERVER
// ===============================================
app.listen(port);
console.log("Magic happens on port " + port);