$(document).ready(function(){
    var username = $(".nameinput");
    var pw = $(".passwordinput");
    var email = $(".emailinput");

    $(".submitlogin").on("click", function(){
        user = username.val().trim();
        password = pw.val().trim();
        emails = email.val().trim();
        
        newUser({
            'username': user,
            'password': password,
            'email': emails
        });
    });

    function newUser(userData){
        console.log(userData);
        $.post("/api/User", userData)
            .then(function(res, err){
                // if (err) {
                //     $.(doc)
                // }
            });
    }
})