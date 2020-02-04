$(document).ready(function(){
    user = $(".emailinput");
    pw = $(".passwordinput");

    $(".submitlogin").on("click", function(){
        checkLogin(user.val())
    })
    // this is the least secure shit I've ever seen
    function checkLogin(username){
        $.get(`/api/User/${username}`)
        .then(response=>{
            if (response.password === pw.val()){
                $(head).setClass(`loggedin${response.id}`)
            }
        })
    }
})