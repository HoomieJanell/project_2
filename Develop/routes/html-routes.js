// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../../index.html"));
  });

  // concerts route loads concerts.html
  app.get("/concerts", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/concerts.html"));
  });

  // signup route loads signup.html
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // profile route loads profile.html
  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });

  // concert-group route loads concert-group.html
  app.get("/concert-group", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/concert-group.html"));
  });

}; 