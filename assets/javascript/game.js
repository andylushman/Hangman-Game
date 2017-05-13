//Word Bank
var words = ["enduro", "downhill", "travel", "helment", "berm", "hardtail", "shred", "bonk", "clipless", "cyclocross", "doubletrack", "singletrack", "dulie", "ratchet", "snakebite", "switchback", "trackstand", "schrader", "prista" ];

// word stores the word we want the player to guess
var word="";
// answerArray stores the answer board (starting with all _ and gradually filled in)
var answerArray = [];
//Wins = 0 at the beginning of the game
var wins = 0;
//Player should have 10 guesses for each round
var remainingGuesses = 10;

//Initialization
function init(){
  // Pick a random word
  word = words[Math.floor(Math.random() * words.length)];
  // Set up the answer array
  answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  document.getElementById("answer").innerHTML= answerArray.join(" ");
  document.getElementById("message").innerHTML= "Type a letter then press guess, or press quit to stop playing."
}
init(); //Function called when website is loaded to get the game started

function guessOne() {
    // Get a guess from the player
    var guess = document.getElementById("guess").value;
    var showThisMessage = "";

  if (guess.length !== 1) {
      showThisMessage ="Please enter only a single letter";
  } else {
        // Update the game with the guess
        for (i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                answerArray[i] = guess;
                showThisMessage = "YES! "+guess+" is in the answer";
            }
        }

        // Update the game for remaining unknowns
        var remaining_letters = answerArray.length;
        // recount the remaining letters
        for (i = 0; i < answerArray.length; i++) {
            if (answerArray[i] !== '_') {
                remaining_letters -= 1;
            }
        }

        // if no remaining letters
        if (remaining_letters == 0) {
            showThisMessage = "YES! You guessed the word";
            wins ++;
            //Update wins
            document.getElementById("wins").innerHTML = wins;
        }

        // (otherwise) if we have no message, wrong guess
        if (showThisMessage === "") {
            showThisMessage = "Sorry, no "+guess;
            remainingGuesses --;

            document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
        }

        // Update the puzzle
        document.getElementById("answer").innerHTML = answerArray.join(" ");

        // Clearing out their last guess
        document.getElementById("guess").value = "";
  }
  document.getElementById("message").innerHTML = showThisMessage;
}

function quit() {
    document.getElementById("message").innerHTML = "The word was "+word;
    for (var j = 0; j < word.length; j++) {
        answerArray[j] = word[j];
    }
    // Solve the puzzle
    document.getElementById("answer").innerHTML = answerArray.join(" ");
}
