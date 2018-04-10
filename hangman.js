//Create a variable allowing us to use inquirer npm package
var inquirer = require("inquirer");
//Create a list of words from which one will be randomly chosen for the user to guess
var words = ["Google", "Amazon", "Facebook", "Netflix", "Tesla"];
var triesLeft = 10;
function start() {
    //Randomly selects a word from the words array
    var word = words[Math.floor(Math.random()*words.length)];
    //Array that will contain all the correct guesses and blanks as space fillers
    var guessArray = [];
    //Used to display guessArray in a neat string
    var guessString = "";
    for (var i=0; i<word.length; i++) {
        guessArray.push("__ ")
        guessString += guessArray[i];
    }
    console.log("Guess the tech company below by filling in the blanks!");
    console.log(word);
    console.log(guessString);
    function promptUser() {
        inquirer.prompt([
            {
                name: "letterGuess",
                message: "Guess a letter!"
            }
        ]).then(function(answers) {
            if (word.indexOf(answers.letterGuess) > -1) {
                guessArray.splice(word.indexOf(answers.letterGuess), 1, answers.letterGuess);
                console.log("Yes that letter is in the word.");
                console.log(guessArray);
                console.log(guessArray.join(""));
                promptUser();
            } else {
                triesLeft -= 1;
                console.log("Sorry that letter is not in the word.");
                console.log("Guesses left: " + triesLeft);
                promptUser();
            }
        });
    }
    promptUser();
}
start();
//The user will see a series of dashes representing the length of the secret word

//Prompt the user to guess a letter, 
//If the letter matches one of the letters in the word, replace the correct dash with that letter at the correct position.
//Else, subtract a point from the user bringing them closer to defeat 



