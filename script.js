function getComputerChoice() {
    const rock = "Rock";
    const scissors = "Scissors";
    const paper = "Paper";

    let randomnr = Math.random();

    if (randomnr < (1 / 3)) {
        return rock;
    } else if (randomnr <= (2 / 3)) {
        return scissors;
    } else if (randomnr > (2 / 3)) {
        return paper;
    }
}

let wins = 0;
let computerSelection = getComputerChoice();
let playerSelection;
let result;

function setPlayerSelection(input) {
    playerSelection = input.toLowerCase();
    result = playRound(playerSelection, computerSelection);

    if (result === "You won! The Computer chose: " + computerSelection) {
        wins++;
    }
    if (wins >= 3) {
        console.log("You are the winner! You won " + wins + " times.")
    } else if (wins == 1) {
        console.log("Sorry, you lost! You only won " + wins + " time.")
    } else {
        console.log("Sorry, you lost! You only won " + wins + " times.")
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return ("It's a tie! The Computer chose: " + computerSelection);
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
        return ("You won! The Computer chose: " + computerSelection);
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper") {
        return ("You lost! The Computer chose: " + computerSelection);
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") {
        return ("You lost! The Computer chose: " + computerSelection);
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
        return ("You Won! The Computer chose: " + computerSelection);
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock") {
        return ("You lost! The Computer chose: " + computerSelection);
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") {
        return ("You Won! The Computer chose: " + computerSelection);
    }
}

