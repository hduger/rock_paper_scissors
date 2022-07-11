//Global Variables

let playerCount = 0;
let compCount = 0;
let tieCount = 0;

function playerSelect() {
let input = prompt("Choose rock, paper, or scissors", "").toLocaleLowerCase();
return input;
}

// This function picks a random number between 1 and 3
//and it assigns rock, paper, or scissors based on the number
function computerPlay() {
let randNum = Math.floor(Math.random() * 3) + 1;
if (randNum === 3){
    return "Rock";
} else if (randNum === 2) {
    return "Paper";
} else {
    return "Scissors";
}
}


function playRound() {
const playerSelection = playerSelect();
const computerSelection = computerPlay();
if (playerSelection==="rock" && computerSelection==="Scissors") {
    playerCount++;
    return "You win! Rock beats Scissors!";
} else if (playerSelection==="rock" && computerSelection === "Paper") {
    compCount++;
    return "You Lose! Paper beats Rock!";
} else if (playerSelection==="rock" && computerSelection==="Rock") {
    tieCount++;
    return "Tie!";
}

if (playerSelection==="paper" && computerSelection==="Scissors") {
    compCount++;
    return "You Lose! Scissors beats paper!";
} else if (playerSelection==="paper" && computerSelection === "Paper") {
    tieCount++;
    return "Tie";
} else if (playerSelection==="paper" && computerSelection==="Rock") {
    playerCount++;
    return "You Win! Paper beats Rock!!";
}

if (playerSelection==="scissors" && computerSelection==="Scissors") {
    tieCount++;
    return "Tie!";
} else if (playerSelection==="scissors" && computerSelection === "Paper") {
    playerCount++;
    return "You Win! Scissors beats paper!";
} else if (playerSelection==="scissors" && computerSelection==="Rock") {
    compCount++;
    return "You Lose! Rock beats Scissors!";
}

}


function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());

    }

}
game();

if (playerCount > compCount) {
    console.log("You have beaten the computer!");
} else if (compCount > playerCount) {
    consol.log("The computer has won!");
} else { 
    console.log("It is a tie!");
}
console.log(playerCount, compCount, tieCount);