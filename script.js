function getComputerChoice() {

    const randomnr = Math.random();
    const range = 1 / 3;

    if (randomnr < range) {
        return "Rock";
    } else if (randomnr < 2 * range) {
        return "Scissors";
    } else {
        return "Paper";
    }
}

let wins = 0;
let cp_wins = 0;
let playerSelection;


function setPlayerSelection(input) {
    playerSelection = input.toLowerCase();
    let computerSelection = getComputerChoice();
    let result_of_round = playRound(playerSelection, computerSelection);

    let winsDiv = document.querySelector(".wins");
    let cpWinsDiv = document.querySelector(".cp-wins");
    let resultround = document.querySelector(".resultround");
    let result = document.querySelector(".result");


    if (result_of_round === "You won! The Computer chose: " + computerSelection) {
        wins++;
        winsDiv.textContent = wins;
        resultround.textContent = result_of_round;
    } else if (result_of_round === "You lost! The Computer chose: " + computerSelection) {
        cp_wins++;
        cpWinsDiv.textContent = cp_wins;
        resultround.textContent = result_of_round;
    }


    if (wins === 3) {
        winsDiv.textContent = "";
        cpWinsDiv.textContent = "";
        resultround.textContent = "";
        result.textContent = "Congratulations! You won the game!";
    } else if (cp_wins === 3) {
        winsDiv.textContent = "";
        cpWinsDiv.textContent = "";
        resultround.textContent = "";
        result.textContent = "Sorry, the computer won the game.";
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

