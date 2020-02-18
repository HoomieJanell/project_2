var db = require("../models");

module.exports = function(app) {

app.get("/api/groups", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Group.findAll({
      include: [db.User]
    }).then(function(dbGroup) {
      res.json(dbGroup);
    });
  });

  app.get("/api/groups/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Group.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbGroup) {
      res.json(dbGroup);
    });
  });




app.post("/api/groups", function(req, res) {
    db.Group.create(req.body).then(function(dbGroup) {
      res.json(dbGroup);
    });
  });

};