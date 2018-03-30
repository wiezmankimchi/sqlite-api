var express = require("express");
//ROUTES FOR the API
// ===============================================
//get an instance fo the express Router
var router = express.Router();

//pull the schema in the db
var Author = require("./app/models/authors");

//test route to make use all in good and working
//accessed at GET "http://localhost:8080/api"
router.get("/", function(req, res) {
    res.json({
      message: "good.. Welcome to our API!"
    });
  });


//additional routes for the api
// /api/authors      GET     Get all the people
// /api/authors      POST    Crete a new person
// /api/authors/:id  GET     Get a single person
// /api/authors/:id  PUT     Update a person with new info
// /api/authors/:id  DELETE  Delete a person

// router.route("/authors").get(function(req, res) {
//     Person.find(function(err, people) {
//       if (err) res.send(err);
//       console.log("list all");
//       res.json(people);
//     });
//   });


//   db.all(sql,params,(err, rows ) => {
//     // process rows here    
// });


module.exports = router;