$(document).ready(function(){
    var username = $(".nameloginwhole");
    var pw = $(".passwordloginwhole");
    var email = $(".emailloginwhole");
    $(".submitlogin").on("click", function(){
        newUser({
            username: username.val().trim(),
            password: pw.val().trim(),
            email: email.val().trim()
        })
    })
    function newUser(userData){
        $.post("/api/Users", userData)
            .then(function(){
                $(document).refresh();
            });
    }
})