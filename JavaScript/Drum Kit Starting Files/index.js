
for(var i = 0; i < 7; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

        var buttonINNERHTML = this.innerHTML;

        makesound(buttonINNERHTML);

        buttonAnimation(buttonINNERHTML);
    });

}

document.addEventListener("keypress", function (event){
    makesound(event.key);
    buttonAnimation(event.key);
});


function makesound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();

        default:
            break;
    }
}

function buttonAnimation(currentkey){
    var howerBUTTON = document.querySelector("." + currentkey)
    howerBUTTON.classList.add("pressed");
    setTimeout(function(){
        howerBUTTON.classList.remove("pressed",100);
    });
}