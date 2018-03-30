// queries

const ALL_AUTHORS = "SELECT authors.id as id, authors.name as name from authors order by authors.id";


db.serialize(() => {
    db.each(`SELECT * FROM ratings`, (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row);
    });
  });
   
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
  });