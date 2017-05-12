//Declaring Variables
var answerArray = [];
var wins = 0;
var remainingGuesses = 10;

  //Word Bank
var words = ["enduro", "downhill", "travel", "helment", "brem", "hardtail", "shred", "bonk", "clipless", "cyclocross", "doubletrack", "singletrack", "dulie", "ratchet", "snakebite", "switchback", "trackstand", "schrader", "prista" ];

  //Chosing a random word
var word = words[Math.floor(Math.random() * words.length)];

  //Create _ for each random letter in the word
for(var i = 0; i < word.length; i++){
  answerArray[i]= "_";
}

var blankWord = answerArray.join(" ");

  //How many letters left
var remainingLetters = word.length

//Insert content into index.html
var html = "<p>Press any key to get started!</p>" +
            "<p> Wins: " wins +
            "<p>Current Word</p>" + "<br>" +
            blankWord;
            "<p>Numpber of Guesses Remaining</p>" + "<br>" +
            remainingLetters;
            "<p>Letters Already Guessed</p>";

document.querySelector("#game-interface").innerHTML =  html;


//Game Loop
while (remainingGuesses > 0) {

  // Take input from the player
    document.onkeyup = function(event) {
      // Determines which key was pressed
      var userGuess = event.key;

    if(userGuess === null){
      break;
    } else {
      //update the game with player guess
      for(var j = 0; j < word.length; j++) {
        if(word[j] !== userGuess){
          remainingGuesses --;
        }
        if(word[j] === guess) {
          answerArray[j] = guess;
          remainingGuesses --;
        }
      } wins ++;
    }//End For Loop
  }//End function
}//End While loop
