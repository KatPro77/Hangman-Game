//ARRAY AND VARIABLES
var nameIndex = ["captainamerica", "ironman", "thor", "blackwidow", "gamora", "nebula", "spiderman", "blackpanther", "hulk"];
var selectedWord = "";
var lettersinWord = [];
var guessedLetters = [];        
var wrongLetters =[];
var blanks = 0;
var blankSpaces = [];

const maxTries = 12;            // Maximum number of tries player has

              

//counts
var wins = 0;                   // Number of wins 
var loss = 0;                   // Number of losses
var guessesLeft = 12;            // How many tries the player has left



//FUNCTIONS
function gameStart () {
    selectedWord = nameIndex[Math.floor(Math.random() * nameIndex.length)];
    lettersinWord = selectedWord.split("");
    blanks = lettersinWord.length;

    //restart
    guessesLeft = 12;
    wrongLetters = [];
    blankSpaces = [];

    //blank spaces with correct number of blanks
    for (var i = 0; i < blanks; i++) {
        blankSpaces.push("_");
    }

    //incorporate html file
    document.getElementById("WordToGuess").innerHTML = blankSpaces.join(" ");
    document.getElementById("userGuesses").innerHTML = guessedLetters;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("loss").innerHTML = loss;


    // console.log testing
    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(blanks);
    console.log(blankSpaces);
}

//verify letter placement in the word
function verifyLetters(letter) {

    var lettersinWord = false;
    for (var i = 0; i < blanks; i++) {
        if(selectedWord[i] == letter) {
            lettersinWord = true;
            alert("Letter found");
        }
    }

    if(lettersinWord) {
        for (var i = 0; i < blanks; i++) {
            if(selectedWord[i] == letter) {
                blankSpaces[i] = letter;
        }

    }

}
   
// if the letter is not in the word perform else
    else {
        wrongLetters.push(letter);
        guessedLetters --
    }

console.log(blankSpaces);
}

function nextRound() {
    console.log("Wins: " + wins + " | Losses: " + loss + " | Guesses Left: " + guessesLeft); 

    //update htmls file
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("WordToGuess").innerHTML = blankSpaces.join(" ");


    //winning round
    if (lettersinWord.toString() == blankSpaces.toString()) {
        wins++;
        alert("You Win!!!");

        // also update win counts in the html
        document.getElementById("wins").innerHTML = wins;

        gameStart();
    }

    else if (guessesLeft == 0) {
        loss++;
        alert("Game Over!");

        // update loss count
        document.getElementById("loss").innerHTML = loss;
        
        gameStart();
    }
}


//Game Steps
gameStart();

//include onkeyup function
document.onkeyup = function(event) {
    var guessedLetters = String.fromCharCode(event.keyCode).toLowerCase();
        //Check for lower case: 
        // alert(guessedLetters);
    nextRound(guessedLetters); 

    console.log(guessedLetters);
}

