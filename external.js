function computerPlay() {
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
}




console.log(computerPlay());



function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! You both picked ${playerSelection}`; 
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper";
    } else {
        return 'You lose! ${computerSelection} beats ${playerSelection}';
    } 
}

const playerSelection = prompt("Start the game picking either 'Rock, Paper, Scissors`").toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))


function game() {
    for (let i = 0; i < 5; i++) {
        const playerPlay = playerSelection();
        const computerPlay = computerSelection();
        const currentRound = playRound(playerPlay, computerPlay);
        console.log(currentRound);
    }
}