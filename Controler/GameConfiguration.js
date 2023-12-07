$(document).ready(function() {
    //TODO: Add cookies for params and load by them

    
    //PreCharge with default params
    restartGame();



    $(".btn-group label").click(function() {
        selectedOperation = $(this).find("input").attr("data-value");
    });

    $("main").on("click", "#GenerateButton", function() {
        selectedNumber = $("#numberInput").val();
        
        restartGame();
    });
});


//popup manager
$(document).ready(function() {  
    $("#closePopupBtn").click(function() {
        $(".btn-group").show();
        $("#popupContainer").hide();
        restartGame();
    });

    

    $("#HighScores").click(function() {
        $(".scoreBillboard").empty();
        //getscores data:
        let tab = getMaxScore();

        //write in html scores data
        tab.forEach(player => {
            let row = $("<p></p>").text(player.Pseudo + ": " + player.Score);
            $(".scoreBillboard").append(row);
        });

        //popup the data
        $(".btn-group").hide();
        $("#popupContainer2").fadeIn();
    });

    $("#closePopupBtn2").click(function() {
        $(".btn-group").show();
        $("#popupContainer2").hide();
        restartGame();
    });
});

