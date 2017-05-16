/******************
Global Variables
******************/

var hangman = {
  "words": [
            "enduro", "downhill", "travel", "helment", "berm", "hardtail", "shred", "bonk", "clipless", "cyclocross", "doubletrack", "singletrack", "dulie", "ratchet", "snakebite", "switchback", "trackstand", "schrader", "prista" ],
  "word": "",
  "answerArray": [],
  "wins": 0,
  "remainingGuesses": 10,
  "lettersGuessed": [],
  "images": [],
  "showThisMessage": "",
};

/******************
Event Listeners
******************/
document.querySelector("#guess-btn").addEventListener("click", guess);
document.querySelector("#quit-btn").addEventListener("click", quit);


/******************
FUNCTIONS
******************/

//Initialization
function init(){
  // Pick a random word
  hangman.word = hangman.words[Math.floor(Math.random() * hangman.words.length)];
  // Set up the answer array
  for (var i = 0; i < hangman.word.length; i++) {
    hangman.answerArray[i] = "_";
  }
  document.querySelector("#answer").innerHTML= hangman.answerArray.join(" ");
  document.querySelector("#message").innerHTML= "Type a letter then press Guess, or press Quit to stop playing."
  document.querySelector("#remaining-guesses").innerHTML = hangman.remainingGuesses;
  document.querySelector("#wins").innerHTML = hangman.wins;
}; //End init()

init(); //Function called when website is loaded to get the game started


function guess() {
  // Get a guess from the player
  hangman.showThisMessage = "";

  var userGuess = document.querySelector("#guess-input").value.toLowerCase();

  if (userGuess.length !== 1) {
      hangman.showThisMessage ="Please enter only a single letter";
  } else {
        // Update the game with the guess
        for (i = 0; i < hangman.word.length; i++) {
            if (hangman.word[i] === userGuess) {
                hangman.answerArray[i] = userGuess;
                hangman.showThisMessage = "NICE! "+ userGuess + " is in the answer";
                hangman.lettersGuessed.push(userGuess);
                document.querySelector("#letters-guessed").innerHTML = hangman.lettersGuessed;
            }
        }

        // Update the game for remaining unknowns
        var remainingLetters = hangman.answerArray.length;
        // recount the remaining letters
        for (i = 0; i < hangman.answerArray.length; i++) {
            if (hangman.answerArray[i] !== '_') {
                remainingLetters -= 1;
            }
        }

        // if no remaining letters
        if (remainingLetters === 0) {
            hangman.showThisMessage = "Awesome! You guessed the word";
            hangman.wins ++; //Update wins
            document.querySelector("#wins").innerHTML = hangman.wins;
            //End of round
            //New Random word
            hangman.word = hangman.words[Math.floor(Math.random() * hangman.words.length)];
            // Set up the answer array
            for (var i = 0; i < hangman.word.length; i++) {
              hangman.answerArray[i] = "_";
            }

            //Display new Random word
            document.querySelector("#answer").innerHTML= hangman.answerArray.join(" ");
            document.querySelector("#message").innerHTML= "Type a letter then press Guess, or press Quit to stop playing."
            //Reset number of guesses and letters guessed. Aslo, clear out previous guess!
            // hangman.remainingGuesses = 0;
            // hangman.lettersGuessed = [];

        }

        // (otherwise) if we have no message, wrong guess
        if (hangman.showThisMessage === "") {
            hangman.showThisMessage = "Sorry, no "+ userGuess;
            hangman.remainingGuesses --;
            //Update number of remainingGuesses
            document.querySelector("#remaining-guesses").innerHTML = hangman.remainingGuesses;
            //Update number of lettersGuessed
            hangman.lettersGuessed.push(userGuess);
            document.querySelector("#letters-guessed").innerHTML = hangman.lettersGuessed;
        }

        if (hangman.remainingGuesses === 0){
            hangman.showThisMessage = "Sorry, you are out of guesses";
            quit();
        }

        // Update the puzzle
        document.querySelector("#answer").innerHTML = hangman.answerArray.join(" ");

        // Clearing out their last guess
        document.querySelector("#guess-input").value = "";
  }
  document.querySelector("#message").innerHTML = hangman.showThisMessage;

};//End guess()


function quit(){
  document.querySelector("#message").innerHTML = "The word was "+ hangman.word;
  for (var j = 0; j < hangman.word.length; j++) {
      hangman.answerArray[j] = hangman.word[j];
  }
  // Solve the puzzle
  document.querySelector("#answer").innerHTML = hangman.answerArray.join(" ");
}; //End quit()

//To do: Images and how to play another round?
