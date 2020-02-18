var db = require("../models");

module.exports = function(app) {

    app.get("/api/users", function(req, res) {
        var query = {};
        if (req.query.group_id) {
          query.GroupId = req.query.group_id;
        }
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Group
        db.User.findAll({
          where: query,
          include: [db.Group]
        }).then(function(dbUser) {
          res.json(dbUser);
        });
      });


      app.get("/api/users/:id", function(req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Group
        db.User.findOne({
          where: {
            id: req.params.id
          },
          include: [db.Group]
        }).then(function(dbUser) {
          res.json(dbUser);
        });
      });



    // POST route for saving a new user
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};