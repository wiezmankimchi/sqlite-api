const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./db/metadata.db", err => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the calibre database - routes");
});

var express = require("express");
//ROUTES FOR the API
// ===============================================
//get an instance fo the express Router
var books_router = express.Router();

books_router.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  console.log("Books Route is in use");
  next(); //go to the next routes
});

//test route to make use all in good and working
//accessed at GET "http://localhost:8080/tags"
books_router.get("/", function(req, res) {
  res.json({
    message: "good.. Welcome to our Calibre API! - This is the BOOKS Route"
  });
});

//additional routes for the api
// /tags/all        GET     Get all books
// /tags/:l         GET     Get all books that starts with :l
// /tags/like/:l    GET     Get all books like :l

//Books
const BOOKS_ALL = "select * from books";
let sql = BOOKS_ALL;

books_router.route("/all").get(function(req, res) {
  sql = BOOKS_ALL;
  db.all(sql, function(err, rows) {
    res.json(rows);
  });
});

//book title starts with :l
books_router.route("/:l").get(function(req, res) {
  sql = BOOKS_ALL;
  sql = sql + " where title like '" + req.params.l + "%'";
  console.log(sql);
  db.all(sql, function(err, rows) {
    res.json(rows);
  });
});

//book title like with :l
books_router.route("/like/:l").get(function(req, res) {
  sql = BOOKS_ALL;
  sql = sql + " where title like '%" + req.params.l + "%'";
  console.log(sql);
  db.all(sql, function(err, rows) {
    res.json(rows);
  });
});

//books of specific :author_id
books_router.route("/author/:l").get(function(req, res) {
  sql =
    "select books.* from books, books_authors_link where books.id=books_authors_link.book and books_authors_link.author=" +
    req.params.l;
  console.log(sql);
  db.all(sql, function(err, rows) {
    res.json(rows);
  });
});

var list = [];
//books of specific :author_id
books_router.route("/tag/:l").get(function(req, res) {
  sql =
    "select books.*, tags.name as tag from books, books_tags_link, tags where books.id=books_tags_link.book and tags.id = books_tags_link.tag and tags.id=" +
    req.params.l;

  db.each(
    sql,
    function(err, row) {
      db.all("select * from data where book=?", [row.id], function(err, rows) {
        row.data = rows;
        list.push(row);
        if (list.length === thenumberofselectedrows) {
          var str = JSON.stringify(list, null, 4);
          // console.log(str);
          res.json(list);
        }
      });
    },
    function(err, num) {
      thenumberofselectedrows = num;
    }
  );
});

db.close;
module.exports = books_router;
