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

let rounds = 0;
let wins = 0;
let cp_wins = 0;
let ties = 0;

function setPlayerSelection(input) {
    const playerSelection = input.toLowerCase();
    console.log(playerSelection);
    playGame(playerSelection);
}

function playGame(playerSelection) {
    const computerSelection = getComputerChoice();
    const result_of_round = playRound(playerSelection, computerSelection);

    console.log(playerSelection, computerSelection, result_of_round);

    const roundDiv = document.querySelector(".round");
    const winsDiv = document.querySelector(".wins");
    const cpWinsDiv = document.querySelector(".cp-wins");
    const resultround = document.querySelector(".resultround");
    const result = document.querySelector(".result");

    resultround.textContent = result_of_round;

    if (result_of_round.includes("You won!")) {
        wins++;
        rounds++;
    } else if (result_of_round.includes("You lost!")) {
        cp_wins++;
        rounds++;
    } else {
        ties++;
        rounds++;
    }

    roundDiv.textContent = "Round: " + rounds;
    winsDiv.textContent = wins;
    cpWinsDiv.textContent = cp_wins;

    if (wins >= 5) {
        roundDiv.textContent = "";
        winsDiv.textContent = "";
        cpWinsDiv.textContent = "";
        resultround.textContent = "";
        result.textContent = "Congratulations! You won the game! Reload the page to restart";
    } else if (cp_wins >= 5) {
        roundDiv.textContent = "";
        winsDiv.textContent = "";
        cpWinsDiv.textContent = "";
        resultround.textContent = "";
        result.textContent = "Sorry, the computer won the game. Reload the page to restart";
    }
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie! The Computer chose: " + computerSelection;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
               (playerSelection === "paper" && computerSelection === "rock") ||
               (playerSelection === "scissors" && computerSelection === "paper")) {
        return "You won! The Computer chose: " + computerSelection;
    } else {
        return "You lost! The Computer chose: " + computerSelection;
    }
}