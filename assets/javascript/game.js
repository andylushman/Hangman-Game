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
document.querySelector("#guess-btn").addEventListener("click", guessOne);
document.querySelector("#next-word-btn").addEventListener("click", nextWord);
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
  document.querySelector("#message").innerHTML= "Type a letter then press guess, or press quit to stop playing."
}; //End init()

init(); //Function called when website is loaded to get the game started


function guessOne() {
  // Get a guess from the player
  var guess = document.querySelector("#guess-input").value.toLowerCase();

  if (guess.length !== 1) {
      hangman.showThisMessage ="Please enter only a single letter";
  } else {
        // Update the game with the guess
        for (i = 0; i < hangman.word.length; i++) {
            if (hangman.word[i] === guess) {
                hangman.answerArray[i] = guess;
                hangman.showThisMessage = "YES! "+guess+" is in the answer";
            }
        }

        // Update the game for remaining unknowns
        var remaining_letters = hangman.answerArray.length;
        // recount the remaining letters
        for (i = 0; i < hangman.answerArray.length; i++) {
            if (hangman.answerArray[i] !== '_') {
                remaining_letters -= 1;
            }
        }

        // if no remaining letters
        if (remaining_letters == 0) {
            hangman.showThisMessage = "YES! You guessed the word";
            wins ++;
            //Update wins
            document.querySelector("#wins").innerHTML = wins;
        }

        // (otherwise) if we have no message, wrong guess
        if (hangman.showThisMessage === "") {
            hangman.showThisMessage = "Sorry, no "+guess;
            hangman.remainingGuesses --;

            document.querySelector("#remaining-guesses").innerHTML = hangman.remainingGuesses;
        }

        // Update the puzzle
        document.querySelector("#answer").innerHTML = hangman.answerArray.join(" ");

        // Clearing out their last guess
        document.querySelector("#guess-input").value = "";
  }
  document.querySelector("#message").innerHTML = hangman.showThisMessage;

};//End guessOne()

function nextWord() {

};//End nextWord()

function quit(){
  document.querySelector("#message").innerHTML = "The word was "+ hangman.word;
  for (var j = 0; j < hangman.word.length; j++) {
      hangman.answerArray[j] = hangman.word[j];
  }
  // Solve the puzzle
  document.querySelector("#answer").innerHTML = hangman.answerArray.join(" ");
};
