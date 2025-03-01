buttonColours = ["red", "blue", "green", "yellow"]
gamepattern = []
userClickedPattern = []

function nextsequence(){
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    randomChosenColour = buttonColours[randomNumber];
    gamepattern.push(randomChosenColour);


    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    $(".btn").click(function() {
        var userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
    });

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}


nextsequence()