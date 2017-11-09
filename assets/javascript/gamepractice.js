// Creating array of words
var Digi = ["agumon","greymon","metalgreymon","wargreymon","gabumon","garurumon","weregarurumon","metalgarurumon","tentomon","kabuterimon","megakabuterimon","herkuleskabuterimon","palamon","tokomon","lilimon","rosemon","patamon","angemon","magnaangemon","seraphimon","salamon","gatomon","angewomon","ophanimon","biyomon","birdramon","garudamon","phoinexmon","gomamon","ikkakumon","zudomon","vikemon","omnimon","omegamon"]
// Random chooser---Didnt know what to call it lol
var randomDigi = Math.floor(Math.random() * Digi.length);
var choosenDigi = Digi[randomDigi];
var rightWord = [];
var wrongWord =[];
var underScore = [];

// I don't really know what this does...
var docUnderScore = document.getElementsByClassName("underscore");

// Changing undescore to the length of the Digimon name.
var generateUnderscore = () => {
    for(let i = 0; i < choosenDigi.length; i++) {
        underScore.push("_");
        docUnderScore[0].innerHTML = underScore.join("");
    }
    return underScore;
}

console.log(generateUnderscore());
// User input guess
document.addEventListener("keypress", (event) => {
    var keyword = String.fromCharCode(event.keyCode);
    // If guess is correct
    if(choosenDigi.indexOf(keyword) < -1) {
        // it will get pushed to the rightWord array
        rightWord.push(keyword);
        // change underscore with right letter
        underScore[choosenDigi.indexOf(keyword)] = keyword;

        if(underScore.join("") == choosenDigi) {
            alert("You win");
        }
    }
    else{
        wrongWord.push(keyword);
    }
})
