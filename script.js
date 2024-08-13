// ROCK PAPER SCISSORS
// by KaileenaFarah

const winnerMap = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

function getComputerChoice () {

    let num = Math.random();

    if (num <= 0.33) {
        return "rock";
    }
    else if (num > 0.33 && num <= 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice () {

    let userInput = prompt ("What do you choose? (rock, paper or scissors)");

    if (userInput === null) {
        // Handle the case where the user cancels the prompt
        console.log("No choice made. Please try again.");
        return getHumanChoice();  // Recursively ask for input until a valid choice is given
    }

    userInput = userInput.toLowerCase();

    if (userInput === "rock") {
        return "rock";
    }
    else if (userInput === "paper") {
        return "paper";
    }
    else if (userInput === "scissors") {
        return "scissors";
    }
    else {
        return "invalid choice";
    }
}

function playGame () {

    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (computerChoice === winnerMap[humanChoice]) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        return "Human wins! Hooray for humanity!";
    } else if (computerScore > humanScore) {
        return "Computer wins! The machine's defeated you...";
    } else {
        return "It's a tie. Refresh to try again.";
    }
}

console.log(playGame());