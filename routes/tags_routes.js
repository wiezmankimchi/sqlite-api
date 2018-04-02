const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./db/metadata.db", err => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the calibre database - routes");
});

// import the db
// let db = require("./db_connect");

var express = require("express");
//ROUTES FOR the API
// ===============================================
//get an instance fo the express Router
var tags_router = express.Router();

// pull all relevant tables
// var Authors = require("./app/models/authors");

tags_router.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  console.log("Something is happening");
  next(); //go to the next routes
});

//test route to make use all in good and working
//accessed at GET "http://localhost:8080/tags"
tags_router.get("/", function(req, res) {
  res.json({
    message: "good.. Welcome to our Calibre API! - This is the TAG Route"
  });
});

//additional routes for the api
// /tags/all        GET     Get all tags
// /tags/:l         GET     Get all tags that starts with :l
// /tags/like/:l    GET     Get all tags like :l

//Authors
const TAGS_ALL = "select * from tags";
let sql = TAGS_ALL;

tags_router.route("/all").get(function(req, res) {
  sql = TAGS_ALL;
  db.all(sql, function(err, rows) {
    res.json(rows);
  });
});

//author starts with :l
tags_router.route("/:l").get(function(req, res) {
  sql = TAGS_ALL;
  sql = sql + " where name like '" + req.params.l + "%'";
  console.log(sql);
  db.all(sql, function(err, rows) {
    res.json(rows);
  });
});

//author like with :l
tags_router.route("/like/:l").get(function(req, res) {
  sql = TAGS_ALL;
  sql = sql + " where name like '%" + req.params.l + "%'";
  console.log(sql);
  db.all(sql, function(err, rows) {
    res.json(rows);
  });
});

db.close;
module.exports = tags_router;
