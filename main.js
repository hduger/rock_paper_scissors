//Global Variables

let playerCount = 0;
let compCount = 0;
let tieCount = 0;
let playerSelection;
let computerSelection;

const rock = document.getElementById('#rockButton');
rock.addEventListener("click", () => {
    playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
});
const paper = document.getElementById('#paperButton');
paper.addEventListener("click", () => {
    playerSelection = 'paper';
    console.log(playerSelection);
    playRound(playerSelection, computerSelection);
});
const scissors = document.getElementById('#scissorsButton');
scissors.addEventListener("click", () => {
    playerSelection = 'scissors';
    console.log(playerSelection);
    playRound(playerSelection, computerSelection);
});
    

// function playerSelect() {
// // let input = prompt("Choose rock, paper, or scissors", "").toLocaleLowerCase();
//     let playerSelection;

//     const rock = document.getElementById('#rockButton');
//     rock.onclick = () => playerSelection = 'rock';
//     const paper = document.getElementById('#paperButton');
//     paper.onclick = () => playerSelection = 'paper';
//     const scissors = document.getElementById('#scissorsButton');
//     scissors.onclick = () => playerSelection = 'scissors';
//     return playerSelection
// }

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
    playerSelection = playerSelection;
    computerSelection = computerPlay();
    plyScore = document.querySelector('#plrScore');
    compScore = document.querySelector('#cptScore');
    tieScore = document.querySelector('#tieCount');
        if (playerSelection==="rock" && computerSelection==="Scissors" || 
        playerSelection==="scissors" && computerSelection === "Paper" || 
        playerSelection==="paper" && computerSelection==="Rock") {
            playerCount++
            plyScore.textContent = playerCount;
            return "You win!";
        } else if (
        (playerSelection==="rock" && computerSelection === "Paper") ||
        (playerSelection==="paper" && computerSelection==="Scissors") ||
        (playerSelection==="scissors" && computerSelection==="Rock")) {
            compCount++;
            compScore.textContent = compCount;
            return "You Lose!";
        } else {
            tieCount++;
            tieScore.textContent = tieCount;
            return "Tie!";
        }



        // if (playerSelection==="paper" && computerSelection==="Scissors") {
        //     compCount++;
        //     return "You Lose! Scissors beats paper!";
        // } else if (playerSelection==="paper" && computerSelection === "Paper") {
        //     tieCount++;
        //     return "Tie";
        // } else if (playerSelection==="paper" && computerSelection==="Rock") {
        //     playerCount++;
        //     // plyScore.textContent = `${playerCount}`;
        //     return "You Win! Paper beats Rock!!";
        // }

        // if (playerSelection==="scissors" && computerSelection==="Scissors") {
        //     tieCount++;
        //     return "Tie!";
        // } else if (playerSelection==="scissors" && computerSelection === "Paper") {
        //     playerCount++;
        //     return "You Win! Scissors beats paper!";
        // } else if (playerSelection==="scissors" && computerSelection==="Rock") {
        //     compCount++;
        //     return "You Lose! Rock beats Scissors!";
        // }
    

}

// plyScore.textContent = playerCount.toString();
// compScore.textContent = compCount.toString();
// tieScore.textContent = tieCount.toString();

// function game() {
//     for (let i = 0; i < 5; i++) {
//         playRound();

//     }

// }

// if (playerCount > compCount) {
//     console.log("You have beaten the computer!");
// } else if (compCount > playerCount) {
//     consol.log("The computer has won!");
// } else { 
//     console.log("It is a tie!");
// }
// console.log(playerCount, compCount, tieCount);