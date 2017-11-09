	//creates the array of playable words.
	var words = ["agumon","greymon","metalgreymon","wargreymon","gabumon","garurumon","weregarurumon","metalgarurumon","tentomon","kabuterimon","megakabuterimon","herkuleskabuterimon","palamon","tokomon","lilimon","rosemon","patamon","angemon","magnaangemon","seraphimon","salamon","gatomon","angewomon","ophanimon","biyomon","birdramon","garudamon","phoinexmon","gomamon","ikkakumon","zudomon","vikemon","omnimon","omegamon"];
	
	
	 // Randomly chooses a choice from the options array.
      var newGame = words[Math.floor(Math.random() * words.length)];
      var underScores = [];
      var correctGuess = [];
      var wrongGuess = [];
      var winCounter = 0;
	  var guessedLetters = []
	
	  
    var targetDiv = document.getElementById("underscore")
    var secondaryDiv = document.getElementById("incorrectGuess")
    document.getElementById('underscore').innerHTML = genUnderscores();

 	

 	//functions and conditions
 	console.log(newGame)

      //creates underscores for random game chosen
      function genUnderscores(){
      	for (var i = 0; i < newGame.length; i++) {
      		underScores.push("_");
      	}
      	return underScores;
      }

      // This function is run whenever the user presses a key.
    	document.addEventListener('keypress', function keyword(event) {
    		// body...
 		var keyword = String.fromCharCode(event.keyCode);

 		
 	// user guess
 	if (newGame.indexOf(keyword) > -1){
 	
 	//correct guess goes to correct letters array
 	correctGuess.push(keyword); 
  

 	//change underscore to correct letter
 	underScores[newGame.indexOf(keyword)] = keyword;
 	document.getElementById('underscore'[0]);
  targetDiv.innerHTML = underScores.join(' ');



 	if (correctGuess === newGame){
 		alert('You Win!');
    winCounter++;
 		} 
    console.log()
 	
}
 	else {

 	// incorrect guess goes to wrong letter array
 	wrongGuess.push(keyword);
 	document.getElementById('incorrectGuess'[0]);
  secondaryDiv.innerHTML = wrongGuess;

 	}

});