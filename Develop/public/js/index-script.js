$(document).ready(function(){
    user = $(".emailinput");
    pw = $(".passwordinput");

    $(".submitlogin").on("click", function(){
        checkLogin(user)
    })

    function checkLogin(username){
        $.get(`/api/User/${username}`)
    }
})