  /*db.User.findAll({}).then(function(dbUser) {
    $.get("/api/user").then(function(data) {
    $(".member-email").text(data.email);
    $(".member-username").text(data.username);
    $(".member-bio").text(data.bio);
  });
});
*/
app.get("/members/:user", function(req, res) {
    db.Example.findOne({ where: { username: req.params.user } }).then(function(data) {
      $(".member-email").text(data.email);
      $(".member-username").text(data.username);
      $(".member-bio").text(data.bio);
      });
    });
