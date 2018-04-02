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
var authors_router = express.Router();

authors_router.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  console.log("Something is happening");
  next(); //go to the next routes
});

//test route to make use all in good and working
//accessed at GET "http://localhost:8080/authors"
authors_router.get("/", function(req, res) {
  res.json({
    message: "good.. Welcome to our Calibre API! - This is the AUTHORS Route"
  });
});

//additional routes for the api
// /authors/all        GET     Get all authors
// /authors/:l         GET     Get all authors that starts with :l
// /authors/like/:l    GET     Get all authors like :l

//Authors
const AUTHORS_ALL = "select * from authors";
let sql = AUTHORS_ALL;

authors_router.route("/all").get(function(req, res) {
  sql = AUTHORS_ALL;
  db.all(sql, function(err, rows) {
    res.json(rows);
  });
});

//author starts with :l
authors_router.route("/:l").get(function(req, res) {
  sql = AUTHORS_ALL;
  sql = sql + " where name like '" + req.params.l + "%'";
  console.log(sql);
  db.all(sql, function(err, rows) {
    res.json(rows);
  });
});

//author like with :l
authors_router.route("/like/:l").get(function(req, res) {
  sql = AUTHORS_ALL;
  sql = sql + " where name like '%" + req.params.l + "%'";
  console.log(sql);
  db.all(sql, function(err, rows) {
    res.json(rows);
  });
});

module.exports = authors_router;
