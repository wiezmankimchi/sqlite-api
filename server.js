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
// var db = require("./db_connect");

//import the routes
var authors_router = require("./routes/authors_routes");
var tags_routes = require("./routes/tags_routes");
var books_routes = require("./routes/books_routes");

//register the routes
//all of the routes will be prefixed with /api
app.use("/authors", authors_router);
app.use("/tags", tags_routes);
app.use("/books", books_routes);

//START THE SERVER
// ===============================================
app.listen(port);
console.log("Magic happens on port " + port);
