const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./db/metadata.db", err => {
  if (err) {
    console.log("db_connect");
    console.error(err.message);
  } else {
    console.log("Connected to the calibre database - db_connect");
  }
});
