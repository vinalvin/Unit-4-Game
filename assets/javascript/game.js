var numToGuess;
var total;
var crystals;
var wins = 0;
var losses = 0;

function randomNumberGenerator(min, max) {
    // Math.floor( Math.random () * (max - min + 1)) + min)
    return Math.floor(Math.random() * (max - min + 1)) + min; //2-10
}

function start() {
    numToGuess = randomNumberGenerator(19, 120);
    total = 0;

    //Each crystal has a random hidden value between 1 - 12
    crystals = [];
    for (var i = 0; i < 4; i++) {
        crystals.push(randomNumberGenerator(1, 12));
    }
    console.log(crystals);
}

function render() {
    $('.numberToGuess').text(numToGuess);
    $('.totalScore').text(total);
    $('.wins').text(wins);
    $('.losses').text(losses);
}

//When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
$('.crystals img').on('click', function () {
    var val = $(this).attr('data-type');
    // console.log(crystals[val]);

    total += crystals[val]
    console.log(total);
    render()

    //player wins if their total score matches the random number
    if (total === numToGuess) {
        console.log('Win!!')
        wins++;
        //game restarts whenever the player wins
        start()
        render()

        //player loses if their score goes above the random number  
    } else if (total > numToGuess) {
        console.log('You lose, Try it again!!')
        losses++;
        //game restarts whenever the player losses
        start();
        render()
    }
})

//sound will play when clicking on crystals
function play() {
    var audio = document.getElementById('audio');
    audio.play();
}

start()
render()