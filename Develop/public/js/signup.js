$(document).ready(function() {
  var signUpForm = $("form.signup");
  var emailInput = $("input#email");
  var usernameInput = $("input#username");
  var passwordInput = $("input#password");
  var bioInput = $("input#bio");
  
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      username: usernameInput.val().trim()
      //bio: bioInput.val()
    };

    if (!userData.email || !userData.password || userData.username) {
      return;
    }
    signUpUser(userData.email, userData.password, userData.username);
    emailInput.val("");
    passwordInput.val("");
    usernameInput.val("");
    //bioInput.val("");
  });

  function signUpUser(email, password, username) {
    $.post("/api/signup", {
      email: email,
      password: password,
      username: username
      //bio: bio
    })
      .then(function(data) {
        window.location.replace("/members");
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
