function getComputerChoice() {
    const rock = "Rock";
    const scissors = "Scissors";
    const paper = "Paper";

    let randomnr = Math.random();

    if (randomnr < (1/3)) {
        return rock;
    } else if (randomnr <= (2/3)){
        return scissors;
    } else if (randomnr > (2/3)){
        return paper;
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        console.log("It's a tie! The Computer chose: " + computerSelection.toString());
    } else if (playerSelection.toLowerCase() == "rock"  && computerSelection.toLowerCase() == "scissors") {
        console.log("You won! The Computer chose: " + computerSelection.toString());
    } else if (playerSelection.toLowerCase() == "rock"  && computerSelection.toLowerCase() == "paper") {
        console.log("You lost! The Computer chose: " + computerSelection.toString());
    } else if (playerSelection.toLowerCase() == "paper"  && computerSelection.toLowerCase() == "scissors") {
        console.log("You lost! The Computer chose: " + computerSelection.toString());
    } else if (playerSelection.toLowerCase() == "paper"  && computerSelection.toLowerCase() == "rock") {
        console.log("You Won! The Computer chose: " + computerSelection.toString());
    } else if (playerSelection.toLowerCase() == "scissors"  && computerSelection.toLowerCase() == "rock") {
        console.log("You lost! The Computer chose: " + computerSelection.toString());
    } else if (playerSelection.toLowerCase() == "scissors"  && computerSelection.toLowerCase() == "paper") {
        console.log("You Won! The Computer chose: " + computerSelection.toString());
    }
}

const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));