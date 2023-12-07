$(document).ready(function() {
    //Check if you are logged
    if(isCookiePresent("login"))
    {
        let login = getCookie("login");

        loadMainPage(login);
        $("#message").text(`Bienvenue, ${login} !`).css("color", "green");
    }
    else{
        loadLoginPage();
    }


    //Event Click on Login Buttons
    $("main").on("click", "#LoginButton", function(event){
        event.preventDefault();

        //Get Login value of the form
        let login = $("#login").val();

        if (login.trim() === "") {
            $("#message").text("Le pseudo ne peut pas être vide.").css("color", "red");

        } else {        
            setCookie("login", login, 1); //login set to the session
            loadMainPage(login);
            $("#message").text(`Bienvenue, ${login} !`).css("color", "green");
        }
    });

    

    //Event Click on Disconnect button
    $("header").on("click", "#DisconnectButton", function(event){
        event.preventDefault();

        deleteCookie("login");
        loadLoginPage();
    });
});