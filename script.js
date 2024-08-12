// ROCK PAPER SCISSORS

let choice1 = "rock";
let choice2 = "paper";
let choice3 = "scissors"

function getComputerChoice () {
    let num = Math.random();
    if (num <= 0.33) {
        return choice1;
    }
    else if (num > 0.33 && num <= 0.66) {
        return choice2;
    }
    else {
        return choice3;
    }
}

console.log(getComputerChoice());


function getHumanChoice () {

    let userInput =  prompt ("What do you choose? (rock, paper or scissors)");
    userInput = userInput.toLowerCase();

    if (userInput === "rock") {
        return choice1;
    }
    else if (userInput === "paper") {
        return choice2;
    }
    else if (userInput === "scissors") {
        return choice3;
    }
    else {
        return "Invalid choice";
    }

  }

//getHumanChoice();
console.error(getHumanChoice());
//Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
//Hint: Use the prompt method to get the user’s input.
//Test what your function returns by using console.log.

//Step 3: Declare the players score variables
//Create two new variables named humanScore and computerScore in the global scope.
//Initialize those variables with the value of 0.
let humanScore = 0;
let computerScore = 0;

//Step 4: Write the logic to play a single round
//Create a new function named playRound.
function playRound (humanChoice, computerChoice) {
    

}
//Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
//Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
//Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
//Increment the humanScore or computerScore variable based on the round winner.

//Step 5: Write the logic to play the entire game
//Create a new function named playGame.
//Move your playRound function and score variables so that they’re declared inside of the new playGame function
//Play 5 rounds by calling playRound 5 times.
//Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
//Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
//If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.