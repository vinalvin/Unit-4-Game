var wins = 0;
var losses = 0;
var random = [];
var crystals = [];

//The player will be shown a random number at the start of the game.

function startGame() {
    var randomNum = Math.floor(Math.random() * 102) + 19;
    random.push(randomNum);
}

var score;
var guesses;

function pushText() {
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#score").text(score);
    $("#guesses").text(guesses);
}

$(".crystals img").click.function(
    var goingIMG = $(this).attr("data-type");

    total += crystals[goingIMG]
)