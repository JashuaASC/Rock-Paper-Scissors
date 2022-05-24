// Initial Score
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomOption = Math.floor(Math.random() * options.length);
    computerOption = options[randomOption]
    return computerOption;
}

function playerPlay() {
    let playerOption = prompt("Rock, Paper, Scissors?");
    return playerOption.charAt(0).toUpperCase() + playerOption.substr(1).toLowerCase();
}

function playRound(computerSelection,playerSelection) {
    console.log("Rock, Paper, Scissors");
    console.log("---------------------");
    console.log(`The computer chose ${computerSelection}`);
    console.log(`You chose ${playerSelection}`);

    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") { // Rock vs. Scissors
        console.log(`You win! ${playerSelection} beats ${computerSelection}`); 
        playerScore++;
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper") { // Rock vs. Paper
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        computerScore++;
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") { // Paper vs. Rock
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") { // Paper vs. Scissors
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        computerScore++;
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock") { // Scissors vs. Rock
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        computerScore++;
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") { // Scissors vs. Paper
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
    } else { // Draw
        console.log(`Draw! You both selected the same thing!`);
    }
        
}

function game() {
    for (let i = 0; i < 5; i++) {

        const computerSelection = computerPlay();
        const playerSelection = playerPlay();

        playRound(computerSelection,playerSelection);

        console.log(`Player: ${playerScore} - Computer: ${computerScore}`)
     }
}

game();