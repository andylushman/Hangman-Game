var hangman = {
  "words": [
            "enduro", "downhill", "travel", "helment", "berm", "hardtail", "shred", "bonk", "clipless", "cyclocross", "doubletrack", "singletrack", "dulie", "ratchet", "snakebite", "switchback", "trackstand", "schrader", "prista" ],
  "word": "",
  "answerArray": [],
  "wins": 0,
  "remainingGuesses": 10,
  "lettersGuessed": [],
};



//Functions

//Initialization
function init(){
  // Pick a random word
  hangman.word = hangman.words[Math.floor(Math.random() * hangman.words.length)];
  // Set up the answer array
  for (var i = 0; i < hangman.word.length; i++) {
    hangman.answerArray[i] = "_";
  }
  document.getElementById("answer").innerHTML= hangman.answerArray.join(" ");
  document.getElementById("message").innerHTML= "Type a letter then press guess, or press quit to stop playing."
}; //End init()

init(); //Function called when website is loaded to get the game started
