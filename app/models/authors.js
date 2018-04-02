const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./../../db/metadata.db", err => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected to the calibre database - authors");
  }
});

// table description
const AUTHORS = { id: Number, name: String, sort: String, link: String };
// sql statements
const AUTHORS_ALL = "select * from authors";

// find all authors
let sql = AUTHORS_ALL;

// main object to export
let authors = [];

db.all(sql, function(err, rows) {
  // rows.forEach(function(row) {
  //   console.log(row.id, row.name);
  // });
  authors = rows;
});
db.close();

module.exports = authors;
