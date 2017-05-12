//Choosing a Random Word
var words = ["enduro", "downhill", "travel", "helment", "brem", "hardtail", "shred", "bonk", "clipless", "cyclocross", "doubletrack", "singletrack", "dulie", "ratchet", "snakebite", "switchback", "trackstand", "schrader", "prista" ];

var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];

for(var i = 0; i < word.length; i++){
  answerArray[i]= "_";
}

var remainingLetters = word.length


while (remainingLetters > 0) {

  // Game code goes here

  // Show the player their progress
  alert(answerArray.join(" "));

  // Take input from the player
  var guess = prompt("Guess a letter or click cancel to stop playing.")
  if(guess === null){
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter");
  } else {
    //update the game with player guess
    for(var j = 0; j < word.length; j++) {
      if(word[j] === guess) {
        answerArray[j] = guess;
        // Update answerArray and remainingLetters for every correct guess
        remainingLetters --;
      }
    }
  }//End Else block
} //End While loop

alert(answerArray.join(""));
alert("Great job! The answer was " + word);
