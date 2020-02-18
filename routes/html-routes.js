var path = require("path");

module.exports = function(app) {

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // profile route loads profile.html
  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });

  // concerts route loads concerts.html
  app.get("/concerts", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/concerts.html"));
  });

  // authors route loads author-manager.html
  app.get("/authors", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  });

  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cms.html"));
  });

};